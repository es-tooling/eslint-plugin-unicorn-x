// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'Promise.all([promise])' > Code 1`] = `
"
  1 | Promise.all([promise])
"
`;

exports[`invalid(0): 'Promise.all([promise])' > Error 1/1 1`] = `
"
> 1 | Promise.all([promise])
    |             ^^^^^^^^^ Wrapping single-element array with \`Promise.all()\` is unnecessary.
"
`;

exports[`invalid(0): 'Promise.race([promise,],)' > Code 1`] = `
"
  1 | Promise.race([promise,],)
"
`;

exports[`invalid(0): 'Promise.race([promise,],)' > Error 1/1 1`] = `
"
> 1 | Promise.race([promise,],)
    |              ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | promise

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(promise,)
"
`;

exports[`invalid(0): 'await Promise.race([(0, promise)])' > Code 1`] = `
"
  1 | await Promise.race([(0, promise)])
"
`;

exports[`invalid(0): 'await Promise.race([(0, promise)])' > Error 1/1 1`] = `
"
> 1 | await Promise.race([(0, promise)])
    |                    ^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(0): 'await Promise.race([(0, promise)])' > Output 1`] = `
"
  1 | await (0, promise)
"
`;

exports[`invalid(1): 'async function * foo() {await Promise…' > Code 1`] = `
"
  1 | async function * foo() {await Promise.race([yield promise])}
"
`;

exports[`invalid(1): 'async function * foo() {await Promise…' > Error 1/1 1`] = `
"
> 1 | async function * foo() {await Promise.race([yield promise])}
    |                                            ^^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(1): 'async function * foo() {await Promise…' > Output 1`] = `
"
  1 | async function * foo() {await (yield promise)}
"
`;

exports[`invalid(1): 'await Promise.all([promise])' > Code 1`] = `
"
  1 | await Promise.all([promise])
"
`;

exports[`invalid(1): 'await Promise.all([promise])' > Error 1/1 1`] = `
"
> 1 | await Promise.all([promise])
    |                   ^^^^^^^^^ Wrapping single-element array with \`Promise.all()\` is unnecessary.
"
`;

exports[`invalid(1): 'await Promise.all([promise])' > Output 1`] = `
"
  1 | await promise
"
`;

exports[`invalid(1): 'foo\\nPromise.race([(0, promise),],)' > Code 1`] = `
"
  1 | foo
  2 | Promise.race([(0, promise),],)
"
`;

exports[`invalid(1): 'foo\\nPromise.race([(0, promise),],)' > Error 1/1 1`] = `
"
  1 | foo
> 2 | Promise.race([(0, promise),],)
    |              ^^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | foo
  2 | ;(0, promise)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | foo
  2 | Promise.resolve((0, promise),)
"
`;

exports[`invalid(2): 'async function * foo() {await Promise…' > Code 1`] = `
"
  1 | async function * foo() {await Promise.race([yield* promise])}
"
`;

exports[`invalid(2): 'async function * foo() {await Promise…' > Error 1/1 1`] = `
"
> 1 | async function * foo() {await Promise.race([yield* promise])}
    |                                            ^^^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(2): 'async function * foo() {await Promise…' > Output 1`] = `
"
  1 | async function * foo() {await (yield* promise)}
"
`;

exports[`invalid(2): 'const foo = () => Promise.all([promis…' > Code 1`] = `
"
  1 | const foo = () => Promise.all([promise])
"
`;

exports[`invalid(2): 'const foo = () => Promise.all([promis…' > Error 1/1 1`] = `
"
> 1 | const foo = () => Promise.all([promise])
    |                               ^^^^^^^^^ Wrapping single-element array with \`Promise.all()\` is unnecessary.
"
`;

exports[`invalid(2): 'foo\\nPromise.race([[array][0],],)' > Code 1`] = `
"
  1 | foo
  2 | Promise.race([[array][0],],)
"
`;

exports[`invalid(2): 'foo\\nPromise.race([[array][0],],)' > Error 1/1 1`] = `
"
  1 | foo
> 2 | Promise.race([[array][0],],)
    |              ^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | foo
  2 | ;[array][0]

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | foo
  2 | Promise.resolve([array][0],)
"
`;

exports[`invalid(3): 'Promise.race([promise]).then()' > Code 1`] = `
"
  1 | Promise.race([promise]).then()
"
`;

