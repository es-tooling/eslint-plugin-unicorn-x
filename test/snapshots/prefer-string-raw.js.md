// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'a = \\'a\\\\b\\'' > Code 1`] = `
"
  1 | a = 'a\\\\b'
"
`;

exports[`invalid(0): 'a = \\'a\\\\b\\'' > Error 1/1 1`] = `
"
> 1 | a = 'a\\\\b'
    |     ^^^^^^ \`String.raw\` should be used to avoid escaping \`\\\`.
"
`;

exports[`invalid(0): 'a = \\'a\\\\b\\'' > Output 1`] = `
"
  1 | a = String.raw\`a\\b\`
"
`;

exports[`invalid(1): 'a = {[\\'a\\\\b\\']: b}' > Code 1`] = `
"
  1 | a = {['a\\\\b']: b}
"
`;

exports[`invalid(1): 'a = {[\\'a\\\\b\\']: b}' > Error 1/1 1`] = `
"
> 1 | a = {['a\\\\b']: b}
    |       ^^^^^^ \`String.raw\` should be used to avoid escaping \`\\\`.
"
`;

exports[`invalid(1): 'a = {[\\'a\\\\b\\']: b}' > Output 1`] = `
"
  1 | a = {[String.raw\`a\\b\`]: b}
"
`;

exports[`invalid(2): 'function a() {return\\'a\\\\b\\'}' > Code 1`] = `
"
  1 | function a() {return'a\\\\b'}
"
`;

exports[`invalid(2): 'function a() {return\\'a\\\\b\\'}' > Error 1/1 1`] = `
"
> 1 | function a() {return'a\\\\b'}
    |                     ^^^^^^ \`String.raw\` should be used to avoid escaping \`\\\`.
"
`;

exports[`invalid(2): 'function a() {return\\'a\\\\b\\'}' > Output 1`] = `
"
  1 | function a() {return String.raw\`a\\b\`}
"
`;

exports[`invalid(3): 'const foo = "foo \\\\x46";' > Code 1`] = `
"
  1 | const foo = "foo \\\\x46";
"
`;

exports[`invalid(3): 'const foo = "foo \\\\x46";' > Error 1/1 1`] = `
"
> 1 | const foo = "foo \\\\x46";
    |             ^^^^^^^^^^^ \`String.raw\` should be used to avoid escaping \`\\\`.
"
`;

exports[`invalid(3): 'const foo = "foo \\\\x46";' > Output 1`] = `
"
  1 | const foo = String.raw\`foo \\x46\`;
"
`;

exports[`invalid(4): 'a = \\'a\\\\b\\\\'\\'' > Code 1`] = `
"
  1 | a = 'a\\\\b\\''
"
`;

exports[`invalid(4): 'a = \\'a\\\\b\\\\'\\'' > Error 1/1 1`] = `
"
> 1 | a = 'a\\\\b\\''
    |     ^^^^^^^^ \`String.raw\` should be used to avoid escaping \`\\\`.
"
`;

exports[`invalid(4): 'a = \\'a\\\\b\\\\'\\'' > Output 1`] = `
"
  1 | a = String.raw\`a\\b'\`
"
`;

exports[`invalid(5): 'a = "a\\\\b\\""' > Code 1`] = `
"
  1 | a = "a\\\\b\\""
"
`;

exports[`invalid(5): 'a = "a\\\\b\\""' > Error 1/1 1`] = `
"
> 1 | a = "a\\\\b\\""
    |     ^^^^^^^^ \`String.raw\` should be used to avoid escaping \`\\\`.
"
`;

exports[`invalid(5): 'a = "a\\\\b\\""' > Output 1`] = `
"
  1 | a = String.raw\`a\\b"\`
"
`;
