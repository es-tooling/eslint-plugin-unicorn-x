// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '[...foo.concat(bar)]' > Code 1`] = `
"
  1 | [...foo.concat(bar)]
"
`;

exports[`invalid(0): '[...foo.concat(bar)]' > Error 1/1 1`] = `
"
> 1 | [...foo.concat(bar)]
    | ^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(0): '[...foo.concat(bar)]' > Output 1`] = `
"
  1 | foo.concat(bar)
"
`;

exports[`invalid(0): 'const array = [...[a]]' > Code 1`] = `
"
  1 | const array = [...[a]]
"
`;

exports[`invalid(0): 'const array = [...[a]]' > Error 1/1 1`] = `
"
> 1 | const array = [...[a]]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(0): 'const array = [...[a]]' > Output 1`] = `
"
  1 | const array = [a]
"
`;

exports[`invalid(0): 'const map = new Map([...iterable])' > Code 1`] = `
"
  1 | const map = new Map([...iterable])
"
`;

exports[`invalid(0): 'const map = new Map([...iterable])' > Error 1/1 1`] = `
"
> 1 | const map = new Map([...iterable])
    |                     ^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(0): 'const map = new Map([...iterable])' > Output 1`] = `
"
  1 | const map = new Map(iterable)
"
`;

exports[`invalid(1): '[...foo.copyWithin(-2)]' > Code 1`] = `
"
  1 | [...foo.copyWithin(-2)]
"
`;

exports[`invalid(1): '[...foo.copyWithin(-2)]' > Error 1/1 1`] = `
"
> 1 | [...foo.copyWithin(-2)]
    | ^^^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(1): '[...foo.copyWithin(-2)]' > Output 1`] = `
"
  1 | foo.copyWithin(-2)
"
`;

exports[`invalid(1): 'const object = {...{a}}' > Code 1`] = `
"
  1 | const object = {...{a}}
"
`;

exports[`invalid(1): 'const object = {...{a}}' > Error 1/1 1`] = `
"
> 1 | const object = {...{a}}
    |                 ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(1): 'const object = {...{a}}' > Output 1`] = `
"
  1 | const object = {a}
"
`;

exports[`invalid(1): 'const weakMap = new WeakMap([...itera…' > Code 1`] = `
"
  1 | const weakMap = new WeakMap([...iterable])
"
`;

exports[`invalid(1): 'const weakMap = new WeakMap([...itera…' > Error 1/1 1`] = `
"
> 1 | const weakMap = new WeakMap([...iterable])
    |                             ^^^^^^^^^^^^^ \`new WeakMap(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(1): 'const weakMap = new WeakMap([...itera…' > Output 1`] = `
"
  1 | const weakMap = new WeakMap(iterable)
"
`;

exports[`invalid(2): '[...foo.filter(bar)]' > Code 1`] = `
"
  1 | [...foo.filter(bar)]
"
`;

exports[`invalid(2): '[...foo.filter(bar)]' > Error 1/1 1`] = `
"
> 1 | [...foo.filter(bar)]
    | ^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(2): '[...foo.filter(bar)]' > Output 1`] = `
"
  1 | foo.filter(bar)
"
`;

exports[`invalid(2): 'const set = new Set([...iterable])' > Code 1`] = `
"
  1 | const set = new Set([...iterable])
"
`;

exports[`invalid(2): 'const set = new Set([...iterable])' > Error 1/1 1`] = `
"
> 1 | const set = new Set([...iterable])
    |                     ^^^^^^^^^^^^^ \`new Set(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(2): 'const set = new Set([...iterable])' > Output 1`] = `
"
  1 | const set = new Set(iterable)
"
`;

exports[`invalid(2): 'foo(...[a])' > Code 1`] = `
"
  1 | foo(...[a])
"
`;

exports[`invalid(2): 'foo(...[a])' > Error 1/1 1`] = `
"
> 1 | foo(...[a])
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(2): 'foo(...[a])' > Output 1`] = `
"
  1 | foo(a)
"
`;

exports[`invalid(3): '[...foo.flat()]' > Code 1`] = `
"
  1 | [...foo.flat()]
"
`;

exports[`invalid(3): '[...foo.flat()]' > Error 1/1 1`] = `
"
> 1 | [...foo.flat()]
    | ^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(3): '[...foo.flat()]' > Output 1`] = `
"
  1 | foo.flat()
"
`;

exports[`invalid(3): 'const weakSet = new WeakSet([...itera…' > Code 1`] = `
"
  1 | const weakSet = new WeakSet([...iterable])
"
`;

exports[`invalid(3): 'const weakSet = new WeakSet([...itera…' > Error 1/1 1`] = `
"
> 1 | const weakSet = new WeakSet([...iterable])
    |                             ^^^^^^^^^^^^^ \`new WeakSet(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(3): 'const weakSet = new WeakSet([...itera…' > Output 1`] = `
"
  1 | const weakSet = new WeakSet(iterable)
"
`;

exports[`invalid(3): 'new Foo(...[a])' > Code 1`] = `
"
  1 | new Foo(...[a])
"
`;

exports[`invalid(3): 'new Foo(...[a])' > Error 1/1 1`] = `
"
> 1 | new Foo(...[a])
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(3): 'new Foo(...[a])' > Output 1`] = `
"
  1 | new Foo(a)
"
`;

exports[`invalid(4): '[...foo.flatMap(bar)]' > Code 1`] = `
"
  1 | [...foo.flatMap(bar)]
"
`;

exports[`invalid(4): '[...foo.flatMap(bar)]' > Error 1/1 1`] = `
"
> 1 | [...foo.flatMap(bar)]
    | ^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(4): '[...foo.flatMap(bar)]' > Output 1`] = `
"
  1 | foo.flatMap(bar)
"
`;

exports[`invalid(4): 'const array = [...[a,]]' > Code 1`] = `
"
  1 | const array = [...[a,]]
"
`;

exports[`invalid(4): 'const array = [...[a,]]' > Error 1/1 1`] = `
"
> 1 | const array = [...[a,]]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(4): 'const array = [...[a,]]' > Output 1`] = `
"
  1 | const array = [a]
"
`;

exports[`invalid(4): 'const typed = new BigUint64Array([...…' > Code 1`] = `
"
  1 | const typed = new BigUint64Array([...iterable], byteOffset, length)
"
`;

exports[`invalid(4): 'const typed = new BigUint64Array([...…' > Error 1/1 1`] = `
"
> 1 | const typed = new BigUint64Array([...iterable], byteOffset, length)
    |                                  ^^^^^^^^^^^^^ \`new BigUint64Array(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(4): 'const typed = new BigUint64Array([...…' > Output 1`] = `
"
  1 | const typed = new BigUint64Array(iterable, byteOffset, length)
"
`;

exports[`invalid(5): '[...foo.map(bar)]' > Code 1`] = `
"
  1 | [...foo.map(bar)]
"
`;

exports[`invalid(5): '[...foo.map(bar)]' > Error 1/1 1`] = `
"
> 1 | [...foo.map(bar)]
    | ^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(5): '[...foo.map(bar)]' > Output 1`] = `
"
  1 | foo.map(bar)
"
`;

