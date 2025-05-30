import {getTester} from './utils/test.js';

const {test} = getTester(import.meta);

function testCase(filename, chosenCase, errorMessage) {
	return testCaseWithOptions(filename, errorMessage, [{case: chosenCase}]);
}

function testManyCases(filename, chosenCases, errorMessage) {
	return testCaseWithOptions(filename, errorMessage, [{cases: chosenCases}]);
}

function testCaseWithOptions(filename, errorMessage, options = []) {
	const testCase = {
		code: `/* Filename: ${filename} */`,
		options,
		errors: errorMessage && [
			{
				message: errorMessage,
			},
		],
	};

	if (filename !== undefined) {
		testCase.filename = filename;
	}

	return testCase;
}

test({
	valid: [
		testCase('src/foo/bar.js', 'camelCase'),
		testCase('src/foo/fooBar.js', 'camelCase'),
		testCase('src/foo/bar.test.js', 'camelCase'),
		testCase('src/foo/fooBar.test.js', 'camelCase'),
		testCase('src/foo/fooBar.test-utils.js', 'camelCase'),
		testCase('src/foo/fooBar.test_utils.js', 'camelCase'),
		testCase('src/foo/.test_utils.js', 'camelCase'),
		testCase('src/foo/foo.js', 'snakeCase'),
		testCase('src/foo/foo_bar.js', 'snakeCase'),
		testCase('src/foo/foo.test.js', 'snakeCase'),
		testCase('src/foo/foo_bar.test.js', 'snakeCase'),
		testCase('src/foo/foo_bar.test_utils.js', 'snakeCase'),
		testCase('src/foo/foo_bar.test-utils.js', 'snakeCase'),
		testCase('src/foo/.test-utils.js', 'snakeCase'),
		testCase('src/foo/foo.js', 'kebabCase'),
		testCase('src/foo/foo-bar.js', 'kebabCase'),
		testCase('src/foo/foo.test.js', 'kebabCase'),
		testCase('src/foo/foo-bar.test.js', 'kebabCase'),
		testCase('src/foo/foo-bar.test-utils.js', 'kebabCase'),
		testCase('src/foo/foo-bar.test_utils.js', 'kebabCase'),
		testCase('src/foo/.test_utils.js', 'kebabCase'),
		testCase('src/foo/Foo.js', 'pascalCase'),
		testCase('src/foo/FooBar.js', 'pascalCase'),
		testCase('src/foo/Foo.test.js', 'pascalCase'),
		testCase('src/foo/FooBar.test.js', 'pascalCase'),
		testCase('src/foo/FooBar.test-utils.js', 'pascalCase'),
		testCase('src/foo/FooBar.test_utils.js', 'pascalCase'),
		testCase('src/foo/.test_utils.js', 'pascalCase'),
		testCase('spec/iss47Spec.js', 'camelCase'),
		testCase('spec/iss47Spec100.js', 'camelCase'),
		testCase('spec/i18n.js', 'camelCase'),
		testCase('spec/iss47-spec.js', 'kebabCase'),
		testCase('spec/iss-47-spec.js', 'kebabCase'),
		testCase('spec/iss47-100spec.js', 'kebabCase'),
		testCase('spec/i18n.js', 'kebabCase'),
		testCase('spec/iss47_spec.js', 'snakeCase'),
		testCase('spec/iss_47_spec.js', 'snakeCase'),
		testCase('spec/iss47_100spec.js', 'snakeCase'),
		testCase('spec/i18n.js', 'snakeCase'),
		testCase('spec/Iss47Spec.js', 'pascalCase'),
		testCase('spec/Iss47.100spec.js', 'pascalCase'),
		testCase('spec/I18n.js', 'pascalCase'),
		testCase(undefined, 'camelCase'),
		testCase(undefined, 'snakeCase'),
		testCase(undefined, 'kebabCase'),
		testCase(undefined, 'pascalCase'),
		testCase('src/foo/_fooBar.js', 'camelCase'),
		testCase('src/foo/___fooBar.js', 'camelCase'),
		testCase('src/foo/_foo_bar.js', 'snakeCase'),
		testCase('src/foo/___foo_bar.js', 'snakeCase'),
		testCase('src/foo/_foo-bar.js', 'kebabCase'),
		testCase('src/foo/___foo-bar.js', 'kebabCase'),
		testCase('src/foo/_FooBar.js', 'pascalCase'),
		testCase('src/foo/___FooBar.js', 'pascalCase'),
		testCase('src/foo/$foo.js'),
		testManyCases('src/foo/foo-bar.js'),
		testManyCases('src/foo/foo-bar.js', {}),
		testManyCases('src/foo/fooBar.js', {camelCase: true}),
		testManyCases('src/foo/FooBar.js', {kebabCase: true, pascalCase: true}),
		testManyCases('src/foo/___foo_bar.js', {snakeCase: true, pascalCase: true}),
		testCaseWithOptions('src/foo/bar.js'),
		testCase('src/foo/[fooBar].js', 'camelCase'),
		testCase('src/foo/{foo_bar}.js', 'snakeCase'),
		testCaseWithOptions(undefined, undefined, [
			{case: 'kebabCase', ignore: [String.raw`FOOBAR\.js`]},
		]),
		testCaseWithOptions(undefined, undefined, [
			{case: 'kebabCase', ignore: [/FOOBAR\.js/u]},
		]),
		testCaseWithOptions('src/foo/index.js', undefined, [
			{case: 'kebabCase', ignore: [String.raw`FOOBAR\.js`]},
		]),
		testCaseWithOptions('src/foo/index.js', undefined, [
			{case: 'kebabCase', ignore: [/FOOBAR\.js/u]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'kebabCase', ignore: [String.raw`FOOBAR\.js`]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'kebabCase', ignore: [/FOOBAR\.js/u]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'camelCase', ignore: [String.raw`FOOBAR\.js`]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'camelCase', ignore: [/FOOBAR\.js/u]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'snakeCase', ignore: [String.raw`FOOBAR\.js`]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'pascalCase', ignore: [String.raw`FOOBAR\.js`]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'pascalCase', ignore: [/FOOBAR\.js/u]},
		]),
		testCaseWithOptions('src/foo/BARBAZ.js', undefined, [
			{
				case: 'kebabCase',
				ignore: [String.raw`FOOBAR\.js`, String.raw`BARBAZ\.js`],
			},
		]),
		testCaseWithOptions('src/foo/BARBAZ.js', undefined, [
			{case: 'kebabCase', ignore: [String.raw`FOOBAR\.js`, /BARBAZ\.js/u]},
		]),
		testCaseWithOptions('src/foo/[FOOBAR].js', undefined, [
			{case: 'camelCase', ignore: [String.raw`\[FOOBAR\]\.js`]},
		]),
		testCaseWithOptions('src/foo/[FOOBAR].js', undefined, [
			{case: 'camelCase', ignore: [/\[FOOBAR]\.js/]},
		]),
		testCaseWithOptions('src/foo/{FOOBAR}.js', undefined, [
			{case: 'snakeCase', ignore: [String.raw`\{FOOBAR\}\.js`]},
		]),
		testCaseWithOptions('src/foo/{FOOBAR}.js', undefined, [
			{case: 'snakeCase', ignore: [/{FOOBAR}\.js/]},
		]),
		testCaseWithOptions('src/foo/foo.js', undefined, [
			{case: 'kebabCase', ignore: ['^(F|f)oo']},
		]),
		testCaseWithOptions('src/foo/foo-bar.js', undefined, [
			{case: 'kebabCase', ignore: ['^(F|f)oo']},
		]),
		testCaseWithOptions('src/foo/fooBar.js', undefined, [
			{case: 'kebabCase', ignore: ['^(F|f)oo']},
		]),
		testCaseWithOptions('src/foo/foo_bar.js', undefined, [
			{case: 'kebabCase', ignore: ['^(F|f)oo']},
		]),
		testCaseWithOptions('src/foo/foo_bar.js', undefined, [
			{case: 'kebabCase', ignore: [/foo/iu]},
		]),
		testCaseWithOptions('src/foo/FOO_bar.js', undefined, [
			{case: 'kebabCase', ignore: [/foo/iu]},
		]),
		testCaseWithOptions('src/foo/foo-bar.js', undefined, [
			{case: 'kebabCase', ignore: [String.raw`\.(web|android|ios)\.js$`]},
		]),
		testCaseWithOptions('src/foo/FooBar.web.js', undefined, [
			{case: 'kebabCase', ignore: [String.raw`\.(web|android|ios)\.js$`]},
		]),
		testCaseWithOptions('src/foo/FooBar.android.js', undefined, [
			{case: 'kebabCase', ignore: [String.raw`\.(web|android|ios)\.js$`]},
		]),
		testCaseWithOptions('src/foo/FooBar.ios.js', undefined, [
			{case: 'kebabCase', ignore: [String.raw`\.(web|android|ios)\.js$`]},
		]),
		testCaseWithOptions('src/foo/FooBar.something.js', undefined, [
			{case: 'kebabCase', ignore: [/\.(?:web|android|ios|something)\.js$/u]},
		]),
		testCaseWithOptions('src/foo/FooBar.js', undefined, [
			{case: 'kebabCase', ignore: ['^(F|f)oo']},
		]),
		testCaseWithOptions('src/foo/FooBar.js', undefined, [
			{case: 'kebabCase', ignore: [/^[Ff]oo/u]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'kebabCase', ignore: ['^FOO', String.raw`BAZ\.js$`]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{case: 'kebabCase', ignore: [/^FOO/, /BAZ\.js$/u]},
		]),
		testCaseWithOptions('src/foo/BARBAZ.js', undefined, [
			{case: 'kebabCase', ignore: ['^FOO', String.raw`BAZ\.js$`]},
		]),
		testCaseWithOptions('src/foo/BARBAZ.js', undefined, [
			{case: 'kebabCase', ignore: [/^FOO/, /BAZ\.js$/]},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{
				cases: {
					kebabCase: true,
					camelCase: true,
					snakeCase: true,
					pascalCase: true,
				},
				ignore: [String.raw`FOOBAR\.js`],
			},
		]),
		testCaseWithOptions('src/foo/FOOBAR.js', undefined, [
			{
				cases: {
					kebabCase: true,
					camelCase: true,
					snakeCase: true,
					pascalCase: true,
				},
				ignore: [/FOOBAR\.js/u],
			},
		]),
		testCaseWithOptions('src/foo/BaRbAz.js', undefined, [
			{
				cases: {
					kebabCase: true,
					camelCase: true,
					snakeCase: true,
					pascalCase: true,
				},
				ignore: [String.raw`FOOBAR\.js`, String.raw`BaRbAz\.js`],
			},
		]),
		testCaseWithOptions('src/foo/BaRbAz.js', undefined, [
			{
				cases: {
					kebabCase: true,
					camelCase: true,
					snakeCase: true,
					pascalCase: true,
				},
				ignore: [/FOOBAR\.js/u, /BaRbAz\.js/u],
			},
		]),
		// Ignored
		...[
			'index.js',
			'index.mjs',
			'index.cjs',
			'index.ts',
			'index.tsx',
			'index.vue',
		].flatMap((filename) =>
			['camelCase', 'snakeCase', 'kebabCase', 'pascalCase'].map((chosenCase) =>
				testCase(filename, chosenCase),
			),
		),
		testCaseWithOptions('index.tsx', undefined, [
			{case: 'pascalCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/index.tsx', undefined, [
			{case: 'pascalCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/fooBar.test.js', undefined, [
			{case: 'camelCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/fooBar.testUtils.js', undefined, [
			{case: 'camelCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/foo_bar.test_utils.js', undefined, [
			{case: 'snakeCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/foo.test.js', undefined, [
			{case: 'kebabCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/foo-bar.test.js', undefined, [
			{case: 'kebabCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/foo-bar.test-utils.js', undefined, [
			{case: 'kebabCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/Foo.Test.js', undefined, [
			{case: 'pascalCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/FooBar.Test.js', undefined, [
			{case: 'pascalCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('src/foo/FooBar.TestUtils.js', undefined, [
			{case: 'pascalCase', multipleFileExtensions: false},
		]),
		testCaseWithOptions('spec/Iss47.100Spec.js', undefined, [
			{case: 'pascalCase', multipleFileExtensions: false},
		]),
		// Multiple filename parts - multiple file extensions
		testCaseWithOptions('src/foo/fooBar.Test.js', undefined, [
			{case: 'camelCase'},
		]),
		testCaseWithOptions('test/foo/fooBar.testUtils.js', undefined, [
			{case: 'camelCase'},
		]),
		testCaseWithOptions('test/foo/.testUtils.js', undefined, [
			{case: 'camelCase'},
		]),
		testCaseWithOptions('test/foo/foo_bar.Test.js', undefined, [
			{case: 'snakeCase'},
		]),
		testCaseWithOptions('test/foo/foo_bar.Test_Utils.js', undefined, [
			{case: 'snakeCase'},
		]),
		testCaseWithOptions('test/foo/.Test_Utils.js', undefined, [
			{case: 'snakeCase'},
		]),
		testCaseWithOptions('test/foo/foo-bar.Test.js', undefined, [
			{case: 'kebabCase'},
		]),
		testCaseWithOptions('test/foo/foo-bar.Test-Utils.js', undefined, [
			{case: 'kebabCase'},
		]),
		testCaseWithOptions('test/foo/.Test-Utils.js', undefined, [
			{case: 'kebabCase'},
		]),
		testCaseWithOptions('test/foo/FooBar.Test.js', undefined, [
			{case: 'pascalCase'},
		]),
		testCaseWithOptions('test/foo/FooBar.TestUtils.js', undefined, [
			{case: 'pascalCase'},
		]),
		testCaseWithOptions('test/foo/.TestUtils.js', undefined, [
			{case: 'pascalCase'},
		]),
	],
	invalid: [
		testCase(
			'src/foo/foo_bar.js',
			undefined,
			'Filename is not in kebab case. Rename it to `foo-bar.js`.',
		),
		testCase(
			'src/foo/foo_bar.JS',
			'camelCase',
			'Filename is not in camel case. Rename it to `fooBar.js`.',
		),
		testCase(
			'src/foo/foo_bar.test.js',
			'camelCase',
			'Filename is not in camel case. Rename it to `fooBar.test.js`.',
		),
		testCase(
			'test/foo/foo_bar.test_utils.js',
			'camelCase',
			'Filename is not in camel case. Rename it to `fooBar.test_utils.js`.',
		),
		testCase(
			'test/foo/fooBar.js',
			'snakeCase',
			'Filename is not in snake case. Rename it to `foo_bar.js`.',
		),
		testCase(
			'test/foo/fooBar.test.js',
			'snakeCase',
			'Filename is not in snake case. Rename it to `foo_bar.test.js`.',
		),
		testCase(
			'test/foo/fooBar.testUtils.js',
			'snakeCase',
			'Filename is not in snake case. Rename it to `foo_bar.testUtils.js`.',
		),
		testCase(
			'test/foo/fooBar.js',
			'kebabCase',
			'Filename is not in kebab case. Rename it to `foo-bar.js`.',
		),
		testCase(
			'test/foo/fooBar.test.js',
			'kebabCase',
			'Filename is not in kebab case. Rename it to `foo-bar.test.js`.',
		),
		testCase(
			'test/foo/fooBar.testUtils.js',
			'kebabCase',
			'Filename is not in kebab case. Rename it to `foo-bar.testUtils.js`.',
		),
		testCase(
			'test/foo/fooBar.js',
			'pascalCase',
			'Filename is not in pascal case. Rename it to `FooBar.js`.',
		),
		testCase(
			'test/foo/foo_bar.test.js',
			'pascalCase',
			'Filename is not in pascal case. Rename it to `FooBar.test.js`.',
		),
		testCase(
			'test/foo/foo-bar.test-utils.js',
			'pascalCase',
			'Filename is not in pascal case. Rename it to `FooBar.test-utils.js`.',
		),
		testCase(
			'src/foo/_FOO-BAR.js',
			'camelCase',
			'Filename is not in camel case. Rename it to `_fooBar.js`.',
		),
		testCase(
			'src/foo/___FOO-BAR.js',
			'camelCase',
			'Filename is not in camel case. Rename it to `___fooBar.js`.',
		),
		testCase(
			'src/foo/_FOO-BAR.js',
			'snakeCase',
			'Filename is not in snake case. Rename it to `_foo_bar.js`.',
		),
		testCase(
			'src/foo/___FOO-BAR.js',
			'snakeCase',
			'Filename is not in snake case. Rename it to `___foo_bar.js`.',
		),
		testCase(
			'src/foo/_FOO-BAR.js',
			'kebabCase',
			'Filename is not in kebab case. Rename it to `_foo-bar.js`.',
		),
		testCase(
			'src/foo/___FOO-BAR.js',
			'kebabCase',
			'Filename is not in kebab case. Rename it to `___foo-bar.js`.',
		),
		testCase(
			'src/foo/_FOO-BAR.js',
			'pascalCase',
			'Filename is not in pascal case. Rename it to `_FooBar.js`.',
		),
		testCase(
			'src/foo/___FOO-BAR.js',
			'pascalCase',
			'Filename is not in pascal case. Rename it to `___FooBar.js`.',
		),
		testManyCases(
			'src/foo/foo_bar.js',
			undefined,
			'Filename is not in kebab case. Rename it to `foo-bar.js`.',
		),
		testManyCases(
			'src/foo/foo-bar.js',
			{
				camelCase: true,
				pascalCase: true,
			},
			'Filename is not in camel case or pascal case. Rename it to `fooBar.js` or `FooBar.js`.',
		),
		testManyCases(
			'src/foo/_foo_bar.js',
			{
				camelCase: true,
				pascalCase: true,
				kebabCase: true,
			},
			'Filename is not in camel case, pascal case, or kebab case. Rename it to `_fooBar.js`, `_FooBar.js`, or `_foo-bar.js`.',
		),
		testManyCases(
			'src/foo/_FOO-BAR.js',
			{
				snakeCase: true,
			},
			'Filename is not in snake case. Rename it to `_foo_bar.js`.',
		),
		testCase(
			'src/foo/[foo_bar].js',
			undefined,
			'Filename is not in kebab case. Rename it to `[foo-bar].js`.',
		),
		testCase(
			'src/foo/$foo_bar.js',
			undefined,
			'Filename is not in kebab case. Rename it to `$foo-bar.js`.',
		),
		testCase(
			'src/foo/$fooBar.js',
			undefined,
			'Filename is not in kebab case. Rename it to `$foo-bar.js`.',
		),
		testManyCases(
			'src/foo/{foo_bar}.js',
			{
				camelCase: true,
				pascalCase: true,
				kebabCase: true,
			},
			'Filename is not in camel case, pascal case, or kebab case. Rename it to `{fooBar}.js`, `{FooBar}.js`, or `{foo-bar}.js`.',
		),
		testCaseWithOptions(
			'src/foo/barBaz.js',
			'Filename is not in kebab case. Rename it to `bar-baz.js`.',
			[{case: 'kebabCase', ignore: [String.raw`FOOBAR\.js`]}],
		),
		testCaseWithOptions(
			'src/foo/barBaz.js',
			'Filename is not in kebab case. Rename it to `bar-baz.js`.',
			[{case: 'kebabCase', ignore: [String.raw`/FOOBAR\.js/`]}],
		),
		testCaseWithOptions(
			'src/foo/barBaz.js',
			'Filename is not in kebab case. Rename it to `bar-baz.js`.',
			[{case: 'kebabCase', ignore: [/FOOBAR\.js/u]}],
		),
		testCaseWithOptions(
			'src/foo/fooBar.js',
			'Filename is not in kebab case. Rename it to `foo-bar.js`.',
			[{case: 'kebabCase', ignore: [String.raw`FOOBAR\.js`]}],
		),
		testCaseWithOptions(
			'src/foo/fooBar.js',
			'Filename is not in kebab case. Rename it to `foo-bar.js`.',
			[{case: 'kebabCase', ignore: [/FOOBAR\.js/u]}],
		),
		testCaseWithOptions(
			'src/foo/fooBar.js',
			'Filename is not in kebab case. Rename it to `foo-bar.js`.',
			[
				{
					case: 'kebabCase',
					ignore: [String.raw`FOOBAR\.js`, String.raw`foobar\.js`],
				},
			],
		),
		testCaseWithOptions(
			'src/foo/fooBar.js',
			'Filename is not in kebab case. Rename it to `foo-bar.js`.',
			[{case: 'kebabCase', ignore: [/FOOBAR\.js/u, /foobar\.js/u]}],
		),
		testCaseWithOptions(
			'src/foo/FooBar.js',
			'Filename is not in camel case or snake case. Rename it to `fooBar.js` or `foo_bar.js`.',
			[
				{
					cases: {
						camelCase: true,
						snakeCase: true,
					},
					ignore: [String.raw`FOOBAR\.js`],
				},
			],
		),
		testCaseWithOptions(
			'src/foo/FooBar.js',
			'Filename is not in camel case or snake case. Rename it to `fooBar.js` or `foo_bar.js`.',
			[
				{
					cases: {
						camelCase: true,
						snakeCase: true,
					},
					ignore: [/FOOBAR\.js/u],
				},
			],
		),
		testCaseWithOptions(
			'src/foo/FooBar.js',
			'Filename is not in camel case or snake case. Rename it to `fooBar.js` or `foo_bar.js`.',
			[
				{
					cases: {
						camelCase: true,
						snakeCase: true,
					},
					ignore: [String.raw`BaRbAz\.js`],
				},
			],
		),
		testCaseWithOptions(
			'src/foo/FooBar.js',
			'Filename is not in camel case or snake case. Rename it to `fooBar.js` or `foo_bar.js`.',
			[
				{
					cases: {
						camelCase: true,
						snakeCase: true,
					},
					ignore: [/BaRbAz\.js/u],
				},
			],
		),
		testCaseWithOptions(
			'src/foo/FooBar.js',
			'Filename is not in camel case or snake case. Rename it to `fooBar.js` or `foo_bar.js`.',
			[
				{
					cases: {
						camelCase: true,
						snakeCase: true,
					},
					ignore: ['^foo'],
				},
			],
		),
		testCaseWithOptions(
			'src/foo/FooBar.js',
			'Filename is not in camel case or snake case. Rename it to `fooBar.js` or `foo_bar.js`.',
			[
				{
					cases: {
						camelCase: true,
						snakeCase: true,
					},
					ignore: [/^foo/],
				},
			],
		),
		testCaseWithOptions(
			'src/foo/FooBar.js',
			'Filename is not in camel case or snake case. Rename it to `fooBar.js` or `foo_bar.js`.',
			[
				{
					cases: {
						camelCase: true,
						snakeCase: true,
					},
					ignore: ['^foo', '^bar'],
				},
			],
		),
		testCaseWithOptions(
			'src/foo/FooBar.js',
			'Filename is not in camel case or snake case. Rename it to `fooBar.js` or `foo_bar.js`.',
			[
				{
					cases: {
						camelCase: true,
						snakeCase: true,
					},
					ignore: [/^foo/, /^bar/],
				},
			],
		),
		// #1136
		testManyCases(
			'src/foo/1_.js',
			{
				camelCase: true,
				pascalCase: true,
				kebabCase: true,
			},
			'Filename is not in camel case, pascal case, or kebab case. Rename it to `1.js`.',
		),
		// Multiple filename parts - single file extension
		testCaseWithOptions(
			'src/foo/foo_bar.test.js',
			'Filename is not in camel case. Rename it to `fooBar.test.js`.',
			[{case: 'camelCase', multipleFileExtensions: false}],
		),
		testCaseWithOptions(
			'test/foo/foo_bar.test_utils.js',
			'Filename is not in camel case. Rename it to `fooBar.testUtils.js`.',
			[{case: 'camelCase', multipleFileExtensions: false}],
		),
		testCaseWithOptions(
			'test/foo/fooBar.test.js',
			'Filename is not in snake case. Rename it to `foo_bar.test.js`.',
			[{case: 'snakeCase', multipleFileExtensions: false}],
		),
		testCaseWithOptions(
			'test/foo/fooBar.testUtils.js',
			'Filename is not in snake case. Rename it to `foo_bar.test_utils.js`.',
			[{case: 'snakeCase', multipleFileExtensions: false}],
		),
		testCaseWithOptions(
			'test/foo/fooBar.test.js',
			'Filename is not in kebab case. Rename it to `foo-bar.test.js`.',
			[{case: 'kebabCase', multipleFileExtensions: false}],
		),
		testCaseWithOptions(
			'test/foo/fooBar.testUtils.js',
			'Filename is not in kebab case. Rename it to `foo-bar.test-utils.js`.',
			[{case: 'kebabCase', multipleFileExtensions: false}],
		),
		testCaseWithOptions(
			'test/foo/foo_bar.test.js',
			'Filename is not in pascal case. Rename it to `FooBar.Test.js`.',
			[{case: 'pascalCase', multipleFileExtensions: false}],
		),
		testCaseWithOptions(
			'test/foo/foo-bar.test-utils.js',
			'Filename is not in pascal case. Rename it to `FooBar.TestUtils.js`.',
			[{case: 'pascalCase', multipleFileExtensions: false}],
		),
	],
});

test.snapshot({
	valid: [
		undefined,
		'src/foo.JS/bar.js',
		'src/foo.JS/bar.spec.js',
		'src/foo.JS/.spec.js',
		'src/foo.JS/bar',
		'foo.SPEC.js',
		'.SPEC.js',
	].map((filename) => ({
		code: `const filename = ${JSON.stringify(filename)};`,
		filename,
	})),
	invalid: [
		{
			code: 'foo();\n'.repeat(10),
			filename: 'src/foo/foo_bar.mJS',
			options: [
				{
					cases: {
						camelCase: true,
						kebabCase: true,
					},
				},
			],
		},
		...['foo.JS', 'foo.Js', 'foo.jS', 'index.JS', 'foo..JS'].map(
			(filename) => ({code: `/* Filename ${filename} */`, filename}),
		),
	],
});
