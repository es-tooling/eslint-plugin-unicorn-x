// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '[].concat(...array)' > Code 1`] = `
"
  1 | [].concat(...array)
"
`;

exports[`invalid(0): '[].concat(...array)' > Error 1/1 1`] = `
"
> 1 | [].concat(...array)
    | ^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(0): '[].concat(...array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(0): '[].concat(maybeArray)' > Code 1`] = `
"
  1 | [].concat(maybeArray)
"
`;

exports[`invalid(0): '[].concat(maybeArray)' > Error 1/1 1`] = `
"
> 1 | [].concat(maybeArray)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(0): '[].concat(maybeArray)' > Output 1`] = `
"
  1 | [maybeArray].flat()
"
`;

exports[`invalid(0): '[].concat.apply([], array)' > Code 1`] = `
"
  1 | [].concat.apply([], array)
"
`;

exports[`invalid(0): '[].concat.apply([], array)' > Error 1/1 1`] = `
"
> 1 | [].concat.apply([], array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(0): '[].concat.apply([], array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(0): '_.flatten(array)' > Code 1`] = `
"
  1 | _.flatten(array)
"
`;

exports[`invalid(0): '_.flatten(array)' > Error 1/1 1`] = `
"
> 1 | _.flatten(array)
    | ^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`_.flatten()\` to flatten an array.
"
`;

exports[`invalid(0): '_.flatten(array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(0): 'Array.prototype.concat.apply([], arra…' > Code 1`] = `
"
  1 | Array.prototype.concat.apply([], array)
"
`;

exports[`invalid(0): 'Array.prototype.concat.apply([], arra…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.apply([], array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(0): 'Array.prototype.concat.apply([], arra…' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(0): 'array.flatMap(x => x)' > Code 1`] = `
"
  1 | array.flatMap(x => x)
"
`;

exports[`invalid(0): 'array.flatMap(x => x)' > Error 1/1 1`] = `
"
> 1 | array.flatMap(x => x)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array#flatMap()\` to flatten an array.
"
`;

exports[`invalid(0): 'array.flatMap(x => x)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(0): 'array.reduce((a, b) => [...a, ...b], …' > Code 1`] = `
"
  1 | array.reduce((a, b) => [...a, ...b], [])
"
`;

exports[`invalid(0): 'array.reduce((a, b) => [...a, ...b], …' > Error 1/1 1`] = `
"
> 1 | array.reduce((a, b) => [...a, ...b], [])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array#reduce()\` to flatten an array.
"
`;

exports[`invalid(0): 'array.reduce((a, b) => [...a, ...b], …' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(0): 'array.reduce((a, b) => a.concat(b), […' > Code 1`] = `
"
  1 | array.reduce((a, b) => a.concat(b), [])
"
`;

exports[`invalid(0): 'array.reduce((a, b) => a.concat(b), […' > Error 1/1 1`] = `
"
> 1 | array.reduce((a, b) => a.concat(b), [])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array#reduce()\` to flatten an array.
"
`;

exports[`invalid(0): 'array.reduce((a, b) => a.concat(b), […' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(0): 'before()\\nArray.prototype.concat.appl…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.apply([], [array].concat(array))
"
`;

exports[`invalid(0): 'before()\\nArray.prototype.concat.appl…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.apply([], [array].concat(array))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(0): 'before()\\nArray.prototype.concat.appl…' > Output 1`] = `
"
  1 | before()
  2 | ;[array].concat(array).flat()
"
`;

exports[`invalid(0): 'flat(array)' > Code 1`] = `
"
  1 | flat(array)
"
`;

exports[`invalid(0): 'flat(array)' > Error 1/1 1`] = `
"
> 1 | flat(array)
    | ^^^^^^^^^^^ Prefer \`Array#flat()\` over \`flat()\` to flatten an array.
"
`;

exports[`invalid(0): 'flat(array)' > Options 1`] = `
"
[
  {
    "functions": [
      "flat",
      "utils.flat",
      "globalThis.lodash.flatten"
    ]
  }
]
"
`;

exports[`invalid(0): 'flat(array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(0): 'flat1(x)' > Code 1`] = `
"
  1 | flat1(x)
"
`;

exports[`invalid(0): 'flat1(x)' > Error 1/1 1`] = `
"
> 1 | flat1(x)
    | ^^^^^^^^ Prefer \`Array#flat()\` over \`flat1()\` to flatten an array.
"
`;

exports[`invalid(0): 'flat1(x)' > Options 1`] = `
"
[
  {
    "functions": [
      "",
      " ",
      " flat1 ",
      "utils..flat2",
      "utils . flat3",
      "utils.fl at4",
      "utils.flat5  ",
      "  utils.flat6"
    ]
  }
]
"
`;

exports[`invalid(0): 'flat1(x)' > Output 1`] = `
"
  1 | x.flat()
"
`;

exports[`invalid(1): '[].concat( ((0, maybeArray)) )' > Code 1`] = `
"
  1 | [].concat( ((0, maybeArray)) )
"
`;

exports[`invalid(1): '[].concat( ((0, maybeArray)) )' > Error 1/1 1`] = `
"
> 1 | [].concat( ((0, maybeArray)) )
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(1): '[].concat( ((0, maybeArray)) )' > Output 1`] = `
"
  1 | [((0, maybeArray))].flat()
"
`;

exports[`invalid(1): '[].concat(...(( array )))' > Code 1`] = `
"
  1 | [].concat(...(( array )))
"
`;

exports[`invalid(1): '[].concat(...(( array )))' > Error 1/1 1`] = `
"
> 1 | [].concat(...(( array )))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(1): '[].concat(...(( array )))' > Output 1`] = `
"
  1 | (( array )).flat()
"
`;