exports[`invalid(5): 'const object = {...{a,}}' > Code 1`] = `
"
  1 | const object = {...{a,}}
"
`;

exports[`invalid(5): 'const object = {...{a,}}' > Error 1/1 1`] = `
"
> 1 | const object = {...{a,}}
    |                 ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(5): 'const object = {...{a,}}' > Output 1`] = `
"
  1 | const object = {a}
"
`;

exports[`invalid(5): 'const typed = new BigUint64Array([...…' > Code 1`] = `
"
  1 | const typed = new BigUint64Array([...iterable], ...args)
"
`;

exports[`invalid(5): 'const typed = new BigUint64Array([...…' > Error 1/1 1`] = `
"
> 1 | const typed = new BigUint64Array([...iterable], ...args)
    |                                  ^^^^^^^^^^^^^ \`new BigUint64Array(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(5): 'const typed = new BigUint64Array([...…' > Output 1`] = `
"
  1 | const typed = new BigUint64Array(iterable, ...args)
"
`;

exports[`invalid(6): '[...foo.slice(1)]' > Code 1`] = `
"
  1 | [...foo.slice(1)]
"
`;

exports[`invalid(6): '[...foo.slice(1)]' > Error 1/1 1`] = `
"
> 1 | [...foo.slice(1)]
    | ^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(6): 'const promise = Promise.all([...itera…' > Code 1`] = `
"
  1 | const promise = Promise.all([...iterable])
"
`;

exports[`invalid(6): 'const promise = Promise.all([...itera…' > Error 1/1 1`] = `
"
> 1 | const promise = Promise.all([...iterable])
    |                             ^^^^^^^^^^^^^ \`Promise.all(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(6): 'const promise = Promise.all([...itera…' > Output 1`] = `
"
  1 | const promise = Promise.all(iterable)
"
`;

exports[`invalid(6): 'foo(...[a,])' > Code 1`] = `
"
  1 | foo(...[a,])
"
`;

exports[`invalid(6): 'foo(...[a,])' > Error 1/1 1`] = `
"
> 1 | foo(...[a,])
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(6): 'foo(...[a,])' > Output 1`] = `
"
  1 | foo(a)
"
`;

exports[`invalid(7): '[...foo.splice(1)]' > Code 1`] = `
"
  1 | [...foo.splice(1)]
"
`;

exports[`invalid(7): '[...foo.splice(1)]' > Error 1/1 1`] = `
"
> 1 | [...foo.splice(1)]
    | ^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(7): '[...foo.splice(1)]' > Output 1`] = `
"
  1 | foo.splice(1)
"
`;

exports[`invalid(7): 'const promise = Promise.allSettled([.…' > Code 1`] = `
"
  1 | const promise = Promise.allSettled([...iterable])
"
`;

exports[`invalid(7): 'const promise = Promise.allSettled([.…' > Error 1/1 1`] = `
"
> 1 | const promise = Promise.allSettled([...iterable])
    |                                    ^^^^^^^^^^^^^ \`Promise.allSettled(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(7): 'const promise = Promise.allSettled([.…' > Output 1`] = `
"
  1 | const promise = Promise.allSettled(iterable)
"
`;

exports[`invalid(7): 'new Foo(...[a,])' > Code 1`] = `
"
  1 | new Foo(...[a,])
"
`;

exports[`invalid(7): 'new Foo(...[a,])' > Error 1/1 1`] = `
"
> 1 | new Foo(...[a,])
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(7): 'new Foo(...[a,])' > Output 1`] = `
"
  1 | new Foo(a)
"
`;

exports[`invalid(8): '[...foo.toReversed()]' > Code 1`] = `
"
  1 | [...foo.toReversed()]
"
`;

exports[`invalid(8): '[...foo.toReversed()]' > Error 1/1 1`] = `
"
> 1 | [...foo.toReversed()]
    | ^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(8): '[...foo.toReversed()]' > Output 1`] = `
"
  1 | foo.toReversed()
"
`;

exports[`invalid(8): 'const array = [...[a,],]' > Code 1`] = `
"
  1 | const array = [...[a,],]
"
`;

exports[`invalid(8): 'const array = [...[a,],]' > Error 1/1 1`] = `
"
> 1 | const array = [...[a,],]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(8): 'const array = [...[a,],]' > Output 1`] = `
"
  1 | const array = [a,]
"
`;

exports[`invalid(8): 'const promise = Promise.any([...itera…' > Code 1`] = `
"
  1 | const promise = Promise.any([...iterable])
"
`;

exports[`invalid(8): 'const promise = Promise.any([...itera…' > Error 1/1 1`] = `
"
> 1 | const promise = Promise.any([...iterable])
    |                             ^^^^^^^^^^^^^ \`Promise.any(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(8): 'const promise = Promise.any([...itera…' > Output 1`] = `
"
  1 | const promise = Promise.any(iterable)
"
`;

exports[`invalid(9): '[...foo.toSorted()]' > Code 1`] = `
"
  1 | [...foo.toSorted()]
"
`;

exports[`invalid(9): '[...foo.toSorted()]' > Error 1/1 1`] = `
"
> 1 | [...foo.toSorted()]
    | ^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(9): '[...foo.toSorted()]' > Output 1`] = `
"
  1 | foo.toSorted()
"
`;

exports[`invalid(9): 'const object = {...{a,},}' > Code 1`] = `
"
  1 | const object = {...{a,},}
"
`;

exports[`invalid(9): 'const object = {...{a,},}' > Error 1/1 1`] = `
"
> 1 | const object = {...{a,},}
    |                 ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(9): 'const object = {...{a,},}' > Output 1`] = `
"
  1 | const object = {a,}
"
`;

exports[`invalid(9): 'const promise = Promise.race([...iter…' > Code 1`] = `
"
  1 | const promise = Promise.race([...iterable])
"
`;

exports[`invalid(9): 'const promise = Promise.race([...iter…' > Error 1/1 1`] = `
"
> 1 | const promise = Promise.race([...iterable])
    |                              ^^^^^^^^^^^^^ \`Promise.race(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(9): 'const promise = Promise.race([...iter…' > Output 1`] = `
"
  1 | const promise = Promise.race(iterable)
"
`;

exports[`invalid(10): '[...foo.toSpliced(0, 1)]' > Code 1`] = `
"
  1 | [...foo.toSpliced(0, 1)]
"
`;

exports[`invalid(10): '[...foo.toSpliced(0, 1)]' > Error 1/1 1`] = `
"
> 1 | [...foo.toSpliced(0, 1)]
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(10): '[...foo.toSpliced(0, 1)]' > Output 1`] = `
"
  1 | foo.toSpliced(0, 1)
"
`;

exports[`invalid(10): 'const array = Array.from([...iterable…' > Code 1`] = `
"
  1 | const array = Array.from([...iterable])
"
`;

exports[`invalid(10): 'const array = Array.from([...iterable…' > Error 1/1 1`] = `
"
> 1 | const array = Array.from([...iterable])
    |                          ^^^^^^^^^^^^^ \`Array.from(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(10): 'const array = Array.from([...iterable…' > Output 1`] = `
"
  1 | const array = Array.from(iterable)
"
`;

