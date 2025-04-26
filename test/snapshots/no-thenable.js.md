// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = {then: 1}' > Code 1`] = `
"
  1 | const foo = {then: 1}
"
`;

exports[`invalid(0): 'const foo = {then: 1}' > Error 1/1 1`] = `
"
> 1 | const foo = {then: 1}
    |              ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(1): 'const foo = {["then"]: 1}' > Code 1`] = `
"
  1 | const foo = {["then"]: 1}
"
`;

exports[`invalid(1): 'const foo = {["then"]: 1}' > Error 1/1 1`] = `
"
> 1 | const foo = {["then"]: 1}
    |               ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(2): 'const foo = {[\`then\`]: 1}' > Code 1`] = `
"
  1 | const foo = {[\`then\`]: 1}
"
`;

exports[`invalid(2): 'const foo = {[\`then\`]: 1}' > Error 1/1 1`] = `
"
> 1 | const foo = {[\`then\`]: 1}
    |               ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(3): 'const THEN = "then";const foo = {[THE…' > Code 1`] = `
"
  1 | const THEN = "then";const foo = {[THEN]: 1}
"
`;

exports[`invalid(3): 'const THEN = "then";const foo = {[THE…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";const foo = {[THEN]: 1}
    |                                   ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(4): 'const foo = {then() {}}' > Code 1`] = `
"
  1 | const foo = {then() {}}
"
`;

exports[`invalid(4): 'const foo = {then() {}}' > Error 1/1 1`] = `
"
> 1 | const foo = {then() {}}
    |              ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(5): 'const foo = {["then"]() {}}' > Code 1`] = `
"
  1 | const foo = {["then"]() {}}
"
`;

exports[`invalid(5): 'const foo = {["then"]() {}}' > Error 1/1 1`] = `
"
> 1 | const foo = {["then"]() {}}
    |               ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(6): 'const foo = {[\`then\`]() {}}' > Code 1`] = `
"
  1 | const foo = {[\`then\`]() {}}
"
`;

exports[`invalid(6): 'const foo = {[\`then\`]() {}}' > Error 1/1 1`] = `
"
> 1 | const foo = {[\`then\`]() {}}
    |               ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(7): 'const THEN = "then";const foo = {[THE…' > Code 1`] = `
"
  1 | const THEN = "then";const foo = {[THEN]() {}}
"
`;

exports[`invalid(7): 'const THEN = "then";const foo = {[THE…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";const foo = {[THEN]() {}}
    |                                   ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(8): 'const foo = {get then() {}}' > Code 1`] = `
"
  1 | const foo = {get then() {}}
"
`;

exports[`invalid(8): 'const foo = {get then() {}}' > Error 1/1 1`] = `
"
> 1 | const foo = {get then() {}}
    |                  ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(9): 'const foo = {get ["then"]() {}}' > Code 1`] = `
"
  1 | const foo = {get ["then"]() {}}
"
`;

exports[`invalid(9): 'const foo = {get ["then"]() {}}' > Error 1/1 1`] = `
"
> 1 | const foo = {get ["then"]() {}}
    |                   ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(10): 'const foo = {get [\`then\`]() {}}' > Code 1`] = `
"
  1 | const foo = {get [\`then\`]() {}}
"
`;

exports[`invalid(10): 'const foo = {get [\`then\`]() {}}' > Error 1/1 1`] = `
"
> 1 | const foo = {get [\`then\`]() {}}
    |                   ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(11): 'const THEN = "then";const foo = {get …' > Code 1`] = `
"
  1 | const THEN = "then";const foo = {get [THEN]() {}}
"
`;

exports[`invalid(11): 'const THEN = "then";const foo = {get …' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";const foo = {get [THEN]() {}}
    |                                       ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(12): 'class Foo {then}' > Code 1`] = `
"
  1 | class Foo {then}
"
`;

exports[`invalid(12): 'class Foo {then}' > Error 1/1 1`] = `
"
> 1 | class Foo {then}
    |            ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(13): 'const Foo = class {then}' > Code 1`] = `
"
  1 | const Foo = class {then}
"
`;

exports[`invalid(13): 'const Foo = class {then}' > Error 1/1 1`] = `
"
> 1 | const Foo = class {then}
    |                    ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(14): 'class Foo {["then"]}' > Code 1`] = `
"
  1 | class Foo {["then"]}
"
`;

