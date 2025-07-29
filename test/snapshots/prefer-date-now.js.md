// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const ts = new Date().getTime();' > Code 1`] = `
"
  1 | const ts = new Date().getTime();
"
`;

exports[`invalid(0): 'const ts = new Date().getTime();' > Error 1/1 1`] = `
"
> 1 | const ts = new Date().getTime();
    |                       ^^^^^^^ Prefer \`Date.now()\` over \`Date#getTime()\`.
"
`;

exports[`invalid(0): 'const ts = new Date().getTime();' > Output 1`] = `
"
  1 | const ts = Date.now();
"
`;

exports[`invalid(1): 'const ts = (new Date).getTime();' > Code 1`] = `
"
  1 | const ts = (new Date).getTime();
"
`;

exports[`invalid(1): 'const ts = (new Date).getTime();' > Error 1/1 1`] = `
"
> 1 | const ts = (new Date).getTime();
    |                       ^^^^^^^ Prefer \`Date.now()\` over \`Date#getTime()\`.
"
`;

exports[`invalid(1): 'const ts = (new Date).getTime();' > Output 1`] = `
"
  1 | const ts = Date.now();
"
`;

exports[`invalid(2): 'const ts = (new Date()).getTime();' > Code 1`] = `
"
  1 | const ts = (new Date()).getTime();
"
`;

exports[`invalid(2): 'const ts = (new Date()).getTime();' > Error 1/1 1`] = `
"
> 1 | const ts = (new Date()).getTime();
    |                         ^^^^^^^ Prefer \`Date.now()\` over \`Date#getTime()\`.
"
`;

exports[`invalid(2): 'const ts = (new Date()).getTime();' > Output 1`] = `
"
  1 | const ts = Date.now();
"
`;

exports[`invalid(3): 'const ts = new Date().valueOf();' > Code 1`] = `
"
  1 | const ts = new Date().valueOf();
"
`;

exports[`invalid(3): 'const ts = new Date().valueOf();' > Error 1/1 1`] = `
"
> 1 | const ts = new Date().valueOf();
    |                       ^^^^^^^ Prefer \`Date.now()\` over \`Date#valueOf()\`.
"
`;

exports[`invalid(3): 'const ts = new Date().valueOf();' > Output 1`] = `
"
  1 | const ts = Date.now();
"
`;

exports[`invalid(4): 'const ts = (new Date).valueOf();' > Code 1`] = `
"
  1 | const ts = (new Date).valueOf();
"
`;

exports[`invalid(4): 'const ts = (new Date).valueOf();' > Error 1/1 1`] = `
"
> 1 | const ts = (new Date).valueOf();
    |                       ^^^^^^^ Prefer \`Date.now()\` over \`Date#valueOf()\`.
"
`;

exports[`invalid(4): 'const ts = (new Date).valueOf();' > Output 1`] = `
"
  1 | const ts = Date.now();
"
`;

exports[`invalid(5): 'const ts = (new Date()).valueOf();' > Code 1`] = `
"
  1 | const ts = (new Date()).valueOf();
"
`;

exports[`invalid(5): 'const ts = (new Date()).valueOf();' > Error 1/1 1`] = `
"
> 1 | const ts = (new Date()).valueOf();
    |                         ^^^^^^^ Prefer \`Date.now()\` over \`Date#valueOf()\`.
"
`;

exports[`invalid(5): 'const ts = (new Date()).valueOf();' > Output 1`] = `
"
  1 | const ts = Date.now();
"
`;

exports[`invalid(6): 'const ts = /* 1 */ Number(/* 2 */ new…' > Code 1`] = `
"
  1 | const ts = /* 1 */ Number(/* 2 */ new /* 3 */ Date( /* 4 */ ) /* 5 */) /* 6 */
"
`;

exports[`invalid(6): 'const ts = /* 1 */ Number(/* 2 */ new…' > Error 1/1 1`] = `
"
> 1 | const ts = /* 1 */ Number(/* 2 */ new /* 3 */ Date( /* 4 */ ) /* 5 */) /* 6 */
    |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Date.now()\` over \`Number(new Date())\`.
"
`;

exports[`invalid(6): 'const ts = /* 1 */ Number(/* 2 */ new…' > Output 1`] = `
"
  1 | const ts = /* 1 */ Date.now() /* 6 */
"
`;