exports[`invalid(10): 'foo(...[a,],)' > Code 1`] = `
"
  1 | foo(...[a,],)
"
`;

exports[`invalid(10): 'foo(...[a,],)' > Error 1/1 1`] = `
"
> 1 | foo(...[a,],)
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(10): 'foo(...[a,],)' > Output 1`] = `
"
  1 | foo(a,)
"
`;

exports[`invalid(11): '[...foo.with(0, bar)]' > Code 1`] = `
"
  1 | [...foo.with(0, bar)]
"
`;

exports[`invalid(11): '[...foo.with(0, bar)]' > Error 1/1 1`] = `
"
> 1 | [...foo.with(0, bar)]
    | ^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(11): '[...foo.with(0, bar)]' > Output 1`] = `
"
  1 | foo.with(0, bar)
"
`;

exports[`invalid(11): 'const typed = BigUint64Array.from([..…' > Code 1`] = `
"
  1 | const typed = BigUint64Array.from([...iterable])
"
`;

exports[`invalid(11): 'const typed = BigUint64Array.from([..…' > Error 1/1 1`] = `
"
> 1 | const typed = BigUint64Array.from([...iterable])
    |                                   ^^^^^^^^^^^^^ \`BigUint64Array.from(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(11): 'const typed = BigUint64Array.from([..…' > Output 1`] = `
"
  1 | const typed = BigUint64Array.from(iterable)
"
`;

exports[`invalid(11): 'new Foo(...[a,],)' > Code 1`] = `
"
  1 | new Foo(...[a,],)
"
`;

exports[`invalid(11): 'new Foo(...[a,],)' > Error 1/1 1`] = `
"
> 1 | new Foo(...[a,],)
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(11): 'new Foo(...[a,],)' > Output 1`] = `
"
  1 | new Foo(a,)
"
`;

exports[`invalid(12): '[...foo.split("|")]' > Code 1`] = `
"
  1 | [...foo.split("|")]
"
`;

exports[`invalid(12): '[...foo.split("|")]' > Error 1/1 1`] = `
"
> 1 | [...foo.split("|")]
    | ^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(12): '[...foo.split("|")]' > Output 1`] = `
"
  1 | foo.split("|")
"
`;

exports[`invalid(12): 'const array = [...(( [a] ))]' > Code 1`] = `
"
  1 | const array = [...(( [a] ))]
"
`;

exports[`invalid(12): 'const array = [...(( [a] ))]' > Error 1/1 1`] = `
"
> 1 | const array = [...(( [a] ))]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(12): 'const array = [...(( [a] ))]' > Output 1`] = `
"
  1 | const array = [ a ]
"
`;

exports[`invalid(12): 'const object = Object.fromEntries([..…' > Code 1`] = `
"
  1 | const object = Object.fromEntries([...iterable])
"
`;

exports[`invalid(12): 'const object = Object.fromEntries([..…' > Error 1/1 1`] = `
"
> 1 | const object = Object.fromEntries([...iterable])
    |                                   ^^^^^^^^^^^^^ \`Object.fromEntries(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(12): 'const object = Object.fromEntries([..…' > Output 1`] = `
"
  1 | const object = Object.fromEntries(iterable)
"
`;

exports[`invalid(13): '[...Object.keys(foo)]' > Code 1`] = `
"
  1 | [...Object.keys(foo)]
"
`;

exports[`invalid(13): '[...Object.keys(foo)]' > Error 1/1 1`] = `
"
> 1 | [...Object.keys(foo)]
    | ^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(13): '[...Object.keys(foo)]' > Output 1`] = `
"
  1 | Object.keys(foo)
"
`;

exports[`invalid(13): 'const object = {...(( {a} ))}' > Code 1`] = `
"
  1 | const object = {...(( {a} ))}
"
`;

exports[`invalid(13): 'const object = {...(( {a} ))}' > Error 1/1 1`] = `
"
> 1 | const object = {...(( {a} ))}
    |                 ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(13): 'const object = {...(( {a} ))}' > Output 1`] = `
"
  1 | const object = { a }
"
`;

exports[`invalid(13): 'for (const foo of [...iterable]);' > Code 1`] = `
"
  1 | for (const foo of [...iterable]);
"
`;

exports[`invalid(13): 'for (const foo of [...iterable]);' > Error 1/1 1`] = `
"
> 1 | for (const foo of [...iterable]);
    |                   ^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.
"
`;

exports[`invalid(13): 'for (const foo of [...iterable]);' > Output 1`] = `
"
  1 | for (const foo of iterable);
"
`;

exports[`invalid(14): '[...Object.values(foo)]' > Code 1`] = `
"
  1 | [...Object.values(foo)]
"
`;

exports[`invalid(14): '[...Object.values(foo)]' > Error 1/1 1`] = `
"
> 1 | [...Object.values(foo)]
    | ^^^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(14): '[...Object.values(foo)]' > Output 1`] = `
"
  1 | Object.values(foo)
"
`;

exports[`invalid(14): 'async () => {for await (const foo of …' > Code 1`] = `
"
  1 | async () => {for await (const foo of [...iterable]);}
"
`;

exports[`invalid(14): 'async () => {for await (const foo of …' > Error 1/1 1`] = `
"
> 1 | async () => {for await (const foo of [...iterable]);}
    |                                      ^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.
"
`;

exports[`invalid(14): 'async () => {for await (const foo of …' > Output 1`] = `
"
  1 | async () => {for await (const foo of iterable);}
"
`;

exports[`invalid(14): 'foo(...(( [a] )))' > Code 1`] = `
"
  1 | foo(...(( [a] )))
"
`;

exports[`invalid(14): 'foo(...(( [a] )))' > Error 1/1 1`] = `
"
> 1 | foo(...(( [a] )))
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(14): 'foo(...(( [a] )))' > Output 1`] = `
"
  1 | foo( a )
"
`;

exports[`invalid(15): '[...Array.from(foo)]' > Code 1`] = `
"
  1 | [...Array.from(foo)]
"
`;

exports[`invalid(15): '[...Array.from(foo)]' > Error 1/1 1`] = `
"
> 1 | [...Array.from(foo)]
    | ^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(15): '[...Array.from(foo)]' > Output 1`] = `
"
  1 | Array.from(foo)
"
`;

exports[`invalid(15): 'const map = new Map([...iterable,])' > Code 1`] = `
"
  1 | const map = new Map([...iterable,])
"
`;

exports[`invalid(15): 'const map = new Map([...iterable,])' > Error 1/1 1`] = `
"
> 1 | const map = new Map([...iterable,])
    |                     ^^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(15): 'const map = new Map([...iterable,])' > Output 1`] = `
"
  1 | const map = new Map(iterable)
"
`;

exports[`invalid(15): 'new Foo(...(( [a] )))' > Code 1`] = `
"
  1 | new Foo(...(( [a] )))
"
`;

exports[`invalid(15): 'new Foo(...(( [a] )))' > Error 1/1 1`] = `
"
> 1 | new Foo(...(( [a] )))
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(15): 'new Foo(...(( [a] )))' > Output 1`] = `
"
  1 | new Foo( a )
"
`;

