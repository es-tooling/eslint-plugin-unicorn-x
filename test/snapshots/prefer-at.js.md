// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '_.last(array)' > Code 1`] = `
"
  1 | _.last(array)
"
`;

exports[`invalid(0): '_.last(array)' > Error 1/1 1`] = `
"
> 1 | _.last(array)
    | ^^^^^^ Prefer \`.at(-1)\` over \`_.last(…)\` to get the last element.
"
`;

exports[`invalid(0): '_.last(array)' > Output 1`] = `
"
  1 | array.at(-1)
"
`;

exports[`invalid(0): 'array.slice(-1)[0]' > Code 1`] = `
"
  1 | array.slice(-1)[0]
"
`;

exports[`invalid(0): 'array.slice(-1)[0]' > Error 1/1 1`] = `
"
> 1 | array.slice(-1)[0]
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(0): 'array.slice(-1)[0]' > Output 1`] = `
"
  1 | array.at(-1)
"
`;

exports[`invalid(0): 'array.slice(-9, -8)[0]' > Code 1`] = `
"
  1 | array.slice(-9, -8)[0]
"
`;

exports[`invalid(0): 'array.slice(-9, -8)[0]' > Error 1/1 1`] = `
"
> 1 | array.slice(-9, -8)[0]
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(0): 'array.slice(-9, -8)[0]' > Output 1`] = `
"
  1 | array.at(-9)
"
`;

exports[`invalid(0): 'array.slice(-9, unknown)[0]' > Code 1`] = `
"
  1 | array.slice(-9, unknown)[0]
"
`;

exports[`invalid(0): 'array.slice(-9, unknown)[0]' > Error 1/1 1`] = `
"
> 1 | array.slice(-9, unknown)[0]
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | array.at(-9)
"
`;

exports[`invalid(0): 'array[0]' > Code 1`] = `
"
  1 | array[0]
"
`;

exports[`invalid(0): 'array[0]' > Error 1/1 1`] = `
"
> 1 | array[0]
    |       ^ Prefer \`.at(…)\` over index access.
"
`;

exports[`invalid(0): 'array[0]' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(0): 'array[0]' > Output 1`] = `
"
  1 | array.at(0)
"
`;

exports[`invalid(0): 'array[array.length - 1];' > Code 1`] = `
"
  1 | array[array.length - 1];
"
`;

exports[`invalid(0): 'array[array.length - 1];' > Error 1/1 1`] = `
"
> 1 | array[array.length - 1];
    |       ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(0): 'array[array.length - 1];' > Output 1`] = `
"
  1 | array.at(-1);
"
`;

exports[`invalid(0): 'string.charAt(string.length - 1);' > Code 1`] = `
"
  1 | string.charAt(string.length - 1);
"
`;

exports[`invalid(0): 'string.charAt(string.length - 1);' > Error 1/1 1`] = `
"
> 1 | string.charAt(string.length - 1);
    |               ^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(- 1);
"
`;

exports[`invalid(1): 'array.slice(-0o11, -7)[0]' > Code 1`] = `
"
  1 | array.slice(-0o11, -7)[0]
"
`;

exports[`invalid(1): 'array.slice(-0o11, -7)[0]' > Error 1/1 1`] = `
"
> 1 | array.slice(-0o11, -7)[0]
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | array.at(-0o11)
"
`;

exports[`invalid(1): 'array.slice(-1).pop()' > Code 1`] = `
"
  1 | array.slice(-1).pop()
"
`;

exports[`invalid(1): 'array.slice(-1).pop()' > Error 1/1 1`] = `
"
> 1 | array.slice(-1).pop()
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(1): 'array.slice(-1).pop()' > Output 1`] = `
"
  1 | array.at(-1)
"
`;

exports[`invalid(1): 'array.slice(-9, -0o10)[0]' > Code 1`] = `
"
  1 | array.slice(-9, -0o10)[0]
"
`;

exports[`invalid(1): 'array.slice(-9, -0o10)[0]' > Error 1/1 1`] = `
"
> 1 | array.slice(-9, -0o10)[0]
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(1): 'array.slice(-9, -0o10)[0]' > Output 1`] = `
"
  1 | array.at(-9)
"
`;

exports[`invalid(1): 'array[1]' > Code 1`] = `
"
  1 | array[1]
"
`;

exports[`invalid(1): 'array[1]' > Error 1/1 1`] = `
"
> 1 | array[1]
    |       ^ Prefer \`.at(…)\` over index access.
"
`;

exports[`invalid(1): 'array[1]' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(1): 'array[1]' > Output 1`] = `
"
  1 | array.at(1)
"
`;

exports[`invalid(1): 'array[array.length -1];' > Code 1`] = `
"
  1 | array[array.length -1];
"
`;

