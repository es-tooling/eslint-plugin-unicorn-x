// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'Math.log(x) * Math.LOG10E' > Code 1`] = `
"
  1 | Math.log(x) * Math.LOG10E
"
`;

exports[`invalid(0): 'Math.log(x) * Math.LOG10E' > Error 1/1 1`] = `
"
> 1 | Math.log(x) * Math.LOG10E
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log10(…)\` over \`Math.log(…) * Math.LOG10E\`.
"
`;

exports[`invalid(0): 'Math.log(x) * Math.LOG10E' > Output 1`] = `
"
  1 | Math.log10(x)
"
`;

exports[`invalid(0): 'Math.sqrt(a * a + b * b)' > Code 1`] = `
"
  1 | Math.sqrt(a * a + b * b)
"
`;

exports[`invalid(0): 'Math.sqrt(a * a + b * b)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a * a + b * b)
    |      ^^^^ Prefer \`Math.hypot(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(0): 'Math.sqrt(a * a + b * b)' > Output 1`] = `
"
  1 | Math.hypot(a, b)
"
`;

exports[`invalid(1): 'Math.log(x) * Math.LOG2E' > Code 1`] = `
"
  1 | Math.log(x) * Math.LOG2E
"
`;

exports[`invalid(1): 'Math.log(x) * Math.LOG2E' > Error 1/1 1`] = `
"
> 1 | Math.log(x) * Math.LOG2E
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log2(…)\` over \`Math.log(…) * Math.LOG2E\`.
"
`;

exports[`invalid(1): 'Math.log(x) * Math.LOG2E' > Output 1`] = `
"
  1 | Math.log2(x)
"
`;

exports[`invalid(1): 'Math.sqrt(a ** 2 + b ** 2)' > Code 1`] = `
"
  1 | Math.sqrt(a ** 2 + b ** 2)
"
`;

exports[`invalid(1): 'Math.sqrt(a ** 2 + b ** 2)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a ** 2 + b ** 2)
    |      ^^^^ Prefer \`Math.hypot(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(1): 'Math.sqrt(a ** 2 + b ** 2)' > Output 1`] = `
"
  1 | Math.hypot(a, b)
"
`;

exports[`invalid(2): 'Math.LOG10E * Math.log(x)' > Code 1`] = `
"
  1 | Math.LOG10E * Math.log(x)
"
`;

exports[`invalid(2): 'Math.LOG10E * Math.log(x)' > Error 1/1 1`] = `
"
> 1 | Math.LOG10E * Math.log(x)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log10(…)\` over \`Math.LOG10E * Math.log(…)\`.
"
`;

exports[`invalid(2): 'Math.LOG10E * Math.log(x)' > Output 1`] = `
"
  1 | Math.log10(x)
"
`;

exports[`invalid(2): 'Math.sqrt(a * a + b ** 2)' > Code 1`] = `
"
  1 | Math.sqrt(a * a + b ** 2)
"
`;

exports[`invalid(2): 'Math.sqrt(a * a + b ** 2)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a * a + b ** 2)
    |      ^^^^ Prefer \`Math.hypot(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(2): 'Math.sqrt(a * a + b ** 2)' > Output 1`] = `
"
  1 | Math.hypot(a, b)
"
`;

exports[`invalid(3): 'Math.LOG2E * Math.log(x)' > Code 1`] = `
"
  1 | Math.LOG2E * Math.log(x)
"
`;

exports[`invalid(3): 'Math.LOG2E * Math.log(x)' > Error 1/1 1`] = `
"
> 1 | Math.LOG2E * Math.log(x)
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log2(…)\` over \`Math.LOG2E * Math.log(…)\`.
"
`;

exports[`invalid(3): 'Math.LOG2E * Math.log(x)' > Output 1`] = `
"
  1 | Math.log2(x)
"
`;

exports[`invalid(3): 'Math.sqrt(a * a + b * b + c * c)' > Code 1`] = `
"
  1 | Math.sqrt(a * a + b * b + c * c)
"
`;

exports[`invalid(3): 'Math.sqrt(a * a + b * b + c * c)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a * a + b * b + c * c)
    |      ^^^^ Prefer \`Math.hypot(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(3): 'Math.sqrt(a * a + b * b + c * c)' > Output 1`] = `
"
  1 | Math.hypot(a, b, c)
"
`;

