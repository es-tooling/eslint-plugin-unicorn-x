import fs, {promises as fsAsync} from 'node:fs';
import path from 'node:path';
import {test, assert, beforeAll} from 'vitest';
import {ESLint} from 'eslint';
import eslintPluginUnicorn from '../index.js';

let ruleFiles;

beforeAll(async () => {
	const files = await fsAsync.readdir('rules');
	ruleFiles = files.filter(file => path.extname(file) === '.js' && path.basename(file) !== 'index.js');
});

const ignoredRules = [
	'no-nested-ternary',
	'no-negated-condition',
];

const deprecatedRules = Object.entries(eslintPluginUnicorn.rules)
	.filter(([, {meta: {deprecated}}]) => deprecated)
	.map(([ruleId]) => ruleId);

const RULES_WITHOUT_EXAMPLES_SECTION = new Set([
	// Doesn't show code samples since it's just focused on filenames.
	'filename-case',

	// Intended to not use `Examples` section in this rule.
	'prefer-modern-math-apis',
	'prefer-math-min-max',
	'consistent-existence-index-check',
	'prefer-global-this',
	'no-instanceof-builtins',
	'no-named-default',
	'consistent-assert',
	'no-accessor-recursion',
	'consistent-date-clone',
]);

test('Every rule is defined in index file in alphabetical order', () => {
	for (const file of ruleFiles) {
		const name = path.basename(file, '.js');
		assert.ok(eslintPluginUnicorn.rules[name], `'${name}' is not exported in 'index.js'`);
		if (!deprecatedRules.includes(name)) {
			assert.ok(
				eslintPluginUnicorn.configs.recommended.rules[`unicorn/${name}`],
				`'${name}' is not set in the recommended config`,
			);
		}

		assert.ok(fs.existsSync(path.join('docs/rules', `${name}.md`)), `There is no documentation for '${name}'`);
		assert.ok(fs.existsSync(path.join('test', file.replace(/\.js$/, '.js'))), `There are no tests for '${name}'`);
	}

	assert.strictEqual(
		Object.keys(eslintPluginUnicorn.rules).length - deprecatedRules.length,
		ruleFiles.length,
		'There are more exported rules than rule files.',
	);
	assert.strictEqual(
		Object.keys(eslintPluginUnicorn.configs.recommended.rules).length - deprecatedRules.length - ignoredRules.length,
		ruleFiles.length - deprecatedRules.length,
		'There are more exported rules in the recommended config than rule files.',
	);
	assert.strictEqual(
		Object.keys(eslintPluginUnicorn.configs.all.rules).length - deprecatedRules.length - ignoredRules.length,
		ruleFiles.length - deprecatedRules.length,
		'There are more rules than those exported in the all config.',
	);
});

test('validate configuration', async () => {
	const results = await Promise.all(
		Object.entries(eslintPluginUnicorn.configs).map(async ([name, config]) => {
			const eslint = new ESLint({
				baseConfig: config,
				overrideConfigFile: true,
			});

			const result = await eslint.calculateConfigForFile('dummy.js');

			return {name, config, result};
		}),
	);

	for (const {name, config, result} of results) {
		assert.deepEqual(
			Object.keys(result.rules),
			Object.keys(config.rules),
			`Configuration for "${name}" is invalid.`,
		);
	}
});

test('Every rule has valid meta.type', () => {
	const validTypes = ['problem', 'suggestion', 'layout'];

	for (const file of ruleFiles) {
		const name = path.basename(file, '.js');
		const rule = eslintPluginUnicorn.rules[name];

		assert.isTrue(rule.meta !== null && rule.meta !== undefined, `${name} has no meta`);
		assert.strictEqual(typeof rule.meta.type, 'string', `${name} meta.type is not string`);
		assert.isTrue(validTypes.includes(rule.meta.type), `${name} meta.type is not one of [${validTypes.join(', ')}]`);
	}
});

test('Every deprecated rules listed in docs/deleted-and-deprecated-rules.md', async () => {
	const content = await fsAsync.readFile('docs/deleted-and-deprecated-rules.md', 'utf8');
	for (const name of deprecatedRules) {
		const rule = eslintPluginUnicorn.rules[name];
		assert.strictEqual(typeof rule.create, 'function', `${name} create is not function`);
		assert.deepEqual(rule.create(), {}, `${name} create should return empty object`);
		assert.strictEqual(typeof rule.meta.deprecated.message, 'string', `${name} meta.deprecated.message should be string`);
		assert.isTrue(Array.isArray(rule.meta.deprecated.replacedBy), `${name} meta.deprecated.replacedBy should be array`);
		assert.isTrue(content.includes(`\n### ${name}\n`));
		assert.isFalse(content.includes(`\n### ~${name}~\n`));
	}
});

