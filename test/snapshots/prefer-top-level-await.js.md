// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '(async () => {})()' > Code 1`] = `
"
  1 | (async () => {})()
"
`;

exports[`invalid(0): '(async () => {})()' > Error 1/1 1`] = `
"
> 1 | (async () => {})()
    |           ^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(0): 'const foo = async () => {};\\nfoo();' > Code 1`] = `
"
  1 | const foo = async () => {};
  2 | foo();
"
`;

exports[`invalid(0): 'const foo = async () => {};\\nfoo();' > Error 1/1 1`] = `
"
  1 | const foo = async () => {};
> 2 | foo();
    | ^^^^^ Prefer top-level await over an async function \`foo\` call.

--------------------------------------------------------------------------------
Suggestion 1/1: Insert \`await\`.
  1 | const foo = async () => {};
  2 | await foo();
"
`;

exports[`invalid(0): 'foo.then(bar)' > Code 1`] = `
"
  1 | foo.then(bar)
"
`;

exports[`invalid(0): 'foo.then(bar)' > Error 1/1 1`] = `
"
> 1 | foo.then(bar)
    |     ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(1): '(async () => {})?.()' > Code 1`] = `
"
  1 | (async () => {})?.()
"
`;

exports[`invalid(1): '(async () => {})?.()' > Error 1/1 1`] = `
"
> 1 | (async () => {})?.()
    |           ^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(1): 'const foo = async () => {};\\nfoo?.();' > Code 1`] = `
"
  1 | const foo = async () => {};
  2 | foo?.();
"
`;

exports[`invalid(1): 'const foo = async () => {};\\nfoo?.();' > Error 1/1 1`] = `
"
  1 | const foo = async () => {};
> 2 | foo?.();
    | ^^^^^^^ Prefer top-level await over an async function \`foo\` call.

--------------------------------------------------------------------------------
Suggestion 1/1: Insert \`await\`.
  1 | const foo = async () => {};
  2 | await foo?.();
"
`;

exports[`invalid(1): 'foo.then?.(bar)' > Code 1`] = `
"
  1 | foo.then?.(bar)
"
`;

exports[`invalid(1): 'foo.then?.(bar)' > Error 1/1 1`] = `
"
> 1 | foo.then?.(bar)
    |     ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(2): '(async function() {})()' > Code 1`] = `
"
  1 | (async function() {})()
"
`;

exports[`invalid(2): '(async function() {})()' > Error 1/1 1`] = `
"
> 1 | (async function() {})()
    |  ^^^^^^^^^^^^^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(2): 'const foo = async () => {};\\nfoo().th…' > Code 1`] = `
"
  1 | const foo = async () => {};
  2 | foo().then(foo);
"
`;

exports[`invalid(2): 'const foo = async () => {};\\nfoo().th…' > Error 1/1 1`] = `
"
  1 | const foo = async () => {};
> 2 | foo().then(foo);
    |       ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(2): 'foo?.then(bar)' > Code 1`] = `
"
  1 | foo?.then(bar)
"
`;

exports[`invalid(2): 'foo?.then(bar)' > Error 1/1 1`] = `
"
> 1 | foo?.then(bar)
    |      ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(3): '(async function() {}())' > Code 1`] = `
"
  1 | (async function() {}())
"
`;

exports[`invalid(3): '(async function() {}())' > Error 1/1 1`] = `
"
> 1 | (async function() {}())
    |  ^^^^^^^^^^^^^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(3): 'const foo = async function () {}, bar…' > Code 1`] = `
"
  1 | const foo = async function () {}, bar = 1;
  2 | foo(bar);
"
`;

exports[`invalid(3): 'const foo = async function () {}, bar…' > Error 1/1 1`] = `
"
  1 | const foo = async function () {}, bar = 1;
> 2 | foo(bar);
    | ^^^^^^^^ Prefer top-level await over an async function \`foo\` call.

--------------------------------------------------------------------------------
Suggestion 1/1: Insert \`await\`.
  1 | const foo = async function () {}, bar = 1;
  2 | await foo(bar);
"
`;

exports[`invalid(3): 'foo.catch(() => process.exit(1))' > Code 1`] = `
"
  1 | foo.catch(() => process.exit(1))
"
`;