exports[`invalid(14): 'class Foo {["then"]}' > Error 1/1 1`] = `
"
> 1 | class Foo {["then"]}
    |             ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(15): 'class Foo {[\`then\`]}' > Code 1`] = `
"
  1 | class Foo {[\`then\`]}
"
`;

exports[`invalid(15): 'class Foo {[\`then\`]}' > Error 1/1 1`] = `
"
> 1 | class Foo {[\`then\`]}
    |             ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(16): 'const THEN = "then";class Foo {[THEN]}' > Code 1`] = `
"
  1 | const THEN = "then";class Foo {[THEN]}
"
`;

exports[`invalid(16): 'const THEN = "then";class Foo {[THEN]}' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";class Foo {[THEN]}
    |                                 ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(17): 'class Foo {then() {}}' > Code 1`] = `
"
  1 | class Foo {then() {}}
"
`;

exports[`invalid(17): 'class Foo {then() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {then() {}}
    |            ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(18): 'class Foo {["then"]() {}}' > Code 1`] = `
"
  1 | class Foo {["then"]() {}}
"
`;

exports[`invalid(18): 'class Foo {["then"]() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {["then"]() {}}
    |             ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(19): 'class Foo {[\`then\`]() {}}' > Code 1`] = `
"
  1 | class Foo {[\`then\`]() {}}
"
`;

exports[`invalid(19): 'class Foo {[\`then\`]() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {[\`then\`]() {}}
    |             ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(20): 'const THEN = "then";class Foo {[THEN]…' > Code 1`] = `
"
  1 | const THEN = "then";class Foo {[THEN]() {}}
"
`;

exports[`invalid(20): 'const THEN = "then";class Foo {[THEN]…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";class Foo {[THEN]() {}}
    |                                 ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(21): 'class Foo {static then}' > Code 1`] = `
"
  1 | class Foo {static then}
"
`;

exports[`invalid(21): 'class Foo {static then}' > Error 1/1 1`] = `
"
> 1 | class Foo {static then}
    |                   ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(22): 'class Foo {static ["then"]}' > Code 1`] = `
"
  1 | class Foo {static ["then"]}
"
`;

exports[`invalid(22): 'class Foo {static ["then"]}' > Error 1/1 1`] = `
"
> 1 | class Foo {static ["then"]}
    |                    ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(23): 'class Foo {static [\`then\`]}' > Code 1`] = `
"
  1 | class Foo {static [\`then\`]}
"
`;

exports[`invalid(23): 'class Foo {static [\`then\`]}' > Error 1/1 1`] = `
"
> 1 | class Foo {static [\`then\`]}
    |                    ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(24): 'const THEN = "then";class Foo {static…' > Code 1`] = `
"
  1 | const THEN = "then";class Foo {static [THEN]}
"
`;

exports[`invalid(24): 'const THEN = "then";class Foo {static…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";class Foo {static [THEN]}
    |                                        ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(25): 'class Foo {static then() {}}' > Code 1`] = `
"
  1 | class Foo {static then() {}}
"
`;

exports[`invalid(25): 'class Foo {static then() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {static then() {}}
    |                   ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(26): 'class Foo {static ["then"]() {}}' > Code 1`] = `
"
  1 | class Foo {static ["then"]() {}}
"
`;

exports[`invalid(26): 'class Foo {static ["then"]() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {static ["then"]() {}}
    |                    ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(27): 'class Foo {static [\`then\`]() {}}' > Code 1`] = `
"
  1 | class Foo {static [\`then\`]() {}}
"
`;

exports[`invalid(27): 'class Foo {static [\`then\`]() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {static [\`then\`]() {}}
    |                    ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(28): 'const THEN = "then";class Foo {static…' > Code 1`] = `
"
  1 | const THEN = "then";class Foo {static [THEN]() {}}
"
`;

exports[`invalid(28): 'const THEN = "then";class Foo {static…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";class Foo {static [THEN]() {}}
    |                                        ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(29): 'class Foo {get then() {}}' > Code 1`] = `
"
  1 | class Foo {get then() {}}
"
`;

