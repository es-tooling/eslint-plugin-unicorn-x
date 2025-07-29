// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo ? foo : bar;' > Code 1`] = `
"
  1 | foo ? foo : bar;
"
`;

exports[`invalid(0): 'foo ? foo : bar;' > Error 1/1 1`] = `
"
> 1 | foo ? foo : bar;
    | ^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | foo ?? bar;

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | foo || bar;
"
`;

exports[`invalid(1): 'foo.bar ? foo.bar : foo.baz' > Code 1`] = `
"
  1 | foo.bar ? foo.bar : foo.baz
"
`;

exports[`invalid(1): 'foo.bar ? foo.bar : foo.baz' > Error 1/1 1`] = `
"
> 1 | foo.bar ? foo.bar : foo.baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | foo.bar ?? foo.baz

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | foo.bar || foo.baz
"
`;

exports[`invalid(2): 'foo?.bar ? foo.bar : baz' > Code 1`] = `
"
  1 | foo?.bar ? foo.bar : baz
"
`;

exports[`invalid(2): 'foo?.bar ? foo.bar : baz' > Error 1/1 1`] = `
"
> 1 | foo?.bar ? foo.bar : baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | foo?.bar ?? baz

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | foo?.bar || baz
"
`;

exports[`invalid(3): '!bar ? foo : bar;' > Code 1`] = `
"
  1 | !bar ? foo : bar;
"
`;

exports[`invalid(3): '!bar ? foo : bar;' > Error 1/1 1`] = `
"
> 1 | !bar ? foo : bar;
    | ^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | bar ?? foo;

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | bar || foo;
"
`;

exports[`invalid(4): '!!bar ? foo : !bar;' > Code 1`] = `
"
  1 | !!bar ? foo : !bar;
"
`;

exports[`invalid(4): '!!bar ? foo : !bar;' > Error 1/1 1`] = `
"
> 1 | !!bar ? foo : !bar;
    | ^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | !bar ?? foo;

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | !bar || foo;
"
`;

exports[`invalid(5): 'foo() ? foo() : bar' > Code 1`] = `
"
  1 | foo() ? foo() : bar
"
`;

exports[`invalid(5): 'foo() ? foo() : bar' > Error 1/1 1`] = `
"
> 1 | foo() ? foo() : bar
    | ^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | foo() ?? bar

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | foo() || bar
"
`;

exports[`invalid(6): 'foo ? foo : a && b' > Code 1`] = `
"
  1 | foo ? foo : a && b
"
`;

exports[`invalid(6): 'foo ? foo : a && b' > Error 1/1 1`] = `
"
> 1 | foo ? foo : a && b
    | ^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | foo ?? (a && b)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | foo || (a && b)
"
`;

exports[`invalid(7): 'foo ? foo : a || b' > Code 1`] = `
"
  1 | foo ? foo : a || b
"
`;

exports[`invalid(7): 'foo ? foo : a || b' > Error 1/1 1`] = `
"
> 1 | foo ? foo : a || b
    | ^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | foo ?? (a || b)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | foo || a || b
"
`;

exports[`invalid(8): 'foo ? foo : a ?? b' > Code 1`] = `
"
  1 | foo ? foo : a ?? b
"
`;

exports[`invalid(8): 'foo ? foo : a ?? b' > Error 1/1 1`] = `
"
> 1 | foo ? foo : a ?? b
    | ^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | foo ?? a ?? b

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | foo || (a ?? b)
"
`;

exports[`invalid(9): 'a && b ? a && b : bar' > Code 1`] = `
"
  1 | a && b ? a && b : bar
"
`;

exports[`invalid(9): 'a && b ? a && b : bar' > Error 1/1 1`] = `
"
> 1 | a && b ? a && b : bar
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | (a && b) ?? bar

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | (a && b) || bar
"
`;

exports[`invalid(10): 'a || b ? a || b : bar' > Code 1`] = `
"
  1 | a || b ? a || b : bar
"
`;

exports[`invalid(10): 'a || b ? a || b : bar' > Error 1/1 1`] = `
"
> 1 | a || b ? a || b : bar
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | (a || b) ?? bar

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | a || b || bar
"
`;

exports[`invalid(11): 'a ?? b ? a ?? b : bar' > Code 1`] = `
"
  1 | a ?? b ? a ?? b : bar
"
`;

exports[`invalid(11): 'a ?? b ? a ?? b : bar' > Error 1/1 1`] = `
"
> 1 | a ?? b ? a ?? b : bar
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | a ?? b ?? bar

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | (a ?? b) || bar
"
`;

exports[`invalid(12): 'foo ? foo : await a' > Code 1`] = `
"
  1 | foo ? foo : await a
"
`;

exports[`invalid(12): 'foo ? foo : await a' > Error 1/1 1`] = `
"
> 1 | foo ? foo : await a
    | ^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | foo ?? (await a)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | foo || (await a)
"
`;

exports[`invalid(13): 'await a ? await a : foo' > Code 1`] = `
"
  1 | await a ? await a : foo
"
`;

exports[`invalid(13): 'await a ? await a : foo' > Error 1/1 1`] = `
"
> 1 | await a ? await a : foo
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | (await a) ?? foo

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | (await a) || foo
"
`;

exports[`invalid(14): 'const foo = []\\n!+a ? b : +a' > Code 1`] = `
"
  1 | const foo = []
  2 | !+a ? b : +a
"
`;

exports[`invalid(14): 'const foo = []\\n!+a ? b : +a' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | !+a ? b : +a
    | ^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | const foo = []
  2 | ;+a ?? b

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | const foo = []
  2 | ;+a || b
"
`;

exports[`invalid(15): 'const foo = []\\na && b ? a && b : 1' > Code 1`] = `
"
  1 | const foo = []
  2 | a && b ? a && b : 1
"
`;

exports[`invalid(15): 'const foo = []\\na && b ? a && b : 1' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | a && b ? a && b : 1
    | ^^^^^^^^^^^^^^^^^^^ Prefer using a logical operator over a ternary.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`??\` operator.
  1 | const foo = []
  2 | ;(a && b) ?? 1

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`||\` operator.
  1 | const foo = []
  2 | ;(a && b) || 1
"
`;
