// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '/^a/.test("string")' > Code 1`] = `
"
  1 | /^a/.test("string")
"
`;

exports[`invalid(0): '/^a/.test("string")' > Error 1/1 1`] = `
"
> 1 | /^a/.test("string")
    | ^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.
"
`;

exports[`invalid(0): '/^a/.test("string")' > Output 1`] = `
"
  1 | "string".startsWith('a')
"
`;

exports[`invalid(1): '/^a/.test((0, "string"))' > Code 1`] = `
"
  1 | /^a/.test((0, "string"))
"
`;

exports[`invalid(1): '/^a/.test((0, "string"))' > Error 1/1 1`] = `
"
> 1 | /^a/.test((0, "string"))
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.
"
`;

exports[`invalid(1): '/^a/.test((0, "string"))' > Output 1`] = `
"
  1 | (0, "string").startsWith('a')
"
`;

exports[`invalid(2): 'async function a() {return /^a/.test(…' > Code 1`] = `
"
  1 | async function a() {return /^a/.test(await foo())}
"
`;

exports[`invalid(2): 'async function a() {return /^a/.test(…' > Error 1/1 1`] = `
"
> 1 | async function a() {return /^a/.test(await foo())}
    |                            ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | async function a() {return String(await foo()).startsWith('a')}

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | async function a() {return (await foo())?.startsWith('a')}

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | async function a() {return ((await foo()) ?? '').startsWith('a')}
"
`;

exports[`invalid(2): 'async function a() {return /^a/.test(…' > Output 1`] = `
"
  1 | async function a() {return (await foo()).startsWith('a')}
"
`;

exports[`invalid(3): '/^a/.test(foo + bar)' > Code 1`] = `
"
  1 | /^a/.test(foo + bar)
"
`;

exports[`invalid(3): '/^a/.test(foo + bar)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(foo + bar)
    | ^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(foo + bar).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (foo + bar)?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | ((foo + bar) ?? '').startsWith('a')
"
`;

exports[`invalid(3): '/^a/.test(foo + bar)' > Output 1`] = `
"
  1 | (foo + bar).startsWith('a')
"
`;

exports[`invalid(4): '/^a/.test(foo || bar)' > Code 1`] = `
"
  1 | /^a/.test(foo || bar)
"
`;

exports[`invalid(4): '/^a/.test(foo || bar)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(foo || bar)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(foo || bar).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (foo || bar)?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | ((foo || bar) ?? '').startsWith('a')
"
`;

exports[`invalid(4): '/^a/.test(foo || bar)' > Output 1`] = `
"
  1 | (foo || bar).startsWith('a')
"
`;

exports[`invalid(5): '/^a/.test(new SomeString)' > Code 1`] = `
"
  1 | /^a/.test(new SomeString)
"
`;

exports[`invalid(5): '/^a/.test(new SomeString)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(new SomeString)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(new SomeString).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (new SomeString)?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (new SomeString ?? '').startsWith('a')
"
`;

exports[`invalid(5): '/^a/.test(new SomeString)' > Output 1`] = `
"
  1 | (new SomeString).startsWith('a')
"
`;

exports[`invalid(6): '/^a/.test(new (SomeString))' > Code 1`] = `
"
  1 | /^a/.test(new (SomeString))
"
`;

exports[`invalid(6): '/^a/.test(new (SomeString))' > Error 1/1 1`] = `
"
> 1 | /^a/.test(new (SomeString))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(new (SomeString)).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (new (SomeString))?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (new (SomeString) ?? '').startsWith('a')
"
`;

exports[`invalid(6): '/^a/.test(new (SomeString))' > Output 1`] = `
"
  1 | (new (SomeString)).startsWith('a')
"
`;

exports[`invalid(7): '/^a/.test(new SomeString())' > Code 1`] = `
"
  1 | /^a/.test(new SomeString())
"
`;

exports[`invalid(7): '/^a/.test(new SomeString())' > Error 1/1 1`] = `
"
> 1 | /^a/.test(new SomeString())
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(new SomeString()).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | new SomeString()?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (new SomeString() ?? '').startsWith('a')
"
`;

exports[`invalid(7): '/^a/.test(new SomeString())' > Output 1`] = `
"
  1 | new SomeString().startsWith('a')