exports[`invalid(16): '[...Array.of()]' > Code 1`] = `
"
  1 | [...Array.of()]
"
`;

exports[`invalid(16): '[...Array.of()]' > Error 1/1 1`] = `
"
> 1 | [...Array.of()]
    | ^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(16): '[...Array.of()]' > Output 1`] = `
"
  1 | Array.of()
"
`;

exports[`invalid(16): 'const array = [...[]]' > Code 1`] = `
"
  1 | const array = [...[]]
"
`;

exports[`invalid(16): 'const array = [...[]]' > Error 1/1 1`] = `
"
> 1 | const array = [...[]]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(16): 'const array = [...[]]' > Output 1`] = `
"
  1 | const array = []
"
`;

exports[`invalid(16): 'for (const foo of [...iterable]);' > Code 1`] = `
"
  1 | for (const foo of [...iterable]);
"
`;

exports[`invalid(16): 'for (const foo of [...iterable]);' > Error 1/1 1`] = `
"
> 1 | for (const foo of [...iterable]);
    |                   ^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.
"
`;

exports[`invalid(16): 'for (const foo of [...iterable]);' > Output 1`] = `
"
  1 | for (const foo of iterable);
"
`;

exports[`invalid(17): '[...new Array(3)]' > Code 1`] = `
"
  1 | [...new Array(3)]
"
`;

exports[`invalid(17): '[...new Array(3)]' > Error 1/1 1`] = `
"
> 1 | [...new Array(3)]
    | ^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(17): 'const map = new Map([...iterable,],)' > Code 1`] = `
"
  1 | const map = new Map([...iterable,],)
"
`;

exports[`invalid(17): 'const map = new Map([...iterable,],)' > Error 1/1 1`] = `
"
> 1 | const map = new Map([...iterable,],)
    |                     ^^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(17): 'const map = new Map([...iterable,],)' > Output 1`] = `
"
  1 | const map = new Map(iterable,)
"
`;

exports[`invalid(17): 'const object = {...{}}' > Code 1`] = `
"
  1 | const object = {...{}}
"
`;

exports[`invalid(17): 'const object = {...{}}' > Error 1/1 1`] = `
"
> 1 | const object = {...{}}
    |                 ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(17): 'const object = {...{}}' > Output 1`] = `
"
  1 | const object = {}
"
`;

exports[`invalid(18): '[...await Promise.all(foo)]' > Code 1`] = `
"
  1 | [...await Promise.all(foo)]
"
`;

exports[`invalid(18): '[...await Promise.all(foo)]' > Error 1/1 1`] = `
"
> 1 | [...await Promise.all(foo)]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(18): '[...await Promise.all(foo)]' > Output 1`] = `
"
  1 | await Promise.all(foo)
"
`;

exports[`invalid(18): 'const map = new Map([...(( iterable )…' > Code 1`] = `
"
  1 | const map = new Map([...(( iterable ))])
"
`;

exports[`invalid(18): 'const map = new Map([...(( iterable )…' > Error 1/1 1`] = `
"
> 1 | const map = new Map([...(( iterable ))])
    |                     ^^^^^^^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(18): 'const map = new Map([...(( iterable )…' > Output 1`] = `
"
  1 | const map = new Map((( iterable )))
"
`;

exports[`invalid(18): 'foo(...[])' > Code 1`] = `
"
  1 | foo(...[])
"
`;

exports[`invalid(18): 'foo(...[])' > Error 1/1 1`] = `
"
> 1 | foo(...[])
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(18): 'foo(...[])' > Output 1`] = `
"
  1 | foo()
"
`;

exports[`invalid(19): '[...await Promise.allSettled(foo)]' > Code 1`] = `
"
  1 | [...await Promise.allSettled(foo)]
"
`;

exports[`invalid(19): '[...await Promise.allSettled(foo)]' > Error 1/1 1`] = `
"
> 1 | [...await Promise.allSettled(foo)]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
"
`;

exports[`invalid(19): '[...await Promise.allSettled(foo)]' > Output 1`] = `
"
  1 | await Promise.allSettled(foo)
"
`;

exports[`invalid(19): 'for (const foo of [...(( iterable ))]…' > Code 1`] = `
"
  1 | for (const foo of [...(( iterable ))]);
"
`;

exports[`invalid(19): 'for (const foo of [...(( iterable ))]…' > Error 1/1 1`] = `
"
> 1 | for (const foo of [...(( iterable ))]);
    |                   ^^^^^^^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.
"
`;

exports[`invalid(19): 'for (const foo of [...(( iterable ))]…' > Output 1`] = `
"
  1 | for (const foo of (( iterable )));
"
`;

exports[`invalid(19): 'new Foo(...[])' > Code 1`] = `
"
  1 | new Foo(...[])
"
`;

exports[`invalid(19): 'new Foo(...[])' > Error 1/1 1`] = `
"
> 1 | new Foo(...[])
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(19): 'new Foo(...[])' > Output 1`] = `
"
  1 | new Foo()
"
`;

exports[`invalid(20): 'const array = [...[,]]' > Code 1`] = `
"
  1 | const array = [...[,]]
"
`;

exports[`invalid(20): 'const array = [...[,]]' > Error 1/1 1`] = `
"
> 1 | const array = [...[,]]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(20): 'const array = [...[,]]' > Output 1`] = `
"
  1 | const array = []
"
`;

exports[`invalid(20): 'const map = new Map((( [...(( iterabl…' > Code 1`] = `
"
  1 | const map = new Map((( [...(( iterable ))] )))
"
`;

exports[`invalid(20): 'const map = new Map((( [...(( iterabl…' > Error 1/1 1`] = `
"
> 1 | const map = new Map((( [...(( iterable ))] )))
    |                        ^^^^^^^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.
"
`;

exports[`invalid(20): 'const map = new Map((( [...(( iterabl…' > Output 1`] = `
"
  1 | const map = new Map((( (( iterable )) )))
"
`;

exports[`invalid(20): 'function foo(bar) {\\n\\treturn[...Obje…' > Code 1`] = `
"
  1 | function foo(bar) {
  2 | 	return[...Object.keys(bar)];
  3 | }
"
`;

exports[`invalid(20): 'function foo(bar) {\\n\\treturn[...Obje…' > Error 1/1 1`] = `
"
  1 | function foo(bar) {
> 2 | 	return[...Object.keys(bar)];
    | 	      ^^^^^^^^^^^^^^^^^^^^^ Unnecessarily cloning an array.
  3 | }
"
`;

exports[`invalid(20): 'function foo(bar) {\\n\\treturn[...Obje…' > Output 1`] = `
"
  1 | function foo(bar) {
  2 | 	return Object.keys(bar);
  3 | }
"
`;

exports[`invalid(21): 'foo(...[,])' > Code 1`] = `
"
  1 | foo(...[,])
"
`;

exports[`invalid(21): 'foo(...[,])' > Error 1/1 1`] = `
"
> 1 | foo(...[,])
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(21): 'foo(...[,])' > Output 1`] = `
"
  1 | foo(undefined)
"
`;