exports[`invalid(3): 'foo.catch(() => process.exit(1))' > Error 1/1 1`] = `
"
> 1 | foo.catch(() => process.exit(1))
    |     ^^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(4): '(async function run() {})()' > Code 1`] = `
"
  1 | (async function run() {})()
"
`;

exports[`invalid(4): '(async function run() {})()' > Error 1/1 1`] = `
"
> 1 | (async function run() {})()
    |  ^^^^^^^^^^^^^^^^^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(4): 'foo();\\nasync function foo() {}' > Code 1`] = `
"
  1 | foo();
  2 | async function foo() {}
"
`;

exports[`invalid(4): 'foo();\\nasync function foo() {}' > Error 1/1 1`] = `
"
> 1 | foo();
    | ^^^^^ Prefer top-level await over an async function \`foo\` call.
  2 | async function foo() {}

--------------------------------------------------------------------------------
Suggestion 1/1: Insert \`await\`.
  1 | await foo();
  2 | async function foo() {}
"
`;

exports[`invalid(4): 'foo.finally(bar)' > Code 1`] = `
"
  1 | foo.finally(bar)
"
`;

exports[`invalid(4): 'foo.finally(bar)' > Error 1/1 1`] = `
"
> 1 | foo.finally(bar)
    |     ^^^^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(5): '(async function(c, d) {})(a, b)' > Code 1`] = `
"
  1 | (async function(c, d) {})(a, b)
"
`;

exports[`invalid(5): '(async function(c, d) {})(a, b)' > Error 1/1 1`] = `
"
> 1 | (async function(c, d) {})(a, b)
    |  ^^^^^^^^^^^^^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(5): 'const foo = async () => {};\\nif (true…' > Code 1`] = `
"
  1 | const foo = async () => {};
  2 | if (true) {
  3 | 	alert();
  4 | } else {
  5 | 	foo();
  6 | }
"
`;

exports[`invalid(5): 'const foo = async () => {};\\nif (true…' > Error 1/1 1`] = `
"
  1 | const foo = async () => {};
  2 | if (true) {
  3 | 	alert();
  4 | } else {
> 5 | 	foo();
    | 	^^^^^ Prefer top-level await over an async function \`foo\` call.
  6 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Insert \`await\`.
  1 | const foo = async () => {};
  2 | if (true) {
  3 | 	alert();
  4 | } else {
  5 | 	await foo();
  6 | }
"
`;

exports[`invalid(5): 'foo.then(bar, baz)' > Code 1`] = `
"
  1 | foo.then(bar, baz)
"
`;

exports[`invalid(5): 'foo.then(bar, baz)' > Error 1/1 1`] = `
"
> 1 | foo.then(bar, baz)
    |     ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(6): 'foo.then(bar, baz).finally(qux)' > Code 1`] = `
"
  1 | foo.then(bar, baz).finally(qux)
"
`;

exports[`invalid(6): 'foo.then(bar, baz).finally(qux)' > Error 1/1 1`] = `
"
> 1 | foo.then(bar, baz).finally(qux)
    |                    ^^^^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(6): 'if (foo) (async () => {})()' > Code 1`] = `
"
  1 | if (foo) (async () => {})()
"
`;

exports[`invalid(6): 'if (foo) (async () => {})()' > Error 1/1 1`] = `
"
> 1 | if (foo) (async () => {})()
    |                    ^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(7): '(foo.then(bar, baz)).finally(qux)' > Code 1`] = `
"
  1 | (foo.then(bar, baz)).finally(qux)
"
`;

exports[`invalid(7): '(foo.then(bar, baz)).finally(qux)' > Error 1/1 1`] = `
"
> 1 | (foo.then(bar, baz)).finally(qux)
    |                      ^^^^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(7): '{\\n\\t(async () => {})();\\n}' > Code 1`] = `
"
  1 | {
  2 | 	(async () => {})();
  3 | }
"
`;

exports[`invalid(7): '{\\n\\t(async () => {})();\\n}' > Error 1/1 1`] = `
"
  1 | {
> 2 | 	(async () => {})();
    | 	          ^^ Prefer top-level await over an async IIFE.
  3 | }
"
`;

