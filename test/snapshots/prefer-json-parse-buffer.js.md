// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'JSON.parse(await fs.readFile(file, "u…' > Code 1`] = `
"
  1 | JSON.parse(await fs.readFile(file, "utf8"));
"
`;

exports[`invalid(0): 'JSON.parse(await fs.readFile(file, "u…' > Error 1/1 1`] = `
"
> 1 | JSON.parse(await fs.readFile(file, "utf8"));
    |                                    ^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(0): 'JSON.parse(await fs.readFile(file, "u…' > Output 1`] = `
"
  1 | JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(1): 'JSON.parse(await fs.readFile(file, "u…' > Code 1`] = `
"
  1 | JSON.parse(await fs.readFile(file, "utf8",));
"
`;

exports[`invalid(1): 'JSON.parse(await fs.readFile(file, "u…' > Error 1/1 1`] = `
"
> 1 | JSON.parse(await fs.readFile(file, "utf8",));
    |                                    ^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(1): 'JSON.parse(await fs.readFile(file, "u…' > Output 1`] = `
"
  1 | JSON.parse(await fs.readFile(file,));
"
`;

exports[`invalid(2): 'JSON.parse(await fs.readFile(file, "U…' > Code 1`] = `
"
  1 | JSON.parse(await fs.readFile(file, "UTF-8"));
"
`;

exports[`invalid(2): 'JSON.parse(await fs.readFile(file, "U…' > Error 1/1 1`] = `
"
> 1 | JSON.parse(await fs.readFile(file, "UTF-8"));
    |                                    ^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(2): 'JSON.parse(await fs.readFile(file, "U…' > Output 1`] = `
"
  1 | JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(3): 'JSON.parse(await fs.readFileSync(file…' > Code 1`] = `
"
  1 | JSON.parse(await fs.readFileSync(file, "utf8"));
"
`;

exports[`invalid(3): 'JSON.parse(await fs.readFileSync(file…' > Error 1/1 1`] = `
"
> 1 | JSON.parse(await fs.readFileSync(file, "utf8"));
    |                                        ^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(3): 'JSON.parse(await fs.readFileSync(file…' > Output 1`] = `
"
  1 | JSON.parse(await fs.readFileSync(file));
"
`;

exports[`invalid(4): 'JSON.parse(fs.readFileSync(file, "utf…' > Code 1`] = `
"
  1 | JSON.parse(fs.readFileSync(file, "utf8"));
"
`;

exports[`invalid(4): 'JSON.parse(fs.readFileSync(file, "utf…' > Error 1/1 1`] = `
"
> 1 | JSON.parse(fs.readFileSync(file, "utf8"));
    |                                  ^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(4): 'JSON.parse(fs.readFileSync(file, "utf…' > Output 1`] = `
"
  1 | JSON.parse(fs.readFileSync(file));
"
`;

exports[`invalid(5): 'const CHARSET = "UTF8"; JSON.parse(aw…' > Code 1`] = `
"
  1 | const CHARSET = "UTF8"; JSON.parse(await fs.readFile(file, CHARSET));
"
`;

exports[`invalid(5): 'const CHARSET = "UTF8"; JSON.parse(aw…' > Error 1/1 1`] = `
"
> 1 | const CHARSET = "UTF8"; JSON.parse(await fs.readFile(file, CHARSET));
    |                                                            ^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(5): 'const CHARSET = "UTF8"; JSON.parse(aw…' > Output 1`] = `
"
  1 | const CHARSET = "UTF8"; JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(6): 'const EIGHT = 8; JSON.parse(await fs.…' > Code 1`] = `
"
  1 | const EIGHT = 8; JSON.parse(await fs.readFile(file, \`utf\${EIGHT}\`));
"
`;

exports[`invalid(6): 'const EIGHT = 8; JSON.parse(await fs.…' > Error 1/1 1`] = `
"
> 1 | const EIGHT = 8; JSON.parse(await fs.readFile(file, \`utf\${EIGHT}\`));
    |                                                     ^^^^^^^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(6): 'const EIGHT = 8; JSON.parse(await fs.…' > Output 1`] = `
"
  1 | const EIGHT = 8; JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(7): 'JSON.parse(await fs["readFile"](file,…' > Code 1`] = `
"
  1 | JSON.parse(await fs["readFile"](file, "utf8"));
"
`;