exports[`invalid(21): 'for (const foo of (( [...(( iterable …' > Code 1`] = `
"
  1 | for (const foo of (( [...(( iterable ))] )));
"
`;

exports[`invalid(21): 'for (const foo of (( [...(( iterable …' > Error 1/1 1`] = `
"
> 1 | for (const foo of (( [...(( iterable ))] )));
    |                      ^^^^^^^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.
"
`;

exports[`invalid(21): 'for (const foo of (( [...(( iterable …' > Output 1`] = `
"
  1 | for (const foo of (( (( iterable )) )));
"
`;

exports[`invalid(21): 'function foo(bar) {\\n\\treturn[\\n\\t\\t.…' > Code 1`] = `
"
  1 | function foo(bar) {
  2 | 	return[
  3 | 		...Object.keys(bar)
  4 | 	];
  5 | }
"
`;

exports[`invalid(21): 'function foo(bar) {\\n\\treturn[\\n\\t\\t.…' > Error 1/1 1`] = `
"
  1 | function foo(bar) {
> 2 | 	return[
    | 	      ^
> 3 | 		...Object.keys(bar)
    | ^^^^^^^^^^^^^^^^^^^^^
> 4 | 	];
    | ^^^ Unnecessarily cloning an array.
  5 | }
"
`;

exports[`invalid(21): 'function foo(bar) {\\n\\treturn[\\n\\t\\t.…' > Output 1`] = `
"
  1 | function foo(bar) {
  2 | 	return (
  3 | 		Object.keys(bar)
  4 | 	);
  5 | }
"
`;

exports[`invalid(22): 'for (const foo of[...iterable]);' > Code 1`] = `
"
  1 | for (const foo of[...iterable]);
"
`;

exports[`invalid(22): 'for (const foo of[...iterable]);' > Error 1/1 1`] = `
"
> 1 | for (const foo of[...iterable]);
    |                  ^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.
"
`;

exports[`invalid(22): 'for (const foo of[...iterable]);' > Output 1`] = `
"
  1 | for (const foo of iterable);
"
`;

exports[`invalid(22): 'function foo(bar) {\\n\\treturn[\\n\\t\\t.…' > Code 1`] = `
"
  1 | function foo(bar) {
  2 | 	return[
  3 | 		...(
  4 | 			Object.keys(bar)
  5 | 		)
  6 | 	];
  7 | }
"
`;

exports[`invalid(22): 'function foo(bar) {\\n\\treturn[\\n\\t\\t.…' > Error 1/1 1`] = `
"
  1 | function foo(bar) {
> 2 | 	return[
    | 	      ^
> 3 | 		...(
    | ^^^^^^
> 4 | 			Object.keys(bar)
    | ^^^^^^
> 5 | 		)
    | ^^^^^^
> 6 | 	];
    | ^^^ Unnecessarily cloning an array.
  7 | }
"
`;

exports[`invalid(22): 'function foo(bar) {\\n\\treturn[\\n\\t\\t.…' > Output 1`] = `
"
  1 | function foo(bar) {
  2 | 	return (
  3 | 		(
  4 | 			Object.keys(bar)
  5 | 		)
  6 | 	);
  7 | }
"
`;

exports[`invalid(22): 'new Foo(...[,])' > Code 1`] = `
"
  1 | new Foo(...[,])
"
`;

exports[`invalid(22): 'new Foo(...[,])' > Error 1/1 1`] = `
"
> 1 | new Foo(...[,])
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(22): 'new Foo(...[,])' > Output 1`] = `
"
  1 | new Foo(undefined)
"
`;

exports[`invalid(23): 'const array = [...[,,]]' > Code 1`] = `
"
  1 | const array = [...[,,]]
"
`;

exports[`invalid(23): 'const array = [...[,,]]' > Error 1/1 1`] = `
"
> 1 | const array = [...[,,]]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(23): 'const array = [...[,,]]' > Output 1`] = `
"
  1 | const array = [,]
"
`;

exports[`invalid(23): 'function * fn() {\\n\\tyield * [...iter…' > Code 1`] = `
"
  1 | function * fn() {
  2 | 	yield * [...iterable];
  3 | }
"
`;

exports[`invalid(23): 'function * fn() {\\n\\tyield * [...iter…' > Error 1/1 1`] = `
"
  1 | function * fn() {
> 2 | 	yield * [...iterable];
    | 	        ^^^^^^^^^^^^^ \`yield*\` can delegate iterable, it's unnecessary to convert to an array.
  3 | }
"
`;

exports[`invalid(23): 'function * fn() {\\n\\tyield * [...iter…' > Output 1`] = `
"
  1 | function * fn() {
  2 | 	yield * iterable;
  3 | }
"
`;

exports[`invalid(23): 'function foo(bar) {\\n\\treturn([\\n\\t\\t…' > Code 1`] = `
"
  1 | function foo(bar) {
  2 | 	return([
  3 | 		...Object.keys(bar)
  4 | 	]);
  5 | }
"
`;

exports[`invalid(23): 'function foo(bar) {\\n\\treturn([\\n\\t\\t…' > Error 1/1 1`] = `
"
  1 | function foo(bar) {
> 2 | 	return([
    | 	       ^
> 3 | 		...Object.keys(bar)
    | ^^^^^^^^^^^^^^^^^^^^^
> 4 | 	]);
    | ^^^ Unnecessarily cloning an array.
  5 | }
"
`;

exports[`invalid(23): 'function foo(bar) {\\n\\treturn([\\n\\t\\t…' > Output 1`] = `
"
  1 | function foo(bar) {
  2 | 	return (
  3 | 		Object.keys(bar)
  4 | 	);
  5 | }
"
`;

exports[`invalid(24): 'foo(...[,,])' > Code 1`] = `
"
  1 | foo(...[,,])
"
`;

exports[`invalid(24): 'foo(...[,,])' > Error 1/1 1`] = `
"
> 1 | foo(...[,,])
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(24): 'foo(...[,,])' > Output 1`] = `
"
  1 | foo(undefined,undefined)
"
`;

exports[`invalid(24): 'function * fn() {\\n\\tyield * [...iter…' > Code 1`] = `
"
  1 | function * fn() {
  2 | 	yield * [...iterable,];
  3 | }
"
`;

exports[`invalid(24): 'function * fn() {\\n\\tyield * [...iter…' > Error 1/1 1`] = `
"
  1 | function * fn() {
> 2 | 	yield * [...iterable,];
    | 	        ^^^^^^^^^^^^^^ \`yield*\` can delegate iterable, it's unnecessary to convert to an array.
  3 | }
"
`;

exports[`invalid(24): 'function * fn() {\\n\\tyield * [...iter…' > Output 1`] = `
"
  1 | function * fn() {
  2 | 	yield * iterable;
  3 | }
"
`;

exports[`invalid(25): 'function * fn() {\\n\\tyield * (( [...i…' > Code 1`] = `
"
  1 | function * fn() {
  2 | 	yield * (( [...iterable] ));
  3 | }
"
`;

