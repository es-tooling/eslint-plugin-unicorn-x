// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const array = new Array(1)' > Code 1`] = `
"
  1 | const array = new Array(1)
"
`;

exports[`invalid(0): 'const array = new Array(1)' > Error 1/1 1`] = `
"
> 1 | const array = new Array(1)
    |               ^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(0): 'const array = new Array(1)' > Output 1`] = `
"
  1 | const array = Array.from({length: 1})
"
`;

exports[`invalid(1): 'const zero = 0;\\nconst array = new Ar…' > Code 1`] = `
"
  1 | const zero = 0;
  2 | const array = new Array(zero);
"
`;

exports[`invalid(1): 'const zero = 0;\\nconst array = new Ar…' > Error 1/1 1`] = `
"
  1 | const zero = 0;
> 2 | const array = new Array(zero);
    |               ^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(1): 'const zero = 0;\\nconst array = new Ar…' > Output 1`] = `
"
  1 | const zero = 0;
  2 | const array = Array.from({length: zero});
"
`;

exports[`invalid(2): 'const length = 1;\\nconst array = new …' > Code 1`] = `
"
  1 | const length = 1;
  2 | const array = new Array(length);
"
`;

exports[`invalid(2): 'const length = 1;\\nconst array = new …' > Error 1/1 1`] = `
"
  1 | const length = 1;
> 2 | const array = new Array(length);
    |               ^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(2): 'const length = 1;\\nconst array = new …' > Output 1`] = `
"
  1 | const length = 1;
  2 | const array = Array.from({length});
"
`;

exports[`invalid(3): 'const array = new Array(1.5)' > Code 1`] = `
"
  1 | const array = new Array(1.5)
"
`;

exports[`invalid(3): 'const array = new Array(1.5)' > Error 1/1 1`] = `
"
> 1 | const array = new Array(1.5)
    |               ^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(3): 'const array = new Array(1.5)' > Output 1`] = `
"
  1 | const array = Array.from({length: 1.5})
"
`;

exports[`invalid(4): 'const array = new Array(Number("1"))' > Code 1`] = `
"
  1 | const array = new Array(Number("1"))
"
`;

exports[`invalid(4): 'const array = new Array(Number("1"))' > Error 1/1 1`] = `
"
> 1 | const array = new Array(Number("1"))
    |               ^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(4): 'const array = new Array(Number("1"))' > Output 1`] = `
"
  1 | const array = Array.from({length: Number("1")})
"
`;

exports[`invalid(5): 'const array = new Array("1")' > Code 1`] = `
"
  1 | const array = new Array("1")
"
`;

exports[`invalid(5): 'const array = new Array("1")' > Error 1/1 1`] = `
"
> 1 | const array = new Array("1")
    |               ^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(5): 'const array = new Array("1")' > Output 1`] = `
"
  1 | const array = ["1"]
"
`;

exports[`invalid(6): 'const array = new Array(null)' > Code 1`] = `
"
  1 | const array = new Array(null)
"
`;

exports[`invalid(6): 'const array = new Array(null)' > Error 1/1 1`] = `
"
> 1 | const array = new Array(null)
    |               ^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(6): 'const array = new Array(null)' > Output 1`] = `
"
  1 | const array = [null]
"
`;

exports[`invalid(7): 'const array = new Array(("1"))' > Code 1`] = `
"
  1 | const array = new Array(("1"))
"
`;

exports[`invalid(7): 'const array = new Array(("1"))' > Error 1/1 1`] = `
"
> 1 | const array = new Array(("1"))
    |               ^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(7): 'const array = new Array(("1"))' > Output 1`] = `
"
  1 | const array = [("1")]
"
`;

exports[`invalid(8): 'const array = new Array((0, 1))' > Code 1`] = `
"
  1 | const array = new Array((0, 1))
"
`;

exports[`invalid(8): 'const array = new Array((0, 1))' > Error 1/1 1`] = `
"
> 1 | const array = new Array((0, 1))
    |               ^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(8): 'const array = new Array((0, 1))' > Output 1`] = `
"
  1 | const array = Array.from({length: (0, 1)})
"
`;

exports[`invalid(9): 'const foo = []\\nnew Array("bar").forE…' > Code 1`] = `
"
  1 | const foo = []
  2 | new Array("bar").forEach(baz)
