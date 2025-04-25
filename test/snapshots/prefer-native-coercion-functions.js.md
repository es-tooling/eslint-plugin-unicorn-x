// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'array.every(v => v)' > Code 1`] = `
"
  1 | array.every(v => v)
"
`;

exports[`invalid(0): 'array.every(v => v)' > Error 1/1 1`] = `
"
> 1 | array.every(v => v)
    |               ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(0): 'array.every(v => v)' > Output 1`] = `
"
  1 | array.every(Boolean)
"
`;

exports[`invalid(0): 'const foo = v => String(v)' > Code 1`] = `
"
  1 | const foo = v => String(v)
"
`;

exports[`invalid(0): 'const foo = v => String(v)' > Error 1/1 1`] = `
"
> 1 | const foo = v => String(v)
    |               ^^ arrow function 'foo' is equivalent to \`String\`. Use \`String\` directly.
"
`;

exports[`invalid(0): 'const foo = v => String(v)' > Output 1`] = `
"
  1 | const foo = String
"
`;

exports[`invalid(1): 'array.filter(v => v)' > Code 1`] = `
"
  1 | array.filter(v => v)
"
`;

exports[`invalid(1): 'array.filter(v => v)' > Error 1/1 1`] = `
"
> 1 | array.filter(v => v)
    |                ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(1): 'array.filter(v => v)' > Output 1`] = `
"
  1 | array.filter(Boolean)
"
`;

exports[`invalid(1): 'const foo = v => Number(v)' > Code 1`] = `
"
  1 | const foo = v => Number(v)
"
`;

exports[`invalid(1): 'const foo = v => Number(v)' > Error 1/1 1`] = `
"
> 1 | const foo = v => Number(v)
    |               ^^ arrow function 'foo' is equivalent to \`Number\`. Use \`Number\` directly.
"
`;

exports[`invalid(1): 'const foo = v => Number(v)' > Output 1`] = `
"
  1 | const foo = Number
"
`;

exports[`invalid(2): 'array.find(v => v)' > Code 1`] = `
"
  1 | array.find(v => v)
"
`;

exports[`invalid(2): 'array.find(v => v)' > Error 1/1 1`] = `
"
> 1 | array.find(v => v)
    |              ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(2): 'array.find(v => v)' > Output 1`] = `
"
  1 | array.find(Boolean)
"
`;

exports[`invalid(2): 'const foo = v => BigInt(v)' > Code 1`] = `
"
  1 | const foo = v => BigInt(v)
"
`;

exports[`invalid(2): 'const foo = v => BigInt(v)' > Error 1/1 1`] = `
"
> 1 | const foo = v => BigInt(v)
    |               ^^ arrow function 'foo' is equivalent to \`BigInt\`. Use \`BigInt\` directly.
"
`;

exports[`invalid(2): 'const foo = v => BigInt(v)' > Output 1`] = `
"
  1 | const foo = BigInt
"
`;

exports[`invalid(3): 'array.findLast(v => v)' > Code 1`] = `
"
  1 | array.findLast(v => v)
"
`;

exports[`invalid(3): 'array.findLast(v => v)' > Error 1/1 1`] = `
"
> 1 | array.findLast(v => v)
    |                  ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(3): 'array.findLast(v => v)' > Output 1`] = `
"
  1 | array.findLast(Boolean)
"
`;

exports[`invalid(3): 'const foo = v => Boolean(v)' > Code 1`] = `
"
  1 | const foo = v => Boolean(v)
"
`;

exports[`invalid(3): 'const foo = v => Boolean(v)' > Error 1/1 1`] = `
"
> 1 | const foo = v => Boolean(v)
    |               ^^ arrow function 'foo' is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(3): 'const foo = v => Boolean(v)' > Output 1`] = `
"
  1 | const foo = Boolean
"
`;

exports[`invalid(4): 'array.some(v => v)' > Code 1`] = `
"
  1 | array.some(v => v)
"
`;

exports[`invalid(4): 'array.some(v => v)' > Error 1/1 1`] = `
"
> 1 | array.some(v => v)
    |              ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(4): 'array.some(v => v)' > Output 1`] = `
"
  1 | array.some(Boolean)
"
`;

exports[`invalid(4): 'const foo = v => Symbol(v)' > Code 1`] = `
"
  1 | const foo = v => Symbol(v)
"
`;

exports[`invalid(4): 'const foo = v => Symbol(v)' > Error 1/1 1`] = `
"
> 1 | const foo = v => Symbol(v)
    |               ^^ arrow function 'foo' is equivalent to \`Symbol\`. Use \`Symbol\` directly.
"
`;