exports[`invalid(4): 'Math.log(x) / Math.LN10' > Code 1`] = `
"
  1 | Math.log(x) / Math.LN10
"
`;

exports[`invalid(4): 'Math.log(x) / Math.LN10' > Error 1/1 1`] = `
"
> 1 | Math.log(x) / Math.LN10
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log10(…)\` over \`Math.log(…) / Math.LN10\`.
"
`;

exports[`invalid(4): 'Math.log(x) / Math.LN10' > Output 1`] = `
"
  1 | Math.log10(x)
"
`;

exports[`invalid(4): 'Math.sqrt(a ** 2 + b ** 2 + c ** 2)' > Code 1`] = `
"
  1 | Math.sqrt(a ** 2 + b ** 2 + c ** 2)
"
`;

exports[`invalid(4): 'Math.sqrt(a ** 2 + b ** 2 + c ** 2)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a ** 2 + b ** 2 + c ** 2)
    |      ^^^^ Prefer \`Math.hypot(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(4): 'Math.sqrt(a ** 2 + b ** 2 + c ** 2)' > Output 1`] = `
"
  1 | Math.hypot(a, b, c)
"
`;

exports[`invalid(5): 'Math.log(x) / Math.LN2' > Code 1`] = `
"
  1 | Math.log(x) / Math.LN2
"
`;

exports[`invalid(5): 'Math.log(x) / Math.LN2' > Error 1/1 1`] = `
"
> 1 | Math.log(x) / Math.LN2
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log2(…)\` over \`Math.log(…) / Math.LN2\`.
"
`;

exports[`invalid(5): 'Math.log(x) / Math.LN2' > Output 1`] = `
"
  1 | Math.log2(x)
"
`;

exports[`invalid(5): 'Math.sqrt(a * a)' > Code 1`] = `
"
  1 | Math.sqrt(a * a)
"
`;

exports[`invalid(5): 'Math.sqrt(a * a)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a * a)
    |      ^^^^ Prefer \`Math.abs(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(5): 'Math.sqrt(a * a)' > Output 1`] = `
"
  1 | Math.abs(a)
"
`;

exports[`invalid(6): 'Math.log((( 0,x ))) * Math.LOG10E' > Code 1`] = `
"
  1 | Math.log((( 0,x ))) * Math.LOG10E
"
`;

exports[`invalid(6): 'Math.log((( 0,x ))) * Math.LOG10E' > Error 1/1 1`] = `
"
> 1 | Math.log((( 0,x ))) * Math.LOG10E
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log10(…)\` over \`Math.log(…) * Math.LOG10E\`.
"
`;

exports[`invalid(6): 'Math.log((( 0,x ))) * Math.LOG10E' > Output 1`] = `
"
  1 | Math.log10((( 0,x )))
"
`;

exports[`invalid(6): 'Math.sqrt(a ** 2)' > Code 1`] = `
"
  1 | Math.sqrt(a ** 2)
"
`;

exports[`invalid(6): 'Math.sqrt(a ** 2)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a ** 2)
    |      ^^^^ Prefer \`Math.abs(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(6): 'Math.sqrt(a ** 2)' > Output 1`] = `
"
  1 | Math.abs(a)
"
`;

exports[`invalid(7): 'Math.log((( 0,x ))) * Math.LOG2E' > Code 1`] = `
"
  1 | Math.log((( 0,x ))) * Math.LOG2E
"
`;

exports[`invalid(7): 'Math.log((( 0,x ))) * Math.LOG2E' > Error 1/1 1`] = `
"
> 1 | Math.log((( 0,x ))) * Math.LOG2E
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log2(…)\` over \`Math.log(…) * Math.LOG2E\`.
"
`;

exports[`invalid(7): 'Math.log((( 0,x ))) * Math.LOG2E' > Output 1`] = `
"
  1 | Math.log2((( 0,x )))
"
`;

exports[`invalid(7): 'Math.sqrt(a * a,)' > Code 1`] = `
"
  1 | Math.sqrt(a * a,)
"
`;

