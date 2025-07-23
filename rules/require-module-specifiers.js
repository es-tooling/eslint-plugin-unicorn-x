import {isClosingBraceToken} from '@eslint-community/eslint-utils';

const MESSAGE_ID_ERROR = 'error';
const MESSAGE_ID_SUGGESTION_REMOVE_DECLARATION =
	'suggestion/remove-declaration';
const MESSAGE_ID_SUGGESTION_TO_SIDE_EFFECT_IMPORT =
	'suggestion/to-side-effect-import';
const messages = {
	[MESSAGE_ID_ERROR]: '{{type}} statement without specifiers is not allowed.',
	[MESSAGE_ID_SUGGESTION_REMOVE_DECLARATION]: 'Remove this {{type}} statement.',
	[MESSAGE_ID_SUGGESTION_TO_SIDE_EFFECT_IMPORT]:
		'Switch to side effect import.',
};

const isFromToken = (token) =>
	token.type === 'Identifier' && token.value === 'from';

/** @param {import('eslint').Rule.RuleContext} context */
const create = (context) => {
	const {sourceCode} = context;

	return {
		ImportDeclaration: (importDeclaration) => {
			const {specifiers} = importDeclaration;

			if (
				specifiers.some(
					(node) =>
						node.type === 'ImportSpecifier' ||
						node.type === 'ImportNamespaceSpecifier',
				)
			) {
				return;
			}

			const {source, importKind} = importDeclaration;
			const fromToken = sourceCode.getTokenBefore(source);
			if (!isFromToken(fromToken)) {
				return;
			}

			const closingBraceToken = sourceCode.getTokenBefore(fromToken);
			if (!isClosingBraceToken(closingBraceToken)) {
				return;
			}

			const openingBraceToken = sourceCode.getTokenBefore(closingBraceToken);

			const problem = {
				node: importDeclaration,
				loc: {
					start: sourceCode.getLoc(openingBraceToken).start,
					end: sourceCode.getLoc(closingBraceToken).end,
				},
				messageId: MESSAGE_ID_ERROR,
				data: {
					type: 'import',
				},
			};

			// If there is a `ImportDefaultSpecifier`, it has to be the first.
			const importDefaultSpecifier =
				specifiers.length === 1 ? specifiers[0] : undefined;
			if (importKind === 'type' && !importDefaultSpecifier) {
				problem.fix = (fixer) => fixer.remove(importDeclaration);
				context.report(problem);
				return;
			}

			if (importDefaultSpecifier) {
				problem.fix = function* (fixer) {
					yield fixer.remove(closingBraceToken);
					yield fixer.remove(openingBraceToken);

					const commaToken = sourceCode.getTokenBefore(openingBraceToken);
					yield fixer.remove(commaToken);

					if (
						sourceCode.getRange(closingBraceToken)[1] ===
						sourceCode.getRange(fromToken)[0]
					) {
						yield fixer.insertTextBefore(fromToken, ' ');
					}
				};

				context.report(problem);
				return;
			}

			problem.suggest = [
				{
					messageId: MESSAGE_ID_SUGGESTION_REMOVE_DECLARATION,
					fix: (fixer) => fixer.remove(importDeclaration),
					data: problem.data,
				},
				{
					messageId: MESSAGE_ID_SUGGESTION_TO_SIDE_EFFECT_IMPORT,
					*fix(fixer) {
						yield fixer.remove(openingBraceToken);
						yield fixer.remove(closingBraceToken);
						yield fixer.remove(fromToken);
					},
					data: problem.data,
				},
			];

			context.report(problem);
		},
		ExportNamedDeclaration: (exportDeclaration) => {
			const {specifiers, declaration} = exportDeclaration;

			if (declaration || specifiers.length > 0) {
				return;
			}

			const {source, exportKind} = exportDeclaration;
			const fromToken = source ? sourceCode.getTokenBefore(source) : undefined;
			const closingBraceToken = fromToken
				? sourceCode.getTokenBefore(fromToken)
				: sourceCode.getLastToken(exportDeclaration, isClosingBraceToken);
			const openingBraceToken = sourceCode.getTokenBefore(closingBraceToken);

			const problem = {
				node: exportDeclaration,
				loc: {
					start: sourceCode.getLoc(openingBraceToken).start,
					end: sourceCode.getLoc(closingBraceToken).end,
				},
				messageId: MESSAGE_ID_ERROR,
				data: {
					type: 'export',
				},
			};

			if (!source || exportKind === 'type') {
				problem.fix = (fixer) => fixer.remove(exportDeclaration);
				context.report(problem);
				return;
			}

			problem.suggest = [
				{
					messageId: MESSAGE_ID_SUGGESTION_REMOVE_DECLARATION,
					fix: (fixer) => fixer.remove(exportDeclaration),
					data: problem.data,
				},
				{
					messageId: MESSAGE_ID_SUGGESTION_TO_SIDE_EFFECT_IMPORT,
					*fix(fixer) {
						const exportToken = sourceCode.getFirstToken(exportDeclaration);
						yield fixer.replaceText(exportToken, 'import');
						yield fixer.remove(openingBraceToken);
						yield fixer.remove(closingBraceToken);
						yield fixer.remove(fromToken);
					},
					data: problem.data,
				},
			];

			context.report(problem);
			return problem;
		},
	};
};

/** @type {import('eslint').Rule.RuleModule} */
const config = {
	create,
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Require non-empty specifier list in import and export statements.',
			recommended: true,
		},
		fixable: 'code',
		hasSuggestions: true,
		messages,
	},
};

export default config;
