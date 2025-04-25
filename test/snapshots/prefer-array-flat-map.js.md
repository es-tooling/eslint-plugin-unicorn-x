// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const bar = [[1],[2],[3]].map(i => [i…' > Code 1`] = `
"
  1 | const bar = [[1],[2],[3]].map(i => [i]).flat()
"
`;

exports[`invalid(0): 'const bar = [[1],[2],[3]].map(i => [i…' > Error 1/1 1`] = `
"
> 1 | const bar = [[1],[2],[3]].map(i => [i]).flat()
    |                           ^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(0): 'const bar = [[1],[2],[3]].map(i => [i…' > Output 1`] = `
"
  1 | const bar = [[1],[2],[3]].flatMap(i => [i])
"
`;

exports[`invalid(1): 'const bar = [[1],[2],[3]].map(i => [i…' > Code 1`] = `
"
  1 | const bar = [[1],[2],[3]].map(i => [i]).flat(1,)
"
`;

exports[`invalid(1): 'const bar = [[1],[2],[3]].map(i => [i…' > Error 1/1 1`] = `
"
> 1 | const bar = [[1],[2],[3]].map(i => [i]).flat(1,)
    |                           ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(1): 'const bar = [[1],[2],[3]].map(i => [i…' > Output 1`] = `
"
  1 | const bar = [[1],[2],[3]].flatMap(i => [i])
"
`;

exports[`invalid(2): 'const bar = [1,2,3].map(i => [i]).fla…' > Code 1`] = `
"
  1 | const bar = [1,2,3].map(i => [i]).flat()
"
`;

exports[`invalid(2): 'const bar = [1,2,3].map(i => [i]).fla…' > Error 1/1 1`] = `
"
> 1 | const bar = [1,2,3].map(i => [i]).flat()
    |                     ^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(2): 'const bar = [1,2,3].map(i => [i]).fla…' > Output 1`] = `
"
  1 | const bar = [1,2,3].flatMap(i => [i])
"
`;

exports[`invalid(3): 'const bar = [1,2,3].map((i) => [i]).f…' > Code 1`] = `
"
  1 | const bar = [1,2,3].map((i) => [i]).flat()
"
`;

exports[`invalid(3): 'const bar = [1,2,3].map((i) => [i]).f…' > Error 1/1 1`] = `
"
> 1 | const bar = [1,2,3].map((i) => [i]).flat()
    |                     ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(3): 'const bar = [1,2,3].map((i) => [i]).f…' > Output 1`] = `
"
  1 | const bar = [1,2,3].flatMap((i) => [i])
"
`;

exports[`invalid(4): 'const bar = [1,2,3].map((i) => { retu…' > Code 1`] = `
"
  1 | const bar = [1,2,3].map((i) => { return [i]; }).flat()
"
`;

exports[`invalid(4): 'const bar = [1,2,3].map((i) => { retu…' > Error 1/1 1`] = `
"
> 1 | const bar = [1,2,3].map((i) => { return [i]; }).flat()
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(4): 'const bar = [1,2,3].map((i) => { retu…' > Output 1`] = `
"
  1 | const bar = [1,2,3].flatMap((i) => { return [i]; })
"
`;

exports[`invalid(5): 'const bar = [1,2,3].map(foo).flat()' > Code 1`] = `
"
  1 | const bar = [1,2,3].map(foo).flat()
"
`;

exports[`invalid(5): 'const bar = [1,2,3].map(foo).flat()' > Error 1/1 1`] = `
"
> 1 | const bar = [1,2,3].map(foo).flat()
    |                     ^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(5): 'const bar = [1,2,3].map(foo).flat()' > Output 1`] = `
"
  1 | const bar = [1,2,3].flatMap(foo)
"
`;

exports[`invalid(6): 'const bar = foo.map(i => [i]).flat()' > Code 1`] = `
"
  1 | const bar = foo.map(i => [i]).flat()
"
`;

exports[`invalid(6): 'const bar = foo.map(i => [i]).flat()' > Error 1/1 1`] = `
"
> 1 | const bar = foo.map(i => [i]).flat()
    |                 ^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(6): 'const bar = foo.map(i => [i]).flat()' > Output 1`] = `
"
  1 | const bar = foo.flatMap(i => [i])
"
`;

exports[`invalid(7): 'const bar = { map: () => {} }.map(i =…' > Code 1`] = `
"
  1 | const bar = { map: () => {} }.map(i => [i]).flat()