"
`;

exports[`invalid(8): '/^a/.test(new new SomeClassReturnsASt…' > Code 1`] = `
"
  1 | /^a/.test(new new SomeClassReturnsAStringSubClass())
"
`;

exports[`invalid(8): '/^a/.test(new new SomeClassReturnsASt…' > Error 1/1 1`] = `
"
> 1 | /^a/.test(new new SomeClassReturnsAStringSubClass())
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(new new SomeClassReturnsAStringSubClass()).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (new new SomeClassReturnsAStringSubClass())?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (new new SomeClassReturnsAStringSubClass() ?? '').startsWith('a')
"
`;

exports[`invalid(8): '/^a/.test(new new SomeClassReturnsASt…' > Output 1`] = `
"
  1 | (new new SomeClassReturnsAStringSubClass()).startsWith('a')
"
`;

exports[`invalid(9): '/^a/.test(new SomeString(/* comment *…' > Code 1`] = `
"
  1 | /^a/.test(new SomeString(/* comment */))
"
`;

exports[`invalid(9): '/^a/.test(new SomeString(/* comment *…' > Error 1/1 1`] = `
"
> 1 | /^a/.test(new SomeString(/* comment */))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(new SomeString(/* comment */)).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | new SomeString(/* comment */)?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (new SomeString(/* comment */) ?? '').startsWith('a')
"
`;

exports[`invalid(9): '/^a/.test(new SomeString(/* comment *…' > Output 1`] = `
"
  1 | new SomeString(/* comment */).startsWith('a')
"
`;

exports[`invalid(10): '/^a/.test(new SomeString("string"))' > Code 1`] = `
"
  1 | /^a/.test(new SomeString("string"))
"
`;

exports[`invalid(10): '/^a/.test(new SomeString("string"))' > Error 1/1 1`] = `
"
> 1 | /^a/.test(new SomeString("string"))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(new SomeString("string")).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | new SomeString("string")?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (new SomeString("string") ?? '').startsWith('a')
"
`;

exports[`invalid(10): '/^a/.test(new SomeString("string"))' > Output 1`] = `
"
  1 | new SomeString("string").startsWith('a')
"
`;

exports[`invalid(11): '/^a/.test(foo.bar)' > Code 1`] = `
"
  1 | /^a/.test(foo.bar)
"
`;

exports[`invalid(11): '/^a/.test(foo.bar)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(foo.bar)
    | ^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(foo.bar).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | foo.bar?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (foo.bar ?? '').startsWith('a')
"
`;

exports[`invalid(11): '/^a/.test(foo.bar)' > Output 1`] = `
"
  1 | foo.bar.startsWith('a')
"
`;

exports[`invalid(12): '/^a/.test(foo.bar())' > Code 1`] = `
"
  1 | /^a/.test(foo.bar())
"
`;

exports[`invalid(12): '/^a/.test(foo.bar())' > Error 1/1 1`] = `
"
> 1 | /^a/.test(foo.bar())
    | ^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(foo.bar()).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | foo.bar()?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (foo.bar() ?? '').startsWith('a')
"
`;

exports[`invalid(12): '/^a/.test(foo.bar())' > Output 1`] = `
"
  1 | foo.bar().startsWith('a')
"
`;

exports[`invalid(13): '/^a/.test(foo?.bar)' > Code 1`] = `
"
  1 | /^a/.test(foo?.bar)
"
`;

exports[`invalid(13): '/^a/.test(foo?.bar)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(foo?.bar)
    | ^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(foo?.bar).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | foo?.bar?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (foo?.bar ?? '').startsWith('a')
"
`;

exports[`invalid(13): '/^a/.test(foo?.bar)' > Output 1`] = `
"
  1 | foo?.bar.startsWith('a')
"
`;

exports[`invalid(14): '/^a/.test(foo?.bar())' > Code 1`] = `
"
  1 | /^a/.test(foo?.bar())
