// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'global' > Code 1`] = `
"
  1 | global
"
`;

exports[`invalid(0): 'global' > Error 1/1 1`] = `
"
> 1 | global
    | ^^^^^^ Prefer \`globalThis\` over \`global\`.
"
`;

exports[`invalid(0): 'global' > Output 1`] = `
"
  1 | globalThis
"
`;

exports[`invalid(0): 'global.global_did_not_declare_in_lang…' > Code 1`] = `
"
  1 | global.global_did_not_declare_in_language_options
"
`;

exports[`invalid(0): 'global.global_did_not_declare_in_lang…' > Error 1/1 1`] = `
"
> 1 | global.global_did_not_declare_in_language_options
    | ^^^^^^ Prefer \`globalThis\` over \`global\`.
"
`;

exports[`invalid(0): 'global.global_did_not_declare_in_lang…' > Output 1`] = `
"
  1 | globalThis.global_did_not_declare_in_language_options
"
`;

exports[`invalid(1): 'self' > Code 1`] = `
"
  1 | self
"
`;

exports[`invalid(1): 'self' > Error 1/1 1`] = `
"
> 1 | self
    | ^^^^ Prefer \`globalThis\` over \`self\`.
"
`;

exports[`invalid(1): 'self' > Output 1`] = `
"
  1 | globalThis
"
`;

exports[`invalid(1): 'window.window_did_not_declare_in_lang…' > Code 1`] = `
"
  1 | window.window_did_not_declare_in_language_options
"
`;

exports[`invalid(1): 'window.window_did_not_declare_in_lang…' > Error 1/1 1`] = `
"
> 1 | window.window_did_not_declare_in_language_options
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(1): 'window.window_did_not_declare_in_lang…' > Output 1`] = `
"
  1 | globalThis.window_did_not_declare_in_language_options
"
`;

exports[`invalid(2): 'self.self_did_not_declare_in_language…' > Code 1`] = `
"
  1 | self.self_did_not_declare_in_language_options
"
`;

exports[`invalid(2): 'self.self_did_not_declare_in_language…' > Error 1/1 1`] = `
"
> 1 | self.self_did_not_declare_in_language_options
    | ^^^^ Prefer \`globalThis\` over \`self\`.
"
`;

exports[`invalid(2): 'self.self_did_not_declare_in_language…' > Output 1`] = `
"
  1 | globalThis.self_did_not_declare_in_language_options
"
`;

exports[`invalid(2): 'window' > Code 1`] = `
"
  1 | window
"
`;

exports[`invalid(2): 'window' > Error 1/1 1`] = `
"
> 1 | window
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(2): 'window' > Output 1`] = `
"
  1 | globalThis
"
`;

exports[`invalid(3): 'window.foo' > Code 1`] = `
"
  1 | window.foo
"
`;

exports[`invalid(3): 'window.foo' > Error 1/1 1`] = `
"
> 1 | window.foo
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(3): 'window.foo' > Output 1`] = `
"
  1 | globalThis.foo
"
`;

exports[`invalid(4): 'window.foo()' > Code 1`] = `
"
  1 | window.foo()
"
`;

exports[`invalid(4): 'window.foo()' > Error 1/1 1`] = `
"
> 1 | window.foo()
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(4): 'window.foo()' > Output 1`] = `
"
  1 | globalThis.foo()
"
`;

exports[`invalid(5): 'window > 10' > Code 1`] = `
"
  1 | window > 10
"
`;

exports[`invalid(5): 'window > 10' > Error 1/1 1`] = `
"
> 1 | window > 10
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(5): 'window > 10' > Output 1`] = `
"
  1 | globalThis > 10
"
`;

exports[`invalid(6): '10 > window' > Code 1`] = `
"
  1 | 10 > window
"
`;

exports[`invalid(6): '10 > window' > Error 1/1 1`] = `
"
> 1 | 10 > window
    |      ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(6): '10 > window' > Output 1`] = `
"
  1 | 10 > globalThis
"
`;

exports[`invalid(7): 'window ?? 10' > Code 1`] = `
"
  1 | window ?? 10
"
`;

