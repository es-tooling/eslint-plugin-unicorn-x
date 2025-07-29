// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'array.every(() => {}, thisArgument)' > Code 1`] = `
"
  1 | array.every(() => {}, thisArgument)
"
`;

exports[`invalid(0): 'array.every(() => {}, thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.every(() => {}, thisArgument)
    |                       ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#every()\`.
"
`;

exports[`invalid(0): 'array.every(() => {}, thisArgument)' > Output 1`] = `
"
  1 | array.every(() => {})
"
`;

exports[`invalid(0): 'array.map(callback, thisArgument)' > Code 1`] = `
"
  1 | array.map(callback, thisArgument)
"
`;

exports[`invalid(0): 'array.map(callback, thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.map(callback, thisArgument)
    |                     ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map(callback)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map(callback.bind(thisArgument))
"
`;

exports[`invalid(1): 'Array.from(iterableOrArrayLike, callb…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, callback, thisArgument)
"
`;

exports[`invalid(1): 'Array.from(iterableOrArrayLike, callb…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, callback, thisArgument)
    |                                           ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, callback)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, callback.bind(thisArgument))
"
`;

exports[`invalid(1): 'array.filter(() => {}, thisArgument)' > Code 1`] = `
"
  1 | array.filter(() => {}, thisArgument)
"
`;

exports[`invalid(1): 'array.filter(() => {}, thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.filter(() => {}, thisArgument)
    |                        ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#filter()\`.
"
`;

exports[`invalid(1): 'array.filter(() => {}, thisArgument)' > Output 1`] = `
"
  1 | array.filter(() => {})
"
`;

exports[`invalid(2): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, callback, thisArgument)
"
`;

exports[`invalid(2): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, callback, thisArgument)
    |                                                ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, callback)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.fromAsync(iterableOrArrayLike, callback.bind(thisArgument))
"
`;

exports[`invalid(2): 'array.find(() => {}, thisArgument)' > Code 1`] = `
"
  1 | array.find(() => {}, thisArgument)
"
`;

exports[`invalid(2): 'array.find(() => {}, thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.find(() => {}, thisArgument)
    |                      ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#find()\`.
"
`;

exports[`invalid(2): 'array.find(() => {}, thisArgument)' > Output 1`] = `
"
  1 | array.find(() => {})
"
`;

exports[`invalid(3): 'array.findIndex(() => {}, thisArgumen…' > Code 1`] = `
"
  1 | array.findIndex(() => {}, thisArgument)
"
`;

exports[`invalid(3): 'array.findIndex(() => {}, thisArgumen…' > Error 1/1 1`] = `
"
> 1 | array.findIndex(() => {}, thisArgument)
    |                           ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#findIndex()\`.
"
`;

exports[`invalid(3): 'array.findIndex(() => {}, thisArgumen…' > Output 1`] = `
"
  1 | array.findIndex(() => {})
"
`;

exports[`invalid(3): 'array.map(callback, (0, thisArgument))' > Code 1`] = `
"
  1 | array.map(callback, (0, thisArgument))
"
`;

exports[`invalid(3): 'array.map(callback, (0, thisArgument))' > Error 1/1 1`] = `
"
> 1 | array.map(callback, (0, thisArgument))
    |                      ^^^^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map(callback)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map(callback.bind((0, thisArgument)))
"
`;

exports[`invalid(4): 'Array.from(iterableOrArrayLike, callb…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, callback, (0, thisArgument))
"
`;

exports[`invalid(4): 'Array.from(iterableOrArrayLike, callb…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, callback, (0, thisArgument))
    |                                            ^^^^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, callback)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, callback.bind((0, thisArgument)))
"
`;

exports[`invalid(4): 'array.findLast(() => {}, thisArgument)' > Code 1`] = `
"
  1 | array.findLast(() => {}, thisArgument)
"
`;

exports[`invalid(4): 'array.findLast(() => {}, thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.findLast(() => {}, thisArgument)
    |                          ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#findLast()\`.
"
`;

exports[`invalid(4): 'array.findLast(() => {}, thisArgument)' > Output 1`] = `
"
  1 | array.findLast(() => {})
"
`;

exports[`invalid(5): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, callback, (0, thisArgument))
"
`;

exports[`invalid(5): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, callback, (0, thisArgument))
    |                                                 ^^^^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, callback)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.fromAsync(iterableOrArrayLike, callback.bind((0, thisArgument)))
"
`;

exports[`invalid(5): 'array.findLastIndex(() => {}, thisArg…' > Code 1`] = `
"
  1 | array.findLastIndex(() => {}, thisArgument)
