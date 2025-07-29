// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'await []' > Code 1`] = `
"
  1 | await []
"
`;

exports[`invalid(0): 'await []' > Error 1/1 1`] = `
"
> 1 | await []
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(0): 'await []' > Output 1`] = `
"
  1 | []
"
`;

exports[`invalid(1): 'await [Promise.resolve()]' > Code 1`] = `
"
  1 | await [Promise.resolve()]
"
`;

exports[`invalid(1): 'await [Promise.resolve()]' > Error 1/1 1`] = `
"
> 1 | await [Promise.resolve()]
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(1): 'await [Promise.resolve()]' > Output 1`] = `
"
  1 | [Promise.resolve()]
"
`;

exports[`invalid(2): 'await (() => {})' > Code 1`] = `
"
  1 | await (() => {})
"
`;

exports[`invalid(2): 'await (() => {})' > Error 1/1 1`] = `
"
> 1 | await (() => {})
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(2): 'await (() => {})' > Output 1`] = `
"
  1 | (() => {})
"
`;

exports[`invalid(3): 'await (() => Promise.resolve())' > Code 1`] = `
"
  1 | await (() => Promise.resolve())
"
`;

exports[`invalid(3): 'await (() => Promise.resolve())' > Error 1/1 1`] = `
"
> 1 | await (() => Promise.resolve())
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(3): 'await (() => Promise.resolve())' > Output 1`] = `
"
  1 | (() => Promise.resolve())
"
`;

exports[`invalid(4): 'await (a === b)' > Code 1`] = `
"
  1 | await (a === b)
"
`;

exports[`invalid(4): 'await (a === b)' > Error 1/1 1`] = `
"
> 1 | await (a === b)
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(4): 'await (a === b)' > Output 1`] = `
"
  1 | (a === b)
"
`;

exports[`invalid(5): 'await (a instanceof Promise)' > Code 1`] = `
"
  1 | await (a instanceof Promise)
"
`;

exports[`invalid(5): 'await (a instanceof Promise)' > Error 1/1 1`] = `
"
> 1 | await (a instanceof Promise)
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(5): 'await (a instanceof Promise)' > Output 1`] = `
"
  1 | (a instanceof Promise)
"
`;

exports[`invalid(6): 'await (a > b)' > Code 1`] = `
"
  1 | await (a > b)
"
`;

exports[`invalid(6): 'await (a > b)' > Error 1/1 1`] = `
"
> 1 | await (a > b)
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(6): 'await (a > b)' > Output 1`] = `
"
  1 | (a > b)
"
`;

exports[`invalid(7): 'await class {}' > Code 1`] = `
"
  1 | await class {}
"
`;

exports[`invalid(7): 'await class {}' > Error 1/1 1`] = `
"
> 1 | await class {}
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(8): 'await class extends Promise {}' > Code 1`] = `
"
  1 | await class extends Promise {}
"
`;

exports[`invalid(8): 'await class extends Promise {}' > Error 1/1 1`] = `
"
> 1 | await class extends Promise {}
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(9): 'await function() {}' > Code 1`] = `
"
  1 | await function() {}
"
`;

exports[`invalid(9): 'await function() {}' > Error 1/1 1`] = `
"
> 1 | await function() {}
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(10): 'await function name() {}' > Code 1`] = `
"
  1 | await function name() {}
"
`;

exports[`invalid(10): 'await function name() {}' > Error 1/1 1`] = `
"
> 1 | await function name() {}
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(11): 'await function() { return Promise.res…' > Code 1`] = `
"
  1 | await function() { return Promise.resolve() }
"
`;

exports[`invalid(11): 'await function() { return Promise.res…' > Error 1/1 1`] = `
"
> 1 | await function() { return Promise.resolve() }
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(12): 'await (<></>)' > Code 1`] = `
"
  1 | await (<></>)
