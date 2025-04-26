// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = Date();' > Code 1`] = `
"
  1 | const foo = Date();
"
`;

exports[`invalid(0): 'const foo = Date();' > Error 1/1 1`] = `
"
> 1 | const foo = Date();
    |             ^^^^^^ Use \`String(new Date())\` instead of \`Date()\`.
"
`;

exports[`invalid(0): 'const foo = Date();' > Output 1`] = `
"
  1 | const foo = String(new Date());
"
`;

exports[`invalid(0): 'const object = (Object)();' > Code 1`] = `
"
  1 | const object = (Object)();
"
`;

exports[`invalid(0): 'const object = (Object)();' > Error 1/1 1`] = `
"
> 1 | const object = (Object)();
    |                ^^^^^^^^^^ Use \`new Object()\` instead of \`Object()\`.
"
`;

exports[`invalid(0): 'const object = (Object)();' > Output 1`] = `
"
  1 | const object = new (Object)();
"
`;

exports[`invalid(1): 'const foo = globalThis.Date();' > Code 1`] = `
"
  1 | const foo = globalThis.Date();
"
`;

exports[`invalid(1): 'const foo = globalThis.Date();' > Error 1/1 1`] = `
"
> 1 | const foo = globalThis.Date();
    |             ^^^^^^^^^^^^^^^^^ Use \`String(new Date())\` instead of \`Date()\`.
"
`;

exports[`invalid(1): 'const foo = globalThis.Date();' > Output 1`] = `
"
  1 | const foo = String(new Date());
"
`;

exports[`invalid(1): 'const symbol = new (Symbol)("");' > Code 1`] = `
"
  1 | const symbol = new (Symbol)("");
"
`;

exports[`invalid(1): 'const symbol = new (Symbol)("");' > Error 1/1 1`] = `
"
> 1 | const symbol = new (Symbol)("");
    |                ^^^^^^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
"
`;

exports[`invalid(1): 'const symbol = new (Symbol)("");' > Output 1`] = `
"
  1 | const symbol = (Symbol)("");
"
`;

exports[`invalid(2): 'const symbol = new /* comment */ Symb…' > Code 1`] = `
"
  1 | const symbol = new /* comment */ Symbol("");
"
`;

exports[`invalid(2): 'const symbol = new /* comment */ Symb…' > Error 1/1 1`] = `
"
> 1 | const symbol = new /* comment */ Symbol("");
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
"
`;

exports[`invalid(2): 'const symbol = new /* comment */ Symb…' > Output 1`] = `
"
  1 | const symbol = /* comment */ Symbol("");
"
`;

