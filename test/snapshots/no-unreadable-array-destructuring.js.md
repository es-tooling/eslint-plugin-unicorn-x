// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const [,, foo] = parts;' > Code 1`] = `
"
  1 | const [,, foo] = parts;
"
`;

exports[`invalid(0): 'const [,, foo] = parts;' > Error 1/1 1`] = `
"
> 1 | const [,, foo] = parts;
    |       ^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(0): 'const [,, foo] = parts;' > Output 1`] = `
"
  1 | const foo = parts[2];
"
`;

exports[`invalid(1): 'const [foo,,, bar] = parts;' > Code 1`] = `
"
  1 | const [foo,,, bar] = parts;
"
`;

exports[`invalid(1): 'const [foo,,, bar] = parts;' > Error 1/1 1`] = `
"
> 1 | const [foo,,, bar] = parts;
    |       ^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(2): 'const [foo,,,] = parts;' > Code 1`] = `
"
  1 | const [foo,,,] = parts;
"
`;

exports[`invalid(2): 'const [foo,,,] = parts;' > Error 1/1 1`] = `
"
> 1 | const [foo,,,] = parts;
    |       ^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(2): 'const [foo,,,] = parts;' > Output 1`] = `
"
  1 | const foo = parts[0];
"
`;

exports[`invalid(3): 'const [foo, bar,, baz ,,, qux] = part…' > Code 1`] = `
"
  1 | const [foo, bar,, baz ,,, qux] = parts;
"
`;

exports[`invalid(3): 'const [foo, bar,, baz ,,, qux] = part…' > Error 1/1 1`] = `
"
> 1 | const [foo, bar,, baz ,,, qux] = parts;
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(4): '[,, foo] = bar;' > Code 1`] = `
"
  1 | [,, foo] = bar;
"
`;

exports[`invalid(4): '[,, foo] = bar;' > Error 1/1 1`] = `
"
> 1 | [,, foo] = bar;
    | ^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(5): '({parts: [,, foo]} = bar);' > Code 1`] = `
"
  1 | ({parts: [,, foo]} = bar);
"
`;

exports[`invalid(5): '({parts: [,, foo]} = bar);' > Error 1/1 1`] = `
"
> 1 | ({parts: [,, foo]} = bar);
    |          ^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(6): 'function foo([,, bar]) {}' > Code 1`] = `
"
  1 | function foo([,, bar]) {}
"
`;

exports[`invalid(6): 'function foo([,, bar]) {}' > Error 1/1 1`] = `
"
> 1 | function foo([,, bar]) {}
    |              ^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(7): 'function foo([bar,,, baz]) {}' > Code 1`] = `
"
  1 | function foo([bar,,, baz]) {}
"
`;

exports[`invalid(7): 'function foo([bar,,, baz]) {}' > Error 1/1 1`] = `
"
> 1 | function foo([bar,,, baz]) {}
    |              ^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(8): 'function foo([bar,,,]) {}' > Code 1`] = `
"
  1 | function foo([bar,,,]) {}
"
`;

exports[`invalid(8): 'function foo([bar,,,]) {}' > Error 1/1 1`] = `
"
> 1 | function foo([bar,,,]) {}
    |              ^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(9): 'function foo([bar, baz,, qux ,,, quux…' > Code 1`] = `
"
  1 | function foo([bar, baz,, qux ,,, quux]) {}
"
`;

exports[`invalid(9): 'function foo([bar, baz,, qux ,,, quux…' > Error 1/1 1`] = `
"
> 1 | function foo([bar, baz,, qux ,,, quux]) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(10): 'const [,,...rest] = parts;' > Code 1`] = `
"
  1 | const [,,...rest] = parts;
"
`;

exports[`invalid(10): 'const [,,...rest] = parts;' > Error 1/1 1`] = `
"
> 1 | const [,,...rest] = parts;
    |       ^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(10): 'const [,,...rest] = parts;' > Output 1`] = `
"
  1 | const rest = parts.slice(2);
"
`;

exports[`invalid(11): 'const [,,,] = parts;' > Code 1`] = `
"
  1 | const [,,,] = parts;