exports[`invalid(7): 'Math.sqrt(a * a,)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a * a,)
    |      ^^^^ Prefer \`Math.abs(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(7): 'Math.sqrt(a * a,)' > Output 1`] = `
"
  1 | Math.abs(a,)
"
`;

exports[`invalid(8): 'Math.LOG10E * Math.log((( 0,x )))' > Code 1`] = `
"
  1 | Math.LOG10E * Math.log((( 0,x )))
"
`;

exports[`invalid(8): 'Math.LOG10E * Math.log((( 0,x )))' > Error 1/1 1`] = `
"
> 1 | Math.LOG10E * Math.log((( 0,x )))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log10(…)\` over \`Math.LOG10E * Math.log(…)\`.
"
`;

exports[`invalid(8): 'Math.LOG10E * Math.log((( 0,x )))' > Output 1`] = `
"
  1 | Math.log10((( 0,x )))
"
`;

exports[`invalid(8): 'Math.sqrt(a ** 2,)' > Code 1`] = `
"
  1 | Math.sqrt(a ** 2,)
"
`;

exports[`invalid(8): 'Math.sqrt(a ** 2,)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a ** 2,)
    |      ^^^^ Prefer \`Math.abs(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(8): 'Math.sqrt(a ** 2,)' > Output 1`] = `
"
  1 | Math.abs(a,)
"
`;

exports[`invalid(9): 'Math.LOG2E * Math.log((( 0,x )))' > Code 1`] = `
"
  1 | Math.LOG2E * Math.log((( 0,x )))
"
`;

exports[`invalid(9): 'Math.LOG2E * Math.log((( 0,x )))' > Error 1/1 1`] = `
"
> 1 | Math.LOG2E * Math.log((( 0,x )))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log2(…)\` over \`Math.LOG2E * Math.log(…)\`.
"
`;

exports[`invalid(9): 'Math.LOG2E * Math.log((( 0,x )))' > Output 1`] = `
"
  1 | Math.log2((( 0,x )))
"
`;

exports[`invalid(9): 'Math.sqrt((a, b) ** 2)' > Code 1`] = `
"
  1 | Math.sqrt((a, b) ** 2)
"
`;

exports[`invalid(9): 'Math.sqrt((a, b) ** 2)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt((a, b) ** 2)
    |      ^^^^ Prefer \`Math.abs(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(9): 'Math.sqrt((a, b) ** 2)' > Output 1`] = `
"
  1 | Math.abs((a, b))
"
`;

exports[`invalid(10): 'Math.log((( 0,x ))) / Math.LN10' > Code 1`] = `
"
  1 | Math.log((( 0,x ))) / Math.LN10
"
`;

exports[`invalid(10): 'Math.log((( 0,x ))) / Math.LN10' > Error 1/1 1`] = `
"
> 1 | Math.log((( 0,x ))) / Math.LN10
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log10(…)\` over \`Math.log(…) / Math.LN10\`.
"
`;

exports[`invalid(10): 'Math.log((( 0,x ))) / Math.LN10' > Output 1`] = `
"
  1 | Math.log10((( 0,x )))
"
`;

exports[`invalid(10): 'Math.sqrt((++a) ** 2)' > Code 1`] = `
"
  1 | Math.sqrt((++a) ** 2)
"
`;

exports[`invalid(10): 'Math.sqrt((++a) ** 2)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt((++a) ** 2)
    |      ^^^^ Prefer \`Math.abs(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(10): 'Math.sqrt((++a) ** 2)' > Output 1`] = `
"
  1 | Math.abs((++a))
"
`;

exports[`invalid(11): 'Math.log((( 0,x ))) / Math.LN2' > Code 1`] = `
"
  1 | Math.log((( 0,x ))) / Math.LN2
"
`;

exports[`invalid(11): 'Math.log((( 0,x ))) / Math.LN2' > Error 1/1 1`] = `
"
> 1 | Math.log((( 0,x ))) / Math.LN2
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.log2(…)\` over \`Math.log(…) / Math.LN2\`.
"
`;

exports[`invalid(11): 'Math.log((( 0,x ))) / Math.LN2' > Output 1`] = `
"
  1 | Math.log2((( 0,x )))
"
`;

