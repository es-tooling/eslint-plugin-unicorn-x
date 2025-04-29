// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.classList.add("foo");\\nfoo.classL…' > Code 1`] = `
"
  1 | foo.classList.add("foo");
  2 | foo.classList.add("bar");
"
`;

exports[`invalid(0): 'foo.classList.add("foo");\\nfoo.classL…' > Error 1/1 1`] = `
"
  1 | foo.classList.add("foo");
> 2 | foo.classList.add("bar");
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(0): 'foo.classList.add("foo");\\nfoo.classL…' > Output 1`] = `
"
  1 | foo.classList.add("foo", "bar");
"
`;

exports[`invalid(0): 'foo.push(1);\\nfoo.push(2);' > Code 1`] = `
"
  1 | foo.push(1);
  2 | foo.push(2);
"
`;

exports[`invalid(0): 'foo.push(1);\\nfoo.push(2);' > Error 1/1 1`] = `
"
  1 | foo.push(1);
> 2 | foo.push(2);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(0): 'foo.push(1);\\nfoo.push(2);' > Output 1`] = `
"
  1 | foo.push(1, 2);
"
`;

exports[`invalid(0): 'importScripts("foo.js");\\nimportScrip…' > Code 1`] = `
"
  1 | importScripts("foo.js");
  2 | importScripts("bar.js");
"
`;

exports[`invalid(0): 'importScripts("foo.js");\\nimportScrip…' > Error 1/1 1`] = `
"
  1 | importScripts("foo.js");
> 2 | importScripts("bar.js");
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(0): 'importScripts("foo.js");\\nimportScrip…' > Output 1`] = `
"
  1 | importScripts("foo.js", "bar.js");
"
`;

exports[`invalid(1): '(foo.push)(1);\\n(foo.push)(2);' > Code 1`] = `
"
  1 | (foo.push)(1);
  2 | (foo.push)(2);
"
`;

exports[`invalid(1): '(foo.push)(1);\\n(foo.push)(2);' > Error 1/1 1`] = `
"
  1 | (foo.push)(1);
> 2 | (foo.push)(2);
    |      ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(1): '(foo.push)(1);\\n(foo.push)(2);' > Output 1`] = `
"
  1 | (foo.push)(1, 2);
"
`;

exports[`invalid(1): '(importScripts)("foo.js");\\n(importSc…' > Code 1`] = `
"
  1 | (importScripts)("foo.js");
  2 | (importScripts)("bar.js");
"
`;

exports[`invalid(1): '(importScripts)("foo.js");\\n(importSc…' > Error 1/1 1`] = `
"
  1 | (importScripts)("foo.js");
> 2 | (importScripts)("bar.js");
    |  ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(1): '(importScripts)("foo.js");\\n(importSc…' > Output 1`] = `
"
  1 | (importScripts)("foo.js", "bar.js");
"
`;

exports[`invalid(1): 'foo.classList.remove("foo");\\nfoo.cla…' > Code 1`] = `
"
  1 | foo.classList.remove("foo");
  2 | foo.classList.remove("bar");
"
`;

exports[`invalid(1): 'foo.classList.remove("foo");\\nfoo.cla…' > Error 1/1 1`] = `
"
  1 | foo.classList.remove("foo");
> 2 | foo.classList.remove("bar");
    |               ^^^^^^ Do not call \`Element#classList.remove()\` multiple times.
"
`;

exports[`invalid(1): 'foo.classList.remove("foo");\\nfoo.cla…' > Output 1`] = `
"
  1 | foo.classList.remove("foo", "bar");
"
`;

exports[`invalid(2): '(foo.classList.add)("foo");\\n(foo.cla…' > Code 1`] = `
"
  1 | (foo.classList.add)("foo");
  2 | (foo.classList.add)("bar");
"
`;

exports[`invalid(2): '(foo.classList.add)("foo");\\n(foo.cla…' > Error 1/1 1`] = `
"
  1 | (foo.classList.add)("foo");
> 2 | (foo.classList.add)("bar");
    |                ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(2): '(foo.classList.add)("foo");\\n(foo.cla…' > Output 1`] = `
"
  1 | (foo.classList.add)("foo", "bar");
"
`;

exports[`invalid(2): 'foo.bar.push(1);\\nfoo.bar.push(2);' > Code 1`] = `
"
  1 | foo.bar.push(1);
  2 | foo.bar.push(2);
"
`;

exports[`invalid(2): 'foo.bar.push(1);\\nfoo.bar.push(2);' > Error 1/1 1`] = `
"
  1 | foo.bar.push(1);
> 2 | foo.bar.push(2);
    |         ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(2): 'foo.bar.push(1);\\nfoo.bar.push(2);' > Output 1`] = `
"
  1 | foo.bar.push(1, 2);
"
`;

exports[`invalid(2): 'importScripts();\\nimportScripts();' > Code 1`] = `
"
  1 | importScripts();
  2 | importScripts();
"
`;