exports[`invalid(1): 'array[array.length -1];' > Error 1/1 1`] = `
"
> 1 | array[array.length -1];
    |       ^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(1): 'array[array.length -1];' > Output 1`] = `
"
  1 | array.at(-1);
"
`;

exports[`invalid(1): 'lodash.last(array)' > Code 1`] = `
"
  1 | lodash.last(array)
"
`;

exports[`invalid(1): 'lodash.last(array)' > Error 1/1 1`] = `
"
> 1 | lodash.last(array)
    | ^^^^^^^^^^^ Prefer \`.at(-1)\` over \`lodash.last(…)\` to get the last element.
"
`;

exports[`invalid(1): 'lodash.last(array)' > Output 1`] = `
"
  1 | array.at(-1)
"
`;

exports[`invalid(1): 'string.charAt(string.length - 0o11);' > Code 1`] = `
"
  1 | string.charAt(string.length - 0o11);
"
`;

exports[`invalid(1): 'string.charAt(string.length - 0o11);' > Error 1/1 1`] = `
"
> 1 | string.charAt(string.length - 0o11);
    |               ^^^^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(- 0o11);
"
`;

exports[`invalid(2): 'array.slice(-1.0).shift()' > Code 1`] = `
"
  1 | array.slice(-1.0).shift()
"
`;

exports[`invalid(2): 'array.slice(-1.0).shift()' > Error 1/1 1`] = `
"
> 1 | array.slice(-1.0).shift()
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(2): 'array.slice(-1.0).shift()' > Output 1`] = `
"
  1 | array.at(-1.0)
"
`;

exports[`invalid(2): 'array.slice(-9, -8).pop()' > Code 1`] = `
"
  1 | array.slice(-9, -8).pop()
"
`;

exports[`invalid(2): 'array.slice(-9, -8).pop()' > Error 1/1 1`] = `
"
> 1 | array.slice(-9, -8).pop()
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(2): 'array.slice(-9, -8).pop()' > Output 1`] = `
"
  1 | array.at(-9)
"
`;

exports[`invalid(2): 'array.slice(-9, unknown).shift()' > Code 1`] = `
"
  1 | array.slice(-9, unknown).shift()
"
`;

exports[`invalid(2): 'array.slice(-9, unknown).shift()' > Error 1/1 1`] = `
"
> 1 | array.slice(-9, unknown).shift()
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | array.at(-9)
"
`;

exports[`invalid(2): 'array[5 + 9]' > Code 1`] = `
"
  1 | array[5 + 9]
"
`;

exports[`invalid(2): 'array[5 + 9]' > Error 1/1 1`] = `
"
> 1 | array[5 + 9]
    |       ^^^^^ Prefer \`.at(…)\` over index access.
"
`;

exports[`invalid(2): 'array[5 + 9]' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(2): 'array[5 + 9]' > Output 1`] = `
"
  1 | array.at(5 + 9)
"
`;

exports[`invalid(2): 'array[array.length - /* comment */ 1];' > Code 1`] = `
"
  1 | array[array.length - /* comment */ 1];
"
`;

exports[`invalid(2): 'array[array.length - /* comment */ 1];' > Error 1/1 1`] = `
"
> 1 | array[array.length - /* comment */ 1];
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(2): 'array[array.length - /* comment */ 1];' > Output 1`] = `
"
  1 | array.at(- /* comment */ 1);
"
`;

exports[`invalid(2): 'some.string.charAt(some.string.length…' > Code 1`] = `
"
  1 | some.string.charAt(some.string.length - 1);
"
`;

exports[`invalid(2): 'some.string.charAt(some.string.length…' > Error 1/1 1`] = `
"
> 1 | some.string.charAt(some.string.length - 1);
    |                    ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | some.string.at(- 1);
"
`;

exports[`invalid(2): 'underscore.last(array)' > Code 1`] = `
"
  1 | underscore.last(array)
"
`;

exports[`invalid(2): 'underscore.last(array)' > Error 1/1 1`] = `
"
> 1 | underscore.last(array)
    | ^^^^^^^^^^^^^^^ Prefer \`.at(-1)\` over \`underscore.last(…)\` to get the last element.
"
`;

exports[`invalid(2): 'underscore.last(array)' > Output 1`] = `
"
  1 | array.at(-1)
"
`;

exports[`invalid(3): '_.last(new Array)' > Code 1`] = `
"
  1 | _.last(new Array)
"
`;

exports[`invalid(3): '_.last(new Array)' > Error 1/1 1`] = `
"
> 1 | _.last(new Array)
    | ^^^^^^ Prefer \`.at(-1)\` over \`_.last(…)\` to get the last element.
"
`;