exports[`invalid(29): 'class Foo {get then() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {get then() {}}
    |                ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(30): 'class Foo {get ["then"]() {}}' > Code 1`] = `
"
  1 | class Foo {get ["then"]() {}}
"
`;

exports[`invalid(30): 'class Foo {get ["then"]() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {get ["then"]() {}}
    |                 ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(31): 'class Foo {get [\`then\`]() {}}' > Code 1`] = `
"
  1 | class Foo {get [\`then\`]() {}}
"
`;

exports[`invalid(31): 'class Foo {get [\`then\`]() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {get [\`then\`]() {}}
    |                 ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(32): 'const THEN = "then";class Foo {get [T…' > Code 1`] = `
"
  1 | const THEN = "then";class Foo {get [THEN]() {}}
"
`;

exports[`invalid(32): 'const THEN = "then";class Foo {get [T…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";class Foo {get [THEN]() {}}
    |                                     ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(33): 'class Foo {set then(v) {}}' > Code 1`] = `
"
  1 | class Foo {set then(v) {}}
"
`;

exports[`invalid(33): 'class Foo {set then(v) {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {set then(v) {}}
    |                ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(34): 'class Foo {set ["then"](v) {}}' > Code 1`] = `
"
  1 | class Foo {set ["then"](v) {}}
"
`;

exports[`invalid(34): 'class Foo {set ["then"](v) {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {set ["then"](v) {}}
    |                 ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(35): 'class Foo {set [\`then\`](v) {}}' > Code 1`] = `
"
  1 | class Foo {set [\`then\`](v) {}}
"
`;

exports[`invalid(35): 'class Foo {set [\`then\`](v) {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {set [\`then\`](v) {}}
    |                 ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(36): 'const THEN = "then";class Foo {set [T…' > Code 1`] = `
"
  1 | const THEN = "then";class Foo {set [THEN](v) {}}
"
`;

exports[`invalid(36): 'const THEN = "then";class Foo {set [T…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";class Foo {set [THEN](v) {}}
    |                                     ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(37): 'class Foo {static get then() {}}' > Code 1`] = `
"
  1 | class Foo {static get then() {}}
"
`;

exports[`invalid(37): 'class Foo {static get then() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {static get then() {}}
    |                       ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(38): 'class Foo {static get ["then"]() {}}' > Code 1`] = `
"
  1 | class Foo {static get ["then"]() {}}
"
`;

exports[`invalid(38): 'class Foo {static get ["then"]() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {static get ["then"]() {}}
    |                        ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(39): 'class Foo {static get [\`then\`]() {}}' > Code 1`] = `
"
  1 | class Foo {static get [\`then\`]() {}}
"
`;

exports[`invalid(39): 'class Foo {static get [\`then\`]() {}}' > Error 1/1 1`] = `
"
> 1 | class Foo {static get [\`then\`]() {}}
    |                        ^^^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(40): 'const THEN = "then";class Foo {static…' > Code 1`] = `
"
  1 | const THEN = "then";class Foo {static get [THEN]() {}}
"
`;

exports[`invalid(40): 'const THEN = "then";class Foo {static…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";class Foo {static get [THEN]() {}}
    |                                            ^^^^ Do not add \`then\` to a class.
"
`;

exports[`invalid(41): 'foo.then = 1' > Code 1`] = `
"
  1 | foo.then = 1
"
`;

exports[`invalid(41): 'foo.then = 1' > Error 1/1 1`] = `
"
> 1 | foo.then = 1
    |     ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(42): 'foo["then"] = 1' > Code 1`] = `
"
  1 | foo["then"] = 1
"
`;

exports[`invalid(42): 'foo["then"] = 1' > Error 1/1 1`] = `
"
> 1 | foo["then"] = 1
    |     ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(43): 'foo[\`then\`] = 1' > Code 1`] = `
"
  1 | foo[\`then\`] = 1
"
`;

exports[`invalid(43): 'foo[\`then\`] = 1' > Error 1/1 1`] = `
"
> 1 | foo[\`then\`] = 1
    |     ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(44): 'const THEN = "then";foo[THEN] = 1' > Code 1`] = `
"
  1 | const THEN = "then";foo[THEN] = 1
"
`;

