// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'typeof a.b === "undefined"' > Code 1`] = `
"
  1 | typeof a.b === "undefined"
"
`;

exports[`invalid(0): 'typeof a.b === "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof a.b === "undefined"
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(0): 'typeof a.b === "undefined"' > Output 1`] = `
"
  1 | a.b === undefined
"
`;

exports[`invalid(0): 'typeof undefinedVariableIdentifier ==…' > Code 1`] = `
"
  1 | typeof undefinedVariableIdentifier === "undefined"
"
`;

exports[`invalid(0): 'typeof undefinedVariableIdentifier ==…' > Error 1/1 1`] = `
"
> 1 | typeof undefinedVariableIdentifier === "undefined"
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`… === undefined\`.
  1 | undefinedVariableIdentifier === undefined
"
`;

exports[`invalid(0): 'typeof undefinedVariableIdentifier ==…' > Options 1`] = `
"
[
  {
    "checkGlobalVariables": true
  }
]
"
`;

exports[`invalid(1): 'typeof Array !== "undefined"' > Code 1`] = `
"
  1 | typeof Array !== "undefined"
"
`;

exports[`invalid(1): 'typeof Array !== "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof Array !== "undefined"
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`… !== undefined\`.
  1 | Array !== undefined
"
`;

exports[`invalid(1): 'typeof Array !== "undefined"' > Options 1`] = `
"
[
  {
    "checkGlobalVariables": true
  }
]
"
`;

exports[`invalid(1): 'typeof a.b !== "undefined"' > Code 1`] = `
"
  1 | typeof a.b !== "undefined"
"
`;

exports[`invalid(1): 'typeof a.b !== "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof a.b !== "undefined"
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(1): 'typeof a.b !== "undefined"' > Output 1`] = `
"
  1 | a.b !== undefined
"
`;

exports[`invalid(2): 'function parse() {\\n\\tswitch (typeof …' > Code 1`] = `
"
  1 | function parse() {
  2 | 	switch (typeof value === 'undefined') {}
  3 | }
"
`;

exports[`invalid(2): 'function parse() {\\n\\tswitch (typeof …' > Error 1/1 1`] = `
"
  1 | function parse() {
> 2 | 	switch (typeof value === 'undefined') {}
    | 	        ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
  3 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`… === undefined\`.
  1 | function parse() {
  2 | 	switch (value === undefined) {}
  3 | }
"
`;

exports[`invalid(2): 'function parse() {\\n\\tswitch (typeof …' > Options 1`] = `
"
[
  {
    "checkGlobalVariables": true
  }
]
"
`;

exports[`invalid(2): 'typeof a.b == "undefined"' > Code 1`] = `
"
  1 | typeof a.b == "undefined"
"
`;

exports[`invalid(2): 'typeof a.b == "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof a.b == "undefined"
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(2): 'typeof a.b == "undefined"' > Output 1`] = `
"
  1 | a.b === undefined
"
`;

exports[`invalid(3): '/* globals value: readonly */\\nfuncti…' > Code 1`] = `
"
  1 | /* globals value: readonly */
  2 | function parse() {
  3 | 	switch (typeof value === 'undefined') {}
  4 | }
"
`;

exports[`invalid(3): '/* globals value: readonly */\\nfuncti…' > Error 1/1 1`] = `
"
  1 | /* globals value: readonly */
  2 | function parse() {
> 3 | 	switch (typeof value === 'undefined') {}
    | 	        ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
  4 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`… === undefined\`.
  1 | /* globals value: readonly */
  2 | function parse() {
  3 | 	switch (value === undefined) {}
  4 | }
"
`;

exports[`invalid(3): '/* globals value: readonly */\\nfuncti…' > Options 1`] = `
"
[
  {
    "checkGlobalVariables": true
  }
]
"
`;

exports[`invalid(3): 'typeof a.b != "undefined"' > Code 1`] = `
"
  1 | typeof a.b != "undefined"
"
`;

exports[`invalid(3): 'typeof a.b != "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof a.b != "undefined"
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(3): 'typeof a.b != "undefined"' > Output 1`] = `
"
  1 | a.b !== undefined
"
`;

exports[`invalid(4): 'typeof a.b == \\'undefined\\'' > Code 1`] = `
"
  1 | typeof a.b == 'undefined'
"
`;

exports[`invalid(4): 'typeof a.b == \\'undefined\\'' > Error 1/1 1`] = `
"
> 1 | typeof a.b == 'undefined'
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(4): 'typeof a.b == \\'undefined\\'' > Output 1`] = `
"
  1 | a.b === undefined
"
`;

exports[`invalid(5): 'let foo; typeof foo === "undefined"' > Code 1`] = `
"
  1 | let foo; typeof foo === "undefined"
"
`;

