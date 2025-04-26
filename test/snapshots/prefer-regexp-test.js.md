// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const re = /a/; const bar = !foo.matc…' > Code 1`] = `
"
  1 | const re = /a/; const bar = !foo.match(re)
"
`;

exports[`invalid(0): 'const re = /a/; const bar = !foo.matc…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; const bar = !foo.match(re)
    |                              ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(0): 'const re = /a/; const bar = !foo.matc…' > Output 1`] = `
"
  1 | const re = /a/; const bar = !re.test(foo)
"
`;

exports[`invalid(1): 'const re = /a/; const bar = Boolean(f…' > Code 1`] = `
"
  1 | const re = /a/; const bar = Boolean(foo.match(re))
"
`;

exports[`invalid(1): 'const re = /a/; const bar = Boolean(f…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; const bar = Boolean(foo.match(re))
    |                                     ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(1): 'const re = /a/; const bar = Boolean(f…' > Output 1`] = `
"
  1 | const re = /a/; const bar = Boolean(re.test(foo))
"
`;

exports[`invalid(2): 'const re = /a/; if (foo.match(re)) {}' > Code 1`] = `
"
  1 | const re = /a/; if (foo.match(re)) {}
"
`;

exports[`invalid(2): 'const re = /a/; if (foo.match(re)) {}' > Error 1/1 1`] = `
"
> 1 | const re = /a/; if (foo.match(re)) {}
    |                     ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(2): 'const re = /a/; if (foo.match(re)) {}' > Output 1`] = `
"
  1 | const re = /a/; if (re.test(foo)) {}
"
`;

exports[`invalid(3): 'const re = /a/; const bar = foo.match…' > Code 1`] = `
"
  1 | const re = /a/; const bar = foo.match(re) ? 1 : 2
"
`;

exports[`invalid(3): 'const re = /a/; const bar = foo.match…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; const bar = foo.match(re) ? 1 : 2
    |                             ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(3): 'const re = /a/; const bar = foo.match…' > Output 1`] = `
"
  1 | const re = /a/; const bar = re.test(foo) ? 1 : 2
"
`;

exports[`invalid(4): 'const re = /a/; while (foo.match(re))…' > Code 1`] = `
"
  1 | const re = /a/; while (foo.match(re)) foo = foo.slice(1);
"
`;

exports[`invalid(4): 'const re = /a/; while (foo.match(re))…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; while (foo.match(re)) foo = foo.slice(1);
    |                        ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(4): 'const re = /a/; while (foo.match(re))…' > Output 1`] = `
"
  1 | const re = /a/; while (re.test(foo)) foo = foo.slice(1);
"
`;

exports[`invalid(5): 'const re = /a/; do {foo = foo.slice(1…' > Code 1`] = `
"
  1 | const re = /a/; do {foo = foo.slice(1)} while (foo.match(re));
"
`;

exports[`invalid(5): 'const re = /a/; do {foo = foo.slice(1…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; do {foo = foo.slice(1)} while (foo.match(re));
    |                                                ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(5): 'const re = /a/; do {foo = foo.slice(1…' > Output 1`] = `
"
  1 | const re = /a/; do {foo = foo.slice(1)} while (re.test(foo));
"
`;

exports[`invalid(6): 'const re = /a/; for (; foo.match(re);…' > Code 1`] = `
"
  1 | const re = /a/; for (; foo.match(re); ) foo = foo.slice(1);
"
`;

exports[`invalid(6): 'const re = /a/; for (; foo.match(re);…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; for (; foo.match(re); ) foo = foo.slice(1);
    |                        ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(6): 'const re = /a/; for (; foo.match(re);…' > Output 1`] = `
"
  1 | const re = /a/; for (; re.test(foo); ) foo = foo.slice(1);
"
`;

exports[`invalid(7): 'const re = /a/; const bar = !re.exec(…' > Code 1`] = `
"
  1 | const re = /a/; const bar = !re.exec(foo)
"
`;

exports[`invalid(7): 'const re = /a/; const bar = !re.exec(…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; const bar = !re.exec(foo)
    |                                 ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(7): 'const re = /a/; const bar = !re.exec(…' > Output 1`] = `
"
  1 | const re = /a/; const bar = !re.test(foo)
"
`;

exports[`invalid(8): 'const re = /a/; const bar = Boolean(r…' > Code 1`] = `
"
  1 | const re = /a/; const bar = Boolean(re.exec(foo))
