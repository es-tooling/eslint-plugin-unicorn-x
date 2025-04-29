import {getTester} from './utils/test.js';

const {test} = getTester(import.meta);

const expiredTodoError = (expirationDate, message) => ({
	message: `There is a TODO that is past due date: ${expirationDate}. ${message}`,
});

const avoidMultipleDatesError = (expirationDates, message) => ({
	message: `Avoid using multiple expiration dates in TODO: ${expirationDates}. ${message}`,
});

const havePackageError = (package_, message) => ({
	message: `There is a TODO that is deprecated since you installed: ${package_}. ${message}`,
});

const dontHavePackageError = (package_, message) => ({
	message: `There is a TODO that is deprecated since you uninstalled: ${package_}. ${message}`,
});

const versionMatchesError = (comparison, message) => ({
	message: `There is a TODO match for package version: ${comparison}. ${message}`,
});

const engineMatchesError = (comparison, message) => ({
	message: `There is a TODO match for Node.js version: ${comparison}. ${message}`,
});

const reachedPackageVersionError = (version, message) => ({
	message: `There is a TODO that is past due package version: ${version}. ${message}`,
});

const avoidMultiplePackageVersionsError = (versions, message) => ({
	message: `Avoid using multiple package versions in TODO: ${versions}. ${message}`,
});

const removeWhitespaceError = (argument, message) => ({
	message: `Avoid using whitespace on TODO argument. On '${argument}' use '${argument.replaceAll(' ', '')}'. ${message}`,
});

const missingAtSymbolError = (bad, good, message) => ({
	message: `Missing '@' on TODO argument. On '${bad}' use '${good}'. ${message}`,
});

const noWarningCommentError = (comment) => ({
	message: `Unexpected 'todo' comment without any conditions: '${comment}'.`,
});