exports[`invalid(7): 'window ?? 10' > Error 1/1 1`] = `
"
> 1 | window ?? 10
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(7): 'window ?? 10' > Output 1`] = `
"
  1 | globalThis ?? 10
"
`;

exports[`invalid(8): '10 ?? window' > Code 1`] = `
"
  1 | 10 ?? window
"
`;

exports[`invalid(8): '10 ?? window' > Error 1/1 1`] = `
"
> 1 | 10 ?? window
    |       ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(8): '10 ?? window' > Output 1`] = `
"
  1 | 10 ?? globalThis
"
`;

exports[`invalid(9): 'window.foo = 123' > Code 1`] = `
"
  1 | window.foo = 123
"
`;

exports[`invalid(9): 'window.foo = 123' > Error 1/1 1`] = `
"
> 1 | window.foo = 123
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(9): 'window.foo = 123' > Output 1`] = `
"
  1 | globalThis.foo = 123
"
`;

exports[`invalid(10): 'window = 123' > Code 1`] = `
"
  1 | window = 123
"
`;

exports[`invalid(10): 'window = 123' > Error 1/1 1`] = `
"
> 1 | window = 123
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(10): 'window = 123' > Output 1`] = `
"
  1 | globalThis = 123
"
`;

exports[`invalid(11): 'obj.a = window' > Code 1`] = `
"
  1 | obj.a = window
"
`;

exports[`invalid(11): 'obj.a = window' > Error 1/1 1`] = `
"
> 1 | obj.a = window
    |         ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(11): 'obj.a = window' > Output 1`] = `
"
  1 | obj.a = globalThis
"
`;

exports[`invalid(12): 'function* gen() {\\n  yield window\\n}' > Code 1`] = `
"
  1 | function* gen() {
  2 |   yield window
  3 | }
"
`;

exports[`invalid(12): 'function* gen() {\\n  yield window\\n}' > Error 1/1 1`] = `
"
  1 | function* gen() {
> 2 |   yield window
    |         ^^^^^^ Prefer \`globalThis\` over \`window\`.
  3 | }
"
`;

exports[`invalid(12): 'function* gen() {\\n  yield window\\n}' > Output 1`] = `
"
  1 | function* gen() {
  2 |   yield globalThis
  3 | }
"
`;

exports[`invalid(13): 'async function gen() {\\n  await windo…' > Code 1`] = `
"
  1 | async function gen() {
  2 |   await window
  3 | }
"
`;

exports[`invalid(13): 'async function gen() {\\n  await windo…' > Error 1/1 1`] = `
"
  1 | async function gen() {
> 2 |   await window
    |         ^^^^^^ Prefer \`globalThis\` over \`window\`.
  3 | }
"
`;

exports[`invalid(13): 'async function gen() {\\n  await windo…' > Output 1`] = `
"
  1 | async function gen() {
  2 |   await globalThis
  3 | }
"
`;

exports[`invalid(14): 'window ? foo : bar' > Code 1`] = `
"
  1 | window ? foo : bar
"
`;

exports[`invalid(14): 'window ? foo : bar' > Error 1/1 1`] = `
"
> 1 | window ? foo : bar
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(14): 'window ? foo : bar' > Output 1`] = `
"
  1 | globalThis ? foo : bar
"
`;

exports[`invalid(15): 'foo ? window : bar' > Code 1`] = `
"
  1 | foo ? window : bar
"
`;

exports[`invalid(15): 'foo ? window : bar' > Error 1/1 1`] = `
"
> 1 | foo ? window : bar
    |       ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(15): 'foo ? window : bar' > Output 1`] = `
"
  1 | foo ? globalThis : bar
"
`;

exports[`invalid(16): 'foo ? bar : window' > Code 1`] = `
"
  1 | foo ? bar : window
"
`;

exports[`invalid(16): 'foo ? bar : window' > Error 1/1 1`] = `
"
> 1 | foo ? bar : window
    |             ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(16): 'foo ? bar : window' > Output 1`] = `
"
  1 | foo ? bar : globalThis
"
`;

exports[`invalid(17): 'function foo() {\\n  return window\\n}' > Code 1`] = `
"
  1 | function foo() {
  2 |   return window
  3 | }
"
`;