"
`;

exports[`invalid(9): 'const foo = []\\nnew Array("bar").forE…' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | new Array("bar").forEach(baz)
    | ^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(9): 'const foo = []\\nnew Array("bar").forE…' > Output 1`] = `
"
  1 | const foo = []
  2 | ;["bar"].forEach(baz)
"
`;

exports[`invalid(10): 'new Array(0xff)' > Code 1`] = `
"
  1 | new Array(0xff)
"
`;

exports[`invalid(10): 'new Array(0xff)' > Error 1/1 1`] = `
"
> 1 | new Array(0xff)
    | ^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(10): 'new Array(0xff)' > Output 1`] = `
"
  1 | Array.from({length: 0xff})
"
`;

exports[`invalid(11): 'new Array(Math.PI | foo)' > Code 1`] = `
"
  1 | new Array(Math.PI | foo)
"
`;

exports[`invalid(11): 'new Array(Math.PI | foo)' > Error 1/1 1`] = `
"
> 1 | new Array(Math.PI | foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(11): 'new Array(Math.PI | foo)' > Output 1`] = `
"
  1 | Array.from({length: Math.PI | foo})
"
`;

exports[`invalid(12): 'new Array(Math.min(foo, bar))' > Code 1`] = `
"
  1 | new Array(Math.min(foo, bar))
"
`;

exports[`invalid(12): 'new Array(Math.min(foo, bar))' > Error 1/1 1`] = `
"
> 1 | new Array(Math.min(foo, bar))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(12): 'new Array(Math.min(foo, bar))' > Output 1`] = `
"
  1 | Array.from({length: Math.min(foo, bar)})
"
`;

exports[`invalid(13): 'new Array(Number(foo))' > Code 1`] = `
"
  1 | new Array(Number(foo))
"
`;

exports[`invalid(13): 'new Array(Number(foo))' > Error 1/1 1`] = `
"
> 1 | new Array(Number(foo))
    | ^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(13): 'new Array(Number(foo))' > Output 1`] = `
"
  1 | Array.from({length: Number(foo)})
"
`;

exports[`invalid(14): 'new Array(Number.MAX_SAFE_INTEGER)' > Code 1`] = `
"
  1 | new Array(Number.MAX_SAFE_INTEGER)
"
`;

exports[`invalid(14): 'new Array(Number.MAX_SAFE_INTEGER)' > Error 1/1 1`] = `
"
> 1 | new Array(Number.MAX_SAFE_INTEGER)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(14): 'new Array(Number.MAX_SAFE_INTEGER)' > Output 1`] = `
"
  1 | Array.from({length: Number.MAX_SAFE_INTEGER})
"
`;

exports[`invalid(15): 'new Array(parseInt(foo))' > Code 1`] = `
"
  1 | new Array(parseInt(foo))
"
`;

exports[`invalid(15): 'new Array(parseInt(foo))' > Error 1/1 1`] = `
"
> 1 | new Array(parseInt(foo))
    | ^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(15): 'new Array(parseInt(foo))' > Output 1`] = `
"
  1 | Array.from({length: parseInt(foo)})
"
`;

exports[`invalid(16): 'new Array(Number.parseInt(foo))' > Code 1`] = `
"
  1 | new Array(Number.parseInt(foo))
"
`;

exports[`invalid(16): 'new Array(Number.parseInt(foo))' > Error 1/1 1`] = `
"
> 1 | new Array(Number.parseInt(foo))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(16): 'new Array(Number.parseInt(foo))' > Output 1`] = `
"
  1 | Array.from({length: Number.parseInt(foo)})
"
`;

exports[`invalid(17): 'new Array(+foo)' > Code 1`] = `
"
  1 | new Array(+foo)
"
`;

exports[`invalid(17): 'new Array(+foo)' > Error 1/1 1`] = `
"
> 1 | new Array(+foo)
    | ^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(17): 'new Array(+foo)' > Output 1`] = `
"
  1 | Array.from({length: +foo})
"
`;

exports[`invalid(18): 'new Array(-Math.PI)' > Code 1`] = `
"
  1 | new Array(-Math.PI)
"
`;

exports[`invalid(18): 'new Array(-Math.PI)' > Error 1/1 1`] = `
"
> 1 | new Array(-Math.PI)
    | ^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(18): 'new Array(-Math.PI)' > Output 1`] = `
"
  1 | Array.from({length: -Math.PI})
"
`;

exports[`invalid(19): 'new Array(-"-2")' > Code 1`] = `
"
  1 | new Array(-"-2")
"
`;

exports[`invalid(19): 'new Array(-"-2")' > Error 1/1 1`] = `
"
> 1 | new Array(-"-2")
    | ^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(19): 'new Array(-"-2")' > Output 1`] = `
"
  1 | Array.from({length: -"-2"})
"
`;

exports[`invalid(20): 'new Array(foo.length)' > Code 1`] = `
"
  1 | new Array(foo.length)
"
`;

exports[`invalid(20): 'new Array(foo.length)' > Error 1/1 1`] = `
"
> 1 | new Array(foo.length)
    | ^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(20): 'new Array(foo.length)' > Output 1`] = `
"
  1 | Array.from({length: foo.length})
"
`;

exports[`invalid(21): 'const foo = 1; new Array(foo + 2)' > Code 1`] = `
"
  1 | const foo = 1; new Array(foo + 2)
"
`;

exports[`invalid(21): 'const foo = 1; new Array(foo + 2)' > Error 1/1 1`] = `
"
> 1 | const foo = 1; new Array(foo + 2)
    |                ^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(21): 'const foo = 1; new Array(foo + 2)' > Output 1`] = `
"
  1 | const foo = 1; Array.from({length: foo + 2})
"
`;

exports[`invalid(22): 'new Array(foo - 2)' > Code 1`] = `
"
  1 | new Array(foo - 2)
"
`;

exports[`invalid(22): 'new Array(foo - 2)' > Error 1/1 1`] = `
"
> 1 | new Array(foo - 2)
    | ^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(22): 'new Array(foo - 2)' > Output 1`] = `
"
  1 | Array.from({length: foo - 2})
"
`;

exports[`invalid(23): 'new Array(foo -= 2)' > Code 1`] = `
"
  1 | new Array(foo -= 2)
"
`;

exports[`invalid(23): 'new Array(foo -= 2)' > Error 1/1 1`] = `
"
> 1 | new Array(foo -= 2)
    | ^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(23): 'new Array(foo -= 2)' > Output 1`] = `
"
  1 | Array.from({length: foo -= 2})
"
`;

exports[`invalid(24): 'new Array(foo ? 1 : 2)' > Code 1`] = `
"
  1 | new Array(foo ? 1 : 2)
"
`;

exports[`invalid(24): 'new Array(foo ? 1 : 2)' > Error 1/1 1`] = `
"
> 1 | new Array(foo ? 1 : 2)
    | ^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(24): 'new Array(foo ? 1 : 2)' > Output 1`] = `
"
  1 | Array.from({length: foo ? 1 : 2})
"
`;

exports[`invalid(25): 'const truthy = "truthy"; new Array(tr…' > Code 1`] = `
"
  1 | const truthy = "truthy"; new Array(truthy ? 1 : foo)
"
`;

exports[`invalid(25): 'const truthy = "truthy"; new Array(tr…' > Error 1/1 1`] = `
"
> 1 | const truthy = "truthy"; new Array(truthy ? 1 : foo)
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(25): 'const truthy = "truthy"; new Array(tr…' > Output 1`] = `
"
  1 | const truthy = "truthy"; Array.from({length: truthy ? 1 : foo})
"
`;

exports[`invalid(26): 'const falsy = !"truthy"; new Array(fa…' > Code 1`] = `
"
  1 | const falsy = !"truthy"; new Array(falsy ? foo : 1)
"
`;

exports[`invalid(26): 'const falsy = !"truthy"; new Array(fa…' > Error 1/1 1`] = `
"
> 1 | const falsy = !"truthy"; new Array(falsy ? foo : 1)
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(26): 'const falsy = !"truthy"; new Array(fa…' > Output 1`] = `
"
  1 | const falsy = !"truthy"; Array.from({length: falsy ? foo : 1})
"
`;

exports[`invalid(27): 'new Array((1n, 2))' > Code 1`] = `
"
  1 | new Array((1n, 2))
"
`;

exports[`invalid(27): 'new Array((1n, 2))' > Error 1/1 1`] = `
"
> 1 | new Array((1n, 2))
    | ^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(27): 'new Array((1n, 2))' > Output 1`] = `
"
  1 | Array.from({length: (1n, 2)})
"
`;

exports[`invalid(28): 'new Array(Number.NaN)' > Code 1`] = `
"
  1 | new Array(Number.NaN)
"
`;

exports[`invalid(28): 'new Array(Number.NaN)' > Error 1/1 1`] = `
"
> 1 | new Array(Number.NaN)
    | ^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(28): 'new Array(Number.NaN)' > Output 1`] = `
"
  1 | Array.from({length: Number.NaN})
"
`;

exports[`invalid(29): 'new Array(NaN)' > Code 1`] = `
"
  1 | new Array(NaN)
"
`;

exports[`invalid(29): 'new Array(NaN)' > Error 1/1 1`] = `
"
> 1 | new Array(NaN)
    | ^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(29): 'new Array(NaN)' > Output 1`] = `
"
  1 | Array.from({length: NaN})
"
`;

exports[`invalid(30): 'new Array(foo >>> bar)' > Code 1`] = `
"
  1 | new Array(foo >>> bar)
"
`;

exports[`invalid(30): 'new Array(foo >>> bar)' > Error 1/1 1`] = `
"
> 1 | new Array(foo >>> bar)
    | ^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(30): 'new Array(foo >>> bar)' > Output 1`] = `
"
  1 | Array.from({length: foo >>> bar})
"
`;

exports[`invalid(31): 'new Array(foo >>>= bar)' > Code 1`] = `
"
  1 | new Array(foo >>>= bar)
"
`;

exports[`invalid(31): 'new Array(foo >>>= bar)' > Error 1/1 1`] = `
"
> 1 | new Array(foo >>>= bar)
    | ^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(31): 'new Array(foo >>>= bar)' > Output 1`] = `
"
  1 | Array.from({length: foo >>>= bar})
"
`;

exports[`invalid(32): 'new Array(++bar.length)' > Code 1`] = `
"
  1 | new Array(++bar.length)
"
`;

exports[`invalid(32): 'new Array(++bar.length)' > Error 1/1 1`] = `
"
> 1 | new Array(++bar.length)
    | ^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(32): 'new Array(++bar.length)' > Output 1`] = `
"
  1 | Array.from({length: ++bar.length})
"
`;

exports[`invalid(33): 'new Array(bar.length++)' > Code 1`] = `
"
  1 | new Array(bar.length++)
"
`;

exports[`invalid(33): 'new Array(bar.length++)' > Error 1/1 1`] = `
"
> 1 | new Array(bar.length++)
    | ^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(33): 'new Array(bar.length++)' > Output 1`] = `
"
  1 | Array.from({length: bar.length++})
"
`;

exports[`invalid(34): 'new Array(foo = bar.length)' > Code 1`] = `
"
  1 | new Array(foo = bar.length)
"
`;

exports[`invalid(34): 'new Array(foo = bar.length)' > Error 1/1 1`] = `
"
> 1 | new Array(foo = bar.length)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(34): 'new Array(foo = bar.length)' > Output 1`] = `
"
  1 | Array.from({length: foo = bar.length})
"
`;

exports[`invalid(35): 'new Array("0xff")' > Code 1`] = `
"
  1 | new Array("0xff")
"
`;

exports[`invalid(35): 'new Array("0xff")' > Error 1/1 1`] = `
"
> 1 | new Array("0xff")
    | ^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(35): 'new Array("0xff")' > Output 1`] = `
"
  1 | ["0xff"]
"
`;

exports[`invalid(36): 'new Array(Math.NON_EXISTS_PROPERTY)' > Code 1`] = `
"
  1 | new Array(Math.NON_EXISTS_PROPERTY)
"
`;

exports[`invalid(36): 'new Array(Math.NON_EXISTS_PROPERTY)' > Error 1/1 1`] = `
"
> 1 | new Array(Math.NON_EXISTS_PROPERTY)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(36): 'new Array(Math.NON_EXISTS_PROPERTY)' > Output 1`] = `
"
  1 | [Math.NON_EXISTS_PROPERTY]
"
`;

exports[`invalid(37): 'new Array(Math.NON_EXISTS_METHOD(foo))' > Code 1`] = `
"
  1 | new Array(Math.NON_EXISTS_METHOD(foo))
"
`;

exports[`invalid(37): 'new Array(Math.NON_EXISTS_METHOD(foo))' > Error 1/1 1`] = `
"
> 1 | new Array(Math.NON_EXISTS_METHOD(foo))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: Math.NON_EXISTS_METHOD(foo)})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [Math.NON_EXISTS_METHOD(foo)]
"
`;

exports[`invalid(38): 'new Array(Math[min](foo, bar))' > Code 1`] = `
"
  1 | new Array(Math[min](foo, bar))
