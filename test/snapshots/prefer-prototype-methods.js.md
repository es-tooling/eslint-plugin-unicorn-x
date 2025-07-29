// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = [].push.apply(bar, elemen…' > Code 1`] = `
"
  1 | const foo = [].push.apply(bar, elements);
"
`;

exports[`invalid(0): 'const foo = [].push.apply(bar, elemen…' > Error 1/1 1`] = `
"
> 1 | const foo = [].push.apply(bar, elements);
    |             ^^^^^^^ Prefer using \`Array.prototype.push\`.
"
`;

exports[`invalid(0): 'const foo = [].push.apply(bar, elemen…' > Output 1`] = `
"
  1 | const foo = Array.prototype.push.apply(bar, elements);
"
`;

exports[`invalid(1): 'const foo = [].slice.call(bar);' > Code 1`] = `
"
  1 | const foo = [].slice.call(bar);
"
`;

exports[`invalid(1): 'const foo = [].slice.call(bar);' > Error 1/1 1`] = `
"
> 1 | const foo = [].slice.call(bar);
    |             ^^^^^^^^ Prefer using \`Array.prototype.slice\`.
"
`;

exports[`invalid(1): 'const foo = [].slice.call(bar);' > Output 1`] = `
"
  1 | const foo = Array.prototype.slice.call(bar);
"
`;

exports[`invalid(2): 'const foo = {}.toString.call(bar);' > Code 1`] = `
"
  1 | const foo = {}.toString.call(bar);
"
`;

exports[`invalid(2): 'const foo = {}.toString.call(bar);' > Error 1/1 1`] = `
"
> 1 | const foo = {}.toString.call(bar);
    |             ^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(2): 'const foo = {}.toString.call(bar);' > Output 1`] = `
"
  1 | const foo = Object.prototype.toString.call(bar);
"
`;

exports[`invalid(3): 'const foo = {}.hasOwnProperty.call(ba…' > Code 1`] = `
"
  1 | const foo = {}.hasOwnProperty.call(bar, "property");
"
`;

exports[`invalid(3): 'const foo = {}.hasOwnProperty.call(ba…' > Error 1/1 1`] = `
"
> 1 | const foo = {}.hasOwnProperty.call(bar, "property");
    |             ^^^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.hasOwnProperty\`.
"
`;

exports[`invalid(3): 'const foo = {}.hasOwnProperty.call(ba…' > Output 1`] = `
"
  1 | const foo = Object.prototype.hasOwnProperty.call(bar, "property");
"
`;

exports[`invalid(4): 'const foo = {}.propertyIsEnumerable.c…' > Code 1`] = `
"
  1 | const foo = {}.propertyIsEnumerable.call(bar, "property");
"
`;

exports[`invalid(4): 'const foo = {}.propertyIsEnumerable.c…' > Error 1/1 1`] = `
"
> 1 | const foo = {}.propertyIsEnumerable.call(bar, "property");
    |             ^^^^^^^^^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.propertyIsEnumerable\`.
"
`;

exports[`invalid(4): 'const foo = {}.propertyIsEnumerable.c…' > Output 1`] = `
"
  1 | const foo = Object.prototype.propertyIsEnumerable.call(bar, "property");
"
`;

exports[`invalid(5): '[].forEach.call(foo, () => {})' > Code 1`] = `
"
  1 | [].forEach.call(foo, () => {})
"
`;

exports[`invalid(5): '[].forEach.call(foo, () => {})' > Error 1/1 1`] = `
"
> 1 | [].forEach.call(foo, () => {})
    | ^^^^^^^^^^ Prefer using \`Array.prototype.forEach\`.
"
`;

exports[`invalid(5): '[].forEach.call(foo, () => {})' > Output 1`] = `
"
  1 | Array.prototype.forEach.call(foo, () => {})
"
`;

exports[`invalid(6): 'const push = [].push.bind(foo)' > Code 1`] = `
"
  1 | const push = [].push.bind(foo)
"
`;

exports[`invalid(6): 'const push = [].push.bind(foo)' > Error 1/1 1`] = `
"
> 1 | const push = [].push.bind(foo)
    |              ^^^^^^^ Prefer using \`Array.prototype.push\`.
"
`;

exports[`invalid(6): 'const push = [].push.bind(foo)' > Output 1`] = `
"
  1 | const push = Array.prototype.push.bind(foo)
"
`;