exports[`invalid(3): '_.last(new Array)' > Output 1`] = `
"
  1 | (new Array).at(-1)
"
`;

exports[`invalid(3): 'array.slice(-1)[(( 0 ))];' > Code 1`] = `
"
  1 | array.slice(-1)[(( 0 ))];
"
`;

exports[`invalid(3): 'array.slice(-1)[(( 0 ))];' > Error 1/1 1`] = `
"
> 1 | array.slice(-1)[(( 0 ))];
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(3): 'array.slice(-1)[(( 0 ))];' > Output 1`] = `
"
  1 | array.at(-1);
"
`;

exports[`invalid(3): 'array.slice(-9, -8).shift()' > Code 1`] = `
"
  1 | array.slice(-9, -8).shift()
"
`;

exports[`invalid(3): 'array.slice(-9, -8).shift()' > Error 1/1 1`] = `
"
> 1 | array.slice(-9, -8).shift()
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(3): 'array.slice(-9, -8).shift()' > Output 1`] = `
"
  1 | array.at(-9)
"
`;

exports[`invalid(3): 'array[array.length - 1.];' > Code 1`] = `
"
  1 | array[array.length - 1.];
"
`;

exports[`invalid(3): 'array[array.length - 1.];' > Error 1/1 1`] = `
"
> 1 | array[array.length - 1.];
    |       ^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(3): 'array[array.length - 1.];' > Output 1`] = `
"
  1 | array.at(- 1.);
"
`;

exports[`invalid(3): 'const KNOWN = -8; array.slice(-9, KNO…' > Code 1`] = `
"
  1 | const KNOWN = -8; array.slice(-9, KNOWN).shift()
"
`;

exports[`invalid(3): 'const KNOWN = -8; array.slice(-9, KNO…' > Error 1/1 1`] = `
"
> 1 | const KNOWN = -8; array.slice(-9, KNOWN).shift()
    |                         ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | const KNOWN = -8; array.at(-9)
"
`;

exports[`invalid(3): 'const offset = 5;array[offset + 9]' > Code 1`] = `
"
  1 | const offset = 5;array[offset + 9]
"
`;

exports[`invalid(3): 'const offset = 5;array[offset + 9]' > Error 1/1 1`] = `
"
> 1 | const offset = 5;array[offset + 9]
    |                        ^^^^^^^^^^ Prefer \`.at(…)\` over index access.
"
`;

exports[`invalid(3): 'const offset = 5;array[offset + 9]' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(3): 'const offset = 5;array[offset + 9]' > Output 1`] = `
"
  1 | const offset = 5;array.at(offset + 9)
"
`;

exports[`invalid(3): 'string.charAt((( string.length )) - 0…' > Code 1`] = `
"
  1 | string.charAt((( string.length )) - 0xFF);
"
`;

exports[`invalid(3): 'string.charAt((( string.length )) - 0…' > Error 1/1 1`] = `
"
> 1 | string.charAt((( string.length )) - 0xFF);
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(- 0xFF);
"
`;

exports[`invalid(4): 'array.slice((( -9 )), (( -8 )), ).shi…' > Code 1`] = `
"
  1 | array.slice((( -9 )), (( -8 )), ).shift()
"
`;

exports[`invalid(4): 'array.slice((( -9 )), (( -8 )), ).shi…' > Error 1/1 1`] = `
"
> 1 | array.slice((( -9 )), (( -8 )), ).shift()
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(4): 'array.slice((( -9 )), (( -8 )), ).shi…' > Output 1`] = `
"
  1 | array.at((( -9 )))
"
`;

exports[`invalid(4): 'array.slice(-(( 1 )))[0];' > Code 1`] = `
"
  1 | array.slice(-(( 1 )))[0];
"
`;

exports[`invalid(4): 'array.slice(-(( 1 )))[0];' > Error 1/1 1`] = `
"
> 1 | array.slice(-(( 1 )))[0];
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(4): 'array.slice(-(( 1 )))[0];' > Output 1`] = `
"
  1 | array.at(-(( 1 )));
"
`;

exports[`invalid(4): 'array.slice(-9, 0)[0]' > Code 1`] = `
"
  1 | array.slice(-9, 0)[0]
"
`;

exports[`invalid(4): 'array.slice(-9, 0)[0]' > Error 1/1 1`] = `
"
> 1 | array.slice(-9, 0)[0]
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | array.at(-9)
"
`;

exports[`invalid(4): 'array[array.length - 0b1];' > Code 1`] = `
"
  1 | array[array.length - 0b1];
"
`;