exports[`invalid(3): 'Promise.race([promise]).then()' > Error 1/1 1`] = `
"
> 1 | Promise.race([promise]).then()
    |              ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | promise.then()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(promise).then()
"
`;

exports[`invalid(3): 'await Promise.race([() => promise,],)' > Code 1`] = `
"
  1 | await Promise.race([() => promise,],)
"
`;

exports[`invalid(3): 'await Promise.race([() => promise,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([() => promise,],)
    |                    ^^^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(3): 'await Promise.race([() => promise,],)' > Output 1`] = `
"
  1 | await (() => promise)
"
`;

exports[`invalid(3): 'const foo = await Promise.all([promis…' > Code 1`] = `
"
  1 | const foo = await Promise.all([promise])
"
`;

exports[`invalid(3): 'const foo = await Promise.all([promis…' > Error 1/1 1`] = `
"
> 1 | const foo = await Promise.all([promise])
    |                               ^^^^^^^^^ Wrapping single-element array with \`Promise.all()\` is unnecessary.
"
`;

exports[`invalid(4): 'Promise.race([1]).then()' > Code 1`] = `
"
  1 | Promise.race([1]).then()
"
`;

exports[`invalid(4): 'Promise.race([1]).then()' > Error 1/1 1`] = `
"
> 1 | Promise.race([1]).then()
    |              ^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (1).then()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(1).then()
"
`;

exports[`invalid(4): 'await Promise.race([a ? b : c,],)' > Code 1`] = `
"
  1 | await Promise.race([a ? b : c,],)
"
`;

exports[`invalid(4): 'await Promise.race([a ? b : c,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([a ? b : c,],)
    |                    ^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(4): 'await Promise.race([a ? b : c,],)' > Output 1`] = `
"
  1 | await (a ? b : c)
"
`;

exports[`invalid(4): 'foo = await Promise.all([promise])' > Code 1`] = `
"
  1 | foo = await Promise.all([promise])
"
`;

exports[`invalid(4): 'foo = await Promise.all([promise])' > Error 1/1 1`] = `
"
> 1 | foo = await Promise.all([promise])
    |                         ^^^^^^^^^ Wrapping single-element array with \`Promise.all()\` is unnecessary.
"
`;

exports[`invalid(5): 'Promise.race([1.]).then()' > Code 1`] = `
"
  1 | Promise.race([1.]).then()
"
`;

exports[`invalid(5): 'Promise.race([1.]).then()' > Error 1/1 1`] = `
"
> 1 | Promise.race([1.]).then()
    |              ^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (1.).then()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(1.).then()
"
`;

exports[`invalid(5): 'await Promise.race([x ??= y,],)' > Code 1`] = `
"
  1 | await Promise.race([x ??= y,],)
"
`;

exports[`invalid(5): 'await Promise.race([x ??= y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x ??= y,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(5): 'await Promise.race([x ??= y,],)' > Output 1`] = `
"
  1 | await (x ??= y)
"
`;

exports[`invalid(5): 'const foo = await Promise.race([promi…' > Code 1`] = `
"
  1 | const foo = await Promise.race([promise])
"
`;

exports[`invalid(5): 'const foo = await Promise.race([promi…' > Error 1/1 1`] = `
"
> 1 | const foo = await Promise.race([promise])
    |                                ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(5): 'const foo = await Promise.race([promi…' > Output 1`] = `
"
  1 | const foo = await promise
"
`;

exports[`invalid(6): 'Promise.race([.1]).then()' > Code 1`] = `
"
  1 | Promise.race([.1]).then()
"
`;

exports[`invalid(6): 'Promise.race([.1]).then()' > Error 1/1 1`] = `
"
> 1 | Promise.race([.1]).then()
    |              ^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (.1).then()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(.1).then()
"
`;

exports[`invalid(6): 'await Promise.race([x ||= y,],)' > Code 1`] = `
"
  1 | await Promise.race([x ||= y,],)
"
`;

exports[`invalid(6): 'await Promise.race([x ||= y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x ||= y,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(6): 'await Promise.race([x ||= y,],)' > Output 1`] = `
"
  1 | await (x ||= y)
"
`;

exports[`invalid(6): 'const foo = () => Promise.race([promi…' > Code 1`] = `
"
  1 | const foo = () => Promise.race([promise])
"
`;

