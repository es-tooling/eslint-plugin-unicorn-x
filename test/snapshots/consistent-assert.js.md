// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'import assert from \\'assert\\';\\nasser…' > Code 1`] = `
"
  1 | import assert from 'assert';
  2 | assert(foo)
"
`;

exports[`invalid(0): 'import assert from \\'assert\\';\\nasser…' > Error 1/1 1`] = `
"
  1 | import assert from 'assert';
> 2 | assert(foo)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
"
`;

exports[`invalid(0): 'import assert from \\'assert\\';\\nasser…' > Output 1`] = `
"
  1 | import assert from 'assert';
  2 | assert.ok(foo)
"
`;

exports[`invalid(1): 'import assert from \\'node:assert\\';\\n…' > Code 1`] = `
"
  1 | import assert from 'node:assert';
  2 | assert(foo)
"
`;

exports[`invalid(1): 'import assert from \\'node:assert\\';\\n…' > Error 1/1 1`] = `
"
  1 | import assert from 'node:assert';
> 2 | assert(foo)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
"
`;

exports[`invalid(1): 'import assert from \\'node:assert\\';\\n…' > Output 1`] = `
"
  1 | import assert from 'node:assert';
  2 | assert.ok(foo)
"
`;

exports[`invalid(2): 'import assert from \\'assert/strict\\';…' > Code 1`] = `
"
  1 | import assert from 'assert/strict';
  2 | assert(foo)
"
`;

exports[`invalid(2): 'import assert from \\'assert/strict\\';…' > Error 1/1 1`] = `
"
  1 | import assert from 'assert/strict';
> 2 | assert(foo)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
"
`;

exports[`invalid(2): 'import assert from \\'assert/strict\\';…' > Output 1`] = `
"
  1 | import assert from 'assert/strict';
  2 | assert.ok(foo)
"
`;

exports[`invalid(3): 'import assert from \\'node:assert/stri…' > Code 1`] = `
"
  1 | import assert from 'node:assert/strict';
  2 | assert(foo)
"
`;

exports[`invalid(3): 'import assert from \\'node:assert/stri…' > Error 1/1 1`] = `
"
  1 | import assert from 'node:assert/strict';
> 2 | assert(foo)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
"
`;

exports[`invalid(3): 'import assert from \\'node:assert/stri…' > Output 1`] = `
"
  1 | import assert from 'node:assert/strict';
  2 | assert.ok(foo)
"
`;

exports[`invalid(4): 'import customAssert from \\'assert\\';\\…' > Code 1`] = `
"
  1 | import customAssert from 'assert';
  2 | customAssert(foo)
"
`;

exports[`invalid(4): 'import customAssert from \\'assert\\';\\…' > Error 1/1 1`] = `
"
  1 | import customAssert from 'assert';
> 2 | customAssert(foo)
    | ^^^^^^^^^^^^ Prefer \`customAssert.ok(…)\` over \`customAssert(…)\`.
"
`;

exports[`invalid(4): 'import customAssert from \\'assert\\';\\…' > Output 1`] = `
"
  1 | import customAssert from 'assert';
  2 | customAssert.ok(foo)
"
`;

exports[`invalid(5): 'import customAssert from \\'node:asser…' > Code 1`] = `
"
  1 | import customAssert from 'node:assert';
  2 | customAssert(foo)
"
`;

exports[`invalid(5): 'import customAssert from \\'node:asser…' > Error 1/1 1`] = `
"
  1 | import customAssert from 'node:assert';
> 2 | customAssert(foo)
    | ^^^^^^^^^^^^ Prefer \`customAssert.ok(…)\` over \`customAssert(…)\`.
"
`;

exports[`invalid(5): 'import customAssert from \\'node:asser…' > Output 1`] = `
"
  1 | import customAssert from 'node:assert';
  2 | customAssert.ok(foo)
"
`;

exports[`invalid(6): 'import assert from \\'assert\\';\\nasser…' > Code 1`] = `
"
  1 | import assert from 'assert';
  2 | assert(foo)
  3 | assert(bar)
  4 | assert(baz)
"
`;