exports[`invalid(4): 'array[array.length - 0b1];' > Error 1/1 1`] = `
"
> 1 | array[array.length - 0b1];
    |       ^^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(4): 'array[array.length - 0b1];' > Output 1`] = `
"
  1 | array.at(- 0b1);
"
`;

exports[`invalid(4): 'array[array.length - 1]' > Code 1`] = `
"
  1 | array[array.length - 1]
"
`;

exports[`invalid(4): 'array[array.length - 1]' > Error 1/1 1`] = `
"
> 1 | array[array.length - 1]
    |       ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(4): 'array[array.length - 1]' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(4): 'array[array.length - 1]' > Output 1`] = `
"
  1 | array.at(-1)
"
`;

exports[`invalid(4): 'const foo = []\\n_.last([bar])' > Code 1`] = `
"
  1 | const foo = []
  2 | _.last([bar])
"
`;

exports[`invalid(4): 'const foo = []\\n_.last([bar])' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | _.last([bar])
    | ^^^^^^ Prefer \`.at(-1)\` over \`_.last(…)\` to get the last element.
"
`;

exports[`invalid(4): 'const foo = []\\n_.last([bar])' > Output 1`] = `
"
  1 | const foo = []
  2 | ;[bar].at(-1)
"
`;

exports[`invalid(4): 'string.charAt(string.length - (( 1 ))…' > Code 1`] = `
"
  1 | string.charAt(string.length - (( 1 )));
"
`;

exports[`invalid(4): 'string.charAt(string.length - (( 1 ))…' > Error 1/1 1`] = `
"
> 1 | string.charAt(string.length - (( 1 )));
    |               ^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(- (( 1 )));
"
`;

exports[`invalid(5): '(( (( array.slice( ((-9)), ((unknown)…' > Code 1`] = `
"
  1 | (( (( array.slice( ((-9)), ((unknown)), ).shift ))() ));
"
`;

exports[`invalid(5): '(( (( array.slice( ((-9)), ((unknown)…' > Error 1/1 1`] = `
"
> 1 | (( (( array.slice( ((-9)), ((unknown)), ).shift ))() ));
    |             ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | (( (( array.at( ((-9))) )) ));
"
`;

exports[`invalid(5): '(( array.slice(-9, -8).shift ))()' > Code 1`] = `
"
  1 | (( array.slice(-9, -8).shift ))()
"
`;

exports[`invalid(5): '(( array.slice(-9, -8).shift ))()' > Error 1/1 1`] = `
"
> 1 | (( array.slice(-9, -8).shift ))()
    |          ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(5): '(( array.slice(-9, -8).shift ))()' > Output 1`] = `
"
  1 | (( array.at(-9) ))
"
`;

exports[`invalid(5): 'array.slice((( -1 )))[0];' > Code 1`] = `
"
  1 | array.slice((( -1 )))[0];
"
`;

exports[`invalid(5): 'array.slice((( -1 )))[0];' > Error 1/1 1`] = `
"
> 1 | array.slice((( -1 )))[0];
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(5): 'array.slice((( -1 )))[0];' > Output 1`] = `
"
  1 | array.at((( -1 )));
"
`;

exports[`invalid(5): 'array[array.length - 9];' > Code 1`] = `
"
  1 | array[array.length - 9];
"
`;

exports[`invalid(5): 'array[array.length - 9];' > Error 1/1 1`] = `
"
> 1 | array[array.length - 9];
    |       ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(5): 'array[array.length - 9];' > Output 1`] = `
"
  1 | array.at(-9);
"
`;

exports[`invalid(5): 'const foo = []\\n_.last( new Array )' > Code 1`] = `
"
  1 | const foo = []
  2 | _.last( new Array )
"
`;

exports[`invalid(5): 'const foo = []\\n_.last( new Array )' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | _.last( new Array )
    | ^^^^^^ Prefer \`.at(-1)\` over \`_.last(…)\` to get the last element.
"
`;

exports[`invalid(5): 'const foo = []\\n_.last( new Array )' > Output 1`] = `
"
  1 | const foo = []
  2 | ;(new Array).at(-1)
"
`;

exports[`invalid(5): 'string.charAt((( string.length - 1 ))…' > Code 1`] = `
"
  1 | string.charAt((( string.length - 1 )));
"
`;

exports[`invalid(5): 'string.charAt((( string.length - 1 ))…' > Error 1/1 1`] = `
"
> 1 | string.charAt((( string.length - 1 )));
    |                  ^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at((( - 1 )));
"
`;

exports[`invalid(5): 'string.charAt(9)' > Code 1`] = `
"
  1 | string.charAt(9)
"
`;

exports[`invalid(5): 'string.charAt(9)' > Error 1/1 1`] = `
"
> 1 | string.charAt(9)
    |               ^ Prefer \`String#at(…)\` over \`String#charAt(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(9)
"
`;

exports[`invalid(5): 'string.charAt(9)' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(6): '(( array.slice(-1) ))[0];' > Code 1`] = `
"
  1 | (( array.slice(-1) ))[0];
"
`;

exports[`invalid(6): '(( array.slice(-1) ))[0];' > Error 1/1 1`] = `
"
> 1 | (( array.slice(-1) ))[0];
    |          ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(6): '(( array.slice(-1) ))[0];' > Output 1`] = `
"
  1 | (( array.at(-1) ));
"
`;

