// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = 1.1 | 0;' > Code 1`] = `
"
  1 | const foo = 1.1 | 0;
"
`;

exports[`invalid(0): 'const foo = 1.1 | 0;' > Error 1/1 1`] = `
"
> 1 | const foo = 1.1 | 0;
    |             ^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1.1);
"
`;

exports[`invalid(1): 'const foo = 111 | 0;' > Code 1`] = `
"
  1 | const foo = 111 | 0;
"
`;

exports[`invalid(1): 'const foo = 111 | 0;' > Error 1/1 1`] = `
"
> 1 | const foo = 111 | 0;
    |             ^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(111);
"
`;

exports[`invalid(2): 'const foo = (1 + 2 / 3.4) | 0;' > Code 1`] = `
"
  1 | const foo = (1 + 2 / 3.4) | 0;
"
`;

exports[`invalid(2): 'const foo = (1 + 2 / 3.4) | 0;' > Error 1/1 1`] = `
"
> 1 | const foo = (1 + 2 / 3.4) | 0;
    |             ^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1 + 2 / 3.4);
"
`;

exports[`invalid(3): 'const foo = bar((1.4 | 0) + 2);' > Code 1`] = `
"
  1 | const foo = bar((1.4 | 0) + 2);
"
`;

exports[`invalid(3): 'const foo = bar((1.4 | 0) + 2);' > Error 1/1 1`] = `
"
> 1 | const foo = bar((1.4 | 0) + 2);
    |                  ^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = bar((Math.trunc(1.4)) + 2);
"
`;

exports[`invalid(4): 'const foo = (0, 1.4) | 0;' > Code 1`] = `
"
  1 | const foo = (0, 1.4) | 0;
"
`;

exports[`invalid(4): 'const foo = (0, 1.4) | 0;' > Error 1/1 1`] = `
"
> 1 | const foo = (0, 1.4) | 0;
    |             ^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc((0, 1.4));
"
`;

exports[`invalid(5): 'function foo() {return.1 | 0;}' > Code 1`] = `
"
  1 | function foo() {return.1 | 0;}
"
`;

exports[`invalid(5): 'function foo() {return.1 | 0;}' > Error 1/1 1`] = `
"
> 1 | function foo() {return.1 | 0;}
    |                       ^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | function foo() {return Math.trunc(.1);}
"
`;

exports[`invalid(6): 'const foo = 1.4 | 0.;' > Code 1`] = `
"
  1 | const foo = 1.4 | 0.;
"
`;

exports[`invalid(6): 'const foo = 1.4 | 0.;' > Error 1/1 1`] = `
"
> 1 | const foo = 1.4 | 0.;
    |             ^^^^^^^^ Use \`Math.trunc\` instead of \`| 0.\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0.\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1.4);
"
`;

exports[`invalid(7): 'const foo = 1.4 | .0;' > Code 1`] = `
"
  1 | const foo = 1.4 | .0;
"
`;

exports[`invalid(7): 'const foo = 1.4 | .0;' > Error 1/1 1`] = `
"
> 1 | const foo = 1.4 | .0;
    |             ^^^^^^^^ Use \`Math.trunc\` instead of \`| .0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| .0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1.4);
"
`;

exports[`invalid(8): 'const foo = 1.4 | 0.0000_0000_0000;' > Code 1`] = `
"
  1 | const foo = 1.4 | 0.0000_0000_0000;
"
`;

exports[`invalid(8): 'const foo = 1.4 | 0.0000_0000_0000;' > Error 1/1 1`] = `
"
> 1 | const foo = 1.4 | 0.0000_0000_0000;
    |             ^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0.0000_0000_0000\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0.0000_0000_0000\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1.4);
"
`;

exports[`invalid(9): 'const foo = 1.4 | 0b0;' > Code 1`] = `
"
  1 | const foo = 1.4 | 0b0;
"
`;

exports[`invalid(9): 'const foo = 1.4 | 0b0;' > Error 1/1 1`] = `
"
> 1 | const foo = 1.4 | 0b0;
    |             ^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0b0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0b0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1.4);
"
`;

exports[`invalid(10): 'const foo = 1.4 | 0x0000_0000_0000;' > Code 1`] = `
"
  1 | const foo = 1.4 | 0x0000_0000_0000;
"
`;

