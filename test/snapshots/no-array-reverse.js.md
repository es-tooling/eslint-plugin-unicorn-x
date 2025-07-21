// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'reversed = [...array].reverse()' > Code 1`] = `
"
  1 | reversed = [...array].reverse()
"
`;

exports[`invalid(0): 'reversed = [...array].reverse()' > Error 1/1 1`] = `
"
> 1 | reversed = [...array].reverse()
    |                       ^^^^^^^ Use \`Array#toReversed()\` instead of \`Array#reverse()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array
  1 | reversed = array.toReversed()

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array
  1 | reversed = [...array].toReversed()
"
`;

exports[`invalid(1): 'reversed = [...array]?.reverse()' > Code 1`] = `
"
  1 | reversed = [...array]?.reverse()
"
`;

exports[`invalid(1): 'reversed = [...array]?.reverse()' > Error 1/1 1`] = `
"
> 1 | reversed = [...array]?.reverse()
    |                        ^^^^^^^ Use \`Array#toReversed()\` instead of \`Array#reverse()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array
  1 | reversed = array?.toReversed()

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array
  1 | reversed = [...array]?.toReversed()
"
`;

exports[`invalid(2): 'reversed = array.reverse()' > Code 1`] = `
"
  1 | reversed = array.reverse()
"
`;

exports[`invalid(2): 'reversed = array.reverse()' > Error 1/1 1`] = `
"
> 1 | reversed = array.reverse()
    |                  ^^^^^^^ Use \`Array#toReversed()\` instead of \`Array#reverse()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toReversed()\`.
  1 | reversed = array.toReversed()
"
`;

exports[`invalid(3): 'reversed = array?.reverse()' > Code 1`] = `
"
  1 | reversed = array?.reverse()
"
`;

exports[`invalid(3): 'reversed = array?.reverse()' > Error 1/1 1`] = `
"
> 1 | reversed = array?.reverse()
    |                   ^^^^^^^ Use \`Array#toReversed()\` instead of \`Array#reverse()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toReversed()\`.
  1 | reversed = array?.toReversed()
"
`;

exports[`invalid(4): 'array.reverse()' > Code 1`] = `
"
  1 | array.reverse()
"
`;

exports[`invalid(4): 'array.reverse()' > Error 1/1 1`] = `
"
> 1 | array.reverse()
    |       ^^^^^^^ Use \`Array#toReversed()\` instead of \`Array#reverse()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toReversed()\`.
  1 | array.toReversed()
"
`;

exports[`invalid(4): 'array.reverse()' > Options 1`] = `
"
[
  {
    "allowExpressionStatement": false
  }
]
"
`;

exports[`invalid(5): 'array?.reverse()' > Code 1`] = `
"
  1 | array?.reverse()
"
`;

exports[`invalid(5): 'array?.reverse()' > Error 1/1 1`] = `
"
> 1 | array?.reverse()
    |        ^^^^^^^ Use \`Array#toReversed()\` instead of \`Array#reverse()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toReversed()\`.
  1 | array?.toReversed()
"
`;

exports[`invalid(5): 'array?.reverse()' > Options 1`] = `
"
[
  {
    "allowExpressionStatement": false
  }
]
"
`;

exports[`invalid(6): '[...array].reverse()' > Code 1`] = `
"
  1 | [...array].reverse()
"
`;

exports[`invalid(6): '[...array].reverse()' > Error 1/1 1`] = `
"
> 1 | [...array].reverse()
    |            ^^^^^^^ Use \`Array#toReversed()\` instead of \`Array#reverse()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array
  1 | array.toReversed()

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array
  1 | [...array].toReversed()
"
`;

exports[`invalid(6): '[...array].reverse()' > Options 1`] = `
"
[
  {
    "allowExpressionStatement": false
  }
]
"
`;

exports[`invalid(7): 'reversed = [...(0, array)].reverse()' > Code 1`] = `
"
  1 | reversed = [...(0, array)].reverse()
"
`;

exports[`invalid(7): 'reversed = [...(0, array)].reverse()' > Error 1/1 1`] = `
"
> 1 | reversed = [...(0, array)].reverse()
    |                            ^^^^^^^ Use \`Array#toReversed()\` instead of \`Array#reverse()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array
  1 | reversed = (0, array).toReversed()

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array
  1 | reversed = [...(0, array)].toReversed()
"
`;
