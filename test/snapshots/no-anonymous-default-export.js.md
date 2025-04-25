// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '@decorator export default class {}' > Code 1`] = `
"
  1 | @decorator export default class {}
"
`;

exports[`invalid(0): '@decorator export default class {}' > Error 1/1 1`] = `
"
> 1 | @decorator export default class {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | @decorator export default class Foo {}
"
`;

exports[`invalid(0): '@decorator export default class {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(0): 'export default function () {}' > Code 1`] = `
"
  1 | export default function () {}
"
`;

exports[`invalid(0): 'export default function () {}' > Error 1/1 1`] = `
"
> 1 | export default function () {}
    |                ^^^^^^^^^ The function should be named.
"
`;

exports[`invalid(1): 'export default @decorator(class {}) c…' > Code 1`] = `
"
  1 | export default @decorator(class {}) class extends class {} {}
"
`;

exports[`invalid(1): 'export default @decorator(class {}) c…' > Error 1/1 1`] = `
"
> 1 | export default @decorator(class {}) class extends class {} {}
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | export default @decorator(class {}) class Foo extends class {} {}
"
`;

exports[`invalid(1): 'export default @decorator(class {}) c…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(1): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(1): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.
"
`;

exports[`invalid(2): 'export default () => {}' > Code 1`] = `
"
  1 | export default () => {}
"
`;

exports[`invalid(2): 'export default () => {}' > Error 1/1 1`] = `
"
> 1 | export default () => {}
    |                   ^^ The arrow function should be named.
"
`;

exports[`invalid(2): 'module.exports = @decorator(class {})…' > Code 1`] = `
"
  1 | module.exports = @decorator(class {}) class extends class {} {}
"
`;

exports[`invalid(2): 'module.exports = @decorator(class {})…' > Error 1/1 1`] = `
"
> 1 | module.exports = @decorator(class {}) class extends class {} {}
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | module.exports = @decorator(class {}) class Foo extends class {} {}
"
`;

exports[`invalid(2): 'module.exports = @decorator(class {})…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(3): '@decorator @decorator(class {}) expor…' > Code 1`] = `
"
  1 | @decorator @decorator(class {}) export default class {}
"
`;

exports[`invalid(3): '@decorator @decorator(class {}) expor…' > Error 1/1 1`] = `
"
> 1 | @decorator @decorator(class {}) export default class {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | @decorator @decorator(class {}) export default class Foo {}
"
`;

exports[`invalid(3): '@decorator @decorator(class {}) expor…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(3): 'export default function * () {}' > Code 1`] = `
"
  1 | export default function * () {}
"
`;

exports[`invalid(3): 'export default function * () {}' > Error 1/1 1`] = `
"
> 1 | export default function * () {}
    |                ^^^^^^^^^^^ The generator function should be named.
"
`;

exports[`invalid(4): 'export default async function () {}' > Code 1`] = `
"
  1 | export default async function () {}
"
`;

exports[`invalid(4): 'export default async function () {}' > Error 1/1 1`] = `
"
> 1 | export default async function () {}
    |                ^^^^^^^^^^^^^^^ The async function should be named.
"
`;

exports[`invalid(5): 'export default async function * () {}' > Code 1`] = `
"
  1 | export default async function * () {}
"
`;

exports[`invalid(5): 'export default async function * () {}' > Error 1/1 1`] = `
"
> 1 | export default async function * () {}
    |                ^^^^^^^^^^^^^^^^^ The async generator function should be named.
"
`;

exports[`invalid(6): 'export default async () => {}' > Code 1`] = `
"
  1 | export default async () => {}
"
`;

exports[`invalid(6): 'export default async () => {}' > Error 1/1 1`] = `
"
> 1 | export default async () => {}
    |                         ^^ The async arrow function should be named.
"
`;

exports[`invalid(7): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(7): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | export default class Foo {}
"
`;

exports[`invalid(7): 'export default class {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(8): 'export default class extends class {}…' > Code 1`] = `
"
  1 | export default class extends class {} {}
"
`;

exports[`invalid(8): 'export default class extends class {}…' > Error 1/1 1`] = `
"
> 1 | export default class extends class {} {}
    |                ^^^^^^^^^^^^^^^^^^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | export default class Foo extends class {} {}
"
`;

exports[`invalid(8): 'export default class extends class {}…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(9): 'export default class{}' > Code 1`] = `
"
  1 | export default class{}
"
`;

exports[`invalid(9): 'export default class{}' > Error 1/1 1`] = `
"
> 1 | export default class{}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | export default class Foo{}
"
`;

exports[`invalid(9): 'export default class{}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(10): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(10): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`FooBar\`.
  1 | export default class FooBar {}
"
`;

exports[`invalid(10): 'export default class {}' > Filename 1`] = `
"
/path/to/foo-bar.js
"
`;

exports[`invalid(11): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(11): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`FooBar\`.
  1 | export default class FooBar {}
"
`;

exports[`invalid(11): 'export default class {}' > Filename 1`] = `
"
/path/to/foo_bar.js
"
`;

exports[`invalid(12): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(12): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.
"
`;

exports[`invalid(12): 'export default class {}' > Filename 1`] = `
"
/path/to/foo+bar.js
"
`;

exports[`invalid(13): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(13): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.
"
`;

exports[`invalid(13): 'export default class {}' > Filename 1`] = `
"
/path/to/foo+bar123.js
"
`;

exports[`invalid(14): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(14): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.
"
`;

exports[`invalid(14): 'export default class {}' > Filename 1`] = `
"
/path/to/foo*.js
"
`;

exports[`invalid(15): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(15): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.
"
`;

exports[`invalid(15): 'export default class {}' > Filename 1`] = `
"
/path/to/[foo].js
"
`;

exports[`invalid(16): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(16): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Class\`.
  1 | export default class Class {}
"
`;

exports[`invalid(16): 'export default class {}' > Filename 1`] = `
"
/path/to/class.js
"
`;

exports[`invalid(17): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(17): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | export default class Foo {}
"
`;

exports[`invalid(17): 'export default class {}' > Filename 1`] = `
"
/path/to/foo.helper.js
"
`;

exports[`invalid(18): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(18): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | export default class Foo {}
"
`;

exports[`invalid(18): 'export default class {}' > Filename 1`] = `
"
/path/to/foo.bar.js
"
`;

exports[`invalid(19): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(19): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | export default class Foo {}
"
`;

exports[`invalid(19): 'export default class {}' > Filename 1`] = `
"
/path/to/foo.test.js
"
`;

exports[`invalid(20): 'export default class {}' > Code 1`] = `
"
  1 | export default class {}
"
`;

exports[`invalid(20): 'export default class {}' > Error 1/1 1`] = `
"
> 1 | export default class {}
    |                ^^^^^ The class should be named.
"
`;

exports[`invalid(20): 'export default class {}' > Filename 1`] = `
"
/path/to/.foo.js
"
`;

exports[`invalid(21): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Code 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
  2 | export default class {}
"
`;

exports[`invalid(21): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Error 1/1 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
> 2 | export default class {}
    |                ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo__\`.
  1 | let Foo, Foo_, foo, foo_
  2 | export default class Foo__ {}
"
`;

exports[`invalid(21): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(22): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Code 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
  2 | export default (class{})
"
`;

exports[`invalid(22): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Error 1/1 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
> 2 | export default (class{})
    |                 ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo__\`.
  1 | let Foo, Foo_, foo, foo_
  2 | export default (class Foo__{})
"
`;

exports[`invalid(22): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(23): 'export default (class extends class {…' > Code 1`] = `
"
  1 | export default (class extends class {} {})
"
`;

exports[`invalid(23): 'export default (class extends class {…' > Error 1/1 1`] = `
"
> 1 | export default (class extends class {} {})
    |                 ^^^^^^^^^^^^^^^^^^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Foo\`.
  1 | export default (class Foo extends class {} {})
"
`;

exports[`invalid(23): 'export default (class extends class {…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(24): 'let Exports, Exports_, exports, expor…' > Code 1`] = `
"
  1 | let Exports, Exports_, exports, exports_
  2 | exports = class {}
"
`;

exports[`invalid(24): 'let Exports, Exports_, exports, expor…' > Error 1/1 1`] = `
"
  1 | let Exports, Exports_, exports, exports_
> 2 | exports = class {}
    |           ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Exports__\`.
  1 | let Exports, Exports_, exports, exports_
  2 | exports = class Exports__ {}
"
`;

exports[`invalid(24): 'let Exports, Exports_, exports, expor…' > Filename 1`] = `
"
/path/to/exports.js
"
`;

exports[`invalid(25): 'module.exports = class {}' > Code 1`] = `
"
  1 | module.exports = class {}
"
`;

exports[`invalid(25): 'module.exports = class {}' > Error 1/1 1`] = `
"
> 1 | module.exports = class {}
    |                  ^^^^^ The class should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`Module\`.
  1 | module.exports = class Module {}
"
`;

exports[`invalid(25): 'module.exports = class {}' > Filename 1`] = `
"
/path/to/module.js
"
`;

exports[`invalid(26): 'export default function () {}' > Code 1`] = `
"
  1 | export default function () {}
"
`;

exports[`invalid(26): 'export default function () {}' > Error 1/1 1`] = `
"
> 1 | export default function () {}
    |                ^^^^^^^^^ The function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | export default function foo () {}
"
`;

exports[`invalid(26): 'export default function () {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(27): 'export default function* () {}' > Code 1`] = `
"
  1 | export default function* () {}
"
`;

exports[`invalid(27): 'export default function* () {}' > Error 1/1 1`] = `
"
> 1 | export default function* () {}
    |                ^^^^^^^^^^ The generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | export default function* foo () {}
"
`;

exports[`invalid(27): 'export default function* () {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(28): 'export default async function* () {}' > Code 1`] = `
"
  1 | export default async function* () {}
"
`;

exports[`invalid(28): 'export default async function* () {}' > Error 1/1 1`] = `
"
> 1 | export default async function* () {}
    |                ^^^^^^^^^^^^^^^^ The async generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | export default async function* foo () {}
"
`;

exports[`invalid(28): 'export default async function* () {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(29): 'export default async function*() {}' > Code 1`] = `
"
  1 | export default async function*() {}
"
`;

exports[`invalid(29): 'export default async function*() {}' > Error 1/1 1`] = `
"
> 1 | export default async function*() {}
    |                ^^^^^^^^^^^^^^^ The async generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | export default async function* foo () {}
"
`;

exports[`invalid(29): 'export default async function*() {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(30): 'export default async function *() {}' > Code 1`] = `
"
  1 | export default async function *() {}
"
`;

exports[`invalid(30): 'export default async function *() {}' > Error 1/1 1`] = `
"
> 1 | export default async function *() {}
    |                ^^^^^^^^^^^^^^^^ The async generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | export default async function * foo () {}
"
`;

exports[`invalid(30): 'export default async function *() {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(31): 'export default async function   *   (…' > Code 1`] = `
"
  1 | export default async function   *   () {}
"
`;

exports[`invalid(31): 'export default async function   *   (…' > Error 1/1 1`] = `
"
> 1 | export default async function   *   () {}
    |                ^^^^^^^^^^^^^^^^^^^^^ The async generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | export default async function   *   foo () {}
"
`;

exports[`invalid(31): 'export default async function   *   (…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(32): 'export default async function * /* co…' > Code 1`] = `
"
  1 | export default async function * /* comment */ () {}
"
`;

exports[`invalid(32): 'export default async function * /* co…' > Error 1/1 1`] = `
"
> 1 | export default async function * /* comment */ () {}
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The async generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | export default async function * /* comment */ foo () {}
"
`;

exports[`invalid(32): 'export default async function * /* co…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(33): 'export default async function * // co…' > Code 1`] = `
"
  1 | export default async function * // comment
  2 | () {}
"
`;

exports[`invalid(33): 'export default async function * // co…' > Error 1/1 1`] = `
"
> 1 | export default async function * // comment
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 2 | () {}
    | ^ The async generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | export default async function * // comment
  2 |  foo () {}
"
`;

exports[`invalid(33): 'export default async function * // co…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(34): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Code 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
  2 | export default async function * () {}
"
`;

exports[`invalid(34): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Error 1/1 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
> 2 | export default async function * () {}
    |                ^^^^^^^^^^^^^^^^^ The async generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo__\`.
  1 | let Foo, Foo_, foo, foo_
  2 | export default async function * foo__ () {}
"
`;

exports[`invalid(34): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(35): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Code 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
  2 | export default (async function * () {})
"
`;

exports[`invalid(35): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Error 1/1 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
> 2 | export default (async function * () {})
    |                 ^^^^^^^^^^^^^^^^^ The async generator function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo__\`.
  1 | let Foo, Foo_, foo, foo_
  2 | export default (async function * foo__ () {})
"
`;

exports[`invalid(35): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(36): 'let Exports, Exports_, exports, expor…' > Code 1`] = `
"
  1 | let Exports, Exports_, exports, exports_
  2 | exports = function() {}
"
`;

exports[`invalid(36): 'let Exports, Exports_, exports, expor…' > Error 1/1 1`] = `
"
  1 | let Exports, Exports_, exports, exports_
> 2 | exports = function() {}
    |           ^^^^^^^^ The function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`exports__\`.
  1 | let Exports, Exports_, exports, exports_
  2 | exports = function exports__ () {}
"
`;

exports[`invalid(36): 'let Exports, Exports_, exports, expor…' > Filename 1`] = `
"
/path/to/exports.js
"
`;

exports[`invalid(37): 'module.exports = function() {}' > Code 1`] = `
"
  1 | module.exports = function() {}
"
`;

exports[`invalid(37): 'module.exports = function() {}' > Error 1/1 1`] = `
"
> 1 | module.exports = function() {}
    |                  ^^^^^^^^ The function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`module_\`.
  1 | module.exports = function module_ () {}
"
`;

exports[`invalid(37): 'module.exports = function() {}' > Filename 1`] = `
"
/path/to/module.js
"
`;

exports[`invalid(38): 'export default () => {}' > Code 1`] = `
"
  1 | export default () => {}
"
`;

exports[`invalid(38): 'export default () => {}' > Error 1/1 1`] = `
"
> 1 | export default () => {}
    |                   ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = () => {};
  2 | export default foo;
"
`;

exports[`invalid(38): 'export default () => {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(39): 'export default async () => {}' > Code 1`] = `
"
  1 | export default async () => {}
"
`;

exports[`invalid(39): 'export default async () => {}' > Error 1/1 1`] = `
"
> 1 | export default async () => {}
    |                         ^^ The async arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = async () => {};
  2 | export default foo;
"
`;

exports[`invalid(39): 'export default async () => {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(40): 'export default () => {};' > Code 1`] = `
"
  1 | export default () => {};
"
`;

exports[`invalid(40): 'export default () => {};' > Error 1/1 1`] = `
"
> 1 | export default () => {};
    |                   ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = () => {};
  2 | export default foo;
"
`;

exports[`invalid(40): 'export default () => {};' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(41): 'export default() => {}' > Code 1`] = `
"
  1 | export default() => {}
"
`;

exports[`invalid(41): 'export default() => {}' > Error 1/1 1`] = `
"
> 1 | export default() => {}
    |                  ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = () => {};
  2 | export default foo;
"
`;

exports[`invalid(41): 'export default() => {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(42): 'export default foo => {}' > Code 1`] = `
"
  1 | export default foo => {}
"
`;

exports[`invalid(42): 'export default foo => {}' > Error 1/1 1`] = `
"
> 1 | export default foo => {}
    |                    ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo_\`.
  1 | const foo_ = foo => {};
  2 | export default foo_;
"
`;

exports[`invalid(42): 'export default foo => {}' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(43): 'export default (( () => {} ))' > Code 1`] = `
"
  1 | export default (( () => {} ))
"
`;

exports[`invalid(43): 'export default (( () => {} ))' > Error 1/1 1`] = `
"
> 1 | export default (( () => {} ))
    |                      ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = (( () => {} ));
  2 | export default foo;
"
`;

exports[`invalid(43): 'export default (( () => {} ))' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(44): '/* comment 1 */ export /* comment 2 *…' > Code 1`] = `
"
  1 | /* comment 1 */ export /* comment 2 */ default /* comment 3 */  () => {}
"
`;

exports[`invalid(44): '/* comment 1 */ export /* comment 2 *…' > Error 1/1 1`] = `
"
> 1 | /* comment 1 */ export /* comment 2 */ default /* comment 3 */  () => {}
    |                                                                    ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | /* comment 1 */ const foo = () => {};
  2 | export /* comment 2 */ default /* comment 3 */  foo;
"
`;

exports[`invalid(44): '/* comment 1 */ export /* comment 2 *…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(45): '// comment 1\\nexport\\n// comment 2\\nd…' > Code 1`] = `
"
  1 | // comment 1
  2 | export
  3 | // comment 2
  4 | default
  5 | // comment 3
  6 | () => {}
"
`;

exports[`invalid(45): '// comment 1\\nexport\\n// comment 2\\nd…' > Error 1/1 1`] = `
"
  1 | // comment 1
  2 | export
  3 | // comment 2
  4 | default
  5 | // comment 3
> 6 | () => {}
    |    ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | // comment 1
  2 | const foo = () => {};
  3 | export
  4 | // comment 2
  5 | default
  6 | // comment 3
  7 | foo;
"
`;

exports[`invalid(45): '// comment 1\\nexport\\n// comment 2\\nd…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(46): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Code 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
  2 | export default async () => {}
"
`;

exports[`invalid(46): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Error 1/1 1`] = `
"
  1 | let Foo, Foo_, foo, foo_
> 2 | export default async () => {}
    |                         ^^ The async arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo__\`.
  1 | let Foo, Foo_, foo, foo_
  2 | const foo__ = async () => {};
  3 | export default foo__;
"
`;

exports[`invalid(46): 'let Foo, Foo_, foo, foo_\\nexport defa…' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(47): 'let Exports, Exports_, exports, expor…' > Code 1`] = `
"
  1 | let Exports, Exports_, exports, exports_
  2 | exports = (( () => {} ))
"
`;

exports[`invalid(47): 'let Exports, Exports_, exports, expor…' > Error 1/1 1`] = `
"
  1 | let Exports, Exports_, exports, exports_
> 2 | exports = (( () => {} ))
    |                 ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`exports__\`.
  1 | let Exports, Exports_, exports, exports_
  2 | const exports__ = (( () => {} ));
  3 | exports = exports__;
"
`;

exports[`invalid(47): 'let Exports, Exports_, exports, expor…' > Filename 1`] = `
"
/path/to/exports.js
"
`;

exports[`invalid(48): '// comment 1\\nmodule\\n// comment 2\\n.…' > Code 1`] = `
"
  1 | // comment 1
  2 | module
  3 | // comment 2
  4 | .exports
  5 | // comment 3
  6 | =
  7 | // comment 4
  8 | () => {};
"
`;

exports[`invalid(48): '// comment 1\\nmodule\\n// comment 2\\n.…' > Error 1/1 1`] = `
"
  1 | // comment 1
  2 | module
  3 | // comment 2
  4 | .exports
  5 | // comment 3
  6 | =
  7 | // comment 4
> 8 | () => {};
    |    ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`module_\`.
  1 | // comment 1
  2 | const module_ = () => {};
  3 | module
  4 | // comment 2
  5 | .exports
  6 | // comment 3
  7 | =
  8 | // comment 4
  9 | module_;
"
`;

exports[`invalid(48): '// comment 1\\nmodule\\n// comment 2\\n.…' > Filename 1`] = `
"
/path/to/module.js
"
`;

exports[`invalid(49): '(( exports = (( () => {} )) ))' > Code 1`] = `
"
  1 | (( exports = (( () => {} )) ))
"
`;

exports[`invalid(49): '(( exports = (( () => {} )) ))' > Error 1/1 1`] = `
"
> 1 | (( exports = (( () => {} )) ))
    |                    ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = (( () => {} ));
  2 | (( exports = foo ));
"
`;

exports[`invalid(49): '(( exports = (( () => {} )) ))' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(50): '(( module.exports = (( () => {} )) ))' > Code 1`] = `
"
  1 | (( module.exports = (( () => {} )) ))
"
`;

exports[`invalid(50): '(( module.exports = (( () => {} )) ))' > Error 1/1 1`] = `
"
> 1 | (( module.exports = (( () => {} )) ))
    |                           ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = (( () => {} ));
  2 | (( module.exports = foo ));
"
`;

exports[`invalid(50): '(( module.exports = (( () => {} )) ))' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(51): '(( exports = (( () => {} )) ));' > Code 1`] = `
"
  1 | (( exports = (( () => {} )) ));
"
`;

exports[`invalid(51): '(( exports = (( () => {} )) ));' > Error 1/1 1`] = `
"
> 1 | (( exports = (( () => {} )) ));
    |                    ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = (( () => {} ));
  2 | (( exports = foo ));
"
`;

exports[`invalid(51): '(( exports = (( () => {} )) ));' > Filename 1`] = `
"
/path/to/foo.js
"
`;

exports[`invalid(52): '(( module.exports = (( () => {} )) ));' > Code 1`] = `
"
  1 | (( module.exports = (( () => {} )) ));
"
`;

exports[`invalid(52): '(( module.exports = (( () => {} )) ));' > Error 1/1 1`] = `
"
> 1 | (( module.exports = (( () => {} )) ));
    |                           ^^ The arrow function should be named.

--------------------------------------------------------------------------------
Suggestion 1/1: Name it as \`foo\`.
  1 | const foo = (( () => {} ));
  2 | (( module.exports = foo ));
"
`;

exports[`invalid(52): '(( module.exports = (( () => {} )) ));' > Filename 1`] = `
"
/path/to/foo.js
"
`;