"
`;

exports[`invalid(11): 'const [,,,] = parts;' > Error 1/1 1`] = `
"
> 1 | const [,,,] = parts;
    |       ^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(12): 'const [,,...rest] = new Array;' > Code 1`] = `
"
  1 | const [,,...rest] = new Array;
"
`;

exports[`invalid(12): 'const [,,...rest] = new Array;' > Error 1/1 1`] = `
"
> 1 | const [,,...rest] = new Array;
    |       ^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(12): 'const [,,...rest] = new Array;' > Output 1`] = `
"
  1 | const rest = (new Array).slice(2);
"
`;

exports[`invalid(13): 'const [,,...rest] = (0, foo);' > Code 1`] = `
"
  1 | const [,,...rest] = (0, foo);
"
`;

exports[`invalid(13): 'const [,,...rest] = (0, foo);' > Error 1/1 1`] = `
"
> 1 | const [,,...rest] = (0, foo);
    |       ^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(13): 'const [,,...rest] = (0, foo);' > Output 1`] = `
"
  1 | const rest = (0, foo).slice(2);
"
`;

exports[`invalid(14): 'let [,,thirdElement] = new Array;' > Code 1`] = `
"
  1 | let [,,thirdElement] = new Array;
"
`;

exports[`invalid(14): 'let [,,thirdElement] = new Array;' > Error 1/1 1`] = `
"
> 1 | let [,,thirdElement] = new Array;
    |     ^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(14): 'let [,,thirdElement] = new Array;' > Output 1`] = `
"
  1 | let thirdElement = (new Array)[2];
"
`;

exports[`invalid(15): 'var [,,thirdElement] = (((0, foo)));' > Code 1`] = `
"
  1 | var [,,thirdElement] = (((0, foo)));
"
`;

exports[`invalid(15): 'var [,,thirdElement] = (((0, foo)));' > Error 1/1 1`] = `
"
> 1 | var [,,thirdElement] = (((0, foo)));
    |     ^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(15): 'var [,,thirdElement] = (((0, foo)));' > Output 1`] = `
"
  1 | var thirdElement = (((0, foo)))[2];
"
`;

exports[`invalid(16): 'let [,,[,,thirdElementInThirdElement]…' > Code 1`] = `
"
  1 | let [,,[,,thirdElementInThirdElement]] = foo
"
`;

exports[`invalid(16): 'let [,,[,,thirdElementInThirdElement]…' > Error 1/2 1`] = `
"
> 1 | let [,,[,,thirdElementInThirdElement]] = foo
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(16): 'let [,,[,,thirdElementInThirdElement]…' > Error 2/2 1`] = `
"
> 1 | let [,,[,,thirdElementInThirdElement]] = foo
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(16): 'let [,,[,,thirdElementInThirdElement]…' > Output 1`] = `
"
  1 | let thirdElementInThirdElement = foo[2][2]
"
`;

exports[`invalid(17): 'let [,,{propertyOfThirdElement}] = foo' > Code 1`] = `
"
  1 | let [,,{propertyOfThirdElement}] = foo
"
`;

exports[`invalid(17): 'let [,,{propertyOfThirdElement}] = foo' > Error 1/1 1`] = `
"
> 1 | let [,,{propertyOfThirdElement}] = foo
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(17): 'let [,,{propertyOfThirdElement}] = foo' > Output 1`] = `
"
  1 | let {propertyOfThirdElement} = foo[2]
"
`;

exports[`invalid(18): 'let [,,thirdElement] = foo, anotherVa…' > Code 1`] = `
"
  1 | let [,,thirdElement] = foo, anotherVariable = bar;
"
`;

exports[`invalid(18): 'let [,,thirdElement] = foo, anotherVa…' > Error 1/1 1`] = `
"
> 1 | let [,,thirdElement] = foo, anotherVariable = bar;
    |     ^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(18): 'let [,,thirdElement] = foo, anotherVa…' > Output 1`] = `
"
  1 | let thirdElement = foo[2], anotherVariable = bar;
"
`;

exports[`invalid(19): 'let [,,thirdElement = {}] = foo;' > Code 1`] = `
"
  1 | let [,,thirdElement = {}] = foo;