exports[`invalid(2): 'importScripts();\\nimportScripts();' > Error 1/1 1`] = `
"
  1 | importScripts();
> 2 | importScripts();
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(2): 'importScripts();\\nimportScripts();' > Output 1`] = `
"
  1 | importScripts();
"
`;

exports[`invalid(3): 'foo.bar.classList.add("foo");\\nfoo.ba…' > Code 1`] = `
"
  1 | foo.bar.classList.add("foo");
  2 | foo.bar.classList.add("bar");
"
`;

exports[`invalid(3): 'foo.bar.classList.add("foo");\\nfoo.ba…' > Error 1/1 1`] = `
"
  1 | foo.bar.classList.add("foo");
> 2 | foo.bar.classList.add("bar");
    |                   ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(3): 'foo.bar.classList.add("foo");\\nfoo.ba…' > Output 1`] = `
"
  1 | foo.bar.classList.add("foo", "bar");
"
`;

exports[`invalid(3): 'foo.push(1);\\n(foo).push(2);' > Code 1`] = `
"
  1 | foo.push(1);
  2 | (foo).push(2);
"
`;

exports[`invalid(3): 'foo.push(1);\\n(foo).push(2);' > Error 1/1 1`] = `
"
  1 | foo.push(1);
> 2 | (foo).push(2);
    |       ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(3): 'foo.push(1);\\n(foo).push(2);' > Output 1`] = `
"
  1 | foo.push(1, 2);
"
`;

exports[`invalid(3): 'importScripts("foo.js");\\nimportScrip…' > Code 1`] = `
"
  1 | importScripts("foo.js");
  2 | importScripts();
"
`;

exports[`invalid(3): 'importScripts("foo.js");\\nimportScrip…' > Error 1/1 1`] = `
"
  1 | importScripts("foo.js");
> 2 | importScripts();
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(3): 'importScripts("foo.js");\\nimportScrip…' > Output 1`] = `
"
  1 | importScripts("foo.js");
"
`;

exports[`invalid(4): 'foo.classList.add("foo");\\n(foo).clas…' > Code 1`] = `
"
  1 | foo.classList.add("foo");
  2 | (foo).classList.add("bar");
"
`;

exports[`invalid(4): 'foo.classList.add("foo");\\n(foo).clas…' > Error 1/1 1`] = `
"
  1 | foo.classList.add("foo");
> 2 | (foo).classList.add("bar");
    |                 ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(4): 'foo.classList.add("foo");\\n(foo).clas…' > Output 1`] = `
"
  1 | foo.classList.add("foo", "bar");
"
`;

exports[`invalid(4): 'foo.push();\\nfoo.push();' > Code 1`] = `
"
  1 | foo.push();
  2 | foo.push();
"
`;

exports[`invalid(4): 'foo.push();\\nfoo.push();' > Error 1/1 1`] = `
"
  1 | foo.push();
> 2 | foo.push();
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(4): 'foo.push();\\nfoo.push();' > Output 1`] = `
"
  1 | foo.push();
"
`;

exports[`invalid(4): 'importScripts();\\nimportScripts(2);' > Code 1`] = `
"
  1 | importScripts();
  2 | importScripts(2);
"
`;

exports[`invalid(4): 'importScripts();\\nimportScripts(2);' > Error 1/1 1`] = `
"
  1 | importScripts();
> 2 | importScripts(2);
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(4): 'importScripts();\\nimportScripts(2);' > Output 1`] = `
"
  1 | importScripts(2);
"
`;

exports[`invalid(5): 'foo.classList.add();\\nfoo.classList.a…' > Code 1`] = `
"
  1 | foo.classList.add();
  2 | foo.classList.add();
"
`;

exports[`invalid(5): 'foo.classList.add();\\nfoo.classList.a…' > Error 1/1 1`] = `
"
  1 | foo.classList.add();
> 2 | foo.classList.add();
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(5): 'foo.classList.add();\\nfoo.classList.a…' > Output 1`] = `
"
  1 | foo.classList.add();
"
`;

exports[`invalid(5): 'foo.push(1);\\nfoo.push();' > Code 1`] = `
"
  1 | foo.push(1);
  2 | foo.push();
"
`;

exports[`invalid(5): 'foo.push(1);\\nfoo.push();' > Error 1/1 1`] = `
"
  1 | foo.push(1);
> 2 | foo.push();
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(5): 'foo.push(1);\\nfoo.push();' > Output 1`] = `
"
  1 | foo.push(1);
"
`;

exports[`invalid(5): 'importScripts(a, b);\\nimportScripts((…' > Code 1`] = `
"
  1 | importScripts(a, b);
  2 | importScripts((c), (d));
"
`;

exports[`invalid(5): 'importScripts(a, b);\\nimportScripts((…' > Error 1/1 1`] = `
"
  1 | importScripts(a, b);
> 2 | importScripts((c), (d));
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(5): 'importScripts(a, b);\\nimportScripts((…' > Output 1`] = `
"
  1 | importScripts(a, b, (c), (d));
"
`;