"
`;

exports[`invalid(7): 'const bar = { map: () => {} }.map(i =…' > Error 1/1 1`] = `
"
> 1 | const bar = { map: () => {} }.map(i => [i]).flat()
    |                               ^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(7): 'const bar = { map: () => {} }.map(i =…' > Output 1`] = `
"
  1 | const bar = { map: () => {} }.flatMap(i => [i])
"
`;

exports[`invalid(8): 'const bar = [1,2,3].map(i => i).map(i…' > Code 1`] = `
"
  1 | const bar = [1,2,3].map(i => i).map(i => [i]).flat()
"
`;

exports[`invalid(8): 'const bar = [1,2,3].map(i => i).map(i…' > Error 1/1 1`] = `
"
> 1 | const bar = [1,2,3].map(i => i).map(i => [i]).flat()
    |                                 ^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(8): 'const bar = [1,2,3].map(i => i).map(i…' > Output 1`] = `
"
  1 | const bar = [1,2,3].map(i => i).flatMap(i => [i])
"
`;

exports[`invalid(9): 'const bar = [1,2,3].sort().map(i => […' > Code 1`] = `
"
  1 | const bar = [1,2,3].sort().map(i => [i]).flat()
"
`;

exports[`invalid(9): 'const bar = [1,2,3].sort().map(i => […' > Error 1/1 1`] = `
"
> 1 | const bar = [1,2,3].sort().map(i => [i]).flat()
    |                            ^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(9): 'const bar = [1,2,3].sort().map(i => […' > Output 1`] = `
"
  1 | const bar = [1,2,3].sort().flatMap(i => [i])
"
`;

exports[`invalid(10): 'const bar = (([1,2,3].map(i => [i])))…' > Code 1`] = `
"
  1 | const bar = (([1,2,3].map(i => [i]))).flat()
"
`;

exports[`invalid(10): 'const bar = (([1,2,3].map(i => [i])))…' > Error 1/1 1`] = `
"
> 1 | const bar = (([1,2,3].map(i => [i]))).flat()
    |                       ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(10): 'const bar = (([1,2,3].map(i => [i])))…' > Output 1`] = `
"
  1 | const bar = (([1,2,3].flatMap(i => [i])))
"
`;

exports[`invalid(11): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Code 1`] = `
"
  1 | let bar = [1,2,3].map(i => {
  2 | 	return [i];
  3 | }).flat();
"
`;

exports[`invalid(11): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Error 1/1 1`] = `
"
> 1 | let bar = [1,2,3].map(i => {
    |                   ^^^^^^^^^^
> 2 | 	return [i];
    | ^^^^^^^^^^^^
> 3 | }).flat();
    | ^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(11): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Output 1`] = `
"
  1 | let bar = [1,2,3].flatMap(i => {
  2 | 	return [i];
  3 | });
"
`;

exports[`invalid(12): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Code 1`] = `
"
  1 | let bar = [1,2,3].map(i => {
  2 | 	return [i];
  3 | })
  4 | .flat();
"
`;

exports[`invalid(12): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Error 1/1 1`] = `
"
> 1 | let bar = [1,2,3].map(i => {
    |                   ^^^^^^^^^^
> 2 | 	return [i];
    | ^^^^^^^^^^^^
> 3 | })
    | ^^^^^^^^^^^^
> 4 | .flat();
    | ^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(12): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Output 1`] = `
"
  1 | let bar = [1,2,3].flatMap(i => {
  2 | 	return [i];
  3 | });
"
`;

exports[`invalid(13): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Code 1`] = `
"
  1 | let bar = [1,2,3].map(i => {
  2 | 	return [i];
  3 | }) // comment
  4 | .flat();
"
`;

exports[`invalid(13): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Error 1/1 1`] = `
"
> 1 | let bar = [1,2,3].map(i => {
    |                   ^^^^^^^^^^
> 2 | 	return [i];
    | ^^^^^^^^^^^^
> 3 | }) // comment
    | ^^^^^^^^^^^^
> 4 | .flat();
    | ^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(13): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Output 1`] = `
"
  1 | let bar = [1,2,3].flatMap(i => {
  2 | 	return [i];
  3 | });
"
`;

exports[`invalid(14): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Code 1`] = `
"
  1 | let bar = [1,2,3].map(i => {
  2 | 	return [i];
  3 | }) // comment
  4 | .flat(); // other