exports[`invalid(8): '(async () => {})().catch(() => proces…' > Code 1`] = `
"
  1 | (async () => {})().catch(() => process.exit(1))
"
`;

exports[`invalid(8): '(async () => {})().catch(() => proces…' > Error 1/1 1`] = `
"
> 1 | (async () => {})().catch(() => process.exit(1))
    |                    ^^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(8): 'a = (async () => {})()' > Code 1`] = `
"
  1 | a = (async () => {})()
"
`;

exports[`invalid(8): 'a = (async () => {})()' > Error 1/1 1`] = `
"
> 1 | a = (async () => {})()
    |               ^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(9): '!async function() {}()' > Code 1`] = `
"
  1 | !async function() {}()
"
`;

exports[`invalid(9): '!async function() {}()' > Error 1/1 1`] = `
"
> 1 | !async function() {}()
    |  ^^^^^^^^^^^^^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(9): '(async function() {}()).finally(() =>…' > Code 1`] = `
"
  1 | (async function() {}()).finally(() => {})
"
`;

exports[`invalid(9): '(async function() {}()).finally(() =>…' > Error 1/1 1`] = `
"
> 1 | (async function() {}()).finally(() => {})
    |                         ^^^^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(10): 'for (const foo of bar) foo.then(bar)' > Code 1`] = `
"
  1 | for (const foo of bar) foo.then(bar)
"
`;

exports[`invalid(10): 'for (const foo of bar) foo.then(bar)' > Error 1/1 1`] = `
"
> 1 | for (const foo of bar) foo.then(bar)
    |                            ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(10): 'void async function() {}()' > Code 1`] = `
"
  1 | void async function() {}()
"
`;

exports[`invalid(10): 'void async function() {}()' > Error 1/1 1`] = `
"
> 1 | void async function() {}()
    |      ^^^^^^^^^^^^^^ Prefer top-level await over an async IIFE.
"
`;

exports[`invalid(11): '(async () => {})().catch(foo)' > Code 1`] = `
"
  1 | (async () => {})().catch(foo)
"
`;

exports[`invalid(11): '(async () => {})().catch(foo)' > Error 1/1 1`] = `
"
> 1 | (async () => {})().catch(foo)
    |                    ^^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(11): 'foo?.then(bar).finally(qux)' > Code 1`] = `
"
  1 | foo?.then(bar).finally(qux)
"
`;

exports[`invalid(11): 'foo?.then(bar).finally(qux)' > Error 1/1 1`] = `
"
> 1 | foo?.then(bar).finally(qux)
    |                ^^^^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(12): 'foo.then().toString()' > Code 1`] = `
"
  1 | foo.then().toString()
"
`;

exports[`invalid(12): 'foo.then().toString()' > Error 1/1 1`] = `
"
> 1 | foo.then().toString()
    |     ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(13): '!foo.then()' > Code 1`] = `
"
  1 | !foo.then()
"
`;

exports[`invalid(13): '!foo.then()' > Error 1/1 1`] = `
"
> 1 | !foo.then()
    |      ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(14): 'foo.then(bar).then(baz)?.then(qux)' > Code 1`] = `
"
  1 | foo.then(bar).then(baz)?.then(qux)
"
`;

exports[`invalid(14): 'foo.then(bar).then(baz)?.then(qux)' > Error 1/1 1`] = `
"
> 1 | foo.then(bar).then(baz)?.then(qux)
    |                          ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(15): 'foo.then(bar).then(baz).then?.(qux)' > Code 1`] = `
"
  1 | foo.then(bar).then(baz).then?.(qux)
"
`;

exports[`invalid(15): 'foo.then(bar).then(baz).then?.(qux)' > Error 1/1 1`] = `
"
> 1 | foo.then(bar).then(baz).then?.(qux)
    |                         ^^^^ Prefer top-level await over using a promise chain.
"
`;

exports[`invalid(16): 'foo.then(bar).catch(bar).finally(bar)' > Code 1`] = `
"
  1 | foo.then(bar).catch(bar).finally(bar)
"
`;

exports[`invalid(16): 'foo.then(bar).catch(bar).finally(bar)' > Error 1/1 1`] = `
"
> 1 | foo.then(bar).catch(bar).finally(bar)
    |                          ^^^^^^^ Prefer top-level await over using a promise chain.
"
`;
