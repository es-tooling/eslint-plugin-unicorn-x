// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

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

exports[`invalid(21): 'foo.bar.push(1);\\nfoo.bar.push(2);\\nf…' > Error 1/1 1`] = `
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
  1 | foo.bar.push(1);
  2 | foo.bar.push(2);
  3 | foo.push(1);
  4 | foo.push(2);
  5 | bar.foo.push(1, 2);
"
`;