exports[`invalid(6): 'import assert from \\'assert\\';\\nasser…' > Error 1/3 1`] = `
"
  1 | import assert from 'assert';
> 2 | assert(foo)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
  3 | assert(bar)
  4 | assert(baz)
"
`;

exports[`invalid(6): 'import assert from \\'assert\\';\\nasser…' > Error 2/3 1`] = `
"
  1 | import assert from 'assert';
  2 | assert(foo)
> 3 | assert(bar)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
  4 | assert(baz)
"
`;

exports[`invalid(6): 'import assert from \\'assert\\';\\nasser…' > Error 3/3 1`] = `
"
  1 | import assert from 'assert';
  2 | assert(foo)
  3 | assert(bar)
> 4 | assert(baz)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
"
`;

exports[`invalid(6): 'import assert from \\'assert\\';\\nasser…' > Output 1`] = `
"
  1 | import assert from 'assert';
  2 | assert.ok(foo)
  3 | assert.ok(bar)
  4 | assert.ok(baz)
"
`;

exports[`invalid(7): 'import {strict} from \\'assert\\';\\nstr…' > Code 1`] = `
"
  1 | import {strict} from 'assert';
  2 | strict(foo)
"
`;

exports[`invalid(7): 'import {strict} from \\'assert\\';\\nstr…' > Error 1/1 1`] = `
"
  1 | import {strict} from 'assert';
> 2 | strict(foo)
    | ^^^^^^ Prefer \`strict.ok(…)\` over \`strict(…)\`.
"
`;

exports[`invalid(7): 'import {strict} from \\'assert\\';\\nstr…' > Output 1`] = `
"
  1 | import {strict} from 'assert';
  2 | strict.ok(foo)
"
`;

exports[`invalid(8): 'import {strict as assert} from \\'asse…' > Code 1`] = `
"
  1 | import {strict as assert} from 'assert';
  2 | assert(foo)
"
`;

exports[`invalid(8): 'import {strict as assert} from \\'asse…' > Error 1/1 1`] = `
"
  1 | import {strict as assert} from 'assert';
> 2 | assert(foo)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
"
`;

exports[`invalid(8): 'import {strict as assert} from \\'asse…' > Output 1`] = `
"
  1 | import {strict as assert} from 'assert';
  2 | assert.ok(foo)
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Code 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
   7 | c(foo);
   8 | d(foo);
   9 | e(foo);
  10 | f(foo);
  11 | g(foo);
  12 | h(foo);
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 1/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
>  5 | a(foo);
     | ^ Prefer \`a.ok(…)\` over \`a(…)\`.
   6 | b(foo);
   7 | c(foo);
   8 | d(foo);
   9 | e(foo);
  10 | f(foo);
  11 | g(foo);
  12 | h(foo);
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 2/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
>  6 | b(foo);
     | ^ Prefer \`b.ok(…)\` over \`b(…)\`.
   7 | c(foo);
   8 | d(foo);
   9 | e(foo);
  10 | f(foo);
  11 | g(foo);
  12 | h(foo);
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 3/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
>  7 | c(foo);
     | ^ Prefer \`c.ok(…)\` over \`c(…)\`.
   8 | d(foo);
   9 | e(foo);
  10 | f(foo);
  11 | g(foo);
  12 | h(foo);
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 4/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
   7 | c(foo);
>  8 | d(foo);
     | ^ Prefer \`d.ok(…)\` over \`d(…)\`.
   9 | e(foo);
  10 | f(foo);
  11 | g(foo);
  12 | h(foo);
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 5/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
   7 | c(foo);
   8 | d(foo);
>  9 | e(foo);
     | ^ Prefer \`e.ok(…)\` over \`e(…)\`.
  10 | f(foo);
  11 | g(foo);
  12 | h(foo);
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 6/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
   7 | c(foo);
   8 | d(foo);
   9 | e(foo);
> 10 | f(foo);
     | ^ Prefer \`f.ok(…)\` over \`f(…)\`.
  11 | g(foo);
  12 | h(foo);
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 7/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
   7 | c(foo);
   8 | d(foo);
   9 | e(foo);
  10 | f(foo);
> 11 | g(foo);
     | ^ Prefer \`g.ok(…)\` over \`g(…)\`.
  12 | h(foo);
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 8/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
   7 | c(foo);
   8 | d(foo);
   9 | e(foo);
  10 | f(foo);
  11 | g(foo);
> 12 | h(foo);
     | ^ Prefer \`h.ok(…)\` over \`h(…)\`.
  13 | i(foo);
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 9/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
   7 | c(foo);
   8 | d(foo);
   9 | e(foo);
  10 | f(foo);
  11 | g(foo);
  12 | h(foo);
> 13 | i(foo);
     | ^ Prefer \`i.ok(…)\` over \`i(…)\`.
  14 | j(foo);
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Error 10/10 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a(foo);
   6 | b(foo);
   7 | c(foo);
   8 | d(foo);
   9 | e(foo);
  10 | f(foo);
  11 | g(foo);
  12 | h(foo);
  13 | i(foo);
> 14 | j(foo);
     | ^ Prefer \`j.ok(…)\` over \`j(…)\`.
"
`;