"
`;

exports[`invalid(5): 'array.findLastIndex(() => {}, thisArg…' > Error 1/1 1`] = `
"
> 1 | array.findLastIndex(() => {}, thisArgument)
    |                               ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#findLastIndex()\`.
"
`;

exports[`invalid(5): 'array.findLastIndex(() => {}, thisArg…' > Output 1`] = `
"
  1 | array.findLastIndex(() => {})
"
`;

exports[`invalid(6): 'array.flatMap(() => {}, thisArgument)' > Code 1`] = `
"
  1 | array.flatMap(() => {}, thisArgument)
"
`;

exports[`invalid(6): 'array.flatMap(() => {}, thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.flatMap(() => {}, thisArgument)
    |                         ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#flatMap()\`.
"
`;

exports[`invalid(6): 'array.flatMap(() => {}, thisArgument)' > Output 1`] = `
"
  1 | array.flatMap(() => {})
"
`;

exports[`invalid(6): 'array.map(function () {}, thisArgumen…' > Code 1`] = `
"
  1 | array.map(function () {}, thisArgument)
"
`;

exports[`invalid(6): 'array.map(function () {}, thisArgumen…' > Error 1/1 1`] = `
"
> 1 | array.map(function () {}, thisArgument)
    |                           ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map(function () {})

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map(function () {}.bind(thisArgument))
"
`;

exports[`invalid(7): 'Array.from(iterableOrArrayLike, funct…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, function () {}, thisArgument)
"
`;

exports[`invalid(7): 'Array.from(iterableOrArrayLike, funct…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, function () {}, thisArgument)
    |                                                 ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, function () {})

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, function () {}.bind(thisArgument))
"
`;

exports[`invalid(7): 'array.forEach(() => {}, thisArgument)' > Code 1`] = `
"
  1 | array.forEach(() => {}, thisArgument)
"
`;

exports[`invalid(7): 'array.forEach(() => {}, thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.forEach(() => {}, thisArgument)
    |                         ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#forEach()\`.
"
`;

exports[`invalid(7): 'array.forEach(() => {}, thisArgument)' > Output 1`] = `
"
  1 | array.forEach(() => {})
"
`;

exports[`invalid(8): 'array.map(() => {}, thisArgument)' > Code 1`] = `
"
  1 | array.map(() => {}, thisArgument)
"
`;

exports[`invalid(8): 'array.map(() => {}, thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.map(() => {}, thisArgument)
    |                     ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.
"
`;

exports[`invalid(8): 'array.map(() => {}, thisArgument)' > Output 1`] = `
"
  1 | array.map(() => {})
"
`;

exports[`invalid(8): 'array.map(function callback () {}, th…' > Code 1`] = `
"
  1 | array.map(function callback () {}, thisArgument)
"
`;

exports[`invalid(8): 'array.map(function callback () {}, th…' > Error 1/1 1`] = `
"
> 1 | array.map(function callback () {}, thisArgument)
    |                                    ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map(function callback () {})

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map(function callback () {}.bind(thisArgument))
"
`;

exports[`invalid(9): 'Array.from(iterableOrArrayLike, () =>…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, () => {}, thisArgument)
"
`;

exports[`invalid(9): 'Array.from(iterableOrArrayLike, () =>…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, () => {}, thisArgument)
    |                                           ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.
"
`;

exports[`invalid(9): 'Array.from(iterableOrArrayLike, () =>…' > Output 1`] = `
"
  1 | Array.from(iterableOrArrayLike, () => {})
"
`;

exports[`invalid(9): 'Array.from(iterableOrArrayLike, funct…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, function callback () {}, thisArgument)
"
`;

exports[`invalid(9): 'Array.from(iterableOrArrayLike, funct…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, function callback () {}, thisArgument)
    |                                                          ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, function callback () {})

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, function callback () {}.bind(thisArgument))
"
`;

exports[`invalid(10): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, () => {}, thisArgument)
"
`;

exports[`invalid(10): 'Array.fromAsync(iterableOrArrayLike, …' > Code 2`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, function callback () {}, thisArgument)
"
`;

exports[`invalid(10): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, () => {}, thisArgument)
    |                                                ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.
"
`;

exports[`invalid(10): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 2`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, function callback () {}, thisArgument)
    |                                                               ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, function callback () {})

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.fromAsync(iterableOrArrayLike, function callback () {}.bind(thisArgument))
"
`;

exports[`invalid(10): 'Array.fromAsync(iterableOrArrayLike, …' > Output 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, () => {})
"
`;

exports[`invalid(11): 'array.map( foo as bar, (( thisArgumen…' > Code 1`] = `
"
  1 | array.map( foo as bar, (( thisArgument )),)
