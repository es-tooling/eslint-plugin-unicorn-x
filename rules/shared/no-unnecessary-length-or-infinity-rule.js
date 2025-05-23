import {isMethodCall, isMemberExpression} from '../ast/index.js';
import {isSameReference} from '../utils/index.js';
import {removeArgument} from '../fix/index.js';

function getObjectLengthOrInfinityDescription(node, object) {
	// `Infinity`
	if (node.type === 'Identifier' && node.name === 'Infinity') {
		return 'Infinity';
	}

	// `Number.POSITIVE_INFINITY`
	if (
		isMemberExpression(node, {
			objects: 'Number',
			properties: 'POSITIVE_INFINITY',
			optional: false,
			computed: false,
		})
	) {
		return 'Number.POSITIVE_INFINITY';
	}

	// `object?.length`
	const isOptional = node.type === 'ChainExpression';
	if (isOptional) {
		node = node.expression;
	}

	// `object.length`
	if (
		!(
			isMemberExpression(node, {
				properties: 'length',
				optional: undefined,
				computed: false,
			}) && isSameReference(object, node.object)
		)
	) {
		return;
	}

	return `${object.type === 'Identifier' ? object.name : '…'}${isOptional ? '?.' : '.'}length`;
}

/** @param {import('eslint').Rule.RuleContext} context */
function listen(context, {methods, messageId}) {
	return {
		CallExpression(callExpression) {
			if (
				!isMethodCall(callExpression, {
					methods,
					argumentsLength: 2,
					optionalCall: false,
				})
			) {
				return;
			}

			const secondArgument = callExpression.arguments[1];
			const description = getObjectLengthOrInfinityDescription(
				secondArgument,
				callExpression.callee.object,
			);

			if (!description) {
				return;
			}

			const methodName = callExpression.callee.property.name;
			const messageData = {
				description,
			};

			if (methodName === 'splice') {
				messageData.argumentName = 'deleteCount';
			} else if (methodName === 'toSpliced') {
				messageData.argumentName = 'skipCount';
			}

			context.report({
				node: secondArgument,
				messageId,
				data: messageData,
				/** @param {import('eslint').Rule.RuleFixer} fixer */
				fix: (fixer) =>
					removeArgument(fixer, secondArgument, context.sourceCode),
			});
		},
	};
}

export {listen};