exports[`invalid(44): 'const THEN = "then";foo[THEN] = 1' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";foo[THEN] = 1
    |                         ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(45): 'foo.then += 1' > Code 1`] = `
"
  1 | foo.then += 1
"
`;

exports[`invalid(45): 'foo.then += 1' > Error 1/1 1`] = `
"
> 1 | foo.then += 1
    |     ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(46): 'foo.then ||= 1' > Code 1`] = `
"
  1 | foo.then ||= 1
"
`;

exports[`invalid(46): 'foo.then ||= 1' > Error 1/1 1`] = `
"
> 1 | foo.then ||= 1
    |     ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(47): 'foo.then ??= 1' > Code 1`] = `
"
  1 | foo.then ??= 1
"
`;

exports[`invalid(47): 'foo.then ??= 1' > Error 1/1 1`] = `
"
> 1 | foo.then ??= 1
    |     ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(48): 'Object.defineProperty(foo, "then", 1)' > Code 1`] = `
"
  1 | Object.defineProperty(foo, "then", 1)
"
`;

exports[`invalid(48): 'Object.defineProperty(foo, "then", 1)' > Error 1/1 1`] = `
"
> 1 | Object.defineProperty(foo, "then", 1)
    |                            ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(49): 'Object.defineProperty(foo, \`then\`, 1)' > Code 1`] = `
"
  1 | Object.defineProperty(foo, \`then\`, 1)
"
`;

exports[`invalid(49): 'Object.defineProperty(foo, \`then\`, 1)' > Error 1/1 1`] = `
"
> 1 | Object.defineProperty(foo, \`then\`, 1)
    |                            ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(50): 'const THEN = "then";Object.defineProp…' > Code 1`] = `
"
  1 | const THEN = "then";Object.defineProperty(foo, THEN, 1)
"
`;

exports[`invalid(50): 'const THEN = "then";Object.defineProp…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";Object.defineProperty(foo, THEN, 1)
    |                                                ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(51): 'Reflect.defineProperty(foo, "then", 1)' > Code 1`] = `
"
  1 | Reflect.defineProperty(foo, "then", 1)
"
`;

exports[`invalid(51): 'Reflect.defineProperty(foo, "then", 1)' > Error 1/1 1`] = `
"
> 1 | Reflect.defineProperty(foo, "then", 1)
    |                             ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(52): 'Reflect.defineProperty(foo, \`then\`, 1)' > Code 1`] = `
"
  1 | Reflect.defineProperty(foo, \`then\`, 1)
"
`;

exports[`invalid(52): 'Reflect.defineProperty(foo, \`then\`, 1)' > Error 1/1 1`] = `
"
> 1 | Reflect.defineProperty(foo, \`then\`, 1)
    |                             ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(53): 'const THEN = "then";Reflect.definePro…' > Code 1`] = `
"
  1 | const THEN = "then";Reflect.defineProperty(foo, THEN, 1)
"
`;

exports[`invalid(53): 'const THEN = "then";Reflect.definePro…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";Reflect.defineProperty(foo, THEN, 1)
    |                                                 ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(54): 'Object.fromEntries([["then", 1]])' > Code 1`] = `
"
  1 | Object.fromEntries([["then", 1]])
"
`;

exports[`invalid(54): 'Object.fromEntries([["then", 1]])' > Error 1/1 1`] = `
"
> 1 | Object.fromEntries([["then", 1]])
    |                      ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(55): 'Object.fromEntries([["then"]])' > Code 1`] = `
"
  1 | Object.fromEntries([["then"]])
"
`;

exports[`invalid(55): 'Object.fromEntries([["then"]])' > Error 1/1 1`] = `
"
> 1 | Object.fromEntries([["then"]])
    |                      ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(56): 'Object.fromEntries([[\`then\`, 1]])' > Code 1`] = `
"
  1 | Object.fromEntries([[\`then\`, 1]])
"
`;

exports[`invalid(56): 'Object.fromEntries([[\`then\`, 1]])' > Error 1/1 1`] = `
"
> 1 | Object.fromEntries([[\`then\`, 1]])
    |                      ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(57): 'const THEN = "then";Object.fromEntrie…' > Code 1`] = `
"
  1 | const THEN = "then";Object.fromEntries([[THEN, 1]])
"
`;

