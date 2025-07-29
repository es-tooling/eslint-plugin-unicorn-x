// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '<script>\\nimport {nextTick} from \\'vu…' > Code 1`] = `
"
  1 | <script>
  2 | import {nextTick} from 'vue';
  3 | const foo = nextTick(undefined);
  4 | </script>
"
`;

exports[`invalid(0): '<script>\\nimport {nextTick} from \\'vu…' > Error 1/1 1`] = `
"
  1 | <script>
  2 | import {nextTick} from 'vue';
> 3 | const foo = nextTick(undefined);
    |                      ^^^^^^^^^ Do not use useless \`undefined\`.
  4 | </script>
"
`;

exports[`invalid(0): '<script>\\nimport {nextTick} from \\'vu…' > Output 1`] = `
"
  1 | <script>
  2 | import {nextTick} from 'vue';
  3 | const foo = nextTick();
  4 | </script>
"
`;

exports[`invalid(0): 'foo(\\n\\tundefined,\\n\\tbar,\\n\\tundefin…' > Code 1`] = `
"
  1 | foo(
  2 | 	undefined,
  3 | 	bar,
  4 | 	undefined,
  5 | 	undefined,
  6 | 	undefined,
  7 | 	undefined,
  8 | )
"
`;

exports[`invalid(0): 'foo(\\n\\tundefined,\\n\\tbar,\\n\\tundefin…' > Error 1/1 1`] = `
"
  1 | foo(
  2 | 	undefined,
  3 | 	bar,
> 4 | 	undefined,
    | 	^^^^^^^^^^
> 5 | 	undefined,
    | ^^^^^^^^^^^
> 6 | 	undefined,
    | ^^^^^^^^^^^
> 7 | 	undefined,
    | ^^^^^^^^^^^ Do not use useless \`undefined\`.
  8 | )
"
`;

exports[`invalid(0): 'foo(\\n\\tundefined,\\n\\tbar,\\n\\tundefin…' > Output 1`] = `
"
  1 | foo(
  2 | 	undefined,
  3 | 	bar,
  4 | )
"
`;

exports[`invalid(0): 'function f(foo: Type = undefined) {}' > Code 1`] = `
"
  1 | function f(foo: Type = undefined) {}
"
`;

exports[`invalid(0): 'function f(foo: Type = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo: Type = undefined) {}
    |                        ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(0): 'function f(foo: Type = undefined) {}' > Output 1`] = `
"
  1 | function f(foo?: Type) {}
"
`;

exports[`invalid(1): 'function f(foo?: Type = undefined) {}' > Code 1`] = `
"
  1 | function f(foo?: Type = undefined) {}
"
`;

exports[`invalid(1): 'function f(foo?: Type = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo?: Type = undefined) {}
    |                         ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(1): 'function f(foo?: Type = undefined) {}' > Output 1`] = `
"
  1 | function f(foo?: Type) {}
"
`;

exports[`invalid(1): 'function foo([bar = undefined] = []) …' > Code 1`] = `
"
  1 | function foo([bar = undefined] = []) {}
"
`;

exports[`invalid(1): 'function foo([bar = undefined] = []) …' > Error 1/1 1`] = `
"
> 1 | function foo([bar = undefined] = []) {}
    |                     ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(1): 'function foo([bar = undefined] = []) …' > Output 1`] = `
"
  1 | function foo([bar] = []) {}
"
`;

exports[`invalid(2): 'const f = function(foo: Type = undefi…' > Code 1`] = `
"
  1 | const f = function(foo: Type = undefined) {}
"
`;

exports[`invalid(2): 'const f = function(foo: Type = undefi…' > Error 1/1 1`] = `
"
> 1 | const f = function(foo: Type = undefined) {}
    |                                ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(2): 'const f = function(foo: Type = undefi…' > Output 1`] = `
"
  1 | const f = function(foo?: Type) {}
"
`;

exports[`invalid(2): 'foo(bar, undefined, undefined);' > Code 1`] = `
"
  1 | foo(bar, undefined, undefined);
"
`;