exports[`invalid(7): 'const tsBigInt = /* 1 */ BigInt(/* 2 …' > Code 1`] = `
"
  1 | const tsBigInt = /* 1 */ BigInt(/* 2 */ new /* 3 */ Date( /* 4 */ ) /* 5 */) /* 6 */
"
`;

exports[`invalid(7): 'const tsBigInt = /* 1 */ BigInt(/* 2 …' > Error 1/1 1`] = `
"
> 1 | const tsBigInt = /* 1 */ BigInt(/* 2 */ new /* 3 */ Date( /* 4 */ ) /* 5 */) /* 6 */
    |                                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(7): 'const tsBigInt = /* 1 */ BigInt(/* 2 …' > Output 1`] = `
"
  1 | const tsBigInt = /* 1 */ BigInt(/* 2 */ Date.now() /* 5 */) /* 6 */
"
`;

exports[`invalid(8): 'const ts = + /* 1 */ new Date;' > Code 1`] = `
"
  1 | const ts = + /* 1 */ new Date;
"
`;

exports[`invalid(8): 'const ts = + /* 1 */ new Date;' > Error 1/1 1`] = `
"
> 1 | const ts = + /* 1 */ new Date;
    |            ^^^^^^^^^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(8): 'const ts = + /* 1 */ new Date;' > Output 1`] = `
"
  1 | const ts = Date.now();
"
`;

exports[`invalid(9): 'const ts = - /* 1 */ new Date();' > Code 1`] = `
"
  1 | const ts = - /* 1 */ new Date();
"
`;

exports[`invalid(9): 'const ts = - /* 1 */ new Date();' > Error 1/1 1`] = `
"
> 1 | const ts = - /* 1 */ new Date();
    |                      ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(9): 'const ts = - /* 1 */ new Date();' > Output 1`] = `
"
  1 | const ts = - /* 1 */ Date.now();
"
`;

exports[`invalid(10): 'const ts = new Date() - 0' > Code 1`] = `
"
  1 | const ts = new Date() - 0
"
`;

exports[`invalid(10): 'const ts = new Date() - 0' > Error 1/1 1`] = `
"
> 1 | const ts = new Date() - 0
    |            ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(10): 'const ts = new Date() - 0' > Output 1`] = `
"
  1 | const ts = Date.now() - 0
"
`;

exports[`invalid(11): 'const foo = bar - new Date' > Code 1`] = `
"
  1 | const foo = bar - new Date
"
`;

exports[`invalid(11): 'const foo = bar - new Date' > Error 1/1 1`] = `
"
> 1 | const foo = bar - new Date
    |                   ^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(11): 'const foo = bar - new Date' > Output 1`] = `
"
  1 | const foo = bar - Date.now()
"
`;

exports[`invalid(12): 'const foo = new Date() * bar' > Code 1`] = `
"
  1 | const foo = new Date() * bar
"
`;

exports[`invalid(12): 'const foo = new Date() * bar' > Error 1/1 1`] = `
"
> 1 | const foo = new Date() * bar
    |             ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(12): 'const foo = new Date() * bar' > Output 1`] = `
"
  1 | const foo = Date.now() * bar
"
`;

exports[`invalid(13): 'const ts = new Date() / 1' > Code 1`] = `
"
  1 | const ts = new Date() / 1
"
`;

exports[`invalid(13): 'const ts = new Date() / 1' > Error 1/1 1`] = `
"
> 1 | const ts = new Date() / 1
    |            ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(13): 'const ts = new Date() / 1' > Output 1`] = `
"
  1 | const ts = Date.now() / 1
"
`;

exports[`invalid(14): 'const ts = new Date() % Infinity' > Code 1`] = `
"
  1 | const ts = new Date() % Infinity
"
`;

exports[`invalid(14): 'const ts = new Date() % Infinity' > Error 1/1 1`] = `
"
> 1 | const ts = new Date() % Infinity
    |            ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(14): 'const ts = new Date() % Infinity' > Output 1`] = `
"
  1 | const ts = Date.now() % Infinity
"
`;

exports[`invalid(15): 'const ts = new Date() ** 1' > Code 1`] = `
"
  1 | const ts = new Date() ** 1
"
`;