exports[`invalid(1): '[].concat.apply([], ((0, array)))' > Code 1`] = `
"
  1 | [].concat.apply([], ((0, array)))
"
`;

exports[`invalid(1): '[].concat.apply([], ((0, array)))' > Error 1/1 1`] = `
"
> 1 | [].concat.apply([], ((0, array)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(1): '[].concat.apply([], ((0, array)))' > Output 1`] = `
"
  1 | ((0, array)).flat()
"
`;

exports[`invalid(1): 'Array.prototype.concat.apply([], ((0,…' > Code 1`] = `
"
  1 | Array.prototype.concat.apply([], ((0, array)))
"
`;

exports[`invalid(1): 'Array.prototype.concat.apply([], ((0,…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.apply([], ((0, array)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(1): 'Array.prototype.concat.apply([], ((0,…' > Output 1`] = `
"
  1 | ((0, array)).flat()
"
`;

exports[`invalid(1): 'array.reduce((a, b) => [...a, ...b,],…' > Code 1`] = `
"
  1 | array.reduce((a, b) => [...a, ...b,], [])
"
`;

exports[`invalid(1): 'array.reduce((a, b) => [...a, ...b,],…' > Error 1/1 1`] = `
"
> 1 | array.reduce((a, b) => [...a, ...b,], [])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array#reduce()\` to flatten an array.
"
`;

exports[`invalid(1): 'array.reduce((a, b) => [...a, ...b,],…' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(1): 'before()\\nArray.prototype.concat.appl…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.apply([], +1)
"
`;

exports[`invalid(1): 'before()\\nArray.prototype.concat.appl…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.apply([], +1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(1): 'before()\\nArray.prototype.concat.appl…' > Output 1`] = `
"
  1 | before()
  2 | ;(+1).flat()
"
`;

exports[`invalid(1): 'flat(array,)' > Code 1`] = `
"
  1 | flat(array,)
"
`;

exports[`invalid(1): 'flat(array,)' > Error 1/1 1`] = `
"
> 1 | flat(array,)
    | ^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`flat()\` to flatten an array.
"
`;

exports[`invalid(1): 'flat(array,)' > Options 1`] = `
"
[
  {
    "functions": [
      "flat",
      "utils.flat",
      "globalThis.lodash.flatten"
    ]
  }
]
"
`;

exports[`invalid(1): 'flat(array,)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(1): 'function foo(){return[].flatMap(x => …' > Code 1`] = `
"
  1 | function foo(){return[].flatMap(x => x)}
"
`;

exports[`invalid(1): 'function foo(){return[].flatMap(x => …' > Error 1/1 1`] = `
"
> 1 | function foo(){return[].flatMap(x => x)}
    |                      ^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array#flatMap()\` to flatten an array.
"
`;

exports[`invalid(1): 'function foo(){return[].flatMap(x => …' > Output 1`] = `
"
  1 | function foo(){return [].flat()}
"
`;

exports[`invalid(1): 'function foo(){return[].reduce((a, b)…' > Code 1`] = `
"
  1 | function foo(){return[].reduce((a, b) => a.concat(b), [])}
"
`;

exports[`invalid(1): 'function foo(){return[].reduce((a, b)…' > Error 1/1 1`] = `
"
> 1 | function foo(){return[].reduce((a, b) => a.concat(b), [])}
    |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array#reduce()\` to flatten an array.
"
`;

exports[`invalid(1): 'function foo(){return[].reduce((a, b)…' > Output 1`] = `
"
  1 | function foo(){return [].flat()}
"
`;

exports[`invalid(1): 'lodash.flatten(array)' > Code 1`] = `
"
  1 | lodash.flatten(array)
"
`;

exports[`invalid(1): 'lodash.flatten(array)' > Error 1/1 1`] = `
"
> 1 | lodash.flatten(array)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`lodash.flatten()\` to flatten an array.
"
`;

exports[`invalid(1): 'lodash.flatten(array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(1): 'utils.flat5(x)' > Code 1`] = `
"
  1 | utils.flat5(x)
"
`;

exports[`invalid(1): 'utils.flat5(x)' > Error 1/1 1`] = `
"
> 1 | utils.flat5(x)
    | ^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`utils.flat5()\` to flatten an array.
"
`;

exports[`invalid(1): 'utils.flat5(x)' > Options 1`] = `
"
[
  {
    "functions": [
      "",
      " ",
      " flat1 ",
      "utils..flat2",
      "utils . flat3",
      "utils.fl at4",
      "utils.flat5  ",
      "  utils.flat6"
    ]
  }
]
"
`;

exports[`invalid(1): 'utils.flat5(x)' > Output 1`] = `
"
  1 | x.flat()
"
`;

exports[`invalid(2): '[].concat( ((maybeArray)) )' > Code 1`] = `
"
  1 | [].concat( ((maybeArray)) )
"
`;

exports[`invalid(2): '[].concat( ((maybeArray)) )' > Error 1/1 1`] = `
"
> 1 | [].concat( ((maybeArray)) )
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(2): '[].concat( ((maybeArray)) )' > Output 1`] = `
"
  1 | [((maybeArray))].flat()
"
`;