exports[`invalid(17): 'function foo() {\\n  return window\\n}' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 |   return window
    |          ^^^^^^ Prefer \`globalThis\` over \`window\`.
  3 | }
"
`;

exports[`invalid(17): 'function foo() {\\n  return window\\n}' > Output 1`] = `
"
  1 | function foo() {
  2 |   return globalThis
  3 | }
"
`;

exports[`invalid(18): 'new window()' > Code 1`] = `
"
  1 | new window()
"
`;

exports[`invalid(18): 'new window()' > Error 1/1 1`] = `
"
> 1 | new window()
    |     ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(18): 'new window()' > Output 1`] = `
"
  1 | new globalThis()
"
`;

exports[`invalid(19): 'const obj = {\\n\\tfoo: window.foo,\\n\\t…' > Code 1`] = `
"
  1 | const obj = {
  2 | 	foo: window.foo,
  3 | 	bar: window.bar,
  4 | 	window: window
  5 | }
"
`;

exports[`invalid(19): 'const obj = {\\n\\tfoo: window.foo,\\n\\t…' > Error 1/3 1`] = `
"
  1 | const obj = {
> 2 | 	foo: window.foo,
    | 	     ^^^^^^ Prefer \`globalThis\` over \`window\`.
  3 | 	bar: window.bar,
  4 | 	window: window
  5 | }
"
`;

exports[`invalid(19): 'const obj = {\\n\\tfoo: window.foo,\\n\\t…' > Error 2/3 1`] = `
"
  1 | const obj = {
  2 | 	foo: window.foo,
> 3 | 	bar: window.bar,
    | 	     ^^^^^^ Prefer \`globalThis\` over \`window\`.
  4 | 	window: window
  5 | }
"
`;

exports[`invalid(19): 'const obj = {\\n\\tfoo: window.foo,\\n\\t…' > Error 3/3 1`] = `
"
  1 | const obj = {
  2 | 	foo: window.foo,
  3 | 	bar: window.bar,
> 4 | 	window: window
    | 	        ^^^^^^ Prefer \`globalThis\` over \`window\`.
  5 | }
"
`;

exports[`invalid(19): 'const obj = {\\n\\tfoo: window.foo,\\n\\t…' > Output 1`] = `
"
  1 | const obj = {
  2 | 	foo: globalThis.foo,
  3 | 	bar: globalThis.bar,
  4 | 	window: globalThis
  5 | }
"
`;

exports[`invalid(20): 'function sequenceTest() {\\n\\tlet x, y…' > Code 1`] = `
"
  1 | function sequenceTest() {
  2 | 	let x, y;
  3 | 	x = (y = 10, y + 5, window);
  4 | 	console.log(x, y);
  5 | }
"
`;

exports[`invalid(20): 'function sequenceTest() {\\n\\tlet x, y…' > Error 1/1 1`] = `
"
  1 | function sequenceTest() {
  2 | 	let x, y;
> 3 | 	x = (y = 10, y + 5, window);
    | 	                    ^^^^^^ Prefer \`globalThis\` over \`window\`.
  4 | 	console.log(x, y);
  5 | }
"
`;

exports[`invalid(20): 'function sequenceTest() {\\n\\tlet x, y…' > Output 1`] = `
"
  1 | function sequenceTest() {
  2 | 	let x, y;
  3 | 	x = (y = 10, y + 5, globalThis);
  4 | 	console.log(x, y);
  5 | }
"
`;

exports[`invalid(21): 'window\`Hello \${42} World\`' > Code 1`] = `
"
  1 | window\`Hello \${42} World\`
"
`;

exports[`invalid(21): 'window\`Hello \${42} World\`' > Error 1/1 1`] = `
"
> 1 | window\`Hello \${42} World\`
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(21): 'window\`Hello \${42} World\`' > Output 1`] = `
"
  1 | globalThis\`Hello \${42} World\`
"
`;

exports[`invalid(22): 'tag\`Hello \${window.foo} World\`' > Code 1`] = `
"
  1 | tag\`Hello \${window.foo} World\`
"
`;