"
`;

exports[`invalid(38): 'new Array(Math[min](foo, bar))' > Error 1/1 1`] = `
"
> 1 | new Array(Math[min](foo, bar))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: Math[min](foo, bar)})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [Math[min](foo, bar)]
"
`;

exports[`invalid(39): 'new Array(Number[MAX_SAFE_INTEGER])' > Code 1`] = `
"
  1 | new Array(Number[MAX_SAFE_INTEGER])
"
`;

exports[`invalid(39): 'new Array(Number[MAX_SAFE_INTEGER])' > Error 1/1 1`] = `
"
> 1 | new Array(Number[MAX_SAFE_INTEGER])
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: Number[MAX_SAFE_INTEGER]})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [Number[MAX_SAFE_INTEGER]]
"
`;

exports[`invalid(40): 'new Array(new Number(foo))' > Code 1`] = `
"
  1 | new Array(new Number(foo))
"
`;

exports[`invalid(40): 'new Array(new Number(foo))' > Error 1/1 1`] = `
"
> 1 | new Array(new Number(foo))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: new Number(foo)})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [new Number(foo)]
"
`;

exports[`invalid(41): 'const foo = 1; new Array(foo + "2")' > Code 1`] = `
"
  1 | const foo = 1; new Array(foo + "2")
