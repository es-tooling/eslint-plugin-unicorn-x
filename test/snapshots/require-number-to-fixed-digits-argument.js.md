// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const string = number.toFixed();' > Code 1`] = `
"
  1 | const string = number.toFixed();
"
`;

exports[`invalid(0): 'const string = number.toFixed();' > Error 1/1 1`] = `
"
> 1 | const string = number.toFixed();
    |                              ^^ Missing the digits argument.
"
`;

exports[`invalid(0): 'const string = number.toFixed();' > Output 1`] = `
"
  1 | const string = number.toFixed(0);
"
`;

exports[`invalid(1): 'const string = number.toFixed( /* com…' > Code 1`] = `
"
  1 | const string = number.toFixed( /* comment */ );
"
`;

exports[`invalid(1): 'const string = number.toFixed( /* com…' > Error 1/1 1`] = `
"
> 1 | const string = number.toFixed( /* comment */ );
    |                              ^^^^^^^^^^^^^^^^^ Missing the digits argument.
"
`;

exports[`invalid(1): 'const string = number.toFixed( /* com…' > Output 1`] = `
"
  1 | const string = number.toFixed( /* comment */ 0);
"
`;

exports[`invalid(2): 'Number(1).toFixed()' > Code 1`] = `
"
  1 | Number(1).toFixed()
"
`;

exports[`invalid(2): 'Number(1).toFixed()' > Error 1/1 1`] = `
"
> 1 | Number(1).toFixed()
    |                  ^^ Missing the digits argument.
"
`;

exports[`invalid(2): 'Number(1).toFixed()' > Output 1`] = `
"
  1 | Number(1).toFixed(0)
"
`;

exports[`invalid(3): 'const bigNumber = new BigNumber(1); c…' > Code 1`] = `
"
  1 | const bigNumber = new BigNumber(1); const string = bigNumber.toFixed();
"
`;

exports[`invalid(3): 'const bigNumber = new BigNumber(1); c…' > Error 1/1 1`] = `
"
> 1 | const bigNumber = new BigNumber(1); const string = bigNumber.toFixed();
    |                                                                     ^^ Missing the digits argument.
"
`;

exports[`invalid(3): 'const bigNumber = new BigNumber(1); c…' > Output 1`] = `
"
  1 | const bigNumber = new BigNumber(1); const string = bigNumber.toFixed(0);
"
`;
