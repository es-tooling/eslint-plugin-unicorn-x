// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '/(?!a)+/g' > Code 1`] = `
"
  1 | /(?!a)+/g
"
`;

exports[`invalid(0): '/(?!a)+/g' > Error 1/1 1`] = `
"
> 1 | /(?!a)+/g
    | ^^^^^^^^^ Problem parsing /(?!a)+/g: 

/(?!a)+/g
      ^
Unexpected token: "+" at 1:6.
"
`;