exports[`invalid(7): 'const foo = [][method].call(foo)' > Code 1`] = `
"
  1 | const foo = [][method].call(foo)
"
`;

exports[`invalid(7): 'const foo = [][method].call(foo)' > Error 1/1 1`] = `
"
> 1 | const foo = [][method].call(foo)
    |             ^^^^^^^^^^ Prefer using method from \`Array.prototype\`.
"
`;

exports[`invalid(7): 'const foo = [][method].call(foo)' > Output 1`] = `
"
  1 | const foo = Array.prototype[method].call(foo)
"
`;

exports[`invalid(8): 'const method = "realMethodName";const…' > Code 1`] = `
"
  1 | const method = "realMethodName";const foo = [][method].call(foo)
"
`;

exports[`invalid(8): 'const method = "realMethodName";const…' > Error 1/1 1`] = `
"
> 1 | const method = "realMethodName";const foo = [][method].call(foo)
    |                                             ^^^^^^^^^^ Prefer using \`Array.prototype.realMethodName\`.
"
`;

exports[`invalid(8): 'const method = "realMethodName";const…' > Output 1`] = `
"
  1 | const method = "realMethodName";const foo = Array.prototype[method].call(foo)
"
`;

exports[`invalid(9): 'const array = Reflect.apply([].slice,…' > Code 1`] = `
"
  1 | const array = Reflect.apply([].slice, foo, [])
"
`;

exports[`invalid(9): 'const array = Reflect.apply([].slice,…' > Error 1/1 1`] = `
"
> 1 | const array = Reflect.apply([].slice, foo, [])
    |                             ^^^^^^^^ Prefer using \`Array.prototype.slice\`.
"
`;

exports[`invalid(9): 'const array = Reflect.apply([].slice,…' > Output 1`] = `
"
  1 | const array = Reflect.apply(Array.prototype.slice, foo, [])
"
`;

exports[`invalid(10): 'Reflect.apply([].bar, baz, [])' > Code 1`] = `
"
  1 | Reflect.apply([].bar, baz, [])
"
`;

exports[`invalid(10): 'Reflect.apply([].bar, baz, [])' > Error 1/1 1`] = `
"
> 1 | Reflect.apply([].bar, baz, [])
    |               ^^^^^^ Prefer using \`Array.prototype.bar\`.
"
`;

exports[`invalid(10): 'Reflect.apply([].bar, baz, [])' > Output 1`] = `
"
  1 | Reflect.apply(Array.prototype.bar, baz, [])
"
`;

exports[`invalid(11): 'const foo = ({}).toString.call(bar);' > Code 1`] = `
"
  1 | const foo = ({}).toString.call(bar);
"
`;

exports[`invalid(11): 'const foo = ({}).toString.call(bar);' > Error 1/1 1`] = `
"
> 1 | const foo = ({}).toString.call(bar);
    |             ^^^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(11): 'const foo = ({}).toString.call(bar);' > Output 1`] = `
"
  1 | const foo = (Object.prototype).toString.call(bar);
"
`;

exports[`invalid(12): 'const foo = ({}.toString).call(bar);' > Code 1`] = `
"
  1 | const foo = ({}.toString).call(bar);
"
`;

exports[`invalid(12): 'const foo = ({}.toString).call(bar);' > Error 1/1 1`] = `
"
> 1 | const foo = ({}.toString).call(bar);
    |              ^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(12): 'const foo = ({}.toString).call(bar);' > Output 1`] = `
"
  1 | const foo = (Object.prototype.toString).call(bar);
"
`;

exports[`invalid(13): 'const foo = ({}.toString.call)(bar);' > Code 1`] = `
"
  1 | const foo = ({}.toString.call)(bar);
"
`;

exports[`invalid(13): 'const foo = ({}.toString.call)(bar);' > Error 1/1 1`] = `
"
> 1 | const foo = ({}.toString.call)(bar);
    |              ^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(13): 'const foo = ({}.toString.call)(bar);' > Output 1`] = `
"
  1 | const foo = (Object.prototype.toString.call)(bar);
"
`;

exports[`invalid(14): 'function foo(){return[].slice.call(ba…' > Code 1`] = `
"
  1 | function foo(){return[].slice.call(bar);}
"
`;

