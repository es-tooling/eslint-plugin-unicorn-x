// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'throw Error()' > Code 1`] = `
"
  1 | throw Error()
"
`;

exports[`invalid(0): 'throw Error()' > Error 1/1 1`] = `
"
> 1 | throw Error()
    |       ^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(0): 'throw Error()' > Output 1`] = `
"
  1 | throw new Error()
"
`;

exports[`invalid(1): 'throw (Error)()' > Code 1`] = `
"
  1 | throw (Error)()
"
`;

exports[`invalid(1): 'throw (Error)()' > Error 1/1 1`] = `
"
> 1 | throw (Error)()
    |       ^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(1): 'throw (Error)()' > Output 1`] = `
"
  1 | throw new (Error)()
"
`;

exports[`invalid(2): 'throw lib.Error()' > Code 1`] = `
"
  1 | throw lib.Error()
"
`;

exports[`invalid(2): 'throw lib.Error()' > Error 1/1 1`] = `
"
> 1 | throw lib.Error()
    |       ^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(2): 'throw lib.Error()' > Output 1`] = `
"
  1 | throw new lib.Error()
"
`;

exports[`invalid(3): 'throw lib.mod.Error()' > Code 1`] = `
"
  1 | throw lib.mod.Error()
"
`;

exports[`invalid(3): 'throw lib.mod.Error()' > Error 1/1 1`] = `
"
> 1 | throw lib.mod.Error()
    |       ^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(3): 'throw lib.mod.Error()' > Output 1`] = `
"
  1 | throw new lib.mod.Error()
"
`;

exports[`invalid(4): 'throw lib[mod].Error()' > Code 1`] = `
"
  1 | throw lib[mod].Error()
"
`;

exports[`invalid(4): 'throw lib[mod].Error()' > Error 1/1 1`] = `
"
> 1 | throw lib[mod].Error()
    |       ^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(4): 'throw lib[mod].Error()' > Output 1`] = `
"
  1 | throw new lib[mod].Error()
"
`;

exports[`invalid(5): 'throw (lib.mod).Error()' > Code 1`] = `
"
  1 | throw (lib.mod).Error()
"
`;

exports[`invalid(5): 'throw (lib.mod).Error()' > Error 1/1 1`] = `
"
> 1 | throw (lib.mod).Error()
    |       ^^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(5): 'throw (lib.mod).Error()' > Output 1`] = `
"
  1 | throw new (lib.mod).Error()
"
`;

exports[`invalid(6): 'throw Error(\\'foo\\')' > Code 1`] = `
"
  1 | throw Error('foo')
"
`;

exports[`invalid(6): 'throw Error(\\'foo\\')' > Error 1/1 1`] = `
"
> 1 | throw Error('foo')
    |       ^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(6): 'throw Error(\\'foo\\')' > Output 1`] = `
"
  1 | throw new Error('foo')
"
`;

exports[`invalid(7): 'throw CustomError(\\'foo\\')' > Code 1`] = `
"
  1 | throw CustomError('foo')
"
`;

exports[`invalid(7): 'throw CustomError(\\'foo\\')' > Error 1/1 1`] = `
"
> 1 | throw CustomError('foo')
    |       ^^^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(7): 'throw CustomError(\\'foo\\')' > Output 1`] = `
"
  1 | throw new CustomError('foo')
"
`;

exports[`invalid(8): 'throw FooBarBazError(\\'foo\\')' > Code 1`] = `
"
  1 | throw FooBarBazError('foo')
"
`;

exports[`invalid(8): 'throw FooBarBazError(\\'foo\\')' > Error 1/1 1`] = `
"
> 1 | throw FooBarBazError('foo')
    |       ^^^^^^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(8): 'throw FooBarBazError(\\'foo\\')' > Output 1`] = `
"
  1 | throw new FooBarBazError('foo')
"
`;

exports[`invalid(9): 'throw ABCError(\\'foo\\')' > Code 1`] = `
"
  1 | throw ABCError('foo')
"
`;

exports[`invalid(9): 'throw ABCError(\\'foo\\')' > Error 1/1 1`] = `
"
> 1 | throw ABCError('foo')
    |       ^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(9): 'throw ABCError(\\'foo\\')' > Output 1`] = `
"
  1 | throw new ABCError('foo')
"
`;

exports[`invalid(10): 'throw Abc3Error(\\'foo\\')' > Code 1`] = `
"
  1 | throw Abc3Error('foo')
"
`;

exports[`invalid(10): 'throw Abc3Error(\\'foo\\')' > Error 1/1 1`] = `
"
> 1 | throw Abc3Error('foo')
    |       ^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(10): 'throw Abc3Error(\\'foo\\')' > Output 1`] = `
"
  1 | throw new Abc3Error('foo')
"
`;

exports[`invalid(11): 'throw TypeError()' > Code 1`] = `
"
  1 | throw TypeError()
"
`;

exports[`invalid(11): 'throw TypeError()' > Error 1/1 1`] = `
"
> 1 | throw TypeError()
    |       ^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(11): 'throw TypeError()' > Output 1`] = `
"
  1 | throw new TypeError()
"
`;

exports[`invalid(12): 'throw EvalError()' > Code 1`] = `
"
  1 | throw EvalError()
"
`;

exports[`invalid(12): 'throw EvalError()' > Error 1/1 1`] = `
"
> 1 | throw EvalError()
    |       ^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(12): 'throw EvalError()' > Output 1`] = `
"
  1 | throw new EvalError()
"
`;

exports[`invalid(13): 'throw RangeError()' > Code 1`] = `
"
  1 | throw RangeError()
"
`;

exports[`invalid(13): 'throw RangeError()' > Error 1/1 1`] = `
"
> 1 | throw RangeError()
    |       ^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(13): 'throw RangeError()' > Output 1`] = `
