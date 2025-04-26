// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'class Foo extends EventEmitter {}' > Code 1`] = `
"
  1 | class Foo extends EventEmitter {}
"
`;

exports[`invalid(0): 'class Foo extends EventEmitter {}' > Error 1/1 1`] = `
"
> 1 | class Foo extends EventEmitter {}
    |                   ^^^^^^^^^^^^ Prefer \`EventTarget\` over \`EventEmitter\`.
"
`;

exports[`invalid(1): 'class Foo extends EventEmitter { some…' > Code 1`] = `
"
  1 | class Foo extends EventEmitter { someMethod() {} }
"
`;

exports[`invalid(1): 'class Foo extends EventEmitter { some…' > Error 1/1 1`] = `
"
> 1 | class Foo extends EventEmitter { someMethod() {} }
    |                   ^^^^^^^^^^^^ Prefer \`EventTarget\` over \`EventEmitter\`.
"
`;

exports[`invalid(2): 'const Foo = class extends EventEmitte…' > Code 1`] = `
"
  1 | const Foo = class extends EventEmitter {}
"
`;

exports[`invalid(2): 'const Foo = class extends EventEmitte…' > Error 1/1 1`] = `
"
> 1 | const Foo = class extends EventEmitter {}
    |                           ^^^^^^^^^^^^ Prefer \`EventTarget\` over \`EventEmitter\`.
"
`;

exports[`invalid(3): 'class Foo extends EventEmitter {\\n\\ta…' > Code 1`] = `
"
  1 | class Foo extends EventEmitter {
  2 | 	addListener() {}
  3 | 	removeListener() {}
  4 | }
"
`;

exports[`invalid(3): 'class Foo extends EventEmitter {\\n\\ta…' > Error 1/1 1`] = `
"
> 1 | class Foo extends EventEmitter {
    |                   ^^^^^^^^^^^^ Prefer \`EventTarget\` over \`EventEmitter\`.
  2 | 	addListener() {}
  3 | 	removeListener() {}
  4 | }
"
`;

exports[`invalid(4): 'new EventEmitter' > Code 1`] = `
"
  1 | new EventEmitter
"
`;

exports[`invalid(4): 'new EventEmitter' > Error 1/1 1`] = `
"
> 1 | new EventEmitter
    |     ^^^^^^^^^^^^ Prefer \`EventTarget\` over \`EventEmitter\`.
"
`;

exports[`invalid(5): 'const emitter = new EventEmitter;' > Code 1`] = `
"
  1 | const emitter = new EventEmitter;
"
`;

exports[`invalid(5): 'const emitter = new EventEmitter;' > Error 1/1 1`] = `
"
> 1 | const emitter = new EventEmitter;
    |                     ^^^^^^^^^^^^ Prefer \`EventTarget\` over \`EventEmitter\`.
"
`;

exports[`invalid(6): 'for (const {EventEmitter} of []) {new…' > Code 1`] = `
"
  1 | for (const {EventEmitter} of []) {new EventEmitter}
"
`;

exports[`invalid(6): 'for (const {EventEmitter} of []) {new…' > Error 1/1 1`] = `
"
> 1 | for (const {EventEmitter} of []) {new EventEmitter}
    |                                       ^^^^^^^^^^^^ Prefer \`EventTarget\` over \`EventEmitter\`.
"
`;

exports[`invalid(7): 'for (const EventEmitter of []) {new E…' > Code 1`] = `
"
  1 | for (const EventEmitter of []) {new EventEmitter}
"
`;

exports[`invalid(7): 'for (const EventEmitter of []) {new E…' > Error 1/1 1`] = `
"
> 1 | for (const EventEmitter of []) {new EventEmitter}
    |                                     ^^^^^^^^^^^^ Prefer \`EventTarget\` over \`EventEmitter\`.
"
`;