exports[`invalid(22): 'tag\`Hello \${window.foo} World\`' > Error 1/1 1`] = `
"
> 1 | tag\`Hello \${window.foo} World\`
    |             ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(22): 'tag\`Hello \${window.foo} World\`' > Output 1`] = `
"
  1 | tag\`Hello \${globalThis.foo} World\`
"
`;

exports[`invalid(23): 'var str = \`hello \${window.foo} world!\`' > Code 1`] = `
"
  1 | var str = \`hello \${window.foo} world!\`
"
`;

exports[`invalid(23): 'var str = \`hello \${window.foo} world!\`' > Error 1/1 1`] = `
"
> 1 | var str = \`hello \${window.foo} world!\`
    |                    ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(23): 'var str = \`hello \${window.foo} world!\`' > Output 1`] = `
"
  1 | var str = \`hello \${globalThis.foo} world!\`
"
`;

exports[`invalid(24): 'delete window.foo' > Code 1`] = `
"
  1 | delete window.foo
"
`;

exports[`invalid(24): 'delete window.foo' > Error 1/1 1`] = `
"
> 1 | delete window.foo
    |        ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(24): 'delete window.foo' > Output 1`] = `
"
  1 | delete globalThis.foo
"
`;

exports[`invalid(25): '++window' > Code 1`] = `
"
  1 | ++window
"
`;

exports[`invalid(25): '++window' > Error 1/1 1`] = `
"
> 1 | ++window
    |   ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(25): '++window' > Output 1`] = `
"
  1 | ++globalThis
"
`;

exports[`invalid(26): '++window.foo' > Code 1`] = `
"
  1 | ++window.foo
"
`;

exports[`invalid(26): '++window.foo' > Error 1/1 1`] = `
"
> 1 | ++window.foo
    |   ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(26): '++window.foo' > Output 1`] = `
"
  1 | ++globalThis.foo
"
`;

exports[`invalid(27): 'for (var attr in window) {\\n\\n}' > Code 1`] = `
"
  1 | for (var attr in window) {
  2 |
  3 | }
"
`;

exports[`invalid(27): 'for (var attr in window) {\\n\\n}' > Error 1/1 1`] = `
"
> 1 | for (var attr in window) {
    |                  ^^^^^^ Prefer \`globalThis\` over \`window\`.
  2 |
  3 | }
"
`;

exports[`invalid(27): 'for (var attr in window) {\\n\\n}' > Output 1`] = `
"
  1 | for (var attr in globalThis) {
  2 |
  3 | }
"
`;

exports[`invalid(28): 'for (window.foo = 0; i < 10; window.f…' > Code 1`] = `
"
  1 | for (window.foo = 0; i < 10; window.foo++) {
  2 |
  3 | }
"
`;

exports[`invalid(28): 'for (window.foo = 0; i < 10; window.f…' > Error 1/2 1`] = `
"
> 1 | for (window.foo = 0; i < 10; window.foo++) {
    |      ^^^^^^ Prefer \`globalThis\` over \`window\`.
  2 |
  3 | }
"
`;

exports[`invalid(28): 'for (window.foo = 0; i < 10; window.f…' > Error 2/2 1`] = `
"
> 1 | for (window.foo = 0; i < 10; window.foo++) {
    |                              ^^^^^^ Prefer \`globalThis\` over \`window\`.
  2 |
  3 | }
"
`;

exports[`invalid(28): 'for (window.foo = 0; i < 10; window.f…' > Output 1`] = `
"
  1 | for (globalThis.foo = 0; i < 10; globalThis.foo++) {
  2 |
  3 | }
"
`;

exports[`invalid(29): 'for (const item of window.foo) {\\n}' > Code 1`] = `
"
  1 | for (const item of window.foo) {
  2 | }
"
`;

exports[`invalid(29): 'for (const item of window.foo) {\\n}' > Error 1/1 1`] = `
"
> 1 | for (const item of window.foo) {
    |                    ^^^^^^ Prefer \`globalThis\` over \`window\`.
  2 | }
"
`;

