// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo();\\nfoo();\\nfoo();\\nfoo();\\nfoo()…' > Code 1`] = `
"
   1 | foo();
   2 | foo();
   3 | foo();
   4 | foo();
   5 | foo();
   6 | foo();
   7 | foo();
   8 | foo();
   9 | foo();
  10 | foo();
  11 |
"
`;

exports[`invalid(0): 'foo();\\nfoo();\\nfoo();\\nfoo();\\nfoo()…' > Error 1/1 1`] = `
"
>  1 | foo();
     | ^ Filename is not in camel case or kebab case. Rename it to \`fooBar.mjs\` or \`foo-bar.mjs\`.
   2 | foo();
   3 | foo();
   4 | foo();
   5 | foo();
   6 | foo();
   7 | foo();
   8 | foo();
   9 | foo();
  10 | foo();
  11 |
"
`;

exports[`invalid(0): 'foo();\\nfoo();\\nfoo();\\nfoo();\\nfoo()…' > Filename 1`] = `
"
src/foo/foo_bar.mJS
"
`;

exports[`invalid(0): 'foo();\\nfoo();\\nfoo();\\nfoo();\\nfoo()…' > Options 1`] = `
"
[
  {
    "cases": {
      "camelCase": true,
      "kebabCase": true
    }
  }
]
"
`;

exports[`invalid(1): '/* Filename foo.JS */' > Code 1`] = `
"
  1 | /* Filename foo.JS */
"
`;

exports[`invalid(1): '/* Filename foo.JS */' > Error 1/1 1`] = `
"
> 1 | /* Filename foo.JS */
    | ^ File extension \`.JS\` is not in lowercase. Rename it to \`foo.js\`.
"
`;

exports[`invalid(1): '/* Filename foo.JS */' > Filename 1`] = `
"
foo.JS
"
`;

exports[`invalid(2): '/* Filename foo.Js */' > Code 1`] = `
"
  1 | /* Filename foo.Js */
"
`;

exports[`invalid(2): '/* Filename foo.Js */' > Error 1/1 1`] = `
"
> 1 | /* Filename foo.Js */
    | ^ File extension \`.Js\` is not in lowercase. Rename it to \`foo.js\`.
"
`;

exports[`invalid(2): '/* Filename foo.Js */' > Filename 1`] = `
"
foo.Js
"
`;

exports[`invalid(3): '/* Filename foo.jS */' > Code 1`] = `
"
  1 | /* Filename foo.jS */
"
`;

exports[`invalid(3): '/* Filename foo.jS */' > Error 1/1 1`] = `
"
> 1 | /* Filename foo.jS */
    | ^ File extension \`.jS\` is not in lowercase. Rename it to \`foo.js\`.
"
`;

exports[`invalid(3): '/* Filename foo.jS */' > Filename 1`] = `
"
foo.jS
"
`;

exports[`invalid(4): '/* Filename index.JS */' > Code 1`] = `
"
  1 | /* Filename index.JS */
"
`;

exports[`invalid(4): '/* Filename index.JS */' > Error 1/1 1`] = `
"
> 1 | /* Filename index.JS */
    | ^ File extension \`.JS\` is not in lowercase. Rename it to \`index.js\`.
"
`;

exports[`invalid(4): '/* Filename index.JS */' > Filename 1`] = `
"
index.JS
"
`;

exports[`invalid(5): '/* Filename foo..JS */' > Code 1`] = `
"
  1 | /* Filename foo..JS */
"
`;

exports[`invalid(5): '/* Filename foo..JS */' > Error 1/1 1`] = `
"
> 1 | /* Filename foo..JS */
    | ^ File extension \`.JS\` is not in lowercase. Rename it to \`foo..js\`.
"
`;

exports[`invalid(5): '/* Filename foo..JS */' > Filename 1`] = `
"
foo..JS
"
`;