exports[`invalid(6): 'const foo = () => Promise.race([promi…' > Error 1/1 1`] = `
"
> 1 | const foo = () => Promise.race([promise])
    |                                ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | const foo = () => promise

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | const foo = () => Promise.resolve(promise)
"
`;

exports[`invalid(7): 'Promise.race([(0, promise)]).then()' > Code 1`] = `
"
  1 | Promise.race([(0, promise)]).then()
"
`;

exports[`invalid(7): 'Promise.race([(0, promise)]).then()' > Error 1/1 1`] = `
"
> 1 | Promise.race([(0, promise)]).then()
    |              ^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (0, promise).then()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve((0, promise)).then()
"
`;

exports[`invalid(7): 'await Promise.race([x &&= y,],)' > Code 1`] = `
"
  1 | await Promise.race([x &&= y,],)
"
`;

exports[`invalid(7): 'await Promise.race([x &&= y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x &&= y,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(7): 'await Promise.race([x &&= y,],)' > Output 1`] = `
"
  1 | await (x &&= y)
"
`;

exports[`invalid(7): 'foo = await Promise.race([promise])' > Code 1`] = `
"
  1 | foo = await Promise.race([promise])
"
`;

exports[`invalid(7): 'foo = await Promise.race([promise])' > Error 1/1 1`] = `
"
> 1 | foo = await Promise.race([promise])
    |                          ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(7): 'foo = await Promise.race([promise])' > Output 1`] = `
"
  1 | foo = await promise
"
`;

exports[`invalid(8): 'await Promise.race([x |= y,],)' > Code 1`] = `
"
  1 | await Promise.race([x |= y,],)
"
`;

exports[`invalid(8): 'await Promise.race([x |= y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x |= y,],)
    |                    ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(8): 'await Promise.race([x |= y,],)' > Output 1`] = `
"
  1 | await (x |= y)
"
`;

exports[`invalid(8): 'const _ = () => Promise.race([ a ?? b…' > Code 1`] = `
"
  1 | const _ = () => Promise.race([ a ?? b ,],)
"
`;

exports[`invalid(8): 'const _ = () => Promise.race([ a ?? b…' > Error 1/1 1`] = `
"
> 1 | const _ = () => Promise.race([ a ?? b ,],)
    |                              ^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | const _ = () => (a ?? b)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | const _ = () => Promise.resolve( a ?? b ,)
"
`;

exports[`invalid(8): 'const results = await Promise.any([pr…' > Code 1`] = `
"
  1 | const results = await Promise.any([promise])
"
`;

exports[`invalid(8): 'const results = await Promise.any([pr…' > Error 1/1 1`] = `
"
> 1 | const results = await Promise.any([promise])
    |                                   ^^^^^^^^^ Wrapping single-element array with \`Promise.any()\` is unnecessary.
"
`;

exports[`invalid(8): 'const results = await Promise.any([pr…' > Output 1`] = `
"
  1 | const results = await promise
"
`;

exports[`invalid(9): 'Promise.race([ {a} = 1 ,],)' > Code 1`] = `
"
  1 | Promise.race([ {a} = 1 ,],)
"
`;

exports[`invalid(9): 'Promise.race([ {a} = 1 ,],)' > Error 1/1 1`] = `
"
> 1 | Promise.race([ {a} = 1 ,],)
    |              ^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | ({a} = 1)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve( {a} = 1 ,)
"
`;

exports[`invalid(9): 'await Promise.race([x ^= y,],)' > Code 1`] = `
"
  1 | await Promise.race([x ^= y,],)
"
`;

exports[`invalid(9): 'await Promise.race([x ^= y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x ^= y,],)
    |                    ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(9): 'await Promise.race([x ^= y,],)' > Output 1`] = `
"
  1 | await (x ^= y)
"
`;

exports[`invalid(9): 'const results = await Promise.race([p…' > Code 1`] = `
"
  1 | const results = await Promise.race([promise])
"
`;

exports[`invalid(9): 'const results = await Promise.race([p…' > Error 1/1 1`] = `
"
> 1 | const results = await Promise.race([promise])
    |                                    ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(9): 'const results = await Promise.race([p…' > Output 1`] = `
"
  1 | const results = await promise
"
`;

exports[`invalid(10): 'Promise.race([ function () {} ,],)' > Code 1`] = `
"
  1 | Promise.race([ function () {} ,],)
"
`;

