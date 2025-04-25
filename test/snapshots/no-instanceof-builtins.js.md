// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'arr instanceof Array' > Code 1`] = `
"
  1 | arr instanceof Array
"
`;

exports[`invalid(0): 'arr instanceof Array' > Error 1/1 1`] = `
"
> 1 | arr instanceof Array
    | ^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(0): 'arr instanceof Array' > Output 1`] = `
"
  1 | Array.isArray(arr)
"
`;

exports[`invalid(0): 'err instanceof Error' > Code 1`] = `
"
  1 | err instanceof Error
"
`;

exports[`invalid(0): 'err instanceof Error' > Error 1/1 1`] = `
"
> 1 | err instanceof Error
    | ^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(0): 'err instanceof Error' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(0): 'err instanceof Error' > Output 1`] = `
"
  1 | Error.isError(err)
"
`;

exports[`invalid(0): 'foo instanceof String' > Code 1`] = `
"
  1 | foo instanceof String
"
`;

exports[`invalid(0): 'foo instanceof String' > Error 1/1 1`] = `
"
> 1 | foo instanceof String
    | ^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'string'\`.
  1 | typeof foo === 'string'
"
`;

exports[`invalid(0): 'fooErr instanceof Error' > Code 1`] = `
"
  1 | fooErr instanceof Error
"
`;

exports[`invalid(0): 'fooErr instanceof Error' > Error 1/1 1`] = `
"
> 1 | fooErr instanceof Error
    | ^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(0): 'fooErr instanceof Error' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "loose"
  }
]
"
`;

exports[`invalid(0): 'fooErr instanceof Error' > Output 1`] = `
"
  1 | Error.isError(fooErr)
"
`;

exports[`invalid(0): 'fooInclude instanceof WebWorker' > Code 1`] = `
"
  1 | fooInclude instanceof WebWorker
"
`;

exports[`invalid(0): 'fooInclude instanceof WebWorker' > Error 1/1 1`] = `
"
> 1 | fooInclude instanceof WebWorker
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(0): 'fooInclude instanceof WebWorker' > Options 1`] = `
"
[
  {
    "include": [
      "WebWorker"
    ]
  }
]
"
`;

exports[`invalid(0): 'fooStrict instanceof String' > Code 1`] = `
"
  1 | fooStrict instanceof String
"
`;

exports[`invalid(0): 'fooStrict instanceof String' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof String
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'string'\`.
  1 | typeof fooStrict === 'string'
"
`;

exports[`invalid(0): 'fooStrict instanceof String' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(1): '(fooErr) instanceof (Error)' > Code 1`] = `
"
  1 | (fooErr) instanceof (Error)
"
`;

exports[`invalid(1): '(fooErr) instanceof (Error)' > Error 1/1 1`] = `
"
> 1 | (fooErr) instanceof (Error)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(1): '(fooErr) instanceof (Error)' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "loose"
  }
]
"
`;

exports[`invalid(1): '(fooErr) instanceof (Error)' > Output 1`] = `
"
  1 | Error.isError((fooErr))
"
`;

exports[`invalid(1): '[] instanceof Array' > Code 1`] = `
"
  1 | [] instanceof Array
"
`;

exports[`invalid(1): '[] instanceof Array' > Error 1/1 1`] = `
"
> 1 | [] instanceof Array
    | ^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(1): '[] instanceof Array' > Output 1`] = `
"
  1 | Array.isArray([])
"
`;

exports[`invalid(1): 'err instanceof EvalError' > Code 1`] = `
"
  1 | err instanceof EvalError
"
`;

exports[`invalid(1): 'err instanceof EvalError' > Error 1/1 1`] = `
"
> 1 | err instanceof EvalError
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(1): 'err instanceof EvalError' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(1): 'foo instanceof Number' > Code 1`] = `
"
  1 | foo instanceof Number
"
`;

exports[`invalid(1): 'foo instanceof Number' > Error 1/1 1`] = `
"
> 1 | foo instanceof Number
    | ^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'number'\`.
  1 | typeof foo === 'number'
"
`;

exports[`invalid(1): 'fooInclude instanceof HTMLElement' > Code 1`] = `
"
  1 | fooInclude instanceof HTMLElement
"
`;

