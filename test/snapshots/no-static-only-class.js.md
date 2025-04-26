// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'class A { static a() {}; }' > Code 1`] = `
"
  1 | class A { static a() {}; }
"
`;

exports[`invalid(0): 'class A { static a() {}; }' > Error 1/1 1`] = `
"
> 1 | class A { static a() {}; }
    | ^^^^^^^ Use an object instead of a class with only static members.
"
`;

exports[`invalid(0): 'class A { static a() {}; }' > Output 1`] = `
"
  1 | const A = { a() {}, };
"
`;

exports[`invalid(1): 'class A { static a() {} }' > Code 1`] = `
"
  1 | class A { static a() {} }
"
`;

exports[`invalid(1): 'class A { static a() {} }' > Error 1/1 1`] = `
"
> 1 | class A { static a() {} }
    | ^^^^^^^ Use an object instead of a class with only static members.
"
`;

exports[`invalid(1): 'class A { static a() {} }' > Output 1`] = `
"
  1 | const A = { a() {}, };
"
`;

exports[`invalid(2): 'const A = class A { static a() {}; }' > Code 1`] = `
"
  1 | const A = class A { static a() {}; }
"
`;

exports[`invalid(2): 'const A = class A { static a() {}; }' > Error 1/1 1`] = `
"
> 1 | const A = class A { static a() {}; }
    |           ^^^^^^^ Use an object instead of a class with only static members.
"
`;

exports[`invalid(3): 'const A = class { static a() {}; }' > Code 1`] = `
"
  1 | const A = class { static a() {}; }
"
`;

exports[`invalid(3): 'const A = class { static a() {}; }' > Error 1/1 1`] = `
"
> 1 | const A = class { static a() {}; }
    |           ^^^^^ Use an object instead of a class with only static members.
"
`;

exports[`invalid(3): 'const A = class { static a() {}; }' > Output 1`] = `
"
  1 | const A = { a() {}, }
"
`;

exports[`invalid(4): 'class A { static constructor() {}; }' > Code 1`] = `
"
  1 | class A { static constructor() {}; }
"
`;

exports[`invalid(4): 'class A { static constructor() {}; }' > Error 1/1 1`] = `
"
> 1 | class A { static constructor() {}; }
    | ^^^^^^^ Use an object instead of a class with only static members.
"
`;

exports[`invalid(4): 'class A { static constructor() {}; }' > Output 1`] = `
"
  1 | const A = { constructor() {}, };
"
`;

exports[`invalid(5): 'export default class A { static a() {…' > Code 1`] = `
"
  1 | export default class A { static a() {}; }
"
`;

exports[`invalid(5): 'export default class A { static a() {…' > Error 1/1 1`] = `
"
> 1 | export default class A { static a() {}; }
    |                ^^^^^^^ Use an object instead of a class with only static members.
"
`;

exports[`invalid(6): 'export default class { static a() {};…' > Code 1`] = `
"
  1 | export default class { static a() {}; }
"
`;

exports[`invalid(6): 'export default class { static a() {};…' > Error 1/1 1`] = `
"
> 1 | export default class { static a() {}; }
    |                ^^^^^ Use an object instead of a class with only static members.
"
`;

exports[`invalid(6): 'export default class { static a() {};…' > Output 1`] = `
"
  1 | export default { a() {}, }
"
`;

exports[`invalid(7): 'export class A { static a() {}; }' > Code 1`] = `
"
  1 | export class A { static a() {}; }
"
`;

exports[`invalid(7): 'export class A { static a() {}; }' > Error 1/1 1`] = `
"
> 1 | export class A { static a() {}; }
    |        ^^^^^^^ Use an object instead of a class with only static members.
"
`;

exports[`invalid(7): 'export class A { static a() {}; }' > Output 1`] = `
"
  1 | export const A = { a() {}, };
"
`;

exports[`invalid(8): 'function a() {\\n\\treturn class\\n\\t{\\n…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return class
  3 | 	{
  4 | 		static a() {}
  5 | 	}
  6 | }
"
`;

exports[`invalid(8): 'function a() {\\n\\treturn class\\n\\t{\\n…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return class
    | 	       ^^^^^ Use an object instead of a class with only static members.
  3 | 	{
  4 | 		static a() {}
  5 | 	}
  6 | }
"
`;

exports[`invalid(8): 'function a() {\\n\\treturn class\\n\\t{\\n…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return {
  3 | 		a() {},
  4 | 	}
  5 | }
"
`;

exports[`invalid(9): 'function a() {\\n\\treturn class /* com…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return class /* comment */
  3 | 	{
  4 | 		static a() {}
  5 | 	}
  6 | }
"
`;

exports[`invalid(9): 'function a() {\\n\\treturn class /* com…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return class /* comment */
    | 	       ^^^^^ Use an object instead of a class with only static members.
  3 | 	{
  4 | 		static a() {}
  5 | 	}
  6 | }
"
`;

exports[`invalid(9): 'function a() {\\n\\treturn class /* com…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return { /* comment */
  3 | 	
  4 | 		a() {},
  5 | 	}
  6 | }
"
`;

exports[`invalid(10): 'function a() {\\n\\treturn class // com…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return class // comment
  3 | 	{
  4 | 		static a() {}
  5 | 	}
  6 | }
"
`;

exports[`invalid(10): 'function a() {\\n\\treturn class // com…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return class // comment
    | 	       ^^^^^ Use an object instead of a class with only static members.
  3 | 	{
  4 | 		static a() {}
  5 | 	}
  6 | }
"
`;

exports[`invalid(10): 'function a() {\\n\\treturn class // com…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return { // comment
  3 | 	
  4 | 		a() {},
  5 | 	}
  6 | }
"
`;

exports[`invalid(11): 'class A {static a(){}}\\nclass B exten…' > Code 1`] = `
"
  1 | class A {static a(){}}
  2 | class B extends A {}
"
`;

exports[`invalid(11): 'class A {static a(){}}\\nclass B exten…' > Error 1/1 1`] = `
"
> 1 | class A {static a(){}}
    | ^^^^^^^ Use an object instead of a class with only static members.
  2 | class B extends A {}
"
`;

exports[`invalid(11): 'class A {static a(){}}\\nclass B exten…' > Output 1`] = `
"
  1 | const A = {a(){},};
  2 | class B extends A {}
"
`;

exports[`invalid(12): 'class A {static a(){}}\\nconsole.log(t…' > Code 1`] = `
"
  1 | class A {static a(){}}
  2 | console.log(typeof A)
"
`;

exports[`invalid(12): 'class A {static a(){}}\\nconsole.log(t…' > Error 1/1 1`] = `
"
> 1 | class A {static a(){}}
    | ^^^^^^^ Use an object instead of a class with only static members.
  2 | console.log(typeof A)
"
`;

exports[`invalid(12): 'class A {static a(){}}\\nconsole.log(t…' > Output 1`] = `
"
  1 | const A = {a(){},};
  2 | console.log(typeof A)
"
`;

exports[`invalid(13): 'class A {static a(){}}\\nconst a = new…' > Code 1`] = `
"
  1 | class A {static a(){}}
  2 | const a = new A;
"
`;

exports[`invalid(13): 'class A {static a(){}}\\nconst a = new…' > Error 1/1 1`] = `
"
> 1 | class A {static a(){}}
    | ^^^^^^^ Use an object instead of a class with only static members.
  2 | const a = new A;
"
`;

exports[`invalid(13): 'class A {static a(){}}\\nconst a = new…' > Output 1`] = `
"
  1 | const A = {a(){},};
  2 | const a = new A;
"
`;