exports[`invalid(4): 'const foo = v => Symbol(v)' > Output 1`] = `
"
  1 | const foo = Symbol
"
`;

exports[`invalid(5): 'array.findIndex(v => v)' > Code 1`] = `
"
  1 | array.findIndex(v => v)
"
`;

exports[`invalid(5): 'array.findIndex(v => v)' > Error 1/1 1`] = `
"
> 1 | array.findIndex(v => v)
    |                   ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(5): 'array.findIndex(v => v)' > Output 1`] = `
"
  1 | array.findIndex(Boolean)
"
`;

exports[`invalid(5): 'const foo = v => {\\n\\treturn String(v…' > Code 1`] = `
"
  1 | const foo = v => {
  2 | 	return String(v);
  3 | }
"
`;

exports[`invalid(5): 'const foo = v => {\\n\\treturn String(v…' > Error 1/1 1`] = `
"
> 1 | const foo = v => {
    |               ^^ arrow function 'foo' is equivalent to \`String\`. Use \`String\` directly.
  2 | 	return String(v);
  3 | }
"
`;

exports[`invalid(5): 'const foo = v => {\\n\\treturn String(v…' > Output 1`] = `
"
  1 | const foo = String
"
`;

exports[`invalid(6): 'array.findLastIndex(v => v)' > Code 1`] = `
"
  1 | array.findLastIndex(v => v)
"
`;

exports[`invalid(6): 'array.findLastIndex(v => v)' > Error 1/1 1`] = `
"
> 1 | array.findLastIndex(v => v)
    |                       ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(6): 'array.findLastIndex(v => v)' > Output 1`] = `
"
  1 | array.findLastIndex(Boolean)
"
`;

exports[`invalid(6): 'const foo = function (v) {\\n\\treturn …' > Code 1`] = `
"
  1 | const foo = function (v) {
  2 | 	return String(v);
  3 | }
"
`;

exports[`invalid(6): 'const foo = function (v) {\\n\\treturn …' > Error 1/1 1`] = `
"
> 1 | const foo = function (v) {
    |             ^^^^^^^^^ function 'foo' is equivalent to \`String\`. Use \`String\` directly.
  2 | 	return String(v);
  3 | }
"
`;

exports[`invalid(6): 'const foo = function (v) {\\n\\treturn …' > Output 1`] = `
"
  1 | const foo = String
"
`;

exports[`invalid(7): 'array.some(v => v)' > Code 1`] = `
"
  1 | array.some(v => v)
"
`;

exports[`invalid(7): 'array.some(v => v)' > Error 1/1 1`] = `
"
> 1 | array.some(v => v)
    |              ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(7): 'array.some(v => v)' > Output 1`] = `
"
  1 | array.some(Boolean)
"
`;

exports[`invalid(7): 'function foo(v) { return String(v); }' > Code 1`] = `
"
  1 | function foo(v) { return String(v); }
"
`;

exports[`invalid(7): 'function foo(v) { return String(v); }' > Error 1/1 1`] = `
"
> 1 | function foo(v) { return String(v); }
    | ^^^^^^^^^^^^ function 'foo' is equivalent to \`String\`. Use \`String\` directly.
"
`;

exports[`invalid(8): 'array.some(v => {\\n\\treturn v;\\n})' > Code 1`] = `
"
  1 | array.some(v => {
  2 | 	return v;
  3 | })
"
`;

exports[`invalid(8): 'array.some(v => {\\n\\treturn v;\\n})' > Error 1/1 1`] = `
"
> 1 | array.some(v => {
    |              ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
  2 | 	return v;
  3 | })
"
`;

exports[`invalid(8): 'array.some(v => {\\n\\treturn v;\\n})' > Output 1`] = `
"
  1 | array.some(Boolean)
"
`;

exports[`invalid(8): 'export default function foo(v) { retu…' > Code 1`] = `
"
  1 | export default function foo(v) { return String(v); }
"
`;

exports[`invalid(8): 'export default function foo(v) { retu…' > Error 1/1 1`] = `
"
> 1 | export default function foo(v) { return String(v); }
    |                ^^^^^^^^^^^^ function 'foo' is equivalent to \`String\`. Use \`String\` directly.
"
`;

exports[`invalid(9): 'array.some(function (v) {\\n\\treturn v…' > Code 1`] = `
"
  1 | array.some(function (v) {
  2 | 	return v;
  3 | })
"
`;

exports[`invalid(9): 'array.some(function (v) {\\n\\treturn v…' > Error 1/1 1`] = `
"
> 1 | array.some(function (v) {
    |            ^^^^^^^^^ function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
  2 | 	return v;
  3 | })
"
`;