exports[`invalid(6): '(( string )).charAt(string.length - 1…' > Code 1`] = `
"
  1 | (( string )).charAt(string.length - 1);
"
`;

exports[`invalid(6): '(( string )).charAt(string.length - 1…' > Error 1/1 1`] = `
"
> 1 | (( string )).charAt(string.length - 1);
    |                     ^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | (( string )).at(- 1);
"
`;

exports[`invalid(6): 'array.slice(-9, (a, really, _really, …' > Code 1`] = `
"
  1 | array.slice(-9, (a, really, _really, complicated, second) => argument)[0]
"
`;

exports[`invalid(6): 'array.slice(-9, (a, really, _really, …' > Error 1/1 1`] = `
"
> 1 | array.slice(-9, (a, really, _really, complicated, second) => argument)[0]
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | array.at(-9)
"
`;

exports[`invalid(6): 'array[0][array[0].length - 1];' > Code 1`] = `
"
  1 | array[0][array[0].length - 1];
"
`;

exports[`invalid(6): 'array[0][array[0].length - 1];' > Error 1/1 1`] = `
"
> 1 | array[0][array[0].length - 1];
    |          ^^^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(6): 'array[0][array[0].length - 1];' > Output 1`] = `
"
  1 | array[0].at(-1);
"
`;

exports[`invalid(6): 'const foo = []\\n_.last( (( new Array …' > Code 1`] = `
"
  1 | const foo = []
  2 | _.last( (( new Array )) )
"
`;

exports[`invalid(6): 'const foo = []\\n_.last( (( new Array …' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | _.last( (( new Array )) )
    | ^^^^^^ Prefer \`.at(-1)\` over \`_.last(…)\` to get the last element.
"
`;

exports[`invalid(6): 'const foo = []\\n_.last( (( new Array …' > Output 1`] = `
"
  1 | const foo = []
  2 | ;(( new Array )).at(-1)
"
`;

exports[`invalid(6): 'string.charAt(5 + 9)' > Code 1`] = `
"
  1 | string.charAt(5 + 9)
"
`;

exports[`invalid(6): 'string.charAt(5 + 9)' > Error 1/1 1`] = `
"
> 1 | string.charAt(5 + 9)
    |               ^^^^^ Prefer \`String#at(…)\` over \`String#charAt(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(5 + 9)
"
`;

exports[`invalid(6): 'string.charAt(5 + 9)' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(7): '(( array )).slice(-1)[0];' > Code 1`] = `
"
  1 | (( array )).slice(-1)[0];
"
`;

exports[`invalid(7): '(( array )).slice(-1)[0];' > Error 1/1 1`] = `
"
> 1 | (( array )).slice(-1)[0];
    |             ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(7): '(( array )).slice(-1)[0];' > Output 1`] = `
"
  1 | (( array )).at(-1);
"
`;

exports[`invalid(7): '(( string.charAt ))(string.length - 1…' > Code 1`] = `
"
  1 | (( string.charAt ))(string.length - 1);
"
`;

exports[`invalid(7): '(( string.charAt ))(string.length - 1…' > Error 1/1 1`] = `
"
> 1 | (( string.charAt ))(string.length - 1);
    |                     ^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | (( string.at ))(- 1);
"
`;

exports[`invalid(7): 'array[(( array.length )) - 1];' > Code 1`] = `
"
  1 | array[(( array.length )) - 1];
"
`;

exports[`invalid(7): 'array[(( array.length )) - 1];' > Error 1/1 1`] = `
"
> 1 | array[(( array.length )) - 1];
    |       ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(7): 'array[(( array.length )) - 1];' > Output 1`] = `
"
  1 | array.at(-1);
"
`;

exports[`invalid(7): 'const offset = 5;string.charAt(offset…' > Code 1`] = `
"
  1 | const offset = 5;string.charAt(offset + 9)
"
`;

exports[`invalid(7): 'const offset = 5;string.charAt(offset…' > Error 1/1 1`] = `
"
> 1 | const offset = 5;string.charAt(offset + 9)
    |                                ^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | const offset = 5;string.at(offset + 9)
"
`;