exports[`invalid(2): '[].concat(...(( [foo] )))' > Code 1`] = `
"
  1 | [].concat(...(( [foo] )))
"
`;

exports[`invalid(2): '[].concat(...(( [foo] )))' > Error 1/1 1`] = `
"
> 1 | [].concat(...(( [foo] )))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(2): '[].concat(...(( [foo] )))' > Output 1`] = `
"
  1 | (( [foo] )).flat()
"
`;

exports[`invalid(2): '[].concat.apply([], ((array)))' > Code 1`] = `
"
  1 | [].concat.apply([], ((array)))
"
`;

exports[`invalid(2): '[].concat.apply([], ((array)))' > Error 1/1 1`] = `
"
> 1 | [].concat.apply([], ((array)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(2): '[].concat.apply([], ((array)))' > Output 1`] = `
"
  1 | ((array)).flat()
"
`;

exports[`invalid(2): 'Array.prototype.concat.apply([], ((ar…' > Code 1`] = `
"
  1 | Array.prototype.concat.apply([], ((array)))
"
`;

exports[`invalid(2): 'Array.prototype.concat.apply([], ((ar…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.apply([], ((array)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(2): 'Array.prototype.concat.apply([], ((ar…' > Output 1`] = `
"
  1 | ((array)).flat()
"
`;

exports[`invalid(2): 'before()\\nArray.prototype.concat.call…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.call([], +1)
"
`;

exports[`invalid(2): 'before()\\nArray.prototype.concat.call…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.call([], +1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(2): 'before()\\nArray.prototype.concat.call…' > Output 1`] = `
"
  1 | before()
  2 | ;[+1].flat()
"
`;

exports[`invalid(2): 'foo.flatMap(x => x)instanceof Array' > Code 1`] = `
"
  1 | foo.flatMap(x => x)instanceof Array
"
`;

exports[`invalid(2): 'foo.flatMap(x => x)instanceof Array' > Error 1/1 1`] = `
"
> 1 | foo.flatMap(x => x)instanceof Array
    | ^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array#flatMap()\` to flatten an array.
"
`;

exports[`invalid(2): 'foo.flatMap(x => x)instanceof Array' > Output 1`] = `
"
  1 | foo.flat() instanceof Array
"
`;

exports[`invalid(2): 'function foo(){return[].reduce((a, b)…' > Code 1`] = `
"
  1 | function foo(){return[].reduce((a, b) => [...a, ...b,], [])}
"
`;

exports[`invalid(2): 'function foo(){return[].reduce((a, b)…' > Error 1/1 1`] = `
"
> 1 | function foo(){return[].reduce((a, b) => [...a, ...b,], [])}
    |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array#reduce()\` to flatten an array.
"
`;

exports[`invalid(2): 'function foo(){return[].reduce((a, b)…' > Output 1`] = `
"
  1 | function foo(){return [].flat()}
"
`;

exports[`invalid(2): 'underscore.flatten(array)' > Code 1`] = `
"
  1 | underscore.flatten(array)
"
`;

exports[`invalid(2): 'underscore.flatten(array)' > Error 1/1 1`] = `
"
> 1 | underscore.flatten(array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`underscore.flatten()\` to flatten an array.
"
`;

exports[`invalid(2): 'underscore.flatten(array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(2): 'utils.flat(array)' > Code 1`] = `
"
  1 | utils.flat(array)
"
`;

exports[`invalid(2): 'utils.flat(array)' > Error 1/1 1`] = `
"
> 1 | utils.flat(array)
    | ^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`utils.flat()\` to flatten an array.
"
`;

exports[`invalid(2): 'utils.flat(array)' > Options 1`] = `
"
[
  {
    "functions": [
      "flat",
      "utils.flat",
      "globalThis.lodash.flatten"
    ]
  }
]
"
`;

exports[`invalid(2): 'utils.flat(array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(2): 'utils.flat6(x)' > Code 1`] = `
"
  1 | utils.flat6(x)
"
`;

exports[`invalid(2): 'utils.flat6(x)' > Error 1/1 1`] = `
"
> 1 | utils.flat6(x)
    | ^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`utils.flat6()\` to flatten an array.
"
`;

exports[`invalid(2): 'utils.flat6(x)' > Options 1`] = `
"
[
  {
    "functions": [
      "",
      " ",
      " flat1 ",
      "utils..flat2",
      "utils . flat3",
      "utils.fl at4",
      "utils.flat5  ",
      "  utils.flat6"
    ]
  }
]
"
`;

exports[`invalid(2): 'utils.flat6(x)' > Output 1`] = `
"
  1 | x.flat()
"
`;

exports[`invalid(3): '[].concat( [foo] )' > Code 1`] = `
"
  1 | [].concat( [foo] )
"
`;

exports[`invalid(3): '[].concat( [foo] )' > Error 1/1 1`] = `
"
> 1 | [].concat( [foo] )
    | ^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(3): '[].concat( [foo] )' > Output 1`] = `
"
  1 | [[foo]].flat()
"
`;

