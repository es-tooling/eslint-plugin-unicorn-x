// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '/**/foo.slice(foo.length - 2, foo.len…' > Code 1`] = `
"
  1 | /**/foo.slice(foo.length - 2, foo.length - 1)
"
`;

exports[`invalid(0): '/**/foo.slice(foo.length - 2, foo.len…' > Error 1/1 1`] = `
"
> 1 | /**/foo.slice(foo.length - 2, foo.length - 1)
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`slice\`.
"
`;

exports[`invalid(0): '/**/foo.slice(foo.length - 2, foo.len…' > Output 1`] = `
"
  1 | /**/foo.slice(- 2, - 1)
"
`;

exports[`invalid(1): '/**/foo.splice(foo.length - 1, 1)' > Code 1`] = `
"
  1 | /**/foo.splice(foo.length - 1, 1)
"
`;

exports[`invalid(1): '/**/foo.splice(foo.length - 1, 1)' > Error 1/1 1`] = `
"
> 1 | /**/foo.splice(foo.length - 1, 1)
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`splice\`.
"
`;

exports[`invalid(1): '/**/foo.splice(foo.length - 1, 1)' > Output 1`] = `
"
  1 | /**/foo.splice(- 1, 1)
"
`;

exports[`invalid(2): 'foo.bar.slice(foo["bar"].length - 1)' > Code 1`] = `
"
  1 | foo.bar.slice(foo["bar"].length - 1)
"
`;

exports[`invalid(2): 'foo.bar.slice(foo["bar"].length - 1)' > Error 1/1 1`] = `
"
> 1 | foo.bar.slice(foo["bar"].length - 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`slice\`.
"
`;

exports[`invalid(2): 'foo.bar.slice(foo["bar"].length - 1)' > Output 1`] = `
"
  1 | foo.bar.slice(- 1)
"
`;

exports[`invalid(3): 'foo[\`bar\`].slice(foo["bar"].length - …' > Code 1`] = `
"
  1 | foo[\`bar\`].slice(foo["bar"].length - 1)
"
`;

exports[`invalid(3): 'foo[\`bar\`].slice(foo["bar"].length - …' > Error 1/1 1`] = `
"
> 1 | foo[\`bar\`].slice(foo["bar"].length - 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`slice\`.
"
`;

exports[`invalid(3): 'foo[\`bar\`].slice(foo["bar"].length - …' > Output 1`] = `
"
  1 | foo[\`bar\`].slice(- 1)
"
`;

exports[`invalid(4): 'foo[1].slice(foo["1"].length - 1)' > Code 1`] = `
"
  1 | foo[1].slice(foo["1"].length - 1)
"
`;

exports[`invalid(4): 'foo[1].slice(foo["1"].length - 1)' > Error 1/1 1`] = `
"
> 1 | foo[1].slice(foo["1"].length - 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`slice\`.
"
`;

exports[`invalid(4): 'foo[1].slice(foo["1"].length - 1)' > Output 1`] = `
"
  1 | foo[1].slice(- 1)
"
`;

exports[`invalid(5): 'foo[\\'bar\\'].slice(foo["bar"].length …' > Code 1`] = `
"
  1 | foo['bar'].slice(foo["bar"].length - 1)
"
`;

exports[`invalid(5): 'foo[\\'bar\\'].slice(foo["bar"].length …' > Error 1/1 1`] = `
"
> 1 | foo['bar'].slice(foo["bar"].length - 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`slice\`.
"
`;

exports[`invalid(5): 'foo[\\'bar\\'].slice(foo["bar"].length …' > Output 1`] = `
"
  1 | foo['bar'].slice(- 1)
"
`;

exports[`invalid(6): 'foo.at(foo.length - 1);\\nArray.protot…' > Code 1`] = `
"
  1 | foo.at(foo.length - 1);
  2 | Array.prototype.at.call(foo, foo.length - 2);
  3 | Array.prototype.at.apply(foo, [foo.length - 3]);
"
`;

exports[`invalid(6): 'foo.at(foo.length - 1);\\nArray.protot…' > Error 1/3 1`] = `
"
> 1 | foo.at(foo.length - 1);
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`at\`.
  2 | Array.prototype.at.call(foo, foo.length - 2);
  3 | Array.prototype.at.apply(foo, [foo.length - 3]);
"
`;

exports[`invalid(6): 'foo.at(foo.length - 1);\\nArray.protot…' > Error 2/3 1`] = `
"
  1 | foo.at(foo.length - 1);
> 2 | Array.prototype.at.call(foo, foo.length - 2);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`at\`.
  3 | Array.prototype.at.apply(foo, [foo.length - 3]);
"
`;

exports[`invalid(6): 'foo.at(foo.length - 1);\\nArray.protot…' > Error 3/3 1`] = `
"
  1 | foo.at(foo.length - 1);
  2 | Array.prototype.at.call(foo, foo.length - 2);
> 3 | Array.prototype.at.apply(foo, [foo.length - 3]);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`at\`.
"
`;

exports[`invalid(6): 'foo.at(foo.length - 1);\\nArray.protot…' > Output 1`] = `
"
  1 | foo.at(- 1);
  2 | Array.prototype.at.call(foo, - 2);
  3 | Array.prototype.at.apply(foo, [- 3]);
"
`;