exports[`invalid(10): 'const foo = 1.4 | 0x0000_0000_0000;' > Error 1/1 1`] = `
"
> 1 | const foo = 1.4 | 0x0000_0000_0000;
    |             ^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0x0000_0000_0000\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0x0000_0000_0000\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1.4);
"
`;

exports[`invalid(11): 'const foo = 1.4 | 0o0;' > Code 1`] = `
"
  1 | const foo = 1.4 | 0o0;
"
`;

exports[`invalid(11): 'const foo = 1.4 | 0o0;' > Error 1/1 1`] = `
"
> 1 | const foo = 1.4 | 0o0;
    |             ^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0o0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0o0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1.4);
"
`;

exports[`invalid(12): 'const foo = 1.23 | 0 | 4;' > Code 1`] = `
"
  1 | const foo = 1.23 | 0 | 4;
"
`;

exports[`invalid(12): 'const foo = 1.23 | 0 | 4;' > Error 1/1 1`] = `
"
> 1 | const foo = 1.23 | 0 | 4;
    |             ^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(1.23) | 4;
"
`;

exports[`invalid(13): 'const foo = ~~3.9;' > Code 1`] = `
"
  1 | const foo = ~~3.9;
"
`;

exports[`invalid(13): 'const foo = ~~3.9;' > Error 1/1 1`] = `
"
> 1 | const foo = ~~3.9;
    |             ^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(13): 'const foo = ~~3.9;' > Output 1`] = `
"
  1 | const foo = Math.trunc(3.9);
"
`;

exports[`invalid(14): 'const foo = ~~111;' > Code 1`] = `
"
  1 | const foo = ~~111;
"
`;

exports[`invalid(14): 'const foo = ~~111;' > Error 1/1 1`] = `
"
> 1 | const foo = ~~111;
    |             ^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(14): 'const foo = ~~111;' > Output 1`] = `
"
  1 | const foo = Math.trunc(111);
"
`;

exports[`invalid(15): 'const foo = ~~(1 + 2 / 3.4);' > Code 1`] = `
"
  1 | const foo = ~~(1 + 2 / 3.4);
"
`;

exports[`invalid(15): 'const foo = ~~(1 + 2 / 3.4);' > Error 1/1 1`] = `
"
> 1 | const foo = ~~(1 + 2 / 3.4);
    |             ^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(15): 'const foo = ~~(1 + 2 / 3.4);' > Output 1`] = `
"
  1 | const foo = Math.trunc(1 + 2 / 3.4);
"
`;

exports[`invalid(16): 'const foo = ~~1 + 2 / 3.4;' > Code 1`] = `
"
  1 | const foo = ~~1 + 2 / 3.4;
"
`;

exports[`invalid(16): 'const foo = ~~1 + 2 / 3.4;' > Error 1/1 1`] = `
"
> 1 | const foo = ~~1 + 2 / 3.4;
    |             ^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(16): 'const foo = ~~1 + 2 / 3.4;' > Output 1`] = `
"
  1 | const foo = Math.trunc(1) + 2 / 3.4;
"
`;

exports[`invalid(17): 'const foo = ~~(0, 1.4);' > Code 1`] = `
"
  1 | const foo = ~~(0, 1.4);
"
`;

exports[`invalid(17): 'const foo = ~~(0, 1.4);' > Error 1/1 1`] = `
"
> 1 | const foo = ~~(0, 1.4);
    |             ^^^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(17): 'const foo = ~~(0, 1.4);' > Output 1`] = `
"
  1 | const foo = Math.trunc((0, 1.4));
"
`;

exports[`invalid(18): 'const foo = ~~~10.01;' > Code 1`] = `
"
  1 | const foo = ~~~10.01;
"
`;

exports[`invalid(18): 'const foo = ~~~10.01;' > Error 1/1 1`] = `
"
> 1 | const foo = ~~~10.01;
    |              ^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(18): 'const foo = ~~~10.01;' > Output 1`] = `
"
  1 | const foo = ~Math.trunc(10.01);
"
`;

exports[`invalid(19): 'const foo = ~~(~10.01);' > Code 1`] = `
"
  1 | const foo = ~~(~10.01);
"
`;