exports[`invalid(3): '[].concat(...(( [[foo]] )))' > Code 1`] = `
"
  1 | [].concat(...(( [[foo]] )))
"
`;

exports[`invalid(3): '[].concat(...(( [[foo]] )))' > Error 1/1 1`] = `
"
> 1 | [].concat(...(( [[foo]] )))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(3): '[].concat(...(( [[foo]] )))' > Output 1`] = `
"
  1 | (( [[foo]] )).flat()
"
`;

exports[`invalid(3): '[].concat.apply([], [foo])' > Code 1`] = `
"
  1 | [].concat.apply([], [foo])
"
`;

exports[`invalid(3): '[].concat.apply([], [foo])' > Error 1/1 1`] = `
"
> 1 | [].concat.apply([], [foo])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(3): '[].concat.apply([], [foo])' > Output 1`] = `
"
  1 | [foo].flat()
"
`;

exports[`invalid(3): 'Array.prototype.concat.apply([], (0, …' > Code 1`] = `
"
  1 | Array.prototype.concat.apply([], (0, array))
"
`;

exports[`invalid(3): 'Array.prototype.concat.apply([], (0, …' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.apply([], (0, array))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(3): 'Array.prototype.concat.apply([], (0, …' > Output 1`] = `
"
  1 | (0, array).flat()
"
`;

exports[`invalid(3): 'Array.prototype.concat.apply([], [foo…' > Code 1`] = `
"
  1 | Array.prototype.concat.apply([], [foo])
"
`;

exports[`invalid(3): 'Array.prototype.concat.apply([], [foo…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.apply([], [foo])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(3): 'Array.prototype.concat.apply([], [foo…' > Output 1`] = `
"
  1 | [foo].flat()
"
`;

exports[`invalid(3): 'globalThis.lodash.flatten(array)' > Code 1`] = `
"
  1 | globalThis.lodash.flatten(array)
"
`;

exports[`invalid(3): 'globalThis.lodash.flatten(array)' > Error 1/1 1`] = `
"
> 1 | globalThis.lodash.flatten(array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`globalThis.lodash.flatten()\` to flatten an array.
"
`;

exports[`invalid(3): 'globalThis.lodash.flatten(array)' > Options 1`] = `
"
[
  {
    "functions": [
      "flat",
      "utils.flat",
      "globalThis.lodash.flatten"
    ]
  }
]
"
`;

exports[`invalid(3): 'globalThis.lodash.flatten(array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(4): '[].concat( [[foo]] )' > Code 1`] = `
"
  1 | [].concat( [[foo]] )
"
`;

exports[`invalid(4): '[].concat( [[foo]] )' > Error 1/1 1`] = `
"
> 1 | [].concat( [[foo]] )
    | ^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(4): '[].concat( [[foo]] )' > Output 1`] = `
"
  1 | [[[foo]]].flat()
"
`;

exports[`invalid(4): '[].concat.apply([], [[foo]])' > Code 1`] = `
"
  1 | [].concat.apply([], [[foo]])
"
`;

exports[`invalid(4): '[].concat.apply([], [[foo]])' > Error 1/1 1`] = `
"
> 1 | [].concat.apply([], [[foo]])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(4): '[].concat.apply([], [[foo]])' > Output 1`] = `
"
  1 | [[foo]].flat()
"
`;

exports[`invalid(4): 'Array.prototype.concat.apply([], [[fo…' > Code 1`] = `
"
  1 | Array.prototype.concat.apply([], [[foo]])
"
`;

exports[`invalid(4): 'Array.prototype.concat.apply([], [[fo…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.apply([], [[foo]])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(4): 'Array.prototype.concat.apply([], [[fo…' > Output 1`] = `
"
  1 | [[foo]].flat()
"
`;