exports[`invalid(29): 'for (const item of window.foo) {\\n}' > Output 1`] = `
"
  1 | for (const item of globalThis.foo) {
  2 | }
"
`;

exports[`invalid(30): 'for (const item of window) {\\n}' > Code 1`] = `
"
  1 | for (const item of window) {
  2 | }
"
`;

exports[`invalid(30): 'for (const item of window) {\\n}' > Error 1/1 1`] = `
"
> 1 | for (const item of window) {
    |                    ^^^^^^ Prefer \`globalThis\` over \`window\`.
  2 | }
"
`;

exports[`invalid(30): 'for (const item of window) {\\n}' > Output 1`] = `
"
  1 | for (const item of globalThis) {
  2 | }
"
`;

exports[`invalid(31): 'switch (window) {}' > Code 1`] = `
"
  1 | switch (window) {}
"
`;

exports[`invalid(31): 'switch (window) {}' > Error 1/1 1`] = `
"
> 1 | switch (window) {}
    |         ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(31): 'switch (window) {}' > Output 1`] = `
"
  1 | switch (globalThis) {}
"
`;

exports[`invalid(32): 'switch (true) {\\n\\tcase window:\\n\\t\\t…' > Code 1`] = `
"
  1 | switch (true) {
  2 | 	case window:
  3 | 		break;
  4 | }
"
`;

exports[`invalid(32): 'switch (true) {\\n\\tcase window:\\n\\t\\t…' > Error 1/1 1`] = `
"
  1 | switch (true) {
> 2 | 	case window:
    | 	     ^^^^^^ Prefer \`globalThis\` over \`window\`.
  3 | 		break;
  4 | }
"
`;

exports[`invalid(32): 'switch (true) {\\n\\tcase window:\\n\\t\\t…' > Output 1`] = `
"
  1 | switch (true) {
  2 | 	case globalThis:
  3 | 		break;
  4 | }
"
`;

exports[`invalid(33): 'switch (true) {\\n\\tcase window.foo:\\n…' > Code 1`] = `
"
  1 | switch (true) {
  2 | 	case window.foo:
  3 | 		break;
  4 | }
"
`;

exports[`invalid(33): 'switch (true) {\\n\\tcase window.foo:\\n…' > Error 1/1 1`] = `
"
  1 | switch (true) {
> 2 | 	case window.foo:
    | 	     ^^^^^^ Prefer \`globalThis\` over \`window\`.
  3 | 		break;
  4 | }
"
`;

exports[`invalid(33): 'switch (true) {\\n\\tcase window.foo:\\n…' > Output 1`] = `
"
  1 | switch (true) {
  2 | 	case globalThis.foo:
  3 | 		break;
  4 | }
"
`;

exports[`invalid(34): 'while (window) {\\n}' > Code 1`] = `
"
  1 | while (window) {
  2 | }
"
`;

exports[`invalid(34): 'while (window) {\\n}' > Error 1/1 1`] = `
"
> 1 | while (window) {
    |        ^^^^^^ Prefer \`globalThis\` over \`window\`.
  2 | }
"
`;

exports[`invalid(34): 'while (window) {\\n}' > Output 1`] = `
"
  1 | while (globalThis) {
  2 | }
"
`;

exports[`invalid(35): 'do {} while (window) {}' > Code 1`] = `
"
  1 | do {} while (window) {}
"
`;

exports[`invalid(35): 'do {} while (window) {}' > Error 1/1 1`] = `
"
> 1 | do {} while (window) {}
    |              ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(35): 'do {} while (window) {}' > Output 1`] = `
"
  1 | do {} while (globalThis) {}
"
`;

exports[`invalid(36): 'if (window) {}' > Code 1`] = `
"
  1 | if (window) {}
"
`;

exports[`invalid(36): 'if (window) {}' > Error 1/1 1`] = `
"
> 1 | if (window) {}
    |     ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(36): 'if (window) {}' > Output 1`] = `
"
  1 | if (globalThis) {}
"
`;

exports[`invalid(37): 'throw window' > Code 1`] = `
"
  1 | throw window
"
`;