exports[`invalid(57): 'const THEN = "then";Object.fromEntrie…' > Error 1/1 1`] = `
"
> 1 | const THEN = "then";Object.fromEntries([[THEN, 1]])
    |                                          ^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(58): 'Object.fromEntries([foo, ["then", 1]])' > Code 1`] = `
"
  1 | Object.fromEntries([foo, ["then", 1]])
"
`;

exports[`invalid(58): 'Object.fromEntries([foo, ["then", 1]])' > Error 1/1 1`] = `
"
> 1 | Object.fromEntries([foo, ["then", 1]])
    |                           ^^^^^^ Do not add \`then\` to an object.
"
`;

exports[`invalid(59): 'const then = 1; export {then}' > Code 1`] = `
"
  1 | const then = 1; export {then}
"
`;

exports[`invalid(59): 'const then = 1; export {then}' > Error 1/2 1`] = `
"
> 1 | const then = 1; export {then}
    |                         ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(59): 'const then = 1; export {then}' > Error 2/2 1`] = `
"
> 1 | const then = 1; export {then}
    |                         ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(60): 'const notThen = 1; export {notThen as…' > Code 1`] = `
"
  1 | const notThen = 1; export {notThen as then}
"
`;

exports[`invalid(60): 'const notThen = 1; export {notThen as…' > Error 1/1 1`] = `
"
> 1 | const notThen = 1; export {notThen as then}
    |                                       ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(61): 'export {then} from "foo"' > Code 1`] = `
"
  1 | export {then} from "foo"
"
`;

exports[`invalid(61): 'export {then} from "foo"' > Error 1/2 1`] = `
"
> 1 | export {then} from "foo"
    |         ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(61): 'export {then} from "foo"' > Error 2/2 1`] = `
"
> 1 | export {then} from "foo"
    |         ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(62): 'export function then() {}' > Code 1`] = `
"
  1 | export function then() {}
"
`;

exports[`invalid(62): 'export function then() {}' > Error 1/1 1`] = `
"
> 1 | export function then() {}
    |                 ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(63): 'export async function then() {}' > Code 1`] = `
"
  1 | export async function then() {}
"
`;

exports[`invalid(63): 'export async function then() {}' > Error 1/1 1`] = `
"
> 1 | export async function then() {}
    |                       ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(64): 'export function * then() {}' > Code 1`] = `
"
  1 | export function * then() {}
"
`;

exports[`invalid(64): 'export function * then() {}' > Error 1/1 1`] = `
"
> 1 | export function * then() {}
    |                   ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(65): 'export async function * then() {}' > Code 1`] = `
"
  1 | export async function * then() {}
"
`;

exports[`invalid(65): 'export async function * then() {}' > Error 1/1 1`] = `
"
> 1 | export async function * then() {}
    |                         ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(66): 'export class then {}' > Code 1`] = `
"
  1 | export class then {}
"
`;

exports[`invalid(66): 'export class then {}' > Error 1/1 1`] = `
"
> 1 | export class then {}
    |              ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(67): 'export const then = 1' > Code 1`] = `
"
  1 | export const then = 1
"
`;

exports[`invalid(67): 'export const then = 1' > Error 1/1 1`] = `
"
> 1 | export const then = 1
    |              ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(68): 'export let then = 1' > Code 1`] = `
"
  1 | export let then = 1
"
`;

exports[`invalid(68): 'export let then = 1' > Error 1/1 1`] = `
"
> 1 | export let then = 1
    |            ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(69): 'export var then = 1' > Code 1`] = `
"
  1 | export var then = 1
"
`;

exports[`invalid(69): 'export var then = 1' > Error 1/1 1`] = `
"
> 1 | export var then = 1
    |            ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(70): 'export const [then] = 1' > Code 1`] = `
"
  1 | export const [then] = 1
"
`;

exports[`invalid(70): 'export const [then] = 1' > Error 1/1 1`] = `
"
> 1 | export const [then] = 1
    |               ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(71): 'export let [then] = 1' > Code 1`] = `
"
  1 | export let [then] = 1
"
`;

exports[`invalid(71): 'export let [then] = 1' > Error 1/1 1`] = `
"
> 1 | export let [then] = 1
    |             ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(72): 'export var [then] = 1' > Code 1`] = `
"
  1 | export var [then] = 1
"
`;