"
`;

exports[`invalid(12): 'await (<></>)' > Error 1/1 1`] = `
"
> 1 | await (<></>)
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(12): 'await (<></>)' > Output 1`] = `
"
  1 | (<></>)
"
`;

exports[`invalid(13): 'await (<a></a>)' > Code 1`] = `
"
  1 | await (<a></a>)
"
`;

exports[`invalid(13): 'await (<a></a>)' > Error 1/1 1`] = `
"
> 1 | await (<a></a>)
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(13): 'await (<a></a>)' > Output 1`] = `
"
  1 | (<a></a>)
"
`;

exports[`invalid(14): 'await 0' > Code 1`] = `
"
  1 | await 0
"
`;

exports[`invalid(14): 'await 0' > Error 1/1 1`] = `
"
> 1 | await 0
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(14): 'await 0' > Output 1`] = `
"
  1 | 0
"
`;

exports[`invalid(15): 'await 1' > Code 1`] = `
"
  1 | await 1
"
`;

exports[`invalid(15): 'await 1' > Error 1/1 1`] = `
"
> 1 | await 1
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(15): 'await 1' > Output 1`] = `
"
  1 | 1
"
`;

exports[`invalid(16): 'await ""' > Code 1`] = `
"
  1 | await ""
"
`;

exports[`invalid(16): 'await ""' > Error 1/1 1`] = `
"
> 1 | await ""
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(16): 'await ""' > Output 1`] = `
"
  1 | ""
"
`;

exports[`invalid(17): 'await "string"' > Code 1`] = `
"
  1 | await "string"
"
`;

exports[`invalid(17): 'await "string"' > Error 1/1 1`] = `
"
> 1 | await "string"
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(17): 'await "string"' > Output 1`] = `
"
  1 | "string"
"
`;

exports[`invalid(18): 'await true' > Code 1`] = `
"
  1 | await true
"
`;

exports[`invalid(18): 'await true' > Error 1/1 1`] = `
"
> 1 | await true
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(18): 'await true' > Output 1`] = `
"
  1 | true
"
`;

exports[`invalid(19): 'await false' > Code 1`] = `
"
  1 | await false
"
`;

exports[`invalid(19): 'await false' > Error 1/1 1`] = `
"
> 1 | await false
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(19): 'await false' > Output 1`] = `
"
  1 | false
"
`;

exports[`invalid(20): 'await null' > Code 1`] = `
"
  1 | await null
"
`;

exports[`invalid(20): 'await null' > Error 1/1 1`] = `
"
> 1 | await null
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(20): 'await null' > Output 1`] = `
"
  1 | null
"
`;

exports[`invalid(21): 'await 0n' > Code 1`] = `
"
  1 | await 0n
"
`;

exports[`invalid(21): 'await 0n' > Error 1/1 1`] = `
"
> 1 | await 0n
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(21): 'await 0n' > Output 1`] = `
"
  1 | 0n
"
`;

exports[`invalid(22): 'await 1n' > Code 1`] = `
"
  1 | await 1n
"
`;

exports[`invalid(22): 'await 1n' > Error 1/1 1`] = `
"
> 1 | await 1n
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(22): 'await 1n' > Output 1`] = `
"
  1 | 1n
"
`;

exports[`invalid(23): 'await \`\${Promise.resolve()}\`' > Code 1`] = `
"
  1 | await \`\${Promise.resolve()}\`
"
`;

exports[`invalid(23): 'await \`\${Promise.resolve()}\`' > Error 1/1 1`] = `
"
> 1 | await \`\${Promise.resolve()}\`
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(23): 'await \`\${Promise.resolve()}\`' > Output 1`] = `
"
  1 | \`\${Promise.resolve()}\`
"
`;

exports[`invalid(24): 'await !Promise.resolve()' > Code 1`] = `
"
  1 | await !Promise.resolve()
"
`;

