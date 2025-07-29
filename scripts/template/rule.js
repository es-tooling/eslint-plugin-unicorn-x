const template = (data) =>
	`
import {} from './ast/index.js';
import {} from './fix/index.js';
import {} from './utils/index.js';

${
	data.hasSuggestions
		? `
const MESSAGE_ID_ERROR = '${data.id}/error';
const MESSAGE_ID_SUGGESTION = '${data.id}/suggestion';
const messages = {
	[MESSAGE_ID_ERROR]: 'Prefer \`{{replacement}}\` over \`{{value}}\`.',
	[MESSAGE_ID_SUGGESTION]: 'Replace \`{{value}}\` with \`{{replacement}}\`.',
};
`.trim()
		: `
const MESSAGE_ID = '${data.id}';
const messages = {
	[MESSAGE_ID]: 'Prefer \`{{replacement}}\` over \`{{value}}\`.',
};
`.trim()
}

/** @param {import('eslint').Rule.RuleContext} context */
const create = context => {
	return {
		Literal(node) {
			if (node.value !== 'unicorn') {
				return;
			}

			return {
				node,
				messageId: ${data.hasSuggestions ? 'MESSAGE_ID_ERROR' : 'MESSAGE_ID'},
				data: {
					value: 'unicorn',
					replacement: '🦄',
				},
${
	data.fixableType
		? `
				/** @param {import('eslint').Rule.RuleFixer} fixer */
				fix: fixer => fixer.replaceText(node, '\\'🦄\\''),
`
		: ''
}
${
	data.hasSuggestions
		? `
				/** @param {import('eslint').Rule.RuleFixer} fixer */
				suggest: [
					{
						messageId: MESSAGE_ID_SUGGESTION,
						data: {
							value: 'unicorn',
							replacement: '🦄',
						},
						/** @param {import('eslint').Rule.RuleFixer} fixer */
						fix: fixer => fixer.replaceText(node, '\\'🦄\\''),
					}
				],`
		: ''
}
			};
		},
	};
};

/** @type {import('eslint').Rule.RuleModule} */
const config = {
	create,
	meta: {
		type: '${data.type}',
		docs: {
			description: '${data.description}',
			recommended: true,
		},
${data.fixableType ? `\t\tfixable: '${data.fixableType}',` : ''}
${data.hasSuggestions ? `\t\thasSuggestions: true,` : ''}
		messages,
	},
};

export default config;
`.trimStart();

export default template;
