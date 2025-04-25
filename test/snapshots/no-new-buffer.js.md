// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const buffer = new Buffer([0x62, 0x75…' > Code 1`] = `
"
  1 | const buffer = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
"
`;

exports[`invalid(0): 'const buffer = new Buffer([0x62, 0x75…' > Error 1/1 1`] = `
"
> 1 | const buffer = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(0): 'const buffer = new Buffer([0x62, 0x75…' > Output 1`] = `
"
  1 | const buffer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
"
`;

exports[`invalid(1): 'const buffer = new Buffer([0x62, bar])' > Code 1`] = `
"
  1 | const buffer = new Buffer([0x62, bar])
"
`;

exports[`invalid(1): 'const buffer = new Buffer([0x62, bar])' > Error 1/1 1`] = `
"
> 1 | const buffer = new Buffer([0x62, bar])
    |                ^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(1): 'const buffer = new Buffer([0x62, bar])' > Output 1`] = `
"
  1 | const buffer = Buffer.from([0x62, bar])
"
`;

exports[`invalid(2): 'const array = [0x62];\\nconst buffer =…' > Code 1`] = `
"
  1 | const array = [0x62];
  2 | const buffer = new Buffer(array);
"
`;

exports[`invalid(2): 'const array = [0x62];\\nconst buffer =…' > Error 1/1 1`] = `
"
  1 | const array = [0x62];
> 2 | const buffer = new Buffer(array);
    |                ^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(2): 'const array = [0x62];\\nconst buffer =…' > Output 1`] = `
"
  1 | const array = [0x62];
  2 | const buffer = Buffer.from(array);
"
`;

exports[`invalid(3): 'const arrayBuffer = new ArrayBuffer(1…' > Code 1`] = `
"
  1 | const arrayBuffer = new ArrayBuffer(10);
  2 | const buffer = new Buffer(arrayBuffer);
"
`;

exports[`invalid(3): 'const arrayBuffer = new ArrayBuffer(1…' > Error 1/1 1`] = `
"
  1 | const arrayBuffer = new ArrayBuffer(10);
> 2 | const buffer = new Buffer(arrayBuffer);
    |                ^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.alloc()\` or \`Buffer.from()\` instead.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`Buffer.from()\`.
  1 | const arrayBuffer = new ArrayBuffer(10);
  2 | const buffer = Buffer.from(arrayBuffer);

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Buffer.alloc()\`.
  1 | const arrayBuffer = new ArrayBuffer(10);
  2 | const buffer = Buffer.alloc(arrayBuffer);
"
`;

exports[`invalid(4): 'const arrayBuffer = new ArrayBuffer(1…' > Code 1`] = `
"
  1 | const arrayBuffer = new ArrayBuffer(10);
  2 | const buffer = new Buffer(arrayBuffer, 0, );
"
`;

exports[`invalid(4): 'const arrayBuffer = new ArrayBuffer(1…' > Error 1/1 1`] = `
"
  1 | const arrayBuffer = new ArrayBuffer(10);
> 2 | const buffer = new Buffer(arrayBuffer, 0, );
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(4): 'const arrayBuffer = new ArrayBuffer(1…' > Output 1`] = `
"
  1 | const arrayBuffer = new ArrayBuffer(10);
  2 | const buffer = Buffer.from(arrayBuffer, 0, );
"
`;

exports[`invalid(5): 'const arrayBuffer = new ArrayBuffer(1…' > Code 1`] = `
"
  1 | const arrayBuffer = new ArrayBuffer(10);
  2 | const buffer = new Buffer(arrayBuffer, 0, 2);
"
`;

exports[`invalid(5): 'const arrayBuffer = new ArrayBuffer(1…' > Error 1/1 1`] = `
"
  1 | const arrayBuffer = new ArrayBuffer(10);
> 2 | const buffer = new Buffer(arrayBuffer, 0, 2);
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(5): 'const arrayBuffer = new ArrayBuffer(1…' > Output 1`] = `
"
  1 | const arrayBuffer = new ArrayBuffer(10);
  2 | const buffer = Buffer.from(arrayBuffer, 0, 2);
"
`;