exports[`invalid(9): 'array.some(function (v) {\\n\\treturn v…' > Output 1`] = `
"
  1 | array.some(Boolean)
"
`;

exports[`invalid(9): 'export default function (v) { return …' > Code 1`] = `
"
  1 | export default function (v) { return String(v); }
"
`;

exports[`invalid(9): 'export default function (v) { return …' > Error 1/1 1`] = `
"
> 1 | export default function (v) { return String(v); }
    |                ^^^^^^^^^ function 'default' is equivalent to \`String\`. Use \`String\` directly.
"
`;

exports[`invalid(10): 'array.some((v, extra) => v)' > Code 1`] = `
"
  1 | array.some((v, extra) => v)
"
`;

exports[`invalid(10): 'array.some((v, extra) => v)' > Error 1/1 1`] = `
"
> 1 | array.some((v, extra) => v)
    |                       ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(10): 'class A {\\n\\tfoo(v) {\\n\\t\\treturn Str…' > Code 1`] = `
"
  1 | class A {
  2 | 	foo(v) {
  3 | 		return String(v);
  4 | 	}
  5 |
  6 | 	bar() {}
  7 | }
"
`;

exports[`invalid(10): 'class A {\\n\\tfoo(v) {\\n\\t\\treturn Str…' > Error 1/1 1`] = `
"
  1 | class A {
> 2 | 	foo(v) {
    | 	^^^ method 'foo' is equivalent to \`String\`. Use \`String\` directly.
  3 | 		return String(v);
  4 | 	}
  5 |
  6 | 	bar() {}
  7 | }
"
`;

exports[`invalid(10): 'class A {\\n\\tfoo(v) {\\n\\t\\treturn Str…' > Output 1`] = `
"
  1 | class A {
  2 | 	foo = String;
  3 |
  4 | 	bar() {}
  5 | }
"
`;

exports[`invalid(11): 'array.some((v, ) => /* comment */ v)' > Code 1`] = `
"
  1 | array.some((v, ) => /* comment */ v)
"
`;

exports[`invalid(11): 'array.some((v, ) => /* comment */ v)' > Error 1/1 1`] = `
"
> 1 | array.some((v, ) => /* comment */ v)
    |                  ^^ arrow function is equivalent to \`Boolean\`. Use \`Boolean\` directly.
"
`;

exports[`invalid(11): 'class A {\\n\\tstatic foo(v) {\\n\\t\\tret…' > Code 1`] = `
"
  1 | class A {
  2 | 	static foo(v) {
  3 | 		return String(v);
  4 | 	}
  5 |
  6 | 	bar() {}
  7 | }
"
`;

exports[`invalid(11): 'class A {\\n\\tstatic foo(v) {\\n\\t\\tret…' > Error 1/1 1`] = `
"
  1 | class A {
> 2 | 	static foo(v) {
    | 	^^^^^^^^^^ static method 'foo' is equivalent to \`String\`. Use \`String\` directly.
  3 | 		return String(v);
  4 | 	}
  5 |
  6 | 	bar() {}
  7 | }
"
`;

exports[`invalid(11): 'class A {\\n\\tstatic foo(v) {\\n\\t\\tret…' > Output 1`] = `
"
  1 | class A {
  2 | 	static foo = String;
  3 |
  4 | 	bar() {}
  5 | }
"
`;

exports[`invalid(12): 'class A {\\n\\t#foo(v) {\\n\\t\\treturn St…' > Code 1`] = `
"
  1 | class A {
  2 | 	#foo(v) {
  3 | 		return String(v);
  4 | 	}
  5 |
  6 | 	bar() {}
  7 | }
"
`;

exports[`invalid(12): 'class A {\\n\\t#foo(v) {\\n\\t\\treturn St…' > Error 1/1 1`] = `
"
  1 | class A {
> 2 | 	#foo(v) {
    | 	^^^^ private method #foo is equivalent to \`String\`. Use \`String\` directly.
  3 | 		return String(v);
  4 | 	}
  5 |
  6 | 	bar() {}
  7 | }
"
`;

exports[`invalid(12): 'class A {\\n\\t#foo(v) {\\n\\t\\treturn St…' > Output 1`] = `
"
  1 | class A {
  2 | 	#foo = String;
  3 |
  4 | 	bar() {}
  5 | }
"
`;

exports[`invalid(13): 'class A {\\n\\tstatic #foo(v) {\\n\\t\\tre…' > Code 1`] = `
"
  1 | class A {
  2 | 	static #foo(v) {
  3 | 		return String(v);
  4 | 	}
  5 |
  6 | 	bar() {}
  7 | }
"
`;

