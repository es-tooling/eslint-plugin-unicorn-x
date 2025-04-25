// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const a: Array<\\'foo\\' | \\'bar\\'> = […' > Code 1`] = `
"
  1 | const a: Array<'foo' | 'bar'> = ['foo', 'bar']
  2 |
  3 | for (let i = 0; i < 3; i++) {
  4 | 	if (a.includes(someString)) {
  5 | 		console.log(123)
  6 | 	}
  7 | }
"
`;

exports[`invalid(0): 'const a: Array<\\'foo\\' | \\'bar\\'> = […' > Error 1/1 1`] = `
"
> 1 | const a: Array<'foo' | 'bar'> = ['foo', 'bar']
    |       ^^^^^^^^^^^^^^^^^^^^^^^ \`a\` should be a \`Set\`, and use \`a.has()\` to check existence or non-existence.
  2 |
  3 | for (let i = 0; i < 3; i++) {
  4 | 	if (a.includes(someString)) {
  5 | 		console.log(123)
  6 | 	}
  7 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch \`a\` to \`Set\`.
  1 | const a: Array<'foo' | 'bar'> = new Set(['foo', 'bar'])
  2 |
  3 | for (let i = 0; i < 3; i++) {
  4 | 	if (a.has(someString)) {
  5 | 		console.log(123)
  6 | 	}
  7 | }
"
`;