test('Every rule file has the appropriate contents', () => {
	for (const ruleFile of ruleFiles) {
		const ruleName = path.basename(ruleFile, '.js');
		const rulePath = path.join('rules', `${ruleName}.js`);
		const ruleContents = fs.readFileSync(rulePath, 'utf8');

		assert.isTrue(ruleContents.includes('/** @type {import(\'eslint\').Rule.RuleModule} */'), `${ruleName} includes jsdoc comment for rule type`);
	}
});

test('Every rule has a doc with the appropriate content', () => {
	for (const ruleFile of ruleFiles) {
		const ruleName = path.basename(ruleFile, '.js');

		if (RULES_WITHOUT_EXAMPLES_SECTION.has(ruleName)) {
			continue;
		}

		/// const documentPath = path.join('docs/rules', `${ruleName}.md`);
		/// const documentContents = fs.readFileSync(documentPath, 'utf8');

		// TODO: Disabled until https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2530 is done.
		// Check for examples.
		// assert.isTrue(documentContents.includes('## Examples'), `${ruleName} includes '## Examples' examples section`);
	}
});

test('Plugin should have metadata', () => {
	assert.strictEqual(typeof eslintPluginUnicorn.meta.name, 'string');
	assert.strictEqual(typeof eslintPluginUnicorn.meta.version, 'string');
});

/// function getCompactConfig(config) {
// 	const compat = new eslintrc.FlatCompat({
// 		baseDirectory: process.cwd(),
// 		resolvePluginsRelativeTo: process.cwd(),
// 	});

// 	const result = {plugins: undefined};

// 	for (const part of compat.config(config)) {
// 		for (const [key, value] of Object.entries(part)) {
// 			if (key === 'languageOptions') {
// 				const languageOptions = {...result[key], ...value};
// 				// ESLint uses same `ecmaVersion` and `sourceType` as we recommended in the new configuration system
// 				// https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects
// 				delete languageOptions.ecmaVersion;
// 				delete languageOptions.sourceType;
// 				languageOptions.globals = {
// 					...languageOptions.globals,
// 					// When use `env.es*: true` in legacy config, `es5` globals are not included
// 					...globals.es5,
// 					// `Intl` was added to ESLint https://github.com/eslint/eslint/pull/18318
// 					// But `@eslint/eslintrc` choose not to update `globals` https://github.com/eslint/eslintrc/pull/164
// 					Intl: false,
// 					Iterator: false,
// 				};
// 				result[key] = languageOptions;
// 			} else if (key === 'plugins') {
// 				result[key] = undefined;
// 			} else {
// 				result[key] = value;
// 			}
// 		}
// 	}

// 	return result;
// }

// TODO: Fix.
// test('flat configs', t => {
// 	assert.deepEqual(
// 		{...getCompactConfig(eslintPluginUnicorn.configs.recommended), name: 'unicorn/recommended'},
// 		{...eslintPluginUnicorn.configs.recommended, plugins: undefined},
// 	);
// 	assert.deepEqual(
// 		{...getCompactConfig(eslintPluginUnicorn.configs.all), name: 'unicorn/all'},
// 		{...eslintPluginUnicorn.configs.all, plugins: undefined},
// 	);
// });

test('rule.meta.docs.recommended should be synchronized with presets', () => {
	for (const [name, rule] of Object.entries(eslintPluginUnicorn.rules)) {
		if (deprecatedRules.includes(name)) {
			continue;
		}

		const {recommended} = rule.meta.docs;
		assert.strictEqual(typeof recommended, 'boolean', `meta.docs.recommended in '${name}' rule should be a boolean.`);

		const severity = eslintPluginUnicorn.configs.recommended.rules[`unicorn/${name}`];
		if (recommended) {
			assert.strictEqual(severity, 'error', `'${name}' rule should set to 'error'.`);
		} else {
			assert.strictEqual(severity, 'off', `'${name}' rule should set to 'off'.`);
		}
	}
});