exports[`invalid(25): 'function * fn() {\\n\\tyield * (( [...i…' > Error 1/1 1`] = `
"
  1 | function * fn() {
> 2 | 	yield * (( [...iterable] ));
    | 	           ^^^^^^^^^^^^^ \`yield*\` can delegate iterable, it's unnecessary to convert to an array.
  3 | }
"
`;

exports[`invalid(25): 'function * fn() {\\n\\tyield * (( [...i…' > Output 1`] = `
"
  1 | function * fn() {
  2 | 	yield * (( iterable ));
  3 | }
"
`;

exports[`invalid(25): 'new Foo(...[,,])' > Code 1`] = `
"
  1 | new Foo(...[,,])
"
`;

exports[`invalid(25): 'new Foo(...[,,])' > Error 1/1 1`] = `
"
> 1 | new Foo(...[,,])
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(25): 'new Foo(...[,,])' > Output 1`] = `
"
  1 | new Foo(undefined,undefined)
"
`;

exports[`invalid(26): 'const array = [...[a, , b,]]' > Code 1`] = `
"
  1 | const array = [...[a, , b,]]
"
`;

exports[`invalid(26): 'const array = [...[a, , b,]]' > Error 1/1 1`] = `
"
> 1 | const array = [...[a, , b,]]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(26): 'const array = [...[a, , b,]]' > Output 1`] = `
"
  1 | const array = [a, , b]
"
`;

exports[`invalid(26): 'function * fn() {\\n\\tyield * (( [...(…' > Code 1`] = `
"
  1 | function * fn() {
  2 | 	yield * (( [...(( iterable ))] ));
  3 | }
"
`;

exports[`invalid(26): 'function * fn() {\\n\\tyield * (( [...(…' > Error 1/1 1`] = `
"
  1 | function * fn() {
> 2 | 	yield * (( [...(( iterable ))] ));
    | 	           ^^^^^^^^^^^^^^^^^^^ \`yield*\` can delegate iterable, it's unnecessary to convert to an array.
  3 | }
"
`;

exports[`invalid(26): 'function * fn() {\\n\\tyield * (( [...(…' > Output 1`] = `
"
  1 | function * fn() {
  2 | 	yield * (( (( iterable )) ));
  3 | }
"
`;

exports[`invalid(27): 'foo(...[a, , b,])' > Code 1`] = `
"
  1 | foo(...[a, , b,])
"
`;

exports[`invalid(27): 'foo(...[a, , b,])' > Error 1/1 1`] = `
"
> 1 | foo(...[a, , b,])
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(27): 'foo(...[a, , b,])' > Output 1`] = `
"
  1 | foo(a, undefined, b)
"
`;

exports[`invalid(28): 'new Foo(...[a, , b,])' > Code 1`] = `
"
  1 | new Foo(...[a, , b,])
"
`;

exports[`invalid(28): 'new Foo(...[a, , b,])' > Error 1/1 1`] = `
"
> 1 | new Foo(...[a, , b,])
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(28): 'new Foo(...[a, , b,])' > Output 1`] = `
"
  1 | new Foo(a, undefined, b)
"
`;

exports[`invalid(29): 'const array = [...[a, , b,],]' > Code 1`] = `
"
  1 | const array = [...[a, , b,],]
"
`;

exports[`invalid(29): 'const array = [...[a, , b,],]' > Error 1/1 1`] = `
"
> 1 | const array = [...[a, , b,],]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(29): 'const array = [...[a, , b,],]' > Output 1`] = `
"
  1 | const array = [a, , b,]
"
`;

exports[`invalid(30): 'foo(...[a, , b,],)' > Code 1`] = `
"
  1 | foo(...[a, , b,],)
"
`;

exports[`invalid(30): 'foo(...[a, , b,],)' > Error 1/1 1`] = `
"
> 1 | foo(...[a, , b,],)
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(30): 'foo(...[a, , b,],)' > Output 1`] = `
"
  1 | foo(a, undefined, b,)
"
`;

exports[`invalid(31): 'new Foo(...[a, , b,],)' > Code 1`] = `
"
  1 | new Foo(...[a, , b,],)
"
`;

exports[`invalid(31): 'new Foo(...[a, , b,],)' > Error 1/1 1`] = `
"
> 1 | new Foo(...[a, , b,],)
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(31): 'new Foo(...[a, , b,],)' > Output 1`] = `
"
  1 | new Foo(a, undefined, b,)
"
`;

exports[`invalid(32): 'foo(...[,, ,(( a )), ,,(0, b), ,,])' > Code 1`] = `
"
  1 | foo(...[,, ,(( a )), ,,(0, b), ,,])
"
`;

exports[`invalid(32): 'foo(...[,, ,(( a )), ,,(0, b), ,,])' > Error 1/1 1`] = `
"
> 1 | foo(...[,, ,(( a )), ,,(0, b), ,,])
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(32): 'foo(...[,, ,(( a )), ,,(0, b), ,,])' > Output 1`] = `
"
  1 | foo(undefined,undefined, undefined,(( a )), undefined,undefined,(0, b), undefined,undefined)
"
`;

exports[`invalid(33): 'const array = [a, ...[a, b]]' > Code 1`] = `
"
  1 | const array = [a, ...[a, b]]
"
`;

exports[`invalid(33): 'const array = [a, ...[a, b]]' > Error 1/1 1`] = `
"
> 1 | const array = [a, ...[a, b]]
    |                   ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(33): 'const array = [a, ...[a, b]]' > Output 1`] = `
"
  1 | const array = [a, a, b]
"
`;

exports[`invalid(34): 'const object = {a, ...{a, b}}' > Code 1`] = `
"
  1 | const object = {a, ...{a, b}}
"
`;

exports[`invalid(34): 'const object = {a, ...{a, b}}' > Error 1/1 1`] = `
"
> 1 | const object = {a, ...{a, b}}
    |                    ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(34): 'const object = {a, ...{a, b}}' > Output 1`] = `
"
  1 | const object = {a, a, b}
"
`;

exports[`invalid(35): 'foo(a, ...[a, b])' > Code 1`] = `
"
  1 | foo(a, ...[a, b])
"
`;

exports[`invalid(35): 'foo(a, ...[a, b])' > Error 1/1 1`] = `
"
> 1 | foo(a, ...[a, b])
    |        ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(35): 'foo(a, ...[a, b])' > Output 1`] = `
"
  1 | foo(a, a, b)
"
`;

exports[`invalid(36): 'new Foo(a, ...[a, b])' > Code 1`] = `
"
  1 | new Foo(a, ...[a, b])
"
`;

exports[`invalid(36): 'new Foo(a, ...[a, b])' > Error 1/1 1`] = `
"
> 1 | new Foo(a, ...[a, b])
    |            ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(36): 'new Foo(a, ...[a, b])' > Output 1`] = `
"
  1 | new Foo(a, a, b)
"
`;

exports[`invalid(37): 'const array = [...[a, b], b,]' > Code 1`] = `
"
  1 | const array = [...[a, b], b,]
"
`;

exports[`invalid(37): 'const array = [...[a, b], b,]' > Error 1/1 1`] = `
"
> 1 | const array = [...[a, b], b,]
    |                ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(37): 'const array = [...[a, b], b,]' > Output 1`] = `
"
  1 | const array = [a, b, b,]
"
`;