exports[`invalid(14): 'function foo(){return[].slice.call(ba…' > Error 1/1 1`] = `
"
> 1 | function foo(){return[].slice.call(bar);}
    |                      ^^^^^^^^ Prefer using \`Array.prototype.slice\`.
"
`;

exports[`invalid(14): 'function foo(){return[].slice.call(ba…' > Output 1`] = `
"
  1 | function foo(){return Array.prototype.slice.call(bar);}
"
`;

exports[`invalid(15): 'function foo(){return{}.toString.call…' > Code 1`] = `
"
  1 | function foo(){return{}.toString.call(bar)}
"
`;

exports[`invalid(15): 'function foo(){return{}.toString.call…' > Error 1/1 1`] = `
"
> 1 | function foo(){return{}.toString.call(bar)}
    |                      ^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(15): 'function foo(){return{}.toString.call…' > Output 1`] = `
"
  1 | function foo(){return Object.prototype.toString.call(bar)}
"
`;

exports[`invalid(16): 'Reflect.apply({}[Symbol()], baz, [])' > Code 1`] = `
"
  1 | Reflect.apply({}[Symbol()], baz, [])
"
`;

exports[`invalid(16): 'Reflect.apply({}[Symbol()], baz, [])' > Error 1/1 1`] = `
"
> 1 | Reflect.apply({}[Symbol()], baz, [])
    |               ^^^^^^^^^^^^ Prefer using method from \`Object.prototype\`.
"
`;

exports[`invalid(16): 'Reflect.apply({}[Symbol()], baz, [])' > Output 1`] = `
"
  1 | Reflect.apply(Object.prototype[Symbol()], baz, [])
"
`;

exports[`invalid(17): 'Reflect.apply({}[Symbol("symbol descr…' > Code 1`] = `
"
  1 | Reflect.apply({}[Symbol("symbol description")], baz, [])
"
`;

exports[`invalid(17): 'Reflect.apply({}[Symbol("symbol descr…' > Error 1/1 1`] = `
"
> 1 | Reflect.apply({}[Symbol("symbol description")], baz, [])
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using method from \`Object.prototype\`.
"
`;

exports[`invalid(17): 'Reflect.apply({}[Symbol("symbol descr…' > Output 1`] = `
"
  1 | Reflect.apply(Object.prototype[Symbol("symbol description")], baz, [])
"
`;

exports[`invalid(18): 'Reflect.apply([][Symbol()], baz, [])' > Code 1`] = `
"
  1 | Reflect.apply([][Symbol()], baz, [])
"
`;

exports[`invalid(18): 'Reflect.apply([][Symbol()], baz, [])' > Error 1/1 1`] = `
"
> 1 | Reflect.apply([][Symbol()], baz, [])
    |               ^^^^^^^^^^^^ Prefer using method from \`Array.prototype\`.
"
`;

exports[`invalid(18): 'Reflect.apply([][Symbol()], baz, [])' > Output 1`] = `
"
  1 | Reflect.apply(Array.prototype[Symbol()], baz, [])
"
`;

exports[`invalid(19): 'Reflect.apply({}[Symbol("symbol descr…' > Code 1`] = `
"
  1 | Reflect.apply({}[Symbol("symbol description")], baz, [])
"
`;

exports[`invalid(19): 'Reflect.apply({}[Symbol("symbol descr…' > Error 1/1 1`] = `
"
> 1 | Reflect.apply({}[Symbol("symbol description")], baz, [])
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using method from \`Object.prototype\`.
"
`;

exports[`invalid(19): 'Reflect.apply({}[Symbol("symbol descr…' > Output 1`] = `
"
  1 | Reflect.apply(Object.prototype[Symbol("symbol description")], baz, [])
"
`;

exports[`invalid(20): '[][Symbol.iterator].call(foo)' > Code 1`] = `
"
  1 | [][Symbol.iterator].call(foo)
"
`;

exports[`invalid(20): '[][Symbol.iterator].call(foo)' > Error 1/1 1`] = `
"
> 1 | [][Symbol.iterator].call(foo)
    | ^^^^^^^^^^^^^^^^^^^ Prefer using \`Array.prototype.Symbol(Symbol.iterator)\`.
"
`;

exports[`invalid(20): '[][Symbol.iterator].call(foo)' > Output 1`] = `
"
  1 | Array.prototype[Symbol.iterator].call(foo)
"
`;