exports[`invalid(19): 'const foo = ~~(~10.01);' > Error 1/1 1`] = `
"
> 1 | const foo = ~~(~10.01);
    |              ^^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(19): 'const foo = ~~(~10.01);' > Output 1`] = `
"
  1 | const foo = ~Math.trunc(10.01);
"
`;

exports[`invalid(20): 'const foo = ~(~~10.01);' > Code 1`] = `
"
  1 | const foo = ~(~~10.01);
"
`;

exports[`invalid(20): 'const foo = ~(~~10.01);' > Error 1/1 1`] = `
"
> 1 | const foo = ~(~~10.01);
    |               ^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(20): 'const foo = ~(~~10.01);' > Output 1`] = `
"
  1 | const foo = ~(Math.trunc(10.01));
"
`;

exports[`invalid(21): 'const foo = ~~-10.01;' > Code 1`] = `
"
  1 | const foo = ~~-10.01;
"
`;

exports[`invalid(21): 'const foo = ~~-10.01;' > Error 1/1 1`] = `
"
> 1 | const foo = ~~-10.01;
    |             ^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(21): 'const foo = ~~-10.01;' > Output 1`] = `
"
  1 | const foo = Math.trunc(-10.01);
"
`;

exports[`invalid(22): 'const foo = ~~~~10.01;' > Code 1`] = `
"
  1 | const foo = ~~~~10.01;
"
`;

exports[`invalid(22): 'const foo = ~~~~10.01;' > Error 1/1 1`] = `
"
> 1 | const foo = ~~~~10.01;
    |               ^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(22): 'const foo = ~~~~10.01;' > Output 1`] = `
"
  1 | const foo = Math.trunc(Math.trunc(10.01));
"
`;

exports[`invalid(23): 'function foo() {return~~3.9;}' > Code 1`] = `
"
  1 | function foo() {return~~3.9;}
"
`;

exports[`invalid(23): 'function foo() {return~~3.9;}' > Error 1/1 1`] = `
"
> 1 | function foo() {return~~3.9;}
    |                       ^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(23): 'function foo() {return~~3.9;}' > Output 1`] = `
"
  1 | function foo() {return Math.trunc(3.9);}
"
`;

exports[`invalid(24): 'const foo = bar >> 0;' > Code 1`] = `
"
  1 | const foo = bar >> 0;
"
`;

exports[`invalid(24): 'const foo = bar >> 0;' > Error 1/1 1`] = `
"
> 1 | const foo = bar >> 0;
    |             ^^^^^^^^ Use \`Math.trunc\` instead of \`>> 0\`.
"
`;

exports[`invalid(24): 'const foo = bar >> 0;' > Output 1`] = `
"
  1 | const foo = Math.trunc(bar);
"
`;

exports[`invalid(25): 'const foo = bar << 0;' > Code 1`] = `
"
  1 | const foo = bar << 0;
"
`;

exports[`invalid(25): 'const foo = bar << 0;' > Error 1/1 1`] = `
"
> 1 | const foo = bar << 0;
    |             ^^^^^^^^ Use \`Math.trunc\` instead of \`<< 0\`.
"
`;

exports[`invalid(25): 'const foo = bar << 0;' > Output 1`] = `
"
  1 | const foo = Math.trunc(bar);
"
`;

exports[`invalid(26): 'const foo = bar ^ 0;' > Code 1`] = `
"
  1 | const foo = bar ^ 0;
"
`;

exports[`invalid(26): 'const foo = bar ^ 0;' > Error 1/1 1`] = `
"
> 1 | const foo = bar ^ 0;
    |             ^^^^^^^ Use \`Math.trunc\` instead of \`^ 0\`.
"
`;

exports[`invalid(26): 'const foo = bar ^ 0;' > Output 1`] = `
"
  1 | const foo = Math.trunc(bar);
"
`;

exports[`invalid(27): 'function foo() {return.1 ^0;}' > Code 1`] = `
"
  1 | function foo() {return.1 ^0;}
"
`;

exports[`invalid(27): 'function foo() {return.1 ^0;}' > Error 1/1 1`] = `
"
> 1 | function foo() {return.1 ^0;}
    |                       ^^^^^ Use \`Math.trunc\` instead of \`^ 0\`.
"
`;

exports[`invalid(27): 'function foo() {return.1 ^0;}' > Output 1`] = `
"
  1 | function foo() {return Math.trunc(.1);}
"
`;

