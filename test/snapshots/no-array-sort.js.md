// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'sorted = [...array].sort()' > Code 1`] = `
"
  1 | sorted = [...array].sort()
"
`;

exports[`invalid(0): 'sorted = [...array].sort()' > Error 1/1 1`] = `
"
> 1 | sorted = [...array].sort()
    |                     ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array.
  1 | sorted = array.toSorted()

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array.
  1 | sorted = [...array].toSorted()
"
`;

exports[`invalid(1): 'sorted = [...array]?.sort()' > Code 1`] = `
"
  1 | sorted = [...array]?.sort()
"
`;

exports[`invalid(1): 'sorted = [...array]?.sort()' > Error 1/1 1`] = `
"
> 1 | sorted = [...array]?.sort()
    |                      ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array.
  1 | sorted = array?.toSorted()

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array.
  1 | sorted = [...array]?.toSorted()
"
`;

exports[`invalid(2): 'sorted = array.sort()' > Code 1`] = `
"
  1 | sorted = array.sort()
"
`;

exports[`invalid(2): 'sorted = array.sort()' > Error 1/1 1`] = `
"
> 1 | sorted = array.sort()
    |                ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toSorted()\`.
  1 | sorted = array.toSorted()
"
`;

exports[`invalid(3): 'sorted = array?.sort()' > Code 1`] = `
"
  1 | sorted = array?.sort()
"
`;

exports[`invalid(3): 'sorted = array?.sort()' > Error 1/1 1`] = `
"
> 1 | sorted = array?.sort()
    |                 ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toSorted()\`.
  1 | sorted = array?.toSorted()
"
`;

exports[`invalid(4): 'sorted = [...array].sort(compareFn)' > Code 1`] = `
"
  1 | sorted = [...array].sort(compareFn)
"
`;

exports[`invalid(4): 'sorted = [...array].sort(compareFn)' > Error 1/1 1`] = `
"
> 1 | sorted = [...array].sort(compareFn)
    |                     ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array.
  1 | sorted = array.toSorted(compareFn)

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array.
  1 | sorted = [...array].toSorted(compareFn)
"
`;

exports[`invalid(5): 'sorted = [...array]?.sort(compareFn)' > Code 1`] = `
"
  1 | sorted = [...array]?.sort(compareFn)
"
`;

exports[`invalid(5): 'sorted = [...array]?.sort(compareFn)' > Error 1/1 1`] = `
"
> 1 | sorted = [...array]?.sort(compareFn)
    |                      ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array.
  1 | sorted = array?.toSorted(compareFn)

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array.
  1 | sorted = [...array]?.toSorted(compareFn)
"
`;

exports[`invalid(6): 'sorted = array.sort(compareFn)' > Code 1`] = `
"
  1 | sorted = array.sort(compareFn)
"
`;

exports[`invalid(6): 'sorted = array.sort(compareFn)' > Error 1/1 1`] = `
"
> 1 | sorted = array.sort(compareFn)
    |                ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toSorted()\`.
  1 | sorted = array.toSorted(compareFn)
"
`;

exports[`invalid(7): 'sorted = array?.sort(compareFn)' > Code 1`] = `
"
  1 | sorted = array?.sort(compareFn)
"
`;

exports[`invalid(7): 'sorted = array?.sort(compareFn)' > Error 1/1 1`] = `
"
> 1 | sorted = array?.sort(compareFn)
    |                 ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toSorted()\`.
  1 | sorted = array?.toSorted(compareFn)
"
`;

exports[`invalid(8): 'array.sort()' > Code 1`] = `
"
  1 | array.sort()
"
`;

exports[`invalid(8): 'array.sort()' > Error 1/1 1`] = `
"
> 1 | array.sort()
    |       ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toSorted()\`.
  1 | array.toSorted()
"
`;

exports[`invalid(8): 'array.sort()' > Options 1`] = `
"
[
  {
    "allowExpressionStatement": false
  }
]
"
`;

exports[`invalid(9): 'array?.sort()' > Code 1`] = `
"
  1 | array?.sort()
"
`;

exports[`invalid(9): 'array?.sort()' > Error 1/1 1`] = `
"
> 1 | array?.sort()
    |        ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.toSorted()\`.
  1 | array?.toSorted()
"
`;

exports[`invalid(9): 'array?.sort()' > Options 1`] = `
"
[
  {
    "allowExpressionStatement": false
  }
]
"
`;

exports[`invalid(10): '[...array].sort()' > Code 1`] = `
"
  1 | [...array].sort()
"
`;

exports[`invalid(10): '[...array].sort()' > Error 1/1 1`] = `
"
> 1 | [...array].sort()
    |            ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array.
  1 | array.toSorted()

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array.
  1 | [...array].toSorted()
"
`;

exports[`invalid(10): '[...array].sort()' > Options 1`] = `
"
[
  {
    "allowExpressionStatement": false
  }
]
"
`;

exports[`invalid(11): 'sorted = [...(0, array)].sort()' > Code 1`] = `
"
  1 | sorted = [...(0, array)].sort()
"
`;

exports[`invalid(11): 'sorted = [...(0, array)].sort()' > Error 1/1 1`] = `
"
> 1 | sorted = [...(0, array)].sort()
    |                          ^^^^ Use \`Array#toSorted()\` instead of \`Array#sort()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: The spreading object is an array.
  1 | sorted = (0, array).toSorted()

--------------------------------------------------------------------------------
Suggestion 2/2: The spreading object is NOT an array.
  1 | sorted = [...(0, array)].toSorted()
"
`;