"
  1 | throw new RangeError()
"
`;

exports[`invalid(14): 'throw ReferenceError()' > Code 1`] = `
"
  1 | throw ReferenceError()
"
`;

exports[`invalid(14): 'throw ReferenceError()' > Error 1/1 1`] = `
"
> 1 | throw ReferenceError()
    |       ^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(14): 'throw ReferenceError()' > Output 1`] = `
"
  1 | throw new ReferenceError()
"
`;

exports[`invalid(15): 'throw SyntaxError()' > Code 1`] = `
"
  1 | throw SyntaxError()
"
`;

exports[`invalid(15): 'throw SyntaxError()' > Error 1/1 1`] = `
"
> 1 | throw SyntaxError()
    |       ^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(15): 'throw SyntaxError()' > Output 1`] = `
"
  1 | throw new SyntaxError()
"
`;

exports[`invalid(16): 'throw URIError()' > Code 1`] = `
"
  1 | throw URIError()
"
`;

exports[`invalid(16): 'throw URIError()' > Error 1/1 1`] = `
"
> 1 | throw URIError()
    |       ^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(16): 'throw URIError()' > Output 1`] = `
"
  1 | throw new URIError()
"
`;

exports[`invalid(17): 'throw (( URIError() ))' > Code 1`] = `
"
  1 | throw (( URIError() ))
"
`;

exports[`invalid(17): 'throw (( URIError() ))' > Error 1/1 1`] = `
"
> 1 | throw (( URIError() ))
    |          ^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(17): 'throw (( URIError() ))' > Output 1`] = `
"
  1 | throw (( new URIError() ))
"
`;

exports[`invalid(18): 'throw (( URIError ))()' > Code 1`] = `
"
  1 | throw (( URIError ))()
"
`;

exports[`invalid(18): 'throw (( URIError ))()' > Error 1/1 1`] = `
"
> 1 | throw (( URIError ))()
    |       ^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(18): 'throw (( URIError ))()' > Output 1`] = `
"
  1 | throw new (( URIError ))()
"
`;

exports[`invalid(19): 'throw getGlobalThis().Error()' > Code 1`] = `
"
  1 | throw getGlobalThis().Error()
"
`;

exports[`invalid(19): 'throw getGlobalThis().Error()' > Error 1/1 1`] = `
"
> 1 | throw getGlobalThis().Error()
    |       ^^^^^^^^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(19): 'throw getGlobalThis().Error()' > Output 1`] = `
"
  1 | throw new (getGlobalThis().Error)()
"
`;

exports[`invalid(20): 'throw utils.getGlobalThis().Error()' > Code 1`] = `
"
  1 | throw utils.getGlobalThis().Error()
"
`;

exports[`invalid(20): 'throw utils.getGlobalThis().Error()' > Error 1/1 1`] = `
"
> 1 | throw utils.getGlobalThis().Error()
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(20): 'throw utils.getGlobalThis().Error()' > Output 1`] = `
"
  1 | throw new (utils.getGlobalThis().Error)()
"
`;

exports[`invalid(21): 'throw (( getGlobalThis().Error ))()' > Code 1`] = `
"
  1 | throw (( getGlobalThis().Error ))()
"
`;

exports[`invalid(21): 'throw (( getGlobalThis().Error ))()' > Error 1/1 1`] = `
"
> 1 | throw (( getGlobalThis().Error ))()
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(21): 'throw (( getGlobalThis().Error ))()' > Output 1`] = `
"
  1 | throw new (( getGlobalThis().Error ))()
"
`;

exports[`invalid(22): 'const error = Error()' > Code 1`] = `
"
  1 | const error = Error()
"
`;

exports[`invalid(22): 'const error = Error()' > Error 1/1 1`] = `
"
> 1 | const error = Error()
    |               ^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(22): 'const error = Error()' > Output 1`] = `
"
  1 | const error = new Error()
"
`;

exports[`invalid(23): 'throw Object.assign(Error(), {foo})' > Code 1`] = `
"
  1 | throw Object.assign(Error(), {foo})
"
`;

exports[`invalid(23): 'throw Object.assign(Error(), {foo})' > Error 1/1 1`] = `
"
> 1 | throw Object.assign(Error(), {foo})
    |                     ^^^^^^^ Use \`new\` when creating an error.
"
`;

exports[`invalid(23): 'throw Object.assign(Error(), {foo})' > Output 1`] = `
"
  1 | throw Object.assign(new Error(), {foo})
"
`;

exports[`invalid(24): 'new Promise((resolve, reject) => {\\n\\…' > Code 1`] = `
"
  1 | new Promise((resolve, reject) => {
  2 | 	reject(Error('message'));
  3 | });
"
`;

exports[`invalid(24): 'new Promise((resolve, reject) => {\\n\\…' > Error 1/1 1`] = `
"
  1 | new Promise((resolve, reject) => {
> 2 | 	reject(Error('message'));
    | 	       ^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
  3 | });
"
`;

exports[`invalid(24): 'new Promise((resolve, reject) => {\\n\\…' > Output 1`] = `
"
  1 | new Promise((resolve, reject) => {
  2 | 	reject(new Error('message'));
  3 | });
"
`;

exports[`invalid(25): 'function foo() {\\n\\treturn[globalThis…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	return[globalThis][0].Error('message');
  3 | }
"
`;

exports[`invalid(25): 'function foo() {\\n\\treturn[globalThis…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	return[globalThis][0].Error('message');
    | 	      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`new\` when creating an error.
  3 | }
"
`;

exports[`invalid(25): 'function foo() {\\n\\treturn[globalThis…' > Output 1`] = `
"
  1 | function foo() {
  2 | 	return new [globalThis][0].Error('message');
  3 | }
"
`;