exports[`invalid(1): 'fooInclude instanceof HTMLElement' > Error 1/1 1`] = `
"
> 1 | fooInclude instanceof HTMLElement
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(1): 'fooInclude instanceof HTMLElement' > Options 1`] = `
"
[
  {
    "include": [
      "HTMLElement"
    ]
  }
]
"
`;

exports[`invalid(1): 'fooStrict instanceof Number' > Code 1`] = `
"
  1 | fooStrict instanceof Number
"
`;

exports[`invalid(1): 'fooStrict instanceof Number' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Number
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'number'\`.
  1 | typeof fooStrict === 'number'
"
`;

exports[`invalid(1): 'fooStrict instanceof Number' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(2): '[1,2,3] instanceof Array === true' > Code 1`] = `
"
  1 | [1,2,3] instanceof Array === true
"
`;

exports[`invalid(2): '[1,2,3] instanceof Array === true' > Error 1/1 1`] = `
"
> 1 | [1,2,3] instanceof Array === true
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(2): '[1,2,3] instanceof Array === true' > Output 1`] = `
"
  1 | Array.isArray([1,2,3]) === true
"
`;

exports[`invalid(2): 'err instanceof RangeError' > Code 1`] = `
"
  1 | err instanceof RangeError
"
`;

exports[`invalid(2): 'err instanceof RangeError' > Error 1/1 1`] = `
"
> 1 | err instanceof RangeError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(2): 'err instanceof RangeError' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(2): 'foo instanceof Boolean' > Code 1`] = `
"
  1 | foo instanceof Boolean
"
`;

exports[`invalid(2): 'foo instanceof Boolean' > Error 1/1 1`] = `
"
> 1 | foo instanceof Boolean
    | ^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'boolean'\`.
  1 | typeof foo === 'boolean'
"
`;

exports[`invalid(2): 'fooStrict instanceof Boolean' > Code 1`] = `
"
  1 | fooStrict instanceof Boolean
"
`;

exports[`invalid(2): 'fooStrict instanceof Boolean' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Boolean
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'boolean'\`.
  1 | typeof fooStrict === 'boolean'
"
`;

exports[`invalid(2): 'fooStrict instanceof Boolean' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(3): 'err instanceof ReferenceError' > Code 1`] = `
"
  1 | err instanceof ReferenceError
"
`;

exports[`invalid(3): 'err instanceof ReferenceError' > Error 1/1 1`] = `
"
> 1 | err instanceof ReferenceError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(3): 'err instanceof ReferenceError' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(3): 'foo instanceof BigInt' > Code 1`] = `
"
  1 | foo instanceof BigInt
"
`;

exports[`invalid(3): 'foo instanceof BigInt' > Error 1/1 1`] = `
"
> 1 | foo instanceof BigInt
    | ^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'bigint'\`.
  1 | typeof foo === 'bigint'
"
`;

exports[`invalid(3): 'fooStrict instanceof BigInt' > Code 1`] = `
"
  1 | fooStrict instanceof BigInt
"
`;

exports[`invalid(3): 'fooStrict instanceof BigInt' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof BigInt
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'bigint'\`.
  1 | typeof fooStrict === 'bigint'
"
`;

exports[`invalid(3): 'fooStrict instanceof BigInt' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(3): 'fun.call(1, 2, 3) instanceof Array' > Code 1`] = `
"
  1 | fun.call(1, 2, 3) instanceof Array
"
`;

exports[`invalid(3): 'fun.call(1, 2, 3) instanceof Array' > Error 1/1 1`] = `
"
> 1 | fun.call(1, 2, 3) instanceof Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(3): 'fun.call(1, 2, 3) instanceof Array' > Output 1`] = `
"
  1 | Array.isArray(fun.call(1, 2, 3))
"
`;

exports[`invalid(4): 'err instanceof SyntaxError' > Code 1`] = `
"
  1 | err instanceof SyntaxError
"
`;

exports[`invalid(4): 'err instanceof SyntaxError' > Error 1/1 1`] = `
"
> 1 | err instanceof SyntaxError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(4): 'err instanceof SyntaxError' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(4): 'foo instanceof Symbol' > Code 1`] = `
"
  1 | foo instanceof Symbol
"
`;

exports[`invalid(4): 'foo instanceof Symbol' > Error 1/1 1`] = `
"
> 1 | foo instanceof Symbol
    | ^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'symbol'\`.
  1 | typeof foo === 'symbol'
"
`;

exports[`invalid(4): 'fooStrict instanceof Symbol' > Code 1`] = `
"
  1 | fooStrict instanceof Symbol
"
`;

