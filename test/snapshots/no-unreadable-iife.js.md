// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = (() => (a ? b : c))();' > Code 1`] = `
"
  1 | const foo = (() => (a ? b : c))();
"
`;

exports[`invalid(0): 'const foo = (() => (a ? b : c))();' > Error 1/1 1`] = `
"
> 1 | const foo = (() => (a ? b : c))();
    |                    ^^^^^^^^^^^ IIFE with parenthesized arrow function body is considered unreadable.
"
`;

exports[`invalid(1): 'const foo = (() => (\\n\\ta ? b : c\\n))…' > Code 1`] = `
"
  1 | const foo = (() => (
  2 | 	a ? b : c
  3 | ))();
"
`;

exports[`invalid(1): 'const foo = (() => (\\n\\ta ? b : c\\n))…' > Error 1/1 1`] = `
"
> 1 | const foo = (() => (
    |                    ^
> 2 | 	a ? b : c
    | ^^^^^^^^^^
> 3 | ))();
    | ^^ IIFE with parenthesized arrow function body is considered unreadable.
"
`;

exports[`invalid(2): 'const foo = (\\n\\t() => (\\n\\t\\ta ? b :…' > Code 1`] = `
"
  1 | const foo = (
  2 | 	() => (
  3 | 		a ? b : c
  4 | 	)
  5 | )();
"
`;

exports[`invalid(2): 'const foo = (\\n\\t() => (\\n\\t\\ta ? b :…' > Error 1/1 1`] = `
"
  1 | const foo = (
> 2 | 	() => (
    | 	      ^
> 3 | 		a ? b : c
    | ^^^^^^^^^^^
> 4 | 	)
    | ^^^ IIFE with parenthesized arrow function body is considered unreadable.
  5 | )();
"
`;

exports[`invalid(3): 'const foo = (() => (\\n\\ta, b\\n))();' > Code 1`] = `
"
  1 | const foo = (() => (
  2 | 	a, b
  3 | ))();
"
`;

exports[`invalid(3): 'const foo = (() => (\\n\\ta, b\\n))();' > Error 1/1 1`] = `
"
> 1 | const foo = (() => (
    |                    ^
> 2 | 	a, b
    | ^^^^^
> 3 | ))();
    | ^^ IIFE with parenthesized arrow function body is considered unreadable.
"
`;

exports[`invalid(4): 'const foo = (() => ({\\n\\ta: b,\\n}))();' > Code 1`] = `
"
  1 | const foo = (() => ({
  2 | 	a: b,
  3 | }))();
"
`;

exports[`invalid(4): 'const foo = (() => ({\\n\\ta: b,\\n}))();' > Error 1/1 1`] = `
"
> 1 | const foo = (() => ({
    |                    ^^
> 2 | 	a: b,
    | ^^^^^^
> 3 | }))();
    | ^^^ IIFE with parenthesized arrow function body is considered unreadable.
"
`;

exports[`invalid(5): 'const foo = (bar => (bar))();' > Code 1`] = `
"
  1 | const foo = (bar => (bar))();
"
`;

exports[`invalid(5): 'const foo = (bar => (bar))();' > Error 1/1 1`] = `
"
> 1 | const foo = (bar => (bar))();
    |                     ^^^^^ IIFE with parenthesized arrow function body is considered unreadable.
"
`;

exports[`invalid(6): '(async () => ({\\n\\tbar,\\n}))();' > Code 1`] = `
"
  1 | (async () => ({
  2 | 	bar,
  3 | }))();
"
`;

exports[`invalid(6): '(async () => ({\\n\\tbar,\\n}))();' > Error 1/1 1`] = `
"
> 1 | (async () => ({
    |              ^^
> 2 | 	bar,
    | ^^^^^
> 3 | }))();
    | ^^^ IIFE with parenthesized arrow function body is considered unreadable.
"
`;

exports[`invalid(7): 'const foo = (async (bar) => ({\\n\\tbar…' > Code 1`] = `
"
  1 | const foo = (async (bar) => ({
  2 | 	bar: await baz(),
  3 | }))();
"
`;

exports[`invalid(7): 'const foo = (async (bar) => ({\\n\\tbar…' > Error 1/1 1`] = `
"
> 1 | const foo = (async (bar) => ({
    |                             ^^
> 2 | 	bar: await baz(),
    | ^^^^^^^^^^^^^^^^^^
> 3 | }))();
    | ^^^ IIFE with parenthesized arrow function body is considered unreadable.
"
`;

exports[`invalid(8): '(async () => (( {bar} )))();' > Code 1`] = `
"
  1 | (async () => (( {bar} )))();
"
`;

exports[`invalid(8): '(async () => (( {bar} )))();' > Error 1/1 1`] = `
"
> 1 | (async () => (( {bar} )))();
    |              ^^^^^^^^^^^ IIFE with parenthesized arrow function body is considered unreadable.
"
`;