exports[`invalid(7): 'JSON.parse(await fs["readFile"](file,…' > Error 1/1 1`] = `
"
> 1 | JSON.parse(await fs["readFile"](file, "utf8"));
    |                                       ^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(7): 'JSON.parse(await fs["readFile"](file,…' > Output 1`] = `
"
  1 | JSON.parse(await fs["readFile"](file));
"
`;

exports[`invalid(8): 'JSON.parse(await fs.readFile(file, {e…' > Code 1`] = `
"
  1 | JSON.parse(await fs.readFile(file, {encoding: "utf8"}));
"
`;

exports[`invalid(8): 'JSON.parse(await fs.readFile(file, {e…' > Error 1/1 1`] = `
"
> 1 | JSON.parse(await fs.readFile(file, {encoding: "utf8"}));
    |                                    ^^^^^^^^^^^^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(8): 'JSON.parse(await fs.readFile(file, {e…' > Output 1`] = `
"
  1 | JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(9): 'const EIGHT = 8; JSON.parse(await fs.…' > Code 1`] = `
"
  1 | const EIGHT = 8; JSON.parse(await fs.readFile(file, {encoding: \`utf\${EIGHT}\`}));
"
`;

exports[`invalid(9): 'const EIGHT = 8; JSON.parse(await fs.…' > Error 1/1 1`] = `
"
> 1 | const EIGHT = 8; JSON.parse(await fs.readFile(file, {encoding: \`utf\${EIGHT}\`}));
    |                                                     ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(9): 'const EIGHT = 8; JSON.parse(await fs.…' > Output 1`] = `
"
  1 | const EIGHT = 8; JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(10): 'JSON.parse(await fs.readFile(file, {.…' > Code 1`] = `
"
  1 | JSON.parse(await fs.readFile(file, {...({encoding: "utf8"})}));
"
`;

exports[`invalid(10): 'JSON.parse(await fs.readFile(file, {.…' > Error 1/1 1`] = `
"
> 1 | JSON.parse(await fs.readFile(file, {...({encoding: "utf8"})}));
    |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(10): 'JSON.parse(await fs.readFile(file, {.…' > Output 1`] = `
"
  1 | JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(11): 'const encoding = "utf8";JSON.parse(aw…' > Code 1`] = `
"
  1 | const encoding = "utf8";JSON.parse(await fs.readFile(file, {encoding}));
"
`;

exports[`invalid(11): 'const encoding = "utf8";JSON.parse(aw…' > Error 1/1 1`] = `
"
> 1 | const encoding = "utf8";JSON.parse(await fs.readFile(file, {encoding}));
    |                                                            ^^^^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(11): 'const encoding = "utf8";JSON.parse(aw…' > Output 1`] = `
"
  1 | const encoding = "utf8";JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(12): 'const CHARSET = "utF-8", readingOptio…' > Code 1`] = `
"
  1 | const CHARSET = "utF-8", readingOptions = {encoding: CHARSET}; JSON.parse(await fs.readFile(file, readingOptions));
"
`;

exports[`invalid(12): 'const CHARSET = "utF-8", readingOptio…' > Error 1/1 1`] = `
"
> 1 | const CHARSET = "utF-8", readingOptions = {encoding: CHARSET}; JSON.parse(await fs.readFile(file, readingOptions));
    |                                                                                                   ^^^^^^^^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(12): 'const CHARSET = "utF-8", readingOptio…' > Output 1`] = `
"
  1 | const CHARSET = "utF-8", readingOptions = {encoding: CHARSET}; JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(13): 'const EIGHT = 8, ENCODING = "encoding…' > Code 1`] = `
"
  1 | const EIGHT = 8, ENCODING = "encoding"; JSON.parse(await fs.readFile(file, {[ENCODING]: \`utf\${EIGHT}\`}));
"
`;

exports[`invalid(13): 'const EIGHT = 8, ENCODING = "encoding…' > Error 1/1 1`] = `
"
> 1 | const EIGHT = 8, ENCODING = "encoding"; JSON.parse(await fs.readFile(file, {[ENCODING]: \`utf\${EIGHT}\`}));
    |                                                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer reading the JSON file as a buffer.
"
`;

exports[`invalid(13): 'const EIGHT = 8, ENCODING = "encoding…' > Output 1`] = `
"
  1 | const EIGHT = 8, ENCODING = "encoding"; JSON.parse(await fs.readFile(file));
"
`;

exports[`invalid(14): 'const string = await fs.readFile(file…' > Code 1`] = `
"
  1 | const string = await fs.readFile(file, "utf8");
  2 | JSON.parse(string);
"
`;