"
`;

exports[`invalid(14): '/^a/.test(foo?.bar())' > Error 1/1 1`] = `
"
> 1 | /^a/.test(foo?.bar())
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(foo?.bar()).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | foo?.bar()?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (foo?.bar() ?? '').startsWith('a')
"
`;

exports[`invalid(14): '/^a/.test(foo?.bar())' > Output 1`] = `
"
  1 | foo?.bar().startsWith('a')
"
`;

exports[`invalid(15): '/^a/.test(\`string\`)' > Code 1`] = `
"
  1 | /^a/.test(\`string\`)
"
`;

exports[`invalid(15): '/^a/.test(\`string\`)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(\`string\`)
    | ^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.
"
`;

exports[`invalid(15): '/^a/.test(\`string\`)' > Output 1`] = `
"
  1 | \`string\`.startsWith('a')
"
`;

exports[`invalid(16): '/^a/.test(tagged\`string\`)' > Code 1`] = `
"
  1 | /^a/.test(tagged\`string\`)
"
`;

exports[`invalid(16): '/^a/.test(tagged\`string\`)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(tagged\`string\`)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(tagged\`string\`).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (tagged\`string\`)?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | (tagged\`string\` ?? '').startsWith('a')
"
`;

exports[`invalid(16): '/^a/.test(tagged\`string\`)' > Output 1`] = `
"
  1 | (tagged\`string\`).startsWith('a')
"
`;

exports[`invalid(17): '(/^a/).test((0, "string"))' > Code 1`] = `
"
  1 | (/^a/).test((0, "string"))
"
`;

exports[`invalid(17): '(/^a/).test((0, "string"))' > Error 1/1 1`] = `
"
> 1 | (/^a/).test((0, "string"))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.
"
`;

exports[`invalid(17): '(/^a/).test((0, "string"))' > Output 1`] = `
"
  1 | ((0, "string")).startsWith('a')
"
`;

exports[`invalid(18): '/^a/.test(true ? a : b)' > Code 1`] = `
"
  1 | /^a/.test(true ? a : b)
"
`;

exports[`invalid(18): '/^a/.test(true ? a : b)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(true ? a : b)
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(true ? a : b).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (true ? a : b)?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | ((true ? a : b) ?? '').startsWith('a')
"
`;

exports[`invalid(18): '/^a/.test(true ? a : b)' > Output 1`] = `
"
  1 | (true ? a : b).startsWith('a')
"
`;

exports[`invalid(19): '/a$/.test(a ??= b)' > Code 1`] = `
"
  1 | /a$/.test(a ??= b)
"
`;

exports[`invalid(19): '/a$/.test(a ??= b)' > Error 1/1 1`] = `
"
> 1 | /a$/.test(a ??= b)
    | ^^^^^^^^^^^^^^^^^^ Prefer \`String#endsWith()\` over a regex with \`$\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).endsWith()\`.
  1 | String(a ??= b).endsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.endsWith()\`.
  1 | (a ??= b)?.endsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').endsWith()\`.
  1 | ((a ??= b) ?? '').endsWith('a')
"
`;

exports[`invalid(19): '/a$/.test(a ??= b)' > Output 1`] = `
"
  1 | (a ??= b).endsWith('a')
"
`;

exports[`invalid(20): '/^a/.test(a || b)' > Code 1`] = `
"
  1 | /^a/.test(a || b)
"
`;

exports[`invalid(20): '/^a/.test(a || b)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(a || b)
    | ^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(a || b).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (a || b)?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | ((a || b) ?? '').startsWith('a')
"
`;

exports[`invalid(20): '/^a/.test(a || b)' > Output 1`] = `
"
  1 | (a || b).startsWith('a')
"
`;

exports[`invalid(21): '/^a/.test(a && b)' > Code 1`] = `
"
  1 | /^a/.test(a && b)
"
`;

exports[`invalid(21): '/^a/.test(a && b)' > Error 1/1 1`] = `
"
> 1 | /^a/.test(a && b)
    | ^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
  1 | String(a && b).startsWith('a')

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
  1 | (a && b)?.startsWith('a')

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
  1 | ((a && b) ?? '').startsWith('a')
"
`;

exports[`invalid(21): '/^a/.test(a && b)' > Output 1`] = `
"
  1 | (a && b).startsWith('a')
"
`;

exports[`invalid(22): '/^a/u.test("string")' > Code 1`] = `
"
  1 | /^a/u.test("string")
"
`;

exports[`invalid(22): '/^a/u.test("string")' > Error 1/1 1`] = `
"
> 1 | /^a/u.test("string")
    | ^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.
"
`;

exports[`invalid(22): '/^a/u.test("string")' > Output 1`] = `
"
  1 | "string".startsWith('a')
"
`;

exports[`invalid(23): '/^a/v.test("string")' > Code 1`] = `
"
  1 | /^a/v.test("string")
"
`;

exports[`invalid(23): '/^a/v.test("string")' > Error 1/1 1`] = `
"
> 1 | /^a/v.test("string")
    | ^^^^^^^^^^^^^^^^^^^^ Prefer \`String#startsWith()\` over a regex with \`^\`.
"
`;

exports[`invalid(23): '/^a/v.test("string")' > Output 1`] = `
"
  1 | "string".startsWith('a')
"
`;

exports[`invalid(24): '/a$/.test(\`\${unknown}\`)' > Code 1`] = `
"
  1 | /a$/.test(\`\${unknown}\`)
"
`;

exports[`invalid(24): '/a$/.test(\`\${unknown}\`)' > Error 1/1 1`] = `
"
> 1 | /a$/.test(\`\${unknown}\`)
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#endsWith()\` over a regex with \`$\`.
"
`;

exports[`invalid(24): '/a$/.test(\`\${unknown}\`)' > Output 1`] = `
"
  1 | \`\${unknown}\`.endsWith('a')
"
`;

exports[`invalid(25): '/a$/.test(String(unknown))' > Code 1`] = `
"
  1 | /a$/.test(String(unknown))
"
`;

exports[`invalid(25): '/a$/.test(String(unknown))' > Error 1/1 1`] = `
"
> 1 | /a$/.test(String(unknown))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#endsWith()\` over a regex with \`$\`.
"
`;

exports[`invalid(25): '/a$/.test(String(unknown))' > Output 1`] = `
"
  1 | String(unknown).endsWith('a')
"
`;

exports[`invalid(26): '/* 1 */\\n(\\n\\t/* 2 */\\n\\t(\\n\\t\\t/* 3 …' > Code 1`] = `
"
   1 | /* 1 */
   2 | (
   3 | 	/* 2 */
   4 | 	(
   5 | 		/* 3 */
   6 | 		/^a/
   7 | 		/* 4 */
   8 | 	)
   9 | 	/* 5 */
  10 | )
  11 | /* 6 */
  12 | . /* 7 */ test /* 8 */ (
  13 | 	/* 9 */
  14 | 	(
  15 | 		/* 10 */
  16 | 		(
  17 | 			/* 11 */
  18 | 			a
  19 | 			/* 12 */
  20 | 		)
  21 | 		/* 13 */
  22 | 	)
  23 | 	/* 14 */
  24 | ) /* 15 */
"
`;

exports[`invalid(26): '/* 1 */\\n(\\n\\t/* 2 */\\n\\t(\\n\\t\\t/* 3 …' > Error 1/1 1`] = `
"
   1 | /* 1 */
>  2 | (
     | ^
>  3 | 	/* 2 */
     | ^^^^^^^^
>  4 | 	(
     | ^^^^^^^^
>  5 | 		/* 3 */
     | ^^^^^^^^
>  6 | 		/^a/
     | ^^^^^^^^
>  7 | 		/* 4 */
     | ^^^^^^^^
>  8 | 	)
     | ^^^^^^^^
>  9 | 	/* 5 */
     | ^^^^^^^^
> 10 | )
     | ^^^^^^^^
> 11 | /* 6 */
     | ^^^^^^^^
> 12 | . /* 7 */ test /* 8 */ (
     | ^^^^^^^^
> 13 | 	/* 9 */
     | ^^^^^^^^
> 14 | 	(
     | ^^^^^^^^
> 15 | 		/* 10 */
     | ^^^^^^^^
> 16 | 		(
     | ^^^^^^^^
> 17 | 			/* 11 */
     | ^^^^^^^^
> 18 | 			a
     | ^^^^^^^^
> 19 | 			/* 12 */
     | ^^^^^^^^
> 20 | 		)
     | ^^^^^^^^
> 21 | 		/* 13 */
     | ^^^^^^^^
> 22 | 	)
     | ^^^^^^^^
> 23 | 	/* 14 */
     | ^^^^^^^^
> 24 | ) /* 15 */
     | ^^ Prefer \`String#startsWith()\` over a regex with \`^\`.

--------------------------------------------------------------------------------
Suggestion 1/3: Convert to string \`String(…).startsWith()\`.
   1 | /* 1 */
   2 | (
   3 | 	/* 2 */
   4 | 	(
   5 | 		/* 3 */
   6 | 		String((
   7 | 		/* 10 */
   8 | 		(
   9 | 			/* 11 */
  10 | 			a
  11 | 			/* 12 */
  12 | 		)
  13 | 		/* 13 */
  14 | 	))
  15 | 		/* 4 */
  16 | 	)
  17 | 	/* 5 */
  18 | )
  19 | /* 6 */
  20 | . /* 7 */ startsWith /* 8 */ (
  21 | 	/* 9 */
  22 | 	'a'
  23 | 	/* 14 */
  24 | ) /* 15 */

--------------------------------------------------------------------------------
Suggestion 2/3: Use optional chaining \`…?.startsWith()\`.
   1 | /* 1 */
   2 | (
   3 | 	/* 2 */
   4 | 	(
   5 | 		/* 3 */
   6 | 		(
   7 | 		/* 10 */
   8 | 		(
   9 | 			/* 11 */
  10 | 			a
  11 | 			/* 12 */
  12 | 		)
  13 | 		/* 13 */
  14 | 	)
  15 | 		/* 4 */
  16 | 	)
  17 | 	/* 5 */
  18 | )
  19 | /* 6 */
  20 | ?. /* 7 */ startsWith /* 8 */ (
  21 | 	/* 9 */
  22 | 	'a'
  23 | 	/* 14 */
  24 | ) /* 15 */

--------------------------------------------------------------------------------
Suggestion 3/3: Use nullish coalescing \`(… ?? '').startsWith()\`.
   1 | /* 1 */
   2 | (
   3 | 	/* 2 */
   4 | 	(
   5 | 		/* 3 */
   6 | 		(
   7 | 		/* 10 */
   8 | 		(
   9 | 			/* 11 */
  10 | 			a
  11 | 			/* 12 */
  12 | 		)
  13 | 		/* 13 */
  14 | 	) ?? ''
  15 | 		/* 4 */
  16 | 	)
  17 | 	/* 5 */
  18 | )
  19 | /* 6 */
  20 | . /* 7 */ startsWith /* 8 */ (
  21 | 	/* 9 */
  22 | 	'a'
  23 | 	/* 14 */
  24 | ) /* 15 */
"
`;

exports[`invalid(26): '/* 1 */\\n(\\n\\t/* 2 */\\n\\t(\\n\\t\\t/* 3 …' > Output 1`] = `
"
   1 | /* 1 */
   2 | (
   3 | 	/* 2 */
   4 | 	(
   5 | 		/* 3 */
   6 | 		(
   7 | 		/* 10 */
   8 | 		(
   9 | 			/* 11 */
  10 | 			a
  11 | 			/* 12 */
  12 | 		)
  13 | 		/* 13 */
  14 | 	)
  15 | 		/* 4 */
  16 | 	)
  17 | 	/* 5 */
  18 | )
  19 | /* 6 */
  20 | . /* 7 */ startsWith /* 8 */ (
  21 | 	/* 9 */
  22 | 	'a'
  23 | 	/* 14 */
  24 | ) /* 15 */
"
`;
