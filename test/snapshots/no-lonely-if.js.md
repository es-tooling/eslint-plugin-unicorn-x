// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'if (a) {\\n\\tif (b) {\\n\\t}\\n}' > Code 1`] = `
"
  1 | if (a) {
  2 | 	if (b) {
  3 | 	}
  4 | }
"
`;

exports[`invalid(0): 'if (a) {\\n\\tif (b) {\\n\\t}\\n}' > Error 1/1 1`] = `
"
  1 | if (a) {
> 2 | 	if (b) {
    | 	^^^^^^^^
> 3 | 	}
    | ^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  4 | }
"
`;

exports[`invalid(0): 'if (a) {\\n\\tif (b) {\\n\\t}\\n}' > Output 1`] = `
"
  1 | if (a && b) {
  2 | 	}
"
`;

exports[`invalid(1): 'if (a) if (b) {\\n\\tfoo();\\n}' > Code 1`] = `
"
  1 | if (a) if (b) {
  2 | 	foo();
  3 | }
"
`;

exports[`invalid(1): 'if (a) if (b) {\\n\\tfoo();\\n}' > Error 1/1 1`] = `
"
> 1 | if (a) if (b) {
    |        ^^^^^^^^
> 2 | 	foo();
    | ^^^^^^^
> 3 | }
    | ^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
"
`;

exports[`invalid(1): 'if (a) if (b) {\\n\\tfoo();\\n}' > Output 1`] = `
"
  1 | if (a && b) {
  2 | 	foo();
  3 | }
"
`;

exports[`invalid(2): 'if (a) {\\n\\tif (b) foo();\\n}' > Code 1`] = `
"
  1 | if (a) {
  2 | 	if (b) foo();
  3 | }
"
`;

exports[`invalid(2): 'if (a) {\\n\\tif (b) foo();\\n}' > Error 1/1 1`] = `
"
  1 | if (a) {
> 2 | 	if (b) foo();
    | 	^^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  3 | }
"
`;

exports[`invalid(2): 'if (a) {\\n\\tif (b) foo();\\n}' > Output 1`] = `
"
  1 | if (a && b) foo();
"
`;

exports[`invalid(3): 'if (a) if (b) foo();' > Code 1`] = `
"
  1 | if (a) if (b) foo();
"
`;

exports[`invalid(3): 'if (a) if (b) foo();' > Error 1/1 1`] = `
"
> 1 | if (a) if (b) foo();
    |        ^^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
"
`;

exports[`invalid(3): 'if (a) if (b) foo();' > Output 1`] = `
"
  1 | if (a && b) foo();
"
`;

exports[`invalid(4): 'if (a) {\\n\\tif (b) foo()\\n}' > Code 1`] = `
"
  1 | if (a) {
  2 | 	if (b) foo()
  3 | }
"
`;

exports[`invalid(4): 'if (a) {\\n\\tif (b) foo()\\n}' > Error 1/1 1`] = `
"
  1 | if (a) {
> 2 | 	if (b) foo()
    | 	^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  3 | }
"
`;

exports[`invalid(4): 'if (a) {\\n\\tif (b) foo()\\n}' > Output 1`] = `
"
  1 | if (a && b) foo()
"
`;

exports[`invalid(5): 'if (a) if (b);' > Code 1`] = `
"
  1 | if (a) if (b);
"
`;

exports[`invalid(5): 'if (a) if (b);' > Error 1/1 1`] = `
"
> 1 | if (a) if (b);
    |        ^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
"
`;

exports[`invalid(5): 'if (a) if (b);' > Output 1`] = `
"
  1 | if (a && b);
"
`;

exports[`invalid(6): 'if (a) {\\n\\tif (b) {\\n\\t\\t// Should n…' > Code 1`] = `
"
  1 | if (a) {
  2 | 	if (b) {
  3 | 		// Should not report
  4 | 	}
  5 | } else if (c) {
  6 | 	if (d) {
  7 | 	}
  8 | }