exports[`invalid(4): 'fooStrict instanceof Symbol' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Symbol
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`typeof … === 'symbol'\`.
  1 | typeof fooStrict === 'symbol'
"
`;

exports[`invalid(4): 'fooStrict instanceof Symbol' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(4): 'obj.arr instanceof Array' > Code 1`] = `
"
  1 | obj.arr instanceof Array
"
`;

exports[`invalid(4): 'obj.arr instanceof Array' > Error 1/1 1`] = `
"
> 1 | obj.arr instanceof Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(4): 'obj.arr instanceof Array' > Output 1`] = `
"
  1 | Array.isArray(obj.arr)
"
`;

exports[`invalid(5): 'err instanceof TypeError' > Code 1`] = `
"
  1 | err instanceof TypeError
"
`;

exports[`invalid(5): 'err instanceof TypeError' > Error 1/1 1`] = `
"
> 1 | err instanceof TypeError
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(5): 'err instanceof TypeError' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(5): 'foo instanceof Function' > Code 1`] = `
"
  1 | foo instanceof Function
"
`;

exports[`invalid(5): 'foo instanceof Function' > Error 1/1 1`] = `
"
> 1 | foo instanceof Function
    | ^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(5): 'foo instanceof Function' > Output 1`] = `
"
  1 | typeof foo === 'function'
"
`;

exports[`invalid(5): 'foo.bar[2] instanceof Array' > Code 1`] = `
"
  1 | foo.bar[2] instanceof Array
"
`;

exports[`invalid(5): 'foo.bar[2] instanceof Array' > Error 1/1 1`] = `
"
> 1 | foo.bar[2] instanceof Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(5): 'foo.bar[2] instanceof Array' > Output 1`] = `
"
  1 | Array.isArray(foo.bar[2])
"
`;

exports[`invalid(5): 'fooStrict instanceof Function' > Code 1`] = `
"
  1 | fooStrict instanceof Function
"
`;

exports[`invalid(5): 'fooStrict instanceof Function' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Function
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(5): 'fooStrict instanceof Function' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(5): 'fooStrict instanceof Function' > Output 1`] = `
"
  1 | typeof fooStrict === 'function'
"
`;

exports[`invalid(6): '(0, array) instanceof Array' > Code 1`] = `
"
  1 | (0, array) instanceof Array
"
`;

exports[`invalid(6): '(0, array) instanceof Array' > Error 1/1 1`] = `
"
> 1 | (0, array) instanceof Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(6): '(0, array) instanceof Array' > Output 1`] = `
"
  1 | Array.isArray((0, array))
"
`;

exports[`invalid(6): 'err instanceof URIError' > Code 1`] = `
"
  1 | err instanceof URIError
"
`;

exports[`invalid(6): 'err instanceof URIError' > Error 1/1 1`] = `
"
> 1 | err instanceof URIError
    | ^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(6): 'err instanceof URIError' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(6): 'foo instanceof Array' > Code 1`] = `
"
  1 | foo instanceof Array
"
`;

exports[`invalid(6): 'foo instanceof Array' > Error 1/1 1`] = `
"
> 1 | foo instanceof Array
    | ^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(6): 'foo instanceof Array' > Output 1`] = `
"
  1 | Array.isArray(foo)
"
`;

exports[`invalid(6): 'fooStrict instanceof Array' > Code 1`] = `
"
  1 | fooStrict instanceof Array
"
`;

exports[`invalid(6): 'fooStrict instanceof Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(6): 'fooStrict instanceof Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(6): 'fooStrict instanceof Array' > Output 1`] = `
"
  1 | Array.isArray(fooStrict)
"
`;

exports[`invalid(7): 'err instanceof InternalError' > Code 1`] = `
"
  1 | err instanceof InternalError
"
`;

exports[`invalid(7): 'err instanceof InternalError' > Error 1/1 1`] = `
"
> 1 | err instanceof InternalError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(7): 'err instanceof InternalError' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(7): 'fooStrict instanceof Error' > Code 1`] = `
"
  1 | fooStrict instanceof Error
"
`;

exports[`invalid(7): 'fooStrict instanceof Error' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Error
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(7): 'fooStrict instanceof Error' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(7): 'function foo(){return[]instanceof Arr…' > Code 1`] = `
"
  1 | function foo(){return[]instanceof Array}
"
`;

