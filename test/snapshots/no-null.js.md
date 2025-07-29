// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = null' > Code 1`] = `
"
  1 | const foo = null
"
`;

exports[`invalid(0): 'const foo = null' > Error 1/1 1`] = `
"
> 1 | const foo = null
    |             ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | const foo = undefined
"
`;

exports[`invalid(1): 'foo(null)' > Code 1`] = `
"
  1 | foo(null)
"
`;

exports[`invalid(1): 'foo(null)' > Error 1/1 1`] = `
"
> 1 | foo(null)
    |     ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | foo(undefined)
"
`;

exports[`invalid(2): 'if (foo == null) {}' > Code 1`] = `
"
  1 | if (foo == null) {}
"
`;

exports[`invalid(2): 'if (foo == null) {}' > Error 1/1 1`] = `
"
> 1 | if (foo == null) {}
    |            ^^^^ Use \`undefined\` instead of \`null\`.
"
`;

exports[`invalid(2): 'if (foo == null) {}' > Output 1`] = `
"
  1 | if (foo == undefined) {}
"
`;

exports[`invalid(3): 'if (foo != null) {}' > Code 1`] = `
"
  1 | if (foo != null) {}
"
`;

exports[`invalid(3): 'if (foo != null) {}' > Error 1/1 1`] = `
"
> 1 | if (foo != null) {}
    |            ^^^^ Use \`undefined\` instead of \`null\`.
"
`;

exports[`invalid(3): 'if (foo != null) {}' > Output 1`] = `
"
  1 | if (foo != undefined) {}
"
`;

exports[`invalid(4): 'if (null == foo) {}' > Code 1`] = `
"
  1 | if (null == foo) {}
"
`;

exports[`invalid(4): 'if (null == foo) {}' > Error 1/1 1`] = `
"
> 1 | if (null == foo) {}
    |     ^^^^ Use \`undefined\` instead of \`null\`.
"
`;

exports[`invalid(4): 'if (null == foo) {}' > Output 1`] = `
"
  1 | if (undefined == foo) {}
"
`;

exports[`invalid(5): 'if (null != foo) {}' > Code 1`] = `
"
  1 | if (null != foo) {}
"
`;

exports[`invalid(5): 'if (null != foo) {}' > Error 1/1 1`] = `
"
> 1 | if (null != foo) {}
    |     ^^^^ Use \`undefined\` instead of \`null\`.
"
`;

exports[`invalid(5): 'if (null != foo) {}' > Output 1`] = `
"
  1 | if (undefined != foo) {}
"
`;

exports[`invalid(6): 'function foo() {\\n\\treturn null;\\n}' > Code 1`] = `
"
  1 | function foo() {
  2 | 	return null;
  3 | }
"
`;