exports[`invalid(14): 'const string = await fs.readFile(file…' > Error 1/1 1`] = `
"
> 1 | const string = await fs.readFile(file, "utf8");
    |                                        ^^^^^^ Prefer reading the JSON file as a buffer.
  2 | JSON.parse(string);
"
`;

exports[`invalid(14): 'const string = await fs.readFile(file…' > Output 1`] = `
"
  1 | const string = await fs.readFile(file);
  2 | JSON.parse(string);
"
`;

exports[`invalid(15): 'let string = await fs.readFile(file, …' > Code 1`] = `
"
  1 | let string = await fs.readFile(file, "utf8");
  2 | JSON.parse(string);
"
`;

exports[`invalid(15): 'let string = await fs.readFile(file, …' > Error 1/1 1`] = `
"
> 1 | let string = await fs.readFile(file, "utf8");
    |                                      ^^^^^^ Prefer reading the JSON file as a buffer.
  2 | JSON.parse(string);
"
`;

exports[`invalid(15): 'let string = await fs.readFile(file, …' > Output 1`] = `
"
  1 | let string = await fs.readFile(file);
  2 | JSON.parse(string);
"
`;

exports[`invalid(16): 'const foo = await await fs.readFile(f…' > Code 1`] = `
"
  1 | const foo = await await fs.readFile(file, "utf8");
  2 | const bar = await await foo;
  3 | const baz = await bar;
  4 | JSON.parse(baz);
"
`;

exports[`invalid(16): 'const foo = await await fs.readFile(f…' > Error 1/1 1`] = `
"
> 1 | const foo = await await fs.readFile(file, "utf8");
    |                                           ^^^^^^ Prefer reading the JSON file as a buffer.
  2 | const bar = await await foo;
  3 | const baz = await bar;
  4 | JSON.parse(baz);
"
`;

exports[`invalid(16): 'const foo = await await fs.readFile(f…' > Output 1`] = `
"
  1 | const foo = await await fs.readFile(file);
  2 | const bar = await await foo;
  3 | const baz = await bar;
  4 | JSON.parse(baz);
"
`;

exports[`invalid(17): 'var foo = await fs.readFile(file, "ut…' > Code 1`] = `
"
  1 | var foo = await fs.readFile(file, "utf8");
  2 | let bar = await foo;
  3 | const baz = await bar;
  4 | JSON.parse(baz);
"
`;

exports[`invalid(17): 'var foo = await fs.readFile(file, "ut…' > Error 1/1 1`] = `
"
> 1 | var foo = await fs.readFile(file, "utf8");
    |                                   ^^^^^^ Prefer reading the JSON file as a buffer.
  2 | let bar = await foo;
  3 | const baz = await bar;
  4 | JSON.parse(baz);
"
`;

exports[`invalid(17): 'var foo = await fs.readFile(file, "ut…' > Output 1`] = `
"
  1 | var foo = await fs.readFile(file);
  2 | let bar = await foo;
  3 | const baz = await bar;
  4 | JSON.parse(baz);
"
`;

exports[`invalid(18): 'const foo = fs.readFile(file, "utf8")…' > Code 1`] = `
"
  1 | const foo = fs.readFile(file, "utf8");
  2 | async function fn1() {
  3 | 	const bar = await foo;
  4 |
  5 | 	function fn2() {
  6 | 		const baz = bar;
  7 | 		JSON.parse(baz);
  8 | 	}
  9 | }
"
`;

exports[`invalid(18): 'const foo = fs.readFile(file, "utf8")…' > Error 1/1 1`] = `
"
> 1 | const foo = fs.readFile(file, "utf8");
    |                               ^^^^^^ Prefer reading the JSON file as a buffer.
  2 | async function fn1() {
  3 | 	const bar = await foo;
  4 |
  5 | 	function fn2() {
  6 | 		const baz = bar;
  7 | 		JSON.parse(baz);
  8 | 	}
  9 | }
"
`;

exports[`invalid(18): 'const foo = fs.readFile(file, "utf8")…' > Output 1`] = `
"
  1 | const foo = fs.readFile(file);
  2 | async function fn1() {
  3 | 	const bar = await foo;
  4 |
  5 | 	function fn2() {
  6 | 		const baz = bar;
  7 | 		JSON.parse(baz);
  8 | 	}
  9 | }
"
`;