exports[`invalid(6): 'foo.classList.add("foo");\\nfoo.classL…' > Code 1`] = `
"
  1 | foo.classList.add("foo");
  2 | foo.classList.add();
"
`;

exports[`invalid(6): 'foo.classList.add("foo");\\nfoo.classL…' > Error 1/1 1`] = `
"
  1 | foo.classList.add("foo");
> 2 | foo.classList.add();
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(6): 'foo.classList.add("foo");\\nfoo.classL…' > Output 1`] = `
"
  1 | foo.classList.add("foo");
"
`;

exports[`invalid(6): 'foo.push();\\nfoo.push(2);' > Code 1`] = `
"
  1 | foo.push();
  2 | foo.push(2);
"
`;

exports[`invalid(6): 'foo.push();\\nfoo.push(2);' > Error 1/1 1`] = `
"
  1 | foo.push();
> 2 | foo.push(2);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(6): 'foo.push();\\nfoo.push(2);' > Output 1`] = `
"
  1 | foo.push(2);
"
`;

exports[`invalid(6): 'importScripts(a, b,);\\nimportScripts(…' > Code 1`] = `
"
  1 | importScripts(a, b,);
  2 | importScripts(c, d);
"
`;

exports[`invalid(6): 'importScripts(a, b,);\\nimportScripts(…' > Error 1/1 1`] = `
"
  1 | importScripts(a, b,);
> 2 | importScripts(c, d);
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(6): 'importScripts(a, b,);\\nimportScripts(…' > Output 1`] = `
"
  1 | importScripts(a, b, c, d);
"
`;

exports[`invalid(7): 'foo.classList.add();\\nfoo.classList.a…' > Code 1`] = `
"
  1 | foo.classList.add();
  2 | foo.classList.add(2);
"
`;

exports[`invalid(7): 'foo.classList.add();\\nfoo.classList.a…' > Error 1/1 1`] = `
"
  1 | foo.classList.add();
> 2 | foo.classList.add(2);
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(7): 'foo.classList.add();\\nfoo.classList.a…' > Output 1`] = `
"
  1 | foo.classList.add(2);
"
`;

exports[`invalid(7): 'foo.push(1, 2);\\nfoo.push((3), (4));' > Code 1`] = `
"
  1 | foo.push(1, 2);
  2 | foo.push((3), (4));
"
`;

exports[`invalid(7): 'foo.push(1, 2);\\nfoo.push((3), (4));' > Error 1/1 1`] = `
"
  1 | foo.push(1, 2);
> 2 | foo.push((3), (4));
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(7): 'foo.push(1, 2);\\nfoo.push((3), (4));' > Output 1`] = `
"
  1 | foo.push(1, 2, (3), (4));
"
`;

exports[`invalid(7): 'importScripts(a, b);\\nimportScripts(c…' > Code 1`] = `
"
  1 | importScripts(a, b);
  2 | importScripts(c, d,);
"
`;

exports[`invalid(7): 'importScripts(a, b);\\nimportScripts(c…' > Error 1/1 1`] = `
"
  1 | importScripts(a, b);
> 2 | importScripts(c, d,);
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(7): 'importScripts(a, b);\\nimportScripts(c…' > Output 1`] = `
"
  1 | importScripts(a, b, c, d,);
"
`;

exports[`invalid(8): 'foo.classList.add(a, b);\\nfoo.classLi…' > Code 1`] = `
"
  1 | foo.classList.add(a, b);
  2 | foo.classList.add((c), (d));
"
`;

exports[`invalid(8): 'foo.classList.add(a, b);\\nfoo.classLi…' > Error 1/1 1`] = `
"
  1 | foo.classList.add(a, b);
> 2 | foo.classList.add((c), (d));
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(8): 'foo.classList.add(a, b);\\nfoo.classLi…' > Output 1`] = `
"
  1 | foo.classList.add(a, b, (c), (d));
"
`;

exports[`invalid(8): 'foo.push(1, 2,);\\nfoo.push(3, 4);' > Code 1`] = `
"
  1 | foo.push(1, 2,);
  2 | foo.push(3, 4);
"
`;

exports[`invalid(8): 'foo.push(1, 2,);\\nfoo.push(3, 4);' > Error 1/1 1`] = `
"
  1 | foo.push(1, 2,);
> 2 | foo.push(3, 4);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(8): 'foo.push(1, 2,);\\nfoo.push(3, 4);' > Output 1`] = `
"
  1 | foo.push(1, 2, 3, 4);
"
`;

exports[`invalid(8): 'importScripts(a, b,);\\nimportScripts(…' > Code 1`] = `
"
  1 | importScripts(a, b,);
  2 | importScripts(c, d,);
"
`;

exports[`invalid(8): 'importScripts(a, b,);\\nimportScripts(…' > Error 1/1 1`] = `
"
  1 | importScripts(a, b,);
> 2 | importScripts(c, d,);
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(8): 'importScripts(a, b,);\\nimportScripts(…' > Output 1`] = `
"
  1 | importScripts(a, b, c, d,);
"
`;

