// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'string.charCodeAt(index)' > Code 1`] = `
"
  1 | string.charCodeAt(index)
"
`;

exports[`invalid(0): 'string.charCodeAt(index)' > Error 1/1 1`] = `
"
> 1 | string.charCodeAt(index)
    |        ^^^^^^^^^^ Prefer \`String#codePointAt()\` over \`String#charCodeAt()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`String#codePointAt()\`.
  1 | string.codePointAt(index)
"
`;

exports[`invalid(1): '(( (( string )).charCodeAt( ((index))…' > Code 1`] = `
"
  1 | (( (( string )).charCodeAt( ((index)), )))
"
`;

exports[`invalid(1): '(( (( string )).charCodeAt( ((index))…' > Error 1/1 1`] = `
"
> 1 | (( (( string )).charCodeAt( ((index)), )))
    |                 ^^^^^^^^^^ Prefer \`String#codePointAt()\` over \`String#charCodeAt()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`String#codePointAt()\`.
  1 | (( (( string )).codePointAt( ((index)), )))
"
`;

exports[`invalid(2): 'String.fromCharCode( code )' > Code 1`] = `
"
  1 | String.fromCharCode( code )
"
`;

exports[`invalid(2): 'String.fromCharCode( code )' > Error 1/1 1`] = `
"
> 1 | String.fromCharCode( code )
    |        ^^^^^^^^^^^^ Prefer \`String.fromCodePoint()\` over \`String.fromCharCode()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`String.fromCodePoint()\`.
  1 | String.fromCodePoint( code )
"
`;

exports[`invalid(3): '(( (( String )).fromCharCode( ((code)…' > Code 1`] = `
"
  1 | (( (( String )).fromCharCode( ((code)), ) ))
"
`;

exports[`invalid(3): '(( (( String )).fromCharCode( ((code)…' > Error 1/1 1`] = `
"
> 1 | (( (( String )).fromCharCode( ((code)), ) ))
    |                 ^^^^^^^^^^^^ Prefer \`String.fromCodePoint()\` over \`String.fromCharCode()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`String.fromCodePoint()\`.
  1 | (( (( String )).fromCodePoint( ((code)), ) ))
"
`;