exports[`invalid(0): 'const foo = [1, 2, 3];\\nfunction unic…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(0): 'const foo = [1, 2, 3];\\nfunction unic…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(0): 'const foo = [1, 2, 3];\\nfunction unic…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(1): 'const foo = [1, 2, 3];\\nconst isExist…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | const isExists = foo.includes(1);
  3 | const isExists2 = foo.includes(2);
"
`;

exports[`invalid(1): 'const foo = [1, 2, 3];\\nconst isExist…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | const isExists = foo.includes(1);
  3 | const isExists2 = foo.includes(2);
"
`;

exports[`invalid(1): 'const foo = [1, 2, 3];\\nconst isExist…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | const isExists = foo.has(1);
  3 | const isExists2 = foo.has(2);
"
`;

exports[`invalid(2): 'const foo = [1, 2, 3];\\nfor (const a …' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | for (const a of b) {
  3 | 	foo.includes(1);
  4 | }
"
`;

exports[`invalid(2): 'const foo = [1, 2, 3];\\nfor (const a …' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | for (const a of b) {
  3 | 	foo.includes(1);
  4 | }
"
`;

exports[`invalid(2): 'const foo = [1, 2, 3];\\nfor (const a …' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | for (const a of b) {
  3 | 	foo.has(1);
  4 | }
"
`;

exports[`invalid(3): 'async function unicorn() {\\n\\tconst f…' > Code 1`] = `
"
  1 | async function unicorn() {
  2 | 	const foo = [1, 2, 3];
  3 | 	for await (const a of b) {
  4 | 		foo.includes(1);
  5 | 	}
  6 | }
"
`;

exports[`invalid(3): 'async function unicorn() {\\n\\tconst f…' > Error 1/1 1`] = `
"
  1 | async function unicorn() {
> 2 | 	const foo = [1, 2, 3];
    | 	      ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  3 | 	for await (const a of b) {
  4 | 		foo.includes(1);
  5 | 	}
  6 | }
"
`;

exports[`invalid(3): 'async function unicorn() {\\n\\tconst f…' > Output 1`] = `
"
  1 | async function unicorn() {
  2 | 	const foo = new Set([1, 2, 3]);
  3 | 	for await (const a of b) {
  4 | 		foo.has(1);
  5 | 	}
  6 | }
"
`;

exports[`invalid(4): 'const foo = [1, 2, 3];\\nfor (let i = …' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | for (let i = 0; i < n; i++) {
  3 | 	foo.includes(1);
  4 | }
"
`;

exports[`invalid(4): 'const foo = [1, 2, 3];\\nfor (let i = …' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | for (let i = 0; i < n; i++) {
  3 | 	foo.includes(1);
  4 | }
"
`;

exports[`invalid(4): 'const foo = [1, 2, 3];\\nfor (let i = …' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | for (let i = 0; i < n; i++) {
  3 | 	foo.has(1);
  4 | }
"
`;

exports[`invalid(5): 'const foo = [1, 2, 3];\\nfor (let a in…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | for (let a in b) {
  3 | 	foo.includes(1);
  4 | }
"
`;

exports[`invalid(5): 'const foo = [1, 2, 3];\\nfor (let a in…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | for (let a in b) {
  3 | 	foo.includes(1);
  4 | }
"
`;

exports[`invalid(5): 'const foo = [1, 2, 3];\\nfor (let a in…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | for (let a in b) {
  3 | 	foo.has(1);
  4 | }
"
`;

exports[`invalid(6): 'const foo = [1, 2, 3];\\nwhile (a)  {\\…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | while (a)  {
  3 | 	foo.includes(1);
  4 | }
"
`;

exports[`invalid(6): 'const foo = [1, 2, 3];\\nwhile (a)  {\\…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | while (a)  {
  3 | 	foo.includes(1);
  4 | }
"
`;

exports[`invalid(6): 'const foo = [1, 2, 3];\\nwhile (a)  {\\…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | while (a)  {
  3 | 	foo.has(1);
  4 | }
"
`;

exports[`invalid(7): 'const foo = [1, 2, 3];\\ndo {\\n\\tfoo.i…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | do {
  3 | 	foo.includes(1);
  4 | } while (a)
"
`;

exports[`invalid(7): 'const foo = [1, 2, 3];\\ndo {\\n\\tfoo.i…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | do {
  3 | 	foo.includes(1);
  4 | } while (a)
"
`;

exports[`invalid(7): 'const foo = [1, 2, 3];\\ndo {\\n\\tfoo.i…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | do {
  3 | 	foo.has(1);
  4 | } while (a)
"
`;

exports[`invalid(8): 'const foo = [1, 2, 3];\\ndo {\\n\\t// …\\…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | do {
  3 | 	// …
  4 | } while (foo.includes(1))
"
`;

exports[`invalid(8): 'const foo = [1, 2, 3];\\ndo {\\n\\t// …\\…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | do {
  3 | 	// …
  4 | } while (foo.includes(1))
"
`;

exports[`invalid(8): 'const foo = [1, 2, 3];\\ndo {\\n\\t// …\\…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | do {
  3 | 	// …
  4 | } while (foo.has(1))
"
`;

exports[`invalid(9): 'const foo = [1, 2, 3];\\nfunction unic…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(9): 'const foo = [1, 2, 3];\\nfunction unic…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(9): 'const foo = [1, 2, 3];\\nfunction unic…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(10): 'const foo = [1, 2, 3];\\nfunction * un…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | function * unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(10): 'const foo = [1, 2, 3];\\nfunction * un…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function * unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(10): 'const foo = [1, 2, 3];\\nfunction * un…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | function * unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(11): 'const foo = [1, 2, 3];\\nasync functio…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | async function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(11): 'const foo = [1, 2, 3];\\nasync functio…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | async function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(11): 'const foo = [1, 2, 3];\\nasync functio…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | async function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(12): 'const foo = [1, 2, 3];\\nasync functio…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | async function * unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(12): 'const foo = [1, 2, 3];\\nasync functio…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | async function * unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(12): 'const foo = [1, 2, 3];\\nasync functio…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | async function * unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(13): 'const foo = [1, 2, 3];\\nconst unicorn…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | const unicorn = function () {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(13): 'const foo = [1, 2, 3];\\nconst unicorn…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | const unicorn = function () {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(13): 'const foo = [1, 2, 3];\\nconst unicorn…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | const unicorn = function () {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(14): 'const foo = [1, 2, 3];\\nconst unicorn…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | const unicorn = () => foo.includes(1);
"
`;

exports[`invalid(14): 'const foo = [1, 2, 3];\\nconst unicorn…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | const unicorn = () => foo.includes(1);
"
`;

exports[`invalid(14): 'const foo = [1, 2, 3];\\nconst unicorn…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | const unicorn = () => foo.has(1);
"
`;

exports[`invalid(15): 'const foo = [1, 2, 3];\\nconst a = {\\n…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | const a = {
  3 | 	b() {
  4 | 		return foo.includes(1);
  5 | 	}
  6 | };
"
`;

exports[`invalid(15): 'const foo = [1, 2, 3];\\nconst a = {\\n…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | const a = {
  3 | 	b() {
  4 | 		return foo.includes(1);
  5 | 	}
  6 | };
"
`;

exports[`invalid(15): 'const foo = [1, 2, 3];\\nconst a = {\\n…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | const a = {
  3 | 	b() {
  4 | 		return foo.has(1);
  5 | 	}
  6 | };
"
`;

exports[`invalid(16): 'const foo = [1, 2, 3];\\nclass A {\\n\\t…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | class A {
  3 | 	b() {
  4 | 		return foo.includes(1);
  5 | 	}
  6 | }
"
`;

exports[`invalid(16): 'const foo = [1, 2, 3];\\nclass A {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | class A {
  3 | 	b() {
  4 | 		return foo.includes(1);
  5 | 	}
  6 | }
"
`;

exports[`invalid(16): 'const foo = [1, 2, 3];\\nclass A {\\n\\t…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | class A {
  3 | 	b() {
  4 | 		return foo.has(1);
  5 | 	}
  6 | }
"
`;

exports[`invalid(17): 'const foo = [...bar];\\nfunction unico…' > Code 1`] = `
"
  1 | const foo = [...bar];
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
  5 | bar.pop();
"
`;

exports[`invalid(17): 'const foo = [...bar];\\nfunction unico…' > Error 1/1 1`] = `
"
> 1 | const foo = [...bar];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
  5 | bar.pop();
"
`;

exports[`invalid(17): 'const foo = [...bar];\\nfunction unico…' > Output 1`] = `
"
  1 | const foo = new Set([...bar]);
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
  5 | bar.pop();
"
`;

exports[`invalid(18): 'const foo = [1, 2, 3];\\nfunction unic…' > Code 1`] = `
"
  1 | const foo = [1, 2, 3];
  2 | function unicorn() {
  3 | 	const exists = foo.includes(1);
  4 | 	function isExists(find) {
  5 | 		return foo.includes(find);
  6 | 	}
  7 | }
"
`;

exports[`invalid(18): 'const foo = [1, 2, 3];\\nfunction unic…' > Error 1/1 1`] = `
"
> 1 | const foo = [1, 2, 3];
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	const exists = foo.includes(1);
  4 | 	function isExists(find) {
  5 | 		return foo.includes(find);
  6 | 	}
  7 | }
"
`;

exports[`invalid(18): 'const foo = [1, 2, 3];\\nfunction unic…' > Output 1`] = `
"
  1 | const foo = new Set([1, 2, 3]);
  2 | function unicorn() {
  3 | 	const exists = foo.has(1);
  4 | 	function isExists(find) {
  5 | 		return foo.has(find);
  6 | 	}
  7 | }
"
`;

exports[`invalid(19): 'function wrap() {\\n\\tconst foo = [1, …' > Code 1`] = `
"
   1 | function wrap() {
   2 | 	const foo = [1, 2, 3];
   3 |
   4 | 	function unicorn() {
   5 | 		return foo.includes(1);
   6 | 	}
   7 | }
   8 |
   9 | const bar = [4, 5, 6];
  10 |
  11 | function unicorn() {
  12 | 	return bar.includes(1);
  13 | }
"
`;

exports[`invalid(19): 'function wrap() {\\n\\tconst foo = [1, …' > Error 1/2 1`] = `
"
   1 | function wrap() {
>  2 | 	const foo = [1, 2, 3];
     | 	      ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
   3 |
   4 | 	function unicorn() {
   5 | 		return foo.includes(1);
   6 | 	}
   7 | }
   8 |
   9 | const bar = [4, 5, 6];
  10 |
  11 | function unicorn() {
  12 | 	return bar.includes(1);
  13 | }
"
`;

exports[`invalid(19): 'function wrap() {\\n\\tconst foo = [1, …' > Error 2/2 1`] = `
"
   1 | function wrap() {
   2 | 	const foo = [1, 2, 3];
   3 |
   4 | 	function unicorn() {
   5 | 		return foo.includes(1);
   6 | 	}
   7 | }
   8 |
>  9 | const bar = [4, 5, 6];
     |       ^^^ \`bar\` should be a \`Set\`, and use \`bar.has()\` to check existence or non-existence.
  10 |
  11 | function unicorn() {
  12 | 	return bar.includes(1);
  13 | }
"
`;

exports[`invalid(19): 'function wrap() {\\n\\tconst foo = [1, …' > Output 1`] = `
"
   1 | function wrap() {
   2 | 	const foo = new Set([1, 2, 3]);
   3 |
   4 | 	function unicorn() {
   5 | 		return foo.has(1);
   6 | 	}
   7 | }
   8 |
   9 | const bar = new Set([4, 5, 6]);
  10 |
  11 | function unicorn() {
  12 | 	return bar.has(1);
  13 | }
"
`;

exports[`invalid(20): 'const foo = [1, 2, 3];\\nfunction wrap…' > Code 1`] = `
"
   1 | const foo = [1, 2, 3];
   2 | function wrap() {
   3 | 	const exists = foo.includes(1);
   4 | 	const bar = [1, 2, 3];
   5 |
   6 | 	function outer(find) {
   7 | 		const foo = [1, 2, 3];
   8 | 		while (a) {
   9 | 			foo.includes(1);
  10 | 		}
  11 |
  12 | 		function inner(find) {
  13 | 			const bar = [1, 2, 3];
  14 | 			while (a) {
  15 | 				const exists = bar.includes(1);
  16 | 			}
  17 | 		}
  18 | 	}
  19 | }
"
`;

exports[`invalid(20): 'const foo = [1, 2, 3];\\nfunction wrap…' > Error 1/3 1`] = `
"
>  1 | const foo = [1, 2, 3];
     |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
   2 | function wrap() {
   3 | 	const exists = foo.includes(1);
   4 | 	const bar = [1, 2, 3];
   5 |
   6 | 	function outer(find) {
   7 | 		const foo = [1, 2, 3];
   8 | 		while (a) {
   9 | 			foo.includes(1);
  10 | 		}
  11 |
  12 | 		function inner(find) {
  13 | 			const bar = [1, 2, 3];
  14 | 			while (a) {
  15 | 				const exists = bar.includes(1);
  16 | 			}
  17 | 		}
  18 | 	}
  19 | }
"
`;

exports[`invalid(20): 'const foo = [1, 2, 3];\\nfunction wrap…' > Error 2/3 1`] = `
"
   1 | const foo = [1, 2, 3];
   2 | function wrap() {
   3 | 	const exists = foo.includes(1);
   4 | 	const bar = [1, 2, 3];
   5 |
   6 | 	function outer(find) {
>  7 | 		const foo = [1, 2, 3];
     | 		      ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
   8 | 		while (a) {
   9 | 			foo.includes(1);
  10 | 		}
  11 |
  12 | 		function inner(find) {
  13 | 			const bar = [1, 2, 3];
  14 | 			while (a) {
  15 | 				const exists = bar.includes(1);
  16 | 			}
  17 | 		}
  18 | 	}
  19 | }
"
`;

exports[`invalid(20): 'const foo = [1, 2, 3];\\nfunction wrap…' > Error 3/3 1`] = `
"
   1 | const foo = [1, 2, 3];
   2 | function wrap() {
   3 | 	const exists = foo.includes(1);
   4 | 	const bar = [1, 2, 3];
   5 |
   6 | 	function outer(find) {
   7 | 		const foo = [1, 2, 3];
   8 | 		while (a) {
   9 | 			foo.includes(1);
  10 | 		}
  11 |
  12 | 		function inner(find) {
> 13 | 			const bar = [1, 2, 3];
     | 			      ^^^ \`bar\` should be a \`Set\`, and use \`bar.has()\` to check existence or non-existence.
  14 | 			while (a) {
  15 | 				const exists = bar.includes(1);
  16 | 			}
  17 | 		}
  18 | 	}
  19 | }
"
`;

exports[`invalid(20): 'const foo = [1, 2, 3];\\nfunction wrap…' > Output 1`] = `
"
   1 | const foo = new Set([1, 2, 3]);
   2 | function wrap() {
   3 | 	const exists = foo.has(1);
   4 | 	const bar = [1, 2, 3];
   5 |
   6 | 	function outer(find) {
   7 | 		const foo = new Set([1, 2, 3]);
   8 | 		while (a) {
   9 | 			foo.has(1);
  10 | 		}
  11 |
  12 | 		function inner(find) {
  13 | 			const bar = new Set([1, 2, 3]);
  14 | 			while (a) {
  15 | 				const exists = bar.has(1);
  16 | 			}
  17 | 		}
  18 | 	}
  19 | }
"
`;

exports[`invalid(21): 'const foo = Array(1, 2);\\nfunction un…' > Code 1`] = `
"
  1 | const foo = Array(1, 2);
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(21): 'const foo = Array(1, 2);\\nfunction un…' > Error 1/1 1`] = `
"
> 1 | const foo = Array(1, 2);
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(21): 'const foo = Array(1, 2);\\nfunction un…' > Output 1`] = `
"
  1 | const foo = new Set(Array(1, 2));
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(22): 'const foo = new Array(1, 2);\\nfunctio…' > Code 1`] = `
"
  1 | const foo = new Array(1, 2);
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(22): 'const foo = new Array(1, 2);\\nfunctio…' > Error 1/1 1`] = `
"
> 1 | const foo = new Array(1, 2);
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(22): 'const foo = new Array(1, 2);\\nfunctio…' > Output 1`] = `
"
  1 | const foo = new Set(new Array(1, 2));
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(23): 'const foo = Array.from({length: 1}, (…' > Code 1`] = `
"
  1 | const foo = Array.from({length: 1}, (_, index) => index);
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(23): 'const foo = Array.from({length: 1}, (…' > Error 1/1 1`] = `
"
> 1 | const foo = Array.from({length: 1}, (_, index) => index);
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(23): 'const foo = Array.from({length: 1}, (…' > Output 1`] = `
"
  1 | const foo = new Set(Array.from({length: 1}, (_, index) => index));
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(24): 'const foo = Array.of(1, 2);\\nfunction…' > Code 1`] = `
"
  1 | const foo = Array.of(1, 2);
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(24): 'const foo = Array.of(1, 2);\\nfunction…' > Error 1/1 1`] = `
"
> 1 | const foo = Array.of(1, 2);
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(24): 'const foo = Array.of(1, 2);\\nfunction…' > Output 1`] = `
"
  1 | const foo = new Set(Array.of(1, 2));
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(25): 'const foo = bar.concat();\\nfunction u…' > Code 1`] = `
"
  1 | const foo = bar.concat();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(25): 'const foo = bar.concat();\\nfunction u…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.concat();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(25): 'const foo = bar.concat();\\nfunction u…' > Output 1`] = `
"
  1 | const foo = new Set(bar.concat());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(26): 'const foo = bar.copyWithin();\\nfuncti…' > Code 1`] = `
"
  1 | const foo = bar.copyWithin();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(26): 'const foo = bar.copyWithin();\\nfuncti…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.copyWithin();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(26): 'const foo = bar.copyWithin();\\nfuncti…' > Output 1`] = `
"
  1 | const foo = new Set(bar.copyWithin());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(27): 'const foo = bar.fill();\\nfunction uni…' > Code 1`] = `
"
  1 | const foo = bar.fill();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(27): 'const foo = bar.fill();\\nfunction uni…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.fill();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(27): 'const foo = bar.fill();\\nfunction uni…' > Output 1`] = `
"
  1 | const foo = new Set(bar.fill());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(28): 'const foo = bar.filter();\\nfunction u…' > Code 1`] = `
"
  1 | const foo = bar.filter();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(28): 'const foo = bar.filter();\\nfunction u…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.filter();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(28): 'const foo = bar.filter();\\nfunction u…' > Output 1`] = `
"
  1 | const foo = new Set(bar.filter());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(29): 'const foo = bar.flat();\\nfunction uni…' > Code 1`] = `
"
  1 | const foo = bar.flat();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(29): 'const foo = bar.flat();\\nfunction uni…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.flat();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(29): 'const foo = bar.flat();\\nfunction uni…' > Output 1`] = `
"
  1 | const foo = new Set(bar.flat());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(30): 'const foo = bar.flatMap();\\nfunction …' > Code 1`] = `
"
  1 | const foo = bar.flatMap();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(30): 'const foo = bar.flatMap();\\nfunction …' > Error 1/1 1`] = `
"
> 1 | const foo = bar.flatMap();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(30): 'const foo = bar.flatMap();\\nfunction …' > Output 1`] = `
"
  1 | const foo = new Set(bar.flatMap());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(31): 'const foo = bar.map();\\nfunction unic…' > Code 1`] = `
"
  1 | const foo = bar.map();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(31): 'const foo = bar.map();\\nfunction unic…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.map();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(31): 'const foo = bar.map();\\nfunction unic…' > Output 1`] = `
"
  1 | const foo = new Set(bar.map());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(32): 'const foo = bar.reverse();\\nfunction …' > Code 1`] = `
"
  1 | const foo = bar.reverse();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(32): 'const foo = bar.reverse();\\nfunction …' > Error 1/1 1`] = `
"
> 1 | const foo = bar.reverse();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(32): 'const foo = bar.reverse();\\nfunction …' > Output 1`] = `
"
  1 | const foo = new Set(bar.reverse());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(33): 'const foo = bar.slice();\\nfunction un…' > Code 1`] = `
"
  1 | const foo = bar.slice();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(33): 'const foo = bar.slice();\\nfunction un…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.slice();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(33): 'const foo = bar.slice();\\nfunction un…' > Output 1`] = `
"
  1 | const foo = new Set(bar.slice());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(34): 'const foo = bar.sort();\\nfunction uni…' > Code 1`] = `
"
  1 | const foo = bar.sort();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(34): 'const foo = bar.sort();\\nfunction uni…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.sort();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(34): 'const foo = bar.sort();\\nfunction uni…' > Output 1`] = `
"
  1 | const foo = new Set(bar.sort());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(35): 'const foo = bar.splice();\\nfunction u…' > Code 1`] = `
"
  1 | const foo = bar.splice();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(35): 'const foo = bar.splice();\\nfunction u…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.splice();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(35): 'const foo = bar.splice();\\nfunction u…' > Output 1`] = `
"
  1 | const foo = new Set(bar.splice());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(36): 'const foo = bar.toReversed();\\nfuncti…' > Code 1`] = `
"
  1 | const foo = bar.toReversed();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(36): 'const foo = bar.toReversed();\\nfuncti…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.toReversed();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(36): 'const foo = bar.toReversed();\\nfuncti…' > Output 1`] = `
"
  1 | const foo = new Set(bar.toReversed());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(37): 'const foo = bar.toSorted();\\nfunction…' > Code 1`] = `
"
  1 | const foo = bar.toSorted();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(37): 'const foo = bar.toSorted();\\nfunction…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.toSorted();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(37): 'const foo = bar.toSorted();\\nfunction…' > Output 1`] = `
"
  1 | const foo = new Set(bar.toSorted());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(38): 'const foo = bar.toSpliced();\\nfunctio…' > Code 1`] = `
"
  1 | const foo = bar.toSpliced();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(38): 'const foo = bar.toSpliced();\\nfunctio…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.toSpliced();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(38): 'const foo = bar.toSpliced();\\nfunctio…' > Output 1`] = `
"
  1 | const foo = new Set(bar.toSpliced());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(39): 'const foo = bar.with();\\nfunction uni…' > Code 1`] = `
"
  1 | const foo = bar.with();
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(39): 'const foo = bar.with();\\nfunction uni…' > Error 1/1 1`] = `
"
> 1 | const foo = bar.with();
    |       ^^^ \`foo\` should be a \`Set\`, and use \`foo.has()\` to check existence or non-existence.
  2 | function unicorn() {
  3 | 	return foo.includes(1);
  4 | }
"
`;