"
`;

exports[`invalid(41): 'const foo = 1; new Array(foo + "2")' > Error 1/1 1`] = `
"
> 1 | const foo = 1; new Array(foo + "2")
    |                ^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(41): 'const foo = 1; new Array(foo + "2")' > Output 1`] = `
"
  1 | const foo = 1; [foo + "2"]
"
`;

exports[`invalid(42): 'new Array(foo - 2n)' > Code 1`] = `
"
  1 | new Array(foo - 2n)
"
`;

exports[`invalid(42): 'new Array(foo - 2n)' > Error 1/1 1`] = `
"
> 1 | new Array(foo - 2n)
    | ^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: foo - 2n})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [foo - 2n]
"
`;

exports[`invalid(43): 'new Array(foo -= 2n)' > Code 1`] = `
"
  1 | new Array(foo -= 2n)
"
`;

exports[`invalid(43): 'new Array(foo -= 2n)' > Error 1/1 1`] = `
"
> 1 | new Array(foo -= 2n)
    | ^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: foo -= 2n})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [foo -= 2n]
"
`;

exports[`invalid(44): 'new Array(foo instanceof 1)' > Code 1`] = `
"
  1 | new Array(foo instanceof 1)
"
`;

exports[`invalid(44): 'new Array(foo instanceof 1)' > Error 1/1 1`] = `
"
> 1 | new Array(foo instanceof 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: foo instanceof 1})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [foo instanceof 1]
"
`;

exports[`invalid(45): 'new Array(foo || 1)' > Code 1`] = `
"
  1 | new Array(foo || 1)