exports[`invalid(38): 'const object = {...{a, b}, b,}' > Code 1`] = `
"
  1 | const object = {...{a, b}, b,}
"
`;

exports[`invalid(38): 'const object = {...{a, b}, b,}' > Error 1/1 1`] = `
"
> 1 | const object = {...{a, b}, b,}
    |                 ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(38): 'const object = {...{a, b}, b,}' > Output 1`] = `
"
  1 | const object = {a, b, b,}
"
`;

exports[`invalid(39): 'foo(...[a, b], b,)' > Code 1`] = `
"
  1 | foo(...[a, b], b,)
"
`;

exports[`invalid(39): 'foo(...[a, b], b,)' > Error 1/1 1`] = `
"
> 1 | foo(...[a, b], b,)
    |     ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(39): 'foo(...[a, b], b,)' > Output 1`] = `
"
  1 | foo(a, b, b,)
"
`;

exports[`invalid(40): 'new Foo(...[a, b], b,)' > Code 1`] = `
"
  1 | new Foo(...[a, b], b,)
"
`;

exports[`invalid(40): 'new Foo(...[a, b], b,)' > Error 1/1 1`] = `
"
> 1 | new Foo(...[a, b], b,)
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(40): 'new Foo(...[a, b], b,)' > Output 1`] = `
"
  1 | new Foo(a, b, b,)
"
`;

exports[`invalid(41): 'const array = [a, ...[a, b], b,]' > Code 1`] = `
"
  1 | const array = [a, ...[a, b], b,]
"
`;

exports[`invalid(41): 'const array = [a, ...[a, b], b,]' > Error 1/1 1`] = `
"
> 1 | const array = [a, ...[a, b], b,]
    |                   ^^^ Spread an array literal in array literal is unnecessary.
"
`;

exports[`invalid(41): 'const array = [a, ...[a, b], b,]' > Output 1`] = `
"
  1 | const array = [a, a, b, b,]
"
`;

exports[`invalid(42): 'const object = {a, ...{a, b}, b,}' > Code 1`] = `
"
  1 | const object = {a, ...{a, b}, b,}
"
`;

exports[`invalid(42): 'const object = {a, ...{a, b}, b,}' > Error 1/1 1`] = `
"
> 1 | const object = {a, ...{a, b}, b,}
    |                    ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(42): 'const object = {a, ...{a, b}, b,}' > Output 1`] = `
"
  1 | const object = {a, a, b, b,}
"
`;

exports[`invalid(43): 'foo(a, ...[a, b], b,)' > Code 1`] = `
"
  1 | foo(a, ...[a, b], b,)
"
`;

exports[`invalid(43): 'foo(a, ...[a, b], b,)' > Error 1/1 1`] = `
"
> 1 | foo(a, ...[a, b], b,)
    |        ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(43): 'foo(a, ...[a, b], b,)' > Output 1`] = `
"
  1 | foo(a, a, b, b,)
"
`;

exports[`invalid(44): 'new Foo(a, ...[a, b], b,)' > Code 1`] = `
"
  1 | new Foo(a, ...[a, b], b,)
"
`;

exports[`invalid(44): 'new Foo(a, ...[a, b], b,)' > Error 1/1 1`] = `
"
> 1 | new Foo(a, ...[a, b], b,)
    |            ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(44): 'new Foo(a, ...[a, b], b,)' > Output 1`] = `
"
  1 | new Foo(a, a, b, b,)
"
`;

exports[`invalid(45): '({a:1, ...{a: 2}})' > Code 1`] = `
"
  1 | ({a:1, ...{a: 2}})
"
`;

exports[`invalid(45): '({a:1, ...{a: 2}})' > Error 1/1 1`] = `
"
> 1 | ({a:1, ...{a: 2}})
    |        ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(45): '({a:1, ...{a: 2}})' > Output 1`] = `
"
  1 | ({a:1, a: 2})
"
`;

exports[`invalid(46): '({...{a:1}, ...{a: 2}})' > Code 1`] = `
"
  1 | ({...{a:1}, ...{a: 2}})
"
`;

exports[`invalid(46): '({...{a:1}, ...{a: 2}})' > Error 1/2 1`] = `
"
> 1 | ({...{a:1}, ...{a: 2}})
    |   ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(46): '({...{a:1}, ...{a: 2}})' > Error 2/2 1`] = `
"
> 1 | ({...{a:1}, ...{a: 2}})
    |             ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(46): '({...{a:1}, ...{a: 2}})' > Output 1`] = `
"
  1 | ({a:1, a: 2})
"
`;

exports[`invalid(47): '({\\n\\tget a() {},\\n\\tset a(v) {},\\n\\t…' > Code 1`] = `
"
  1 | ({
  2 | 	get a() {},
  3 | 	set a(v) {},
  4 | 	...{
  5 | 		get a() {}
  6 | 	}
  7 | })
"
`;

exports[`invalid(47): '({\\n\\tget a() {},\\n\\tset a(v) {},\\n\\t…' > Error 1/1 1`] = `
"
  1 | ({
  2 | 	get a() {},
  3 | 	set a(v) {},
> 4 | 	...{
    | 	^^^ Spread an object literal in object literal is unnecessary.
  5 | 		get a() {}
  6 | 	}
  7 | })
"
`;

exports[`invalid(47): '({\\n\\tget a() {},\\n\\tset a(v) {},\\n\\t…' > Output 1`] = `
"
  1 | ({
  2 | 	get a() {},
  3 | 	set a(v) {},
  4 | 	
  5 | 		get a() {}
  6 | 	
  7 | })
"
`;

exports[`invalid(48): '({[a]:1, ...{[a]: 2}})' > Code 1`] = `
"
  1 | ({[a]:1, ...{[a]: 2}})
"
`;

exports[`invalid(48): '({[a]:1, ...{[a]: 2}})' > Error 1/1 1`] = `
"
> 1 | ({[a]:1, ...{[a]: 2}})
    |          ^^^ Spread an object literal in object literal is unnecessary.
"
`;

exports[`invalid(48): '({[a]:1, ...{[a]: 2}})' > Output 1`] = `
"
  1 | ({[a]:1, [a]: 2})
"
`;

exports[`invalid(49): 'const object = {\\n\\ta: 1,\\n\\n\\t...{\\n…' > Code 1`] = `
"
   1 | const object = {
   2 | 	a: 1,
   3 |
   4 | 	...{
   5 | 		testKeys() {
   6 | 			console.assert(Object.keys(this).length === 2)
   7 | 		}
   8 | 	}
   9 | }
  10 | object.testKeys();
"
`;

exports[`invalid(49): 'const object = {\\n\\ta: 1,\\n\\n\\t...{\\n…' > Error 1/1 1`] = `
"
   1 | const object = {
   2 | 	a: 1,
   3 |
>  4 | 	...{
     | 	^^^ Spread an object literal in object literal is unnecessary.
   5 | 		testKeys() {
   6 | 			console.assert(Object.keys(this).length === 2)
   7 | 		}
   8 | 	}
   9 | }
  10 | object.testKeys();
"
`;