exports[`invalid(2): 'foo(bar, undefined, undefined);' > Error 1/1 1`] = `
"
> 1 | foo(bar, undefined, undefined);
    |          ^^^^^^^^^^^^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(2): 'foo(bar, undefined, undefined);' > Output 1`] = `
"
  1 | foo(bar);
"
`;

exports[`invalid(3): 'const f = (foo: Type = undefined) => …' > Code 1`] = `
"
  1 | const f = (foo: Type = undefined) => {}
"
`;

exports[`invalid(3): 'const f = (foo: Type = undefined) => …' > Error 1/1 1`] = `
"
> 1 | const f = (foo: Type = undefined) => {}
    |                        ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(3): 'const f = (foo: Type = undefined) => …' > Output 1`] = `
"
  1 | const f = (foo?: Type) => {}
"
`;

exports[`invalid(3): 'let a = undefined, b = 2;' > Code 1`] = `
"
  1 | let a = undefined, b = 2;
"
`;

exports[`invalid(3): 'let a = undefined, b = 2;' > Error 1/1 1`] = `
"
> 1 | let a = undefined, b = 2;
    |         ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(3): 'let a = undefined, b = 2;' > Output 1`] = `
"
  1 | let a, b = 2;
"
`;

exports[`invalid(4): 'const f = {method(foo: Type = undefin…' > Code 1`] = `
"
  1 | const f = {method(foo: Type = undefined){}}
"
`;

exports[`invalid(4): 'const f = {method(foo: Type = undefin…' > Error 1/1 1`] = `
"
> 1 | const f = {method(foo: Type = undefined){}}
    |                               ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(4): 'const f = {method(foo: Type = undefin…' > Output 1`] = `
"
  1 | const f = {method(foo?: Type){}}
"
`;

exports[`invalid(4): 'function foo() {\\n\\treturn /* */ (\\n\\…' > Code 1`] = `
"
   1 | function foo() {
   2 | 	return /* */ (
   3 | 		/* */
   4 | 		(
   5 | 			/* */
   6 | 			undefined
   7 | 			/* */
   8 | 		)
   9 | 		/* */
  10 | 	) /* */ ;
  11 | }
"
`;

exports[`invalid(4): 'function foo() {\\n\\treturn /* */ (\\n\\…' > Error 1/1 1`] = `
"
   1 | function foo() {
   2 | 	return /* */ (
   3 | 		/* */
   4 | 		(
   5 | 			/* */
>  6 | 			undefined
     | 			^^^^^^^^^ Do not use useless \`undefined\`.
   7 | 			/* */
   8 | 		)
   9 | 		/* */
  10 | 	) /* */ ;
  11 | }
"
`;

exports[`invalid(4): 'function foo() {\\n\\treturn /* */ (\\n\\…' > Output 1`] = `
"
   1 | function foo() {
   2 | 	return /* */
   3 | 		/* */
   4 |
   5 | 			/* */
   6 |
   7 | 			/* */
   8 |
   9 | 		/* */
  10 |  /* */ ;
  11 | }
"
`;

exports[`invalid(5): 'const f = class {method(foo: Type = u…' > Code 1`] = `
"
  1 | const f = class {method(foo: Type = undefined){}}
"
`;

exports[`invalid(5): 'const f = class {method(foo: Type = u…' > Error 1/1 1`] = `
"
> 1 | const f = class {method(foo: Type = undefined){}}
    |                                     ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(5): 'const f = class {method(foo: Type = u…' > Output 1`] = `
"
  1 | const f = class {method(foo?: Type){}}
"
`;

exports[`invalid(5): 'function * foo() {\\n\\tyield /* */ (\\n…' > Code 1`] = `
"
   1 | function * foo() {
   2 | 	yield /* */ (
   3 | 		/* */
   4 | 		(
   5 | 			/* */
   6 | 			undefined
   7 | 			/* */
   8 | 		)
   9 | 		/* */
  10 | 	) /* */ ;
  11 | }
"
`;