"
`;

exports[`invalid(45): 'new Array(foo || 1)' > Error 1/1 1`] = `
"
> 1 | new Array(foo || 1)
    | ^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: foo || 1})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [foo || 1]
"
`;

exports[`invalid(46): 'new Array(foo ||= 1)' > Code 1`] = `
"
  1 | new Array(foo ||= 1)
"
`;

exports[`invalid(46): 'new Array(foo ||= 1)' > Error 1/1 1`] = `
"
> 1 | new Array(foo ||= 1)
    | ^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: foo ||= 1})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [foo ||= 1]
"
`;

exports[`invalid(47): 'new Array(foo ? 1n : 2)' > Code 1`] = `
"
  1 | new Array(foo ? 1n : 2)
"
`;

exports[`invalid(47): 'new Array(foo ? 1n : 2)' > Error 1/1 1`] = `
"
> 1 | new Array(foo ? 1n : 2)
    | ^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: foo ? 1n : 2})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [foo ? 1n : 2]
"
`;

exports[`invalid(48): 'new Array((1, 2n))' > Code 1`] = `
"
  1 | new Array((1, 2n))
"
`;

exports[`invalid(48): 'new Array((1, 2n))' > Error 1/1 1`] = `
"
> 1 | new Array((1, 2n))
    | ^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(48): 'new Array((1, 2n))' > Output 1`] = `