exports[`invalid(7): 'foo.toSpliced(foo.length - 3, foo.len…' > Code 1`] = `
"
  1 | foo.toSpliced(foo.length - 3, foo.length - 6)
"
`;

exports[`invalid(7): 'foo.toSpliced(foo.length - 3, foo.len…' > Error 1/1 1`] = `
"
> 1 | foo.toSpliced(foo.length - 3, foo.length - 6)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`toSpliced\`.
"
`;

exports[`invalid(7): 'foo.toSpliced(foo.length - 3, foo.len…' > Output 1`] = `
"
  1 | foo.toSpliced(- 3, foo.length - 6)
"
`;

exports[`invalid(8): 'Array.prototype.toSpliced.call(foo, f…' > Code 1`] = `
"
  1 | Array.prototype.toSpliced.call(foo, foo.length - 3, foo.length - 6)
"
`;

exports[`invalid(8): 'Array.prototype.toSpliced.call(foo, f…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.toSpliced.call(foo, foo.length - 3, foo.length - 6)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`toSpliced\`.
"
`;

exports[`invalid(8): 'Array.prototype.toSpliced.call(foo, f…' > Output 1`] = `
"
  1 | Array.prototype.toSpliced.call(foo, - 3, foo.length - 6)
"
`;

exports[`invalid(9): '[].toSpliced.call(foo, foo.length - 3…' > Code 1`] = `
"
  1 | [].toSpliced.call(foo, foo.length - 3, foo.length - 6)
"
`;

exports[`invalid(9): '[].toSpliced.call(foo, foo.length - 3…' > Error 1/1 1`] = `
"
> 1 | [].toSpliced.call(foo, foo.length - 3, foo.length - 6)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`toSpliced\`.
"
`;

exports[`invalid(9): '[].toSpliced.call(foo, foo.length - 3…' > Output 1`] = `
"
  1 | [].toSpliced.call(foo, - 3, foo.length - 6)
"
`;

exports[`invalid(10): 'foo.with(foo.length - 3, foo.length -…' > Code 1`] = `
"
  1 | foo.with(foo.length - 3, foo.length - 6)
"
`;

exports[`invalid(10): 'foo.with(foo.length - 3, foo.length -…' > Error 1/1 1`] = `
"
> 1 | foo.with(foo.length - 3, foo.length - 6)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`with\`.
"
`;

exports[`invalid(10): 'foo.with(foo.length - 3, foo.length -…' > Output 1`] = `
"
  1 | foo.with(- 3, foo.length - 6)
"
`;

exports[`invalid(11): 'Array.prototype.with.call(foo, foo.le…' > Code 1`] = `
"
  1 | Array.prototype.with.call(foo, foo.length - 3, foo.length - 6)
"
`;

exports[`invalid(11): 'Array.prototype.with.call(foo, foo.le…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.with.call(foo, foo.length - 3, foo.length - 6)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`with\`.
"
`;

exports[`invalid(11): 'Array.prototype.with.call(foo, foo.le…' > Output 1`] = `
"
  1 | Array.prototype.with.call(foo, - 3, foo.length - 6)
"
`;

exports[`invalid(12): 'foo.subarray(foo.length - 3, foo.leng…' > Code 1`] = `
"
  1 | foo.subarray(foo.length - 3, foo.length - 6)
"
`;

exports[`invalid(12): 'foo.subarray(foo.length - 3, foo.leng…' > Error 1/1 1`] = `
"
> 1 | foo.subarray(foo.length - 3, foo.length - 6)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`subarray\`.
"
`;

exports[`invalid(12): 'foo.subarray(foo.length - 3, foo.leng…' > Output 1`] = `
"
  1 | foo.subarray(- 3, - 6)
"
`;

exports[`invalid(13): 'Uint8Array.prototype.subarray.call(fo…' > Code 1`] = `
"
  1 | Uint8Array.prototype.subarray.call(foo, foo.length - 3, foo.length - 6)
"
`;

exports[`invalid(13): 'Uint8Array.prototype.subarray.call(fo…' > Error 1/1 1`] = `
"
> 1 | Uint8Array.prototype.subarray.call(foo, foo.length - 3, foo.length - 6)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`subarray\`.
"
`;

exports[`invalid(13): 'Uint8Array.prototype.subarray.call(fo…' > Output 1`] = `
"
  1 | Uint8Array.prototype.subarray.call(foo, - 3, - 6)
"
`;

exports[`invalid(14): 'Uint8Array.prototype.subarray.apply(f…' > Code 1`] = `
"
  1 | Uint8Array.prototype.subarray.apply(foo, [foo.length - 3, foo.length - 6])
"
`;

exports[`invalid(14): 'Uint8Array.prototype.subarray.apply(f…' > Error 1/1 1`] = `
"
> 1 | Uint8Array.prototype.subarray.apply(foo, [foo.length - 3, foo.length - 6])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer negative index over length minus index for \`subarray\`.
"
`;

exports[`invalid(14): 'Uint8Array.prototype.subarray.apply(f…' > Output 1`] = `
"
  1 | Uint8Array.prototype.subarray.apply(foo, [- 3, - 6])
"
`;
