// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'eval(); // eslint-disable-line' > Code 1`] = `
"
  1 | eval(); // eslint-disable-line
"
`;

exports[`invalid(0): 'eval(); // eslint-disable-line' > Error 1/1 1`] = `
"
> 1 | eval(); // eslint-disable-line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Specify the rules you want to disable.
"
`;

exports[`invalid(1): 'foo();\\neval(); // eslint-disable-line' > Code 1`] = `
"
  1 | foo();
  2 | eval(); // eslint-disable-line
"
`;

exports[`invalid(1): 'foo();\\neval(); // eslint-disable-line' > Error 1/1 1`] = `
"
  1 | foo();
> 2 | eval(); // eslint-disable-line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Specify the rules you want to disable.
"
`;

exports[`invalid(2): '/* eslint-disable */' > Code 1`] = `
"
  1 | /* eslint-disable */
"
`;

exports[`invalid(2): '/* eslint-disable */' > Error 1/1 1`] = `
"
> 1 | /* eslint-disable */
    | ^^^^^^^^^^^^^^^^^^^^^ Specify the rules you want to disable.
"
`;

exports[`invalid(3): 'foo();\\n/* eslint-disable */\\neval();' > Code 1`] = `
"
  1 | foo();
  2 | /* eslint-disable */
  3 | eval();
"
`;

exports[`invalid(3): 'foo();\\n/* eslint-disable */\\neval();' > Error 1/1 1`] = `
"
  1 | foo();
> 2 | /* eslint-disable */
    | ^^^^^^^^^^^^^^^^^^^^^ Specify the rules you want to disable.
  3 | eval();
"
`;

exports[`invalid(4): 'foo();\\n\\t/* eslint-disable-next-line…' > Code 1`] = `
"
  1 | foo();
  2 | 	/* eslint-disable-next-line */
  3 | 		eval();
"
`;

exports[`invalid(4): 'foo();\\n\\t/* eslint-disable-next-line…' > Error 1/1 1`] = `
"
  1 | foo();
> 2 | 	/* eslint-disable-next-line */
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Specify the rules you want to disable.
  3 | 		eval();
"
`;

exports[`invalid(5): '// eslint-disable-next-line\\neval();' > Code 1`] = `
"
  1 | // eslint-disable-next-line
  2 | eval();
"
`;

exports[`invalid(5): '// eslint-disable-next-line\\neval();' > Error 1/1 1`] = `
"
> 1 | // eslint-disable-next-line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Specify the rules you want to disable.
  2 | eval();
"
`;

exports[`invalid(6): '// eslint-disable-next-line -- reason…' > Code 1`] = `
"
  1 | // eslint-disable-next-line -- reason
  2 | eval();
"
`;

exports[`invalid(6): '// eslint-disable-next-line -- reason…' > Error 1/1 1`] = `
"
> 1 | // eslint-disable-next-line -- reason
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Specify the rules you want to disable.
  2 | eval();
"
`;
