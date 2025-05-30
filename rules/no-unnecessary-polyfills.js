import path from 'node:path';
import coreJsCompat from 'core-js-compat';
import isStaticRequire from './ast/is-static-require.js';
import {readPackageJson} from './shared/package-json.js';

const {data: compatData, entries: coreJsEntries} = coreJsCompat;

const MESSAGE_ID_POLYFILL = 'unnecessaryPolyfill';
const MESSAGE_ID_CORE_JS = 'unnecessaryCoreJsModule';
const messages = {
	[MESSAGE_ID_POLYFILL]: 'Use built-in instead.',
	[MESSAGE_ID_CORE_JS]:
		'All polyfilled features imported from `{{coreJsModule}}` are available as built-ins. Use the built-ins instead.',
};

const additionalPolyfillNames = new Map([
	['es.promise.finally', 'p-finally'],
	['es.object.set-prototype-of', 'setprototypeof'],
	['es.string.code-point-at', 'code-point-at'],
]);
const additionalPolyfills = new Map();
const polyfills = Object.keys(compatData).map((feature) => {
	const [ecmaVersion, constructorName, methodName = ''] = feature.split('.');

	let normalisedMethodName;
	const normalisedConstructorName = constructorName.replaceAll('-', '');

	if (methodName) {
		normalisedMethodName = methodName.replaceAll('-', '');
	}

	const polyfill = {
		constructorName,
		feature,
		methodName,
		ecmaVersion,
		normalisedConstructorName,
		normalisedMethodName,
	};
	const additionalPolyfill = additionalPolyfillNames.get(feature);

	if (additionalPolyfill !== undefined) {
		additionalPolyfills.set(additionalPolyfill, polyfill);
	}

	return polyfill;
});
const modulePrefixSuffix = /(^mdn-polyfills\/|polyfill-)|(-polyfill$)/gi;
const modulePrefixPattern = /^(?<version>[a-z]+)\d*[./-]/i;
const delimiters = ['-', '/', '.prototype.', '.'];
const matchesPolyfillName = (
	moduleName,
	polyfill,
	moduleVersion,
	modulePrefix,
) => {
	const {
		constructorName,
		ecmaVersion,
		methodName,
		normalisedConstructorName,
		normalisedMethodName,
	} = polyfill;

	let withoutVersion = moduleName;

	if (moduleVersion === ecmaVersion) {
		withoutVersion = moduleName.slice(modulePrefix.length);
	}

	if (
		!withoutVersion.startsWith(constructorName) &&
		!withoutVersion.startsWith(normalisedConstructorName)
	) {
		return false;
	}

	if (
		moduleVersion &&
		(withoutVersion === constructorName ||
			withoutVersion === normalisedConstructorName)
	) {
		return true;
	}

	for (const delimiter of delimiters) {
		if (
			withoutVersion === `${constructorName}${delimiter}${methodName}` ||
			withoutVersion ===
				`${constructorName}${delimiter}${normalisedMethodName}` ||
			withoutVersion ===
				`${normalisedConstructorName}${delimiter}${normalisedMethodName}` ||
			withoutVersion === `${normalisedConstructorName}${delimiter}${methodName}`
		) {
			return true;
		}
	}

	return false;
};
const findPolyfill = (moduleName) => {
	const moduleNameLower = moduleName.toLowerCase();
	const normalisedModuleName = moduleNameLower.replaceAll(
		modulePrefixSuffix,
		'',
	);
	const modulePrefix = moduleName.match(modulePrefixPattern);

	for (const [name, polyfill] of additionalPolyfills) {
		if (moduleNameLower === name) {
			return polyfill;
		}
	}

	for (const polyfill of polyfills) {
		const {
			constructorName,
			methodName,
			normalisedConstructorName,
			normalisedMethodName,
		} = polyfill;

		if (normalisedModuleName !== moduleNameLower) {
			const methodOrConstructor = methodName || constructorName;
			const normalisedMethodOrConstructor =
				normalisedMethodName || normalisedConstructorName;
			if (
				normalisedModuleName === methodOrConstructor ||
				normalisedModuleName === normalisedMethodOrConstructor
			) {
				return polyfill;
			}
		}

		if (
			matchesPolyfillName(
				normalisedModuleName,
				polyfill,
				modulePrefix?.groups.version,
				modulePrefix?.[0],
			)
		) {
			return polyfill;
		}
	}

	return;
};

function getTargets(options, dirname) {
	if (options?.targets) {
		return options.targets;
	}

	const packageJsonResult = readPackageJson(dirname);

	if (!packageJsonResult) {
		return;
	}

	const {browserslist, engines} = packageJsonResult.packageJson;
	return browserslist ?? engines;
}

function checkNode(node, context, unavailableFeatures) {
	const importedModule = node.value;
	if (
		typeof importedModule !== 'string' ||
		['.', '/'].includes(importedModule[0])
	) {
		return;
	}

	const coreJsModuleFeatures =
		coreJsEntries[importedModule.replace('core-js-pure', 'core-js')];
	const checkFeatures = (features) =>
		!features.every((feature) => unavailableFeatures.includes(feature));

	if (coreJsModuleFeatures) {
		if (coreJsModuleFeatures.length > 1) {
			if (checkFeatures(coreJsModuleFeatures)) {
				context.report({
					node,
					messageId: MESSAGE_ID_CORE_JS,
					data: {
						coreJsModule: importedModule,
					},
				});
			}
		} else if (!unavailableFeatures.includes(coreJsModuleFeatures[0])) {
			context.report({node, messageId: MESSAGE_ID_POLYFILL});
		}

		return;
	}

	const polyfill = findPolyfill(importedModule);
	if (polyfill) {
		const [, namespace, method = ''] = polyfill.feature.split('.');
		const features =
			coreJsEntries[`core-js/full/${namespace}${method && '/'}${method}`];

		if (features && checkFeatures(features)) {
			context.report({node, messageId: MESSAGE_ID_POLYFILL});
		}
	}
}

function create(context) {
	const targets = getTargets(
		context.options[0],
		path.dirname(context.filename),
	);
	if (!targets) {
		return {};
	}

	let unavailableFeatures;
	try {
		unavailableFeatures = coreJsCompat({targets}).list;
	} catch {
		// This can happen if the targets are invalid or use unsupported syntax like `{node:'*'}`.
		return {};
	}

	return {
		'ImportDeclaration, ImportExpression'(node) {
			if (node.source.type !== 'Literal') {
				return;
			}

			checkNode(node.source, context, unavailableFeatures);
		},
		CallExpression(node) {
			if (!isStaticRequire(node)) {
				return;
			}

			const [argument] = node.arguments;

			checkNode(argument, context, unavailableFeatures);
		},
	};
}

const schema = [
	{
		type: 'object',
		additionalProperties: false,
		required: ['targets'],
		properties: {
			targets: {
				oneOf: [
					{
						type: 'string',
					},
					{
						type: 'array',
					},
					{
						type: 'object',
					},
				],
			},
		},
	},
];

/** @type {import('eslint').Rule.RuleModule} */
const config = {
	create,
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Enforce the use of built-in methods instead of unnecessary polyfills.',
			recommended: true,
		},
		schema,
		// eslint-disable-next-line eslint-plugin/require-meta-default-options
		defaultOptions: [],
		messages,
	},
};

export default config;