"
`;

exports[`invalid(6): 'if (a) {\\n\\tif (b) {\\n\\t\\t// Should n…' > Error 1/1 1`] = `
"
  1 | if (a) {
  2 | 	if (b) {
  3 | 		// Should not report
  4 | 	}
  5 | } else if (c) {
> 6 | 	if (d) {
    | 	^^^^^^^^
> 7 | 	}
    | ^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  8 | }
"
`;

exports[`invalid(6): 'if (a) {\\n\\tif (b) {\\n\\t\\t// Should n…' > Output 1`] = `
"
  1 | if (a) {
  2 | 	if (b) {
  3 | 		// Should not report
  4 | 	}
  5 | } else if (c && d) {
  6 | 	}
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Code 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
   3 | 	if (a ?? b)
   4 | 	if (a ? b : c)
   5 | 	if (a = b)
   6 | 	if (a += b)
   7 | 	if (a -= b)
   8 | 	if (a &&= b)
   9 | 	if (yield a)
  10 | 	if (a, b);
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Error 1/8 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
>  3 | 	if (a ?? b)
     | 	^^^^^^^^^^^
>  4 | 	if (a ? b : c)
     | ^^^^^^^^^^^^^^^
>  5 | 	if (a = b)
     | ^^^^^^^^^^^^^^^
>  6 | 	if (a += b)
     | ^^^^^^^^^^^^^^^
>  7 | 	if (a -= b)
     | ^^^^^^^^^^^^^^^
>  8 | 	if (a &&= b)
     | ^^^^^^^^^^^^^^^
>  9 | 	if (yield a)
     | ^^^^^^^^^^^^^^^
> 10 | 	if (a, b);
     | ^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Error 2/8 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
   3 | 	if (a ?? b)
>  4 | 	if (a ? b : c)
     | 	^^^^^^^^^^^^^^
>  5 | 	if (a = b)
     | ^^^^^^^^^^^
>  6 | 	if (a += b)
     | ^^^^^^^^^^^
>  7 | 	if (a -= b)
     | ^^^^^^^^^^^
>  8 | 	if (a &&= b)
     | ^^^^^^^^^^^
>  9 | 	if (yield a)
     | ^^^^^^^^^^^
> 10 | 	if (a, b);
     | ^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Error 3/8 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
   3 | 	if (a ?? b)
   4 | 	if (a ? b : c)
>  5 | 	if (a = b)
     | 	^^^^^^^^^^
>  6 | 	if (a += b)
     | ^^^^^^^^^^^^
>  7 | 	if (a -= b)
     | ^^^^^^^^^^^^
>  8 | 	if (a &&= b)
     | ^^^^^^^^^^^^
>  9 | 	if (yield a)
     | ^^^^^^^^^^^^
> 10 | 	if (a, b);
     | ^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Error 4/8 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
   3 | 	if (a ?? b)
   4 | 	if (a ? b : c)
   5 | 	if (a = b)
>  6 | 	if (a += b)
     | 	^^^^^^^^^^^
>  7 | 	if (a -= b)
     | ^^^^^^^^^^^^
>  8 | 	if (a &&= b)
     | ^^^^^^^^^^^^
>  9 | 	if (yield a)
     | ^^^^^^^^^^^^
> 10 | 	if (a, b);
     | ^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Error 5/8 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
   3 | 	if (a ?? b)
   4 | 	if (a ? b : c)
   5 | 	if (a = b)
   6 | 	if (a += b)
>  7 | 	if (a -= b)
     | 	^^^^^^^^^^^
>  8 | 	if (a &&= b)
     | ^^^^^^^^^^^^^
>  9 | 	if (yield a)
     | ^^^^^^^^^^^^^
> 10 | 	if (a, b);
     | ^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Error 6/8 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
   3 | 	if (a ?? b)
   4 | 	if (a ? b : c)
   5 | 	if (a = b)
   6 | 	if (a += b)
   7 | 	if (a -= b)