exports[`invalid(7): 'const offset = 5;string.charAt(offset…' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(7): 'if (foo) _.last([bar])' > Code 1`] = `
"
  1 | if (foo) _.last([bar])
"
`;

exports[`invalid(7): 'if (foo) _.last([bar])' > Error 1/1 1`] = `
"
> 1 | if (foo) _.last([bar])
    |          ^^^^^^ Prefer \`.at(-1)\` over \`_.last(…)\` to get the last element.
"
`;

exports[`invalid(7): 'if (foo) _.last([bar])' > Output 1`] = `
"
  1 | if (foo) [bar].at(-1)
"
`;

exports[`invalid(8): '(( array.slice(-1)[0] ));' > Code 1`] = `
"
  1 | (( array.slice(-1)[0] ));
"
`;

exports[`invalid(8): '(( array.slice(-1)[0] ));' > Error 1/1 1`] = `
"
> 1 | (( array.slice(-1)[0] ));
    |          ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(8): '(( array.slice(-1)[0] ));' > Output 1`] = `
"
  1 | (( array.at(-1) ));
"
`;

exports[`invalid(8): '(( string.charAt(string.length - 1) )…' > Code 1`] = `
"
  1 | (( string.charAt(string.length - 1) ));
"
`;

exports[`invalid(8): '(( string.charAt(string.length - 1) )…' > Error 1/1 1`] = `
"
> 1 | (( string.charAt(string.length - 1) ));
    |                  ^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | (( string.at(- 1) ));
"
`;

exports[`invalid(8): '_.last(getLast(utils.lastOne(array)))' > Code 1`] = `
"
  1 | _.last(getLast(utils.lastOne(array)))
"
`;

exports[`invalid(8): '_.last(getLast(utils.lastOne(array)))' > Error 1/3 1`] = `
"
> 1 | _.last(getLast(utils.lastOne(array)))
    | ^^^^^^ Prefer \`.at(-1)\` over \`_.last(…)\` to get the last element.
"
`;

exports[`invalid(8): '_.last(getLast(utils.lastOne(array)))' > Error 2/3 1`] = `
"
> 1 | _.last(getLast(utils.lastOne(array)))
    |        ^^^^^^^ Prefer \`.at(-1)\` over \`getLast(…)\` to get the last element.
"
`;

exports[`invalid(8): '_.last(getLast(utils.lastOne(array)))' > Error 3/3 1`] = `
"
> 1 | _.last(getLast(utils.lastOne(array)))
    |                ^^^^^^^^^^^^^ Prefer \`.at(-1)\` over \`utils.lastOne(…)\` to get the last element.
"
`;

exports[`invalid(8): '_.last(getLast(utils.lastOne(array)))' > Options 1`] = `
"
[
  {
    "getLastElementFunctions": [
      "getLast",
      "  utils.lastOne  "
    ]
  }
]
"
`;

exports[`invalid(8): '_.last(getLast(utils.lastOne(array)))' > Output 1`] = `
"
  1 | array.at(-1).at(-1).at(-1)
"
`;

exports[`invalid(8): 'array[array.length - (( 1 ))];' > Code 1`] = `
"
  1 | array[array.length - (( 1 ))];
"
`;

exports[`invalid(8): 'array[array.length - (( 1 ))];' > Error 1/1 1`] = `
"
> 1 | array[array.length - (( 1 ))];
    |       ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(8): 'array[array.length - (( 1 ))];' > Output 1`] = `
"
  1 | array.at(- (( 1 )));
"
`;

exports[`invalid(8): 'string.charAt(unknown)' > Code 1`] = `
"
  1 | string.charAt(unknown)
"
`;

exports[`invalid(8): 'string.charAt(unknown)' > Error 1/1 1`] = `
"
> 1 | string.charAt(unknown)
    |               ^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(unknown)
"
`;

exports[`invalid(8): 'string.charAt(unknown)' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(9): '(( array.slice(-1) )).pop();' > Code 1`] = `
"
  1 | (( array.slice(-1) )).pop();
"
`;

exports[`invalid(9): '(( array.slice(-1) )).pop();' > Error 1/1 1`] = `
"
> 1 | (( array.slice(-1) )).pop();
    |          ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(9): '(( array.slice(-1) )).pop();' > Output 1`] = `
"
  1 | (( array.at(-1) ));
"
`;

exports[`invalid(9): 'array[(( array.length - 1 ))];' > Code 1`] = `
"
  1 | array[(( array.length - 1 ))];
"
`;

exports[`invalid(9): 'array[(( array.length - 1 ))];' > Error 1/1 1`] = `
"
> 1 | array[(( array.length - 1 ))];
    |          ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(9): 'array[(( array.length - 1 ))];' > Output 1`] = `
"
  1 | array.at((( -1 )));
"
`;

