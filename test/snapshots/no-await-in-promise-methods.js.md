// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'Promise.all([await promise])' > Code 1`] = `
"
  1 | Promise.all([await promise])
"
`;

exports[`invalid(0): 'Promise.all([await promise])' > Error 1/1 1`] = `
"
> 1 | Promise.all([await promise])
    |              ^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([promise])
"
`;

exports[`invalid(1): 'Promise.allSettled([await promise])' > Code 1`] = `
"
  1 | Promise.allSettled([await promise])
"
`;

exports[`invalid(1): 'Promise.allSettled([await promise])' > Error 1/1 1`] = `
"
> 1 | Promise.allSettled([await promise])
    |                     ^^^^^^^^^^^^^ Promise in \`Promise.allSettled()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.allSettled([promise])
"
`;

exports[`invalid(2): 'Promise.any([await promise])' > Code 1`] = `
"
  1 | Promise.any([await promise])
"
`;

exports[`invalid(2): 'Promise.any([await promise])' > Error 1/1 1`] = `
"
> 1 | Promise.any([await promise])
    |              ^^^^^^^^^^^^^ Promise in \`Promise.any()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.any([promise])
"
`;

exports[`invalid(3): 'Promise.race([await promise])' > Code 1`] = `
"
  1 | Promise.race([await promise])
"
`;

exports[`invalid(3): 'Promise.race([await promise])' > Error 1/1 1`] = `
"
> 1 | Promise.race([await promise])
    |               ^^^^^^^^^^^^^ Promise in \`Promise.race()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.race([promise])
"
`;

exports[`invalid(4): 'Promise.all([, await promise])' > Code 1`] = `
"
  1 | Promise.all([, await promise])
"
`;

exports[`invalid(4): 'Promise.all([, await promise])' > Error 1/1 1`] = `
"
> 1 | Promise.all([, await promise])
    |                ^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([, promise])
"
`;

exports[`invalid(5): 'Promise.all([await promise,])' > Code 1`] = `
"
  1 | Promise.all([await promise,])
"
`;

exports[`invalid(5): 'Promise.all([await promise,])' > Error 1/1 1`] = `
"
> 1 | Promise.all([await promise,])
    |              ^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([promise,])
"
`;

exports[`invalid(6): 'Promise.all([await promise],)' > Code 1`] = `
"
  1 | Promise.all([await promise],)
"
`;

exports[`invalid(6): 'Promise.all([await promise],)' > Error 1/1 1`] = `
"
> 1 | Promise.all([await promise],)
    |              ^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([promise],)
"
`;

exports[`invalid(7): 'Promise.all([await (0, promise)],)' > Code 1`] = `
"
  1 | Promise.all([await (0, promise)],)
"
`;

exports[`invalid(7): 'Promise.all([await (0, promise)],)' > Error 1/1 1`] = `
"
> 1 | Promise.all([await (0, promise)],)
    |              ^^^^^^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([(0, promise)],)
"
`;

exports[`invalid(8): 'Promise.all([await (( promise ))])' > Code 1`] = `
"
  1 | Promise.all([await (( promise ))])
"
`;

exports[`invalid(8): 'Promise.all([await (( promise ))])' > Error 1/1 1`] = `
"
> 1 | Promise.all([await (( promise ))])
    |              ^^^^^^^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([(( promise ))])
"
`;

exports[`invalid(9): 'Promise.all([await await promise])' > Code 1`] = `
"
  1 | Promise.all([await await promise])
"
`;

exports[`invalid(9): 'Promise.all([await await promise])' > Error 1/1 1`] = `
"
> 1 | Promise.all([await await promise])
    |              ^^^^^^^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([await promise])
"
`;

exports[`invalid(10): 'Promise.all([...foo, await promise1, …' > Code 1`] = `
"
  1 | Promise.all([...foo, await promise1, await promise2])
"
`;

exports[`invalid(10): 'Promise.all([...foo, await promise1, …' > Error 1/2 1`] = `
"
> 1 | Promise.all([...foo, await promise1, await promise2])
    |                      ^^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([...foo, promise1, await promise2])
"
`;

exports[`invalid(10): 'Promise.all([...foo, await promise1, …' > Error 2/2 1`] = `
"
> 1 | Promise.all([...foo, await promise1, await promise2])
    |                                      ^^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([...foo, await promise1, promise2])
"
`;

exports[`invalid(11): 'Promise.all([await /* comment*/ promi…' > Code 1`] = `
"
  1 | Promise.all([await /* comment*/ promise])
"
`;

exports[`invalid(11): 'Promise.all([await /* comment*/ promi…' > Error 1/1 1`] = `
"
> 1 | Promise.all([await /* comment*/ promise])
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise in \`Promise.all()\` should not be awaited.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove \`await\`.
  1 | Promise.all([/* comment*/ promise])
"
`;