exports[`invalid(15): 'const ts = new Date() ** 1' > Error 1/1 1`] = `
"
> 1 | const ts = new Date() ** 1
    |            ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(15): 'const ts = new Date() ** 1' > Output 1`] = `
"
  1 | const ts = Date.now() ** 1
"
`;

exports[`invalid(16): 'const zero = (new Date(/* 1 */) /* 2 …' > Code 1`] = `
"
  1 | const zero = (new Date(/* 1 */) /* 2 */) /* 3 */ - /* 4 */new Date
"
`;

exports[`invalid(16): 'const zero = (new Date(/* 1 */) /* 2 …' > Error 1/2 1`] = `
"
> 1 | const zero = (new Date(/* 1 */) /* 2 */) /* 3 */ - /* 4 */new Date
    |               ^^^^^^^^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(16): 'const zero = (new Date(/* 1 */) /* 2 …' > Error 2/2 1`] = `
"
> 1 | const zero = (new Date(/* 1 */) /* 2 */) /* 3 */ - /* 4 */new Date
    |                                                           ^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(16): 'const zero = (new Date(/* 1 */) /* 2 …' > Output 1`] = `
"
  1 | const zero = (Date.now() /* 2 */) /* 3 */ - /* 4 */Date.now()
"
`;

exports[`invalid(17): 'foo -= new Date()' > Code 1`] = `
"
  1 | foo -= new Date()
"
`;

exports[`invalid(17): 'foo -= new Date()' > Error 1/1 1`] = `
"
> 1 | foo -= new Date()
    |        ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(17): 'foo -= new Date()' > Output 1`] = `
"
  1 | foo -= Date.now()
"
`;

exports[`invalid(18): 'foo *= new Date()' > Code 1`] = `
"
  1 | foo *= new Date()
"
`;

exports[`invalid(18): 'foo *= new Date()' > Error 1/1 1`] = `
"
> 1 | foo *= new Date()
    |        ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(18): 'foo *= new Date()' > Output 1`] = `
"
  1 | foo *= Date.now()
"
`;

exports[`invalid(19): 'foo /= new Date' > Code 1`] = `
"
  1 | foo /= new Date
"
`;

exports[`invalid(19): 'foo /= new Date' > Error 1/1 1`] = `
"
> 1 | foo /= new Date
    |        ^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(19): 'foo /= new Date' > Output 1`] = `
"
  1 | foo /= Date.now()
"
`;

exports[`invalid(20): 'foo %= new Date()' > Code 1`] = `
"
  1 | foo %= new Date()
"
`;

exports[`invalid(20): 'foo %= new Date()' > Error 1/1 1`] = `
"
> 1 | foo %= new Date()
    |        ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(20): 'foo %= new Date()' > Output 1`] = `
"
  1 | foo %= Date.now()
"
`;

exports[`invalid(21): 'foo **= new Date()' > Code 1`] = `
"
  1 | foo **= new Date()
"
`;

exports[`invalid(21): 'foo **= new Date()' > Error 1/1 1`] = `
"
> 1 | foo **= new Date()
    |         ^^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(21): 'foo **= new Date()' > Output 1`] = `
"
  1 | foo **= Date.now()
"
`;

exports[`invalid(22): 'function foo(){return+new Date}' > Code 1`] = `
"
  1 | function foo(){return+new Date}
"
`;

exports[`invalid(22): 'function foo(){return+new Date}' > Error 1/1 1`] = `
"
> 1 | function foo(){return+new Date}
    |                      ^^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(22): 'function foo(){return+new Date}' > Output 1`] = `
"
  1 | function foo(){return Date.now()}
"
`;

exports[`invalid(23): 'function foo(){return-new Date}' > Code 1`] = `
"
  1 | function foo(){return-new Date}
"
`;

exports[`invalid(23): 'function foo(){return-new Date}' > Error 1/1 1`] = `
"
> 1 | function foo(){return-new Date}
    |                       ^^^^^^^^ Prefer \`Date.now()\` over \`new Date()\`.
"
`;

exports[`invalid(23): 'function foo(){return-new Date}' > Output 1`] = `
"
  1 | function foo(){return-Date.now()}
"
`;