>  8 | 	if (a &&= b)
     | 	^^^^^^^^^^^^
>  9 | 	if (yield a)
     | ^^^^^^^^^^^^^
> 10 | 	if (a, b);
     | ^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Error 7/8 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
   3 | 	if (a ?? b)
   4 | 	if (a ? b : c)
   5 | 	if (a = b)
   6 | 	if (a += b)
   7 | 	if (a -= b)
   8 | 	if (a &&= b)
>  9 | 	if (yield a)
     | 	^^^^^^^^^^^^
> 10 | 	if (a, b);
     | ^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Error 8/8 1`] = `
"
   1 | function * foo() {
   2 | 	if (a || b)
   3 | 	if (a ?? b)
   4 | 	if (a ? b : c)
   5 | 	if (a = b)
   6 | 	if (a += b)
   7 | 	if (a -= b)
   8 | 	if (a &&= b)
   9 | 	if (yield a)
> 10 | 	if (a, b);
     | 	^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  11 | }
"
`;

exports[`invalid(7): 'function * foo() {\\n\\tif (a || b)\\n\\t…' > Output 1`] = `
"
  1 | function * foo() {
  2 | 	if ((a || b) && (a ?? b) && (a ? b : c) && (a = b) && (a += b) && (a -= b) && (a &&= b) && (yield a) && (a, b));
  3 | }
"
`;

exports[`invalid(8): 'async function foo() {\\n\\tif (a)\\n\\ti…' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	if (a)
  3 | 	if (await a)
  4 | 	if (a.b)
  5 | 	if (a && b);
  6 | }
"
`;

exports[`invalid(8): 'async function foo() {\\n\\tif (a)\\n\\ti…' > Error 1/3 1`] = `
"
  1 | async function foo() {
  2 | 	if (a)
> 3 | 	if (await a)
    | 	^^^^^^^^^^^^
> 4 | 	if (a.b)
    | ^^^^^^^^^
> 5 | 	if (a && b);
    | ^^^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  6 | }
"
`;

exports[`invalid(8): 'async function foo() {\\n\\tif (a)\\n\\ti…' > Error 2/3 1`] = `
"
  1 | async function foo() {
  2 | 	if (a)
  3 | 	if (await a)
> 4 | 	if (a.b)
    | 	^^^^^^^^
> 5 | 	if (a && b);
    | ^^^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  6 | }
"
`;

exports[`invalid(8): 'async function foo() {\\n\\tif (a)\\n\\ti…' > Error 3/3 1`] = `
"
  1 | async function foo() {
  2 | 	if (a)
  3 | 	if (await a)
  4 | 	if (a.b)
> 5 | 	if (a && b);
    | 	^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  6 | }
"
`;

exports[`invalid(8): 'async function foo() {\\n\\tif (a)\\n\\ti…' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	if (a && await a && a.b && a && b);
  3 | }
"
`;

exports[`invalid(9): 'if (((a || b))) if (((c || d)));' > Code 1`] = `
"
  1 | if (((a || b))) if (((c || d)));
"
`;

exports[`invalid(9): 'if (((a || b))) if (((c || d)));' > Error 1/1 1`] = `
"
> 1 | if (((a || b))) if (((c || d)));
    |                 ^^^^^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
"
`;

exports[`invalid(9): 'if (((a || b))) if (((c || d)));' > Output 1`] = `
"
  1 | if (((a || b)) && ((c || d)));
"
`;

exports[`invalid(10): 'if // 1\\n(\\n\\t// 2\\n\\ta // 3\\n\\t\\t.b …' > Code 1`] = `
"
   1 | if // 1
   2 | (
   3 | 	// 2
   4 | 	a // 3
   5 | 		.b // 4
   6 | ) // 5
   7 | {
   8 | 	// 6
   9 | 	if (
  10 | 		// 7
  11 | 		c // 8
  12 | 			.d // 9
  13 | 	) {
  14 | 		// 10
  15 | 		foo();
  16 | 		// 11
  17 | 	}
  18 | 	// 12
  19 | }