exports[`invalid(9): 'foo.classList.add(a, b, ...c,);\\nfoo.…' > Code 1`] = `
"
  1 | foo.classList.add(a, b, ...c,);
  2 | foo.classList.add(...d,);
"
`;

exports[`invalid(9): 'foo.classList.add(a, b, ...c,);\\nfoo.…' > Error 1/1 1`] = `
"
  1 | foo.classList.add(a, b, ...c,);
> 2 | foo.classList.add(...d,);
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(9): 'foo.classList.add(a, b, ...c,);\\nfoo.…' > Output 1`] = `
"
  1 | foo.classList.add(a, b, ...c, ...d,);
"
`;

exports[`invalid(9): 'foo.classList.add.push(a, b,);\\nfoo.c…' > Code 1`] = `
"
  1 | foo.classList.add.push(a, b,);
  2 | foo.classList.add.push(c, d);
"
`;

exports[`invalid(9): 'foo.classList.add.push(a, b,);\\nfoo.c…' > Error 1/1 1`] = `
"
  1 | foo.classList.add.push(a, b,);
> 2 | foo.classList.add.push(c, d);
    |                   ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(9): 'foo.classList.add.push(a, b,);\\nfoo.c…' > Output 1`] = `
"
  1 | foo.classList.add.push(a, b, c, d);
"
`;

exports[`invalid(9): 'foo.push(1, 2);\\nfoo.push(3, 4,);' > Code 1`] = `
"
  1 | foo.push(1, 2);
  2 | foo.push(3, 4,);
"
`;

exports[`invalid(9): 'foo.push(1, 2);\\nfoo.push(3, 4,);' > Error 1/1 1`] = `
"
  1 | foo.push(1, 2);
> 2 | foo.push(3, 4,);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(9): 'foo.push(1, 2);\\nfoo.push(3, 4,);' > Output 1`] = `
"
  1 | foo.push(1, 2, 3, 4,);
"
`;

exports[`invalid(10): 'foo.classList.add(a, b);\\nfoo.classLi…' > Code 1`] = `
"
  1 | foo.classList.add(a, b);
  2 | foo.classList.add(c, d,);
"
`;

exports[`invalid(10): 'foo.classList.add(a, b);\\nfoo.classLi…' > Error 1/1 1`] = `
"
  1 | foo.classList.add(a, b);
> 2 | foo.classList.add(c, d,);
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(10): 'foo.classList.add(a, b);\\nfoo.classLi…' > Output 1`] = `
"
  1 | foo.classList.add(a, b, c, d,);
"
`;

exports[`invalid(10): 'foo.push(1, 2,);\\nfoo.push(3, 4,);' > Code 1`] = `
"
  1 | foo.push(1, 2,);
  2 | foo.push(3, 4,);
"
`;

exports[`invalid(10): 'foo.push(1, 2,);\\nfoo.push(3, 4,);' > Error 1/1 1`] = `
"
  1 | foo.push(1, 2,);
> 2 | foo.push(3, 4,);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(10): 'foo.push(1, 2,);\\nfoo.push(3, 4,);' > Output 1`] = `
"
  1 | foo.push(1, 2, 3, 4,);
"
`;

exports[`invalid(10): 'importScripts(bar());\\nimportScripts(…' > Code 1`] = `
"
  1 | importScripts(bar());
  2 | importScripts("foo.js");
"
`;

exports[`invalid(10): 'importScripts(bar());\\nimportScripts(…' > Error 1/1 1`] = `
"
  1 | importScripts(bar());
> 2 | importScripts("foo.js");
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(10): 'importScripts(bar());\\nimportScripts(…' > Output 1`] = `
"
  1 | importScripts(bar(), "foo.js");
"
`;

exports[`invalid(11): 'foo.classList.add(a, b,);\\nfoo.classL…' > Code 1`] = `
"
  1 | foo.classList.add(a, b,);
  2 | foo.classList.add(c, d,);
"
`;

exports[`invalid(11): 'foo.classList.add(a, b,);\\nfoo.classL…' > Error 1/1 1`] = `
"
  1 | foo.classList.add(a, b,);
> 2 | foo.classList.add(c, d,);
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(11): 'foo.classList.add(a, b,);\\nfoo.classL…' > Output 1`] = `
"
  1 | foo.classList.add(a, b, c, d,);
"
`;

exports[`invalid(11): 'foo.push(1, 2, ...a,);\\nfoo.push(...b…' > Code 1`] = `
"
  1 | foo.push(1, 2, ...a,);
  2 | foo.push(...b,);
"
`;

exports[`invalid(11): 'foo.push(1, 2, ...a,);\\nfoo.push(...b…' > Error 1/1 1`] = `
"
  1 | foo.push(1, 2, ...a,);
> 2 | foo.push(...b,);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(11): 'foo.push(1, 2, ...a,);\\nfoo.push(...b…' > Output 1`] = `
"
  1 | foo.push(1, 2, ...a, ...b,);
"
`;