exports[`invalid(11): 'Math.sqrt(a * a + b * b,)' > Code 1`] = `
"
  1 | Math.sqrt(a * a + b * b,)
"
`;

exports[`invalid(11): 'Math.sqrt(a * a + b * b,)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a * a + b * b,)
    |      ^^^^ Prefer \`Math.hypot(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(11): 'Math.sqrt(a * a + b * b,)' > Output 1`] = `
"
  1 | Math.hypot(a, b,)
"
`;

exports[`invalid(12): 'Math.sqrt(a ** 2 + b ** 2,)' > Code 1`] = `
"
  1 | Math.sqrt(a ** 2 + b ** 2,)
"
`;

exports[`invalid(12): 'Math.sqrt(a ** 2 + b ** 2,)' > Error 1/1 1`] = `
"
> 1 | Math.sqrt(a ** 2 + b ** 2,)
    |      ^^^^ Prefer \`Math.hypot(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(12): 'Math.sqrt(a ** 2 + b ** 2,)' > Output 1`] = `
"
  1 | Math.hypot(a, b,)
"
`;

exports[`invalid(12): 'function foo(x) {\\n\\treturn (\\n\\t\\tMa…' > Code 1`] = `
"
  1 | function foo(x) {
  2 | 	return (
  3 | 		Math.log(x)
  4 | 			/ Math.LN10
  5 | 	);
  6 | }
"
`;

exports[`invalid(12): 'function foo(x) {\\n\\treturn (\\n\\t\\tMa…' > Error 1/1 1`] = `
"
  1 | function foo(x) {
  2 | 	return (
> 3 | 		Math.log(x)
    | 		^^^^^^^^^^^
> 4 | 			/ Math.LN10
    | ^^^^^^^^^^^^^^^ Prefer \`Math.log10(…)\` over \`Math.log(…) / Math.LN10\`.
  5 | 	);
  6 | }
"
`;

exports[`invalid(12): 'function foo(x) {\\n\\treturn (\\n\\t\\tMa…' > Output 1`] = `
"
  1 | function foo(x) {
  2 | 	return (
  3 | 		Math.log10(x)
  4 | 	);
  5 | }
"
`;

exports[`invalid(13): 'Math.sqrt((( a ** 2 )) + (( b ** 2 + …' > Code 1`] = `
"
  1 | Math.sqrt((( a ** 2 )) + (( b ** 2 + c ** 2 )) + (( d )) * (( d )) + (( e )) ** (( 2 )))
"
`;

exports[`invalid(13): 'Math.sqrt((( a ** 2 )) + (( b ** 2 + …' > Error 1/1 1`] = `
"
> 1 | Math.sqrt((( a ** 2 )) + (( b ** 2 + c ** 2 )) + (( d )) * (( d )) + (( e )) ** (( 2 )))
    |      ^^^^ Prefer \`Math.hypot(…)\` over \`Math.sqrt(…)\`.
"
`;

exports[`invalid(13): 'Math.sqrt((( a ** 2 )) + (( b ** 2 + …' > Output 1`] = `
"
  1 | Math.hypot((( a )),  b, c , (( d )), (( e )))
"
`;

exports[`invalid(13): 'function foo(x) {\\n\\treturn (\\n\\t\\tMa…' > Code 1`] = `
"
  1 | function foo(x) {
  2 | 	return (
  3 | 		Math.log(x)
  4 | 			/ Math.LN2
  5 | 	);
  6 | }
"
`;

exports[`invalid(13): 'function foo(x) {\\n\\treturn (\\n\\t\\tMa…' > Error 1/1 1`] = `
"
  1 | function foo(x) {
  2 | 	return (
> 3 | 		Math.log(x)
    | 		^^^^^^^^^^^
> 4 | 			/ Math.LN2
    | ^^^^^^^^^^^^^^ Prefer \`Math.log2(…)\` over \`Math.log(…) / Math.LN2\`.
  5 | 	);
  6 | }
"
`;

exports[`invalid(13): 'function foo(x) {\\n\\treturn (\\n\\t\\tMa…' > Output 1`] = `
"
  1 | function foo(x) {
  2 | 	return (
  3 | 		Math.log2(x)
  4 | 	);
  5 | }
"
`;
