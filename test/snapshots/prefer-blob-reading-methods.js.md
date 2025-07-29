// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'fileReader.readAsArrayBuffer(blob)' > Code 1`] = `
"
  1 | fileReader.readAsArrayBuffer(blob)
"
`;

exports[`invalid(0): 'fileReader.readAsArrayBuffer(blob)' > Error 1/1 1`] = `
"
> 1 | fileReader.readAsArrayBuffer(blob)
    |            ^^^^^^^^^^^^^^^^^ Prefer \`Blob#arrayBuffer()\` over \`FileReader#readAsArrayBuffer(blob)\`.
"
`;

exports[`invalid(1): 'fileReader.readAsText(blob)' > Code 1`] = `
"
  1 | fileReader.readAsText(blob)
"
`;

exports[`invalid(1): 'fileReader.readAsText(blob)' > Error 1/1 1`] = `
"
> 1 | fileReader.readAsText(blob)
    |            ^^^^^^^^^^ Prefer \`Blob#text()\` over \`FileReader#readAsText(blob)\`.
"
`;