"
`;

exports[`invalid(19): 'let [,,thirdElement = {}] = foo;' > Error 1/1 1`] = `
"
> 1 | let [,,thirdElement = {}] = foo;
    |     ^^^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(20): 'for (const [, , id] of shuffle(list))…' > Code 1`] = `
"
  1 | for (const [, , id] of shuffle(list)) {}
"
`;

exports[`invalid(20): 'for (const [, , id] of shuffle(list))…' > Error 1/1 1`] = `
"
> 1 | for (const [, , id] of shuffle(list)) {}
    |            ^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(21): 'let[,,thirdElement] = foo;' > Code 1`] = `
"
  1 | let[,,thirdElement] = foo;
"
`;

exports[`invalid(21): 'let[,,thirdElement] = foo;' > Error 1/1 1`] = `
"
> 1 | let[,,thirdElement] = foo;
    |    ^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(21): 'let[,,thirdElement] = foo;' > Output 1`] = `
"
  1 | let thirdElement = foo[2];
"
`;

exports[`invalid(22): 'let[,,...thirdElement] = foo;' > Code 1`] = `
"
  1 | let[,,...thirdElement] = foo;
"
`;

exports[`invalid(22): 'let[,,...thirdElement] = foo;' > Error 1/1 1`] = `
"
> 1 | let[,,...thirdElement] = foo;
    |    ^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(22): 'let[,,...thirdElement] = foo;' > Output 1`] = `
"
  1 | let thirdElement = foo.slice(2);
"
`;

exports[`invalid(23): 'const[,,thirdElement] = foo;' > Code 1`] = `
"
  1 | const[,,thirdElement] = foo;
"
`;

exports[`invalid(23): 'const[,,thirdElement] = foo;' > Error 1/1 1`] = `
"
> 1 | const[,,thirdElement] = foo;
    |      ^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(23): 'const[,,thirdElement] = foo;' > Output 1`] = `
"
  1 | const thirdElement = foo[2];
"
`;

exports[`invalid(24): 'const[,,...thirdElement] = foo;' > Code 1`] = `
"
  1 | const[,,...thirdElement] = foo;
"
`;

exports[`invalid(24): 'const[,,...thirdElement] = foo;' > Error 1/1 1`] = `
"
> 1 | const[,,...thirdElement] = foo;
    |      ^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(24): 'const[,,...thirdElement] = foo;' > Output 1`] = `
"
  1 | const thirdElement = foo.slice(2);
"
`;

exports[`invalid(25): 'var[,,thirdElement] = foo;' > Code 1`] = `
"
  1 | var[,,thirdElement] = foo;
"
`;

exports[`invalid(25): 'var[,,thirdElement] = foo;' > Error 1/1 1`] = `
"
> 1 | var[,,thirdElement] = foo;
    |    ^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(25): 'var[,,thirdElement] = foo;' > Output 1`] = `
"
  1 | var thirdElement = foo[2];
"
`;

exports[`invalid(26): 'var[,,...thirdElement] = foo;' > Code 1`] = `
"
  1 | var[,,...thirdElement] = foo;
"
`;

exports[`invalid(26): 'var[,,...thirdElement] = foo;' > Error 1/1 1`] = `
"
> 1 | var[,,...thirdElement] = foo;
    |    ^^^^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(26): 'var[,,...thirdElement] = foo;' > Output 1`] = `
"
  1 | var thirdElement = foo.slice(2);
"
`;

exports[`invalid(27): 'let[]=[],[,,thirdElement] = foo;' > Code 1`] = `
"
  1 | let[]=[],[,,thirdElement] = foo;
"
`;

exports[`invalid(27): 'let[]=[],[,,thirdElement] = foo;' > Error 1/1 1`] = `
"
> 1 | let[]=[],[,,thirdElement] = foo;
    |          ^^^^^^^^^^^^^^^^ Array destructuring may not contain consecutive ignored values.
"
`;

exports[`invalid(27): 'let[]=[],[,,thirdElement] = foo;' > Output 1`] = `
"
  1 | let[]=[],thirdElement = foo[2];
"
`;