exports[`invalid(10): 'Promise.race([ function () {} ,],)' > Error 1/1 1`] = `
"
> 1 | Promise.race([ function () {} ,],)
    |              ^^^^^^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (function () {})

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve( function () {} ,)
"
`;

exports[`invalid(10): 'await Promise.race([x ??= y,],)' > Code 1`] = `
"
  1 | await Promise.race([x ??= y,],)
"
`;

exports[`invalid(10): 'await Promise.race([x ??= y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x ??= y,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(10): 'await Promise.race([x ??= y,],)' > Output 1`] = `
"
  1 | await (x ??= y)
"
`;

exports[`invalid(10): 'const [foo] = await Promise.all([prom…' > Code 1`] = `
"
  1 | const [foo] = await Promise.all([promise])
"
`;

exports[`invalid(10): 'const [foo] = await Promise.all([prom…' > Error 1/1 1`] = `
"
> 1 | const [foo] = await Promise.all([promise])
    |                                 ^^^^^^^^^ Wrapping single-element array with \`Promise.all()\` is unnecessary.
"
`;

exports[`invalid(11): 'Promise.race([ class {} ,],)' > Code 1`] = `
"
  1 | Promise.race([ class {} ,],)
"
`;

exports[`invalid(11): 'Promise.race([ class {} ,],)' > Error 1/1 1`] = `
"
> 1 | Promise.race([ class {} ,],)
    |              ^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (class {})

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve( class {} ,)
"
`;

exports[`invalid(11): 'await Promise.race([x ||= y,],)' > Code 1`] = `
"
  1 | await Promise.race([x ||= y,],)
"
`;

exports[`invalid(11): 'await Promise.race([x ||= y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x ||= y,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(11): 'await Promise.race([x ||= y,],)' > Output 1`] = `
"
  1 | await (x ||= y)
"
`;

exports[`invalid(12): 'Promise.race([ new Foo ,],).then()' > Code 1`] = `
"
  1 | Promise.race([ new Foo ,],).then()
"
`;

exports[`invalid(12): 'Promise.race([ new Foo ,],).then()' > Error 1/1 1`] = `
"
> 1 | Promise.race([ new Foo ,],).then()
    |              ^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (new Foo).then()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve( new Foo ,).then()
"
`;

exports[`invalid(12): 'await Promise.race([x &&= y,],)' > Code 1`] = `
"
  1 | await Promise.race([x &&= y,],)
"
`;

exports[`invalid(12): 'await Promise.race([x &&= y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x &&= y,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(12): 'await Promise.race([x &&= y,],)' > Output 1`] = `
"
  1 | await (x &&= y)
"
`;

exports[`invalid(13): 'Promise.race([ new Foo ,],).toString' > Code 1`] = `
"
  1 | Promise.race([ new Foo ,],).toString
"
`;

exports[`invalid(13): 'Promise.race([ new Foo ,],).toString' > Error 1/1 1`] = `
"
> 1 | Promise.race([ new Foo ,],).toString
    |              ^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (new Foo).toString

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve( new Foo ,).toString
"
`;

exports[`invalid(13): 'await Promise.race([x | y,],)' > Code 1`] = `
"
  1 | await Promise.race([x | y,],)
"
`;

exports[`invalid(13): 'await Promise.race([x | y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x | y,],)
    |                    ^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(13): 'await Promise.race([x | y,],)' > Output 1`] = `
"
  1 | await (x | y)
"
`;

exports[`invalid(14): 'await Promise.race([x ^ y,],)' > Code 1`] = `
"
  1 | await Promise.race([x ^ y,],)
"
`;

exports[`invalid(14): 'await Promise.race([x ^ y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x ^ y,],)
    |                    ^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(14): 'await Promise.race([x ^ y,],)' > Output 1`] = `
"
  1 | await (x ^ y)
"
`;

exports[`invalid(14): 'foo(Promise.race([promise]))' > Code 1`] = `
"
  1 | foo(Promise.race([promise]))
"
`;

exports[`invalid(14): 'foo(Promise.race([promise]))' > Error 1/1 1`] = `
"
> 1 | foo(Promise.race([promise]))
    |                  ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | foo(promise)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | foo(Promise.resolve(promise))
"
`;

exports[`invalid(15): 'Promise.race([promise]).foo = 1' > Code 1`] = `
"
  1 | Promise.race([promise]).foo = 1
"
`;