exports[`invalid(5): 'function * foo() {\\n\\tyield /* */ (\\n…' > Error 1/1 1`] = `
"
   1 | function * foo() {
   2 | 	yield /* */ (
   3 | 		/* */
   4 | 		(
   5 | 			/* */
>  6 | 			undefined
     | 			^^^^^^^^^ Do not use useless \`undefined\`.
   7 | 			/* */
   8 | 		)
   9 | 		/* */
  10 | 	) /* */ ;
  11 | }
"
`;

exports[`invalid(5): 'function * foo() {\\n\\tyield /* */ (\\n…' > Output 1`] = `
"
   1 | function * foo() {
   2 | 	yield /* */
   3 | 		/* */
   4 |
   5 | 			/* */
   6 |
   7 | 			/* */
   8 |
   9 | 		/* */
  10 |  /* */ ;
  11 | }
"
`;

exports[`invalid(6): 'const foo = () => /* */ (\\n\\t/* */\\n\\…' > Code 1`] = `
"
  1 | const foo = () => /* */ (
  2 | 	/* */
  3 | 	(
  4 | 		/* */
  5 | 		undefined
  6 | 		/* */
  7 | 	)
  8 | 	/* */
  9 | );
"
`;

exports[`invalid(6): 'const foo = () => /* */ (\\n\\t/* */\\n\\…' > Error 1/1 1`] = `
"
  1 | const foo = () => /* */ (
  2 | 	/* */
  3 | 	(
  4 | 		/* */
> 5 | 		undefined
    | 		^^^^^^^^^ Do not use useless \`undefined\`.
  6 | 		/* */
  7 | 	)
  8 | 	/* */
  9 | );
"
`;

exports[`invalid(6): 'const foo = () => /* */ (\\n\\t/* */\\n\\…' > Output 1`] = `
"
  1 | const foo = () => /* */
  2 | 	/* */
  3 |
  4 | 		/* */
  5 |  {}
  6 | 		/* */
  7 |
  8 | 	/* */
  9 | ;
"
`;

exports[`invalid(6): 'function f(foo = undefined) {}' > Code 1`] = `
"
  1 | function f(foo = undefined) {}
"
`;

exports[`invalid(6): 'function f(foo = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo = undefined) {}
    |                  ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(6): 'function f(foo = undefined) {}' > Output 1`] = `
"
  1 | function f(foo) {}
"
`;

exports[`invalid(7): 'foo.bind(undefined)' > Code 1`] = `
"
  1 | foo.bind(undefined)
"
`;

exports[`invalid(7): 'foo.bind(undefined)' > Error 1/1 1`] = `
"
> 1 | foo.bind(undefined)
    |          ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(7): 'foo.bind(undefined)' > Output 1`] = `
"
  1 | foo.bind()
"
`;

exports[`invalid(7): 'function f(foo = undefined) {}' > Code 1`] = `
"
  1 | function f(foo = undefined) {}
"
`;

exports[`invalid(7): 'function f(foo = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo = undefined) {}
    |                  ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(7): 'function f(foo = undefined) {}' > Output 1`] = `
"
  1 | function f(foo) {}
"
`;

exports[`invalid(8): 'bind(foo, undefined)' > Code 1`] = `
"
  1 | bind(foo, undefined)
"
`;

exports[`invalid(8): 'bind(foo, undefined)' > Error 1/1 1`] = `
"
> 1 | bind(foo, undefined)
    |           ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(8): 'bind(foo, undefined)' > Output 1`] = `
"
  1 | bind(foo)
"
`;

exports[`invalid(8): 'function f(foo = undefined) {}' > Code 1`] = `
"
  1 | function f(foo = undefined) {}
"
`;

exports[`invalid(8): 'function f(foo = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo = undefined) {}
    |                  ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(8): 'function f(foo = undefined) {}' > Filename 1`] = `
"
foo.js
"
`;

exports[`invalid(8): 'function f(foo = undefined) {}' > Output 1`] = `
"
  1 | function f(foo) {}
"
`;

