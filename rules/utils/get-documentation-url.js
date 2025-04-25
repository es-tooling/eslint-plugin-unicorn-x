import path from 'node:path';
import packageJson from '../../package.json' with {type: 'json'};

const repoUrl = 'https://github.com/es-tooling/eslint-plugin-unicorn-x';

export default function getDocumentationUrl(filename) {
	const ruleName = path.basename(filename, '.js');
	return `${repoUrl}/blob/v${packageJson.version}/docs/rules/${ruleName}.md`;
}
