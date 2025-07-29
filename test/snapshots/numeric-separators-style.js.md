// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'console.log(0XdeEdBeeFn)' > Code 1`] = `
"
  1 | console.log(0XdeEdBeeFn)
"
`;

exports[`invalid(0): 'console.log(0XdeEdBeeFn)' > Error 1/1 1`] = `
"
> 1 | console.log(0XdeEdBeeFn)
    |             ^^^^^^^^^^^ Invalid group length in numeric value.
"
`;

exports[`invalid(0): 'console.log(0XdeEdBeeFn)' > Output 1`] = `
"
  1 | console.log(0Xde_Ed_Be_eFn)
"
`;

exports[`invalid(1): 'const foo = 12345678..toString()' > Code 1`] = `
"
  1 | const foo = 12345678..toString()
"
`;

exports[`invalid(1): 'const foo = 12345678..toString()' > Error 1/1 1`] = `
"
> 1 | const foo = 12345678..toString()
    |             ^^^^^^^^^ Invalid group length in numeric value.
"
`;

exports[`invalid(1): 'const foo = 12345678..toString()' > Output 1`] = `
"
  1 | const foo = 12_345_678..toString()
"
`;