exports[`invalid(49): 'const object = {\\n\\ta: 1,\\n\\n\\t...{\\n…' > Output 1`] = `
"
   1 | const object = {
   2 | 	a: 1,
   3 |
   4 | 	
   5 | 		testKeys() {
   6 | 			console.assert(Object.keys(this).length === 2)
   7 | 		}
   8 | 	
   9 | }
  10 | object.testKeys();
"
`;

exports[`invalid(50): 'new Foo(\\n\\tfoo(\\n\\t\\ta,\\n\\t\\t...[a, …' > Code 1`] = `
"
   1 | new Foo(
   2 | 	foo(
   3 | 		a,
   4 | 		...[a, b],
   5 | 		b,
   6 | 	),
   7 | 	...[
   8 | 		a,
   9 | 		...[
  10 | 			a,
  11 | 			b,
  12 | 		],
  13 | 		b,
  14 | 	],
  15 | 	{
  16 | 		a: [...[a, b]],
  17 | 		...{
  18 | 			a,
  19 | 			b,
  20 | 		},
  21 | 	}
  22 | )
"
`;

exports[`invalid(50): 'new Foo(\\n\\tfoo(\\n\\t\\ta,\\n\\t\\t...[a, …' > Error 1/5 1`] = `
"
   1 | new Foo(
   2 | 	foo(
   3 | 		a,
>  4 | 		...[a, b],
     | 		^^^ Spread an array literal in arguments is unnecessary.
   5 | 		b,
   6 | 	),
   7 | 	...[
   8 | 		a,
   9 | 		...[
  10 | 			a,
  11 | 			b,
  12 | 		],
  13 | 		b,
  14 | 	],
  15 | 	{
  16 | 		a: [...[a, b]],
  17 | 		...{
  18 | 			a,
  19 | 			b,
  20 | 		},
  21 | 	}
  22 | )
"
`;

exports[`invalid(50): 'new Foo(\\n\\tfoo(\\n\\t\\ta,\\n\\t\\t...[a, …' > Error 2/5 1`] = `
"
   1 | new Foo(
   2 | 	foo(
   3 | 		a,
   4 | 		...[a, b],
   5 | 		b,
   6 | 	),
>  7 | 	...[
     | 	^^^ Spread an array literal in arguments is unnecessary.
   8 | 		a,
   9 | 		...[
  10 | 			a,
  11 | 			b,
  12 | 		],
  13 | 		b,
  14 | 	],
  15 | 	{
  16 | 		a: [...[a, b]],
  17 | 		...{
  18 | 			a,
  19 | 			b,
  20 | 		},
  21 | 	}
  22 | )
"
`;

exports[`invalid(50): 'new Foo(\\n\\tfoo(\\n\\t\\ta,\\n\\t\\t...[a, …' > Error 3/5 1`] = `
"
   1 | new Foo(
   2 | 	foo(
   3 | 		a,
   4 | 		...[a, b],
   5 | 		b,
   6 | 	),
   7 | 	...[
   8 | 		a,
>  9 | 		...[
     | 		^^^ Spread an array literal in array literal is unnecessary.
  10 | 			a,
  11 | 			b,
  12 | 		],
  13 | 		b,
  14 | 	],
  15 | 	{
  16 | 		a: [...[a, b]],
  17 | 		...{
  18 | 			a,
  19 | 			b,
  20 | 		},
  21 | 	}
  22 | )
"
`;

exports[`invalid(50): 'new Foo(\\n\\tfoo(\\n\\t\\ta,\\n\\t\\t...[a, …' > Error 4/5 1`] = `
"
   1 | new Foo(
   2 | 	foo(
   3 | 		a,
   4 | 		...[a, b],
   5 | 		b,
   6 | 	),
   7 | 	...[
   8 | 		a,
   9 | 		...[
  10 | 			a,
  11 | 			b,
  12 | 		],
  13 | 		b,
  14 | 	],
  15 | 	{
> 16 | 		a: [...[a, b]],
     | 		    ^^^ Spread an array literal in array literal is unnecessary.
  17 | 		...{
  18 | 			a,
  19 | 			b,
  20 | 		},
  21 | 	}
  22 | )
"
`;

exports[`invalid(50): 'new Foo(\\n\\tfoo(\\n\\t\\ta,\\n\\t\\t...[a, …' > Error 5/5 1`] = `
"
   1 | new Foo(
   2 | 	foo(
   3 | 		a,
   4 | 		...[a, b],
   5 | 		b,
   6 | 	),
   7 | 	...[
   8 | 		a,
   9 | 		...[
  10 | 			a,
  11 | 			b,
  12 | 		],
  13 | 		b,
  14 | 	],
  15 | 	{
  16 | 		a: [...[a, b]],
> 17 | 		...{
     | 		^^^ Spread an object literal in object literal is unnecessary.
  18 | 			a,
  19 | 			b,
  20 | 		},
  21 | 	}
  22 | )
"
`;

exports[`invalid(50): 'new Foo(\\n\\tfoo(\\n\\t\\ta,\\n\\t\\t...[a, …' > Output 1`] = `
"
   1 | new Foo(
   2 | 	foo(
   3 | 		a,
   4 | 		a, b,
   5 | 		b,
   6 | 	),
   7 | 	
   8 | 		a,
   9 | 		
  10 | 			a,
  11 | 			b
  12 | 		,
  13 | 		b
  14 | 	,
  15 | 	{
  16 | 		a: [a, b],
  17 | 		
  18 | 			a,
  19 | 			b
  20 | 		,
  21 | 	}
  22 | )
"
`;

exports[`invalid(51): 'const baz = [2];\\ncall(foo, ...[bar, …' > Code 1`] = `
"
  1 | const baz = [2];
  2 | call(foo, ...[bar, ...baz]);
"
`;

exports[`invalid(51): 'const baz = [2];\\ncall(foo, ...[bar, …' > Error 1/1 1`] = `
"
  1 | const baz = [2];
> 2 | call(foo, ...[bar, ...baz]);
    |           ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(51): 'const baz = [2];\\ncall(foo, ...[bar, …' > Output 1`] = `
"
  1 | const baz = [2];
  2 | call(foo, bar, ...baz);
"
`;

exports[`invalid(52): 'Promise.all(...[...iterable])' > Code 1`] = `
"
  1 | Promise.all(...[...iterable])
"
`;

exports[`invalid(52): 'Promise.all(...[...iterable])' > Error 1/1 1`] = `
"
> 1 | Promise.all(...[...iterable])
    |             ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(52): 'Promise.all(...[...iterable])' > Output 1`] = `
"
  1 | Promise.all(...iterable)
"
`;

exports[`invalid(53): 'new Map(...[...iterable])' > Code 1`] = `
"
  1 | new Map(...[...iterable])
"
`;

exports[`invalid(53): 'new Map(...[...iterable])' > Error 1/1 1`] = `
"
> 1 | new Map(...[...iterable])
    |         ^^^ Spread an array literal in arguments is unnecessary.
"
`;

exports[`invalid(53): 'new Map(...[...iterable])' > Output 1`] = `
"
  1 | new Map(...iterable)
"
`;