exports[`invalid(7): 'function foo(){return[]instanceof Arr…' > Error 1/1 1`] = `
"
> 1 | function foo(){return[]instanceof Array}
    |                      ^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(7): 'function foo(){return[]instanceof Arr…' > Output 1`] = `
"
  1 | function foo(){return Array.isArray([])}
"
`;

exports[`invalid(8): '(\\n\\t// comment\\n\\t((\\n\\t\\t// comment…' > Code 1`] = `
"
   1 | (
   2 | 	// comment
   3 | 	((
   4 | 		// comment
   5 | 		(
   6 | 			// comment
   7 | 			foo
   8 | 			// comment
   9 | 		)
  10 | 		// comment
  11 | 	))
  12 | 	// comment
  13 | )
  14 | // comment before instanceof
  15 |    instanceof
  16 |
  17 | // comment after instanceof
  18 |
  19 | (
  20 | 	// comment
  21 |
  22 | 	(
  23 |
  24 | 		// comment
  25 |
  26 | 		Array
  27 |
  28 | 		// comment
  29 | 	)
  30 |
  31 | 		// comment
  32 | )
  33 |
  34 | 	// comment
"
`;

exports[`invalid(8): '(\\n\\t// comment\\n\\t((\\n\\t\\t// comment…' > Error 1/1 1`] = `
"
>  1 | (
     | ^
>  2 | 	// comment
     | ^^^^^^^^^^^
>  3 | 	((
     | ^^^^^^^^^^^
>  4 | 		// comment
     | ^^^^^^^^^^^
>  5 | 		(
     | ^^^^^^^^^^^
>  6 | 			// comment
     | ^^^^^^^^^^^
>  7 | 			foo
     | ^^^^^^^^^^^
>  8 | 			// comment
     | ^^^^^^^^^^^
>  9 | 		)
     | ^^^^^^^^^^^
> 10 | 		// comment
     | ^^^^^^^^^^^
> 11 | 	))
     | ^^^^^^^^^^^
> 12 | 	// comment
     | ^^^^^^^^^^^
> 13 | )
     | ^^^^^^^^^^^
> 14 | // comment before instanceof
     | ^^^^^^^^^^^
> 15 |    instanceof
     | ^^^^^^^^^^^
> 16 |
     | ^^^^^^^^^^^
> 17 | // comment after instanceof
     | ^^^^^^^^^^^
> 18 |
     | ^^^^^^^^^^^
> 19 | (
     | ^^^^^^^^^^^
> 20 | 	// comment
     | ^^^^^^^^^^^
> 21 |
     | ^^^^^^^^^^^
> 22 | 	(
     | ^^^^^^^^^^^
> 23 |
     | ^^^^^^^^^^^
> 24 | 		// comment
     | ^^^^^^^^^^^
> 25 |
     | ^^^^^^^^^^^
> 26 | 		Array
     | ^^^^^^^^^^^
> 27 |
     | ^^^^^^^^^^^
> 28 | 		// comment
     | ^^^^^^^^^^^
> 29 | 	)
     | ^^^^^^^^^^^
> 30 |
     | ^^^^^^^^^^^
> 31 | 		// comment
     | ^^^^^^^^^^^
> 32 | )
     | ^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
  33 |
  34 | 	// comment
"
`;

exports[`invalid(8): '(\\n\\t// comment\\n\\t((\\n\\t\\t// comment…' > Output 1`] = `
"
   1 | Array.isArray((
   2 | 	// comment
   3 | 	((
   4 | 		// comment
   5 | 		(
   6 | 			// comment
   7 | 			foo
   8 | 			// comment
   9 | 		)
  10 | 		// comment
  11 | 	))
  12 | 	// comment
  13 | ))
  14 | // comment before instanceof
  15 |
  16 | // comment after instanceof
  17 |
  18 | 	// comment
  19 |
  20 |
  21 | 		// comment
  22 |
  23 |
  24 | 		// comment
  25 |
  26 |
  27 | 		// comment
  28 |
  29 |
  30 | 	// comment
"
`;

exports[`invalid(8): 'err instanceof AggregateError' > Code 1`] = `
"
  1 | err instanceof AggregateError
"
`;

exports[`invalid(8): 'err instanceof AggregateError' > Error 1/1 1`] = `
"
> 1 | err instanceof AggregateError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(8): 'err instanceof AggregateError' > Options 1`] = `
"
[
  {
    "useErrorIsError": true,
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(8): 'fooStrict instanceof EvalError' > Code 1`] = `
"
  1 | fooStrict instanceof EvalError
"
`;