exports[`invalid(24): 'await !Promise.resolve()' > Error 1/1 1`] = `
"
> 1 | await !Promise.resolve()
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(24): 'await !Promise.resolve()' > Output 1`] = `
"
  1 | !Promise.resolve()
"
`;

exports[`invalid(25): 'await void Promise.resolve()' > Code 1`] = `
"
  1 | await void Promise.resolve()
"
`;

exports[`invalid(25): 'await void Promise.resolve()' > Error 1/1 1`] = `
"
> 1 | await void Promise.resolve()
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(25): 'await void Promise.resolve()' > Output 1`] = `
"
  1 | void Promise.resolve()
"
`;

exports[`invalid(26): 'await +Promise.resolve()' > Code 1`] = `
"
  1 | await +Promise.resolve()
"
`;

exports[`invalid(26): 'await +Promise.resolve()' > Error 1/1 1`] = `
"
> 1 | await +Promise.resolve()
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(26): 'await +Promise.resolve()' > Output 1`] = `
"
  1 | +Promise.resolve()
"
`;

exports[`invalid(27): 'await ~1' > Code 1`] = `
"
  1 | await ~1
"
`;

exports[`invalid(27): 'await ~1' > Error 1/1 1`] = `
"
> 1 | await ~1
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(27): 'await ~1' > Output 1`] = `
"
  1 | ~1
"
`;

exports[`invalid(28): 'await ++foo' > Code 1`] = `
"
  1 | await ++foo
"
`;

exports[`invalid(28): 'await ++foo' > Error 1/1 1`] = `
"
> 1 | await ++foo
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(28): 'await ++foo' > Output 1`] = `
"
  1 | ++foo
"
`;

exports[`invalid(29): 'await foo--' > Code 1`] = `
"
  1 | await foo--
"
`;

exports[`invalid(29): 'await foo--' > Error 1/1 1`] = `
"
> 1 | await foo--
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(29): 'await foo--' > Output 1`] = `
"
  1 | foo--
"
`;

exports[`invalid(30): 'await (Promise.resolve(), 1)' > Code 1`] = `
"
  1 | await (Promise.resolve(), 1)
"
`;

exports[`invalid(30): 'await (Promise.resolve(), 1)' > Error 1/1 1`] = `
"
> 1 | await (Promise.resolve(), 1)
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(30): 'await (Promise.resolve(), 1)' > Output 1`] = `
"
  1 | (Promise.resolve(), 1)
"
`;