exports[`invalid(28): 'const foo = {a: {b: {c: 3}}};\\nconst …' > Code 1`] = `
"
  1 | const foo = {a: {b: {c: 3}}};
  2 | const bar = a.b.c | 0;
"
`;

exports[`invalid(28): 'const foo = {a: {b: {c: 3}}};\\nconst …' > Error 1/1 1`] = `
"
  1 | const foo = {a: {b: {c: 3}}};
> 2 | const bar = a.b.c | 0;
    |             ^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = {a: {b: {c: 3}}};
  2 | const bar = Math.trunc(a.b.c);
"
`;

exports[`invalid(29): 'const foo = {a: {b: {c: 3}}};\\nconst …' > Code 1`] = `
"
  1 | const foo = {a: {b: {c: 3}}};
  2 | const bar = a.b?.c | 0;
"
`;

exports[`invalid(29): 'const foo = {a: {b: {c: 3}}};\\nconst …' > Error 1/1 1`] = `
"
  1 | const foo = {a: {b: {c: 3}}};
> 2 | const bar = a.b?.c | 0;
    |             ^^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = {a: {b: {c: 3}}};
  2 | const bar = Math.trunc(a.b?.c);
"
`;

exports[`invalid(30): 'const foo = {a: {b: {c: 3}}};\\nconst …' > Code 1`] = `
"
  1 | const foo = {a: {b: {c: 3}}};
  2 | const bar = ~~a.b?.c;
"
`;

exports[`invalid(30): 'const foo = {a: {b: {c: 3}}};\\nconst …' > Error 1/1 1`] = `
"
  1 | const foo = {a: {b: {c: 3}}};
> 2 | const bar = ~~a.b?.c;
    |             ^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(30): 'const foo = {a: {b: {c: 3}}};\\nconst …' > Output 1`] = `
"
  1 | const foo = {a: {b: {c: 3}}};
  2 | const bar = Math.trunc(a.b?.c);
"
`;

exports[`invalid(31): 'const foo = 3;\\nconst bar = foo | 0;' > Code 1`] = `
"
  1 | const foo = 3;
  2 | const bar = foo | 0;
"
`;

exports[`invalid(31): 'const foo = 3;\\nconst bar = foo | 0;' > Error 1/1 1`] = `
"
  1 | const foo = 3;
> 2 | const bar = foo | 0;
    |             ^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = 3;
  2 | const bar = Math.trunc(foo);
"
`;

exports[`invalid(32): 'const foo = 3;\\nconst bar = ~~foo;' > Code 1`] = `
"
  1 | const foo = 3;
  2 | const bar = ~~foo;
"
`;

exports[`invalid(32): 'const foo = 3;\\nconst bar = ~~foo;' > Error 1/1 1`] = `
"
  1 | const foo = 3;
> 2 | const bar = ~~foo;
    |             ^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(32): 'const foo = 3;\\nconst bar = ~~foo;' > Output 1`] = `
"
  1 | const foo = 3;
  2 | const bar = Math.trunc(foo);
"
`;

exports[`invalid(33): 'let foo = 2;\\nfoo |= 0;' > Code 1`] = `
"
  1 | let foo = 2;
  2 | foo |= 0;
"
`;

exports[`invalid(33): 'let foo = 2;\\nfoo |= 0;' > Error 1/1 1`] = `
"
  1 | let foo = 2;
> 2 | foo |= 0;
    | ^^^^^^^^ Use \`Math.trunc\` instead of \`|= 0\`.
"
`;

exports[`invalid(33): 'let foo = 2;\\nfoo |= 0;' > Output 1`] = `
"
  1 | let foo = 2;
  2 | foo = Math.trunc(foo);
"
`;