exports[`invalid(8): 'fooStrict instanceof EvalError' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof EvalError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(8): 'fooStrict instanceof EvalError' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(9): '<template><div v-if="array instanceof…' > Code 1`] = `
"
  1 | <template><div v-if="array instanceof Array" v-for="element of array"></div></template>
"
`;

exports[`invalid(9): '<template><div v-if="array instanceof…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="array instanceof Array" v-for="element of array"></div></template>
    |                      ^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(9): '<template><div v-if="array instanceof…' > Output 1`] = `
"
  1 | <template><div v-if="Array.isArray(array)" v-for="element of array"></div></template>
"
`;

exports[`invalid(9): 'fooStrict instanceof RangeError' > Code 1`] = `
"
  1 | fooStrict instanceof RangeError
"
`;

exports[`invalid(9): 'fooStrict instanceof RangeError' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof RangeError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(9): 'fooStrict instanceof RangeError' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(10): '<template><div v-if="(( (( array )) i…' > Code 1`] = `
"
  1 | <template><div v-if="(( (( array )) instanceof (( Array )) ))" v-for="element of array"></div></template>
"
`;

exports[`invalid(10): '<template><div v-if="(( (( array )) i…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="(( (( array )) instanceof (( Array )) ))" v-for="element of array"></div></template>
    |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(10): '<template><div v-if="(( (( array )) i…' > Output 1`] = `
"
  1 | <template><div v-if="(( Array.isArray((( array ))) ))" v-for="element of array"></div></template>
"
`;

exports[`invalid(10): 'fooStrict instanceof ReferenceError' > Code 1`] = `
"
  1 | fooStrict instanceof ReferenceError
"
`;

exports[`invalid(10): 'fooStrict instanceof ReferenceError' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof ReferenceError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(10): 'fooStrict instanceof ReferenceError' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(11): '<template><div>{{(( (( array )) insta…' > Code 1`] = `
"
  1 | <template><div>{{(( (( array )) instanceof (( Array )) )) ? array.join(" | ") : array}}</div></template>
"
`;

exports[`invalid(11): '<template><div>{{(( (( array )) insta…' > Error 1/1 1`] = `
"
> 1 | <template><div>{{(( (( array )) instanceof (( Array )) )) ? array.join(" | ") : array}}</div></template>
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(11): '<template><div>{{(( (( array )) insta…' > Output 1`] = `
"
  1 | <template><div>{{(( Array.isArray((( array ))) )) ? array.join(" | ") : array}}</div></template>
"
`;

exports[`invalid(11): 'fooStrict instanceof SyntaxError' > Code 1`] = `
"
  1 | fooStrict instanceof SyntaxError
"
`;

exports[`invalid(11): 'fooStrict instanceof SyntaxError' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof SyntaxError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(11): 'fooStrict instanceof SyntaxError' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(12): '<script>const foo = array instanceof …' > Code 1`] = `
"
  1 | <script>const foo = array instanceof Array</script>
"
`;

exports[`invalid(12): '<script>const foo = array instanceof …' > Error 1/1 1`] = `
"
> 1 | <script>const foo = array instanceof Array</script>
    |                     ^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(12): '<script>const foo = array instanceof …' > Output 1`] = `
"
  1 | <script>const foo = Array.isArray(array)</script>
"
`;

exports[`invalid(12): 'fooStrict instanceof TypeError' > Code 1`] = `
"
  1 | fooStrict instanceof TypeError
"
`;

exports[`invalid(12): 'fooStrict instanceof TypeError' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof TypeError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(12): 'fooStrict instanceof TypeError' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(13): '<script>const foo = (( (( array )) in…' > Code 1`] = `
"
  1 | <script>const foo = (( (( array )) instanceof (( Array )) ))</script>
"
`;

exports[`invalid(13): '<script>const foo = (( (( array )) in…' > Error 1/1 1`] = `
"
> 1 | <script>const foo = (( (( array )) instanceof (( Array )) ))</script>
    |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(13): '<script>const foo = (( (( array )) in…' > Output 1`] = `
"
  1 | <script>const foo = (( Array.isArray((( array ))) ))</script>
"
`;