exports[`invalid(13): 'class A {\\n\\tstatic #foo(v) {\\n\\t\\tre…' > Error 1/1 1`] = `
"
  1 | class A {
> 2 | 	static #foo(v) {
    | 	^^^^^^^^^^^ static private method #foo is equivalent to \`String\`. Use \`String\` directly.
  3 | 		return String(v);
  4 | 	}
  5 |
  6 | 	bar() {}
  7 | }
"
`;

exports[`invalid(13): 'class A {\\n\\tstatic #foo(v) {\\n\\t\\tre…' > Output 1`] = `
"
  1 | class A {
  2 | 	static #foo = String;
  3 |
  4 | 	bar() {}
  5 | }
"
`;

exports[`invalid(14): 'object = {\\n\\tfoo(v) {\\n\\t\\treturn St…' > Code 1`] = `
"
  1 | object = {
  2 | 	foo(v) {
  3 | 		return String(v);
  4 | 	},
  5 | 	bar
  6 | }
"
`;

exports[`invalid(14): 'object = {\\n\\tfoo(v) {\\n\\t\\treturn St…' > Error 1/1 1`] = `
"
  1 | object = {
> 2 | 	foo(v) {
    | 	^^^ method 'foo' is equivalent to \`String\`. Use \`String\` directly.
  3 | 		return String(v);
  4 | 	},
  5 | 	bar
  6 | }
"
`;

exports[`invalid(14): 'object = {\\n\\tfoo(v) {\\n\\t\\treturn St…' > Output 1`] = `
"
  1 | object = {
  2 | 	foo: String,
  3 | 	bar
  4 | }
"
`;

exports[`invalid(15): 'object = {\\n\\tfoo: function(v) {\\n\\t\\…' > Code 1`] = `
"
  1 | object = {
  2 | 	foo: function(v) {
  3 | 		return String(v);
  4 | 	},
  5 | 	bar
  6 | }
"
`;

exports[`invalid(15): 'object = {\\n\\tfoo: function(v) {\\n\\t\\…' > Error 1/1 1`] = `
"
  1 | object = {
> 2 | 	foo: function(v) {
    | 	^^^^^^^^^^^^^ method 'foo' is equivalent to \`String\`. Use \`String\` directly.
  3 | 		return String(v);
  4 | 	},
  5 | 	bar
  6 | }
"
`;

exports[`invalid(15): 'object = {\\n\\tfoo: function(v) {\\n\\t\\…' > Output 1`] = `
"
  1 | object = {
  2 | 	foo: String,
  3 | 	bar
  4 | }
"
`;

exports[`invalid(16): 'object = {\\n\\t[function(v) {return St…' > Code 1`] = `
"
  1 | object = {
  2 | 	[function(v) {return String(v);}]: 1,
  3 | }
"
`;

exports[`invalid(16): 'object = {\\n\\t[function(v) {return St…' > Error 1/1 1`] = `
"
  1 | object = {
> 2 | 	[function(v) {return String(v);}]: 1,
    | 	^^^^^^^^^ function is equivalent to \`String\`. Use \`String\` directly.
  3 | }
"
`;

exports[`invalid(16): 'object = {\\n\\t[function(v) {return St…' > Output 1`] = `
"
  1 | object = {
  2 | 	[String]: 1,
  3 | }
"
`;

exports[`invalid(17): 'const foo = (v, extra) => String(v)' > Code 1`] = `
"
  1 | const foo = (v, extra) => String(v)
"
`;

exports[`invalid(17): 'const foo = (v, extra) => String(v)' > Error 1/1 1`] = `
"
> 1 | const foo = (v, extra) => String(v)
    |                        ^^ arrow function 'foo' is equivalent to \`String\`. Use \`String\` directly.
"
`;

exports[`invalid(18): 'const foo = (v, ) => String(v, extra)' > Code 1`] = `
"
  1 | const foo = (v, ) => String(v, extra)
"
`;

exports[`invalid(18): 'const foo = (v, ) => String(v, extra)' > Error 1/1 1`] = `
"
> 1 | const foo = (v, ) => String(v, extra)
    |                   ^^ arrow function 'foo' is equivalent to \`String\`. Use \`String\` directly.
"
`;

exports[`invalid(19): 'const foo = (v, ) => /* comment */ St…' > Code 1`] = `
"
  1 | const foo = (v, ) => /* comment */ String(v)
"
`;

exports[`invalid(19): 'const foo = (v, ) => /* comment */ St…' > Error 1/1 1`] = `
"
> 1 | const foo = (v, ) => /* comment */ String(v)
    |                   ^^ arrow function 'foo' is equivalent to \`String\`. Use \`String\` directly.
"
`;
