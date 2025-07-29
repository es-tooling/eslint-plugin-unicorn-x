import {isCallExpression, isMethodCall} from './ast/index.js';
import {removeParentheses} from './fix/index.js';
import {
	isNodeMatchesNameOrPath,
	getCallExpressionTokens,
} from './utils/index.js';

const MESSAGE_ID_ERROR = 'prefer-structured-clone/error';
const MESSAGE_ID_SUGGESTION = 'prefer-structured-clone/suggestion';
const messages = {
	[MESSAGE_ID_ERROR]:
		'Prefer `structuredClone(…)` over `{{description}}` to create a deep clone.',
	[MESSAGE_ID_SUGGESTION]: 'Switch to `structuredClone(…)`.',
};

const lodashCloneDeepFunctions = ['_.cloneDeep', 'lodash.cloneDeep'];

const checkParseStringifyCall = (node, context) => {
	const jsonStringify = node.arguments[0];
	const {sourceCode} = context;

	context.report({
		node,
		loc: {
			start: sourceCode.getLoc(node).start,
			end: sourceCode.getLoc(jsonStringify.callee).end,
		},
		messageId: MESSAGE_ID_ERROR,
		data: {
			description: 'JSON.parse(JSON.stringify(…))',
		},
		suggest: [
			{
				messageId: MESSAGE_ID_SUGGESTION,
				*fix(fixer) {
					yield fixer.replaceText(node.callee, 'structuredClone');

					yield fixer.remove(jsonStringify.callee);
					yield* removeParentheses(jsonStringify.callee, fixer, sourceCode);

					const {
						openingParenthesisToken,
						closingParenthesisToken,
						trailingCommaToken,
					} = getCallExpressionTokens(sourceCode, jsonStringify);

					yield fixer.remove(openingParenthesisToken);
					yield fixer.remove(closingParenthesisToken);
					if (trailingCommaToken) {
						yield fixer.remove(trailingCommaToken);
					}
				},
			},
		],
	});
};

// `_.cloneDeep(foo)`
const checkFunctionCall = (node, functions, context) => {
	const {callee} = node;
	const matchedFunction = functions.find((nameOrPath) =>
		isNodeMatchesNameOrPath(callee, nameOrPath),
	);

	if (!matchedFunction) {
		return;
	}

	context.report({
		node: callee,
		messageId: MESSAGE_ID_ERROR,
		data: {
			description: `${matchedFunction.trim()}(…)`,
		},
		suggest: [
			{
				messageId: MESSAGE_ID_SUGGESTION,
				fix: (fixer) => fixer.replaceText(callee, 'structuredClone'),
			},
		],
	});
};

/** @param {import('eslint').Rule.RuleContext} context */
const create = (context) => {
	const {functions: configFunctions} = {
		functions: [],
		...context.options[0],
	};
	const functions = [...configFunctions, ...lodashCloneDeepFunctions];

	return {
		CallExpression(node) {
			// `JSON.parse(JSON.stringify(…))`
			if (
				// `JSON.stringify()`
				isMethodCall(node, {
					object: 'JSON',
					method: 'parse',
					argumentsLength: 1,
					optionalCall: false,
					optionalMember: false,
				}) &&
				// `JSON.parse()`
				isMethodCall(node.arguments[0], {
					object: 'JSON',
					method: 'stringify',
					argumentsLength: 1,
					optionalCall: false,
					optionalMember: false,
				})
			) {
				checkParseStringifyCall(node, context);
			}
			if (
				isCallExpression(node, {
					argumentsLength: 1,
					optional: false,
				})
			) {
				checkFunctionCall(node, functions, context);
			}
		},
	};
};

const schema = [
	{
		type: 'object',
		additionalProperties: false,
		properties: {
			functions: {
				type: 'array',
				uniqueItems: true,
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
			description: 'Prefer using `structuredClone` to create a deep clone.',
			recommended: true,
		},
		hasSuggestions: true,
		schema,
		defaultOptions: [{}],
		messages,
	},
};

export default config;