exports[`invalid(13): 'fooStrict instanceof URIError' > Code 1`] = `
"
  1 | fooStrict instanceof URIError
"
`;

exports[`invalid(13): 'fooStrict instanceof URIError' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof URIError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(13): 'fooStrict instanceof URIError' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(14): '<script>foo instanceof Function</scri…' > Code 1`] = `
"
  1 | <script>foo instanceof Function</script>
"
`;

exports[`invalid(14): '<script>foo instanceof Function</scri…' > Error 1/1 1`] = `
"
> 1 | <script>foo instanceof Function</script>
    |         ^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(14): '<script>foo instanceof Function</scri…' > Output 1`] = `
"
  1 | <script>typeof foo === 'function'</script>
"
`;

exports[`invalid(14): 'fooStrict instanceof InternalError' > Code 1`] = `
"
  1 | fooStrict instanceof InternalError
"
`;

exports[`invalid(14): 'fooStrict instanceof InternalError' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof InternalError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(14): 'fooStrict instanceof InternalError' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(15): 'fooStrict instanceof AggregateError' > Code 1`] = `
"
  1 | fooStrict instanceof AggregateError
"
`;

exports[`invalid(15): 'fooStrict instanceof AggregateError' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof AggregateError
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(15): 'fooStrict instanceof AggregateError' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(16): 'fooStrict instanceof Map' > Code 1`] = `
"
  1 | fooStrict instanceof Map
"
`;

exports[`invalid(16): 'fooStrict instanceof Map' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Map
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(16): 'fooStrict instanceof Map' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(17): 'fooStrict instanceof Set' > Code 1`] = `
"
  1 | fooStrict instanceof Set
"
`;

exports[`invalid(17): 'fooStrict instanceof Set' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Set
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(17): 'fooStrict instanceof Set' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(18): 'fooStrict instanceof WeakMap' > Code 1`] = `
"
  1 | fooStrict instanceof WeakMap
"
`;

exports[`invalid(18): 'fooStrict instanceof WeakMap' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof WeakMap
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(18): 'fooStrict instanceof WeakMap' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(19): 'fooStrict instanceof WeakRef' > Code 1`] = `
"
  1 | fooStrict instanceof WeakRef
"
`;

exports[`invalid(19): 'fooStrict instanceof WeakRef' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof WeakRef
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(19): 'fooStrict instanceof WeakRef' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(20): 'fooStrict instanceof WeakSet' > Code 1`] = `
"
  1 | fooStrict instanceof WeakSet
"
`;

exports[`invalid(20): 'fooStrict instanceof WeakSet' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof WeakSet
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(20): 'fooStrict instanceof WeakSet' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(21): 'fooStrict instanceof ArrayBuffer' > Code 1`] = `
"
  1 | fooStrict instanceof ArrayBuffer
"
`;

exports[`invalid(21): 'fooStrict instanceof ArrayBuffer' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof ArrayBuffer
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(21): 'fooStrict instanceof ArrayBuffer' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(22): 'fooStrict instanceof Int8Array' > Code 1`] = `
"
  1 | fooStrict instanceof Int8Array
"
`;

exports[`invalid(22): 'fooStrict instanceof Int8Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Int8Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(22): 'fooStrict instanceof Int8Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(23): 'fooStrict instanceof Uint8Array' > Code 1`] = `
"
  1 | fooStrict instanceof Uint8Array
"
`;

exports[`invalid(23): 'fooStrict instanceof Uint8Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Uint8Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(23): 'fooStrict instanceof Uint8Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(24): 'fooStrict instanceof Uint8ClampedArray' > Code 1`] = `
"
  1 | fooStrict instanceof Uint8ClampedArray
"
`;

exports[`invalid(24): 'fooStrict instanceof Uint8ClampedArray' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Uint8ClampedArray
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(24): 'fooStrict instanceof Uint8ClampedArray' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(25): 'fooStrict instanceof Int16Array' > Code 1`] = `
"
  1 | fooStrict instanceof Int16Array
"
`;

exports[`invalid(25): 'fooStrict instanceof Int16Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Int16Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(25): 'fooStrict instanceof Int16Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(26): 'fooStrict instanceof Uint16Array' > Code 1`] = `
"
  1 | fooStrict instanceof Uint16Array
"
`;

exports[`invalid(26): 'fooStrict instanceof Uint16Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Uint16Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(26): 'fooStrict instanceof Uint16Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(27): 'fooStrict instanceof Int32Array' > Code 1`] = `
"
  1 | fooStrict instanceof Int32Array
"
`;

