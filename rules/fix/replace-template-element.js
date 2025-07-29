const replaceTemplateElement = (fixer, node, replacement) => {
	const {
		// eslint-disable-next-line internal/no-restricted-property-access
		range: [start, end],
		tail,
	} = node;
	return fixer.replaceTextRange([start + 1, end - (tail ? 1 : 2)], replacement);
};

export default replaceTemplateElement;
