import {isMemberExpression} from '../ast/index.js';

/**
@param {
	{
		object?: string,
		properties?: string[] | string,
	}
} [options]
@returns {string}
*/
function isPrototypeProperty(node, options) {
	const object = options?.object;
	const properties = options?.properties ?? [];

	if (
		!isMemberExpression(node, {
			properties,
			optional: false,
			computed: undefined,
		})
	) {
		return;
	}

	const objectNode = node.object;

	return (
		// `Object.prototype.method` or `Array.prototype.method`
		isMemberExpression(objectNode, {
			properties: 'prototype',
			objects: object,
			optional: false,
			computed: undefined,
		}) ||
		// `[].method`
		(object === 'Array' &&
			objectNode.type === 'ArrayExpression' &&
			objectNode.elements.length === 0) ||
		// `{}.method`
		(object === 'Object' &&
			objectNode.type === 'ObjectExpression' &&
			objectNode.properties.length === 0)
	);
}

export const isArrayPrototypeProperty = (node, options) =>
	isPrototypeProperty(node, {...options, object: 'Array'});
export const isObjectPrototypeProperty = (node, options) =>
	isPrototypeProperty(node, {...options, object: 'Object'});
