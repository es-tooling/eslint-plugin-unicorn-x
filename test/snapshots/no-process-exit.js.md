// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'process.exit(1);' > Code 1`] = `
"
  1 | process.exit(1);
"
`;

exports[`invalid(0): 'process.exit(1);' > Error 1/1 1`] = `
"
> 1 | process.exit(1);
    | ^^^^^^^^^^^^^^^ Only use \`process.exit()\` in CLI apps. Throw an error instead.
"
`;