"
`;

exports[`invalid(10): 'if // 1\\n(\\n\\t// 2\\n\\ta // 3\\n\\t\\t.b …' > Error 1/1 1`] = `
"
   1 | if // 1
   2 | (
   3 | 	// 2
   4 | 	a // 3
   5 | 		.b // 4
   6 | ) // 5
   7 | {
   8 | 	// 6
>  9 | 	if (
     | 	^^^^
> 10 | 		// 7
     | ^^^^^^
> 11 | 		c // 8
     | ^^^^^^
> 12 | 			.d // 9
     | ^^^^^^
> 13 | 	) {
     | ^^^^^^
> 14 | 		// 10
     | ^^^^^^
> 15 | 		foo();
     | ^^^^^^
> 16 | 		// 11
     | ^^^^^^
> 17 | 	}
     | ^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  18 | 	// 12
  19 | }
"
`;

exports[`invalid(10): 'if // 1\\n(\\n\\t// 2\\n\\ta // 3\\n\\t\\t.b …' > Output 1`] = `
"
   1 | if // 1
   2 | (
   3 | 	// 2
   4 | 	a // 3
   5 | 		.b // 4
   6 |  && // 5
   7 | // 6
   8 | 	
   9 | 		// 7
  10 | 		c // 8
  11 | 			.d // 9
  12 | 	) {
  13 | 		// 10
  14 | 		foo();
  15 | 		// 11
  16 | 	}
  17 | 	// 12
"
`;

exports[`invalid(11): 'if (a) {\\n\\tif (b) foo()\\n}\\n[].forEa…' > Code 1`] = `
"
  1 | if (a) {
  2 | 	if (b) foo()
  3 | }
  4 | [].forEach(bar)
"
`;

exports[`invalid(11): 'if (a) {\\n\\tif (b) foo()\\n}\\n[].forEa…' > Error 1/1 1`] = `
"
  1 | if (a) {
> 2 | 	if (b) foo()
    | 	^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  3 | }
  4 | [].forEach(bar)
"
`;

exports[`invalid(11): 'if (a) {\\n\\tif (b) foo()\\n}\\n[].forEa…' > Output 1`] = `
"
  1 | if (a && b) foo()
  2 | ;[].forEach(bar)
"
`;

exports[`invalid(12): 'if (a)\\n\\tif (b) foo()\\n;[].forEach(b…' > Code 1`] = `
"
  1 | if (a)
  2 | 	if (b) foo()
  3 | ;[].forEach(bar)
"
`;

exports[`invalid(12): 'if (a)\\n\\tif (b) foo()\\n;[].forEach(b…' > Error 1/1 1`] = `
"
  1 | if (a)
> 2 | 	if (b) foo()
    | 	^^^^^^^^^^^^
> 3 | ;[].forEach(bar)
    | ^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
"
`;

exports[`invalid(12): 'if (a)\\n\\tif (b) foo()\\n;[].forEach(b…' > Output 1`] = `
"
  1 | if (a && b) foo()
  2 | ;[].forEach(bar)
"
`;

exports[`invalid(13): 'if (a) {\\n\\tif (b) foo()\\n}\\n;[].forE…' > Code 1`] = `
"
  1 | if (a) {
  2 | 	if (b) foo()
  3 | }
  4 | ;[].forEach(bar)
"
`;

exports[`invalid(13): 'if (a) {\\n\\tif (b) foo()\\n}\\n;[].forE…' > Error 1/1 1`] = `
"
  1 | if (a) {
> 2 | 	if (b) foo()
    | 	^^^^^^^^^^^^ Unexpected \`if\` as the only statement in a \`if\` block without \`else\`.
  3 | }
  4 | ;[].forEach(bar)
"
`;

exports[`invalid(13): 'if (a) {\\n\\tif (b) foo()\\n}\\n;[].forE…' > Output 1`] = `
"
  1 | if (a && b) foo()
  2 | ;[].forEach(bar)
"
`;