exports[`invalid(21): 'const foo = [].at.call(bar)' > Code 1`] = `
"
  1 | const foo = [].at.call(bar)
"
`;

exports[`invalid(21): 'const foo = [].at.call(bar)' > Error 1/1 1`] = `
"
> 1 | const foo = [].at.call(bar)
    |             ^^^^^ Prefer using \`Array.prototype.at\`.
"
`;

exports[`invalid(21): 'const foo = [].at.call(bar)' > Output 1`] = `
"
  1 | const foo = Array.prototype.at.call(bar)
"
`;

exports[`invalid(22): 'const foo = [].findLast.call(bar)' > Code 1`] = `
"
  1 | const foo = [].findLast.call(bar)
"
`;

exports[`invalid(22): 'const foo = [].findLast.call(bar)' > Error 1/1 1`] = `
"
> 1 | const foo = [].findLast.call(bar)
    |             ^^^^^^^^^^^ Prefer using \`Array.prototype.findLast\`.
"
`;

exports[`invalid(22): 'const foo = [].findLast.call(bar)' > Output 1`] = `
"
  1 | const foo = Array.prototype.findLast.call(bar)
"
`;

exports[`invalid(23): '/* globals hasOwnProperty: readonly *…' > Code 1`] = `
"
  1 | /* globals hasOwnProperty: readonly */ hasOwnProperty.call(bar)
"
`;

exports[`invalid(23): '/* globals hasOwnProperty: readonly *…' > Error 1/1 1`] = `
"
> 1 | /* globals hasOwnProperty: readonly */ hasOwnProperty.call(bar)
    |                                        ^^^^^^^^^^^^^^ Prefer using \`Object.prototype.hasOwnProperty\`.
"
`;

exports[`invalid(23): '/* globals hasOwnProperty: readonly *…' > Output 1`] = `
"
  1 | /* globals hasOwnProperty: readonly */ Object.prototype.hasOwnProperty.call(bar)
"
`;

exports[`invalid(24): '/* globals toString: readonly */ toSt…' > Code 1`] = `
"
  1 | /* globals toString: readonly */ toString.apply(bar, [])
"
`;

exports[`invalid(24): '/* globals toString: readonly */ toSt…' > Error 1/1 1`] = `
"
> 1 | /* globals toString: readonly */ toString.apply(bar, [])
    |                                  ^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(24): '/* globals toString: readonly */ toSt…' > Output 1`] = `
"
  1 | /* globals toString: readonly */ Object.prototype.toString.apply(bar, [])
"
`;

exports[`invalid(25): '/* globals toString: readonly */ Refl…' > Code 1`] = `
"
  1 | /* globals toString: readonly */ Reflect.apply(toString, baz, [])
"
`;

exports[`invalid(25): '/* globals toString: readonly */ Refl…' > Error 1/1 1`] = `
"
> 1 | /* globals toString: readonly */ Reflect.apply(toString, baz, [])
    |                                                ^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(25): '/* globals toString: readonly */ Refl…' > Output 1`] = `
"
  1 | /* globals toString: readonly */ Reflect.apply(Object.prototype.toString, baz, [])
"
`;

exports[`invalid(26): 'globalThis.toString.call(bar)' > Code 1`] = `
"
  1 | globalThis.toString.call(bar)
"
`;

exports[`invalid(26): 'globalThis.toString.call(bar)' > Error 1/1 1`] = `
"
> 1 | globalThis.toString.call(bar)
    | ^^^^^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(26): 'globalThis.toString.call(bar)' > Output 1`] = `
"
  1 | Object.prototype.toString.call(bar)
"
`;

exports[`invalid(27): 'const _ = globalThis; _.hasOwnPropert…' > Code 1`] = `
"
  1 | const _ = globalThis; _.hasOwnProperty.call(bar)
"
`;

exports[`invalid(27): 'const _ = globalThis; _.hasOwnPropert…' > Error 1/1 1`] = `
"
> 1 | const _ = globalThis; _.hasOwnProperty.call(bar)
    |                       ^^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.hasOwnProperty\`.
"
`;

exports[`invalid(27): 'const _ = globalThis; _.hasOwnPropert…' > Output 1`] = `
"
  1 | const _ = globalThis; Object.prototype.hasOwnProperty.call(bar)
"
`;

