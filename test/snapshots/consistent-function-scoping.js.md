// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'function foo() {\\n\\tfunction bar() {}…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	function bar() {}
  3 | }
"
`;

exports[`invalid(0): 'function foo() {\\n\\tfunction bar() {}…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	function bar() {}
    | 	^^^^^^^^^^^^ Move function 'bar' to the outer scope.
  3 | }
"
`;

exports[`invalid(1): 'function foo() {\\n\\tasync function ba…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	async function bar() {}
  3 | }
"
`;

exports[`invalid(1): 'function foo() {\\n\\tasync function ba…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	async function bar() {}
    | 	^^^^^^^^^^^^^^^^^^ Move async function 'bar' to the outer scope.
  3 | }
"
`;

exports[`invalid(2): 'function foo() {\\n\\tfunction * bar() …' > Code 1`] = `
"
  1 | function foo() {
  2 | 	function * bar() {}
  3 | }
"
`;

exports[`invalid(2): 'function foo() {\\n\\tfunction * bar() …' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	function * bar() {}
    | 	^^^^^^^^^^^^^^ Move generator function 'bar' to the outer scope.
  3 | }
"
`;

exports[`invalid(3): 'function foo() {\\n\\tasync function * …' > Code 1`] = `
"
  1 | function foo() {
  2 | 	async function * bar() {}
  3 | }
"
`;

exports[`invalid(3): 'function foo() {\\n\\tasync function * …' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	async function * bar() {}
    | 	^^^^^^^^^^^^^^^^^^^^ Move async generator function 'bar' to the outer scope.
  3 | }
"
`;

exports[`invalid(4): 'function foo() {\\n\\tconst bar = () =>…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	const bar = () => {}
  3 | }
"
`;

exports[`invalid(4): 'function foo() {\\n\\tconst bar = () =>…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	const bar = () => {}
    | 	               ^^ Move arrow function 'bar' to the outer scope.
  3 | }
"
`;

exports[`invalid(5): 'const doFoo = () => bar => bar;' > Code 1`] = `
"
  1 | const doFoo = () => bar => bar;
"
`;

exports[`invalid(5): 'const doFoo = () => bar => bar;' > Error 1/1 1`] = `
"
> 1 | const doFoo = () => bar => bar;
    |                         ^^ Move arrow function to the outer scope.
"
`;

exports[`invalid(6): 'function foo() {\\n\\tconst bar = async…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	const bar = async () => {}
  3 | }
"
`;

exports[`invalid(6): 'function foo() {\\n\\tconst bar = async…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	const bar = async () => {}
    | 	                     ^^ Move async arrow function 'bar' to the outer scope.
  3 | }
"
`;

exports[`invalid(7): 'function doFoo() {\\n\\tconst doBar = f…' > Code 1`] = `
"
  1 | function doFoo() {
  2 | 	const doBar = function(bar) {
  3 | 		return bar;
  4 | 	};
  5 | }
"
`;

exports[`invalid(7): 'function doFoo() {\\n\\tconst doBar = f…' > Error 1/1 1`] = `
"
  1 | function doFoo() {
> 2 | 	const doBar = function(bar) {
    | 	              ^^^^^^^^ Move function 'doBar' to the outer scope.
  3 | 		return bar;
  4 | 	};
  5 | }
"
`;