exports[`invalid(37): 'throw window' > Error 1/1 1`] = `
"
> 1 | throw window
    |       ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(37): 'throw window' > Output 1`] = `
"
  1 | throw globalThis
"
`;

exports[`invalid(38): 'var foo = window' > Code 1`] = `
"
  1 | var foo = window
"
`;

exports[`invalid(38): 'var foo = window' > Error 1/1 1`] = `
"
> 1 | var foo = window
    |           ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(38): 'var foo = window' > Output 1`] = `
"
  1 | var foo = globalThis
"
`;

exports[`invalid(39): 'function foo (name = window) {\\n\\n}' > Code 1`] = `
"
  1 | function foo (name = window) {
  2 |
  3 | }
"
`;

exports[`invalid(39): 'function foo (name = window) {\\n\\n}' > Error 1/1 1`] = `
"
> 1 | function foo (name = window) {
    |                      ^^^^^^ Prefer \`globalThis\` over \`window\`.
  2 |
  3 | }
"
`;

exports[`invalid(39): 'function foo (name = window) {\\n\\n}' > Output 1`] = `
"
  1 | function foo (name = globalThis) {
  2 |
  3 | }
"
`;

exports[`invalid(40): 'self.innerWidth' > Code 1`] = `
"
  1 | self.innerWidth
"
`;

exports[`invalid(40): 'self.innerWidth' > Error 1/1 1`] = `
"
> 1 | self.innerWidth
    | ^^^^ Prefer \`globalThis\` over \`self\`.
"
`;

exports[`invalid(40): 'self.innerWidth' > Output 1`] = `
"
  1 | globalThis.innerWidth
"
`;

exports[`invalid(41): 'self.innerHeight' > Code 1`] = `
"
  1 | self.innerHeight
"
`;

exports[`invalid(41): 'self.innerHeight' > Error 1/1 1`] = `
"
> 1 | self.innerHeight
    | ^^^^ Prefer \`globalThis\` over \`self\`.
"
`;

exports[`invalid(41): 'self.innerHeight' > Output 1`] = `
"
  1 | globalThis.innerHeight
"
`;

exports[`invalid(42): 'window.crypto' > Code 1`] = `
"
  1 | window.crypto
"
`;

exports[`invalid(42): 'window.crypto' > Error 1/1 1`] = `
"
> 1 | window.crypto
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(42): 'window.crypto' > Output 1`] = `
"
  1 | globalThis.crypto
"
`;

exports[`invalid(43): 'window.addEventListener("play", () =>…' > Code 1`] = `
"
  1 | window.addEventListener("play", () => {})
"
`;

exports[`invalid(43): 'window.addEventListener("play", () =>…' > Error 1/1 1`] = `
"
> 1 | window.addEventListener("play", () => {})
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(43): 'window.addEventListener("play", () =>…' > Output 1`] = `
"
  1 | globalThis.addEventListener("play", () => {})
"
`;

exports[`invalid(44): 'window.onplay = function () {}' > Code 1`] = `
"
  1 | window.onplay = function () {}
"
`;

exports[`invalid(44): 'window.onplay = function () {}' > Error 1/1 1`] = `
"
> 1 | window.onplay = function () {}
    | ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(44): 'window.onplay = function () {}' > Output 1`] = `
"
  1 | globalThis.onplay = function () {}
"
`;

exports[`invalid(45): 'function greet({ name = window.foo })…' > Code 1`] = `
"
  1 | function greet({ name = window.foo }) {}
"
`;

exports[`invalid(45): 'function greet({ name = window.foo })…' > Error 1/1 1`] = `
"
> 1 | function greet({ name = window.foo }) {}
    |                         ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(45): 'function greet({ name = window.foo })…' > Output 1`] = `
"
  1 | function greet({ name = globalThis.foo }) {}
"
`;

exports[`invalid(46): '({ foo: window.foo } =  {})' > Code 1`] = `
"
  1 | ({ foo: window.foo } =  {})
"
`;

exports[`invalid(46): '({ foo: window.foo } =  {})' > Error 1/1 1`] = `
"
> 1 | ({ foo: window.foo } =  {})
    |         ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(46): '({ foo: window.foo } =  {})' > Output 1`] = `
"
  1 | ({ foo: globalThis.foo } =  {})
"
`;