"
`;

exports[`invalid(8): 'const re = /a/; const bar = Boolean(r…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; const bar = Boolean(re.exec(foo))
    |                                        ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(8): 'const re = /a/; const bar = Boolean(r…' > Output 1`] = `
"
  1 | const re = /a/; const bar = Boolean(re.test(foo))
"
`;

exports[`invalid(9): 'const re = /a/; if (re.exec(foo)) {}' > Code 1`] = `
"
  1 | const re = /a/; if (re.exec(foo)) {}
"
`;

exports[`invalid(9): 'const re = /a/; if (re.exec(foo)) {}' > Error 1/1 1`] = `
"
> 1 | const re = /a/; if (re.exec(foo)) {}
    |                        ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(9): 'const re = /a/; if (re.exec(foo)) {}' > Output 1`] = `
"
  1 | const re = /a/; if (re.test(foo)) {}
"
`;

exports[`invalid(10): 'const re = /a/; const bar = re.exec(f…' > Code 1`] = `
"
  1 | const re = /a/; const bar = re.exec(foo) ? 1 : 2
"
`;

exports[`invalid(10): 'const re = /a/; const bar = re.exec(f…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; const bar = re.exec(foo) ? 1 : 2
    |                                ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(10): 'const re = /a/; const bar = re.exec(f…' > Output 1`] = `
"
  1 | const re = /a/; const bar = re.test(foo) ? 1 : 2
"
`;

exports[`invalid(11): 'const re = /a/; while (re.exec(foo)) …' > Code 1`] = `
"
  1 | const re = /a/; while (re.exec(foo)) foo = foo.slice(1);
"
`;

exports[`invalid(11): 'const re = /a/; while (re.exec(foo)) …' > Error 1/1 1`] = `
"
> 1 | const re = /a/; while (re.exec(foo)) foo = foo.slice(1);
    |                           ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(11): 'const re = /a/; while (re.exec(foo)) …' > Output 1`] = `
"
  1 | const re = /a/; while (re.test(foo)) foo = foo.slice(1);
"
`;

exports[`invalid(12): 'const re = /a/; do {foo = foo.slice(1…' > Code 1`] = `
"
  1 | const re = /a/; do {foo = foo.slice(1)} while (re.exec(foo));
"
`;

exports[`invalid(12): 'const re = /a/; do {foo = foo.slice(1…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; do {foo = foo.slice(1)} while (re.exec(foo));
    |                                                   ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(12): 'const re = /a/; do {foo = foo.slice(1…' > Output 1`] = `
"
  1 | const re = /a/; do {foo = foo.slice(1)} while (re.test(foo));
"
`;

exports[`invalid(13): 'const re = /a/; for (; re.exec(foo); …' > Code 1`] = `
"
  1 | const re = /a/; for (; re.exec(foo); ) foo = foo.slice(1);
"
`;

exports[`invalid(13): 'const re = /a/; for (; re.exec(foo); …' > Error 1/1 1`] = `
"
> 1 | const re = /a/; for (; re.exec(foo); ) foo = foo.slice(1);
    |                           ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(13): 'const re = /a/; for (; re.exec(foo); …' > Output 1`] = `
"
  1 | const re = /a/; for (; re.test(foo); ) foo = foo.slice(1);
"
`;

exports[`invalid(14): 'const re = /a/; if ((0, foo).match(re…' > Code 1`] = `
"
  1 | const re = /a/; if ((0, foo).match(re)) {}
"
`;

exports[`invalid(14): 'const re = /a/; if ((0, foo).match(re…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; if ((0, foo).match(re)) {}
    |                     ^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(14): 'const re = /a/; if ((0, foo).match(re…' > Output 1`] = `
"
  1 | const re = /a/; if ((re).test((0, foo))) {}
"
`;

exports[`invalid(15): 'const re = /a/; if ((0, foo).match((r…' > Code 1`] = `
"
  1 | const re = /a/; if ((0, foo).match((re))) {}
"
`;

exports[`invalid(15): 'const re = /a/; if ((0, foo).match((r…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; if ((0, foo).match((re))) {}
    |                     ^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(15): 'const re = /a/; if ((0, foo).match((r…' > Output 1`] = `
"
  1 | const re = /a/; if ((re).test((0, foo))) {}