exports[`invalid(4): 'Array.prototype.concat.call([], (0, a…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], (0, array))
"
`;

exports[`invalid(4): 'Array.prototype.concat.call([], (0, a…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], (0, array))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(4): 'Array.prototype.concat.call([], (0, a…' > Output 1`] = `
"
  1 | [(0, array)].flat()
"
`;

exports[`invalid(4): 'flat(array).map(array => utils.flat(a…' > Code 1`] = `
"
  1 | flat(array).map(array => utils.flat(array))
"
`;

exports[`invalid(4): 'flat(array).map(array => utils.flat(a…' > Error 1/2 1`] = `
"
> 1 | flat(array).map(array => utils.flat(array))
    | ^^^^^^^^^^^ Prefer \`Array#flat()\` over \`flat()\` to flatten an array.
"
`;

exports[`invalid(4): 'flat(array).map(array => utils.flat(a…' > Error 2/2 1`] = `
"
> 1 | flat(array).map(array => utils.flat(array))
    |                          ^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`utils.flat()\` to flatten an array.
"
`;

exports[`invalid(4): 'flat(array).map(array => utils.flat(a…' > Options 1`] = `
"
[
  {
    "functions": [
      "flat",
      "utils.flat",
      "globalThis.lodash.flatten"
    ]
  }
]
"
`;

exports[`invalid(4): 'flat(array).map(array => utils.flat(a…' > Output 1`] = `
"
  1 | array.flat().map(array => array.flat())
"
`;

exports[`invalid(4): 'function foo(){return[].concat(...arr…' > Code 1`] = `
"
  1 | function foo(){return[].concat(...array)}
"
`;

exports[`invalid(4): 'function foo(){return[].concat(...arr…' > Error 1/1 1`] = `
"
> 1 | function foo(){return[].concat(...array)}
    |                      ^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(4): 'function foo(){return[].concat(...arr…' > Output 1`] = `
"
  1 | function foo(){return array.flat()}
"
`;

exports[`invalid(5): '[].concat.call([], maybeArray)' > Code 1`] = `
"
  1 | [].concat.call([], maybeArray)
"
`;

exports[`invalid(5): '[].concat.call([], maybeArray)' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], maybeArray)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(5): '[].concat.call([], maybeArray)' > Output 1`] = `
"
  1 | [maybeArray].flat()
"
`;

exports[`invalid(5): 'Array.prototype.concat.call([], maybe…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], maybeArray)
"
`;

exports[`invalid(5): 'Array.prototype.concat.call([], maybe…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], maybeArray)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(5): 'Array.prototype.concat.call([], maybe…' > Output 1`] = `
"
  1 | [maybeArray].flat()
"
`;

exports[`invalid(5): 'async function a() { return [].concat…' > Code 1`] = `
"
  1 | async function a() { return [].concat(await getArray()); }
"
`;

exports[`invalid(5): 'async function a() { return [].concat…' > Error 1/1 1`] = `
"
> 1 | async function a() { return [].concat(await getArray()); }
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(5): 'async function a() { return [].concat…' > Output 1`] = `
"
  1 | async function a() { return [await getArray()].flat(); }
"
`;

exports[`invalid(5): 'class A extends[].concat(...array){}' > Code 1`] = `
"
  1 | class A extends[].concat(...array){}
"
`;

exports[`invalid(5): 'class A extends[].concat(...array){}' > Error 1/1 1`] = `
"
> 1 | class A extends[].concat(...array){}
    |                ^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(5): 'class A extends[].concat(...array){}' > Output 1`] = `
"
  1 | class A extends array.flat(){}
"
`;

exports[`invalid(5): 'function foo(){return[].concat(maybeA…' > Code 1`] = `
"
  1 | function foo(){return[].concat(maybeArray)}
"
`;

exports[`invalid(5): 'function foo(){return[].concat(maybeA…' > Error 1/1 1`] = `
"
> 1 | function foo(){return[].concat(maybeArray)}
    |                      ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(5): 'function foo(){return[].concat(maybeA…' > Output 1`] = `
"
  1 | function foo(){return [maybeArray].flat()}
"
`;

exports[`invalid(5): 'import {flatten as flat} from \\'lodas…' > Code 1`] = `
"
  1 | import {flatten as flat} from 'lodash-es';
  2 | const foo = flat(bar);
"
`;

exports[`invalid(5): 'import {flatten as flat} from \\'lodas…' > Error 1/1 1`] = `
"
  1 | import {flatten as flat} from 'lodash-es';
> 2 | const foo = flat(bar);
    |             ^^^^^^^^^ Prefer \`Array#flat()\` over \`flat()\` to flatten an array.
"
`;

exports[`invalid(5): 'import {flatten as flat} from \\'lodas…' > Options 1`] = `
"
[
  {
    "functions": [
      "flat",
      "utils.flat",
      "globalThis.lodash.flatten"
    ]
  }
]
"
`;

exports[`invalid(5): 'import {flatten as flat} from \\'lodas…' > Output 1`] = `
"
  1 | import {flatten as flat} from 'lodash-es';
  2 | const foo = bar.flat();
"
`;

