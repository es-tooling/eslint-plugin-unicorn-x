import url from 'node:url';
import {test, assert} from 'vitest';
import getDocumentationUrl from '../../rules/utils/get-documentation-url.js';
import packageJson from '../../package.json' with {type: 'json'};

const filename = url.fileURLToPath(import.meta.url).replace(/\.js$/, '.js');

test('returns the URL of the a named rule\'s documentation', () => {
	const url = `https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/v${packageJson.version}/docs/rules/foo.md`;
	assert.strictEqual(getDocumentationUrl('foo.js'), url);
});

test('determines the rule name from the file', () => {
	const url = `https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/v${packageJson.version}/docs/rules/get-documentation-url.md`;
	assert.strictEqual(getDocumentationUrl(filename), url);
});