"
`;

exports[`invalid(14): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Error 1/1 1`] = `
"
> 1 | let bar = [1,2,3].map(i => {
    |                   ^^^^^^^^^^
> 2 | 	return [i];
    | ^^^^^^^^^^^^
> 3 | }) // comment
    | ^^^^^^^^^^^^
> 4 | .flat(); // other
    | ^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(14): 'let bar = [1,2,3].map(i => {\\n\\tretur…' > Output 1`] = `
"
  1 | let bar = [1,2,3].flatMap(i => {
  2 | 	return [i];
  3 | }); // other
"
`;

exports[`invalid(15): 'let bar = [1,2,3]\\n\\t.map(i => { retu…' > Code 1`] = `
"
  1 | let bar = [1,2,3]
  2 | 	.map(i => { return [i]; })
  3 | 	.flat();
"
`;

exports[`invalid(15): 'let bar = [1,2,3]\\n\\t.map(i => { retu…' > Error 1/1 1`] = `
"
  1 | let bar = [1,2,3]
> 2 | 	.map(i => { return [i]; })
    | 	 ^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 | 	.flat();
    | ^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(15): 'let bar = [1,2,3]\\n\\t.map(i => { retu…' > Output 1`] = `
"
  1 | let bar = [1,2,3]
  2 | 	.flatMap(i => { return [i]; });
"
`;

exports[`invalid(16): 'let bar = [1,2,3].map(i => { return […' > Code 1`] = `
"
  1 | let bar = [1,2,3].map(i => { return [i]; })
  2 | 	.flat();
"
`;

exports[`invalid(16): 'let bar = [1,2,3].map(i => { return […' > Error 1/1 1`] = `
"
> 1 | let bar = [1,2,3].map(i => { return [i]; })
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^^
> 2 | 	.flat();
    | ^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(16): 'let bar = [1,2,3].map(i => { return […' > Output 1`] = `
"
  1 | let bar = [1,2,3].flatMap(i => { return [i]; });
"
`;

exports[`invalid(17): 'let bar = [1,2,3] . map( x => y ) . f…' > Code 1`] = `
"
  1 | let bar = [1,2,3] . map( x => y ) . flat () // 🤪
"
`;

exports[`invalid(17): 'let bar = [1,2,3] . map( x => y ) . f…' > Error 1/1 1`] = `
"
> 1 | let bar = [1,2,3] . map( x => y ) . flat () // 🤪
    |                     ^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(17): 'let bar = [1,2,3] . map( x => y ) . f…' > Output 1`] = `
"
  1 | let bar = [1,2,3] . flatMap( x => y ) // 🤪
"
`;

exports[`invalid(18): 'const bar = [1,2,3].map(i => [i]).fla…' > Code 1`] = `
"
  1 | const bar = [1,2,3].map(i => [i]).flat(1);
"
`;

exports[`invalid(18): 'const bar = [1,2,3].map(i => [i]).fla…' > Error 1/1 1`] = `
"
> 1 | const bar = [1,2,3].map(i => [i]).flat(1);
    |                     ^^^^^^^^^^^^^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(18): 'const bar = [1,2,3].map(i => [i]).fla…' > Output 1`] = `
"
  1 | const bar = [1,2,3].flatMap(i => [i]);
"
`;

exports[`invalid(19): 'const foo = bars\\n\\t.filter(foo => !!…' > Code 1`] = `
"
  1 | const foo = bars
  2 | 	.filter(foo => !!foo.zaz)
  3 | 	.map(foo => doFoo(foo))
  4 | 	.flat();
"
`;

exports[`invalid(19): 'const foo = bars\\n\\t.filter(foo => !!…' > Error 1/1 1`] = `
"
  1 | const foo = bars
  2 | 	.filter(foo => !!foo.zaz)
> 3 | 	.map(foo => doFoo(foo))
    | 	 ^^^^^^^^^^^^^^^^^^^^^^
> 4 | 	.flat();
    | ^^^^^^^^^ Prefer \`.flatMap(…)\` over \`.map(…).flat()\`.
"
`;

exports[`invalid(19): 'const foo = bars\\n\\t.filter(foo => !!…' > Output 1`] = `
"
  1 | const foo = bars
  2 | 	.filter(foo => !!foo.zaz)
  3 | 	.flatMap(foo => doFoo(foo));
"
`;
