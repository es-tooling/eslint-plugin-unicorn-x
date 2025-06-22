// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 		this.bar = 1;
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
> 3 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 	}
  4 | 	bar = 1;
  5 | }
"
`;

exports[`invalid(0): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor(message: string) {
  3 | 		this.name = "MyError";
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor(message: string) {
> 3 | 		this.name = "MyError";
    | 		^^^^^^^^^^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'class MyError extends Error {\\n\\tcons…' > Output 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor(message: string) {
  3 | 	}
  4 | 	name = "MyError";
  5 | }
"
`;

exports[`invalid(1): 'class Foo {\\n\\tconstructor() {\\n\\t\\t;…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 		;
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(1): 'class Foo {\\n\\tconstructor() {\\n\\t\\t;…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 		;
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(1): 'class Foo {\\n\\tconstructor() {\\n\\t\\t;…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 		;
  4 | 	}
  5 | 	bar = 1;
  6 | }
"
`;

exports[`invalid(1): 'class MyError extends Error {\\n\\tname…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	name: string;
  3 | 	constructor(message: string) {
  4 | 		this.name = "MyError";
  5 | 	}
  6 | }
"
`;

exports[`invalid(1): 'class MyError extends Error {\\n\\tname…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	name: string;
  3 | 	constructor(message: string) {
> 4 | 		this.name = "MyError";
    | 		^^^^^^^^^^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(1): 'class MyError extends Error {\\n\\tname…' > Output 1`] = `
"
  1 | class MyError extends Error {
  2 | 	name: string = "MyError";
  3 | 	constructor(message: string) {
  4 | 	}
  5 | }
"
`;

exports[`invalid(2): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 		this.bar = 1;
  4 | 		this.baz = 2;
  5 | 	}
  6 | }
"
`;

exports[`invalid(2): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
> 3 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  4 | 		this.baz = 2;
  5 | 	}
  6 | }
"
`;

exports[`invalid(2): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 	}
  4 | 	bar = 1;
  5 | 	baz = 2;
  6 | }
"
`;

exports[`invalid(3): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 		this.bar = 1;
  4 | 		this.bar = 2;
  5 | 	}
  6 | }
"
`;

exports[`invalid(3): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
> 3 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  4 | 		this.bar = 2;
  5 | 	}
  6 | }
"
`;

exports[`invalid(3): 'class Foo {\\n\\tconstructor() {\\n\\t\\tt…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	constructor() {
  3 | 		this.bar = 2;
  4 | 	}
  5 | 	bar = 1;
  6 | }
