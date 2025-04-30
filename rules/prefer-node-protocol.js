import {isBuiltin} from 'node:module';
import {isStaticRequire, isMethodCall} from './ast/index.js';

const MESSAGE_ID = 'prefer-node-protocol';
const messages = {
	[MESSAGE_ID]: 'Prefer `node:{{moduleName}}` over `{{moduleName}}`.',
};
const NODE_PROTOCOL = 'node:';

// These are being removed from node, so users should use the equivalent
// npm package instead
const ignoredBuiltins = new Set(['punycode']);
const checkNode = (node, context) => {
	const {value} = node;

	if (
		!(
			typeof value === 'string' &&
			!value.startsWith(NODE_PROTOCOL) &&
			isBuiltin(value) &&
			isBuiltin(`${NODE_PROTOCOL}${value}`) &&
			!ignoredBuiltins.has(value)
		)
	) {
		return;
	}

	const insertPosition = context.sourceCode.getRange(node)[0] + 1; // After quote
	context.report({
		node,
		messageId: MESSAGE_ID,
		data: {moduleName: value},
		/** @param {import('eslint').Rule.RuleFixer} fixer */
		fix: (fixer) =>
			fixer.insertTextAfterRange(
				[insertPosition, insertPosition],
				NODE_PROTOCOL,
			),
	});
};

const create = (context) => ({
	'ImportDeclaration, ExportNamedDeclaration, ImportExpression'(node) {
		if (node.source?.type !== 'Literal') {
			return;
		}
		checkNode(node.source, context);
	},
	CallExpression(node) {
		if (
			!isMethodCall(node, {
				object: 'process',
				method: 'getBuiltinModule',
				argumentsLength: 1,
				optionalCall: false,
				optionalMember: false,
			}) &&
			!isStaticRequire(node)
		) {
			return;
		}

		const [argument] = node.arguments;

		if (argument === undefined || argument.type !== 'Literal') {
			return;
		}

		checkNode(argument, context);
	},
});

/** @type {import('eslint').Rule.RuleModule} */
const config = {
	create,
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Prefer using the `node:` protocol when importing Node.js builtin modules.',
			recommended: true,
		},
		fixable: 'code',
		messages,
	},
};

export default config;