exports[`invalid(15): 'Promise.race([promise]).foo = 1' > Error 1/1 1`] = `
"
> 1 | Promise.race([promise]).foo = 1
    |              ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | promise.foo = 1

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(promise).foo = 1
"
`;

exports[`invalid(15): 'await Promise.race([x & y,],)' > Code 1`] = `
"
  1 | await Promise.race([x & y,],)
"
`;

exports[`invalid(15): 'await Promise.race([x & y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x & y,],)
    |                    ^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(15): 'await Promise.race([x & y,],)' > Output 1`] = `
"
  1 | await (x & y)
"
`;

exports[`invalid(16): 'Promise.race([promise])[0] ||= 1' > Code 1`] = `
"
  1 | Promise.race([promise])[0] ||= 1
"
`;

exports[`invalid(16): 'Promise.race([promise])[0] ||= 1' > Error 1/1 1`] = `
"
> 1 | Promise.race([promise])[0] ||= 1
    |              ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | promise[0] ||= 1

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(promise)[0] ||= 1
"
`;

exports[`invalid(16): 'await Promise.race([x !== y,],)' > Code 1`] = `
"
  1 | await Promise.race([x !== y,],)
"
`;

exports[`invalid(16): 'await Promise.race([x !== y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x !== y,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(16): 'await Promise.race([x !== y,],)' > Output 1`] = `
"
  1 | await (x !== y)
"
`;

exports[`invalid(17): 'Promise.race([undefined]).then()' > Code 1`] = `
"
  1 | Promise.race([undefined]).then()
"
`;

exports[`invalid(17): 'Promise.race([undefined]).then()' > Error 1/1 1`] = `
"
> 1 | Promise.race([undefined]).then()
    |              ^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | undefined.then()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(undefined).then()
"
`;

exports[`invalid(17): 'await Promise.race([x == y,],)' > Code 1`] = `
"
  1 | await Promise.race([x == y,],)
"
`;

exports[`invalid(17): 'await Promise.race([x == y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x == y,],)
    |                    ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(17): 'await Promise.race([x == y,],)' > Output 1`] = `
"
  1 | await (x == y)
"
`;

exports[`invalid(18): 'Promise.race([null]).then()' > Code 1`] = `
"
  1 | Promise.race([null]).then()
"
`;

exports[`invalid(18): 'Promise.race([null]).then()' > Error 1/1 1`] = `
"
> 1 | Promise.race([null]).then()
    |              ^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | (null).then()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | Promise.resolve(null).then()
"
`;

exports[`invalid(18): 'await Promise.race([x in y,],)' > Code 1`] = `
"
  1 | await Promise.race([x in y,],)
"
`;

exports[`invalid(18): 'await Promise.race([x in y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x in y,],)
    |                    ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(18): 'await Promise.race([x in y,],)' > Output 1`] = `
"
  1 | await (x in y)
"
`;

exports[`invalid(19): 'await Promise.race([x >>> y,],)' > Code 1`] = `
"
  1 | await Promise.race([x >>> y,],)
"
`;

exports[`invalid(19): 'await Promise.race([x >>> y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x >>> y,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(19): 'await Promise.race([x >>> y,],)' > Output 1`] = `
"
  1 | await (x >>> y)
"
`;

exports[`invalid(20): 'await Promise.race([x + y,],)' > Code 1`] = `
"
  1 | await Promise.race([x + y,],)
"
`;

exports[`invalid(20): 'await Promise.race([x + y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x + y,],)
    |                    ^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(20): 'await Promise.race([x + y,],)' > Output 1`] = `
"
  1 | await (x + y)
"
`;

exports[`invalid(21): 'await Promise.race([x / y,],)' > Code 1`] = `
"
  1 | await Promise.race([x / y,],)
"
`;

exports[`invalid(21): 'await Promise.race([x / y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x / y,],)
    |                    ^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(21): 'await Promise.race([x / y,],)' > Output 1`] = `
"
  1 | await (x / y)
"
`;

exports[`invalid(22): 'await Promise.race([x ** y,],)' > Code 1`] = `
"
  1 | await Promise.race([x ** y,],)
"
`;

exports[`invalid(22): 'await Promise.race([x ** y,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([x ** y,],)
    |                    ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(22): 'await Promise.race([x ** y,],)' > Output 1`] = `
"
  1 | await (x ** y)
"
`;