exports[`invalid(9): 'foo.bind?.(bar, undefined)' > Code 1`] = `
"
  1 | foo.bind?.(bar, undefined)
"
`;

exports[`invalid(9): 'foo.bind?.(bar, undefined)' > Error 1/1 1`] = `
"
> 1 | foo.bind?.(bar, undefined)
    |                 ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(9): 'foo.bind?.(bar, undefined)' > Output 1`] = `
"
  1 | foo.bind?.(bar)
"
`;

exports[`invalid(9): 'function f(foo = undefined) {}' > Code 1`] = `
"
  1 | function f(foo = undefined) {}
"
`;

exports[`invalid(9): 'function f(foo = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo = undefined) {}
    |                  ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(9): 'function f(foo = undefined) {}' > Filename 1`] = `
"
foo.ts
"
`;

exports[`invalid(9): 'function f(foo = undefined) {}' > Output 1`] = `
"
  1 | function f(foo?) {}
"
`;

exports[`invalid(10): 'foo[bind](bar, undefined)' > Code 1`] = `
"
  1 | foo[bind](bar, undefined)
"
`;

exports[`invalid(10): 'foo[bind](bar, undefined)' > Error 1/1 1`] = `
"
> 1 | foo[bind](bar, undefined)
    |                ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(10): 'foo[bind](bar, undefined)' > Output 1`] = `
"
  1 | foo[bind](bar)
"
`;

exports[`invalid(10): 'function f(foo = undefined) {}' > Code 1`] = `
"
  1 | function f(foo = undefined) {}
"
`;

exports[`invalid(10): 'function f(foo = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo = undefined) {}
    |                  ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(10): 'function f(foo = undefined) {}' > Filename 1`] = `
"
foo.MTs
"
`;

exports[`invalid(10): 'function f(foo = undefined) {}' > Output 1`] = `
"
  1 | function f(foo?) {}
"
`;

exports[`invalid(11): 'foo.notBind(bar, undefined)' > Code 1`] = `
"
  1 | foo.notBind(bar, undefined)
"
`;

exports[`invalid(11): 'foo.notBind(bar, undefined)' > Error 1/1 1`] = `
"
> 1 | foo.notBind(bar, undefined)
    |                  ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(11): 'foo.notBind(bar, undefined)' > Output 1`] = `
"
  1 | foo.notBind(bar)
"
`;

exports[`invalid(11): 'function f(foo = undefined) {}' > Code 1`] = `
"
  1 | function f(foo = undefined) {}
"
`;

exports[`invalid(11): 'function f(foo = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo = undefined) {}
    |                  ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(11): 'function f(foo = undefined) {}' > Filename 1`] = `
"
foo.cts
"
`;

exports[`invalid(11): 'function f(foo = undefined) {}' > Output 1`] = `
"
  1 | function f(foo?) {}
"
`;

exports[`invalid(12): 'function f(foo = undefined) {}' > Code 1`] = `
"
  1 | function f(foo = undefined) {}
"
`;

exports[`invalid(12): 'function f(foo = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function f(foo = undefined) {}
    |                  ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(12): 'function f(foo = undefined) {}' > Filename 1`] = `
"
foo.tsx
"
`;

exports[`invalid(12): 'function f(foo = undefined) {}' > Output 1`] = `
"
  1 | function f(foo?) {}
"
`;

exports[`invalid(13): 'function a({foo} = undefined) {}' > Code 1`] = `
"
  1 | function a({foo} = undefined) {}
"
`;

exports[`invalid(13): 'function a({foo} = undefined) {}' > Error 1/1 1`] = `
"
> 1 | function a({foo} = undefined) {}
    |                    ^^^^^^^^^ Do not use useless \`undefined\`.
"
`;

exports[`invalid(13): 'function a({foo} = undefined) {}' > Filename 1`] = `
"
foo.ts
"
`;

exports[`invalid(13): 'function a({foo} = undefined) {}' > Output 1`] = `
"
  1 | function a({foo}?) {}
"
`;