exports[`invalid(72): 'export var [then] = 1' > Error 1/1 1`] = `
"
> 1 | export var [then] = 1
    |             ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(73): 'export const [, then] = 1' > Code 1`] = `
"
  1 | export const [, then] = 1
"
`;

exports[`invalid(73): 'export const [, then] = 1' > Error 1/1 1`] = `
"
> 1 | export const [, then] = 1
    |                 ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(74): 'export let [, then] = 1' > Code 1`] = `
"
  1 | export let [, then] = 1
"
`;

exports[`invalid(74): 'export let [, then] = 1' > Error 1/1 1`] = `
"
> 1 | export let [, then] = 1
    |               ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(75): 'export var [, then] = 1' > Code 1`] = `
"
  1 | export var [, then] = 1
"
`;

exports[`invalid(75): 'export var [, then] = 1' > Error 1/1 1`] = `
"
> 1 | export var [, then] = 1
    |               ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(76): 'export const [, ...then] = 1' > Code 1`] = `
"
  1 | export const [, ...then] = 1
"
`;

exports[`invalid(76): 'export const [, ...then] = 1' > Error 1/1 1`] = `
"
> 1 | export const [, ...then] = 1
    |                    ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(77): 'export let [, ...then] = 1' > Code 1`] = `
"
  1 | export let [, ...then] = 1
"
`;

exports[`invalid(77): 'export let [, ...then] = 1' > Error 1/1 1`] = `
"
> 1 | export let [, ...then] = 1
    |                  ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(78): 'export var [, ...then] = 1' > Code 1`] = `
"
  1 | export var [, ...then] = 1
"
`;

exports[`invalid(78): 'export var [, ...then] = 1' > Error 1/1 1`] = `
"
> 1 | export var [, ...then] = 1
    |                  ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(79): 'export const {then} = 1' > Code 1`] = `
"
  1 | export const {then} = 1
"
`;

exports[`invalid(79): 'export const {then} = 1' > Error 1/1 1`] = `
"
> 1 | export const {then} = 1
    |               ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(80): 'export let {then} = 1' > Code 1`] = `
"
  1 | export let {then} = 1
"
`;

exports[`invalid(80): 'export let {then} = 1' > Error 1/1 1`] = `
"
> 1 | export let {then} = 1
    |             ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(81): 'export var {then} = 1' > Code 1`] = `
"
  1 | export var {then} = 1
"
`;

exports[`invalid(81): 'export var {then} = 1' > Error 1/1 1`] = `
"
> 1 | export var {then} = 1
    |             ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(82): 'export const {foo, ...then} = 1' > Code 1`] = `
"
  1 | export const {foo, ...then} = 1
"
`;

exports[`invalid(82): 'export const {foo, ...then} = 1' > Error 1/1 1`] = `
"
> 1 | export const {foo, ...then} = 1
    |                       ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(83): 'export let {foo, ...then} = 1' > Code 1`] = `
"
  1 | export let {foo, ...then} = 1
"
`;

exports[`invalid(83): 'export let {foo, ...then} = 1' > Error 1/1 1`] = `
"
> 1 | export let {foo, ...then} = 1
    |                     ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(84): 'export var {foo, ...then} = 1' > Code 1`] = `
"
  1 | export var {foo, ...then} = 1
"
`;

exports[`invalid(84): 'export var {foo, ...then} = 1' > Error 1/1 1`] = `
"
> 1 | export var {foo, ...then} = 1
    |                     ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(85): 'export const {foo: {bar: [{baz: then}…' > Code 1`] = `
"
  1 | export const {foo: {bar: [{baz: then}]}} = 1
"
`;

exports[`invalid(85): 'export const {foo: {bar: [{baz: then}…' > Error 1/1 1`] = `
"
> 1 | export const {foo: {bar: [{baz: then}]}} = 1
    |                                 ^^^^ Do not export \`then\`.
"
`;

exports[`invalid(86): 'export const notThen = 1, then = 1' > Code 1`] = `
"
  1 | export const notThen = 1, then = 1
"
`;

exports[`invalid(86): 'export const notThen = 1, then = 1' > Error 1/1 1`] = `
"
> 1 | export const notThen = 1, then = 1
    |                           ^^^^ Do not export \`then\`.
"
`;
