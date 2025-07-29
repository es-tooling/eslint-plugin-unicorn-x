import {getStaticValue, getPropertyName} from '@eslint-community/eslint-utils';
import {isMethodCall} from './ast/index.js';

const MESSAGE_ID_OBJECT = 'no-thenable-object';
const MESSAGE_ID_EXPORT = 'no-thenable-export';
const MESSAGE_ID_CLASS = 'no-thenable-class';
const messages = {
	[MESSAGE_ID_OBJECT]: 'Do not add `then` to an object.',
	[MESSAGE_ID_EXPORT]: 'Do not export `then`.',
	[MESSAGE_ID_CLASS]: 'Do not add `then` to a class.',
};

const isStringThen = (node, context) =>
	getStaticValue(node, context.sourceCode.getScope(node))?.value === 'then';

const isPropertyThen = (node, context) =>
	getPropertyName(node, context.sourceCode.getScope(node)) === 'then';

/** @param {import('eslint').Rule.RuleContext} context */
const create = (context) => {
	return {
		// `{then() {}}`,
		// `{get then() {}}`,
		// `{[computedKey]() {}}`,
		// `{get [computedKey]() {}}`,
		ObjectExpression(node) {
			for (const property of node.properties) {
				if (property.type === 'Property' && isPropertyThen(property, context)) {
					context.report({node: property.key, messageId: MESSAGE_ID_OBJECT});
				}
			}
		},

		// `class Foo {then}`,
		// `class Foo {static then}`,
		// `class Foo {get then() {}}`,
		// `class Foo {static get then() {}}`,
		'PropertyDefinition, MethodDefinition'(node) {
			if (isPropertyThen(node, context)) {
				context.report({node: node.key, messageId: MESSAGE_ID_CLASS});
			}
		},

		// `foo.then = …`
		// `foo[computedKey] = …`
		MemberExpression(node) {
			if (
				node.parent.type === 'AssignmentExpression' &&
				node.parent.left === node &&
				isPropertyThen(node, context)
			) {
				context.report({node: node.property, messageId: MESSAGE_ID_OBJECT});
			}
		},

		// `Object.defineProperty(foo, 'then', …)`
		// `Reflect.defineProperty(foo, 'then', …)`
		CallExpression(node) {
			if (
				isMethodCall(node, {
					objects: ['Object', 'Reflect'],
					method: 'defineProperty',
					minimumArguments: 3,
					optionalCall: false,
					optionalMember: false,
				}) &&
				node.arguments[0].type !== 'SpreadElement'
			) {
				const [, secondArgument] = node.arguments;
				if (isStringThen(secondArgument, context)) {
					context.report({node: secondArgument, messageId: MESSAGE_ID_OBJECT});
				}
			}

			// `Object.fromEntries([['then', …]])`
			if (
				isMethodCall(node, {
					object: 'Object',
					method: 'fromEntries',
					argumentsLength: 1,
					optionalCall: false,
					optionalMember: false,
				}) &&
				node.arguments[0].type === 'ArrayExpression'
			) {
				for (const pairs of node.arguments[0].elements) {
					if (
						pairs?.type === 'ArrayExpression' &&
						pairs.elements[0] &&
						pairs.elements[0].type !== 'SpreadElement'
					) {
						const [key] = pairs.elements;
						if (isStringThen(key, context)) {
							context.report({node: key, messageId: MESSAGE_ID_OBJECT});
						}
					}
				}
			}
		},

		// `export {then}`
		Identifier(node) {
			if (
				node.name === 'then' &&
				node.parent.type === 'ExportSpecifier' &&
				node.parent.exported === node
			) {
				context.report({node, messageId: MESSAGE_ID_EXPORT});
			}

			// `export function then() {}`,
			// `export class then {}`,
			if (
				node.name === 'then' &&
				(node.parent.type === 'FunctionDeclaration' ||
					node.parent.type === 'ClassDeclaration') &&
				node.parent.id === node &&
				node.parent.parent.type === 'ExportNamedDeclaration' &&
				node.parent.parent.declaration === node.parent
			) {
				context.report({node, messageId: MESSAGE_ID_EXPORT});
			}
		},

		// `export const … = …`;
		VariableDeclaration(node) {
			if (
				node.parent.type === 'ExportNamedDeclaration' &&
				node.parent.declaration === node
			) {
				for (const variable of context.sourceCode.getDeclaredVariables(node)) {
					if (variable.name === 'then') {
						for (const id of variable.identifiers) {
							context.report({node: id, messageId: MESSAGE_ID_EXPORT});
						}
					}
				}
			}
		},
	};
};

/** @type {import('eslint').Rule.RuleModule} */
const config = {
	create,
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow `then` property.',
			recommended: true,
		},
		messages,
	},
};

export default config;
