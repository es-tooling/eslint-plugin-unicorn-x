// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '[\\n\\t...(test ? [] : "ab"),\\n\\t...(te…' > Code 1`] = `
"
  1 | [
  2 | 	...(test ? [] : "ab"),
  3 | 	...(test ? "ab" : []),
  4 | ];
"
`;

exports[`invalid(0): '[\\n\\t...(test ? [] : "ab"),\\n\\t...(te…' > Error 1/2 1`] = `
"
  1 | [
> 2 | 	...(test ? [] : "ab"),
    | 	           ^^ Prefer using empty string since the alternate is a string.
  3 | 	...(test ? "ab" : []),
  4 | ];
"
`;

exports[`invalid(0): '[\\n\\t...(test ? [] : "ab"),\\n\\t...(te…' > Error 2/2 1`] = `
"
  1 | [
  2 | 	...(test ? [] : "ab"),
> 3 | 	...(test ? "ab" : []),
    | 	                  ^^ Prefer using empty string since the consequent is a string.
  4 | ];
"
`;

exports[`invalid(0): '[\\n\\t...(test ? [] : "ab"),\\n\\t...(te…' > Output 1`] = `
"
  1 | [
  2 | 	...(test ? '' : "ab"),
  3 | 	...(test ? "ab" : ''),
  4 | ];
"
`;

exports[`invalid(1): 'const STRING = "ab";\\n[\\n\\t...(test ?…' > Code 1`] = `
"
  1 | const STRING = "ab";
  2 | [
  3 | 	...(test ? [] : STRING),
  4 | 	...(test ? STRING : []),
  5 | ];
"
`;

exports[`invalid(1): 'const STRING = "ab";\\n[\\n\\t...(test ?…' > Error 1/2 1`] = `
"
  1 | const STRING = "ab";
  2 | [
> 3 | 	...(test ? [] : STRING),
    | 	           ^^ Prefer using empty string since the alternate is a string.
  4 | 	...(test ? STRING : []),
  5 | ];
"
`;

exports[`invalid(1): 'const STRING = "ab";\\n[\\n\\t...(test ?…' > Error 2/2 1`] = `
"
  1 | const STRING = "ab";
  2 | [
  3 | 	...(test ? [] : STRING),
> 4 | 	...(test ? STRING : []),
    | 	                    ^^ Prefer using empty string since the consequent is a string.
  5 | ];
"
`;

exports[`invalid(1): 'const STRING = "ab";\\n[\\n\\t...(test ?…' > Output 1`] = `
"
  1 | const STRING = "ab";
  2 | [
  3 | 	...(test ? '' : STRING),
  4 | 	...(test ? STRING : ''),
  5 | ];
"
`;

exports[`invalid(2): '[\\n\\t...(test ? "" : [a, b]),\\n\\t...(…' > Code 1`] = `
"
  1 | [
  2 | 	...(test ? "" : [a, b]),
  3 | 	...(test ? [a, b] : ""),
  4 | ];
"
`;

exports[`invalid(2): '[\\n\\t...(test ? "" : [a, b]),\\n\\t...(…' > Error 1/2 1`] = `
"
  1 | [
> 2 | 	...(test ? "" : [a, b]),
    | 	           ^^ Prefer using empty array since the alternate is an array.
  3 | 	...(test ? [a, b] : ""),
  4 | ];
"
`;

exports[`invalid(2): '[\\n\\t...(test ? "" : [a, b]),\\n\\t...(…' > Error 2/2 1`] = `
"
  1 | [
  2 | 	...(test ? "" : [a, b]),
> 3 | 	...(test ? [a, b] : ""),
    | 	                    ^^ Prefer using empty array since the consequent is an array.
  4 | ];
"
`;

exports[`invalid(2): '[\\n\\t...(test ? "" : [a, b]),\\n\\t...(…' > Output 1`] = `
"
  1 | [
  2 | 	...(test ? [] : [a, b]),
  3 | 	...(test ? [a, b] : []),
  4 | ];
"
`;

exports[`invalid(3): 'const ARRAY = ["a", "b"];\\n[\\n\\t/* ho…' > Code 1`] = `
"
  1 | const ARRAY = ["a", "b"];
  2 | [
  3 | 	/* hole */,
  4 | 	...(test ? "" : ARRAY),
  5 | 	/* hole */,
  6 | 	...(test ? ARRAY : ""),
  7 | 	/* hole */,
  8 | ];
"
`;

exports[`invalid(3): 'const ARRAY = ["a", "b"];\\n[\\n\\t/* ho…' > Error 1/2 1`] = `
"
  1 | const ARRAY = ["a", "b"];
  2 | [
  3 | 	/* hole */,
> 4 | 	...(test ? "" : ARRAY),
    | 	           ^^ Prefer using empty array since the alternate is an array.
  5 | 	/* hole */,
  6 | 	...(test ? ARRAY : ""),
  7 | 	/* hole */,
  8 | ];
"
`;

exports[`invalid(3): 'const ARRAY = ["a", "b"];\\n[\\n\\t/* ho…' > Error 2/2 1`] = `
"
  1 | const ARRAY = ["a", "b"];
  2 | [
  3 | 	/* hole */,
  4 | 	...(test ? "" : ARRAY),
  5 | 	/* hole */,
> 6 | 	...(test ? ARRAY : ""),
    | 	                   ^^ Prefer using empty array since the consequent is an array.
  7 | 	/* hole */,
  8 | ];
"
`;

exports[`invalid(3): 'const ARRAY = ["a", "b"];\\n[\\n\\t/* ho…' > Output 1`] = `
"
  1 | const ARRAY = ["a", "b"];
  2 | [
  3 | 	/* hole */,
  4 | 	...(test ? [] : ARRAY),
  5 | 	/* hole */,
  6 | 	...(test ? ARRAY : []),
  7 | 	/* hole */,
  8 | ];
"
`;

exports[`invalid(4): '[...(foo ? "" : [])]' > Code 1`] = `
"
  1 | [...(foo ? "" : [])]
"
`;

exports[`invalid(4): '[...(foo ? "" : [])]' > Error 1/1 1`] = `
"
> 1 | [...(foo ? "" : [])]
    |            ^^ Prefer using empty array since the alternate is an array.
"
`;

exports[`invalid(4): '[...(foo ? "" : [])]' > Output 1`] = `
"
  1 | [...(foo ? [] : [])]
"
`;