"
`;

exports[`invalid(11): 'array.map( foo as bar, (( thisArgumen…' > Error 1/1 1`] = `
"
> 1 | array.map( foo as bar, (( thisArgument )),)
    |                           ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map( foo as bar,)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map( (foo as bar).bind((( thisArgument ))),)
"
`;

exports[`invalid(11): 'array.map(() => {}, thisArgument,)' > Code 1`] = `
"
  1 | array.map(() => {}, thisArgument,)
"
`;

exports[`invalid(11): 'array.map(() => {}, thisArgument,)' > Error 1/1 1`] = `
"
> 1 | array.map(() => {}, thisArgument,)
    |                     ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.
"
`;

exports[`invalid(11): 'array.map(() => {}, thisArgument,)' > Output 1`] = `
"
  1 | array.map(() => {},)
"
`;

exports[`invalid(12): 'Array.from(iterableOrArrayLike, foo a…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, foo as bar, (( thisArgument )),)
"
`;

exports[`invalid(12): 'Array.from(iterableOrArrayLike, foo a…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, foo as bar, (( thisArgument )),)
    |                                                ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, foo as bar,)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, (foo as bar).bind((( thisArgument ))),)
"
`;

exports[`invalid(12): 'array.map(() => {}, (0, thisArgument)…' > Code 1`] = `
"
  1 | array.map(() => {}, (0, thisArgument),)
"
`;

exports[`invalid(12): 'array.map(() => {}, (0, thisArgument)…' > Error 1/1 1`] = `
"
> 1 | array.map(() => {}, (0, thisArgument),)
    |                      ^^^^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.
"
`;

exports[`invalid(12): 'array.map(() => {}, (0, thisArgument)…' > Output 1`] = `
"
  1 | array.map(() => {},)
"
`;

exports[`invalid(13): 'Array.from(iterableOrArrayLike, () =>…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, () => {}, thisArgument,)
"
`;

exports[`invalid(13): 'Array.from(iterableOrArrayLike, () =>…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, () => {}, thisArgument,)
    |                                           ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.
"
`;

exports[`invalid(13): 'Array.from(iterableOrArrayLike, () =>…' > Output 1`] = `
"
  1 | Array.from(iterableOrArrayLike, () => {},)
"
`;

exports[`invalid(13): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, foo as bar, (( thisArgument )),)
"
`;

exports[`invalid(13): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, foo as bar, (( thisArgument )),)
    |                                                     ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, foo as bar,)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.fromAsync(iterableOrArrayLike, (foo as bar).bind((( thisArgument ))),)
"
`;

exports[`invalid(14): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, () => {}, thisArgument,)
"
`;

exports[`invalid(14): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, () => {}, thisArgument,)
    |                                                ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.
"
`;

exports[`invalid(14): 'Array.fromAsync(iterableOrArrayLike, …' > Output 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, () => {},)
"
`;

exports[`invalid(14): 'array.map( (( foo as bar )), (( thisA…' > Code 1`] = `
"
  1 | array.map( (( foo as bar )), (( thisArgument )),)
"
`;

exports[`invalid(14): 'array.map( (( foo as bar )), (( thisA…' > Error 1/1 1`] = `
"
> 1 | array.map( (( foo as bar )), (( thisArgument )),)
    |                                 ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map( (( foo as bar )),)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map( (( foo as bar )).bind((( thisArgument ))),)
"
`;

exports[`invalid(15): 'Array.from(iterableOrArrayLike, (( fo…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, (( foo as bar )), (( thisArgument )),)
"
`;

exports[`invalid(15): 'Array.from(iterableOrArrayLike, (( fo…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, (( foo as bar )), (( thisArgument )),)
    |                                                      ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, (( foo as bar )),)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, (( foo as bar )).bind((( thisArgument ))),)
"
`;

exports[`invalid(15): 'array.map(() => {}, thisArgumentHasSi…' > Code 1`] = `
"
  1 | array.map(() => {}, thisArgumentHasSideEffect())
"
`;

exports[`invalid(15): 'array.map(() => {}, thisArgumentHasSi…' > Error 1/1 1`] = `
"
> 1 | array.map(() => {}, thisArgumentHasSideEffect())
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this argument.
  1 | array.map(() => {})
"
`;

exports[`invalid(16): 'Array.from(iterableOrArrayLike, () =>…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, () => {}, thisArgumentHasSideEffect())
"
`;

exports[`invalid(16): 'Array.from(iterableOrArrayLike, () =>…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, () => {}, thisArgumentHasSideEffect())
    |                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this argument.
  1 | Array.from(iterableOrArrayLike, () => {})
"
`;

exports[`invalid(16): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, (( foo as bar )), (( thisArgument )),)
"
`;

exports[`invalid(16): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, (( foo as bar )), (( thisArgument )),)
    |                                                           ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, (( foo as bar )),)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.fromAsync(iterableOrArrayLike, (( foo as bar )).bind((( thisArgument ))),)
