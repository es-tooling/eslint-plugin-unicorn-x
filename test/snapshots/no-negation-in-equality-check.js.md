// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '!foo === bar' > Code 1`] = `
"
  1 | !foo === bar
"
`;

exports[`invalid(0): '!foo === bar' > Error 1/1 1`] = `
"
> 1 | !foo === bar
    | ^ Negated expression is not allowed in equality check.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!==' check.
  1 | foo !== bar
"
`;

exports[`invalid(1): '!foo !== bar' > Code 1`] = `
"
  1 | !foo !== bar
"
`;

exports[`invalid(1): '!foo !== bar' > Error 1/1 1`] = `
"
> 1 | !foo !== bar
    | ^ Negated expression is not allowed in equality check.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '===' check.
  1 | foo === bar
"
`;

exports[`invalid(2): '!foo == bar' > Code 1`] = `
"
  1 | !foo == bar
"
`;

exports[`invalid(2): '!foo == bar' > Error 1/1 1`] = `
"
> 1 | !foo == bar
    | ^ Negated expression is not allowed in equality check.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!=' check.
  1 | foo != bar
"
`;

exports[`invalid(3): '!foo != bar' > Code 1`] = `
"
  1 | !foo != bar
"
`;

exports[`invalid(3): '!foo != bar' > Error 1/1 1`] = `
"
> 1 | !foo != bar
    | ^ Negated expression is not allowed in equality check.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '==' check.
  1 | foo == bar
"
`;

exports[`invalid(4): 'function x() {\\n\\treturn!foo === bar;…' > Code 1`] = `
"
  1 | function x() {
  2 | 	return!foo === bar;
  3 | }
"
`;

exports[`invalid(4): 'function x() {\\n\\treturn!foo === bar;…' > Error 1/1 1`] = `
"
  1 | function x() {
> 2 | 	return!foo === bar;
    | 	      ^ Negated expression is not allowed in equality check.
  3 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!==' check.
  1 | function x() {
  2 | 	return foo !== bar;
  3 | }
"
`;

exports[`invalid(5): 'function x() {\\n\\treturn!\\n\\t\\tfoo ==…' > Code 1`] = `
"
  1 | function x() {
  2 | 	return!
  3 | 		foo === bar;
  4 | 	throw!
  5 | 		foo === bar;
  6 | }
"
`;

exports[`invalid(5): 'function x() {\\n\\treturn!\\n\\t\\tfoo ==…' > Error 1/2 1`] = `
"
  1 | function x() {
> 2 | 	return!
    | 	      ^ Negated expression is not allowed in equality check.
  3 | 		foo === bar;
  4 | 	throw!
  5 | 		foo === bar;
  6 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!==' check.
  1 | function x() {
  2 | 	return  (
  3 | 		foo !== bar);
  4 | 	throw!
  5 | 		foo === bar;
  6 | }
"
`;

exports[`invalid(5): 'function x() {\\n\\treturn!\\n\\t\\tfoo ==…' > Error 2/2 1`] = `
"
  1 | function x() {
  2 | 	return!
  3 | 		foo === bar;
> 4 | 	throw!
    | 	     ^ Negated expression is not allowed in equality check.
  5 | 		foo === bar;
  6 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!==' check.
  1 | function x() {
  2 | 	return!
  3 | 		foo === bar;
  4 | 	throw  (
  5 | 		foo !== bar);
  6 | }
"
`;

exports[`invalid(6): 'foo\\n!(a) === b' > Code 1`] = `
"
  1 | foo
  2 | !(a) === b
"
`;

exports[`invalid(6): 'foo\\n!(a) === b' > Error 1/1 1`] = `
"
  1 | foo
> 2 | !(a) === b
    | ^ Negated expression is not allowed in equality check.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!==' check.
  1 | foo
  2 | ;(a) !== b
"
`;

exports[`invalid(7): 'foo\\n![a, b].join(\\'\\') === c' > Code 1`] = `
"
  1 | foo
  2 | ![a, b].join('') === c
"
`;

exports[`invalid(7): 'foo\\n![a, b].join(\\'\\') === c' > Error 1/1 1`] = `
"
  1 | foo
> 2 | ![a, b].join('') === c
    | ^ Negated expression is not allowed in equality check.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!==' check.
  1 | foo
  2 | ;[a, b].join('') !== c
"
`;

exports[`invalid(8): 'foo\\n! [a, b].join(\\'\\') === c' > Code 1`] = `
"
  1 | foo
  2 | ! [a, b].join('') === c
"
`;

exports[`invalid(8): 'foo\\n! [a, b].join(\\'\\') === c' > Error 1/1 1`] = `
"
  1 | foo
> 2 | ! [a, b].join('') === c
    | ^ Negated expression is not allowed in equality check.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!==' check.
  1 | foo
  2 | ; [a, b].join('') !== c
"
`;

exports[`invalid(9): 'foo\\n!/* comment */[a, b].join(\\'\\') …' > Code 1`] = `
"
  1 | foo
  2 | !/* comment */[a, b].join('') === c
"
`;

exports[`invalid(9): 'foo\\n!/* comment */[a, b].join(\\'\\') …' > Error 1/1 1`] = `
"
  1 | foo
> 2 | !/* comment */[a, b].join('') === c
    | ^ Negated expression is not allowed in equality check.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to '!==' check.
  1 | foo
  2 | ;/* comment */[a, b].join('') !== c
"
`;