"
`;

exports[`invalid(4): 'class Foo {\\n\\tbar;\\n\\tconstructor() …' > Code 1`] = `
"
  1 | class Foo {
  2 | 	bar;
  3 | 	constructor() {
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(4): 'class Foo {\\n\\tbar;\\n\\tconstructor() …' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	bar;
  3 | 	constructor() {
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(4): 'class Foo {\\n\\tbar;\\n\\tconstructor() …' > Output 1`] = `
"
  1 | class Foo {
  2 | 	bar = 1;
  3 | 	constructor() {
  4 | 	}
  5 | }
"
`;

exports[`invalid(5): 'class Foo {\\n\\t#bar;\\n\\tconstructor()…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	#bar;
  3 | 	constructor() {
  4 | 		this.#bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(5): 'class Foo {\\n\\t#bar;\\n\\tconstructor()…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	#bar;
  3 | 	constructor() {
> 4 | 		this.#bar = 1;
    | 		^^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(5): 'class Foo {\\n\\t#bar;\\n\\tconstructor()…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	#bar = 1;
  3 | 	constructor() {
  4 | 	}
  5 | }
"
`;

exports[`invalid(6): 'class Foo {\\n\\tbar = 0;\\n\\tconstructo…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	bar = 0;
  3 | 	constructor() {
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(6): 'class Foo {\\n\\tbar = 0;\\n\\tconstructo…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	bar = 0;
  3 | 	constructor() {
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Encountered same-named class field declaration and \`this\` assignment in constructor. Replace the class field declaration with the value from \`this\` assignment.
  1 | class Foo {
  2 | 	bar = 1;
  3 | 	constructor() {
  4 | 	}
  5 | }
"
`;

exports[`invalid(7): 'class Foo {\\n\\t#bar = 0;\\n\\tconstruct…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	#bar = 0;
  3 | 	constructor() {
  4 | 		this.#bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(7): 'class Foo {\\n\\t#bar = 0;\\n\\tconstruct…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	#bar = 0;
  3 | 	constructor() {
> 4 | 		this.#bar = 1;
    | 		^^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Encountered same-named class field declaration and \`this\` assignment in constructor. Replace the class field declaration with the value from \`this\` assignment.
  1 | class Foo {
  2 | 	#bar = 1;
  3 | 	constructor() {
  4 | 	}
  5 | }
"
`;

exports[`invalid(8): 'class Foo {\\n\\t[bar];\\n\\tconstructor(…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	[bar];
  3 | 	constructor() {
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(8): 'class Foo {\\n\\t[bar];\\n\\tconstructor(…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	[bar];
  3 | 	constructor() {
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(8): 'class Foo {\\n\\t[bar];\\n\\tconstructor(…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	[bar];
  3 | 	constructor() {
  4 | 	}
  5 | 	bar = 1;
  6 | }
"
`;

exports[`invalid(9): 'class Foo {\\n\\t[bar] = 0;\\n\\tconstruc…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	[bar] = 0;
  3 | 	constructor() {
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(9): 'class Foo {\\n\\t[bar] = 0;\\n\\tconstruc…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	[bar] = 0;
  3 | 	constructor() {
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(9): 'class Foo {\\n\\t[bar] = 0;\\n\\tconstruc…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	[bar] = 0;
  3 | 	constructor() {
  4 | 	}
  5 | 	bar = 1;
  6 | }
"
`;

exports[`invalid(10): 'class Foo {\\n\\tstatic bar;\\n\\tconstru…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	static bar;
  3 | 	constructor() {
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(10): 'class Foo {\\n\\tstatic bar;\\n\\tconstru…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	static bar;
  3 | 	constructor() {
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(10): 'class Foo {\\n\\tstatic bar;\\n\\tconstru…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	static bar;
  3 | 	constructor() {
  4 | 	}
  5 | 	bar = 1;
  6 | }
"
`;

exports[`invalid(11): 'class Foo {\\n\\tstatic bar = 0;\\n\\tcon…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	static bar = 0;
  3 | 	constructor() {
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(11): 'class Foo {\\n\\tstatic bar = 0;\\n\\tcon…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	static bar = 0;
  3 | 	constructor() {
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(11): 'class Foo {\\n\\tstatic bar = 0;\\n\\tcon…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	static bar = 0;
  3 | 	constructor() {
  4 | 	}
  5 | 	bar = 1;
  6 | }
"
`;

exports[`invalid(12): 'class Foo {\\n\\tstatic [bar];\\n\\tconst…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	static [bar];
  3 | 	constructor() {
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(12): 'class Foo {\\n\\tstatic [bar];\\n\\tconst…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	static [bar];
  3 | 	constructor() {
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(12): 'class Foo {\\n\\tstatic [bar];\\n\\tconst…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	static [bar];
  3 | 	constructor() {
  4 | 	}
  5 | 	bar = 1;
  6 | }
"
`;

exports[`invalid(13): 'class Foo {\\n\\tstatic [bar] = 1;\\n\\tc…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	static [bar] = 1;
  3 | 	constructor() {
  4 | 		this.bar = 1;
  5 | 	}
  6 | }
"
`;

exports[`invalid(13): 'class Foo {\\n\\tstatic [bar] = 1;\\n\\tc…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	static [bar] = 1;
  3 | 	constructor() {
> 4 | 		this.bar = 1;
    | 		^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  5 | 	}
  6 | }
"
`;

exports[`invalid(13): 'class Foo {\\n\\tstatic [bar] = 1;\\n\\tc…' > Output 1`] = `
"
  1 | class Foo {
  2 | 	static [bar] = 1;
  3 | 	constructor() {
  4 | 	}
  5 | 	bar = 1;
  6 | }
"
`;

exports[`invalid(14): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Code 1`] = `
"
  1 | class Foo {
  2 | constructor() {
  3 | 	this.bar = 1;
  4 | }}
"
`;

exports[`invalid(14): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | constructor() {
> 3 | 	this.bar = 1;
    | 	^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  4 | }}
"
`;

exports[`invalid(14): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Output 1`] = `
"
  1 | class Foo {
  2 | constructor() {
  3 | }
  4 | bar = 1;
  5 | }
"
`;

exports[`invalid(15): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Code 1`] = `
"
  1 | class Foo {
  2 | constructor() {
  3 | 	this.bar = 1;
  4 | }
  5 | static}
"
`;

exports[`invalid(15): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | constructor() {
> 3 | 	this.bar = 1;
    | 	^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  4 | }
  5 | static}
"
`;

exports[`invalid(15): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Output 1`] = `
"
  1 | class Foo {
  2 | constructor() {
  3 | }
  4 | static;
  5 | bar = 1;
  6 | }
"
`;

exports[`invalid(16): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Code 1`] = `
"
  1 | class Foo {
  2 | constructor() {
  3 | 	this.bar = 1;
  4 | }
  5 | static// comment;
  6 | }
"
`;

exports[`invalid(16): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | constructor() {
> 3 | 	this.bar = 1;
    | 	^^^^^^^^^^^^^ Prefer class field declaration over \`this\` assignment in constructor for static values.
  4 | }
  5 | static// comment;
  6 | }
"
`;

exports[`invalid(16): 'class Foo {\\nconstructor() {\\n\\tthis.…' > Output 1`] = `
"
  1 | class Foo {
  2 | constructor() {
  3 | }
  4 | static// comment;
  5 | ;bar = 1;
  6 | }
"
`;