exports[`invalid(5): 'let foo; typeof foo === "undefined"' > Error 1/1 1`] = `
"
> 1 | let foo; typeof foo === "undefined"
    |          ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(5): 'let foo; typeof foo === "undefined"' > Output 1`] = `
"
  1 | let foo; foo === undefined
"
`;

exports[`invalid(6): 'const foo = 1; typeof foo === "undefi…' > Code 1`] = `
"
  1 | const foo = 1; typeof foo === "undefined"
"
`;

exports[`invalid(6): 'const foo = 1; typeof foo === "undefi…' > Error 1/1 1`] = `
"
> 1 | const foo = 1; typeof foo === "undefined"
    |                ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(6): 'const foo = 1; typeof foo === "undefi…' > Output 1`] = `
"
  1 | const foo = 1; foo === undefined
"
`;

exports[`invalid(7): 'var foo; typeof foo === "undefined"' > Code 1`] = `
"
  1 | var foo; typeof foo === "undefined"
"
`;

exports[`invalid(7): 'var foo; typeof foo === "undefined"' > Error 1/1 1`] = `
"
> 1 | var foo; typeof foo === "undefined"
    |          ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(7): 'var foo; typeof foo === "undefined"' > Output 1`] = `
"
  1 | var foo; foo === undefined
"
`;

exports[`invalid(8): 'var foo; var foo; typeof foo === "und…' > Code 1`] = `
"
  1 | var foo; var foo; typeof foo === "undefined"
"
`;

exports[`invalid(8): 'var foo; var foo; typeof foo === "und…' > Error 1/1 1`] = `
"
> 1 | var foo; var foo; typeof foo === "undefined"
    |                   ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(8): 'var foo; var foo; typeof foo === "und…' > Output 1`] = `
"
  1 | var foo; var foo; foo === undefined
"
`;

exports[`invalid(9): 'for (const foo of bar) typeof foo ===…' > Code 1`] = `
"
  1 | for (const foo of bar) typeof foo === "undefined";
"
`;

exports[`invalid(9): 'for (const foo of bar) typeof foo ===…' > Error 1/1 1`] = `
"
> 1 | for (const foo of bar) typeof foo === "undefined";
    |                        ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(9): 'for (const foo of bar) typeof foo ===…' > Output 1`] = `
"
  1 | for (const foo of bar) foo === undefined;
"
`;

exports[`invalid(10): 'let foo;\\nfunction bar() {\\n\\ttypeof …' > Code 1`] = `
"
  1 | let foo;
  2 | function bar() {
  3 | 	typeof foo === "undefined";
  4 | }
"
`;

exports[`invalid(10): 'let foo;\\nfunction bar() {\\n\\ttypeof …' > Error 1/1 1`] = `
"
  1 | let foo;
  2 | function bar() {
> 3 | 	typeof foo === "undefined";
    | 	^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
  4 | }
"
`;

exports[`invalid(10): 'let foo;\\nfunction bar() {\\n\\ttypeof …' > Output 1`] = `
"
  1 | let foo;
  2 | function bar() {
  3 | 	foo === undefined;
  4 | }
"
`;

exports[`invalid(11): 'function foo() {typeof foo === "undef…' > Code 1`] = `
"
  1 | function foo() {typeof foo === "undefined"}
"
`;

exports[`invalid(11): 'function foo() {typeof foo === "undef…' > Error 1/1 1`] = `
"
> 1 | function foo() {typeof foo === "undefined"}
    |                 ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(11): 'function foo() {typeof foo === "undef…' > Output 1`] = `
"
  1 | function foo() {foo === undefined}
"
`;

exports[`invalid(12): 'function foo(bar) {typeof bar === "un…' > Code 1`] = `
"
  1 | function foo(bar) {typeof bar === "undefined"}
"
`;

exports[`invalid(12): 'function foo(bar) {typeof bar === "un…' > Error 1/1 1`] = `
"
> 1 | function foo(bar) {typeof bar === "undefined"}
    |                    ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(12): 'function foo(bar) {typeof bar === "un…' > Output 1`] = `
"
  1 | function foo(bar) {bar === undefined}
"
`;

exports[`invalid(13): 'function foo({bar}) {typeof bar === "…' > Code 1`] = `
"
  1 | function foo({bar}) {typeof bar === "undefined"}
"
`;

exports[`invalid(13): 'function foo({bar}) {typeof bar === "…' > Error 1/1 1`] = `
"
> 1 | function foo({bar}) {typeof bar === "undefined"}
    |                      ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(13): 'function foo({bar}) {typeof bar === "…' > Output 1`] = `
"
  1 | function foo({bar}) {bar === undefined}
"
`;

exports[`invalid(14): 'function foo([bar]) {typeof bar === "…' > Code 1`] = `
"
  1 | function foo([bar]) {typeof bar === "undefined"}
"
`;

exports[`invalid(14): 'function foo([bar]) {typeof bar === "…' > Error 1/1 1`] = `
"
> 1 | function foo([bar]) {typeof bar === "undefined"}
    |                      ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(14): 'function foo([bar]) {typeof bar === "…' > Output 1`] = `
"
  1 | function foo([bar]) {bar === undefined}
"
`;