exports[`invalid(31): 'async function foo() {\\n\\treturn awai…' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	return await
  3 | 		// comment
  4 | 		1;
  5 | }
"
`;

exports[`invalid(31): 'async function foo() {\\n\\treturn awai…' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	return await
    | 	       ^^^^^ Do not \`await\` non-promise value.
  3 | 		// comment
  4 | 		1;
  5 | }
"
`;

exports[`invalid(31): 'async function foo() {\\n\\treturn awai…' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	return ( // comment
  3 | 		1);
  4 | }
"
`;

exports[`invalid(32): 'async function foo() {\\n\\treturn awai…' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	return await
  3 | 		// comment
  4 | 		1
  5 | }
"
`;

exports[`invalid(32): 'async function foo() {\\n\\treturn awai…' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	return await
    | 	       ^^^^^ Do not \`await\` non-promise value.
  3 | 		// comment
  4 | 		1
  5 | }
"
`;

exports[`invalid(32): 'async function foo() {\\n\\treturn awai…' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	return ( // comment
  3 | 		1)
  4 | }
"
`;

exports[`invalid(33): 'async function foo() {\\n\\treturn( awa…' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	return( await
  3 | 		// comment
  4 | 		1);
  5 | }
"
`;

exports[`invalid(33): 'async function foo() {\\n\\treturn( awa…' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	return( await
    | 	        ^^^^^ Do not \`await\` non-promise value.
  3 | 		// comment
  4 | 		1);
  5 | }
"
`;

exports[`invalid(33): 'async function foo() {\\n\\treturn( awa…' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	return( // comment
  3 | 		1);
  4 | }
"
`;

exports[`invalid(34): 'foo()\\nawait []' > Code 1`] = `
"
  1 | foo()
  2 | await []
"
`;

exports[`invalid(34): 'foo()\\nawait []' > Error 1/1 1`] = `
"
  1 | foo()
> 2 | await []
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(34): 'foo()\\nawait []' > Output 1`] = `
"
  1 | foo()
  2 | ;[]
"
`;

exports[`invalid(35): 'foo()\\nawait +1' > Code 1`] = `
"
  1 | foo()
  2 | await +1
"
`;

exports[`invalid(35): 'foo()\\nawait +1' > Error 1/1 1`] = `
"
  1 | foo()
> 2 | await +1
    | ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(35): 'foo()\\nawait +1' > Output 1`] = `
"
  1 | foo()
  2 | ;+1
"
`;

exports[`invalid(36): 'async function foo() {\\n\\treturn awai…' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	return await
  3 | 		// comment
  4 | 		[];
  5 | }
"
`;

exports[`invalid(36): 'async function foo() {\\n\\treturn awai…' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	return await
    | 	       ^^^^^ Do not \`await\` non-promise value.
  3 | 		// comment
  4 | 		[];
  5 | }
"
`;

exports[`invalid(36): 'async function foo() {\\n\\treturn awai…' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	return ( // comment
  3 | 		[]);
  4 | }
"
`;

exports[`invalid(37): 'async function foo() {\\n\\tthrow await…' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	throw await
  3 | 		// comment
  4 | 		1;
  5 | }
"
`;

exports[`invalid(37): 'async function foo() {\\n\\tthrow await…' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	throw await
    | 	      ^^^^^ Do not \`await\` non-promise value.
  3 | 		// comment
  4 | 		1;
  5 | }
"
`;

exports[`invalid(37): 'async function foo() {\\n\\tthrow await…' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	throw ( // comment
  3 | 		1);
  4 | }
"
`;

exports[`invalid(38): 'console.log(\\n\\tawait\\n\\t\\t// comment…' > Code 1`] = `
"
  1 | console.log(
  2 | 	await
  3 | 		// comment
  4 | 		[]
  5 | );
"
`;

exports[`invalid(38): 'console.log(\\n\\tawait\\n\\t\\t// comment…' > Error 1/1 1`] = `
"
  1 | console.log(
> 2 | 	await
    | 	^^^^^ Do not \`await\` non-promise value.
  3 | 		// comment
  4 | 		[]
  5 | );
"
`;

exports[`invalid(38): 'console.log(\\n\\tawait\\n\\t\\t// comment…' > Output 1`] = `
"
  1 | console.log(
  2 | 	// comment
  3 | 		[]
  4 | );
"
`;

exports[`invalid(39): 'async function foo() {+await +1}' > Code 1`] = `
"
  1 | async function foo() {+await +1}
"
`;

exports[`invalid(39): 'async function foo() {+await +1}' > Error 1/1 1`] = `
"
> 1 | async function foo() {+await +1}
    |                        ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(40): 'async function foo() {-await-1}' > Code 1`] = `
"
  1 | async function foo() {-await-1}
"
`;

exports[`invalid(40): 'async function foo() {-await-1}' > Error 1/1 1`] = `
"
> 1 | async function foo() {-await-1}
    |                        ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(41): 'async function foo() {+await -1}' > Code 1`] = `
"
  1 | async function foo() {+await -1}
"
`;

exports[`invalid(41): 'async function foo() {+await -1}' > Error 1/1 1`] = `
"
> 1 | async function foo() {+await -1}
    |                        ^^^^^ Do not \`await\` non-promise value.
"
`;

exports[`invalid(41): 'async function foo() {+await -1}' > Output 1`] = `
"
  1 | async function foo() {+-1}
"
`;
