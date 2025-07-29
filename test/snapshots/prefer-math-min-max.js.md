// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'function foo(a, b) {\\n\\treturn (a as …' > Code 1`] = `
"
  1 | function foo(a, b) {
  2 | 	return (a as number) > b ? a : b;
  3 | }
"
`;

exports[`invalid(0): 'function foo(a, b) {\\n\\treturn (a as …' > Error 1/1 1`] = `
"
  1 | function foo(a, b) {
> 2 | 	return (a as number) > b ? a : b;
    | 	       ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(0): 'function foo(a, b) {\\n\\treturn (a as …' > Output 1`] = `
"
  1 | function foo(a, b) {
  2 | 	return Math.max(a as number, b);
  3 | }
"
`;

exports[`invalid(0): 'height > 50 ? 50 : height' > Code 1`] = `
"
  1 | height > 50 ? 50 : height
"
`;

exports[`invalid(0): 'height > 50 ? 50 : height' > Error 1/1 1`] = `
"
> 1 | height > 50 ? 50 : height
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(0): 'height > 50 ? 50 : height' > Output 1`] = `
"
  1 | Math.min(height, 50)
"
`;

exports[`invalid(1): 'function foo(a, b) {\\n\\treturn (a as …' > Code 1`] = `
"
  1 | function foo(a, b) {
  2 | 	return (a as number) > b ? a : b;
  3 | }
"
`;

exports[`invalid(1): 'function foo(a, b) {\\n\\treturn (a as …' > Error 1/1 1`] = `
"
  1 | function foo(a, b) {
> 2 | 	return (a as number) > b ? a : b;
    | 	       ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(1): 'function foo(a, b) {\\n\\treturn (a as …' > Output 1`] = `
"
  1 | function foo(a, b) {
  2 | 	return Math.max(a as number, b);
  3 | }
"
`;

exports[`invalid(1): 'height >= 50 ? 50 : height' > Code 1`] = `
"
  1 | height >= 50 ? 50 : height
"
`;

exports[`invalid(1): 'height >= 50 ? 50 : height' > Error 1/1 1`] = `
"
> 1 | height >= 50 ? 50 : height
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(1): 'height >= 50 ? 50 : height' > Output 1`] = `
"
  1 | Math.min(height, 50)
"
`;

exports[`invalid(2): 'function foo(a, b) {\\n\\treturn (a as …' > Code 1`] = `
"
  1 | function foo(a, b) {
  2 | 	return (a as unknown as number) > b ? a : b;
  3 | }
"
`;

exports[`invalid(2): 'function foo(a, b) {\\n\\treturn (a as …' > Error 1/1 1`] = `
"
  1 | function foo(a, b) {
> 2 | 	return (a as unknown as number) > b ? a : b;
    | 	       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(2): 'function foo(a, b) {\\n\\treturn (a as …' > Output 1`] = `
"
  1 | function foo(a, b) {
  2 | 	return Math.max(a as unknown as number, b);
  3 | }
"
`;

exports[`invalid(2): 'height < 50 ? height : 50' > Code 1`] = `
"
  1 | height < 50 ? height : 50
"
`;

exports[`invalid(2): 'height < 50 ? height : 50' > Error 1/1 1`] = `
"
> 1 | height < 50 ? height : 50
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(2): 'height < 50 ? height : 50' > Output 1`] = `
"
  1 | Math.min(height, 50)
"
`;

exports[`invalid(3): 'height <= 50 ? height : 50' > Code 1`] = `
"
  1 | height <= 50 ? height : 50
"
`;

exports[`invalid(3): 'height <= 50 ? height : 50' > Error 1/1 1`] = `
"
> 1 | height <= 50 ? height : 50
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(3): 'height <= 50 ? height : 50' > Output 1`] = `
"
  1 | Math.min(height, 50)
"
`;

exports[`invalid(3): 'var foo = 10;\\n\\nvar value = foo > ba…' > Code 1`] = `
"
  1 | var foo = 10;
  2 |
  3 | var value = foo > bar ? bar : foo;
"
`;

exports[`invalid(3): 'var foo = 10;\\n\\nvar value = foo > ba…' > Error 1/1 1`] = `
"
  1 | var foo = 10;
  2 |
> 3 | var value = foo > bar ? bar : foo;
    |             ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(3): 'var foo = 10;\\n\\nvar value = foo > ba…' > Output 1`] = `
"
  1 | var foo = 10;
  2 |
  3 | var value = Math.min(foo, bar);
"
`;

exports[`invalid(4): 'height > maxHeight ? maxHeight : heig…' > Code 1`] = `
"
  1 | height > maxHeight ? maxHeight : height
"
`;

exports[`invalid(4): 'height > maxHeight ? maxHeight : heig…' > Error 1/1 1`] = `
"
> 1 | height > maxHeight ? maxHeight : height
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(4): 'height > maxHeight ? maxHeight : heig…' > Output 1`] = `
"
  1 | Math.min(height, maxHeight)
"
`;

exports[`invalid(4): 'var foo = 10;\\nvar bar = 20;\\n\\nvar v…' > Code 1`] = `
"
  1 | var foo = 10;
  2 | var bar = 20;
  3 |
  4 | var value = foo > bar ? bar : foo;
"
`;

exports[`invalid(4): 'var foo = 10;\\nvar bar = 20;\\n\\nvar v…' > Error 1/1 1`] = `
"
  1 | var foo = 10;
  2 | var bar = 20;
  3 |
> 4 | var value = foo > bar ? bar : foo;
    |             ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(4): 'var foo = 10;\\nvar bar = 20;\\n\\nvar v…' > Output 1`] = `
"
  1 | var foo = 10;
  2 | var bar = 20;
  3 |
  4 | var value = Math.min(foo, bar);
"
`;

exports[`invalid(5): 'height < maxHeight ? height : maxHeig…' > Code 1`] = `
"
  1 | height < maxHeight ? height : maxHeight
"
`;

exports[`invalid(5): 'height < maxHeight ? height : maxHeig…' > Error 1/1 1`] = `
"
> 1 | height < maxHeight ? height : maxHeight
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(5): 'height < maxHeight ? height : maxHeig…' > Output 1`] = `
"
  1 | Math.min(height, maxHeight)
"
`;

exports[`invalid(5): 'var foo: number;\\nvar bar: number;\\n\\…' > Code 1`] = `
"
  1 | var foo: number;
  2 | var bar: number;
  3 |
  4 | var value = foo > bar ? bar : foo;
"
`;

exports[`invalid(5): 'var foo: number;\\nvar bar: number;\\n\\…' > Error 1/1 1`] = `
"
  1 | var foo: number;
  2 | var bar: number;
  3 |
> 4 | var value = foo > bar ? bar : foo;
    |             ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(5): 'var foo: number;\\nvar bar: number;\\n\\…' > Output 1`] = `
"
  1 | var foo: number;
  2 | var bar: number;
  3 |
  4 | var value = Math.min(foo, bar);
"
`;

exports[`invalid(6): 'window.height > 50 ? 50 : window.heig…' > Code 1`] = `
"
  1 | window.height > 50 ? 50 : window.height
"
`;

exports[`invalid(6): 'window.height > 50 ? 50 : window.heig…' > Error 1/1 1`] = `
"
> 1 | window.height > 50 ? 50 : window.height
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(6): 'window.height > 50 ? 50 : window.heig…' > Output 1`] = `
"
  1 | Math.min(window.height, 50)
"
`;

exports[`invalid(7): 'window.height < 50 ? window.height : …' > Code 1`] = `
"
  1 | window.height < 50 ? window.height : 50
"
`;

exports[`invalid(7): 'window.height < 50 ? window.height : …' > Error 1/1 1`] = `
"
> 1 | window.height < 50 ? window.height : 50
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(7): 'window.height < 50 ? window.height : …' > Output 1`] = `
"
  1 | Math.min(window.height, 50)
"
`;

exports[`invalid(8): 'height > 50 ? height : 50' > Code 1`] = `
"
  1 | height > 50 ? height : 50
"
`;

exports[`invalid(8): 'height > 50 ? height : 50' > Error 1/1 1`] = `
"
> 1 | height > 50 ? height : 50
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
"
`;

exports[`invalid(8): 'height > 50 ? height : 50' > Output 1`] = `
"
  1 | Math.max(height, 50)
"
`;

exports[`invalid(9): 'height >= 50 ? height : 50' > Code 1`] = `
"
  1 | height >= 50 ? height : 50
"
`;

exports[`invalid(9): 'height >= 50 ? height : 50' > Error 1/1 1`] = `
"
> 1 | height >= 50 ? height : 50
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
"
`;

exports[`invalid(9): 'height >= 50 ? height : 50' > Output 1`] = `
"
  1 | Math.max(height, 50)
"
`;

exports[`invalid(10): 'height < 50 ? 50 : height' > Code 1`] = `
"
  1 | height < 50 ? 50 : height
"
`;

exports[`invalid(10): 'height < 50 ? 50 : height' > Error 1/1 1`] = `
"
> 1 | height < 50 ? 50 : height
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
"
`;

exports[`invalid(10): 'height < 50 ? 50 : height' > Output 1`] = `
"
  1 | Math.max(height, 50)
"
`;

exports[`invalid(11): 'height <= 50 ? 50 : height' > Code 1`] = `
"
  1 | height <= 50 ? 50 : height
"
`;

exports[`invalid(11): 'height <= 50 ? 50 : height' > Error 1/1 1`] = `
"
> 1 | height <= 50 ? 50 : height
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
"
`;

exports[`invalid(11): 'height <= 50 ? 50 : height' > Output 1`] = `
"
  1 | Math.max(height, 50)
"
`;

exports[`invalid(12): 'height > maxHeight ? height : maxHeig…' > Code 1`] = `
"
  1 | height > maxHeight ? height : maxHeight
"
`;

exports[`invalid(12): 'height > maxHeight ? height : maxHeig…' > Error 1/1 1`] = `
"
> 1 | height > maxHeight ? height : maxHeight
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
"
`;

exports[`invalid(12): 'height > maxHeight ? height : maxHeig…' > Output 1`] = `
"
  1 | Math.max(height, maxHeight)
"
`;

exports[`invalid(13): 'height < maxHeight ? maxHeight : heig…' > Code 1`] = `
"
  1 | height < maxHeight ? maxHeight : height
"
`;

exports[`invalid(13): 'height < maxHeight ? maxHeight : heig…' > Error 1/1 1`] = `
"
> 1 | height < maxHeight ? maxHeight : height
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.max()\` to simplify ternary expressions.
"
`;

exports[`invalid(13): 'height < maxHeight ? maxHeight : heig…' > Output 1`] = `
"
  1 | Math.max(height, maxHeight)
"
`;

exports[`invalid(14): 'function a() {\\n\\treturn +foo > 10 ? …' > Code 1`] = `
"
  1 | function a() {
  2 | 	return +foo > 10 ? 10 : +foo
  3 | }
"
`;

exports[`invalid(14): 'function a() {\\n\\treturn +foo > 10 ? …' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return +foo > 10 ? 10 : +foo
    | 	       ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(14): 'function a() {\\n\\treturn +foo > 10 ? …' > Output 1`] = `
"
  1 | function a() {
  2 | 	return Math.min(+foo, 10)
  3 | }
"
`;

exports[`invalid(15): 'function a() {\\n\\treturn+foo > 10 ? 1…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return+foo > 10 ? 10 : +foo
  3 | }
"
`;

exports[`invalid(15): 'function a() {\\n\\treturn+foo > 10 ? 1…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return+foo > 10 ? 10 : +foo
    | 	      ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(15): 'function a() {\\n\\treturn+foo > 10 ? 1…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return Math.min(+foo, 10)
  3 | }
"
`;

exports[`invalid(16): '(0,foo) > 10 ? 10 : (0,foo)' > Code 1`] = `
"
  1 | (0,foo) > 10 ? 10 : (0,foo)
"
`;

exports[`invalid(16): '(0,foo) > 10 ? 10 : (0,foo)' > Error 1/1 1`] = `
"
> 1 | (0,foo) > 10 ? 10 : (0,foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(16): '(0,foo) > 10 ? 10 : (0,foo)' > Output 1`] = `
"
  1 | Math.min((0,foo), 10)
"
`;

exports[`invalid(17): 'foo.bar() > 10 ? 10 : foo.bar()' > Code 1`] = `
"
  1 | foo.bar() > 10 ? 10 : foo.bar()
"
`;

exports[`invalid(17): 'foo.bar() > 10 ? 10 : foo.bar()' > Error 1/1 1`] = `
"
> 1 | foo.bar() > 10 ? 10 : foo.bar()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(17): 'foo.bar() > 10 ? 10 : foo.bar()' > Output 1`] = `
"
  1 | Math.min(foo.bar(), 10)
"
`;

exports[`invalid(18): 'async function foo() {\\n\\treturn awai…' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	return await foo.bar() > 10 ? 10 : await foo.bar()
  3 | }
"
`;

exports[`invalid(18): 'async function foo() {\\n\\treturn awai…' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	return await foo.bar() > 10 ? 10 : await foo.bar()
    | 	       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(18): 'async function foo() {\\n\\treturn awai…' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	return Math.min(await foo.bar(), 10)
  3 | }
"
`;

exports[`invalid(19): 'async function foo() {\\n\\tawait(+foo …' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	await(+foo > 10 ? 10 : +foo)
  3 | }
"
`;

exports[`invalid(19): 'async function foo() {\\n\\tawait(+foo …' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	await(+foo > 10 ? 10 : +foo)
    | 	      ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(19): 'async function foo() {\\n\\tawait(+foo …' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	await (Math.min(+foo, 10))
  3 | }
"
`;

exports[`invalid(20): 'function foo() {\\n\\treturn(foo.bar() …' > Code 1`] = `
"
  1 | function foo() {
  2 | 	return(foo.bar() > 10) ? 10 : foo.bar()
  3 | }
"
`;

exports[`invalid(20): 'function foo() {\\n\\treturn(foo.bar() …' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	return(foo.bar() > 10) ? 10 : foo.bar()
    | 	      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(20): 'function foo() {\\n\\treturn(foo.bar() …' > Output 1`] = `
"
  1 | function foo() {
  2 | 	return Math.min(foo.bar(), 10)
  3 | }
"
`;

exports[`invalid(21): 'function* foo() {\\n\\tyield+foo > 10 ?…' > Code 1`] = `
"
  1 | function* foo() {
  2 | 	yield+foo > 10 ? 10 : +foo
  3 | }
"
`;

exports[`invalid(21): 'function* foo() {\\n\\tyield+foo > 10 ?…' > Error 1/1 1`] = `
"
  1 | function* foo() {
> 2 | 	yield+foo > 10 ? 10 : +foo
    | 	     ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
  3 | }
"
`;

exports[`invalid(21): 'function* foo() {\\n\\tyield+foo > 10 ?…' > Output 1`] = `
"
  1 | function* foo() {
  2 | 	yield Math.min(+foo, 10)
  3 | }
"
`;

exports[`invalid(22): 'export default+foo > 10 ? 10 : +foo' > Code 1`] = `
"
  1 | export default+foo > 10 ? 10 : +foo
"
`;

exports[`invalid(22): 'export default+foo > 10 ? 10 : +foo' > Error 1/1 1`] = `
"
> 1 | export default+foo > 10 ? 10 : +foo
    |               ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(22): 'export default+foo > 10 ? 10 : +foo' > Output 1`] = `
"
  1 | export default Math.min(+foo, 10)
"
`;

exports[`invalid(23): 'foo.length > bar.length ? bar.length …' > Code 1`] = `
"
  1 | foo.length > bar.length ? bar.length : foo.length
"
`;

exports[`invalid(23): 'foo.length > bar.length ? bar.length …' > Error 1/1 1`] = `
"
> 1 | foo.length > bar.length ? bar.length : foo.length
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`Math.min()\` to simplify ternary expressions.
"
`;

exports[`invalid(23): 'foo.length > bar.length ? bar.length …' > Output 1`] = `
"
  1 | Math.min(foo.length, bar.length)
"
`;