"
`;

exports[`invalid(16): 'const re = /a/; if ((foo).match(re)) …' > Code 1`] = `
"
  1 | const re = /a/; if ((foo).match(re)) {}
"
`;

exports[`invalid(16): 'const re = /a/; if ((foo).match(re)) …' > Error 1/1 1`] = `
"
> 1 | const re = /a/; if ((foo).match(re)) {}
    |                     ^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(16): 'const re = /a/; if ((foo).match(re)) …' > Output 1`] = `
"
  1 | const re = /a/; if ((re).test(foo)) {}
"
`;

exports[`invalid(17): 'const re = /a/; if ((foo).match((re))…' > Code 1`] = `
"
  1 | const re = /a/; if ((foo).match((re))) {}
"
`;

exports[`invalid(17): 'const re = /a/; if ((foo).match((re))…' > Error 1/1 1`] = `
"
> 1 | const re = /a/; if ((foo).match((re))) {}
    |                     ^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(17): 'const re = /a/; if ((foo).match((re))…' > Output 1`] = `
"
  1 | const re = /a/; if ((re).test((foo))) {}
"
`;

exports[`invalid(18): 'if (foo.match(/re/)) {}' > Code 1`] = `
"
  1 | if (foo.match(/re/)) {}
"
`;

exports[`invalid(18): 'if (foo.match(/re/)) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.match(/re/)) {}
    |     ^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(18): 'if (foo.match(/re/)) {}' > Output 1`] = `
"
  1 | if (/re/.test(foo)) {}
"
`;

exports[`invalid(19): 'const re = /a/; if (foo.match(re)) {}' > Code 1`] = `
"
  1 | const re = /a/; if (foo.match(re)) {}
"
`;

exports[`invalid(19): 'const re = /a/; if (foo.match(re)) {}' > Error 1/1 1`] = `
"
> 1 | const re = /a/; if (foo.match(re)) {}
    |                     ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(19): 'const re = /a/; if (foo.match(re)) {}' > Output 1`] = `
"
  1 | const re = /a/; if (re.test(foo)) {}
"
`;

exports[`invalid(20): 'const bar = {bar: /a/}; if (foo.match…' > Code 1`] = `
"
  1 | const bar = {bar: /a/}; if (foo.match(bar.baz)) {}
"
`;

exports[`invalid(20): 'const bar = {bar: /a/}; if (foo.match…' > Error 1/1 1`] = `
"
> 1 | const bar = {bar: /a/}; if (foo.match(bar.baz)) {}
    |                             ^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | const bar = {bar: /a/}; if (bar.baz.test(foo)) {}
"
`;

exports[`invalid(21): 'if (foo.match(bar.baz())) {}' > Code 1`] = `
"
  1 | if (foo.match(bar.baz())) {}
"
`;

exports[`invalid(21): 'if (foo.match(bar.baz())) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.match(bar.baz())) {}
    |     ^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if (bar.baz().test(foo)) {}
"
`;

exports[`invalid(22): 'if (foo.match(new RegExp("re", "g")))…' > Code 1`] = `
"
  1 | if (foo.match(new RegExp("re", "g"))) {}
"
`;

exports[`invalid(22): 'if (foo.match(new RegExp("re", "g")))…' > Error 1/1 1`] = `
"
> 1 | if (foo.match(new RegExp("re", "g"))) {}
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(22): 'if (foo.match(new RegExp("re", "g")))…' > Output 1`] = `
"
  1 | if (new RegExp("re", "g").test(foo)) {}
"
`;

exports[`invalid(23): 'if (foo.match(new SomeRegExp())) {}' > Code 1`] = `
"
  1 | if (foo.match(new SomeRegExp())) {}
"
`;

exports[`invalid(23): 'if (foo.match(new SomeRegExp())) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.match(new SomeRegExp())) {}
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if (new SomeRegExp().test(foo)) {}
"
`;

exports[`invalid(24): 'if (foo.match(new SomeRegExp)) {}' > Code 1`] = `
"
  1 | if (foo.match(new SomeRegExp)) {}
"
`;

exports[`invalid(24): 'if (foo.match(new SomeRegExp)) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.match(new SomeRegExp)) {}
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if ((new SomeRegExp).test(foo)) {}
"
`;

exports[`invalid(25): 'if (foo.match(bar?.baz)) {}' > Code 1`] = `
"
  1 | if (foo.match(bar?.baz)) {}