exports[`invalid(19): 'const buffer = fs.readFile(file, "utf…' > Code 1`] = `
"
  1 | const buffer = fs.readFile(file, "utf8"); /* Should report */
  2 | const foo = buffer;
  3 | async function fn1() {
  4 | 	const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
  5 | 	JSON.parse(await foo);
  6 | }
"
`;

exports[`invalid(19): 'const buffer = fs.readFile(file, "utf…' > Error 1/1 1`] = `
"
> 1 | const buffer = fs.readFile(file, "utf8"); /* Should report */
    |                                  ^^^^^^ Prefer reading the JSON file as a buffer.
  2 | const foo = buffer;
  3 | async function fn1() {
  4 | 	const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
  5 | 	JSON.parse(await foo);
  6 | }
"
`;

exports[`invalid(19): 'const buffer = fs.readFile(file, "utf…' > Output 1`] = `
"
  1 | const buffer = fs.readFile(file); /* Should report */
  2 | const foo = buffer;
  3 | async function fn1() {
  4 | 	const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
  5 | 	JSON.parse(await foo);
  6 | }
"
`;

exports[`invalid(20): 'const buffer = fs.readFile(file, "utf…' > Code 1`] = `
"
   1 | const buffer = fs.readFile(file, "utf8"); /* Should report */
   2 | const foo = buffer;
   3 | async function fn1() {
   4 | 	const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
   5 | 	const baz = foo;
   6 | 	for (;;) {
   7 | 		const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
   8 | 		JSON.parse(await baz);
   9 | 	}
  10 | }
"
`;

exports[`invalid(20): 'const buffer = fs.readFile(file, "utf…' > Error 1/1 1`] = `
"
>  1 | const buffer = fs.readFile(file, "utf8"); /* Should report */
     |                                  ^^^^^^ Prefer reading the JSON file as a buffer.
   2 | const foo = buffer;
   3 | async function fn1() {
   4 | 	const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
   5 | 	const baz = foo;
   6 | 	for (;;) {
   7 | 		const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
   8 | 		JSON.parse(await baz);
   9 | 	}
  10 | }
"
`;

exports[`invalid(20): 'const buffer = fs.readFile(file, "utf…' > Output 1`] = `
"
   1 | const buffer = fs.readFile(file); /* Should report */
   2 | const foo = buffer;
   3 | async function fn1() {
   4 | 	const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
   5 | 	const baz = foo;
   6 | 	for (;;) {
   7 | 		const buffer = fs.readFile(file, "utf8"); /* Should NOT report */
   8 | 		JSON.parse(await baz);
   9 | 	}
  10 | }
"
`;

exports[`invalid(21): 'const foo = fs.readFile(file, "utf8")…' > Code 1`] = `
"
  1 | const foo = fs.readFile(file, "utf8");
  2 | function fn1() {
  3 | 	JSON.parse(foo);
  4 |
  5 | 	function fn2() {
  6 | 		const foo = "{}";
  7 | 	}
  8 | }
"
`;

exports[`invalid(21): 'const foo = fs.readFile(file, "utf8")…' > Error 1/1 1`] = `
"
> 1 | const foo = fs.readFile(file, "utf8");
    |                               ^^^^^^ Prefer reading the JSON file as a buffer.
  2 | function fn1() {
  3 | 	JSON.parse(foo);
  4 |
  5 | 	function fn2() {
  6 | 		const foo = "{}";
  7 | 	}
  8 | }
"
`;

exports[`invalid(21): 'const foo = fs.readFile(file, "utf8")…' > Output 1`] = `
"
  1 | const foo = fs.readFile(file);
  2 | function fn1() {
  3 | 	JSON.parse(foo);
  4 |
  5 | 	function fn2() {
  6 | 		const foo = "{}";
  7 | 	}
  8 | }
"
`;

exports[`invalid(22): 'const string = await NOT_A_FS_MODULE.…' > Code 1`] = `
"
  1 | const string = await NOT_A_FS_MODULE.readFile(file, "utf8");
  2 | JSON.parse(string);
"
`;

exports[`invalid(22): 'const string = await NOT_A_FS_MODULE.…' > Error 1/1 1`] = `
"
> 1 | const string = await NOT_A_FS_MODULE.readFile(file, "utf8");
    |                                                     ^^^^^^ Prefer reading the JSON file as a buffer.
  2 | JSON.parse(string);
"
`;

exports[`invalid(22): 'const string = await NOT_A_FS_MODULE.…' > Output 1`] = `
"
  1 | const string = await NOT_A_FS_MODULE.readFile(file);
  2 | JSON.parse(string);
"
`;
