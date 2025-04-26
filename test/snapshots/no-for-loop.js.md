// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'for (let i = 0; i < arr.length; i += …' > Code 1`] = `
"
  1 | for (let i = 0; i < arr.length; i += 1) {
  2 | 	console.log(arr[i])
  3 | }
"
`;

exports[`invalid(0): 'for (let i = 0; i < arr.length; i += …' > Error 1/1 1`] = `
"
> 1 | for (let i = 0; i < arr.length; i += 1) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use a \`for-of\` loop instead of this \`for\` loop.
  2 | 	console.log(arr[i])
  3 | }
"
`;

exports[`invalid(0): 'for (let i = 0; i < arr.length; i += …' > Output 1`] = `
"
  1 | for (const element of arr) {
  2 | 	console.log(element)
  3 | }
"
`;

exports[`invalid(1): 'for (let i = 0; i < plugins.length; i…' > Code 1`] = `
"
  1 | for (let i = 0; i < plugins.length; i++) {
  2 | 	let plugin = plugins[i];
  3 | 	plugin = calculateSomeNewValue();
  4 | 	// ...
  5 | }
"
`;

exports[`invalid(1): 'for (let i = 0; i < plugins.length; i…' > Error 1/1 1`] = `
"
> 1 | for (let i = 0; i < plugins.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use a \`for-of\` loop instead of this \`for\` loop.
  2 | 	let plugin = plugins[i];
  3 | 	plugin = calculateSomeNewValue();
  4 | 	// ...
  5 | }
"
`;

exports[`invalid(1): 'for (let i = 0; i < plugins.length; i…' > Output 1`] = `
"
  1 | for (let plugin of plugins) {
  2 | 	plugin = calculateSomeNewValue();
  3 | 	// ...
  4 | }
"
`;

exports[`invalid(2): 'for (\\n\\tlet i = 0;\\n\\ti < array.leng…' > Code 1`] = `
"
   1 | for (
   2 | 	let i = 0;
   3 | 	i < array.length;
   4 | 	i++
   5 | )
   6 | // comment (foo)
   7 | 	{
   8 | 		var foo = array[i];
   9 | 		foo = bar();
  10 | 	}
"
`;

exports[`invalid(2): 'for (\\n\\tlet i = 0;\\n\\ti < array.leng…' > Error 1/1 1`] = `
"
>  1 | for (
     | ^^^^^
>  2 | 	let i = 0;
     | ^^^^^^^^^^^
>  3 | 	i < array.length;
     | ^^^^^^^^^^^
>  4 | 	i++
     | ^^^^^^^^^^^
>  5 | )
     | ^^ Use a \`for-of\` loop instead of this \`for\` loop.
   6 | // comment (foo)
   7 | 	{
   8 | 		var foo = array[i];
   9 | 		foo = bar();
  10 | 	}
"
`;

exports[`invalid(2): 'for (\\n\\tlet i = 0;\\n\\ti < array.leng…' > Output 1`] = `
"
  1 | for (
  2 | 	var foo of array
  3 | )
  4 | // comment (foo)
  5 | 	{
  6 | 		foo = bar();
  7 | 	}
"
`;

exports[`invalid(3): 'for (let i = 0; i < array.length; i++…' > Code 1`] = `
"
  1 | for (let i = 0; i < array.length; i++) {
  2 | 	let foo = array[i];
  3 | }
"
`;

exports[`invalid(3): 'for (let i = 0; i < array.length; i++…' > Error 1/1 1`] = `
"
> 1 | for (let i = 0; i < array.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use a \`for-of\` loop instead of this \`for\` loop.
  2 | 	let foo = array[i];
  3 | }
"
`;

exports[`invalid(3): 'for (let i = 0; i < array.length; i++…' > Output 1`] = `
"
  1 | for (let foo of array) {
  2 | }
"
`;

exports[`invalid(4): 'for (let i = 0; i < array.length; i++…' > Code 1`] = `
"
  1 | for (let i = 0; i < array.length; i++) {
  2 | 	const foo = array[i];
  3 | }
"
`;

exports[`invalid(4): 'for (let i = 0; i < array.length; i++…' > Error 1/1 1`] = `
"
> 1 | for (let i = 0; i < array.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use a \`for-of\` loop instead of this \`for\` loop.
  2 | 	const foo = array[i];
  3 | }
"
`;

exports[`invalid(4): 'for (let i = 0; i < array.length; i++…' > Output 1`] = `
"
  1 | for (const foo of array) {
  2 | }
"
`;

exports[`invalid(5): 'for (let i = 0; i < array.length; i++…' > Code 1`] = `
"
  1 | for (let i = 0; i < array.length; i++) {
  2 | 	var foo = array[i], bar = 1;
  3 | }
"
`;

exports[`invalid(5): 'for (let i = 0; i < array.length; i++…' > Error 1/1 1`] = `
"
> 1 | for (let i = 0; i < array.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use a \`for-of\` loop instead of this \`for\` loop.
  2 | 	var foo = array[i], bar = 1;
  3 | }
"
`;

exports[`invalid(5): 'for (let i = 0; i < array.length; i++…' > Output 1`] = `
"
  1 | for (var foo of array) {
  2 | 	var bar = 1;
  3 | }
"
`;