exports[`invalid(34): 'const foo = {a: {b: 3.4}};\\nfoo.a.b |…' > Code 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
  2 | foo.a.b |= 0;
"
`;

exports[`invalid(34): 'const foo = {a: {b: 3.4}};\\nfoo.a.b |…' > Error 1/1 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
> 2 | foo.a.b |= 0;
    | ^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`|= 0\`.
"
`;

exports[`invalid(34): 'const foo = {a: {b: 3.4}};\\nfoo.a.b |…' > Output 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
  2 | foo.a.b = Math.trunc(foo.a.b);
"
`;

exports[`invalid(35): 'const foo = 10.01;\\nconst bar = ~~foo;' > Code 1`] = `
"
  1 | const foo = 10.01;
  2 | const bar = ~~foo;
"
`;

exports[`invalid(35): 'const foo = 10.01;\\nconst bar = ~~foo;' > Error 1/1 1`] = `
"
  1 | const foo = 10.01;
> 2 | const bar = ~~foo;
    |             ^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(35): 'const foo = 10.01;\\nconst bar = ~~foo;' > Output 1`] = `
"
  1 | const foo = 10.01;
  2 | const bar = Math.trunc(foo);
"
`;

exports[`invalid(36): 'let foo = 10.01;\\nfoo >>= 0;' > Code 1`] = `
"
  1 | let foo = 10.01;
  2 | foo >>= 0;
"
`;

exports[`invalid(36): 'let foo = 10.01;\\nfoo >>= 0;' > Error 1/1 1`] = `
"
  1 | let foo = 10.01;
> 2 | foo >>= 0;
    | ^^^^^^^^^ Use \`Math.trunc\` instead of \`>>= 0\`.
"
`;

exports[`invalid(36): 'let foo = 10.01;\\nfoo >>= 0;' > Output 1`] = `
"
  1 | let foo = 10.01;
  2 | foo = Math.trunc(foo);
"
`;

exports[`invalid(37): 'let foo = 10.01;\\nfoo <<= 0;' > Code 1`] = `
"
  1 | let foo = 10.01;
  2 | foo <<= 0;
"
`;

exports[`invalid(37): 'let foo = 10.01;\\nfoo <<= 0;' > Error 1/1 1`] = `
"
  1 | let foo = 10.01;
> 2 | foo <<= 0;
    | ^^^^^^^^^ Use \`Math.trunc\` instead of \`<<= 0\`.
"
`;

exports[`invalid(37): 'let foo = 10.01;\\nfoo <<= 0;' > Output 1`] = `
"
  1 | let foo = 10.01;
  2 | foo = Math.trunc(foo);
"
`;

exports[`invalid(38): 'let foo = 10.01;\\nfoo ^= 0;' > Code 1`] = `
"
  1 | let foo = 10.01;
  2 | foo ^= 0;
"
`;

exports[`invalid(38): 'let foo = 10.01;\\nfoo ^= 0;' > Error 1/1 1`] = `
"
  1 | let foo = 10.01;
> 2 | foo ^= 0;
    | ^^^^^^^^ Use \`Math.trunc\` instead of \`^= 0\`.
"
`;

exports[`invalid(38): 'let foo = 10.01;\\nfoo ^= 0;' > Output 1`] = `
"
  1 | let foo = 10.01;
  2 | foo = Math.trunc(foo);
"
`;

exports[`invalid(39): 'function foo() {return[foo][0] ^= 0;};' > Code 1`] = `
"
  1 | function foo() {return[foo][0] ^= 0;};
"
`;

exports[`invalid(39): 'function foo() {return[foo][0] ^= 0;};' > Error 1/1 1`] = `
"
> 1 | function foo() {return[foo][0] ^= 0;};
    |                       ^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`^= 0\`.
"
`;

exports[`invalid(39): 'function foo() {return[foo][0] ^= 0;};' > Output 1`] = `
"
  1 | function foo() {return[foo][0] = Math.trunc([foo][0]);};
"
`;

exports[`invalid(40): 'const foo = /* first comment */ 3.4 |…' > Code 1`] = `
"
  1 | const foo = /* first comment */ 3.4 | 0; // A B C
"
`;

exports[`invalid(40): 'const foo = /* first comment */ 3.4 |…' > Error 1/1 1`] = `
"
> 1 | const foo = /* first comment */ 3.4 | 0; // A B C
    |                                 ^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = /* first comment */ Math.trunc(3.4); // A B C
"
`;

exports[`invalid(41): 'const foo = /* first comment */ ~~3.4…' > Code 1`] = `
"
  1 | const foo = /* first comment */ ~~3.4; // A B C
"
`;

exports[`invalid(41): 'const foo = /* first comment */ ~~3.4…' > Error 1/1 1`] = `
"
> 1 | const foo = /* first comment */ ~~3.4; // A B C
    |                                 ^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(41): 'const foo = /* first comment */ ~~3.4…' > Output 1`] = `
"
  1 | const foo = /* first comment */ Math.trunc(3.4); // A B C
"
`;

exports[`invalid(42): 'const foo = {a: {b: 3.4}};\\nfoo /* Co…' > Code 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
  2 | foo /* Comment 1 */ .a /* Comment 2 */ . /* Comment 3 */ b |= /* Comment 4 */ 0 /* Comment 5 */;
"
`;

exports[`invalid(42): 'const foo = {a: {b: 3.4}};\\nfoo /* Co…' > Error 1/1 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
> 2 | foo /* Comment 1 */ .a /* Comment 2 */ . /* Comment 3 */ b |= /* Comment 4 */ 0 /* Comment 5 */;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`|= 0\`.
"
`;

exports[`invalid(42): 'const foo = {a: {b: 3.4}};\\nfoo /* Co…' > Output 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
  2 | foo /* Comment 1 */ .a /* Comment 2 */ . /* Comment 3 */ b = /* Comment 4 */ Math.trunc(foo /* Comment 1 */ .a /* Comment 2 */ . /* Comment 3 */ b) /* Comment 5 */;
"
`;

exports[`invalid(43): 'const foo = {a: {b: 3.4}};\\nconst bar…' > Code 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
  2 | const bar = /* Comment 1 */ ~~ a /* Comment 3 */ . /* Comment 4 */ b /* Comment 5 */;
"
`;

exports[`invalid(43): 'const foo = {a: {b: 3.4}};\\nconst bar…' > Error 1/1 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
> 2 | const bar = /* Comment 1 */ ~~ a /* Comment 3 */ . /* Comment 4 */ b /* Comment 5 */;
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(43): 'const foo = {a: {b: 3.4}};\\nconst bar…' > Output 1`] = `
"
  1 | const foo = {a: {b: 3.4}};
  2 | const bar = /* Comment 1 */ Math.trunc(a /* Comment 3 */ . /* Comment 4 */ b) /* Comment 5 */;
"
`;

exports[`invalid(44): 'const foo = /* will keep */ 3.4 /* wi…' > Code 1`] = `
"
  1 | const foo = /* will keep */ 3.4 /* will remove 1 */ | /* will remove 2 */ 0;
"
`;

exports[`invalid(44): 'const foo = /* will keep */ 3.4 /* wi…' > Error 1/1 1`] = `
"
> 1 | const foo = /* will keep */ 3.4 /* will remove 1 */ | /* will remove 2 */ 0;
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = /* will keep */ Math.trunc(3.4);
"
`;

exports[`invalid(45): 'const foo = /* will keep */ ~ /* will…' > Code 1`] = `
"
  1 | const foo = /* will keep */ ~ /* will remove 1 */ ~ /* will remove 2 */ 3.4;
"
`;

exports[`invalid(45): 'const foo = /* will keep */ ~ /* will…' > Error 1/1 1`] = `
"
> 1 | const foo = /* will keep */ ~ /* will remove 1 */ ~ /* will remove 2 */ 3.4;
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(45): 'const foo = /* will keep */ ~ /* will…' > Output 1`] = `
"
  1 | const foo = /* will keep */ Math.trunc(3.4);
"
`;

exports[`invalid(46): 'const foo = 3.4; // comment 1\\nfoo |=…' > Code 1`] = `
"
  1 | const foo = 3.4; // comment 1
  2 | foo |= 0; // comment 2
"
`;

exports[`invalid(46): 'const foo = 3.4; // comment 1\\nfoo |=…' > Error 1/1 1`] = `
"
  1 | const foo = 3.4; // comment 1
> 2 | foo |= 0; // comment 2
    | ^^^^^^^^ Use \`Math.trunc\` instead of \`|= 0\`.
"
`;

exports[`invalid(46): 'const foo = 3.4; // comment 1\\nfoo |=…' > Output 1`] = `
"
  1 | const foo = 3.4; // comment 1
  2 | foo = Math.trunc(foo); // comment 2
"
`;

exports[`invalid(47): 'const foo = 3.4; // comment 1\\nconst …' > Code 1`] = `
"
  1 | const foo = 3.4; // comment 1
  2 | const bar = ~~foo; // comment 2
"
`;

exports[`invalid(47): 'const foo = 3.4; // comment 1\\nconst …' > Error 1/1 1`] = `
"
  1 | const foo = 3.4; // comment 1
> 2 | const bar = ~~foo; // comment 2
    |             ^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(47): 'const foo = 3.4; // comment 1\\nconst …' > Output 1`] = `
"
  1 | const foo = 3.4; // comment 1
  2 | const bar = Math.trunc(foo); // comment 2
"
`;

exports[`invalid(48): 'const foo = ~~bar | 0;' > Code 1`] = `
"
  1 | const foo = ~~bar | 0;
"
`;

exports[`invalid(48): 'const foo = ~~bar | 0;' > Error 1/2 1`] = `
"
> 1 | const foo = ~~bar | 0;
    |             ^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(~~bar);
"
`;

exports[`invalid(48): 'const foo = ~~bar | 0;' > Error 2/2 1`] = `
"
> 1 | const foo = ~~bar | 0;
    |             ^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(48): 'const foo = ~~bar | 0;' > Output 1`] = `
"
  1 | const foo = Math.trunc(bar) | 0;
"
`;

exports[`invalid(49): 'const foo = ~~(bar| 0);' > Code 1`] = `
"
  1 | const foo = ~~(bar| 0);
"
`;

exports[`invalid(49): 'const foo = ~~(bar| 0);' > Error 1/2 1`] = `
"
> 1 | const foo = ~~(bar| 0);
    |             ^^^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(49): 'const foo = ~~(bar| 0);' > Error 2/2 1`] = `
"
> 1 | const foo = ~~(bar| 0);
    |                ^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = ~~(Math.trunc(bar));
"
`;

exports[`invalid(49): 'const foo = ~~(bar| 0);' > Output 1`] = `
"
  1 | const foo = Math.trunc(bar| 0);
"
`;

exports[`invalid(50): 'const foo = bar | 0 | 0;' > Code 1`] = `
"
  1 | const foo = bar | 0 | 0;
"
`;

exports[`invalid(50): 'const foo = bar | 0 | 0;' > Error 1/2 1`] = `
"
> 1 | const foo = bar | 0 | 0;
    |             ^^^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(bar | 0);
"
`;

exports[`invalid(50): 'const foo = bar | 0 | 0;' > Error 2/2 1`] = `
"
> 1 | const foo = bar | 0 | 0;
    |             ^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = Math.trunc(bar) | 0;
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Code 1`] = `
"
  1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 1/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`~~\`.
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 2/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`^ 0\`.
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 3/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`^ 0\`.
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 4/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`<< 0\`.
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 5/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`<< 0\`.
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 6/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`>> 0\`.
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 7/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |                  ^^^^^^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`>> 0\`.
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 8/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |                   ^^^^^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = ~~~~((Math.trunc(bar | 0)) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Error 9/9 1`] = `
"
> 1 | const foo = ~~~~((bar | 0 | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
    |                   ^^^^^^^ Use \`Math.trunc\` instead of \`| 0\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`| 0\` with \`Math.trunc\`.
  1 | const foo = ~~~~((Math.trunc(bar) | 0) >> 0 >> 0 << 0 << 0 ^ 0 ^0);
"
`;

exports[`invalid(51): 'const foo = ~~~~((bar | 0 | 0) >> 0 >…' > Output 1`] = `
"
  1 | const foo = Math.trunc(Math.trunc(Math.trunc(Math.trunc(Math.trunc(Math.trunc(Math.trunc(Math.trunc(bar | 0 | 0))))))));
"
`;

exports[`invalid(52): 'const foo = Array.from({length: 10}, …' > Code 1`] = `
"
  1 | const foo = Array.from({length: 10}, (_, index) => (index + 1) + (index + 1) /100);
  2 | let i = 0;
  3 | while (i < foo.length) {
  4 | 	foo[i++] |= 0;
  5 | }
  6 | console.log(foo);
"
`;

exports[`invalid(52): 'const foo = Array.from({length: 10}, …' > Error 1/1 1`] = `
"
  1 | const foo = Array.from({length: 10}, (_, index) => (index + 1) + (index + 1) /100);
  2 | let i = 0;
  3 | while (i < foo.length) {
> 4 | 	foo[i++] |= 0;
    | 	^^^^^^^^^^^^^ Use \`Math.trunc\` instead of \`|= 0\`.
  5 | }
  6 | console.log(foo);
"
`;