"
  1 | [(1, 2n)]
"
`;

exports[`invalid(49): 'new Array(-foo)' > Code 1`] = `
"
  1 | new Array(-foo)
"
`;

exports[`invalid(49): 'new Array(-foo)' > Error 1/1 1`] = `
"
> 1 | new Array(-foo)
    | ^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: -foo})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [-foo]
"
`;

exports[`invalid(50): 'new Array(~foo)' > Code 1`] = `
"
  1 | new Array(~foo)
"
`;

exports[`invalid(50): 'new Array(~foo)' > Error 1/1 1`] = `
"
> 1 | new Array(~foo)
    | ^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: ~foo})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [~foo]
"
`;

exports[`invalid(51): 'new Array(typeof 1)' > Code 1`] = `
"
  1 | new Array(typeof 1)
"
`;

exports[`invalid(51): 'new Array(typeof 1)' > Error 1/1 1`] = `
"
> 1 | new Array(typeof 1)
    | ^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`
"
`;

exports[`invalid(51): 'new Array(typeof 1)' > Output 1`] = `
"
  1 | [typeof 1]
"
`;

exports[`invalid(52): 'const truthy = "truthy"; new Array(tr…' > Code 1`] = `
"
  1 | const truthy = "truthy"; new Array(truthy ? foo : 1)
"
`;

exports[`invalid(52): 'const truthy = "truthy"; new Array(tr…' > Error 1/1 1`] = `
"
> 1 | const truthy = "truthy"; new Array(truthy ? foo : 1)
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | const truthy = "truthy"; Array.from({length: truthy ? foo : 1})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | const truthy = "truthy"; [truthy ? foo : 1]
"
`;

exports[`invalid(53): 'const falsy = !"truthy"; new Array(fa…' > Code 1`] = `
"
  1 | const falsy = !"truthy"; new Array(falsy ? 1 : foo)
"
`;

exports[`invalid(53): 'const falsy = !"truthy"; new Array(fa…' > Error 1/1 1`] = `
"
> 1 | const falsy = !"truthy"; new Array(falsy ? 1 : foo)
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | const falsy = !"truthy"; Array.from({length: falsy ? 1 : foo})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | const falsy = !"truthy"; [falsy ? 1 : foo]
"
`;

exports[`invalid(54): 'new Array(unknown ? foo : 1)' > Code 1`] = `
"
  1 | new Array(unknown ? foo : 1)
"
`;

exports[`invalid(54): 'new Array(unknown ? foo : 1)' > Error 1/1 1`] = `
"
> 1 | new Array(unknown ? foo : 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: unknown ? foo : 1})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [unknown ? foo : 1]
"
`;

exports[`invalid(55): 'new Array(unknown ? 1 : foo)' > Code 1`] = `
"
  1 | new Array(unknown ? 1 : foo)
"
`;

exports[`invalid(55): 'new Array(unknown ? 1 : foo)' > Error 1/1 1`] = `
"
> 1 | new Array(unknown ? 1 : foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: unknown ? 1 : foo})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [unknown ? 1 : foo]
"
`;

exports[`invalid(56): 'new Array(++foo)' > Code 1`] = `
"
  1 | new Array(++foo)
"
`;

exports[`invalid(56): 'new Array(++foo)' > Error 1/1 1`] = `
"
> 1 | new Array(++foo)
    | ^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | Array.from({length: ++foo})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | [++foo]
"
`;

exports[`invalid(57): 'const array = new Array(foo)' > Code 1`] = `
"
  1 | const array = new Array(foo)
"
`;