"
`;

exports[`invalid(17): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, () => {}, thisArgumentHasSideEffect())
"
`;

exports[`invalid(17): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, () => {}, thisArgumentHasSideEffect())
    |                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, () => {})
"
`;

exports[`invalid(17): 'array.map( (( 0, callback )), (( this…' > Code 1`] = `
"
  1 | array.map( (( 0, callback )), (( thisArgument )),)
"
`;

exports[`invalid(17): 'array.map( (( 0, callback )), (( this…' > Error 1/1 1`] = `
"
> 1 | array.map( (( 0, callback )), (( thisArgument )),)
    |                                  ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map( (( 0, callback )),)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map( (( 0, callback )).bind((( thisArgument ))),)
"
`;

exports[`invalid(18): 'Array.from(iterableOrArrayLike, (( 0,…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, (( 0, callback )), (( thisArgument )),)
"
`;

exports[`invalid(18): 'Array.from(iterableOrArrayLike, (( 0,…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, (( 0, callback )), (( thisArgument )),)
    |                                                       ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, (( 0, callback )),)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, (( 0, callback )).bind((( thisArgument ))),)
"
`;

exports[`invalid(19): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, (( 0, callback )), (( thisArgument )),)
"
`;

exports[`invalid(19): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, (( 0, callback )), (( thisArgument )),)
    |                                                            ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, (( 0, callback )),)

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.fromAsync(iterableOrArrayLike, (( 0, callback )).bind((( thisArgument ))),)
"
`;

exports[`invalid(20): 'array.map((0, () => {}), thisArgument)' > Code 1`] = `
"
  1 | array.map((0, () => {}), thisArgument)
"
`;

exports[`invalid(20): 'array.map((0, () => {}), thisArgument)' > Error 1/1 1`] = `
"
> 1 | array.map((0, () => {}), thisArgument)
    |                          ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map((0, () => {}))

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map((0, () => {}).bind(thisArgument))
"
`;

exports[`invalid(21): 'Array.from(iterableOrArrayLike, (0, (…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, (0, () => {}), thisArgument)
"
`;

exports[`invalid(21): 'Array.from(iterableOrArrayLike, (0, (…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, (0, () => {}), thisArgument)
    |                                                ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, (0, () => {}))

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, (0, () => {}).bind(thisArgument))
"
`;

exports[`invalid(22): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, (0, () => {}), thisArgument)
"
`;

exports[`invalid(22): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, (0, () => {}), thisArgument)
    |                                                     ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, (0, () => {}))

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.fromAsync(iterableOrArrayLike, (0, () => {}).bind(thisArgument))
"
`;

exports[`invalid(23): 'array.map(callback.bind(foo), thisArg…' > Code 1`] = `
"
  1 | array.map(callback.bind(foo), thisArgument)
"
`;

exports[`invalid(23): 'array.map(callback.bind(foo), thisArg…' > Error 1/1 1`] = `
"
> 1 | array.map(callback.bind(foo), thisArgument)
    |                               ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array#map()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | array.map(callback.bind(foo))

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | array.map(callback.bind(foo).bind(thisArgument))
"
`;

exports[`invalid(24): 'Array.from(iterableOrArrayLike, callb…' > Code 1`] = `
"
  1 | Array.from(iterableOrArrayLike, callback.bind(foo), thisArgument)
"
`;

exports[`invalid(24): 'Array.from(iterableOrArrayLike, callb…' > Error 1/1 1`] = `
"
> 1 | Array.from(iterableOrArrayLike, callback.bind(foo), thisArgument)
    |                                                     ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.from()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.from(iterableOrArrayLike, callback.bind(foo))

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.from(iterableOrArrayLike, callback.bind(foo).bind(thisArgument))
"
`;

exports[`invalid(25): 'Array.fromAsync(iterableOrArrayLike, …' > Code 1`] = `
"
  1 | Array.fromAsync(iterableOrArrayLike, callback.bind(foo), thisArgument)
"
`;

exports[`invalid(25): 'Array.fromAsync(iterableOrArrayLike, …' > Error 1/1 1`] = `
"
> 1 | Array.fromAsync(iterableOrArrayLike, callback.bind(foo), thisArgument)
    |                                                          ^^^^^^^^^^^^ Do not use the \`this\` argument in \`Array.fromAsync()\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this argument.
  1 | Array.fromAsync(iterableOrArrayLike, callback.bind(foo))

--------------------------------------------------------------------------------
Suggestion 2/2: Use a bound function.
  1 | Array.fromAsync(iterableOrArrayLike, callback.bind(foo).bind(thisArgument))
"
`;