exports[`invalid(39): 'const foo = bar.with();\\nfunction uni…' > Output 1`] = `
"
  1 | const foo = new Set(bar.with());
  2 | function unicorn() {
  3 | 	return foo.has(1);
  4 | }
"
`;

exports[`invalid(40): 'const foo = _([1,2,3]);\\nconst bar = …' > Code 1`] = `
"
  1 | const foo = _([1,2,3]);
  2 | const bar = foo.map(value => value);
  3 | function unicorn() {
  4 | 	return bar.includes(1);
  5 | }
"
`;

exports[`invalid(40): 'const foo = _([1,2,3]);\\nconst bar = …' > Error 1/1 1`] = `
"
  1 | const foo = _([1,2,3]);
> 2 | const bar = foo.map(value => value);
    |       ^^^ \`bar\` should be a \`Set\`, and use \`bar.has()\` to check existence or non-existence.
  3 | function unicorn() {
  4 | 	return bar.includes(1);
  5 | }
"
`;

exports[`invalid(40): 'const foo = _([1,2,3]);\\nconst bar = …' > Output 1`] = `
"
  1 | const foo = _([1,2,3]);
  2 | const bar = new Set(foo.map(value => value));
  3 | function unicorn() {
  4 | 	return bar.has(1);
  5 | }
"
`;