exports[`invalid(6): '[].concat.call([], ((0, maybeArray)))' > Code 1`] = `
"
  1 | [].concat.call([], ((0, maybeArray)))
"
`;

exports[`invalid(6): '[].concat.call([], ((0, maybeArray)))' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], ((0, maybeArray)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(6): '[].concat.call([], ((0, maybeArray)))' > Output 1`] = `
"
  1 | [((0, maybeArray))].flat()
"
`;

exports[`invalid(6): '_.flatten((0, array))' > Code 1`] = `
"
  1 | _.flatten((0, array))
"
`;

exports[`invalid(6): '_.flatten((0, array))' > Error 1/1 1`] = `
"
> 1 | _.flatten((0, array))
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`_.flatten()\` to flatten an array.
"
`;

exports[`invalid(6): '_.flatten((0, array))' > Output 1`] = `
"
  1 | (0, array).flat()
"
`;

exports[`invalid(6): '_.flatten(array).length' > Code 1`] = `
"
  1 | _.flatten(array).length
"
`;

exports[`invalid(6): '_.flatten(array).length' > Error 1/1 1`] = `
"
> 1 | _.flatten(array).length
    | ^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`_.flatten()\` to flatten an array.
"
`;

exports[`invalid(6): '_.flatten(array).length' > Options 1`] = `
"
[
  {
    "functions": [
      "flat",
      "utils.flat",
      "globalThis.lodash.flatten"
    ]
  }
]
"
`;

exports[`invalid(6): '_.flatten(array).length' > Output 1`] = `
"
  1 | array.flat().length
"
`;

exports[`invalid(6): 'Array.prototype.concat.call([], ((0, …' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], ((0, maybeArray)))
"
`;

exports[`invalid(6): 'Array.prototype.concat.call([], ((0, …' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], ((0, maybeArray)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(6): 'Array.prototype.concat.call([], ((0, …' > Output 1`] = `
"
  1 | [((0, maybeArray))].flat()
"
`;

exports[`invalid(6): 'const A = class extends[].concat(...a…' > Code 1`] = `
"
  1 | const A = class extends[].concat(...array){}
"
`;

exports[`invalid(6): 'const A = class extends[].concat(...a…' > Error 1/1 1`] = `
"
> 1 | const A = class extends[].concat(...array){}
    |                        ^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(6): 'const A = class extends[].concat(...a…' > Output 1`] = `
"
  1 | const A = class extends array.flat(){}
"
`;

exports[`invalid(7): '[].concat.call([], ((maybeArray)))' > Code 1`] = `
"
  1 | [].concat.call([], ((maybeArray)))
"
`;

exports[`invalid(7): '[].concat.call([], ((maybeArray)))' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], ((maybeArray)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(7): '[].concat.call([], ((maybeArray)))' > Output 1`] = `
"
  1 | [((maybeArray))].flat()
"
`;

exports[`invalid(7): 'Array.prototype.concat.apply([], arra…' > Code 1`] = `
"
  1 | Array.prototype.concat.apply([], array)
"
`;

exports[`invalid(7): 'Array.prototype.concat.apply([], arra…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.apply([], array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(7): 'Array.prototype.concat.apply([], arra…' > Options 1`] = `
"
[
  {
    "functions": [
      "flat",
      "utils.flat",
      "globalThis.lodash.flatten"
    ]
  }
]
"
`;