exports[`invalid(11): 'importScripts(a);\\nimportScripts(bar(…' > Code 1`] = `
"
  1 | importScripts(a);
  2 | importScripts(bar());
"
`;

exports[`invalid(11): 'importScripts(a);\\nimportScripts(bar(…' > Error 1/1 1`] = `
"
  1 | importScripts(a);
> 2 | importScripts(bar());
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.

--------------------------------------------------------------------------------
Suggestion 1/1: Merge with previous one.
  1 | importScripts(a, bar());
"
`;

exports[`invalid(12): 'foo.classList.add(a, b, ...c,);\\nfoo.…' > Code 1`] = `
"
  1 | foo.classList.add(a, b, ...c,);
  2 | foo.classList.add(...d,);
"
`;

exports[`invalid(12): 'foo.classList.add(a, b, ...c,);\\nfoo.…' > Error 1/1 1`] = `
"
  1 | foo.classList.add(a, b, ...c,);
> 2 | foo.classList.add(...d,);
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(12): 'foo.classList.add(a, b, ...c,);\\nfoo.…' > Output 1`] = `
"
  1 | foo.classList.add(a, b, ...c, ...d,);
"
`;

exports[`invalid(12): 'foo.push(bar());\\nfoo.push(1);' > Code 1`] = `
"
  1 | foo.push(bar());
  2 | foo.push(1);
"
`;

exports[`invalid(12): 'foo.push(bar());\\nfoo.push(1);' > Error 1/1 1`] = `
"
  1 | foo.push(bar());
> 2 | foo.push(1);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(12): 'foo.push(bar());\\nfoo.push(1);' > Output 1`] = `
"
  1 | foo.push(bar(), 1);
"
`;

exports[`invalid(12): 'importScripts(a,);\\nimportScripts(b,)…' > Code 1`] = `
"
  1 | importScripts(a,);
  2 | importScripts(b,);
  3 | importScripts(c,);
"
`;

exports[`invalid(12): 'importScripts(a,);\\nimportScripts(b,)…' > Error 1/2 1`] = `
"
  1 | importScripts(a,);
> 2 | importScripts(b,);
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
  3 | importScripts(c,);
"
`;

exports[`invalid(12): 'importScripts(a,);\\nimportScripts(b,)…' > Error 2/2 1`] = `
"
  1 | importScripts(a,);
  2 | importScripts(b,);
> 3 | importScripts(c,);
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
"
`;

exports[`invalid(12): 'importScripts(a,);\\nimportScripts(b,)…' > Output 1`] = `
"
  1 | importScripts(a, b, c,);
"
`;

exports[`invalid(13): 'foo.classList.add(bar());\\nfoo.classL…' > Code 1`] = `
"
  1 | foo.classList.add(bar());
  2 | foo.classList.add("foo");
"
`;

exports[`invalid(13): 'foo.classList.add(bar());\\nfoo.classL…' > Error 1/1 1`] = `
"
  1 | foo.classList.add(bar());
> 2 | foo.classList.add("foo");
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(13): 'foo.classList.add(bar());\\nfoo.classL…' > Output 1`] = `
"
  1 | foo.classList.add(bar(), "foo");
"
`;

exports[`invalid(13): 'foo.push(1);\\nfoo.push(bar());' > Code 1`] = `
"
  1 | foo.push(1);
  2 | foo.push(bar());
"
`;

exports[`invalid(13): 'foo.push(1);\\nfoo.push(bar());' > Error 1/1 1`] = `
"
  1 | foo.push(1);
> 2 | foo.push(bar());
    |     ^^^^ Do not call \`Array#push()\` multiple times.

--------------------------------------------------------------------------------
Suggestion 1/1: Merge with previous one.
  1 | foo.push(1, bar());
"
`;

exports[`invalid(13): 'if (a) {\\n\\timportScripts(a);\\n\\timpo…' > Code 1`] = `
"
  1 | if (a) {
  2 | 	importScripts(a);
  3 | 	importScripts(b);
  4 | }
"
`;

exports[`invalid(13): 'if (a) {\\n\\timportScripts(a);\\n\\timpo…' > Error 1/1 1`] = `
"
  1 | if (a) {
  2 | 	importScripts(a);
> 3 | 	importScripts(b);
    | 	^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
  4 | }
"
`;

exports[`invalid(13): 'if (a) {\\n\\timportScripts(a);\\n\\timpo…' > Output 1`] = `
"
  1 | if (a) {
  2 | 	importScripts(a, b);
  3 | }
"
`;

exports[`invalid(14): 'foo.classList.add(a);\\nfoo.classList.…' > Code 1`] = `
"
  1 | foo.classList.add(a);
  2 | foo.classList.add(bar());
"
`;

exports[`invalid(14): 'foo.classList.add(a);\\nfoo.classList.…' > Error 1/1 1`] = `
"
  1 | foo.classList.add(a);
> 2 | foo.classList.add(bar());
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.

--------------------------------------------------------------------------------
Suggestion 1/1: Merge with previous one.
  1 | foo.classList.add(a, bar());
"
`;