exports[`invalid(28): 'const _ = globalThis; _["hasOwnProper…' > Code 1`] = `
"
  1 | const _ = globalThis; _["hasOwnProperty"].call(bar)
"
`;

exports[`invalid(28): 'const _ = globalThis; _["hasOwnProper…' > Error 1/1 1`] = `
"
> 1 | const _ = globalThis; _["hasOwnProperty"].call(bar)
    |                       ^^^^^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.hasOwnProperty\`.
"
`;

exports[`invalid(28): 'const _ = globalThis; _["hasOwnProper…' > Output 1`] = `
"
  1 | const _ = globalThis; Object.prototype.hasOwnProperty.call(bar)
"
`;

exports[`invalid(29): 'const _ = globalThis; _["hasOwn" + "P…' > Code 1`] = `
"
  1 | const _ = globalThis; _["hasOwn" + "Property"].call(bar)
"
`;

exports[`invalid(29): 'const _ = globalThis; _["hasOwn" + "P…' > Error 1/1 1`] = `
"
> 1 | const _ = globalThis; _["hasOwn" + "Property"].call(bar)
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.hasOwnProperty\`.
"
`;

exports[`invalid(29): 'const _ = globalThis; _["hasOwn" + "P…' > Output 1`] = `
"
  1 | const _ = globalThis; Object.prototype.hasOwnProperty.call(bar)
"
`;

exports[`invalid(30): 'Reflect.apply(globalThis.toString, ba…' > Code 1`] = `
"
  1 | Reflect.apply(globalThis.toString, baz, [])
"
`;

exports[`invalid(30): 'Reflect.apply(globalThis.toString, ba…' > Error 1/1 1`] = `
"
> 1 | Reflect.apply(globalThis.toString, baz, [])
    |               ^^^^^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(30): 'Reflect.apply(globalThis.toString, ba…' > Output 1`] = `
"
  1 | Reflect.apply(Object.prototype.toString, baz, [])
"
`;

exports[`invalid(31): 'Reflect.apply(window.toString, baz, […' > Code 1`] = `
"
  1 | Reflect.apply(window.toString, baz, [])
"
`;

exports[`invalid(31): 'Reflect.apply(window.toString, baz, […' > Error 1/1 1`] = `
"
> 1 | Reflect.apply(window.toString, baz, [])
    |               ^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(31): 'Reflect.apply(window.toString, baz, […' > Output 1`] = `
"
  1 | Reflect.apply(Object.prototype.toString, baz, [])
"
`;

exports[`invalid(32): 'Reflect.apply(global.toString, baz, […' > Code 1`] = `
"
  1 | Reflect.apply(global.toString, baz, [])
"
`;

exports[`invalid(32): 'Reflect.apply(global.toString, baz, […' > Error 1/1 1`] = `
"
> 1 | Reflect.apply(global.toString, baz, [])
    |               ^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(32): 'Reflect.apply(global.toString, baz, […' > Output 1`] = `
"
  1 | Reflect.apply(Object.prototype.toString, baz, [])
"
`;

exports[`invalid(33): '/* globals toString: readonly */ Refl…' > Code 1`] = `
"
  1 | /* globals toString: readonly */ Reflect.apply(toString, baz, [])
"
`;

exports[`invalid(33): '/* globals toString: readonly */ Refl…' > Error 1/1 1`] = `
"
> 1 | /* globals toString: readonly */ Reflect.apply(toString, baz, [])
    |                                                ^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(33): '/* globals toString: readonly */ Refl…' > Output 1`] = `
"
  1 | /* globals toString: readonly */ Reflect.apply(Object.prototype.toString, baz, [])
"
`;

exports[`invalid(34): 'Reflect.apply(globalThis["toString"],…' > Code 1`] = `
"
  1 | Reflect.apply(globalThis["toString"], baz, [])
"
`;

exports[`invalid(34): 'Reflect.apply(globalThis["toString"],…' > Error 1/1 1`] = `
"
> 1 | Reflect.apply(globalThis["toString"], baz, [])
    |               ^^^^^^^^^^^^^^^^^^^^^^ Prefer using \`Object.prototype.toString\`.
"
`;

exports[`invalid(34): 'Reflect.apply(globalThis["toString"],…' > Output 1`] = `
"
  1 | Reflect.apply(Object.prototype.toString, baz, [])
"
`;