exports[`invalid(15): 'typeof foo.bar === "undefined"' > Code 1`] = `
"
  1 | typeof foo.bar === "undefined"
"
`;

exports[`invalid(15): 'typeof foo.bar === "undefined"' > Error 1/1 1`] = `
"
> 1 | typeof foo.bar === "undefined"
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(15): 'typeof foo.bar === "undefined"' > Output 1`] = `
"
  1 | foo.bar === undefined
"
`;

exports[`invalid(16): 'import foo from \\'foo\\';\\ntypeof foo.…' > Code 1`] = `
"
  1 | import foo from 'foo';
  2 | typeof foo.bar === "undefined"
"
`;

exports[`invalid(16): 'import foo from \\'foo\\';\\ntypeof foo.…' > Error 1/1 1`] = `
"
  1 | import foo from 'foo';
> 2 | typeof foo.bar === "undefined"
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(16): 'import foo from \\'foo\\';\\ntypeof foo.…' > Output 1`] = `
"
  1 | import foo from 'foo';
  2 | foo.bar === undefined
"
`;

exports[`invalid(17): 'foo\\ntypeof [] === "undefined";' > Code 1`] = `
"
  1 | foo
  2 | typeof [] === "undefined";
"
`;

exports[`invalid(17): 'foo\\ntypeof [] === "undefined";' > Error 1/1 1`] = `
"
  1 | foo
> 2 | typeof [] === "undefined";
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(17): 'foo\\ntypeof [] === "undefined";' > Output 1`] = `
"
  1 | foo
  2 | ;[] === undefined;
"
`;

exports[`invalid(18): 'foo\\ntypeof (a ? b : c) === "undefine…' > Code 1`] = `
"
  1 | foo
  2 | typeof (a ? b : c) === "undefined";
"
`;

exports[`invalid(18): 'foo\\ntypeof (a ? b : c) === "undefine…' > Error 1/1 1`] = `
"
  1 | foo
> 2 | typeof (a ? b : c) === "undefined";
    | ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
"
`;

exports[`invalid(18): 'foo\\ntypeof (a ? b : c) === "undefine…' > Output 1`] = `
"
  1 | foo
  2 | ;(a ? b : c) === undefined;
"
`;

exports[`invalid(19): 'function a() {\\n\\treturn typeof // co…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return typeof // comment
  3 | 		a.b === 'undefined';
  4 | }
"
`;

exports[`invalid(19): 'function a() {\\n\\treturn typeof // co…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return typeof // comment
    | 	       ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
  3 | 		a.b === 'undefined';
  4 | }
"
`;

exports[`invalid(19): 'function a() {\\n\\treturn typeof // co…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return ( // comment
  3 | 		a.b === undefined);
  4 | }
"
`;

exports[`invalid(20): 'function a() {\\n\\treturn (typeof // R…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return (typeof // ReturnStatement argument is parenthesized
  3 | 		a.b === 'undefined');
  4 | }
"
`;

exports[`invalid(20): 'function a() {\\n\\treturn (typeof // R…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return (typeof // ReturnStatement argument is parenthesized
    | 	        ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
  3 | 		a.b === 'undefined');
  4 | }
"
`;

exports[`invalid(20): 'function a() {\\n\\treturn (typeof // R…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return (// ReturnStatement argument is parenthesized
  3 | 		a.b === undefined);
  4 | }
"
`;

exports[`invalid(21): 'function a() {\\n\\treturn (typeof // U…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return (typeof // UnaryExpression is parenthesized
  3 | 		a.b) === 'undefined';
  4 | }
"
`;

exports[`invalid(21): 'function a() {\\n\\treturn (typeof // U…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return (typeof // UnaryExpression is parenthesized
    | 	        ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
  3 | 		a.b) === 'undefined';
  4 | }
"
`;

exports[`invalid(21): 'function a() {\\n\\treturn (typeof // U…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return (// UnaryExpression is parenthesized
  3 | 		a.b) === undefined;
  4 | }
"
`;

exports[`invalid(22): 'function parse(value) {\\n\\tswitch (ty…' > Code 1`] = `
"
  1 | function parse(value) {
  2 | 	switch (typeof value === 'undefined') {}
  3 | }
"
`;

exports[`invalid(22): 'function parse(value) {\\n\\tswitch (ty…' > Error 1/1 1`] = `
"
  1 | function parse(value) {
> 2 | 	switch (typeof value === 'undefined') {}
    | 	        ^^^^^^ Compare with \`undefined\` directly instead of using \`typeof\`.
  3 | }
"
`;

exports[`invalid(22): 'function parse(value) {\\n\\tswitch (ty…' > Output 1`] = `
"
  1 | function parse(value) {
  2 | 	switch (value === undefined) {}
  3 | }
"
`;