exports[`invalid(6): 'const buffer = new Buffer(10);' > Code 1`] = `
"
  1 | const buffer = new Buffer(10);
"
`;

exports[`invalid(6): 'const buffer = new Buffer(10);' > Error 1/1 1`] = `
"
> 1 | const buffer = new Buffer(10);
    |                ^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.alloc()\` instead.
"
`;

exports[`invalid(6): 'const buffer = new Buffer(10);' > Output 1`] = `
"
  1 | const buffer = Buffer.alloc(10);
"
`;

exports[`invalid(7): 'const size = 10;\\nconst buffer = new …' > Code 1`] = `
"
  1 | const size = 10;
  2 | const buffer = new Buffer(size);
"
`;

exports[`invalid(7): 'const size = 10;\\nconst buffer = new …' > Error 1/1 1`] = `
"
  1 | const size = 10;
> 2 | const buffer = new Buffer(size);
    |                ^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.alloc()\` instead.
"
`;

exports[`invalid(7): 'const size = 10;\\nconst buffer = new …' > Output 1`] = `
"
  1 | const size = 10;
  2 | const buffer = Buffer.alloc(size);
"
`;

exports[`invalid(8): 'new Buffer(foo.length)' > Code 1`] = `
"
  1 | new Buffer(foo.length)
"
`;

exports[`invalid(8): 'new Buffer(foo.length)' > Error 1/1 1`] = `
"
> 1 | new Buffer(foo.length)
    | ^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.alloc()\` instead.
"
`;

exports[`invalid(8): 'new Buffer(foo.length)' > Output 1`] = `
"
  1 | Buffer.alloc(foo.length)
"
`;

exports[`invalid(9): 'new Buffer(Math.min(foo, bar))' > Code 1`] = `
"
  1 | new Buffer(Math.min(foo, bar))
"
`;

exports[`invalid(9): 'new Buffer(Math.min(foo, bar))' > Error 1/1 1`] = `
"
> 1 | new Buffer(Math.min(foo, bar))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.alloc()\` instead.
"
`;

exports[`invalid(9): 'new Buffer(Math.min(foo, bar))' > Output 1`] = `
"
  1 | Buffer.alloc(Math.min(foo, bar))
"
`;

exports[`invalid(10): 'const buffer = new Buffer("string");' > Code 1`] = `
"
  1 | const buffer = new Buffer("string");
"
`;

exports[`invalid(10): 'const buffer = new Buffer("string");' > Error 1/1 1`] = `
"
> 1 | const buffer = new Buffer("string");
    |                ^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(10): 'const buffer = new Buffer("string");' > Output 1`] = `
"
  1 | const buffer = Buffer.from("string");
"
`;

exports[`invalid(11): 'const buffer = new Buffer("7468697320…' > Code 1`] = `
"
  1 | const buffer = new Buffer("7468697320697320612074c3a97374", "hex")
"
`;

exports[`invalid(11): 'const buffer = new Buffer("7468697320…' > Error 1/1 1`] = `
"
> 1 | const buffer = new Buffer("7468697320697320612074c3a97374", "hex")
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(11): 'const buffer = new Buffer("7468697320…' > Output 1`] = `
"
  1 | const buffer = Buffer.from("7468697320697320612074c3a97374", "hex")
"
`;

exports[`invalid(12): 'const string = "string";\\nconst buffe…' > Code 1`] = `
"
  1 | const string = "string";
  2 | const buffer = new Buffer(string);
"
`;

exports[`invalid(12): 'const string = "string";\\nconst buffe…' > Error 1/1 1`] = `
"
  1 | const string = "string";
> 2 | const buffer = new Buffer(string);
    |                ^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(12): 'const string = "string";\\nconst buffe…' > Output 1`] = `
"
  1 | const string = "string";
  2 | const buffer = Buffer.from(string);
"
`;

exports[`invalid(13): 'const buffer = new Buffer(\`\${unknown}…' > Code 1`] = `
"
  1 | const buffer = new Buffer(\`\${unknown}\`)
"
`;

