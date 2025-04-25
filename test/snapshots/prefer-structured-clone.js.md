// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '_.cloneDeep(foo)' > Code 1`] = `
"
  1 | _.cloneDeep(foo)
"
`;

exports[`invalid(0): '_.cloneDeep(foo)' > Error 1/1 1`] = `
"
> 1 | _.cloneDeep(foo)
    | ^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`_.cloneDeep(…)\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo)
"
`;

exports[`invalid(0): 'JSON.parse(JSON.stringify(foo))' > Code 1`] = `
"
  1 | JSON.parse(JSON.stringify(foo))
"
`;

exports[`invalid(0): 'JSON.parse(JSON.stringify(foo))' > Error 1/1 1`] = `
"
> 1 | JSON.parse(JSON.stringify(foo))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`JSON.parse(JSON.stringify(…))\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo)
"
`;

exports[`invalid(1): 'JSON.parse(JSON.stringify(foo),)' > Code 1`] = `
"
  1 | JSON.parse(JSON.stringify(foo),)
"
`;

exports[`invalid(1): 'JSON.parse(JSON.stringify(foo),)' > Error 1/1 1`] = `
"
> 1 | JSON.parse(JSON.stringify(foo),)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`JSON.parse(JSON.stringify(…))\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo,)
"
`;

exports[`invalid(1): 'lodash.cloneDeep(foo)' > Code 1`] = `
"
  1 | lodash.cloneDeep(foo)
"
`;

exports[`invalid(1): 'lodash.cloneDeep(foo)' > Error 1/1 1`] = `
"
> 1 | lodash.cloneDeep(foo)
    | ^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`lodash.cloneDeep(…)\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo)
"
`;

exports[`invalid(2): 'JSON.parse(JSON.stringify(foo,))' > Code 1`] = `
"
  1 | JSON.parse(JSON.stringify(foo,))
"
`;

exports[`invalid(2): 'JSON.parse(JSON.stringify(foo,))' > Error 1/1 1`] = `
"
> 1 | JSON.parse(JSON.stringify(foo,))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`JSON.parse(JSON.stringify(…))\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo)
"
`;

exports[`invalid(2): 'lodash.cloneDeep(foo,)' > Code 1`] = `
"
  1 | lodash.cloneDeep(foo,)
"
`;

exports[`invalid(2): 'lodash.cloneDeep(foo,)' > Error 1/1 1`] = `
"
> 1 | lodash.cloneDeep(foo,)
    | ^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`lodash.cloneDeep(…)\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo,)
"
`;

exports[`invalid(3): 'JSON.parse(JSON.stringify(foo,),)' > Code 1`] = `
"
  1 | JSON.parse(JSON.stringify(foo,),)
"
`;

exports[`invalid(3): 'JSON.parse(JSON.stringify(foo,),)' > Error 1/1 1`] = `
"
> 1 | JSON.parse(JSON.stringify(foo,),)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`JSON.parse(JSON.stringify(…))\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo,)
"
`;

exports[`invalid(3): 'myCustomDeepCloneFunction(foo,)' > Code 1`] = `
"
  1 | myCustomDeepCloneFunction(foo,)
"
`;

exports[`invalid(3): 'myCustomDeepCloneFunction(foo,)' > Error 1/1 1`] = `
"
> 1 | myCustomDeepCloneFunction(foo,)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`myCustomDeepCloneFunction(…)\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo,)
"
`;

exports[`invalid(3): 'myCustomDeepCloneFunction(foo,)' > Options 1`] = `
"
[
  {
    "functions": [
      "myCustomDeepCloneFunction"
    ]
  }
]
"
`;

exports[`invalid(4): 'JSON.parse( ((JSON.stringify)) (foo))' > Code 1`] = `
"
  1 | JSON.parse( ((JSON.stringify)) (foo))
"
`;

exports[`invalid(4): 'JSON.parse( ((JSON.stringify)) (foo))' > Error 1/1 1`] = `
"
> 1 | JSON.parse( ((JSON.stringify)) (foo))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`JSON.parse(JSON.stringify(…))\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(  foo)
"
`;

exports[`invalid(4): 'my.cloneDeep(foo,)' > Code 1`] = `
"
  1 | my.cloneDeep(foo,)
"
`;

exports[`invalid(4): 'my.cloneDeep(foo,)' > Error 1/1 1`] = `
"
> 1 | my.cloneDeep(foo,)
    | ^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`my.cloneDeep(…)\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone(foo,)
"
`;

exports[`invalid(4): 'my.cloneDeep(foo,)' > Options 1`] = `
"
[
  {
    "functions": [
      "my.cloneDeep"
    ]
  }
]
"
`;

exports[`invalid(5): '(( JSON.parse)) (JSON.stringify(foo))' > Code 1`] = `
"
  1 | (( JSON.parse)) (JSON.stringify(foo))
"
`;

exports[`invalid(5): '(( JSON.parse)) (JSON.stringify(foo))' > Error 1/1 1`] = `
"
> 1 | (( JSON.parse)) (JSON.stringify(foo))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`JSON.parse(JSON.stringify(…))\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | (( structuredClone)) (foo)
"
`;

exports[`invalid(6): 'JSON.parse(JSON.stringify( ((foo)) ))' > Code 1`] = `
"
  1 | JSON.parse(JSON.stringify( ((foo)) ))
"
`;

exports[`invalid(6): 'JSON.parse(JSON.stringify( ((foo)) ))' > Error 1/1 1`] = `
"
> 1 | JSON.parse(JSON.stringify( ((foo)) ))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`JSON.parse(JSON.stringify(…))\` to create a deep clone.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | structuredClone( ((foo)) )
"
`;

exports[`invalid(7): 'function foo() {\\n\\treturn JSON\\n\\t\\t…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	return JSON
  3 | 		.parse(
  4 | 			JSON.
  5 | 				stringify(
  6 | 					bar,
  7 | 				),
  8 | 		);
  9 | }
"
`;

exports[`invalid(7): 'function foo() {\\n\\treturn JSON\\n\\t\\t…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	return JSON
    | 	       ^^^^
> 3 | 		.parse(
    | ^^^^^^^^^
> 4 | 			JSON.
    | ^^^^^^^^^
> 5 | 				stringify(
    | ^^^^^^^^^^^^^^ Prefer \`structuredClone(…)\` over \`JSON.parse(JSON.stringify(…))\` to create a deep clone.
  6 | 					bar,
  7 | 				),
  8 | 		);
  9 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`structuredClone(…)\`.
  1 | function foo() {
  2 | 	return structuredClone(
  3 | 			
  4 | 					bar
  5 | 				,
  6 | 		);
  7 | }
"
`;