"
`;

exports[`invalid(25): 'if (foo.match(bar?.baz)) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.match(bar?.baz)) {}
    |     ^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if (bar?.baz.test(foo)) {}
"
`;

exports[`invalid(26): 'if (foo.match(bar?.baz())) {}' > Code 1`] = `
"
  1 | if (foo.match(bar?.baz())) {}
"
`;

exports[`invalid(26): 'if (foo.match(bar?.baz())) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.match(bar?.baz())) {}
    |     ^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if (bar?.baz().test(foo)) {}
"
`;

exports[`invalid(27): 'if (foo.match(bar || baz)) {}' > Code 1`] = `
"
  1 | if (foo.match(bar || baz)) {}
"
`;

exports[`invalid(27): 'if (foo.match(bar || baz)) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.match(bar || baz)) {}
    |     ^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if ((bar || baz).test(foo)) {}
"
`;

exports[`invalid(28): 'async function a() {\\n\\tif (foo.match…' > Code 1`] = `
"
  1 | async function a() {
  2 | 	if (foo.match(await bar())) {}
  3 | }
"
`;

exports[`invalid(28): 'async function a() {\\n\\tif (foo.match…' > Error 1/1 1`] = `
"
  1 | async function a() {
> 2 | 	if (foo.match(await bar())) {}
    | 	    ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
  3 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | async function a() {
  2 | 	if ((await bar()).test(foo)) {}
  3 | }
"
`;

exports[`invalid(29): 'if ((foo).match(/re/)) {}' > Code 1`] = `
"
  1 | if ((foo).match(/re/)) {}
"
`;

exports[`invalid(29): 'if ((foo).match(/re/)) {}' > Error 1/1 1`] = `
"
> 1 | if ((foo).match(/re/)) {}
    |     ^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(29): 'if ((foo).match(/re/)) {}' > Output 1`] = `
"
  1 | if ((/re/).test(foo)) {}
"
`;

exports[`invalid(30): 'if ((foo).match(new SomeRegExp)) {}' > Code 1`] = `
"
  1 | if ((foo).match(new SomeRegExp)) {}
"
`;

exports[`invalid(30): 'if ((foo).match(new SomeRegExp)) {}' > Error 1/1 1`] = `
"
> 1 | if ((foo).match(new SomeRegExp)) {}
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if ((new SomeRegExp).test(foo)) {}
"
`;

exports[`invalid(31): 'if ((foo).match(bar?.baz)) {}' > Code 1`] = `
"
  1 | if ((foo).match(bar?.baz)) {}
"
`;

exports[`invalid(31): 'if ((foo).match(bar?.baz)) {}' > Error 1/1 1`] = `
"
> 1 | if ((foo).match(bar?.baz)) {}
    |     ^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if ((bar?.baz).test(foo)) {}
"
`;

exports[`invalid(32): 'if ((foo).match(bar?.baz())) {}' > Code 1`] = `
"
  1 | if ((foo).match(bar?.baz())) {}
"
`;

exports[`invalid(32): 'if ((foo).match(bar?.baz())) {}' > Error 1/1 1`] = `
"
> 1 | if ((foo).match(bar?.baz())) {}
    |     ^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if ((bar?.baz()).test(foo)) {}
"
`;

exports[`invalid(33): 'const bar = false; const baz = /a/; i…' > Code 1`] = `
"
  1 | const bar = false; const baz = /a/; if ((foo).match(bar || baz)) {}
"
`;

exports[`invalid(33): 'const bar = false; const baz = /a/; i…' > Error 1/1 1`] = `
"
> 1 | const bar = false; const baz = /a/; if ((foo).match(bar || baz)) {}
    |                                         ^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(33): 'const bar = false; const baz = /a/; i…' > Output 1`] = `
"
  1 | const bar = false; const baz = /a/; if ((bar || baz).test(foo)) {}
"
`;

exports[`invalid(34): 'async function a() {\\n\\tif ((foo).mat…' > Code 1`] = `
"
  1 | async function a() {
  2 | 	if ((foo).match(await bar())) {}
  3 | }
"
`;

exports[`invalid(34): 'async function a() {\\n\\tif ((foo).mat…' > Error 1/1 1`] = `
"
  1 | async function a() {
> 2 | 	if ((foo).match(await bar())) {}
    | 	    ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
  3 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | async function a() {
  2 | 	if ((await bar()).test(foo)) {}
  3 | }
"
`;

exports[`invalid(35): 'const re = [/a/]; if (foo.match([re][…' > Code 1`] = `
"
  1 | const re = [/a/]; if (foo.match([re][0])) {}
"
`;

exports[`invalid(35): 'const re = [/a/]; if (foo.match([re][…' > Error 1/1 1`] = `
"
> 1 | const re = [/a/]; if (foo.match([re][0])) {}
    |                       ^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | const re = [/a/]; if ([re][0].test(foo)) {}
"
`;

exports[`invalid(36): 'async function a() {\\n\\tif (\\n\\t\\t/* …' > Code 1`] = `
"
   1 | async function a() {
   2 | 	if (
   3 | 		/* 1 */ foo() /* 2 */
   4 | 			./* 3 */ match /* 4 */ (
   5 | 				/* 5 */ await /* 6 */ bar() /* 7 */
   6 | 				,
   7 | 				/* 8 */
   8 | 			)
   9 | 	) {}
  10 | }
"
`;

exports[`invalid(36): 'async function a() {\\n\\tif (\\n\\t\\t/* …' > Error 1/1 1`] = `
"
   1 | async function a() {
   2 | 	if (
>  3 | 		/* 1 */ foo() /* 2 */
     | 		        ^^^^^^^^^^^^^
>  4 | 			./* 3 */ match /* 4 */ (
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
>  5 | 				/* 5 */ await /* 6 */ bar() /* 7 */
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
>  6 | 				,
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
>  7 | 				/* 8 */
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
>  8 | 			)
     | ^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
   9 | 	) {}
  10 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
   1 | async function a() {
   2 | 	if (
   3 | 		/* 1 */ (await /* 6 */ bar()) /* 2 */
   4 | 			./* 3 */ test /* 4 */ (
   5 | 				/* 5 */ foo() /* 7 */
   6 | 				,
   7 | 				/* 8 */
   8 | 			)
   9 | 	) {}
  10 | }
"
`;

exports[`invalid(37): 'const string = \\'[.!?]\\s*$\\';\\nif (fo…' > Code 1`] = `
"
  1 | const string = '[.!?]\\s*$';
  2 | if (foo.match(string)) {
  3 | }
"
`;

exports[`invalid(37): 'const string = \\'[.!?]\\s*$\\';\\nif (fo…' > Error 1/1 1`] = `
"
  1 | const string = '[.!?]\\s*$';
> 2 | if (foo.match(string)) {
    |     ^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
  3 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | const string = '[.!?]\\s*$';
  2 | if (string.test(foo)) {
  3 | }
"
`;

exports[`invalid(38): 'const regex = new RegExp(\\'[.!?]\\s*$\\…' > Code 1`] = `
"
  1 | const regex = new RegExp('[.!?]\\s*$');
  2 | if (foo.match(regex)) {}
"
`;

exports[`invalid(38): 'const regex = new RegExp(\\'[.!?]\\s*$\\…' > Error 1/1 1`] = `
"
  1 | const regex = new RegExp('[.!?]\\s*$');
> 2 | if (foo.match(regex)) {}
    |     ^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(38): 'const regex = new RegExp(\\'[.!?]\\s*$\\…' > Output 1`] = `
"
  1 | const regex = new RegExp('[.!?]\\s*$');
  2 | if (regex.test(foo)) {}
"
`;

exports[`invalid(39): 'if (foo.match(unknown)) {}' > Code 1`] = `
"
  1 | if (foo.match(unknown)) {}
"
`;

exports[`invalid(39): 'if (foo.match(unknown)) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.match(unknown)) {}
    |     ^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | if (unknown.test(foo)) {}
"
`;

exports[`invalid(40): 'if (foo.match(/a/g));' > Code 1`] = `
"
  1 | if (foo.match(/a/g));
"
`;

exports[`invalid(40): 'if (foo.match(/a/g));' > Error 1/1 1`] = `
"
> 1 | if (foo.match(/a/g));
    |     ^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(40): 'if (foo.match(/a/g));' > Output 1`] = `
"
  1 | if (/a/g.test(foo));
"
`;

exports[`invalid(41): 'if (foo.match(/a/y));' > Code 1`] = `
"
  1 | if (foo.match(/a/y));
"
`;

exports[`invalid(41): 'if (foo.match(/a/y));' > Error 1/1 1`] = `
"
> 1 | if (foo.match(/a/y));
    |     ^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(41): 'if (foo.match(/a/y));' > Output 1`] = `
"
  1 | if (/a/y.test(foo));
"
`;

exports[`invalid(42): 'if (foo.match(/a/gy));' > Code 1`] = `
"
  1 | if (foo.match(/a/gy));
"
`;

exports[`invalid(42): 'if (foo.match(/a/gy));' > Error 1/1 1`] = `
"
> 1 | if (foo.match(/a/gy));
    |     ^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(42): 'if (foo.match(/a/gy));' > Output 1`] = `
"
  1 | if (/a/gy.test(foo));
"
`;

exports[`invalid(43): 'if (foo.match(/a/ig));' > Code 1`] = `
"
  1 | if (foo.match(/a/ig));
"
`;

exports[`invalid(43): 'if (foo.match(/a/ig));' > Error 1/1 1`] = `
"
> 1 | if (foo.match(/a/ig));
    |     ^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(43): 'if (foo.match(/a/ig));' > Output 1`] = `
"
  1 | if (/a/ig.test(foo));
"
`;

exports[`invalid(44): 'if (foo.match(new RegExp("a", "g")));' > Code 1`] = `
"
  1 | if (foo.match(new RegExp("a", "g")));
"
`;

exports[`invalid(44): 'if (foo.match(new RegExp("a", "g")));' > Error 1/1 1`] = `
"
> 1 | if (foo.match(new RegExp("a", "g")));
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.
"
`;

exports[`invalid(44): 'if (foo.match(new RegExp("a", "g")));' > Output 1`] = `
"
  1 | if (new RegExp("a", "g").test(foo));
"
`;

exports[`invalid(45): 'if (/a/g.exec(foo));' > Code 1`] = `
"
  1 | if (/a/g.exec(foo));
"
`;

exports[`invalid(45): 'if (/a/g.exec(foo));' > Error 1/1 1`] = `
"
> 1 | if (/a/g.exec(foo));
    |          ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(45): 'if (/a/g.exec(foo));' > Output 1`] = `
"
  1 | if (/a/g.test(foo));
"
`;

exports[`invalid(46): 'if (/a/y.exec(foo));' > Code 1`] = `
"
  1 | if (/a/y.exec(foo));
"
`;

exports[`invalid(46): 'if (/a/y.exec(foo));' > Error 1/1 1`] = `
"
> 1 | if (/a/y.exec(foo));
    |          ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(46): 'if (/a/y.exec(foo));' > Output 1`] = `
"
  1 | if (/a/y.test(foo));
"
`;

exports[`invalid(47): 'if (/a/gy.exec(foo));' > Code 1`] = `
"
  1 | if (/a/gy.exec(foo));
"
`;

exports[`invalid(47): 'if (/a/gy.exec(foo));' > Error 1/1 1`] = `
"
> 1 | if (/a/gy.exec(foo));
    |           ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(47): 'if (/a/gy.exec(foo));' > Output 1`] = `
"
  1 | if (/a/gy.test(foo));
"
`;

exports[`invalid(48): 'if (/a/yi.exec(foo));' > Code 1`] = `
"
  1 | if (/a/yi.exec(foo));
"
`;

exports[`invalid(48): 'if (/a/yi.exec(foo));' > Error 1/1 1`] = `
"
> 1 | if (/a/yi.exec(foo));
    |           ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(48): 'if (/a/yi.exec(foo));' > Output 1`] = `
"
  1 | if (/a/yi.test(foo));
"
`;

exports[`invalid(49): 'if (new RegExp("a", "g").exec(foo));' > Code 1`] = `
"
  1 | if (new RegExp("a", "g").exec(foo));
"
`;

exports[`invalid(49): 'if (new RegExp("a", "g").exec(foo));' > Error 1/1 1`] = `
"
> 1 | if (new RegExp("a", "g").exec(foo));
    |                          ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(49): 'if (new RegExp("a", "g").exec(foo));' > Output 1`] = `
"
  1 | if (new RegExp("a", "g").test(foo));
"
`;

exports[`invalid(50): 'if (new RegExp("a", "y").exec(foo));' > Code 1`] = `
"
  1 | if (new RegExp("a", "y").exec(foo));
"
`;

exports[`invalid(50): 'if (new RegExp("a", "y").exec(foo));' > Error 1/1 1`] = `
"
> 1 | if (new RegExp("a", "y").exec(foo));
    |                          ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(50): 'if (new RegExp("a", "y").exec(foo));' > Output 1`] = `
"
  1 | if (new RegExp("a", "y").test(foo));
"
`;

exports[`invalid(51): 'const regex = /weird/g;\\nif (foo.matc…' > Code 1`] = `
"
  1 | const regex = /weird/g;
  2 | if (foo.match(regex));
"
`;

exports[`invalid(51): 'const regex = /weird/g;\\nif (foo.matc…' > Error 1/1 1`] = `
"
  1 | const regex = /weird/g;
> 2 | if (foo.match(regex));
    |     ^^^^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | const regex = /weird/g;
  2 | if (regex.test(foo));
"
`;

exports[`invalid(52): 'const regex = /weird/g;\\nif (regex.ex…' > Code 1`] = `
"
  1 | const regex = /weird/g;
  2 | if (regex.exec(foo));
"
`;

exports[`invalid(52): 'const regex = /weird/g;\\nif (regex.ex…' > Error 1/1 1`] = `
"
  1 | const regex = /weird/g;
> 2 | if (regex.exec(foo));
    |           ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | const regex = /weird/g;
  2 | if (regex.test(foo));
"
`;

exports[`invalid(53): 'const regex = /weird/y;\\nif (regex.ex…' > Code 1`] = `
"
  1 | const regex = /weird/y;
  2 | if (regex.exec(foo));
"
`;

exports[`invalid(53): 'const regex = /weird/y;\\nif (regex.ex…' > Error 1/1 1`] = `
"
  1 | const regex = /weird/y;
> 2 | if (regex.exec(foo));
    |           ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(53): 'const regex = /weird/y;\\nif (regex.ex…' > Output 1`] = `
"
  1 | const regex = /weird/y;
  2 | if (regex.test(foo));
"
`;

exports[`invalid(54): 'const regex = /weird/gyi;\\nif (regex.…' > Code 1`] = `
"
  1 | const regex = /weird/gyi;
  2 | if (regex.exec(foo));
"
`;

exports[`invalid(54): 'const regex = /weird/gyi;\\nif (regex.…' > Error 1/1 1`] = `
"
  1 | const regex = /weird/gyi;
> 2 | if (regex.exec(foo));
    |           ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | const regex = /weird/gyi;
  2 | if (regex.test(foo));
"
`;

exports[`invalid(55): 'let re = new RegExp(\\'foo\\', \\'g\\');\\…' > Code 1`] = `
"
  1 | let re = new RegExp('foo', 'g');
  2 | if(str.match(re));
"
`;

exports[`invalid(55): 'let re = new RegExp(\\'foo\\', \\'g\\');\\…' > Error 1/1 1`] = `
"
  1 | let re = new RegExp('foo', 'g');
> 2 | if(str.match(re));
    |    ^^^^^^^^^^^^^ Prefer \`RegExp#test(…)\` over \`String#match(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`RegExp#test(…)\`.
  1 | let re = new RegExp('foo', 'g');
  2 | if(re.test(str));
"
`;

exports[`invalid(56): '!/a/u.exec(foo)' > Code 1`] = `
"
  1 | !/a/u.exec(foo)
"
`;

exports[`invalid(56): '!/a/u.exec(foo)' > Error 1/1 1`] = `
"
> 1 | !/a/u.exec(foo)
    |       ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(56): '!/a/u.exec(foo)' > Output 1`] = `
"
  1 | !/a/u.test(foo)
"
`;

exports[`invalid(57): '!/a/v.exec(foo)' > Code 1`] = `
"
  1 | !/a/v.exec(foo)
"
`;

exports[`invalid(57): '!/a/v.exec(foo)' > Error 1/1 1`] = `
"
> 1 | !/a/v.exec(foo)
    |       ^^^^ Prefer \`.test(…)\` over \`.exec(…)\`.
"
`;

exports[`invalid(57): '!/a/v.exec(foo)' > Output 1`] = `
"
  1 | !/a/v.test(foo)
"
`;
