// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'document.cookie = "foo=bar"' > Code 1`] = `
"
  1 | document.cookie = "foo=bar"
"
`;

exports[`invalid(0): 'document.cookie = "foo=bar"' > Error 1/1 1`] = `
"
> 1 | document.cookie = "foo=bar"
    | ^^^^^^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(1): 'document.cookie += ";foo=bar"' > Code 1`] = `
"
  1 | document.cookie += ";foo=bar"
"
`;

exports[`invalid(1): 'document.cookie += ";foo=bar"' > Error 1/1 1`] = `
"
> 1 | document.cookie += ";foo=bar"
    | ^^^^^^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(2): 'document.cookie = document.cookie + "…' > Code 1`] = `
"
  1 | document.cookie = document.cookie + ";foo=bar"
"
`;

exports[`invalid(2): 'document.cookie = document.cookie + "…' > Error 1/1 1`] = `
"
> 1 | document.cookie = document.cookie + ";foo=bar"
    | ^^^^^^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(3): 'document.cookie &&= true' > Code 1`] = `
"
  1 | document.cookie &&= true
"
`;

exports[`invalid(3): 'document.cookie &&= true' > Error 1/1 1`] = `
"
> 1 | document.cookie &&= true
    | ^^^^^^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(4): 'document["coo" + "kie"] = "foo=bar"' > Code 1`] = `
"
  1 | document["coo" + "kie"] = "foo=bar"
"
`;

exports[`invalid(4): 'document["coo" + "kie"] = "foo=bar"' > Error 1/1 1`] = `
"
> 1 | document["coo" + "kie"] = "foo=bar"
    | ^^^^^^^^^^^^^^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(5): 'foo = document.cookie = "foo=bar"' > Code 1`] = `
"
  1 | foo = document.cookie = "foo=bar"
"
`;

exports[`invalid(5): 'foo = document.cookie = "foo=bar"' > Error 1/1 1`] = `
"
> 1 | foo = document.cookie = "foo=bar"
    |       ^^^^^^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(6): 'var doc = document; doc.cookie = "foo…' > Code 1`] = `
"
  1 | var doc = document; doc.cookie = "foo=bar"
"
`;

exports[`invalid(6): 'var doc = document; doc.cookie = "foo…' > Error 1/1 1`] = `
"
> 1 | var doc = document; doc.cookie = "foo=bar"
    |                     ^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(7): 'let doc = document; doc.cookie = "foo…' > Code 1`] = `
"
  1 | let doc = document; doc.cookie = "foo=bar"
"
`;

exports[`invalid(7): 'let doc = document; doc.cookie = "foo…' > Error 1/1 1`] = `
"
> 1 | let doc = document; doc.cookie = "foo=bar"
    |                     ^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(8): 'const doc = globalThis.document; doc.…' > Code 1`] = `
"
  1 | const doc = globalThis.document; doc.cookie = "foo=bar"
"
`;

exports[`invalid(8): 'const doc = globalThis.document; doc.…' > Error 1/1 1`] = `
"
> 1 | const doc = globalThis.document; doc.cookie = "foo=bar"
    |                                  ^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;

exports[`invalid(9): 'window.document.cookie = "foo=bar"' > Code 1`] = `
"
  1 | window.document.cookie = "foo=bar"
"
`;

exports[`invalid(9): 'window.document.cookie = "foo=bar"' > Error 1/1 1`] = `
"
> 1 | window.document.cookie = "foo=bar"
    | ^^^^^^^^^^^^^^^^^^^^^^ Do not use \`document.cookie\` directly.
"
`;