exports[`invalid(57): 'const array = new Array(foo)' > Error 1/1 1`] = `
"
> 1 | const array = new Array(foo)
    |               ^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | const array = Array.from({length: foo})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | const array = [foo]
"
`;

exports[`invalid(58): 'const array = new Array(length)' > Code 1`] = `
"
  1 | const array = new Array(length)
"
`;

exports[`invalid(58): 'const array = new Array(length)' > Error 1/1 1`] = `
"
> 1 | const array = new Array(length)
    |               ^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | const array = Array.from({length})

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | const array = [length]
"
`;

exports[`invalid(59): 'const foo = []\\nnew Array(bar).forEac…' > Code 1`] = `
"
  1 | const foo = []
  2 | new Array(bar).forEach(baz)
"
`;

exports[`invalid(59): 'const foo = []\\nnew Array(bar).forEac…' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | new Array(bar).forEach(baz)
    | ^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/2: The argument is the length of array.
  1 | const foo = []
  2 | Array.from({length: bar}).forEach(baz)

--------------------------------------------------------------------------------
Suggestion 2/2: The argument is the only element of array.
  1 | const foo = []
  2 | ;[bar].forEach(baz)
"
`;

exports[`invalid(60): 'const array = new Array(...[foo])' > Code 1`] = `
"
  1 | const array = new Array(...[foo])
"
`;

exports[`invalid(60): 'const array = new Array(...[foo])' > Error 1/1 1`] = `
"
> 1 | const array = new Array(...[foo])
    |               ^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/1: Spread the argument.
  1 | const array = [...[foo]]
"
`;

exports[`invalid(61): 'const array = new Array(...foo)' > Code 1`] = `
"
  1 | const array = new Array(...foo)
"
`;

exports[`invalid(61): 'const array = new Array(...foo)' > Error 1/1 1`] = `
"
> 1 | const array = new Array(...foo)
    |               ^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/1: Spread the argument.
  1 | const array = [...foo]
"
`;

exports[`invalid(62): 'const array = new Array(...[...foo])' > Code 1`] = `
"
  1 | const array = new Array(...[...foo])
"
`;

exports[`invalid(62): 'const array = new Array(...[...foo])' > Error 1/1 1`] = `
"
> 1 | const array = new Array(...[...foo])
    |               ^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/1: Spread the argument.
  1 | const array = [...[...foo]]
"
`;

exports[`invalid(63): 'const array = new Array(...[1])' > Code 1`] = `
"
  1 | const array = new Array(...[1])
"
`;

exports[`invalid(63): 'const array = new Array(...[1])' > Error 1/1 1`] = `
"
> 1 | const array = new Array(...[1])
    |               ^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/1: Spread the argument.
  1 | const array = [...[1]]
"
`;

exports[`invalid(64): 'const array = new Array(...["1"])' > Code 1`] = `
"
  1 | const array = new Array(...["1"])
"
`;

exports[`invalid(64): 'const array = new Array(...["1"])' > Error 1/1 1`] = `
"
> 1 | const array = new Array(...["1"])
    |               ^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/1: Spread the argument.
  1 | const array = [...["1"]]
"
`;

exports[`invalid(65): 'const array = new Array(...[1, "1"])' > Code 1`] = `
"
  1 | const array = new Array(...[1, "1"])
"
`;

exports[`invalid(65): 'const array = new Array(...[1, "1"])' > Error 1/1 1`] = `
"
> 1 | const array = new Array(...[1, "1"])
    |               ^^^^^^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/1: Spread the argument.
  1 | const array = [...[1, "1"]]
"
`;

exports[`invalid(66): 'const foo = []\\nnew Array(...bar).for…' > Code 1`] = `
"
  1 | const foo = []
  2 | new Array(...bar).forEach(baz)
"
`;

exports[`invalid(66): 'const foo = []\\nnew Array(...bar).for…' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | new Array(...bar).forEach(baz)
    | ^^^^^^^^^^^^^^^^^ \`new Array()\` is unclear in intent; use either \`[x]\` or \`Array.from({length: x})\`

--------------------------------------------------------------------------------
Suggestion 1/1: Spread the argument.
  1 | const foo = []
  2 | ;[...bar].forEach(baz)
"
`;