exports[`invalid(7): 'Array.prototype.concat.apply([], arra…' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(7): 'Array.prototype.concat.call([], ((may…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], ((maybeArray)))
"
`;

exports[`invalid(7): 'Array.prototype.concat.call([], ((may…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], ((maybeArray)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(7): 'Array.prototype.concat.call([], ((may…' > Output 1`] = `
"
  1 | [((maybeArray))].flat()
"
`;

exports[`invalid(7): 'async function a() { return _.flatten…' > Code 1`] = `
"
  1 | async function a() { return _.flatten(await getArray()); }
"
`;

exports[`invalid(7): 'async function a() { return _.flatten…' > Error 1/1 1`] = `
"
> 1 | async function a() { return _.flatten(await getArray()); }
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`_.flatten()\` to flatten an array.
"
`;

exports[`invalid(7): 'async function a() { return _.flatten…' > Output 1`] = `
"
  1 | async function a() { return (await getArray()).flat(); }
"
`;

exports[`invalid(8): '[].concat.call([], [foo])' > Code 1`] = `
"
  1 | [].concat.call([], [foo])
"
`;

exports[`invalid(8): '[].concat.call([], [foo])' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], [foo])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(8): '[].concat.call([], [foo])' > Output 1`] = `
"
  1 | [[foo]].flat()
"
`;

exports[`invalid(8): 'Array.prototype.concat.call([], [foo])' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], [foo])
"
`;

exports[`invalid(8): 'Array.prototype.concat.call([], [foo])' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], [foo])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(8): 'Array.prototype.concat.call([], [foo])' > Output 1`] = `
"
  1 | [[foo]].flat()
"
`;

exports[`invalid(8): 'async function a() { return _.flatten…' > Code 1`] = `
"
  1 | async function a() { return _.flatten((await getArray())); }
"
`;

exports[`invalid(8): 'async function a() { return _.flatten…' > Error 1/1 1`] = `
"
> 1 | async function a() { return _.flatten((await getArray())); }
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`_.flatten()\` to flatten an array.
"
`;

exports[`invalid(8): 'async function a() { return _.flatten…' > Output 1`] = `
"
  1 | async function a() { return (await getArray()).flat(); }
"
`;

exports[`invalid(9): '[].concat.call([], [[foo]])' > Code 1`] = `
"
  1 | [].concat.call([], [[foo]])
"
`;

exports[`invalid(9): '[].concat.call([], [[foo]])' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], [[foo]])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(9): '[].concat.call([], [[foo]])' > Output 1`] = `
"
  1 | [[[foo]]].flat()
"
`;

exports[`invalid(9): 'Array.prototype.concat.call([], [[foo…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], [[foo]])
"
`;

exports[`invalid(9): 'Array.prototype.concat.call([], [[foo…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], [[foo]])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(9): 'Array.prototype.concat.call([], [[foo…' > Output 1`] = `
"
  1 | [[[foo]]].flat()
"
`;

exports[`invalid(9): 'before()\\nArray.prototype.concat.appl…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.apply([], 1)
"
`;

exports[`invalid(9): 'before()\\nArray.prototype.concat.appl…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.apply([], 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(9): 'before()\\nArray.prototype.concat.appl…' > Output 1`] = `
"
  1 | before()
  2 | ;(1).flat()
"
`;

exports[`invalid(10): '[].concat.call([], ...array)' > Code 1`] = `
"
  1 | [].concat.call([], ...array)
"
`;

exports[`invalid(10): '[].concat.call([], ...array)' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], ...array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(10): '[].concat.call([], ...array)' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(10): 'Array.prototype.concat.call([], ...ar…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], ...array)
"
`;

exports[`invalid(10): 'Array.prototype.concat.call([], ...ar…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], ...array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(10): 'Array.prototype.concat.call([], ...ar…' > Output 1`] = `
"
  1 | array.flat()
"
`;

exports[`invalid(10): 'before()\\nArray.prototype.concat.call…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.call([], 1)
"
`;

exports[`invalid(10): 'before()\\nArray.prototype.concat.call…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.call([], 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(10): 'before()\\nArray.prototype.concat.call…' > Output 1`] = `
"
  1 | before()
  2 | ;[1].flat()
"
`;

exports[`invalid(11): '[].concat.call([], ...((0, array)))' > Code 1`] = `
"
  1 | [].concat.call([], ...((0, array)))
"
`;

exports[`invalid(11): '[].concat.call([], ...((0, array)))' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], ...((0, array)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(11): '[].concat.call([], ...((0, array)))' > Output 1`] = `
"
  1 | ((0, array)).flat()
"
`;

exports[`invalid(11): 'Array.prototype.concat.call([], ...((…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], ...((0, array)))
"
`;

exports[`invalid(11): 'Array.prototype.concat.call([], ...((…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], ...((0, array)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(11): 'Array.prototype.concat.call([], ...((…' > Output 1`] = `
"
  1 | ((0, array)).flat()
"
`;

exports[`invalid(11): 'before()\\nArray.prototype.concat.appl…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.apply([], 1.)
"
`;

exports[`invalid(11): 'before()\\nArray.prototype.concat.appl…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.apply([], 1.)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(11): 'before()\\nArray.prototype.concat.appl…' > Output 1`] = `
"
  1 | before()
  2 | 1..flat()
"
`;

exports[`invalid(12): '[].concat.call([], ...((array)))' > Code 1`] = `
"
  1 | [].concat.call([], ...((array)))
"
`;

exports[`invalid(12): '[].concat.call([], ...((array)))' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], ...((array)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(12): '[].concat.call([], ...((array)))' > Output 1`] = `
"
  1 | ((array)).flat()
"
`;

exports[`invalid(12): 'Array.prototype.concat.call([], ...((…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], ...((array)))
"
`;

exports[`invalid(12): 'Array.prototype.concat.call([], ...((…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], ...((array)))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(12): 'Array.prototype.concat.call([], ...((…' > Output 1`] = `
"
  1 | ((array)).flat()
"
`;

exports[`invalid(12): 'before()\\nArray.prototype.concat.call…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.call([], 1.)
"
`;

exports[`invalid(12): 'before()\\nArray.prototype.concat.call…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.call([], 1.)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(12): 'before()\\nArray.prototype.concat.call…' > Output 1`] = `
"
  1 | before()
  2 | ;[1.].flat()
"
`;

exports[`invalid(13): '[].concat.call([], ...[foo])' > Code 1`] = `
"
  1 | [].concat.call([], ...[foo])
"
`;

exports[`invalid(13): '[].concat.call([], ...[foo])' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], ...[foo])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(13): '[].concat.call([], ...[foo])' > Output 1`] = `
"
  1 | [foo].flat()
"
`;

exports[`invalid(13): 'Array.prototype.concat.call([], ...[f…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], ...[foo])
"
`;

exports[`invalid(13): 'Array.prototype.concat.call([], ...[f…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], ...[foo])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(13): 'Array.prototype.concat.call([], ...[f…' > Output 1`] = `
"
  1 | [foo].flat()
"
`;

exports[`invalid(13): 'before()\\nArray.prototype.concat.appl…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.apply([], .1)
"
`;

exports[`invalid(13): 'before()\\nArray.prototype.concat.appl…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.apply([], .1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(13): 'before()\\nArray.prototype.concat.appl…' > Output 1`] = `
"
  1 | before()
  2 | ;.1.flat()
"
`;

exports[`invalid(14): '[].concat.call([], ...[[foo]])' > Code 1`] = `
"
  1 | [].concat.call([], ...[[foo]])
"
`;

exports[`invalid(14): '[].concat.call([], ...[[foo]])' > Error 1/1 1`] = `
"
> 1 | [].concat.call([], ...[[foo]])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(14): '[].concat.call([], ...[[foo]])' > Output 1`] = `
"
  1 | [[foo]].flat()
"
`;

exports[`invalid(14): 'Array.prototype.concat.call([], ...[[…' > Code 1`] = `
"
  1 | Array.prototype.concat.call([], ...[[foo]])
"
`;

exports[`invalid(14): 'Array.prototype.concat.call([], ...[[…' > Error 1/1 1`] = `
"
> 1 | Array.prototype.concat.call([], ...[[foo]])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(14): 'Array.prototype.concat.call([], ...[[…' > Output 1`] = `
"
  1 | [[foo]].flat()
"
`;

exports[`invalid(14): 'before()\\nArray.prototype.concat.call…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.call([], .1)
"
`;

exports[`invalid(14): 'before()\\nArray.prototype.concat.call…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.call([], .1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(14): 'before()\\nArray.prototype.concat.call…' > Output 1`] = `
"
  1 | before()
  2 | ;[.1].flat()
"
`;

exports[`invalid(15): 'before()\\nArray.prototype.concat.appl…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.apply([], 1.0)
"
`;

exports[`invalid(15): 'before()\\nArray.prototype.concat.appl…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.apply([], 1.0)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(15): 'before()\\nArray.prototype.concat.appl…' > Output 1`] = `
"
  1 | before()
  2 | 1.0.flat()
"
`;

exports[`invalid(15): 'function foo(){return[].concat.call([…' > Code 1`] = `
"
  1 | function foo(){return[].concat.call([], ...array)}
"
`;

exports[`invalid(15): 'function foo(){return[].concat.call([…' > Error 1/1 1`] = `
"
> 1 | function foo(){return[].concat.call([], ...array)}
    |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(15): 'function foo(){return[].concat.call([…' > Output 1`] = `
"
  1 | function foo(){return array.flat()}
"
`;

exports[`invalid(16): 'before()\\nArray.prototype.concat.call…' > Code 1`] = `
"
  1 | before()
  2 | Array.prototype.concat.call([], 1.0)
"
`;

exports[`invalid(16): 'before()\\nArray.prototype.concat.call…' > Error 1/1 1`] = `
"
  1 | before()
> 2 | Array.prototype.concat.call([], 1.0)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`Array.prototype.concat()\` to flatten an array.
"
`;

exports[`invalid(16): 'before()\\nArray.prototype.concat.call…' > Output 1`] = `
"
  1 | before()
  2 | ;[1.0].flat()
"
`;

exports[`invalid(17): '[].concat(some./**/array)' > Code 1`] = `
"
  1 | [].concat(some./**/array)
"
`;

exports[`invalid(17): '[].concat(some./**/array)' > Error 1/1 1`] = `
"
> 1 | [].concat(some./**/array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(17): '[].concat(some./**/array)' > Output 1`] = `
"
  1 | [some./**/array].flat()
"
`;

exports[`invalid(18): '[/**/].concat(some./**/array)' > Code 1`] = `
"
  1 | [/**/].concat(some./**/array)
"
`;

exports[`invalid(18): '[/**/].concat(some./**/array)' > Error 1/1 1`] = `
"
> 1 | [/**/].concat(some./**/array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;

exports[`invalid(19): '[/**/].concat(some.array)' > Code 1`] = `
"
  1 | [/**/].concat(some.array)
"
`;

exports[`invalid(19): '[/**/].concat(some.array)' > Error 1/1 1`] = `
"
> 1 | [/**/].concat(some.array)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Array#flat()\` over \`[].concat()\` to flatten an array.
"
`;
