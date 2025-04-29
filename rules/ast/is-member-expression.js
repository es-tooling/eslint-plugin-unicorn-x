/**
@param {
	{
		property?: string,
		properties?: string[],
		object?: string,
		objects?: string[],
		optional?: boolean,
		computed?: boolean
	}
} [options]
@returns {string}
*/
export default function isMemberExpression(node, options) {
	if (node?.type !== 'MemberExpression') {
		return false;
	}

	const property = options?.property ?? '';
	const properties = property ? [property] : (options?.properties ?? []);
	const objects = options?.object ? [options.object] : (options?.objects ?? []);
	const optional = options?.optional;
	let computed = options?.computed;

	if (
		(optional === true && node.optional !== optional) ||
		(optional === false &&
			// `node.optional` can be `undefined` in some parsers
			node.optional)
	) {
		return false;
	}

	if (Array.isArray(properties) && properties.length > 0) {
		if (
			node.property.type !== 'Identifier' ||
			!properties.includes(node.property.name)
		) {
			return false;
		}

		computed ??= false;
	}

	if (
		(computed === true && node.computed !== computed) ||
		(computed === false &&
			// `node.computed` can be `undefined` in some parsers
			node.computed)
	) {
		return false;
	}

	if (
		Array.isArray(objects) &&
		objects.length > 0 &&
		(node.object.type !== 'Identifier' || !objects.includes(node.object.name))
	) {
		return false;
	}

	return true;
}