exports[`invalid(9): 'import a, {strict as b, default as c}…' > Output 1`] = `
"
   1 | import a, {strict as b, default as c} from 'node:assert';
   2 | import d, {strict as e, default as f} from 'assert';
   3 | import g, {default as h} from 'node:assert/strict';
   4 | import i, {default as j} from 'assert/strict';
   5 | a.ok(foo);
   6 | b.ok(foo);
   7 | c.ok(foo);
   8 | d.ok(foo);
   9 | e.ok(foo);
  10 | f.ok(foo);
  11 | g.ok(foo);
  12 | h.ok(foo);
  13 | i.ok(foo);
  14 | j.ok(foo);
"
`;

exports[`invalid(10): 'import assert from \\'node:assert\\';\\n…' > Code 1`] = `
"
  1 | import assert from 'node:assert';
  2 | assert?.(foo)
"
`;

exports[`invalid(10): 'import assert from \\'node:assert\\';\\n…' > Error 1/1 1`] = `
"
  1 | import assert from 'node:assert';
> 2 | assert?.(foo)
    | ^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
"
`;

exports[`invalid(10): 'import assert from \\'node:assert\\';\\n…' > Output 1`] = `
"
  1 | import assert from 'node:assert';
  2 | assert.ok?.(foo)
"
`;

exports[`invalid(11): 'import assert from \\'assert\\';\\n\\n((\\…' > Code 1`] = `
"
   1 | import assert from 'assert';
   2 |
   3 | ((
   4 | 	/* comment */ ((
   5 | 		/* comment */
   6 | 		assert
   7 | 		/* comment */
   8 | 		)) /* comment */
   9 | 		(/* comment */ typeof foo === 'string', 'foo must be a string' /** after comment */)
  10 | ));
"
`;

exports[`invalid(11): 'import assert from \\'assert\\';\\n\\n((\\…' > Error 1/1 1`] = `
"
   1 | import assert from 'assert';
   2 |
   3 | ((
   4 | 	/* comment */ ((
   5 | 		/* comment */
>  6 | 		assert
     | 		^^^^^^ Prefer \`assert.ok(…)\` over \`assert(…)\`.
   7 | 		/* comment */
   8 | 		)) /* comment */
   9 | 		(/* comment */ typeof foo === 'string', 'foo must be a string' /** after comment */)
  10 | ));
"
`;

exports[`invalid(11): 'import assert from \\'assert\\';\\n\\n((\\…' > Output 1`] = `
"
   1 | import assert from 'assert';
   2 |
   3 | ((
   4 | 	/* comment */ ((
   5 | 		/* comment */
   6 | 		assert.ok
   7 | 		/* comment */
   8 | 		)) /* comment */
   9 | 		(/* comment */ typeof foo === 'string', 'foo must be a string' /** after comment */)
  10 | ));
"
`;