exports[`invalid(13): 'const buffer = new Buffer(\`\${unknown}…' > Error 1/1 1`] = `
"
> 1 | const buffer = new Buffer(\`\${unknown}\`)
    |                ^^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(13): 'const buffer = new Buffer(\`\${unknown}…' > Output 1`] = `
"
  1 | const buffer = Buffer.from(\`\${unknown}\`)
"
`;

exports[`invalid(14): 'const buffer = new (Buffer)(unknown)' > Code 1`] = `
"
  1 | const buffer = new (Buffer)(unknown)
"
`;

exports[`invalid(14): 'const buffer = new (Buffer)(unknown)' > Error 1/1 1`] = `
"
> 1 | const buffer = new (Buffer)(unknown)
    |                ^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.alloc()\` or \`Buffer.from()\` instead.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`Buffer.from()\`.
  1 | const buffer = (Buffer.from)(unknown)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Buffer.alloc()\`.
  1 | const buffer = (Buffer.alloc)(unknown)
"
`;

exports[`invalid(15): 'const buffer = new Buffer(unknown, 2)' > Code 1`] = `
"
  1 | const buffer = new Buffer(unknown, 2)
"
`;

exports[`invalid(15): 'const buffer = new Buffer(unknown, 2)' > Error 1/1 1`] = `
"
> 1 | const buffer = new Buffer(unknown, 2)
    |                ^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(15): 'const buffer = new Buffer(unknown, 2)' > Output 1`] = `
"
  1 | const buffer = Buffer.from(unknown, 2)
"
`;

exports[`invalid(16): 'const buffer = new Buffer(...unknown)' > Code 1`] = `
"
  1 | const buffer = new Buffer(...unknown)
"
`;

exports[`invalid(16): 'const buffer = new Buffer(...unknown)' > Error 1/1 1`] = `
"
> 1 | const buffer = new Buffer(...unknown)
    |                ^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.alloc()\` or \`Buffer.from()\` instead.

--------------------------------------------------------------------------------
Suggestion 1/2: Switch to \`Buffer.from()\`.
  1 | const buffer = Buffer.from(...unknown)

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to \`Buffer.alloc()\`.
  1 | const buffer = Buffer.alloc(...unknown)
"
`;

exports[`invalid(17): '() => {\\n\\treturn new // 1\\n\\t\\tBuffe…' > Code 1`] = `
"
  1 | () => {
  2 | 	return new // 1
  3 | 		Buffer();
  4 | }
"
`;

exports[`invalid(17): '() => {\\n\\treturn new // 1\\n\\t\\tBuffe…' > Error 1/1 1`] = `
"
  1 | () => {
> 2 | 	return new // 1
    | 	       ^^^^^^^^
> 3 | 		Buffer();
    | ^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
  4 | }
"
`;

exports[`invalid(17): '() => {\\n\\treturn new // 1\\n\\t\\tBuffe…' > Output 1`] = `
"
  1 | () => {
  2 | 	return ( // 1
  3 | 		Buffer.from());
  4 | }
"
`;