test({
	valid: [
		'// TODO [2200-12-12]: Too long... Can you feel it?',
		'// FIXME [2200-12-12]: Too long... Can you feel it?',
		'// XXX [2200-12-12]: Too long... Can you feel it?',
		'// TODO (lubien) [2200-12-12]: Too long... Can you feel it?',
		'// FIXME [2200-12-12] (lubien): Too long... Can you feel it?',
		{
			code: '// Expire Condition [2200-12-12]: new term name',
			errors: [],
			options: [{terms: ['Expire Condition']}],
		},
		'// Expire Condition [2000-01-01]: new term name',
		'// TODO [>2000]: We sure didnt past this version',
		{
			code: '// TODO [-known-package]: We actually use this.',
			filename: './test/fixture/basic-package/foo.js',
		},
		{
			code: '// TODO [+unknown-package]: I think we wont need a broken package.',
			filename: './test/fixture/basic-package/foo.js',
		},
		'// TODO [semver@>1000]: Welp hopefully we wont get at that.',
		'// TODO [semver@>=1000]: Welp hopefully we wont get at that.',
		{
			code: '// TODO [pre-release-package@>=1.0.0]: we are using a pre-release',
			filename: './test/fixture/basic-package/foo.js',
		},
		{
			code: '// TODO [pre-release-package@>=1.0.0-gamma.1]: beta comes first from gamma',
			filename: './test/fixture/basic-package/foo.js',
		},
		{
			code: '// TODO [pre-release-package@>=1.0.0-beta.2]: we are in beta.1',
			filename: './test/fixture/basic-package/foo.js',
		},
		{
			code: '// TODO [2200-12-12, -known-package]: Combo',
			filename: './test/fixture/basic-package/foo.js',
		},
		{
			code: '// TODO [2200-12-12, -known-package, +unknown-package]: Combo',
			filename: './test/fixture/basic-package/foo.js',
		},
		{
			code: '// TODO [2200-12-12, -known-package, +unknown-package, semver@>=1000]: Combo',
			filename: './test/fixture/basic-package/foo.js',
		},
		'// TODO [engine:node@>=100]: When we start supporting only >= 10',
		`// TODO [2200-12-12]: Multiple
		// TODO [2200-12-12]: Lines`,
		{
			code: `/*
		  * TODO [2200-12-12]: Yet
		  * TODO [engine:node@>=100]: Another
		  * TODO [+unknown-package]: Way
		  */`,
			filename: './test/fixture/basic-package/foo.js',
		},
		{
			code: '// TODO',
			errors: [],
		},
		{
			code: '// TODO [invalid]',
			errors: [],
		},
		{
			code: '// TODO [] might have [some] that [try [to trick] me]',
			errors: [],
		},
		{
			code: '// TODO [but [it will]] [fallback] [[[ to the default ]]] rule [[',
			errors: [],
		},
		{
			code: '// TODO ISSUE-123 fix later',
			options: [{allowWarningComments: false, ignore: [String.raw`ISSUE-\d+`]}],
		},
		{
			code: '// TODO [ISSUE-123] fix later',
			options: [{allowWarningComments: false, ignore: [String.raw`ISSUE-\d+`]}],
		},
		{
			code: '// TODO [1999-01-01, ISSUE-123] fix later',
			options: [{allowWarningComments: false, ignore: [String.raw`ISSUE-\d+`]}],
		},
		{
			code: '// TODO [Issue-123] fix later',
			options: [{allowWarningComments: false, ignore: [/issue-\d+/i]}],
		},
		{
			code: '// TODO [2001-01-01]: quite old',
			options: [{date: '2000-01-01'}],
		},
	],
	invalid: [
		{
			code: '// TODO [2000-01-01]: too old',
			errors: [expiredTodoError('2000-01-01', 'too old')],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: `/*
			* TODO [2000-01-01]: Yet
			* TODO [2000-01-01]: Another
			* TODO [2000-01-01] Way
			*/`,
			errors: [
				expiredTodoError('2000-01-01', 'Yet'),
				expiredTodoError('2000-01-01', 'Another'),
				expiredTodoError('2000-01-01', 'Way'),
			],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: `/*
			* TODO [2000-01-01]: Invalid
			* TODO [2200-01-01]: Valid
			* TODO [2000-01-01]: Invalid
			*/`,
			errors: [
				expiredTodoError('2000-01-01', 'Invalid'),
				expiredTodoError('2000-01-01', 'Invalid'),
			],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: `/*
			* Something here
			* TODO [engine:node@>=8]: Invalid
			* Also something here
			*/`,
			errors: [engineMatchesError('node>=8', 'Invalid')],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: '// fixme [2000-01-01]: too old',
			errors: [expiredTodoError('2000-01-01', 'too old')],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: '// xxx [2000-01-01]: too old',
			errors: [expiredTodoError('2000-01-01', 'too old')],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: '// ToDo [2000-01-01]: too old',
			errors: [expiredTodoError('2000-01-01', 'too old')],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: '// fIxME [2000-01-01]: too old',
			errors: [expiredTodoError('2000-01-01', 'too old')],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: '// Todoist [2000-01-01]: too old',
			errors: [expiredTodoError('2000-01-01', 'too old')],
			options: [{ignoreDatesOnPullRequests: false, terms: ['Todoist']}],
		},
		{
			code: '// Expire Condition [2000-01-01]: too old',
			errors: [expiredTodoError('2000-01-01', 'too old')],
			options: [
				{ignoreDatesOnPullRequests: false, terms: ['Expire Condition']},
			],
		},
		{
			code: '// XxX [2000-01-01]: too old',
			errors: [expiredTodoError('2000-01-01', 'too old')],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: '// TODO [2200-12-12, 2200-12-12]: Multiple dates',
			errors: [
				avoidMultipleDatesError('2200-12-12, 2200-12-12', 'Multiple dates'),
			],
		},
		{
			code: '// TODO [>1]: if your package.json version is >1',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				reachedPackageVersionError('>1', 'if your package.json version is >1'),
			],
		},
		{
			code: '// TODO [>1, >2]: multiple package versions',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				avoidMultiplePackageVersionsError(
					'>1, >2',
					'multiple package versions',
				),
			],
		},
		{
			code: '// TODO [>=1]: if your package.json version is >=1',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				reachedPackageVersionError(
					'>=1',
					'if your package.json version is >=1',
				),
			],
		},
		{
			code: '// TODO [+known-package]: when you install `known-package`',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				havePackageError('known-package', 'when you install `known-package`'),
			],
		},
		{
			code: '// TODO [-unknown-package]: when you uninstall `unknown-package`',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				dontHavePackageError(
					'unknown-package',
					'when you uninstall `unknown-package`',
				),
			],
		},
		{
			code: '// TODO [known-package@>=1]: when `known-package` version is >= 1',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				versionMatchesError(
					'known-package >= 1',
					'when `known-package` version is >= 1',
				),
			],
		},
		{
			code: '// TODO [engine:node@>=8]: when support is for node >= 8',
			errors: [engineMatchesError('node>=8', 'when support is for node >= 8')],
		},
		{
			code: '// TODO [known-package@>0.2.0]: when `known-package` version is > 0.2.0',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				versionMatchesError(
					'known-package > 0.2.0',
					'when `known-package` version is > 0.2.0',
				),
			],
		},
		{
			code: '// TODO [pre-release-package@>=1.0.0-alfa.1]: when `pre-release-package` version is >= 1.0.0-alfa.1',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				versionMatchesError(
					'pre-release-package >= 1.0.0-alfa.1',
					'when `pre-release-package` version is >= 1.0.0-alfa.1',
				),
			],
		},
		{
			code: '// TODO [pre-release-package@>=1.0.0-beta.1]: when `pre-release-package` version is >= 1.0.0-beta.1',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				versionMatchesError(
					'pre-release-package >= 1.0.0-beta.1',
					'when `pre-release-package` version is >= 1.0.0-beta.1',
				),
			],
		},
		{
			code: '// TODO [pre-release-package@>=1.0.0-beta.0]: when `pre-release-package` version is >= 1.0.0-beta.0',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				versionMatchesError(
					'pre-release-package >= 1.0.0-beta.0',
					'when `pre-release-package` version is >= 1.0.0-beta.0',
				),
			],
		},
		{
			code: '// TODO [semver>1]: Missing @.',
			errors: [missingAtSymbolError('semver>1', 'semver@>1', 'Missing @.')],
		},
		{
			code: '// TODO [> 1]: Remove whitespace when it can fix.',
			errors: [
				removeWhitespaceError('> 1', 'Remove whitespace when it can fix.'),
			],
		},
		{
			code: '// TODO [semver@> 1]: Remove whitespace when it can fix.',
			errors: [
				removeWhitespaceError(
					'semver@> 1',
					'Remove whitespace when it can fix.',
				),
			],
		},
		{
			code: '// TODO [semver @>1]: Remove whitespace when it can fix.',
			errors: [
				removeWhitespaceError(
					'semver @>1',
					'Remove whitespace when it can fix.',
				),
			],
		},
		{
			code: '// TODO [semver@>= 1]: Remove whitespace when it can fix.',
			errors: [
				removeWhitespaceError(
					'semver@>= 1',
					'Remove whitespace when it can fix.',
				),
			],
		},
		{
			code: '// TODO [semver @>=1]: Remove whitespace when it can fix.',
			errors: [
				removeWhitespaceError(
					'semver @>=1',
					'Remove whitespace when it can fix.',
				),
			],
		},
		{
			code: '// TODO [engine:node @>=1]: Remove whitespace when it can fix.',
			errors: [
				removeWhitespaceError(
					'engine:node @>=1',
					'Remove whitespace when it can fix.',
				),
			],
		},
		{
			code: '// TODO [engine:node@>= 1]: Remove whitespace when it can fix.',
			errors: [
				removeWhitespaceError(
					'engine:node@>= 1',
					'Remove whitespace when it can fix.',
				),
			],
		},
		{
			code: '// TODO',
			errors: [noWarningCommentError('TODO')],
			options: [{allowWarningComments: false}],
		},
		{
			code: '// TODO []',
			errors: [noWarningCommentError('TODO []')],
			options: [{allowWarningComments: false}],
		},
		{
			code: '// TODO [no meaning at all]',
			errors: [noWarningCommentError('TODO [no meaning at all]')],
			options: [{allowWarningComments: false}],
		},
		{
			code: '// TODO [] might have [some] that [try [to trick] me]',
			errors: [
				noWarningCommentError('TODO [] might have [some] that [try [to...'),
			],
			options: [{allowWarningComments: false}],
		},
		{
			code: '// TODO [but [it will]] [fallback] [[[ to the default ]]] rule [[[',
			errors: [
				noWarningCommentError('TODO [but [it will]] [fallback] [[[ to...'),
			],
			options: [{allowWarningComments: false}],
		},
		{
			code: '// TODO [engine:npm@>=10000]: Unsupported engine',
			errors: [
				noWarningCommentError('TODO [engine:npm@>=10000]: Unsupported...'),
			],
			options: [{allowWarningComments: false}],
		},
		{
			code: '// TODO [engine:somethingrandom@>=10000]: Unsupported engine',
			errors: [
				noWarningCommentError('TODO [engine:somethingrandom@>=10000]:...'),
			],
			options: [{allowWarningComments: false}],
		},
		{
			code: '// TODO [2000-01-01, >1]: Combine date with package version',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				expiredTodoError('2000-01-01', 'Combine date with package version'),
				reachedPackageVersionError('>1', 'Combine date with package version'),
			],
			options: [{ignoreDatesOnPullRequests: false}],
		},
		{
			code: '// TODO [2200-12-12, >1, 2200-12-12, >2]: Multiple dates and package versions',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				avoidMultipleDatesError(
					'2200-12-12, 2200-12-12',
					'Multiple dates and package versions',
				),
				avoidMultiplePackageVersionsError(
					'>1, >2',
					'Multiple dates and package versions',
				),
			],
		},
		{
			code: '// TODO [-unknown-package, known-package@>=1]: Combine not having a package with version match',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				dontHavePackageError(
					'unknown-package',
					'Combine not having a package with version match',
				),
				versionMatchesError(
					'known-package >= 1',
					'Combine not having a package with version match',
				),
			],
		},
		{
			code: '// TODO [+known-package, -unknown-package]: Combine presence/absence of packages',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				havePackageError(
					'known-package',
					'Combine presence/absence of packages',
				),
				dontHavePackageError(
					'unknown-package',
					'Combine presence/absence of packages',
				),
			],
		},
		{
			code: '// Expire Condition [2000-01-01, semver>1]: Expired TODO and missing symbol',
			errors: [
				expiredTodoError('2000-01-01', 'Expired TODO and missing symbol'),
				missingAtSymbolError(
					'semver>1',
					'semver@>1',
					'Expired TODO and missing symbol',
				),
			],
			options: [
				{ignoreDatesOnPullRequests: false, terms: ['Expire Condition']},
			],
		},
		{
			code: '// TODO [semver @>=1, -unknown-package]: Package uninstalled and whitespace error',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				dontHavePackageError(
					'unknown-package',
					'Package uninstalled and whitespace error',
				),
				removeWhitespaceError(
					'semver @>=1',
					'Package uninstalled and whitespace error',
				),
			],
		},
		{
			code: '// HUGETODO [semver @>=1, engine:node@>=8, 2000-01-01, -unknown-package, >1, +known-package, known-package@>=1]: Big mix',
			filename: './test/fixture/basic-package/foo.js',
			errors: [
				expiredTodoError('2000-01-01', 'Big mix'),
				reachedPackageVersionError('>1', 'Big mix'),
				dontHavePackageError('unknown-package', 'Big mix'),
				havePackageError('known-package', 'Big mix'),
				versionMatchesError('known-package >= 1', 'Big mix'),
				engineMatchesError('node>=8', 'Big mix'),
				removeWhitespaceError('semver @>=1', 'Big mix'),
			],
			options: [{ignoreDatesOnPullRequests: false, terms: ['HUGETODO']}],
		},
		{
			code: '// TODO [ISSUE-123] fix later',
			options: [{allowWarningComments: false, ignore: []}],
			errors: [noWarningCommentError('TODO [ISSUE-123] fix later')],
		},
		{
			code: `
			// TODO fix later
			// TODO ISSUE-123 fix later
			`,
			options: [{allowWarningComments: false, ignore: [/issue-\d+/i]}],
			errors: [noWarningCommentError('TODO fix later')],
		},
		{
			code: `/*
			TODO Invalid
			TODO ISSUE-123 Valid
			*/`,
			options: [{allowWarningComments: false, ignore: [/issue-\d+/i]}],
			errors: [noWarningCommentError('TODO Invalid')],
		},
		{
			code: '// TODO [2999-12-01]: Y3K bug',
			options: [{date: '3000-01-01', ignoreDatesOnPullRequests: false}],
			errors: [expiredTodoError('2999-12-01', 'Y3K bug')],
		},
	],
});