exports[`invalid(9): 'function foo() {return _.last(argumen…' > Code 1`] = `
"
  1 | function foo() {return _.last(arguments)}
"
`;

exports[`invalid(9): 'function foo() {return _.last(argumen…' > Error 1/1 1`] = `
"
> 1 | function foo() {return _.last(arguments)}
    |                        ^^^^^^ Prefer \`.at(-1)\` over \`_.last(…)\` to get the last element.
"
`;

exports[`invalid(9): 'string.charAt(-1)' > Code 1`] = `
"
  1 | string.charAt(-1)
"
`;

exports[`invalid(9): 'string.charAt(-1)' > Error 1/1 1`] = `
"
> 1 | string.charAt(-1)
    |               ^^ Prefer \`String#at(…)\` over \`String#charAt(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(-1)
"
`;

exports[`invalid(9): 'string.charAt(-1)' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(10): '(( array ))[array.length - 1];' > Code 1`] = `
"
  1 | (( array ))[array.length - 1];
"
`;

exports[`invalid(10): '(( array ))[array.length - 1];' > Error 1/1 1`] = `
"
> 1 | (( array ))[array.length - 1];
    |             ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(10): '(( array ))[array.length - 1];' > Output 1`] = `
"
  1 | (( array )).at(-1);
"
`;

exports[`invalid(10): '(( array.slice(-1).pop ))();' > Code 1`] = `
"
  1 | (( array.slice(-1).pop ))();
"
`;

exports[`invalid(10): '(( array.slice(-1).pop ))();' > Error 1/1 1`] = `
"
> 1 | (( array.slice(-1).pop ))();
    |          ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(10): '(( array.slice(-1).pop ))();' > Output 1`] = `
"
  1 | (( array.at(-1) ));
"
`;

exports[`invalid(10): 'string.charAt(1.5)' > Code 1`] = `
"
  1 | string.charAt(1.5)
"
`;

exports[`invalid(10): 'string.charAt(1.5)' > Error 1/1 1`] = `
"
> 1 | string.charAt(1.5)
    |               ^^^ Prefer \`String#at(…)\` over \`String#charAt(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(1.5)
"
`;

exports[`invalid(10): 'string.charAt(1.5)' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(11): '(( array.slice(-1).pop() ));' > Code 1`] = `
"
  1 | (( array.slice(-1).pop() ));
"
`;

exports[`invalid(11): '(( array.slice(-1).pop() ));' > Error 1/1 1`] = `
"
> 1 | (( array.slice(-1).pop() ));
    |          ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(11): '(( array.slice(-1).pop() ));' > Output 1`] = `
"
  1 | (( array.at(-1) ));
"
`;

exports[`invalid(11): '(( array[array.length - 1] ));' > Code 1`] = `
"
  1 | (( array[array.length - 1] ));
"
`;

exports[`invalid(11): '(( array[array.length - 1] ));' > Error 1/1 1`] = `
"
> 1 | (( array[array.length - 1] ));
    |          ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(11): '(( array[array.length - 1] ));' > Output 1`] = `
"
  1 | (( array.at(-1) ));
"
`;

exports[`invalid(11): 'string.charAt(1n)' > Code 1`] = `
"
  1 | string.charAt(1n)
"
`;

exports[`invalid(11): 'string.charAt(1n)' > Error 1/1 1`] = `
"
> 1 | string.charAt(1n)
    |               ^^ Prefer \`String#at(…)\` over \`String#charAt(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(1n)
"
`;

exports[`invalid(11): 'string.charAt(1n)' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(12): 'array.slice(-1)[0].pop().shift().slic…' > Code 1`] = `
"
  1 | array.slice(-1)[0].pop().shift().slice(-1)
"
`;

exports[`invalid(12): 'array.slice(-1)[0].pop().shift().slic…' > Error 1/1 1`] = `
"
> 1 | array.slice(-1)[0].pop().shift().slice(-1)
    |       ^^^^^ Prefer \`.at(…)\` over the first element from \`.slice(…)\`.
"
`;

exports[`invalid(12): 'array.slice(-1)[0].pop().shift().slic…' > Output 1`] = `
"
  1 | array.at(-1).pop().shift().slice(-1)
"
`;

exports[`invalid(12): 'array[array.length - 1].pop().shift()…' > Code 1`] = `
"
  1 | array[array.length - 1].pop().shift()[0];
"
`;

exports[`invalid(12): 'array[array.length - 1].pop().shift()…' > Error 1/1 1`] = `
"
> 1 | array[array.length - 1].pop().shift()[0];
    |       ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(12): 'array[array.length - 1].pop().shift()…' > Output 1`] = `
"
  1 | array.at(-1).pop().shift()[0];
"
`;

