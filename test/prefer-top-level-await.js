import outdent from 'outdent';
import {getTester} from './utils/test.js';

const {test} = getTester(import.meta);

// Async IIFE
test.snapshot({
	valid: [
		'a()',
		'a = async () => {}',
		'(async function *() {})()',
		outdent`
			function foo() {
				if (foo) {
					(async () => {})()
				}
			}
		`,
		'await (async () => {})()',
	],
	invalid: [
		'(async () => {})()',
		'(async () => {})?.()',
		'(async function() {})()',
		'(async function() {}())',
		'(async function run() {})()',
		'(async function(c, d) {})(a, b)',
		'if (foo) (async () => {})()',
		outdent`
			{
				(async () => {})();
			}
		`,
		'a = (async () => {})()',
		'!async function() {}()',
		'void async function() {}()',
		'(async () => {})().catch(foo)',
	],
});

// Promise
test.snapshot({
	valid: [
		'foo.then',
		'await foo.then(bar)',
		'await foo.then(bar).catch(bar)',
		'await foo.then?.(bar)',
		'await foo.then(bar)?.catch(bar)',
		'await foo.then(bar)?.catch?.(bar)',
		outdent`
			class Example {
				property = promise.then(bar)
			}
		`,
		outdent`
			const Example = class Example {
				property = promise.then(bar)
			}
		`,
		outdent`
			class Example {
				static {
					promise.then(bar)
				}
			}
		`,
		outdent`
			const Example = class Example {
				static {
					promise.then(bar)
				}
			}
		`,
		{
			code: 'foo.then(bar)',
			filename: 'foo.cjS',
		},
	],
	invalid: [
		'foo.then(bar)',
		'foo.then?.(bar)',
		'foo?.then(bar)',
		'foo.catch(() => process.exit(1))',
		'foo.finally(bar)',
		'foo.then(bar, baz)',
		'foo.then(bar, baz).finally(qux)',
		'(foo.then(bar, baz)).finally(qux)',
		'(async () => {})().catch(() => process.exit(1))',
		'(async function() {}()).finally(() => {})',
		'for (const foo of bar) foo.then(bar)',
		'foo?.then(bar).finally(qux)',
		'foo.then().toString()',
		'!foo.then()',
		'foo.then(bar).then(baz)?.then(qux)',
		'foo.then(bar).then(baz).then?.(qux)',
		'foo.then(bar).catch(bar).finally(bar)',
	],
});

// Identifier
test.snapshot({
	valid: [
		'foo()',
		'foo.bar()',
		outdent`
			function foo() {
				return async () => {};
			}
			foo()();
		`,
		outdent`
			const [foo] = [async () => {}];
			foo();
		`,
		outdent`
			function foo() {}
			foo();
		`,
		outdent`
			async function * foo() {}
			foo();
		`,
		outdent`
			var foo = async () => {};
			foo();
		`,
		outdent`
			let foo = async () => {};
			foo();
		`,
		outdent`
			const foo = 1, bar = async () => {};
			foo();
		`,
		outdent`
			async function foo() {}
			const bar = foo;
			bar();
		`,
		{
			code: outdent`
				async function foo() {}
				async function foo() {}
				foo();
			`,
			languageOptions: {parserOptions: {sourceType: 'script'}},
		},
		{
			code: outdent`
				foo();
				async function foo() {}
				async function foo() {}
			`,
			languageOptions: {parserOptions: {sourceType: 'script'}},
		},
		outdent`
			const program = {async run () {}};
			program.run()
		`,
		outdent`
			const program = {async run () {}};
			const {run} = program;
			run()
		`,
		outdent`
			const foo = async () => {};
			await foo();
		`,
		'for (const statement of statements) { statement() };',
	],
	invalid: [
		outdent`
			const foo = async () => {};
			foo();
		`,
		outdent`
			const foo = async () => {};
			foo?.();
		`,
		outdent`
			const foo = async () => {};
			foo().then(foo);
		`,
		outdent`
			const foo = async function () {}, bar = 1;
			foo(bar);
		`,
		outdent`
			foo();
			async function foo() {}
		`,
		outdent`
			const foo = async () => {};
			if (true) {
				alert();
			} else {
				foo();
			}
		`,
	],
});

// In `Promise` methods
test.snapshot({
	valid: [
		outdent`
			const foo = async () => {};
			await Promise.all([
				(async () => {})(),
				/* hole */,
				foo(),
				foo.then(bar),
				foo.catch(bar),
			]);
			await Promise.allSettled([foo()]);
			await Promise?.any([foo()]);
			await Promise.race?.([foo()]);
		`,
		outdent`
			const foo = async () => {};
			const promise = Promise.all([
				(async () => {})(),
				foo(),
				foo.then(bar),
				foo.catch(bar),
			]);
			await promise;
		`,
	],
	invalid: [],
});

test.babel({
	valid: [
		'await foo',
		'await foo()',
		outdent`
			try {
				await run()
			} catch {
				process.exit(1)
			}
		`,
	],
	invalid: [],
});
