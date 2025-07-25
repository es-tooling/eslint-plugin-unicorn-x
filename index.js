import createDeprecatedRules from './rules/utils/create-deprecated-rules.js';
import flatConfigBase from './configs/flat-config-base.js';
import rules from './rules/index.js';
import packageJson from './package.json' with {type: 'json'};

const deprecatedRules = createDeprecatedRules({
	// {ruleId: {message: string, replacedBy: string[]}}
	'no-instanceof-array': {
		message: 'Replaced by `unicorn-x/no-instanceof-builtins` which covers more cases.',
		replacedBy: ['unicorn-x/no-instanceof-builtins'],
	},
	'no-length-as-slice-end': {
		message: 'Replaced by `unicorn-x/no-unnecessary-slice-end` which covers more cases.',
		replacedBy: ['unicorn-x/no-unnecessary-slice-end'],
	},
	'no-array-push-push': {
		message: 'Replaced by `unicorn-x/prefer-single-call` which covers more cases.',
		replacedBy: ['unicorn-x/prefer-single-call'],
	},
});

const externalRules = {
	// Covered by `unicorn-x/no-negated-condition`
	'no-negated-condition': 'off',
	// Covered by `unicorn-x/no-nested-ternary`
	'no-nested-ternary': 'off',
};

const recommendedRules = Object.fromEntries(
	Object.entries(rules).map(([id, rule]) => [
		`unicorn-x/${id}`,
		rule.meta.docs.recommended ? 'error' : 'off',
	]),
);

const allRules = Object.fromEntries(
	Object.keys(rules).map(id => [
		`unicorn-x/${id}`,
		'error',
	]),
);

const createConfig = (rules, flatConfigName) => ({
	...flatConfigBase,
	name: flatConfigName,
	plugins: {
		'unicorn-x': unicorn,
	},
	rules: {
		...externalRules,
		...rules,
	},
});

const unicorn = {
	meta: {
		name: packageJson.name,
		version: packageJson.version,
	},
	rules: {
		...rules,
		...deprecatedRules,
	},
};

const configs = {
	recommended: createConfig(recommendedRules, 'unicorn-x/recommended'),
	all: createConfig(allRules, 'unicorn-x/all'),

	// TODO: Remove this at some point. Kept for now to avoid breaking users.
	'flat/recommended': createConfig(recommendedRules, 'unicorn-x/flat/recommended'),
	'flat/all': createConfig(allRules, 'unicorn-x/flat/all'),
};

const allConfigs = {
	...unicorn,
	configs,
};

export default allConfigs;