exports[`invalid(12): 'string.charAt(string.length - 1)' > Code 1`] = `
"
  1 | string.charAt(string.length - 1)
"
`;

exports[`invalid(12): 'string.charAt(string.length - 1)' > Error 1/1 1`] = `
"
> 1 | string.charAt(string.length - 1)
    |               ^^^^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(….length - index)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | string.at(- 1)
"
`;

exports[`invalid(12): 'string.charAt(string.length - 1)' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(13): 'a = array[array.length - 1]' > Code 1`] = `
"
  1 | a = array[array.length - 1]
"
`;

exports[`invalid(13): 'a = array[array.length - 1]' > Error 1/1 1`] = `
"
> 1 | a = array[array.length - 1]
    |           ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(13): 'a = array[array.length - 1]' > Output 1`] = `
"
  1 | a = array.at(-1)
"
`;

exports[`invalid(13): 'foo.charAt(bar.length - 1)' > Code 1`] = `
"
  1 | foo.charAt(bar.length - 1)
"
`;

exports[`invalid(13): 'foo.charAt(bar.length - 1)' > Error 1/1 1`] = `
"
> 1 | foo.charAt(bar.length - 1)
    |            ^^^^^^^^^^^^^^ Prefer \`String#at(…)\` over \`String#charAt(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`.at(…)\`.
  1 | foo.at(bar.length - 1)
"
`;

exports[`invalid(13): 'foo.charAt(bar.length - 1)' > Options 1`] = `
"
[
  {
    "checkAllIndexAccess": true
  }
]
"
`;

exports[`invalid(14): 'const a = array[array.length - 1]' > Code 1`] = `
"
  1 | const a = array[array.length - 1]
"
`;

exports[`invalid(14): 'const a = array[array.length - 1]' > Error 1/1 1`] = `
"
> 1 | const a = array[array.length - 1]
    |                 ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(14): 'const a = array[array.length - 1]' > Output 1`] = `
"
  1 | const a = array.at(-1)
"
`;

exports[`invalid(15): 'const {a = array[array.length - 1]} =…' > Code 1`] = `
"
  1 | const {a = array[array.length - 1]} = {}
"
`;

exports[`invalid(15): 'const {a = array[array.length - 1]} =…' > Error 1/1 1`] = `
"
> 1 | const {a = array[array.length - 1]} = {}
    |                  ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(15): 'const {a = array[array.length - 1]} =…' > Output 1`] = `
"
  1 | const {a = array.at(-1)} = {}
"
`;

exports[`invalid(16): 'typeof array[array.length - 1]' > Code 1`] = `
"
  1 | typeof array[array.length - 1]
"
`;

exports[`invalid(16): 'typeof array[array.length - 1]' > Error 1/1 1`] = `
"
> 1 | typeof array[array.length - 1]
    |              ^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(16): 'typeof array[array.length - 1]' > Output 1`] = `
"
  1 | typeof array.at(-1)
"
`;

exports[`invalid(17): 'function foo() {return arguments[argu…' > Code 1`] = `
"
  1 | function foo() {return arguments[arguments.length - 1]}
"
`;

exports[`invalid(17): 'function foo() {return arguments[argu…' > Error 1/1 1`] = `
"
> 1 | function foo() {return arguments[arguments.length - 1]}
    |                                  ^^^^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(18): 'class Foo {bar; baz() {return this.ba…' > Code 1`] = `
"
  1 | class Foo {bar; baz() {return this.bar[this.bar.length - 1]}}
"
`;

exports[`invalid(18): 'class Foo {bar; baz() {return this.ba…' > Error 1/1 1`] = `
"
> 1 | class Foo {bar; baz() {return this.bar[this.bar.length - 1]}}
    |                                        ^^^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(18): 'class Foo {bar; baz() {return this.ba…' > Output 1`] = `
"
  1 | class Foo {bar; baz() {return this.bar.at(-1)}}
"
`;

exports[`invalid(19): 'class Foo {#bar; baz() {return this.#…' > Code 1`] = `
"
  1 | class Foo {#bar; baz() {return this.#bar[this.#bar.length - 1]}}
"
`;

exports[`invalid(19): 'class Foo {#bar; baz() {return this.#…' > Error 1/1 1`] = `
"
> 1 | class Foo {#bar; baz() {return this.#bar[this.#bar.length - 1]}}
    |                                          ^^^^^^^^^^^^^^^^^^^^ Prefer \`.at(…)\` over \`[….length - index]\`.
"
`;

exports[`invalid(19): 'class Foo {#bar; baz() {return this.#…' > Output 1`] = `
"
  1 | class Foo {#bar; baz() {return this.#bar.at(-1)}}
"
`;