exports[`invalid(2): 'function foo() {\\n\\treturn(globalThis…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	return(globalThis).Date();
  3 | }
"
`;

exports[`invalid(2): 'function foo() {\\n\\treturn(globalThis…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	return(globalThis).Date();
    | 	      ^^^^^^^^^^^^^^^^^^^ Use \`String(new Date())\` instead of \`Date()\`.
  3 | }
"
`;

exports[`invalid(2): 'function foo() {\\n\\treturn(globalThis…' > Output 1`] = `
"
  1 | function foo() {
  2 | 	return String(new Date());
  3 | }
"
`;

exports[`invalid(3): 'const foo = Date(/*comment*/);' > Code 1`] = `
"
  1 | const foo = Date(/*comment*/);
"
`;

exports[`invalid(3): 'const foo = Date(/*comment*/);' > Error 1/1 1`] = `
"
> 1 | const foo = Date(/*comment*/);
    |             ^^^^^^^^^^^^^^^^^ Use \`String(new Date())\` instead of \`Date()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`String(new Date())\`.
  1 | const foo = String(new Date());
"
`;

exports[`invalid(3): 'const symbol = new Symbol;' > Code 1`] = `
"
  1 | const symbol = new Symbol;
"
`;

exports[`invalid(3): 'const symbol = new Symbol;' > Error 1/1 1`] = `
"
> 1 | const symbol = new Symbol;
    |                ^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
"
`;

exports[`invalid(3): 'const symbol = new Symbol;' > Output 1`] = `
"
  1 | const symbol = Symbol();
"
`;

exports[`invalid(4): '() => {\\n\\treturn new // 1\\n\\t\\tSymbo…' > Code 1`] = `
"
  1 | () => {
  2 | 	return new // 1
  3 | 		Symbol();
  4 | }
"
`;

exports[`invalid(4): '() => {\\n\\treturn new // 1\\n\\t\\tSymbo…' > Error 1/1 1`] = `
"
  1 | () => {
> 2 | 	return new // 1
    | 	       ^^^^^^^^
> 3 | 		Symbol();
    | ^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
  4 | }
"
`;

exports[`invalid(4): '() => {\\n\\treturn new // 1\\n\\t\\tSymbo…' > Output 1`] = `
"
  1 | () => {
  2 | 	return ( // 1
  3 | 		Symbol());
  4 | }
"
`;

exports[`invalid(4): 'const foo = globalThis/*comment*/.Dat…' > Code 1`] = `
"
  1 | const foo = globalThis/*comment*/.Date();
"
`;

exports[`invalid(4): 'const foo = globalThis/*comment*/.Dat…' > Error 1/1 1`] = `
"
> 1 | const foo = globalThis/*comment*/.Date();
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`String(new Date())\` instead of \`Date()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`String(new Date())\`.
  1 | const foo = String(new Date());
"
`;

exports[`invalid(5): '() => {\\n\\treturn (\\n\\t\\tnew // 2\\n\\t…' > Code 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		new // 2
  4 | 			Symbol()
  5 | 	);
  6 | }
"
`;

exports[`invalid(5): '() => {\\n\\treturn (\\n\\t\\tnew // 2\\n\\t…' > Error 1/1 1`] = `
"
  1 | () => {
  2 | 	return (
> 3 | 		new // 2
    | 		^^^^^^^^
> 4 | 			Symbol()
    | ^^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
  5 | 	);
  6 | }
"
`;

exports[`invalid(5): '() => {\\n\\treturn (\\n\\t\\tnew // 2\\n\\t…' > Output 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		// 2
  4 | 			Symbol()
  5 | 	);
  6 | }
"
`;

exports[`invalid(5): 'const foo = Date(bar);' > Code 1`] = `
"
  1 | const foo = Date(bar);
"
`;

exports[`invalid(5): 'const foo = Date(bar);' > Error 1/1 1`] = `
"
> 1 | const foo = Date(bar);
    |             ^^^^^^^^^ Use \`String(new Date())\` instead of \`Date()\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`String(new Date())\`.
  1 | const foo = String(new Date());
"
`;

exports[`invalid(6): '() => {\\n\\treturn new // 3\\n\\t\\t(Symb…' > Code 1`] = `
"
  1 | () => {
  2 | 	return new // 3
  3 | 		(Symbol);
  4 | }
"
`;

exports[`invalid(6): '() => {\\n\\treturn new // 3\\n\\t\\t(Symb…' > Error 1/1 1`] = `
"
  1 | () => {
> 2 | 	return new // 3
    | 	       ^^^^^^^^
> 3 | 		(Symbol);
    | ^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
  4 | }
"
`;

exports[`invalid(6): '() => {\\n\\treturn new // 3\\n\\t\\t(Symb…' > Output 1`] = `
"
  1 | () => {
  2 | 	return ( // 3
  3 | 		(Symbol)());
  4 | }
"
`;

exports[`invalid(7): '() => {\\n\\treturn new // 4\\n\\t\\tSymbo…' > Code 1`] = `
"
  1 | () => {
  2 | 	return new // 4
  3 | 		Symbol;
  4 | }
"
`;

exports[`invalid(7): '() => {\\n\\treturn new // 4\\n\\t\\tSymbo…' > Error 1/1 1`] = `
"
  1 | () => {
> 2 | 	return new // 4
    | 	       ^^^^^^^^
> 3 | 		Symbol;
    | ^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
  4 | }
"
`;

exports[`invalid(7): '() => {\\n\\treturn new // 4\\n\\t\\tSymbo…' > Output 1`] = `
"
  1 | () => {
  2 | 	return ( // 4
  3 | 		Symbol());
  4 | }
"
`;

exports[`invalid(8): '() => {\\n\\treturn (\\n\\t\\tnew // 5\\n\\t…' > Code 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		new // 5
  4 | 			Symbol
  5 | 	);
  6 | }
"
`;

exports[`invalid(8): '() => {\\n\\treturn (\\n\\t\\tnew // 5\\n\\t…' > Error 1/1 1`] = `
"
  1 | () => {
  2 | 	return (
> 3 | 		new // 5
    | 		^^^^^^^^
> 4 | 			Symbol
    | ^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
  5 | 	);
  6 | }
"
`;

exports[`invalid(8): '() => {\\n\\treturn (\\n\\t\\tnew // 5\\n\\t…' > Output 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		// 5
  4 | 			Symbol()
  5 | 	);
  6 | }
"
`;

exports[`invalid(9): '() => {\\n\\treturn (\\n\\t\\tnew // 6\\n\\t…' > Code 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		new // 6
  4 | 			(Symbol)
  5 | 	);
  6 | }
"
`;

exports[`invalid(9): '() => {\\n\\treturn (\\n\\t\\tnew // 6\\n\\t…' > Error 1/1 1`] = `
"
  1 | () => {
  2 | 	return (
> 3 | 		new // 6
    | 		^^^^^^^^
> 4 | 			(Symbol)
    | ^^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
  5 | 	);
  6 | }
"
`;

exports[`invalid(9): '() => {\\n\\treturn (\\n\\t\\tnew // 6\\n\\t…' > Output 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		// 6
  4 | 			(Symbol)()
  5 | 	);
  6 | }
"
`;

exports[`invalid(10): '() => {\\n\\tthrow new // 1\\n\\t\\tSymbol…' > Code 1`] = `
"
  1 | () => {
  2 | 	throw new // 1
  3 | 		Symbol();
  4 | }
"
`;

exports[`invalid(10): '() => {\\n\\tthrow new // 1\\n\\t\\tSymbol…' > Error 1/1 1`] = `
"
  1 | () => {
> 2 | 	throw new // 1
    | 	      ^^^^^^^^
> 3 | 		Symbol();
    | ^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
  4 | }
"
`;

exports[`invalid(10): '() => {\\n\\tthrow new // 1\\n\\t\\tSymbol…' > Output 1`] = `
"
  1 | () => {
  2 | 	throw ( // 1
  3 | 		Symbol());
  4 | }
"
`;

exports[`invalid(11): '() => {\\n\\treturn new /**/ Symbol;\\n}' > Code 1`] = `
"
  1 | () => {
  2 | 	return new /**/ Symbol;
  3 | }
"
`;

exports[`invalid(11): '() => {\\n\\treturn new /**/ Symbol;\\n}' > Error 1/1 1`] = `
"
  1 | () => {
> 2 | 	return new /**/ Symbol;
    | 	       ^^^^^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
  3 | }
"
`;

exports[`invalid(11): '() => {\\n\\treturn new /**/ Symbol;\\n}' > Output 1`] = `
"
  1 | () => {
  2 | 	return /**/ Symbol();
  3 | }
"
`;

exports[`invalid(12): 'new globalThis.String()' > Code 1`] = `
"
  1 | new globalThis.String()
"
`;

exports[`invalid(12): 'new globalThis.String()' > Error 1/1 1`] = `
"
> 1 | new globalThis.String()
    | ^^^^^^^^^^^^^^^^^^^^^^^ Use \`String()\` instead of \`new String()\`.
"
`;

exports[`invalid(13): 'new global.String()' > Code 1`] = `
"
  1 | new global.String()
"
`;

exports[`invalid(13): 'new global.String()' > Error 1/1 1`] = `
"
> 1 | new global.String()
    | ^^^^^^^^^^^^^^^^^^^ Use \`String()\` instead of \`new String()\`.
"
`;

exports[`invalid(14): 'new self.String()' > Code 1`] = `
"
  1 | new self.String()
"
`;

exports[`invalid(14): 'new self.String()' > Error 1/1 1`] = `
"
> 1 | new self.String()
    | ^^^^^^^^^^^^^^^^^ Use \`String()\` instead of \`new String()\`.
"
`;

exports[`invalid(15): 'new window.String()' > Code 1`] = `
"
  1 | new window.String()
"
`;

exports[`invalid(15): 'new window.String()' > Error 1/1 1`] = `
"
> 1 | new window.String()
    | ^^^^^^^^^^^^^^^^^^^ Use \`String()\` instead of \`new String()\`.
"
`;

exports[`invalid(16): 'const {String} = globalThis;\\nnew Str…' > Code 1`] = `
"
  1 | const {String} = globalThis;
  2 | new String();
"
`;

exports[`invalid(16): 'const {String} = globalThis;\\nnew Str…' > Error 1/1 1`] = `
"
  1 | const {String} = globalThis;
> 2 | new String();
    | ^^^^^^^^^^^^ Use \`String()\` instead of \`new String()\`.
"
`;

exports[`invalid(17): 'const {String: RenamedString} = globa…' > Code 1`] = `
"
  1 | const {String: RenamedString} = globalThis;
  2 | new RenamedString();
"
`;

exports[`invalid(17): 'const {String: RenamedString} = globa…' > Error 1/1 1`] = `
"
  1 | const {String: RenamedString} = globalThis;
> 2 | new RenamedString();
    | ^^^^^^^^^^^^^^^^^^^ Use \`String()\` instead of \`new String()\`.
"
`;

exports[`invalid(18): 'const RenamedString = globalThis.Stri…' > Code 1`] = `
"
  1 | const RenamedString = globalThis.String;
  2 | new RenamedString();
"
`;

exports[`invalid(18): 'const RenamedString = globalThis.Stri…' > Error 1/1 1`] = `
"
  1 | const RenamedString = globalThis.String;
> 2 | new RenamedString();
    | ^^^^^^^^^^^^^^^^^^^ Use \`String()\` instead of \`new String()\`.
"
`;

exports[`invalid(19): 'globalThis.Array()' > Code 1`] = `
"
  1 | globalThis.Array()
"
`;

exports[`invalid(19): 'globalThis.Array()' > Error 1/1 1`] = `
"
> 1 | globalThis.Array()
    | ^^^^^^^^^^^^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
"
`;

exports[`invalid(19): 'globalThis.Array()' > Output 1`] = `
"
  1 | new globalThis.Array()
"
`;

exports[`invalid(20): 'global.Array()' > Code 1`] = `
"
  1 | global.Array()
"
`;

exports[`invalid(20): 'global.Array()' > Error 1/1 1`] = `
"
> 1 | global.Array()
    | ^^^^^^^^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
"
`;

exports[`invalid(20): 'global.Array()' > Output 1`] = `
"
  1 | new global.Array()
"
`;

exports[`invalid(21): 'self.Array()' > Code 1`] = `
"
  1 | self.Array()
"
`;

exports[`invalid(21): 'self.Array()' > Error 1/1 1`] = `
"
> 1 | self.Array()
    | ^^^^^^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
"
`;

exports[`invalid(21): 'self.Array()' > Output 1`] = `
"
  1 | new self.Array()
"
`;

exports[`invalid(22): 'window.Array()' > Code 1`] = `
"
  1 | window.Array()
"
`;

exports[`invalid(22): 'window.Array()' > Error 1/1 1`] = `
"
> 1 | window.Array()
    | ^^^^^^^^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
"
`;

exports[`invalid(22): 'window.Array()' > Output 1`] = `
"
  1 | new window.Array()
"
`;

exports[`invalid(23): 'const {Array: RenamedArray} = globalT…' > Code 1`] = `
"
  1 | const {Array: RenamedArray} = globalThis;
  2 | RenamedArray();
"
`;

exports[`invalid(23): 'const {Array: RenamedArray} = globalT…' > Error 1/1 1`] = `
"
  1 | const {Array: RenamedArray} = globalThis;
> 2 | RenamedArray();
    | ^^^^^^^^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
"
`;

exports[`invalid(23): 'const {Array: RenamedArray} = globalT…' > Output 1`] = `
"
  1 | const {Array: RenamedArray} = globalThis;
  2 | new RenamedArray();
"
`;

exports[`invalid(24): 'globalThis.Array()' > Code 1`] = `
"
  1 | globalThis.Array()
"
`;

exports[`invalid(24): 'globalThis.Array()' > Error 1/1 1`] = `
"
> 1 | globalThis.Array()
    | ^^^^^^^^^^^^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
"
`;

exports[`invalid(24): 'globalThis.Array()' > Output 1`] = `
"
  1 | new globalThis.Array()
"
`;

exports[`invalid(25): 'const {Array} = globalThis;\\nArray();' > Code 1`] = `
"
  1 | const {Array} = globalThis;
  2 | Array();
"
`;

exports[`invalid(25): 'const {Array} = globalThis;\\nArray();' > Error 1/1 1`] = `
"
  1 | const {Array} = globalThis;
> 2 | Array();
    | ^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
"
`;

exports[`invalid(25): 'const {Array} = globalThis;\\nArray();' > Output 1`] = `
"
  1 | const {Array} = globalThis;
  2 | new Array();
"
`;

exports[`invalid(26): 'const foo = Object()' > Code 1`] = `
"
  1 | const foo = Object()
"
`;

exports[`invalid(26): 'const foo = Object()' > Error 1/1 1`] = `
"
> 1 | const foo = Object()
    |             ^^^^^^^^ Use \`new Object()\` instead of \`Object()\`.
"
`;

exports[`invalid(26): 'const foo = Object()' > Output 1`] = `
"
  1 | const foo = new Object()
"
`;

exports[`invalid(27): 'const foo = Array()' > Code 1`] = `
"
  1 | const foo = Array()
"
`;

exports[`invalid(27): 'const foo = Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Array()
    |             ^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
"
`;

exports[`invalid(27): 'const foo = Array()' > Output 1`] = `
"
  1 | const foo = new Array()
"
`;

exports[`invalid(28): 'const foo = ArrayBuffer()' > Code 1`] = `
"
  1 | const foo = ArrayBuffer()
"
`;

exports[`invalid(28): 'const foo = ArrayBuffer()' > Error 1/1 1`] = `
"
> 1 | const foo = ArrayBuffer()
    |             ^^^^^^^^^^^^^ Use \`new ArrayBuffer()\` instead of \`ArrayBuffer()\`.
"
`;

exports[`invalid(28): 'const foo = ArrayBuffer()' > Output 1`] = `
"
  1 | const foo = new ArrayBuffer()
"
`;

exports[`invalid(29): 'const foo = BigInt64Array()' > Code 1`] = `
"
  1 | const foo = BigInt64Array()
"
`;

exports[`invalid(29): 'const foo = BigInt64Array()' > Error 1/1 1`] = `
"
> 1 | const foo = BigInt64Array()
    |             ^^^^^^^^^^^^^^^ Use \`new BigInt64Array()\` instead of \`BigInt64Array()\`.
"
`;

exports[`invalid(29): 'const foo = BigInt64Array()' > Output 1`] = `
"
  1 | const foo = new BigInt64Array()
"
`;

exports[`invalid(30): 'const foo = BigUint64Array()' > Code 1`] = `
"
  1 | const foo = BigUint64Array()
"
`;

exports[`invalid(30): 'const foo = BigUint64Array()' > Error 1/1 1`] = `
"
> 1 | const foo = BigUint64Array()
    |             ^^^^^^^^^^^^^^^^ Use \`new BigUint64Array()\` instead of \`BigUint64Array()\`.
"
`;

exports[`invalid(30): 'const foo = BigUint64Array()' > Output 1`] = `
"
  1 | const foo = new BigUint64Array()
"
`;

exports[`invalid(31): 'const foo = DataView()' > Code 1`] = `
"
  1 | const foo = DataView()
"
`;

exports[`invalid(31): 'const foo = DataView()' > Error 1/1 1`] = `
"
> 1 | const foo = DataView()
    |             ^^^^^^^^^^ Use \`new DataView()\` instead of \`DataView()\`.
"
`;

exports[`invalid(31): 'const foo = DataView()' > Output 1`] = `
"
  1 | const foo = new DataView()
"
`;

exports[`invalid(32): 'const foo = Error()' > Code 1`] = `
"
  1 | const foo = Error()
"
`;

exports[`invalid(32): 'const foo = Error()' > Error 1/1 1`] = `
"
> 1 | const foo = Error()
    |             ^^^^^^^ Use \`new Error()\` instead of \`Error()\`.
"
`;

exports[`invalid(32): 'const foo = Error()' > Output 1`] = `
"
  1 | const foo = new Error()
"
`;

exports[`invalid(33): 'const foo = Error(\\'Foo bar\\')' > Code 1`] = `
"
  1 | const foo = Error('Foo bar')
"
`;

exports[`invalid(33): 'const foo = Error(\\'Foo bar\\')' > Error 1/1 1`] = `
"
> 1 | const foo = Error('Foo bar')
    |             ^^^^^^^^^^^^^^^^ Use \`new Error()\` instead of \`Error()\`.
"
`;

exports[`invalid(33): 'const foo = Error(\\'Foo bar\\')' > Output 1`] = `
"
  1 | const foo = new Error('Foo bar')
"
`;

exports[`invalid(34): 'const foo = Float16Array()' > Code 1`] = `
"
  1 | const foo = Float16Array()
"
`;

exports[`invalid(34): 'const foo = Float16Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Float16Array()
    |             ^^^^^^^^^^^^^^ Use \`new Float16Array()\` instead of \`Float16Array()\`.
"
`;

exports[`invalid(34): 'const foo = Float16Array()' > Output 1`] = `
"
  1 | const foo = new Float16Array()
"
`;

exports[`invalid(35): 'const foo = Float32Array()' > Code 1`] = `
"
  1 | const foo = Float32Array()
"
`;

exports[`invalid(35): 'const foo = Float32Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Float32Array()
    |             ^^^^^^^^^^^^^^ Use \`new Float32Array()\` instead of \`Float32Array()\`.
"
`;

exports[`invalid(35): 'const foo = Float32Array()' > Output 1`] = `
"
  1 | const foo = new Float32Array()
"
`;

exports[`invalid(36): 'const foo = Float64Array()' > Code 1`] = `
"
  1 | const foo = Float64Array()
"
`;

exports[`invalid(36): 'const foo = Float64Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Float64Array()
    |             ^^^^^^^^^^^^^^ Use \`new Float64Array()\` instead of \`Float64Array()\`.
"
`;

exports[`invalid(36): 'const foo = Float64Array()' > Output 1`] = `
"
  1 | const foo = new Float64Array()
"
`;

exports[`invalid(37): 'const foo = Function()' > Code 1`] = `
"
  1 | const foo = Function()
"
`;

exports[`invalid(37): 'const foo = Function()' > Error 1/1 1`] = `
"
> 1 | const foo = Function()
    |             ^^^^^^^^^^ Use \`new Function()\` instead of \`Function()\`.
"
`;

exports[`invalid(37): 'const foo = Function()' > Output 1`] = `
"
  1 | const foo = new Function()
"
`;

exports[`invalid(38): 'const foo = Int8Array()' > Code 1`] = `
"
  1 | const foo = Int8Array()
"
`;

exports[`invalid(38): 'const foo = Int8Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Int8Array()
    |             ^^^^^^^^^^^ Use \`new Int8Array()\` instead of \`Int8Array()\`.
"
`;

exports[`invalid(38): 'const foo = Int8Array()' > Output 1`] = `
"
  1 | const foo = new Int8Array()
"
`;

exports[`invalid(39): 'const foo = Int16Array()' > Code 1`] = `
"
  1 | const foo = Int16Array()
"
`;

exports[`invalid(39): 'const foo = Int16Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Int16Array()
    |             ^^^^^^^^^^^^ Use \`new Int16Array()\` instead of \`Int16Array()\`.
"
`;

exports[`invalid(39): 'const foo = Int16Array()' > Output 1`] = `
"
  1 | const foo = new Int16Array()
"
`;

exports[`invalid(40): 'const foo = Int32Array()' > Code 1`] = `
"
  1 | const foo = Int32Array()
"
`;

exports[`invalid(40): 'const foo = Int32Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Int32Array()
    |             ^^^^^^^^^^^^ Use \`new Int32Array()\` instead of \`Int32Array()\`.
"
`;

exports[`invalid(40): 'const foo = Int32Array()' > Output 1`] = `
"
  1 | const foo = new Int32Array()
"
`;

exports[`invalid(41): 'const foo = (( Map ))()' > Code 1`] = `
"
  1 | const foo = (( Map ))()
"
`;

exports[`invalid(41): 'const foo = (( Map ))()' > Error 1/1 1`] = `
"
> 1 | const foo = (( Map ))()
    |             ^^^^^^^^^^^ Use \`new Map()\` instead of \`Map()\`.
"
`;

exports[`invalid(41): 'const foo = (( Map ))()' > Output 1`] = `
"
  1 | const foo = new (( Map ))()
"
`;

exports[`invalid(42): 'const foo = Map([[\\'foo\\', \\'bar\\'], …' > Code 1`] = `
"
  1 | const foo = Map([['foo', 'bar'], ['unicorn', 'rainbow']])
"
`;

exports[`invalid(42): 'const foo = Map([[\\'foo\\', \\'bar\\'], …' > Error 1/1 1`] = `
"
> 1 | const foo = Map([['foo', 'bar'], ['unicorn', 'rainbow']])
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`new Map()\` instead of \`Map()\`.
"
`;

exports[`invalid(42): 'const foo = Map([[\\'foo\\', \\'bar\\'], …' > Output 1`] = `
"
  1 | const foo = new Map([['foo', 'bar'], ['unicorn', 'rainbow']])
"
`;

exports[`invalid(43): 'const foo = WeakMap()' > Code 1`] = `
"
  1 | const foo = WeakMap()
"
`;

exports[`invalid(43): 'const foo = WeakMap()' > Error 1/1 1`] = `
"
> 1 | const foo = WeakMap()
    |             ^^^^^^^^^ Use \`new WeakMap()\` instead of \`WeakMap()\`.
"
`;

exports[`invalid(43): 'const foo = WeakMap()' > Output 1`] = `
"
  1 | const foo = new WeakMap()
"
`;

exports[`invalid(44): 'const foo = Set()' > Code 1`] = `
"
  1 | const foo = Set()
"
`;

exports[`invalid(44): 'const foo = Set()' > Error 1/1 1`] = `
"
> 1 | const foo = Set()
    |             ^^^^^ Use \`new Set()\` instead of \`Set()\`.
"
`;

exports[`invalid(44): 'const foo = Set()' > Output 1`] = `
"
  1 | const foo = new Set()
"
`;

exports[`invalid(45): 'const foo = WeakSet()' > Code 1`] = `
"
  1 | const foo = WeakSet()
"
`;

exports[`invalid(45): 'const foo = WeakSet()' > Error 1/1 1`] = `
"
> 1 | const foo = WeakSet()
    |             ^^^^^^^^^ Use \`new WeakSet()\` instead of \`WeakSet()\`.
"
`;

exports[`invalid(45): 'const foo = WeakSet()' > Output 1`] = `
"
  1 | const foo = new WeakSet()
"
`;

exports[`invalid(46): 'const foo = Promise()' > Code 1`] = `
"
  1 | const foo = Promise()
"
`;

exports[`invalid(46): 'const foo = Promise()' > Error 1/1 1`] = `
"
> 1 | const foo = Promise()
    |             ^^^^^^^^^ Use \`new Promise()\` instead of \`Promise()\`.
"
`;

exports[`invalid(46): 'const foo = Promise()' > Output 1`] = `
"
  1 | const foo = new Promise()
"
`;

exports[`invalid(47): 'const foo = RegExp()' > Code 1`] = `
"
  1 | const foo = RegExp()
"
`;

exports[`invalid(47): 'const foo = RegExp()' > Error 1/1 1`] = `
"
> 1 | const foo = RegExp()
    |             ^^^^^^^^ Use \`new RegExp()\` instead of \`RegExp()\`.
"
`;

exports[`invalid(47): 'const foo = RegExp()' > Output 1`] = `
"
  1 | const foo = new RegExp()
"
`;

exports[`invalid(48): 'const foo = Uint8Array()' > Code 1`] = `
"
  1 | const foo = Uint8Array()
"
`;

exports[`invalid(48): 'const foo = Uint8Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Uint8Array()
    |             ^^^^^^^^^^^^ Use \`new Uint8Array()\` instead of \`Uint8Array()\`.
"
`;

exports[`invalid(48): 'const foo = Uint8Array()' > Output 1`] = `
"
  1 | const foo = new Uint8Array()
"
`;

exports[`invalid(49): 'const foo = Uint16Array()' > Code 1`] = `
"
  1 | const foo = Uint16Array()
"
`;

exports[`invalid(49): 'const foo = Uint16Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Uint16Array()
    |             ^^^^^^^^^^^^^ Use \`new Uint16Array()\` instead of \`Uint16Array()\`.
"
`;

exports[`invalid(49): 'const foo = Uint16Array()' > Output 1`] = `
"
  1 | const foo = new Uint16Array()
"
`;

exports[`invalid(50): 'const foo = Uint32Array()' > Code 1`] = `
"
  1 | const foo = Uint32Array()
"
`;

exports[`invalid(50): 'const foo = Uint32Array()' > Error 1/1 1`] = `
"
> 1 | const foo = Uint32Array()
    |             ^^^^^^^^^^^^^ Use \`new Uint32Array()\` instead of \`Uint32Array()\`.
"
`;

exports[`invalid(50): 'const foo = Uint32Array()' > Output 1`] = `
"
  1 | const foo = new Uint32Array()
"
`;

exports[`invalid(51): 'const foo = Uint8ClampedArray()' > Code 1`] = `
"
  1 | const foo = Uint8ClampedArray()
"
`;

exports[`invalid(51): 'const foo = Uint8ClampedArray()' > Error 1/1 1`] = `
"
> 1 | const foo = Uint8ClampedArray()
    |             ^^^^^^^^^^^^^^^^^^^ Use \`new Uint8ClampedArray()\` instead of \`Uint8ClampedArray()\`.
"
`;

exports[`invalid(51): 'const foo = Uint8ClampedArray()' > Output 1`] = `
"
  1 | const foo = new Uint8ClampedArray()
"
`;

exports[`invalid(52): 'const foo = new BigInt(123)' > Code 1`] = `
"
  1 | const foo = new BigInt(123)
"
`;

exports[`invalid(52): 'const foo = new BigInt(123)' > Error 1/1 1`] = `
"
> 1 | const foo = new BigInt(123)
    |             ^^^^^^^^^^^^^^^ Use \`BigInt()\` instead of \`new BigInt()\`.
"
`;

exports[`invalid(52): 'const foo = new BigInt(123)' > Output 1`] = `
"
  1 | const foo = BigInt(123)
"
`;

exports[`invalid(53): 'const foo = new Boolean()' > Code 1`] = `
"
  1 | const foo = new Boolean()
"
`;

exports[`invalid(53): 'const foo = new Boolean()' > Error 1/1 1`] = `
"
> 1 | const foo = new Boolean()
    |             ^^^^^^^^^^^^^ Use \`Boolean()\` instead of \`new Boolean()\`.
"
`;

exports[`invalid(54): 'const foo = new Number()' > Code 1`] = `
"
  1 | const foo = new Number()
"
`;

exports[`invalid(54): 'const foo = new Number()' > Error 1/1 1`] = `
"
> 1 | const foo = new Number()
    |             ^^^^^^^^^^^^ Use \`Number()\` instead of \`new Number()\`.
"
`;

exports[`invalid(55): 'const foo = new Number(\\'123\\')' > Code 1`] = `
"
  1 | const foo = new Number('123')
"
`;

exports[`invalid(55): 'const foo = new Number(\\'123\\')' > Error 1/1 1`] = `
"
> 1 | const foo = new Number('123')
    |             ^^^^^^^^^^^^^^^^^ Use \`Number()\` instead of \`new Number()\`.
"
`;

exports[`invalid(56): 'const foo = new String()' > Code 1`] = `
"
  1 | const foo = new String()
"
`;

exports[`invalid(56): 'const foo = new String()' > Error 1/1 1`] = `
"
> 1 | const foo = new String()
    |             ^^^^^^^^^^^^ Use \`String()\` instead of \`new String()\`.
"
`;

exports[`invalid(57): 'const foo = new Symbol()' > Code 1`] = `
"
  1 | const foo = new Symbol()
"
`;

exports[`invalid(57): 'const foo = new Symbol()' > Error 1/1 1`] = `
"
> 1 | const foo = new Symbol()
    |             ^^^^^^^^^^^^ Use \`Symbol()\` instead of \`new Symbol()\`.
"
`;

exports[`invalid(57): 'const foo = new Symbol()' > Output 1`] = `
"
  1 | const foo = Symbol()
"
`;

exports[`invalid(58): 'function varCheck() {\\n\\t{\\n\\t\\tvar W…' > Code 1`] = `
"
   1 | function varCheck() {
   2 | 	{
   3 | 		var WeakMap = function() {};
   4 | 	}
   5 | 	// This should not reported
   6 | 	return WeakMap()
   7 | }
   8 | function constCheck() {
   9 | 	{
  10 | 		const Array = function() {};
  11 | 	}
  12 | 	return Array()
  13 | }
  14 | function letCheck() {
  15 | 	{
  16 | 		let Map = function() {};
  17 | 	}
  18 | 	return Map()
  19 | }
"
`;

exports[`invalid(58): 'function varCheck() {\\n\\t{\\n\\t\\tvar W…' > Error 1/2 1`] = `
"
   1 | function varCheck() {
   2 | 	{
   3 | 		var WeakMap = function() {};
   4 | 	}
   5 | 	// This should not reported
   6 | 	return WeakMap()
   7 | }
   8 | function constCheck() {
   9 | 	{
  10 | 		const Array = function() {};
  11 | 	}
> 12 | 	return Array()
     | 	       ^^^^^^^ Use \`new Array()\` instead of \`Array()\`.
  13 | }
  14 | function letCheck() {
  15 | 	{
  16 | 		let Map = function() {};
  17 | 	}
  18 | 	return Map()
  19 | }
"
`;

exports[`invalid(58): 'function varCheck() {\\n\\t{\\n\\t\\tvar W…' > Error 2/2 1`] = `
"
   1 | function varCheck() {
   2 | 	{
   3 | 		var WeakMap = function() {};
   4 | 	}
   5 | 	// This should not reported
   6 | 	return WeakMap()
   7 | }
   8 | function constCheck() {
   9 | 	{
  10 | 		const Array = function() {};
  11 | 	}
  12 | 	return Array()
  13 | }
  14 | function letCheck() {
  15 | 	{
  16 | 		let Map = function() {};
  17 | 	}
> 18 | 	return Map()
     | 	       ^^^^^ Use \`new Map()\` instead of \`Map()\`.
  19 | }
"
`;

exports[`invalid(58): 'function varCheck() {\\n\\t{\\n\\t\\tvar W…' > Output 1`] = `
"
   1 | function varCheck() {
   2 | 	{
   3 | 		var WeakMap = function() {};
   4 | 	}
   5 | 	// This should not reported
   6 | 	return WeakMap()
   7 | }
   8 | function constCheck() {
   9 | 	{
  10 | 		const Array = function() {};
  11 | 	}
  12 | 	return new Array()
  13 | }
  14 | function letCheck() {
  15 | 	{
  16 | 		let Map = function() {};
  17 | 	}
  18 | 	return new Map()
  19 | }
"
`;

exports[`invalid(59): 'function foo() {\\n\\treturn(globalThis…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	return(globalThis).Map()
  3 | }
"
`;

exports[`invalid(59): 'function foo() {\\n\\treturn(globalThis…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	return(globalThis).Map()
    | 	      ^^^^^^^^^^^^^^^^^^ Use \`new Map()\` instead of \`Map()\`.
  3 | }
"
`;

exports[`invalid(59): 'function foo() {\\n\\treturn(globalThis…' > Output 1`] = `
"
  1 | function foo() {
  2 | 	return new (globalThis).Map()
  3 | }
"
`;
