export function isCallExpression(node) {
	return node.type === 'CallExpression';
}

export function callExpressionHasArguments(node, size) {
	if (Array.isArray(size)) {
		const [min = 0, max = Number.POSITIVE_INFINITY] = size;
		return node.arguments.length >= min && node.arguments.length <= max;
	}
	return node.arguments.length === size;
}

export function callExpressionHasName(node, name) {
	return (
		node.callee.type === 'Identifier' &&
		(Array.isArray(name)
			? name.includes(node.callee.name)
			: node.callee.name === name)
	);
}

export function memberExpressionHasProperty(node, property) {
	return (
		node.property.type === 'Identifier' &&
		node.computed === false &&
		(Array.isArray(property)
			? property.includes(node.property.name)
			: node.property.name === property)
	);
}

export function memberExpressionHasObject(node, object) {
	return (
		node.object.type === 'Identifier' &&
		(Array.isArray(object)
			? object.includes(node.object.name)
			: node.object.name === object)
	);
}

export function isMethodCall(node) {
	return (
		node.type === 'CallExpression' && node.callee.type === 'MemberExpression'
	);
}

export function callExpressionHasSpread(node) {
	return node.arguments.some((argument) => argument.type === 'SpreadElement');
}