exports[`invalid(14): 'foo.push(1,);\\nfoo.push(2,);\\nfoo.pus…' > Code 1`] = `
"
  1 | foo.push(1,);
  2 | foo.push(2,);
  3 | foo.push(3,);
"
`;

exports[`invalid(14): 'foo.push(1,);\\nfoo.push(2,);\\nfoo.pus…' > Error 1/2 1`] = `
"
  1 | foo.push(1,);
> 2 | foo.push(2,);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
  3 | foo.push(3,);
"
`;

exports[`invalid(14): 'foo.push(1,);\\nfoo.push(2,);\\nfoo.pus…' > Error 2/2 1`] = `
"
  1 | foo.push(1,);
  2 | foo.push(2,);
> 3 | foo.push(3,);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(14): 'foo.push(1,);\\nfoo.push(2,);\\nfoo.pus…' > Output 1`] = `
"
  1 | foo.push(1, 2, 3,);
"
`;

exports[`invalid(14): 'switch (a) {\\n\\tdefault:\\n\\t\\timportS…' > Code 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		importScripts(a);
  4 | 		importScripts(b);
  5 | }
"
`;

exports[`invalid(14): 'switch (a) {\\n\\tdefault:\\n\\t\\timportS…' > Error 1/1 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		importScripts(a);
> 4 | 		importScripts(b);
    | 		^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
  5 | }
"
`;

exports[`invalid(14): 'switch (a) {\\n\\tdefault:\\n\\t\\timportS…' > Output 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		importScripts(a, b);
  4 | }
"
`;

exports[`invalid(15): 'foo.classList.add(a,);\\nfoo.classList…' > Code 1`] = `
"
  1 | foo.classList.add(a,);
  2 | foo.classList.add(b,);
  3 | foo.classList.add(c,);
"
`;

exports[`invalid(15): 'foo.classList.add(a,);\\nfoo.classList…' > Error 1/2 1`] = `
"
  1 | foo.classList.add(a,);
> 2 | foo.classList.add(b,);
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
  3 | foo.classList.add(c,);
"
`;

exports[`invalid(15): 'foo.classList.add(a,);\\nfoo.classList…' > Error 2/2 1`] = `
"
  1 | foo.classList.add(a,);
  2 | foo.classList.add(b,);
> 3 | foo.classList.add(c,);
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(15): 'foo.classList.add(a,);\\nfoo.classList…' > Output 1`] = `
"
  1 | foo.classList.add(a, b, c,);
"
`;

exports[`invalid(15): 'function _() {\\n\\timportScripts(a);\\n…' > Code 1`] = `
"
  1 | function _() {
  2 | 	importScripts(a);
  3 | 	importScripts(b);
  4 | }
"
`;

exports[`invalid(15): 'function _() {\\n\\timportScripts(a);\\n…' > Error 1/1 1`] = `
"
  1 | function _() {
  2 | 	importScripts(a);
> 3 | 	importScripts(b);
    | 	^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
  4 | }
"
`;

exports[`invalid(15): 'function _() {\\n\\timportScripts(a);\\n…' > Output 1`] = `
"
  1 | function _() {
  2 | 	importScripts(a, b);
  3 | }
"
`;

exports[`invalid(15): 'if (a) {\\n\\tfoo.push(1);\\n\\tfoo.push(…' > Code 1`] = `
"
  1 | if (a) {
  2 | 	foo.push(1);
  3 | 	foo.push(2);
  4 | }
"
`;

exports[`invalid(15): 'if (a) {\\n\\tfoo.push(1);\\n\\tfoo.push(…' > Error 1/1 1`] = `
"
  1 | if (a) {
  2 | 	foo.push(1);
> 3 | 	foo.push(2);
    | 	    ^^^^ Do not call \`Array#push()\` multiple times.
  4 | }
"
`;

exports[`invalid(15): 'if (a) {\\n\\tfoo.push(1);\\n\\tfoo.push(…' > Output 1`] = `
"
  1 | if (a) {
  2 | 	foo.push(1, 2);
  3 | }
"
`;

exports[`invalid(16): 'if (a) {\\n\\tfoo.classList.add(a);\\n\\t…' > Code 1`] = `
"
  1 | if (a) {
  2 | 	foo.classList.add(a);
  3 | 	foo.classList.add(b);
  4 | }
"
`;

exports[`invalid(16): 'if (a) {\\n\\tfoo.classList.add(a);\\n\\t…' > Error 1/1 1`] = `
"
  1 | if (a) {
  2 | 	foo.classList.add(a);
> 3 | 	foo.classList.add(b);
    | 	              ^^^ Do not call \`Element#classList.add()\` multiple times.
  4 | }
"
`;

exports[`invalid(16): 'if (a) {\\n\\tfoo.classList.add(a);\\n\\t…' > Output 1`] = `
"
  1 | if (a) {
  2 | 	foo.classList.add(a, b);
  3 | }
"
`;

exports[`invalid(16): 'importScripts(a)\\nimportScripts(b)\\n;…' > Code 1`] = `
"
  1 | importScripts(a)
  2 | importScripts(b)
  3 | ;[foo].forEach(bar)
"
`;

exports[`invalid(16): 'importScripts(a)\\nimportScripts(b)\\n;…' > Error 1/1 1`] = `
"
  1 | importScripts(a)
> 2 | importScripts(b)
    | ^^^^^^^^^^^^^ Do not call \`importScripts()\` multiple times.
  3 | ;[foo].forEach(bar)
"
`;

exports[`invalid(16): 'importScripts(a)\\nimportScripts(b)\\n;…' > Output 1`] = `
"
  1 | importScripts(a, b);[foo].forEach(bar)
"
`;

exports[`invalid(16): 'switch (a) {\\n\\tdefault:\\n\\t\\tfoo.pus…' > Code 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		foo.push(1);
  4 | 		foo.push(2);
  5 | }
"
`;

exports[`invalid(16): 'switch (a) {\\n\\tdefault:\\n\\t\\tfoo.pus…' > Error 1/1 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		foo.push(1);
> 4 | 		foo.push(2);
    | 		    ^^^^ Do not call \`Array#push()\` multiple times.
  5 | }
"
`;

exports[`invalid(16): 'switch (a) {\\n\\tdefault:\\n\\t\\tfoo.pus…' > Output 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		foo.push(1, 2);
  4 | }
"
`;

exports[`invalid(17): 'function a() {\\n\\tfoo.push(1);\\n\\tfoo…' > Code 1`] = `
"
  1 | function a() {
  2 | 	foo.push(1);
  3 | 	foo.push(2);
  4 | }
"
`;

exports[`invalid(17): 'function a() {\\n\\tfoo.push(1);\\n\\tfoo…' > Error 1/1 1`] = `
"
  1 | function a() {
  2 | 	foo.push(1);
> 3 | 	foo.push(2);
    | 	    ^^^^ Do not call \`Array#push()\` multiple times.
  4 | }
"
`;

exports[`invalid(17): 'function a() {\\n\\tfoo.push(1);\\n\\tfoo…' > Output 1`] = `
"
  1 | function a() {
  2 | 	foo.push(1, 2);
  3 | }
"
`;

exports[`invalid(17): 'switch (a) {\\n\\tdefault:\\n\\t\\tfoo.cla…' > Code 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		foo.classList.add(a);
  4 | 		foo.classList.add(b);
  5 | }
"
`;

exports[`invalid(17): 'switch (a) {\\n\\tdefault:\\n\\t\\tfoo.cla…' > Error 1/1 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		foo.classList.add(a);
> 4 | 		foo.classList.add(b);
    | 		              ^^^ Do not call \`Element#classList.add()\` multiple times.
  5 | }
"
`;

exports[`invalid(17): 'switch (a) {\\n\\tdefault:\\n\\t\\tfoo.cla…' > Output 1`] = `
"
  1 | switch (a) {
  2 | 	default:
  3 | 		foo.classList.add(a, b);
  4 | }
"
`;

exports[`invalid(18): 'foo.push(1)\\nfoo.push(2)\\n;[foo].forE…' > Code 1`] = `
"
  1 | foo.push(1)
  2 | foo.push(2)
  3 | ;[foo].forEach(bar)
"
`;

exports[`invalid(18): 'foo.push(1)\\nfoo.push(2)\\n;[foo].forE…' > Error 1/1 1`] = `
"
  1 | foo.push(1)
> 2 | foo.push(2)
    |     ^^^^ Do not call \`Array#push()\` multiple times.
  3 | ;[foo].forEach(bar)
"
`;

exports[`invalid(18): 'foo.push(1)\\nfoo.push(2)\\n;[foo].forE…' > Output 1`] = `
"
  1 | foo.push(1, 2);[foo].forEach(bar)
"
`;

exports[`invalid(18): 'function _() {\\n\\tfoo.classList.add(a…' > Code 1`] = `
"
  1 | function _() {
  2 | 	foo.classList.add(a);
  3 | 	foo.classList.add(b);
  4 | }
"
`;

exports[`invalid(18): 'function _() {\\n\\tfoo.classList.add(a…' > Error 1/1 1`] = `
"
  1 | function _() {
  2 | 	foo.classList.add(a);
> 3 | 	foo.classList.add(b);
    | 	              ^^^ Do not call \`Element#classList.add()\` multiple times.
  4 | }
"
`;

exports[`invalid(18): 'function _() {\\n\\tfoo.classList.add(a…' > Output 1`] = `
"
  1 | function _() {
  2 | 	foo.classList.add(a, b);
  3 | }
"
`;

exports[`invalid(19): 'foo.bar.push(1);\\n(foo)[\\'bar\\'].push…' > Code 1`] = `
"
  1 | foo.bar.push(1);
  2 | (foo)['bar'].push(2);
"
`;

exports[`invalid(19): 'foo.bar.push(1);\\n(foo)[\\'bar\\'].push…' > Error 1/1 1`] = `
"
  1 | foo.bar.push(1);
> 2 | (foo)['bar'].push(2);
    |              ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(19): 'foo.bar.push(1);\\n(foo)[\\'bar\\'].push…' > Output 1`] = `
"
  1 | foo.bar.push(1, 2);
"
`;

exports[`invalid(19): 'foo.classList.add(a)\\nfoo.classList.a…' > Code 1`] = `
"
  1 | foo.classList.add(a)
  2 | foo.classList.add(b)
  3 | ;[foo].forEach(bar)
"
`;

exports[`invalid(19): 'foo.classList.add(a)\\nfoo.classList.a…' > Error 1/1 1`] = `
"
  1 | foo.classList.add(a)
> 2 | foo.classList.add(b)
    |               ^^^ Do not call \`Element#classList.add()\` multiple times.
  3 | ;[foo].forEach(bar)
"
`;

exports[`invalid(19): 'foo.classList.add(a)\\nfoo.classList.a…' > Output 1`] = `
"
  1 | foo.classList.add(a, b);[foo].forEach(bar)
"
`;

exports[`invalid(20): 'foo.bar.classList.add(a);\\n(foo)[\\'ba…' > Code 1`] = `
"
  1 | foo.bar.classList.add(a);
  2 | (foo)['bar'].classList.add(b);
"
`;

exports[`invalid(20): 'foo.bar.classList.add(a);\\n(foo)[\\'ba…' > Error 1/1 1`] = `
"
  1 | foo.bar.classList.add(a);
> 2 | (foo)['bar'].classList.add(b);
    |                        ^^^ Do not call \`Element#classList.add()\` multiple times.
"
`;

exports[`invalid(20): 'foo.bar.classList.add(a);\\n(foo)[\\'ba…' > Output 1`] = `
"
  1 | foo.bar.classList.add(a, b);
"
`;

exports[`invalid(20): 'foo.push(1);\\nfoo.push(2);\\nstream.pu…' > Code 1`] = `
"
  1 | foo.push(1);
  2 | foo.push(2);
  3 | stream.push(1);
  4 | stream.push(2);
"
`;

exports[`invalid(20): 'foo.push(1);\\nfoo.push(2);\\nstream.pu…' > Error 1/1 1`] = `
"
  1 | foo.push(1);
> 2 | foo.push(2);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
  3 | stream.push(1);
  4 | stream.push(2);
"
`;

exports[`invalid(20): 'foo.push(1);\\nfoo.push(2);\\nstream.pu…' > Output 1`] = `
"
  1 | foo.push(1, 2);
  2 | stream.push(1);
  3 | stream.push(2);
"
`;

exports[`invalid(21): 'foo.bar.push(1);\\nfoo.bar.push(2);\\nf…' > Code 1`] = `
"
  1 | foo.bar.push(1);
  2 | foo.bar.push(2);
  3 | foo.push(1);
  4 | foo.push(2);
  5 | bar.foo.push(1);
  6 | bar.foo.push(2);
"
`;

exports[`invalid(21): 'foo.bar.push(1);\\nfoo.bar.push(2);\\nf…' > Error 1/3 1`] = `
"
  1 | foo.bar.push(1);
> 2 | foo.bar.push(2);
    |         ^^^^ Do not call \`Array#push()\` multiple times.
  3 | foo.push(1);
  4 | foo.push(2);
  5 | bar.foo.push(1);
  6 | bar.foo.push(2);
"
`;

exports[`invalid(21): 'foo.bar.push(1);\\nfoo.bar.push(2);\\nf…' > Error 2/3 1`] = `
"
  1 | foo.bar.push(1);
  2 | foo.bar.push(2);
  3 | foo.push(1);
> 4 | foo.push(2);
    |     ^^^^ Do not call \`Array#push()\` multiple times.
  5 | bar.foo.push(1);
  6 | bar.foo.push(2);
"
`;

exports[`invalid(21): 'foo.bar.push(1);\\nfoo.bar.push(2);\\nf…' > Error 3/3 1`] = `
"
  1 | foo.bar.push(1);
  2 | foo.bar.push(2);
  3 | foo.push(1);
  4 | foo.push(2);
  5 | bar.foo.push(1);
> 6 | bar.foo.push(2);
    |         ^^^^ Do not call \`Array#push()\` multiple times.
"
`;

exports[`invalid(21): 'foo.bar.push(1);\\nfoo.bar.push(2);\\nf…' > Options 1`] = `
"
[
  {
    "ignore": [
      "foo",
      "foo.bar"
    ]
  }
]
"
`;

exports[`invalid(21): 'foo.bar.push(1);\\nfoo.bar.push(2);\\nf…' > Output 1`] = `
"
  1 | foo.bar.push(1, 2);
  2 | foo.push(1, 2);
  3 | bar.foo.push(1, 2);
"
`;