exports[`invalid(27): 'fooStrict instanceof Int32Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Int32Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(27): 'fooStrict instanceof Int32Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(28): 'fooStrict instanceof Uint32Array' > Code 1`] = `
"
  1 | fooStrict instanceof Uint32Array
"
`;

exports[`invalid(28): 'fooStrict instanceof Uint32Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Uint32Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(28): 'fooStrict instanceof Uint32Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(29): 'fooStrict instanceof Float16Array' > Code 1`] = `
"
  1 | fooStrict instanceof Float16Array
"
`;

exports[`invalid(29): 'fooStrict instanceof Float16Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Float16Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(29): 'fooStrict instanceof Float16Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(30): 'fooStrict instanceof Float32Array' > Code 1`] = `
"
  1 | fooStrict instanceof Float32Array
"
`;

exports[`invalid(30): 'fooStrict instanceof Float32Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Float32Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(30): 'fooStrict instanceof Float32Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(31): 'fooStrict instanceof Float64Array' > Code 1`] = `
"
  1 | fooStrict instanceof Float64Array
"
`;

exports[`invalid(31): 'fooStrict instanceof Float64Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Float64Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(31): 'fooStrict instanceof Float64Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(32): 'fooStrict instanceof BigInt64Array' > Code 1`] = `
"
  1 | fooStrict instanceof BigInt64Array
"
`;

exports[`invalid(32): 'fooStrict instanceof BigInt64Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof BigInt64Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(32): 'fooStrict instanceof BigInt64Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(33): 'fooStrict instanceof BigUint64Array' > Code 1`] = `
"
  1 | fooStrict instanceof BigUint64Array
"
`;

exports[`invalid(33): 'fooStrict instanceof BigUint64Array' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof BigUint64Array
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(33): 'fooStrict instanceof BigUint64Array' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(34): 'fooStrict instanceof Object' > Code 1`] = `
"
  1 | fooStrict instanceof Object
"
`;

exports[`invalid(34): 'fooStrict instanceof Object' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Object
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(34): 'fooStrict instanceof Object' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(35): 'fooStrict instanceof RegExp' > Code 1`] = `
"
  1 | fooStrict instanceof RegExp
"
`;

exports[`invalid(35): 'fooStrict instanceof RegExp' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof RegExp
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(35): 'fooStrict instanceof RegExp' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(36): 'fooStrict instanceof Promise' > Code 1`] = `
"
  1 | fooStrict instanceof Promise
"
`;

exports[`invalid(36): 'fooStrict instanceof Promise' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Promise
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(36): 'fooStrict instanceof Promise' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(37): 'fooStrict instanceof Proxy' > Code 1`] = `
"
  1 | fooStrict instanceof Proxy
"
`;

exports[`invalid(37): 'fooStrict instanceof Proxy' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Proxy
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(37): 'fooStrict instanceof Proxy' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(38): 'fooStrict instanceof DataView' > Code 1`] = `
"
  1 | fooStrict instanceof DataView
"
`;

exports[`invalid(38): 'fooStrict instanceof DataView' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof DataView
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(38): 'fooStrict instanceof DataView' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(39): 'fooStrict instanceof Date' > Code 1`] = `
"
  1 | fooStrict instanceof Date
"
`;

exports[`invalid(39): 'fooStrict instanceof Date' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof Date
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(39): 'fooStrict instanceof Date' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(40): 'fooStrict instanceof SharedArrayBuffer' > Code 1`] = `
"
  1 | fooStrict instanceof SharedArrayBuffer
"
`;

exports[`invalid(40): 'fooStrict instanceof SharedArrayBuffer' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof SharedArrayBuffer
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(40): 'fooStrict instanceof SharedArrayBuffer' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;

exports[`invalid(41): 'fooStrict instanceof FinalizationRegi…' > Code 1`] = `
"
  1 | fooStrict instanceof FinalizationRegistry
"
`;

exports[`invalid(41): 'fooStrict instanceof FinalizationRegi…' > Error 1/1 1`] = `
"
> 1 | fooStrict instanceof FinalizationRegistry
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid using \`instanceof\` for type checking as it can lead to unreliable results.
"
`;

exports[`invalid(41): 'fooStrict instanceof FinalizationRegi…' > Options 1`] = `
"
[
  {
    "strategy": "strict"
  }
]
"
`;