exports[`invalid(6): 'function foo() {\\n\\treturn null;\\n}' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	return null;
    | 	       ^^^^ Use \`undefined\` instead of \`null\`.
  3 | }

--------------------------------------------------------------------------------
Suggestion 1/2: Remove \`null\`.
  1 | function foo() {
  2 | 	return ;
  3 | }

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`null\` with \`undefined\`.
  1 | function foo() {
  2 | 	return undefined;
  3 | }
"
`;

exports[`invalid(7): 'let foo = null;' > Code 1`] = `
"
  1 | let foo = null;
"
`;

exports[`invalid(7): 'let foo = null;' > Error 1/1 1`] = `
"
> 1 | let foo = null;
    |           ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove \`null\`.
  1 | let foo;

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`null\` with \`undefined\`.
  1 | let foo = undefined;
"
`;

exports[`invalid(8): 'var foo = null;' > Code 1`] = `
"
  1 | var foo = null;
"
`;

exports[`invalid(8): 'var foo = null;' > Error 1/1 1`] = `
"
> 1 | var foo = null;
    |           ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove \`null\`.
  1 | var foo;

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`null\` with \`undefined\`.
  1 | var foo = undefined;
"
`;

exports[`invalid(9): 'var foo = 1, bar = null, baz = 2;' > Code 1`] = `
"
  1 | var foo = 1, bar = null, baz = 2;
"
`;

exports[`invalid(9): 'var foo = 1, bar = null, baz = 2;' > Error 1/1 1`] = `
"
> 1 | var foo = 1, bar = null, baz = 2;
    |                    ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove \`null\`.
  1 | var foo = 1, bar, baz = 2;

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`null\` with \`undefined\`.
  1 | var foo = 1, bar = undefined, baz = 2;
"
`;

exports[`invalid(10): 'const foo = null;' > Code 1`] = `
"
  1 | const foo = null;
"
`;

exports[`invalid(10): 'const foo = null;' > Error 1/1 1`] = `
"
> 1 | const foo = null;
    |             ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | const foo = undefined;
"
`;

exports[`invalid(11): 'if (foo === null) {}' > Code 1`] = `
"
  1 | if (foo === null) {}
"
`;

exports[`invalid(11): 'if (foo === null) {}' > Error 1/1 1`] = `
"
> 1 | if (foo === null) {}
    |             ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | if (foo === undefined) {}
"
`;

exports[`invalid(11): 'if (foo === null) {}' > Options 1`] = `
"
[
  {
    "checkStrictEquality": true
  }
]
"
`;

exports[`invalid(12): 'if (null === foo) {}' > Code 1`] = `
"
  1 | if (null === foo) {}
"
`;

exports[`invalid(12): 'if (null === foo) {}' > Error 1/1 1`] = `
"
> 1 | if (null === foo) {}
    |     ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | if (undefined === foo) {}
"
`;

exports[`invalid(12): 'if (null === foo) {}' > Options 1`] = `
"
[
  {
    "checkStrictEquality": true
  }
]
"
`;

exports[`invalid(13): 'if (foo !== null) {}' > Code 1`] = `
"
  1 | if (foo !== null) {}
"
`;

exports[`invalid(13): 'if (foo !== null) {}' > Error 1/1 1`] = `
"
> 1 | if (foo !== null) {}
    |             ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | if (foo !== undefined) {}
"
`;

exports[`invalid(13): 'if (foo !== null) {}' > Options 1`] = `
"
[
  {
    "checkStrictEquality": true
  }
]
"
`;

exports[`invalid(14): 'if (null !== foo) {}' > Code 1`] = `
"
  1 | if (null !== foo) {}
"
`;

exports[`invalid(14): 'if (null !== foo) {}' > Error 1/1 1`] = `
"
> 1 | if (null !== foo) {}
    |     ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | if (undefined !== foo) {}
"
`;

exports[`invalid(14): 'if (null !== foo) {}' > Options 1`] = `
"
[
  {
    "checkStrictEquality": true
  }
]
"
`;

exports[`invalid(15): 'new Object.create(null)' > Code 1`] = `
"
  1 | new Object.create(null)
"
`;

exports[`invalid(15): 'new Object.create(null)' > Error 1/1 1`] = `
"
> 1 | new Object.create(null)
    |                   ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | new Object.create(undefined)
"
`;

exports[`invalid(16): 'new foo.insertBefore(bar, null)' > Code 1`] = `
"
  1 | new foo.insertBefore(bar, null)
"
`;

exports[`invalid(16): 'new foo.insertBefore(bar, null)' > Error 1/1 1`] = `
"
> 1 | new foo.insertBefore(bar, null)
    |                           ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | new foo.insertBefore(bar, undefined)
"
`;

exports[`invalid(17): 'create(null)' > Code 1`] = `
"
  1 | create(null)
"
`;

exports[`invalid(17): 'create(null)' > Error 1/1 1`] = `
"
> 1 | create(null)
    |        ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | create(undefined)
"
`;

exports[`invalid(18): 'insertBefore(bar, null)' > Code 1`] = `
"
  1 | insertBefore(bar, null)
"
`;

exports[`invalid(18): 'insertBefore(bar, null)' > Error 1/1 1`] = `
"
> 1 | insertBefore(bar, null)
    |                   ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | insertBefore(bar, undefined)
"
`;

exports[`invalid(19): 'Object["create"](null)' > Code 1`] = `
"
  1 | Object["create"](null)
"
`;

exports[`invalid(19): 'Object["create"](null)' > Error 1/1 1`] = `
"
> 1 | Object["create"](null)
    |                  ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | Object["create"](undefined)
"
`;

exports[`invalid(20): 'foo["insertBefore"](bar, null)' > Code 1`] = `
"
  1 | foo["insertBefore"](bar, null)
"
`;

exports[`invalid(20): 'foo["insertBefore"](bar, null)' > Error 1/1 1`] = `
"
> 1 | foo["insertBefore"](bar, null)
    |                          ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | foo["insertBefore"](bar, undefined)
"
`;

exports[`invalid(21): 'Object[create](null)' > Code 1`] = `
"
  1 | Object[create](null)
"
`;

exports[`invalid(21): 'Object[create](null)' > Error 1/1 1`] = `
"
> 1 | Object[create](null)
    |                ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | Object[create](undefined)
"
`;

exports[`invalid(22): 'foo[insertBefore](bar, null)' > Code 1`] = `
"
  1 | foo[insertBefore](bar, null)
"
`;

exports[`invalid(22): 'foo[insertBefore](bar, null)' > Error 1/1 1`] = `
"
> 1 | foo[insertBefore](bar, null)
    |                        ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | foo[insertBefore](bar, undefined)
"
`;

exports[`invalid(23): 'Object[null](null)' > Code 1`] = `
"
  1 | Object[null](null)
"
`;

exports[`invalid(23): 'Object[null](null)' > Error 1/2 1`] = `
"
> 1 | Object[null](null)
    |        ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | Object[undefined](null)
"
`;

exports[`invalid(23): 'Object[null](null)' > Error 2/2 1`] = `
"
> 1 | Object[null](null)
    |              ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | Object[null](undefined)
"
`;

exports[`invalid(24): 'Object.notCreate(null)' > Code 1`] = `
"
  1 | Object.notCreate(null)
"
`;

exports[`invalid(24): 'Object.notCreate(null)' > Error 1/1 1`] = `
"
> 1 | Object.notCreate(null)
    |                  ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | Object.notCreate(undefined)
"
`;

exports[`invalid(25): 'foo.notInsertBefore(foo, null)' > Code 1`] = `
"
  1 | foo.notInsertBefore(foo, null)
"
`;

exports[`invalid(25): 'foo.notInsertBefore(foo, null)' > Error 1/1 1`] = `
"
> 1 | foo.notInsertBefore(foo, null)
    |                          ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | foo.notInsertBefore(foo, undefined)
"
`;

exports[`invalid(26): 'NotObject.create(null)' > Code 1`] = `
"
  1 | NotObject.create(null)
"
`;

exports[`invalid(26): 'NotObject.create(null)' > Error 1/1 1`] = `
"
> 1 | NotObject.create(null)
    |                  ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | NotObject.create(undefined)
"
`;

exports[`invalid(27): 'lib.Object.create(null)' > Code 1`] = `
"
  1 | lib.Object.create(null)
"
`;

exports[`invalid(27): 'lib.Object.create(null)' > Error 1/1 1`] = `
"
> 1 | lib.Object.create(null)
    |                   ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | lib.Object.create(undefined)
"
`;

exports[`invalid(28): 'Object.create(...[null])' > Code 1`] = `
"
  1 | Object.create(...[null])
"
`;

exports[`invalid(28): 'Object.create(...[null])' > Error 1/1 1`] = `
"
> 1 | Object.create(...[null])
    |                   ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | Object.create(...[undefined])
"
`;

exports[`invalid(29): 'Object.create(null, bar, extraArgumen…' > Code 1`] = `
"
  1 | Object.create(null, bar, extraArgument)
"
`;

exports[`invalid(29): 'Object.create(null, bar, extraArgumen…' > Error 1/1 1`] = `
"
> 1 | Object.create(null, bar, extraArgument)
    |               ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | Object.create(undefined, bar, extraArgument)
"
`;

exports[`invalid(30): 'foo.insertBefore(null)' > Code 1`] = `
"
  1 | foo.insertBefore(null)
"
`;

exports[`invalid(30): 'foo.insertBefore(null)' > Error 1/1 1`] = `
"
> 1 | foo.insertBefore(null)
    |                  ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | foo.insertBefore(undefined)
"
`;

exports[`invalid(31): 'foo.insertBefore(foo, null, bar)' > Code 1`] = `
"
  1 | foo.insertBefore(foo, null, bar)
"
`;

exports[`invalid(31): 'foo.insertBefore(foo, null, bar)' > Error 1/1 1`] = `
"
> 1 | foo.insertBefore(foo, null, bar)
    |                       ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | foo.insertBefore(foo, undefined, bar)
"
`;

exports[`invalid(32): 'foo.insertBefore(...[foo], null)' > Code 1`] = `
"
  1 | foo.insertBefore(...[foo], null)
"
`;

exports[`invalid(32): 'foo.insertBefore(...[foo], null)' > Error 1/1 1`] = `
"
> 1 | foo.insertBefore(...[foo], null)
    |                            ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | foo.insertBefore(...[foo], undefined)
"
`;

exports[`invalid(33): 'foo.insertBefore(null, bar)' > Code 1`] = `
"
  1 | foo.insertBefore(null, bar)
"
`;

exports[`invalid(33): 'foo.insertBefore(null, bar)' > Error 1/1 1`] = `
"
> 1 | foo.insertBefore(null, bar)
    |                  ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | foo.insertBefore(undefined, bar)
"
`;

exports[`invalid(34): 'Object.create(bar, null)' > Code 1`] = `
"
  1 | Object.create(bar, null)
"
`;

exports[`invalid(34): 'Object.create(bar, null)' > Error 1/1 1`] = `
"
> 1 | Object.create(bar, null)
    |                    ^^^^ Use \`undefined\` instead of \`null\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`null\` with \`undefined\`.
  1 | Object.create(bar, undefined)
"
`;
