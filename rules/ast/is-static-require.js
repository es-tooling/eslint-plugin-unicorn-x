import {isStringLiteral} from './literal.js';
import {
	isCallExpression,
	callExpressionHasArguments,
	callExpressionHasName,
} from './guards.js';

const isStaticRequire = (node) =>
	node !== undefined &&
	node !== null &&
	isCallExpression(node) &&
	callExpressionHasArguments(node, 1) &&
	callExpressionHasName(node, 'require') &&
	node.optional !== true &&
	isStringLiteral(node.arguments[0]);

export default isStaticRequire;