exports[`invalid(23): 'await Promise.race([promise,],)' > Code 1`] = `
"
  1 | await Promise.race([promise,],)
"
`;

exports[`invalid(23): 'await Promise.race([promise,],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([promise,],)
    |                    ^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(23): 'await Promise.race([promise,],)' > Output 1`] = `
"
  1 | await promise
"
`;

exports[`invalid(24): 'await Promise.race([getPromise(),],)' > Code 1`] = `
"
  1 | await Promise.race([getPromise(),],)
"
`;

exports[`invalid(24): 'await Promise.race([getPromise(),],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([getPromise(),],)
    |                    ^^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(24): 'await Promise.race([getPromise(),],)' > Output 1`] = `
"
  1 | await getPromise()
"
`;

exports[`invalid(25): 'await Promise.race([promises[0],],)' > Code 1`] = `
"
  1 | await Promise.race([promises[0],],)
"
`;

exports[`invalid(25): 'await Promise.race([promises[0],],)' > Error 1/1 1`] = `
"
> 1 | await Promise.race([promises[0],],)
    |                    ^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(25): 'await Promise.race([promises[0],],)' > Output 1`] = `
"
  1 | await promises[0]
"
`;

exports[`invalid(26): 'await Promise.race([await promise])' > Code 1`] = `
"
  1 | await Promise.race([await promise])
"
`;

exports[`invalid(26): 'await Promise.race([await promise])' > Error 1/1 1`] = `
"
> 1 | await Promise.race([await promise])
    |                    ^^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(26): 'await Promise.race([await promise])' > Output 1`] = `
"
  1 | await await promise
"
`;

exports[`invalid(27): 'await Promise.any([promise])' > Code 1`] = `
"
  1 | await Promise.any([promise])
"
`;

exports[`invalid(27): 'await Promise.any([promise])' > Error 1/1 1`] = `
"
> 1 | await Promise.any([promise])
    |                   ^^^^^^^^^ Wrapping single-element array with \`Promise.any()\` is unnecessary.
"
`;

exports[`invalid(27): 'await Promise.any([promise])' > Output 1`] = `
"
  1 | await promise
"
`;

exports[`invalid(28): 'await Promise.race([promise])' > Code 1`] = `
"
  1 | await Promise.race([promise])
"
`;

exports[`invalid(28): 'await Promise.race([promise])' > Error 1/1 1`] = `
"
> 1 | await Promise.race([promise])
    |                    ^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(28): 'await Promise.race([promise])' > Output 1`] = `
"
  1 | await promise
"
`;

exports[`invalid(29): 'await Promise.race([new Promise(() =>…' > Code 1`] = `
"
  1 | await Promise.race([new Promise(() => {})])
"
`;

exports[`invalid(29): 'await Promise.race([new Promise(() =>…' > Error 1/1 1`] = `
"
> 1 | await Promise.race([new Promise(() => {})])
    |                    ^^^^^^^^^^^^^^^^^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(29): 'await Promise.race([new Promise(() =>…' > Output 1`] = `
"
  1 | await new Promise(() => {})
"
`;

exports[`invalid(30): '+await Promise.race([+1])' > Code 1`] = `
"
  1 | +await Promise.race([+1])
"
`;

exports[`invalid(30): '+await Promise.race([+1])' > Error 1/1 1`] = `
"
> 1 | +await Promise.race([+1])
    |                     ^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
"
`;

exports[`invalid(30): '+await Promise.race([+1])' > Output 1`] = `
"
  1 | +await +1
"
`;

exports[`invalid(31): 'await Promise.race([(x,y)])\\n[0].toSt…' > Code 1`] = `
"
  1 | await Promise.race([(x,y)])
  2 | [0].toString()
"
`;

exports[`invalid(31): 'await Promise.race([(x,y)])\\n[0].toSt…' > Error 1/1 1`] = `
"
> 1 | await Promise.race([(x,y)])
    |                    ^^^^^^^ Wrapping single-element array with \`Promise.race()\` is unnecessary.
  2 | [0].toString()

--------------------------------------------------------------------------------
Suggestion 1/2: Use the value directly.
  1 | await (x,y)
  2 | [0].toString()

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Promise.resolve(…)\`.
  1 | await Promise.resolve((x,y))
  2 | [0].toString()
"
`;
