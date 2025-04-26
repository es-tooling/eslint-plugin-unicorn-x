// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.map(\\n\\t_\\n\\t\\t? String // This o…' > Code 1`] = `
"
  1 | foo.map(
  2 | 	_
  3 | 		? String // This one should be ignored
  4 | 		: callback
  5 | );
"
`;

exports[`invalid(0): 'foo.map(\\n\\t_\\n\\t\\t? String // This o…' > Error 1/1 1`] = `
"
  1 | foo.map(
  2 | 	_
  3 | 		? String // This one should be ignored
> 4 | 		: callback
    | 		  ^^^^^^^^ Do not pass function \`callback\` directly to \`.map(…)\`.
  5 | );

--------------------------------------------------------------------------------
Suggestion 1/3: Replace function \`callback\` with \`… => callback(element)\`.
  1 | foo.map(
  2 | 	_
  3 | 		? String // This one should be ignored
  4 | 		: (element) => callback(element)
  5 | );

--------------------------------------------------------------------------------
Suggestion 2/3: Replace function \`callback\` with \`… => callback(element, index)\`.
  1 | foo.map(
  2 | 	_
  3 | 		? String // This one should be ignored
  4 | 		: (element, index) => callback(element, index)
  5 | );

--------------------------------------------------------------------------------
Suggestion 3/3: Replace function \`callback\` with \`… => callback(element, index, array)\`.
  1 | foo.map(
  2 | 	_
  3 | 		? String // This one should be ignored
  4 | 		: (element, index, array) => callback(element, index, array)
  5 | );
"
`;

exports[`invalid(1): 'foo.forEach(\\n\\t_\\n\\t\\t? callbackA\\n\\…' > Code 1`] = `
"
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
  5 | 				? callbackB
  6 | 				: callbackC
  7 | );
"
`;

exports[`invalid(1): 'foo.forEach(\\n\\t_\\n\\t\\t? callbackA\\n\\…' > Error 1/3 1`] = `
"
  1 | foo.forEach(
  2 | 	_
> 3 | 		? callbackA
    | 		  ^^^^^^^^^ Do not pass function \`callbackA\` directly to \`.forEach(…)\`.
  4 | 		: _
  5 | 				? callbackB
  6 | 				: callbackC
  7 | );

--------------------------------------------------------------------------------
Suggestion 1/3: Replace function \`callbackA\` with \`… => callbackA(element)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? (element) => { callbackA(element); }
  4 | 		: _
  5 | 				? callbackB
  6 | 				: callbackC
  7 | );

--------------------------------------------------------------------------------
Suggestion 2/3: Replace function \`callbackA\` with \`… => callbackA(element, index)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? (element, index) => { callbackA(element, index); }
  4 | 		: _
  5 | 				? callbackB
  6 | 				: callbackC
  7 | );

--------------------------------------------------------------------------------
Suggestion 3/3: Replace function \`callbackA\` with \`… => callbackA(element, index, array)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? (element, index, array) => { callbackA(element, index, array); }
  4 | 		: _
  5 | 				? callbackB
  6 | 				: callbackC
  7 | );
"
`;

exports[`invalid(1): 'foo.forEach(\\n\\t_\\n\\t\\t? callbackA\\n\\…' > Error 2/3 1`] = `
"
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
> 5 | 				? callbackB
    | 				  ^^^^^^^^^ Do not pass function \`callbackB\` directly to \`.forEach(…)\`.
  6 | 				: callbackC
  7 | );

--------------------------------------------------------------------------------
Suggestion 1/3: Replace function \`callbackB\` with \`… => callbackB(element)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
  5 | 				? (element) => { callbackB(element); }
  6 | 				: callbackC
  7 | );

--------------------------------------------------------------------------------
Suggestion 2/3: Replace function \`callbackB\` with \`… => callbackB(element, index)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
  5 | 				? (element, index) => { callbackB(element, index); }
  6 | 				: callbackC
  7 | );

--------------------------------------------------------------------------------
Suggestion 3/3: Replace function \`callbackB\` with \`… => callbackB(element, index, array)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
  5 | 				? (element, index, array) => { callbackB(element, index, array); }
  6 | 				: callbackC
  7 | );
"
`;

exports[`invalid(1): 'foo.forEach(\\n\\t_\\n\\t\\t? callbackA\\n\\…' > Error 3/3 1`] = `
"
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
  5 | 				? callbackB
> 6 | 				: callbackC
    | 				  ^^^^^^^^^ Do not pass function \`callbackC\` directly to \`.forEach(…)\`.
  7 | );

--------------------------------------------------------------------------------
Suggestion 1/3: Replace function \`callbackC\` with \`… => callbackC(element)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
  5 | 				? callbackB
  6 | 				: (element) => { callbackC(element); }
  7 | );

--------------------------------------------------------------------------------
Suggestion 2/3: Replace function \`callbackC\` with \`… => callbackC(element, index)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
  5 | 				? callbackB
  6 | 				: (element, index) => { callbackC(element, index); }
  7 | );

--------------------------------------------------------------------------------
Suggestion 3/3: Replace function \`callbackC\` with \`… => callbackC(element, index, array)\`.
  1 | foo.forEach(
  2 | 	_
  3 | 		? callbackA
  4 | 		: _
  5 | 				? callbackB
  6 | 				: (element, index, array) => { callbackC(element, index, array); }
  7 | );
"
`;

exports[`invalid(2): 'async function * foo () {\\n\\tfoo.map(…' > Code 1`] = `
"
   1 | async function * foo () {
   2 | 	foo.map((0, bar));
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map(bar || baz);
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }
"
`;

exports[`invalid(2): 'async function * foo () {\\n\\tfoo.map(…' > Error 1/4 1`] = `
"
   1 | async function * foo () {
>  2 | 	foo.map((0, bar));
     | 	         ^^^^^^ Do not pass function directly to \`.map(…)\`.
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map(bar || baz);
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }

--------------------------------------------------------------------------------
Suggestion 1/3: Replace function with \`… => …(element)\`.
   1 | async function * foo () {
   2 | 	foo.map((element) => (0, bar)(element));
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map(bar || baz);
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }

--------------------------------------------------------------------------------
Suggestion 2/3: Replace function with \`… => …(element, index)\`.
   1 | async function * foo () {
   2 | 	foo.map((element, index) => (0, bar)(element, index));
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map(bar || baz);
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }

--------------------------------------------------------------------------------
Suggestion 3/3: Replace function with \`… => …(element, index, array)\`.
   1 | async function * foo () {
   2 | 	foo.map((element, index, array) => (0, bar)(element, index, array));
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map(bar || baz);
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }
"
`;

exports[`invalid(2): 'async function * foo () {\\n\\tfoo.map(…' > Error 2/4 1`] = `
"
   1 | async function * foo () {
   2 | 	foo.map((0, bar));
>  3 | 	foo.map(yield bar);
     | 	        ^^^^^^^^^ Do not pass function directly to \`.map(…)\`.
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map(bar || baz);
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }
"
`;

exports[`invalid(2): 'async function * foo () {\\n\\tfoo.map(…' > Error 3/4 1`] = `
"
   1 | async function * foo () {
   2 | 	foo.map((0, bar));
   3 | 	foo.map(yield bar);
>  4 | 	foo.map(yield* bar);
     | 	        ^^^^^^^^^^ Do not pass function directly to \`.map(…)\`.
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map(bar || baz);
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }
"
`;

exports[`invalid(2): 'async function * foo () {\\n\\tfoo.map(…' > Error 4/4 1`] = `
"
   1 | async function * foo () {
   2 | 	foo.map((0, bar));
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
>  7 | 	foo.map(bar || baz);
     | 	        ^^^^^^^^^^ Do not pass function directly to \`.map(…)\`.
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }

--------------------------------------------------------------------------------
Suggestion 1/3: Replace function with \`… => …(element)\`.
   1 | async function * foo () {
   2 | 	foo.map((0, bar));
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map((element) => (bar || baz)(element));
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }

--------------------------------------------------------------------------------
Suggestion 2/3: Replace function with \`… => …(element, index)\`.
   1 | async function * foo () {
   2 | 	foo.map((0, bar));
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map((element, index) => (bar || baz)(element, index));
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }

--------------------------------------------------------------------------------
Suggestion 3/3: Replace function with \`… => …(element, index, array)\`.
   1 | async function * foo () {
   2 | 	foo.map((0, bar));
   3 | 	foo.map(yield bar);
   4 | 	foo.map(yield* bar);
   5 | 	foo.map(() => bar);
   6 | 	foo.map(bar &&= baz);
   7 | 	foo.map((element, index, array) => (bar || baz)(element, index, array));
   8 | 	foo.map(bar + bar);
   9 | 	foo.map(+ bar);
  10 | 	foo.map(++ bar);
  11 | 	foo.map(new Function(''));
  12 | }
"
`;