exports[`invalid(47): '[window.foo] = []' > Code 1`] = `
"
  1 | [window.foo] = []
"
`;

exports[`invalid(47): '[window.foo] = []' > Error 1/1 1`] = `
"
> 1 | [window.foo] = []
    |  ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(47): '[window.foo] = []' > Output 1`] = `
"
  1 | [globalThis.foo] = []
"
`;

exports[`invalid(48): 'foo[window]' > Code 1`] = `
"
  1 | foo[window]
"
`;

exports[`invalid(48): 'foo[window]' > Error 1/1 1`] = `
"
> 1 | foo[window]
    |     ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(48): 'foo[window]' > Output 1`] = `
"
  1 | foo[globalThis]
"
`;

exports[`invalid(49): 'foo[window.foo]' > Code 1`] = `
"
  1 | foo[window.foo]
"
`;

exports[`invalid(49): 'foo[window.foo]' > Error 1/1 1`] = `
"
> 1 | foo[window.foo]
    |     ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(49): 'foo[window.foo]' > Output 1`] = `
"
  1 | foo[globalThis.foo]
"
`;

exports[`invalid(50): 'typeof window !== "undefined"' > Code 1`] = `
"
  1 | typeof window !== "undefined"
"
`;

exports[`invalid(50): 'typeof window !== "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof window !== "undefined"
    |        ^^^^^^ Prefer \`globalThis.window\` over \`window\`.
"
`;

exports[`invalid(50): 'typeof window !== "undefined"' > Output 1`] = `
"
  1 | typeof globalThis.window !== "undefined"
"
`;

exports[`invalid(51): 'typeof self !== "undefined"' > Code 1`] = `
"
  1 | typeof self !== "undefined"
"
`;

exports[`invalid(51): 'typeof self !== "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof self !== "undefined"
    |        ^^^^ Prefer \`globalThis.self\` over \`self\`.
"
`;

exports[`invalid(51): 'typeof self !== "undefined"' > Output 1`] = `
"
  1 | typeof globalThis.self !== "undefined"
"
`;

exports[`invalid(52): 'typeof global !== "undefined"' > Code 1`] = `
"
  1 | typeof global !== "undefined"
"
`;

exports[`invalid(52): 'typeof global !== "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof global !== "undefined"
    |        ^^^^^^ Prefer \`globalThis.global\` over \`global\`.
"
`;

exports[`invalid(52): 'typeof global !== "undefined"' > Output 1`] = `
"
  1 | typeof globalThis.global !== "undefined"
"
`;

exports[`invalid(53): 'typeof window.something === "function"' > Code 1`] = `
"
  1 | typeof window.something === "function"
"
`;

exports[`invalid(53): 'typeof window.something === "function"' > Error 1/1 1`] = `
"
> 1 | typeof window.something === "function"
    |        ^^^^^^ Prefer \`globalThis\` over \`window\`.
"
`;

exports[`invalid(53): 'typeof window.something === "function"' > Output 1`] = `
"
  1 | typeof globalThis.something === "function"
"
`;

exports[`invalid(54): 'typeof self.something === "function"' > Code 1`] = `
"
  1 | typeof self.something === "function"
"
`;

exports[`invalid(54): 'typeof self.something === "function"' > Error 1/1 1`] = `
"
> 1 | typeof self.something === "function"
    |        ^^^^ Prefer \`globalThis\` over \`self\`.
"
`;

exports[`invalid(54): 'typeof self.something === "function"' > Output 1`] = `
"
  1 | typeof globalThis.something === "function"
"
`;

exports[`invalid(55): 'typeof global.something === "function"' > Code 1`] = `
"
  1 | typeof global.something === "function"
"
`;

exports[`invalid(55): 'typeof global.something === "function"' > Error 1/1 1`] = `
"
> 1 | typeof global.something === "function"
    |        ^^^^^^ Prefer \`globalThis\` over \`global\`.
"
`;

exports[`invalid(55): 'typeof global.something === "function"' > Output 1`] = `
"
  1 | typeof globalThis.something === "function"
"
`;