exports[`invalid(18): '() => {\\n\\treturn (\\n\\t\\tnew // 2\\n\\t…' > Code 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		new // 2
  4 | 			Buffer()
  5 | 	);
  6 | }
"
`;

exports[`invalid(18): '() => {\\n\\treturn (\\n\\t\\tnew // 2\\n\\t…' > Error 1/1 1`] = `
"
  1 | () => {
  2 | 	return (
> 3 | 		new // 2
    | 		^^^^^^^^
> 4 | 			Buffer()
    | ^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
  5 | 	);
  6 | }
"
`;

exports[`invalid(18): '() => {\\n\\treturn (\\n\\t\\tnew // 2\\n\\t…' > Output 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		// 2
  4 | 			Buffer.from()
  5 | 	);
  6 | }
"
`;

exports[`invalid(19): '() => {\\n\\treturn new // 3\\n\\t\\t(Buff…' > Code 1`] = `
"
  1 | () => {
  2 | 	return new // 3
  3 | 		(Buffer);
  4 | }
"
`;

exports[`invalid(19): '() => {\\n\\treturn new // 3\\n\\t\\t(Buff…' > Error 1/1 1`] = `
"
  1 | () => {
> 2 | 	return new // 3
    | 	       ^^^^^^^^
> 3 | 		(Buffer);
    | ^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
  4 | }
"
`;

exports[`invalid(19): '() => {\\n\\treturn new // 3\\n\\t\\t(Buff…' > Output 1`] = `
"
  1 | () => {
  2 | 	return ( // 3
  3 | 		(Buffer.from)());
  4 | }
"
`;

exports[`invalid(20): '() => {\\n\\treturn new // 4\\n\\t\\tBuffe…' > Code 1`] = `
"
  1 | () => {
  2 | 	return new // 4
  3 | 		Buffer;
  4 | }
"
`;

exports[`invalid(20): '() => {\\n\\treturn new // 4\\n\\t\\tBuffe…' > Error 1/1 1`] = `
"
  1 | () => {
> 2 | 	return new // 4
    | 	       ^^^^^^^^
> 3 | 		Buffer;
    | ^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
  4 | }
"
`;

exports[`invalid(20): '() => {\\n\\treturn new // 4\\n\\t\\tBuffe…' > Output 1`] = `
"
  1 | () => {
  2 | 	return ( // 4
  3 | 		Buffer.from());
  4 | }
"
`;

exports[`invalid(21): '() => {\\n\\treturn (\\n\\t\\tnew // 5\\n\\t…' > Code 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		new // 5
  4 | 			Buffer
  5 | 	);
  6 | }
"
`;

exports[`invalid(21): '() => {\\n\\treturn (\\n\\t\\tnew // 5\\n\\t…' > Error 1/1 1`] = `
"
  1 | () => {
  2 | 	return (
> 3 | 		new // 5
    | 		^^^^^^^^
> 4 | 			Buffer
    | ^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
  5 | 	);
  6 | }
"
`;

exports[`invalid(21): '() => {\\n\\treturn (\\n\\t\\tnew // 5\\n\\t…' > Output 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		// 5
  4 | 			Buffer.from()
  5 | 	);
  6 | }
"
`;

exports[`invalid(22): '() => {\\n\\treturn (\\n\\t\\tnew // 6\\n\\t…' > Code 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		new // 6
  4 | 			(Buffer)
  5 | 	);
  6 | }
"
`;

exports[`invalid(22): '() => {\\n\\treturn (\\n\\t\\tnew // 6\\n\\t…' > Error 1/1 1`] = `
"
  1 | () => {
  2 | 	return (
> 3 | 		new // 6
    | 		^^^^^^^^
> 4 | 			(Buffer)
    | ^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
  5 | 	);
  6 | }
"
`;

exports[`invalid(22): '() => {\\n\\treturn (\\n\\t\\tnew // 6\\n\\t…' > Output 1`] = `
"
  1 | () => {
  2 | 	return (
  3 | 		// 6
  4 | 			(Buffer.from)()
  5 | 	);
  6 | }
"
`;

exports[`invalid(23): 'const buffer = new /* comment */ Buff…' > Code 1`] = `
"
  1 | const buffer = new /* comment */ Buffer()
"
`;

exports[`invalid(23): 'const buffer = new /* comment */ Buff…' > Error 1/1 1`] = `
"
> 1 | const buffer = new /* comment */ Buffer()
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(23): 'const buffer = new /* comment */ Buff…' > Output 1`] = `
"
  1 | const buffer = /* comment */ Buffer.from()
"
`;

exports[`invalid(24): 'const buffer = new /* comment */ Buff…' > Code 1`] = `
"
  1 | const buffer = new /* comment */ Buffer
"
`;

exports[`invalid(24): 'const buffer = new /* comment */ Buff…' > Error 1/1 1`] = `
"
> 1 | const buffer = new /* comment */ Buffer
    |                ^^^^^^^^^^^^^^^^^^^^^^^^ \`new Buffer()\` is deprecated, use \`Buffer.from()\` instead.
"
`;

exports[`invalid(24): 'const buffer = new /* comment */ Buff…' > Output 1`] = `
"
  1 | const buffer = /* comment */ Buffer.from()
"
`;
