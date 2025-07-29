// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '\\'foobar\\'.indexOf(\\'foo\\') !== -1' > Code 1`] = `
"
  1 | 'foobar'.indexOf('foo') !== -1
"
`;

exports[`invalid(0): '\\'foobar\\'.indexOf(\\'foo\\') !== -1' > Error 1/1 1`] = `
"
> 1 | 'foobar'.indexOf('foo') !== -1
    |          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(0): '\\'foobar\\'.indexOf(\\'foo\\') !== -1' > Output 1`] = `
"
  1 | 'foobar'.includes('foo')
"
`;

exports[`invalid(0): 'values.some(x => x === "foo")' > Code 1`] = `
"
  1 | values.some(x => x === "foo")
"
`;

exports[`invalid(0): 'values.some(x => x === "foo")' > Error 1/1 1`] = `
"
> 1 | values.some(x => x === "foo")
    |        ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
"
`;

exports[`invalid(0): 'values.some(x => x === "foo")' > Output 1`] = `
"
  1 | values.includes("foo")
"
`;

exports[`invalid(1): '\\'foobar\\'.lastIndexOf(\\'foo\\') !== -1' > Code 1`] = `
"
  1 | 'foobar'.lastIndexOf('foo') !== -1
"
`;

exports[`invalid(1): '\\'foobar\\'.lastIndexOf(\\'foo\\') !== -1' > Error 1/1 1`] = `
"
> 1 | 'foobar'.lastIndexOf('foo') !== -1
    |          ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(1): '\\'foobar\\'.lastIndexOf(\\'foo\\') !== -1' > Output 1`] = `
"
  1 | 'foobar'.includes('foo')
"
`;

exports[`invalid(1): 'values.some(x => "foo" === x)' > Code 1`] = `
"
  1 | values.some(x => "foo" === x)
"
`;

exports[`invalid(1): 'values.some(x => "foo" === x)' > Error 1/1 1`] = `
"
> 1 | values.some(x => "foo" === x)
    |        ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
"
`;

exports[`invalid(1): 'values.some(x => "foo" === x)' > Output 1`] = `
"
  1 | values.includes("foo")
"
`;

exports[`invalid(2): '<template><div v-if="\\'foobar\\'.index…' > Code 1`] = `
"
  1 | <template><div v-if="'foobar'.indexOf('foo') !== -1"></div></template>
"
`;

exports[`invalid(2): '<template><div v-if="\\'foobar\\'.index…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="'foobar'.indexOf('foo') !== -1"></div></template>
    |                               ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(2): '<template><div v-if="\\'foobar\\'.index…' > Output 1`] = `
"
  1 | <template><div v-if="'foobar'.includes('foo')"></div></template>
"
`;

exports[`invalid(2): 'values.some(x => {return x === "foo";…' > Code 1`] = `
"
  1 | values.some(x => {return x === "foo";})
"
`;

exports[`invalid(2): 'values.some(x => {return x === "foo";…' > Error 1/1 1`] = `
"
> 1 | values.some(x => {return x === "foo";})
    |        ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
"
`;

exports[`invalid(2): 'values.some(x => {return x === "foo";…' > Output 1`] = `
"
  1 | values.includes("foo")
"
`;

exports[`invalid(3): 'str.indexOf(\\'foo\\') != -1' > Code 1`] = `
"
  1 | str.indexOf('foo') != -1
"
`;

exports[`invalid(3): 'str.indexOf(\\'foo\\') != -1' > Error 1/1 1`] = `
"
> 1 | str.indexOf('foo') != -1
    |     ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(3): 'str.indexOf(\\'foo\\') != -1' > Output 1`] = `
"
  1 | str.includes('foo')
"
`;

exports[`invalid(3): 'values.some(function (x) {return x ==…' > Code 1`] = `
"
  1 | values.some(function (x) {return x === "foo";})
"
`;

exports[`invalid(3): 'values.some(function (x) {return x ==…' > Error 1/1 1`] = `
"
> 1 | values.some(function (x) {return x === "foo";})
    |        ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
"
`;

exports[`invalid(3): 'values.some(function (x) {return x ==…' > Output 1`] = `
"
  1 | values.includes("foo")
"
`;

exports[`invalid(4): '// 1\\n(0, values)\\n\\t// 2\\n\\t./* 3 */…' > Code 1`] = `
"
  1 | // 1
  2 | (0, values)
  3 | 	// 2
  4 | 	./* 3 */some /* 3 */ (
  5 | 		/* 4 */
  6 | 		x /* 5 */ => /* 6 */ x /* 7 */ === /* 8 */ "foo" /* 9 */
  7 | 	) /* 10 */
"
`;

exports[`invalid(4): '// 1\\n(0, values)\\n\\t// 2\\n\\t./* 3 */…' > Error 1/1 1`] = `
"
  1 | // 1
  2 | (0, values)
  3 | 	// 2
> 4 | 	./* 3 */some /* 3 */ (
    | 	        ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
  5 | 		/* 4 */
  6 | 		x /* 5 */ => /* 6 */ x /* 7 */ === /* 8 */ "foo" /* 9 */
  7 | 	) /* 10 */
"
`;

exports[`invalid(4): '// 1\\n(0, values)\\n\\t// 2\\n\\t./* 3 */…' > Output 1`] = `
"
  1 | // 1
  2 | (0, values)
  3 | 	// 2
  4 | 	./* 3 */includes /* 3 */ (
  5 | 		/* 4 */
  6 | 		"foo" /* 9 */
  7 | 	) /* 10 */
"
`;

exports[`invalid(4): 'str.lastIndexOf(\\'foo\\') != -1' > Code 1`] = `
"
  1 | str.lastIndexOf('foo') != -1
"
`;

exports[`invalid(4): 'str.lastIndexOf(\\'foo\\') != -1' > Error 1/1 1`] = `
"
> 1 | str.lastIndexOf('foo') != -1
    |     ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(4): 'str.lastIndexOf(\\'foo\\') != -1' > Output 1`] = `
"
  1 | str.includes('foo')
"
`;

exports[`invalid(5): '<template><div v-if="str.indexOf(\\'fo…' > Code 1`] = `
"
  1 | <template><div v-if="str.indexOf('foo') != -1"></div></template>
"
`;

exports[`invalid(5): '<template><div v-if="str.indexOf(\\'fo…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="str.indexOf('foo') != -1"></div></template>
    |                          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(5): '<template><div v-if="str.indexOf(\\'fo…' > Output 1`] = `
"
  1 | <template><div v-if="str.includes('foo')"></div></template>
"
`;

exports[`invalid(5): 'foo.some(function (element) {\\n\\tretu…' > Code 1`] = `
"
  1 | foo.some(function (element) {
  2 | 	return element === bar.some(x => x === 1);
  3 | });
"
`;

exports[`invalid(5): 'foo.some(function (element) {\\n\\tretu…' > Error 1/2 1`] = `
"
> 1 | foo.some(function (element) {
    |     ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
  2 | 	return element === bar.some(x => x === 1);
  3 | });

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.some()\` with \`.includes()\`.
  1 | foo.includes(bar.some(x => x === 1));
"
`;

exports[`invalid(5): 'foo.some(function (element) {\\n\\tretu…' > Error 2/2 1`] = `
"
  1 | foo.some(function (element) {
> 2 | 	return element === bar.some(x => x === 1);
    | 	                       ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
  3 | });
"
`;

exports[`invalid(5): 'foo.some(function (element) {\\n\\tretu…' > Output 1`] = `
"
  1 | foo.some(function (element) {
  2 | 	return element === bar.includes(1);
  3 | });
"
`;

exports[`invalid(6): 'str.indexOf(\\'foo\\') > -1' > Code 1`] = `
"
  1 | str.indexOf('foo') > -1
"
`;

exports[`invalid(6): 'str.indexOf(\\'foo\\') > -1' > Error 1/1 1`] = `
"
> 1 | str.indexOf('foo') > -1
    |     ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(6): 'str.indexOf(\\'foo\\') > -1' > Output 1`] = `
"
  1 | str.includes('foo')
"
`;

exports[`invalid(6): 'values.some(x => x === (0, "foo"))' > Code 1`] = `
"
  1 | values.some(x => x === (0, "foo"))
"
`;

exports[`invalid(6): 'values.some(x => x === (0, "foo"))' > Error 1/1 1`] = `
"
> 1 | values.some(x => x === (0, "foo"))
    |        ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
"
`;

exports[`invalid(6): 'values.some(x => x === (0, "foo"))' > Output 1`] = `
"
  1 | values.includes((0, "foo"))
"
`;

exports[`invalid(7): 'str.lastIndexOf(\\'foo\\') > -1' > Code 1`] = `
"
  1 | str.lastIndexOf('foo') > -1
"
`;

exports[`invalid(7): 'str.lastIndexOf(\\'foo\\') > -1' > Error 1/1 1`] = `
"
> 1 | str.lastIndexOf('foo') > -1
    |     ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(7): 'str.lastIndexOf(\\'foo\\') > -1' > Output 1`] = `
"
  1 | str.includes('foo')
"
`;

exports[`invalid(7): 'values.some((x => x === (0, "foo")))' > Code 1`] = `
"
  1 | values.some((x => x === (0, "foo")))
"
`;

exports[`invalid(7): 'values.some((x => x === (0, "foo")))' > Error 1/1 1`] = `
"
> 1 | values.some((x => x === (0, "foo")))
    |        ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
"
`;

exports[`invalid(7): 'values.some((x => x === (0, "foo")))' > Output 1`] = `
"
  1 | values.includes((0, "foo"))
"
`;

exports[`invalid(8): '<template><div v-if="str.indexOf(\\'fo…' > Code 1`] = `
"
  1 | <template><div v-if="str.indexOf('foo') > -1"></div></template>
"
`;

exports[`invalid(8): '<template><div v-if="str.indexOf(\\'fo…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="str.indexOf('foo') > -1"></div></template>
    |                          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(8): '<template><div v-if="str.indexOf(\\'fo…' > Output 1`] = `
"
  1 | <template><div v-if="str.includes('foo')"></div></template>
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.some(x => x ==…' > Code 1`] = `
"
  1 | function fn() {
  2 | 	foo.some(x => x === arguments.length)
  3 | }
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.some(x => x ==…' > Error 1/1 1`] = `
"
  1 | function fn() {
> 2 | 	foo.some(x => x === arguments.length)
    | 	    ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
  3 | }
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.some(x => x ==…' > Output 1`] = `
"
  1 | function fn() {
  2 | 	foo.includes(arguments.length)
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.some(x => x ==…' > Code 1`] = `
"
  1 | function fn() {
  2 | 	foo.some(x => x === this[1])
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.some(x => x ==…' > Error 1/1 1`] = `
"
  1 | function fn() {
> 2 | 	foo.some(x => x === this[1])
    | 	    ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.some(x => x ==…' > Output 1`] = `
"
  1 | function fn() {
  2 | 	foo.includes(this[1])
  3 | }
"
`;

exports[`invalid(9): 'str.indexOf(\\'foo\\') == -1' > Code 1`] = `
"
  1 | str.indexOf('foo') == -1
"
`;

exports[`invalid(9): 'str.indexOf(\\'foo\\') == -1' > Error 1/1 1`] = `
"
> 1 | str.indexOf('foo') == -1
    |     ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(9): 'str.indexOf(\\'foo\\') == -1' > Output 1`] = `
"
  1 | !str.includes('foo')
"
`;

exports[`invalid(10): 'str.lastIndexOf(\\'foo\\') == -1' > Code 1`] = `
"
  1 | str.lastIndexOf('foo') == -1
"
`;

exports[`invalid(10): 'str.lastIndexOf(\\'foo\\') == -1' > Error 1/1 1`] = `
"
> 1 | str.lastIndexOf('foo') == -1
    |     ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(10): 'str.lastIndexOf(\\'foo\\') == -1' > Output 1`] = `
"
  1 | !str.includes('foo')
"
`;

exports[`invalid(10): 'values.some(x => x === foo())' > Code 1`] = `
"
  1 | values.some(x => x === foo())
"
`;

exports[`invalid(10): 'values.some(x => x === foo())' > Error 1/1 1`] = `
"
> 1 | values.some(x => x === foo())
    |        ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.some()\` with \`.includes()\`.
  1 | values.includes(foo())
"
`;

exports[`invalid(11): '<template><div v-if="str.indexOf(\\'fo…' > Code 1`] = `
"
  1 | <template><div v-if="str.indexOf('foo') == -1"></div></template>
"
`;

exports[`invalid(11): '<template><div v-if="str.indexOf(\\'fo…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="str.indexOf('foo') == -1"></div></template>
    |                          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(11): '<template><div v-if="str.indexOf(\\'fo…' > Output 1`] = `
"
  1 | <template><div v-if="!str.includes('foo')"></div></template>
"
`;

exports[`invalid(11): 'foo.some(function a(x) {\\n\\treturn x …' > Code 1`] = `
"
  1 | foo.some(function a(x) {
  2 | 	return x === (function (a) {
  3 | 		return a(this) === arguments[1]
  4 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument)
  5 | })
"
`;

exports[`invalid(11): 'foo.some(function a(x) {\\n\\treturn x …' > Error 1/1 1`] = `
"
> 1 | foo.some(function a(x) {
    |     ^^^^ Use \`.includes()\` instead of \`.some()\` when checking value existence.
  2 | 	return x === (function (a) {
  3 | 		return a(this) === arguments[1]
  4 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument)
  5 | })

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.some()\` with \`.includes()\`.
  1 | foo.includes((function (a) {
  2 | 		return a(this) === arguments[1]
  3 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument))
"
`;

exports[`invalid(12): '\\'foobar\\'.indexOf(\\'foo\\') >= 0' > Code 1`] = `
"
  1 | 'foobar'.indexOf('foo') >= 0
"
`;

exports[`invalid(12): '\\'foobar\\'.indexOf(\\'foo\\') >= 0' > Error 1/1 1`] = `
"
> 1 | 'foobar'.indexOf('foo') >= 0
    |          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(12): '\\'foobar\\'.indexOf(\\'foo\\') >= 0' > Output 1`] = `
"
  1 | 'foobar'.includes('foo')
"
`;

exports[`invalid(13): '\\'foobar\\'.lastIndexOf(\\'foo\\') >= 0' > Code 1`] = `
"
  1 | 'foobar'.lastIndexOf('foo') >= 0
"
`;

exports[`invalid(13): '\\'foobar\\'.lastIndexOf(\\'foo\\') >= 0' > Error 1/1 1`] = `
"
> 1 | 'foobar'.lastIndexOf('foo') >= 0
    |          ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(13): '\\'foobar\\'.lastIndexOf(\\'foo\\') >= 0' > Output 1`] = `
"
  1 | 'foobar'.includes('foo')
"
`;

exports[`invalid(14): '<template><div v-if="\\'foobar\\'.index…' > Code 1`] = `
"
  1 | <template><div v-if="'foobar'.indexOf('foo') >= 0"></div></template>
"
`;

exports[`invalid(14): '<template><div v-if="\\'foobar\\'.index…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="'foobar'.indexOf('foo') >= 0"></div></template>
    |                               ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(14): '<template><div v-if="\\'foobar\\'.index…' > Output 1`] = `
"
  1 | <template><div v-if="'foobar'.includes('foo')"></div></template>
"
`;

exports[`invalid(15): '[1,2,3].indexOf(4) !== -1' > Code 1`] = `
"
  1 | [1,2,3].indexOf(4) !== -1
"
`;

exports[`invalid(15): '[1,2,3].indexOf(4) !== -1' > Error 1/1 1`] = `
"
> 1 | [1,2,3].indexOf(4) !== -1
    |         ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(15): '[1,2,3].indexOf(4) !== -1' > Output 1`] = `
"
  1 | [1,2,3].includes(4)
"
`;

exports[`invalid(16): '[1,2,3].lastIndexOf(4) !== -1' > Code 1`] = `
"
  1 | [1,2,3].lastIndexOf(4) !== -1
"
`;

exports[`invalid(16): '[1,2,3].lastIndexOf(4) !== -1' > Error 1/1 1`] = `
"
> 1 | [1,2,3].lastIndexOf(4) !== -1
    |         ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(16): '[1,2,3].lastIndexOf(4) !== -1' > Output 1`] = `
"
  1 | [1,2,3].includes(4)
"
`;

exports[`invalid(17): '<template><div v-if="[1,2,3].indexOf(…' > Code 1`] = `
"
  1 | <template><div v-if="[1,2,3].indexOf(4) !== -1"></div></template>
"
`;

exports[`invalid(17): '<template><div v-if="[1,2,3].indexOf(…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="[1,2,3].indexOf(4) !== -1"></div></template>
    |                              ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(17): '<template><div v-if="[1,2,3].indexOf(…' > Output 1`] = `
"
  1 | <template><div v-if="[1,2,3].includes(4)"></div></template>
"
`;

exports[`invalid(18): 'str.indexOf(\\'foo\\') < 0' > Code 1`] = `
"
  1 | str.indexOf('foo') < 0
"
`;

exports[`invalid(18): 'str.indexOf(\\'foo\\') < 0' > Error 1/1 1`] = `
"
> 1 | str.indexOf('foo') < 0
    |     ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(18): 'str.indexOf(\\'foo\\') < 0' > Output 1`] = `
"
  1 | !str.includes('foo')
"
`;

exports[`invalid(19): 'str.lastIndexOf(\\'foo\\') < 0' > Code 1`] = `
"
  1 | str.lastIndexOf('foo') < 0
"
`;

exports[`invalid(19): 'str.lastIndexOf(\\'foo\\') < 0' > Error 1/1 1`] = `
"
> 1 | str.lastIndexOf('foo') < 0
    |     ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(19): 'str.lastIndexOf(\\'foo\\') < 0' > Output 1`] = `
"
  1 | !str.includes('foo')
"
`;

exports[`invalid(20): '<template><div v-if="str.indexOf(\\'fo…' > Code 1`] = `
"
  1 | <template><div v-if="str.indexOf('foo') < 0"></div></template>
"
`;

exports[`invalid(20): '<template><div v-if="str.indexOf(\\'fo…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="str.indexOf('foo') < 0"></div></template>
    |                          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(20): '<template><div v-if="str.indexOf(\\'fo…' > Output 1`] = `
"
  1 | <template><div v-if="!str.includes('foo')"></div></template>
"
`;

exports[`invalid(21): '\\'\\'.indexOf(\\'foo\\') < 0' > Code 1`] = `
"
  1 | ''.indexOf('foo') < 0
"
`;

exports[`invalid(21): '\\'\\'.indexOf(\\'foo\\') < 0' > Error 1/1 1`] = `
"
> 1 | ''.indexOf('foo') < 0
    |    ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(21): '\\'\\'.indexOf(\\'foo\\') < 0' > Output 1`] = `
"
  1 | !''.includes('foo')
"
`;

exports[`invalid(22): '\\'\\'.lastIndexOf(\\'foo\\') < 0' > Code 1`] = `
"
  1 | ''.lastIndexOf('foo') < 0
"
`;

exports[`invalid(22): '\\'\\'.lastIndexOf(\\'foo\\') < 0' > Error 1/1 1`] = `
"
> 1 | ''.lastIndexOf('foo') < 0
    |    ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(22): '\\'\\'.lastIndexOf(\\'foo\\') < 0' > Output 1`] = `
"
  1 | !''.includes('foo')
"
`;

exports[`invalid(23): '<template><div v-if="\\'\\'.indexOf(\\'f…' > Code 1`] = `
"
  1 | <template><div v-if="''.indexOf('foo') < 0"></div></template>
"
`;

exports[`invalid(23): '<template><div v-if="\\'\\'.indexOf(\\'f…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="''.indexOf('foo') < 0"></div></template>
    |                         ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(23): '<template><div v-if="\\'\\'.indexOf(\\'f…' > Output 1`] = `
"
  1 | <template><div v-if="!''.includes('foo')"></div></template>
"
`;

exports[`invalid(24): '(a || b).indexOf(\\'foo\\') === -1' > Code 1`] = `
"
  1 | (a || b).indexOf('foo') === -1
"
`;

exports[`invalid(24): '(a || b).indexOf(\\'foo\\') === -1' > Error 1/1 1`] = `
"
> 1 | (a || b).indexOf('foo') === -1
    |          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(24): '(a || b).indexOf(\\'foo\\') === -1' > Output 1`] = `
"
  1 | !(a || b).includes('foo')
"
`;

exports[`invalid(25): '(a || b).lastIndexOf(\\'foo\\') === -1' > Code 1`] = `
"
  1 | (a || b).lastIndexOf('foo') === -1
"
`;

exports[`invalid(25): '(a || b).lastIndexOf(\\'foo\\') === -1' > Error 1/1 1`] = `
"
> 1 | (a || b).lastIndexOf('foo') === -1
    |          ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(25): '(a || b).lastIndexOf(\\'foo\\') === -1' > Output 1`] = `
"
  1 | !(a || b).includes('foo')
"
`;

exports[`invalid(26): '<template><div v-if="(a || b).indexOf…' > Code 1`] = `
"
  1 | <template><div v-if="(a || b).indexOf('foo') === -1"></div></template>
"
`;

exports[`invalid(26): '<template><div v-if="(a || b).indexOf…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="(a || b).indexOf('foo') === -1"></div></template>
    |                               ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(26): '<template><div v-if="(a || b).indexOf…' > Output 1`] = `
"
  1 | <template><div v-if="!(a || b).includes('foo')"></div></template>
"
`;

exports[`invalid(27): 'foo.indexOf(bar, 0) !== -1' > Code 1`] = `
"
  1 | foo.indexOf(bar, 0) !== -1
"
`;

exports[`invalid(27): 'foo.indexOf(bar, 0) !== -1' > Error 1/1 1`] = `
"
> 1 | foo.indexOf(bar, 0) !== -1
    |     ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(27): 'foo.indexOf(bar, 0) !== -1' > Output 1`] = `
"
  1 | foo.includes(bar)
"
`;

exports[`invalid(28): 'foo.lastIndexOf(bar, 0) !== -1' > Code 1`] = `
"
  1 | foo.lastIndexOf(bar, 0) !== -1
"
`;

exports[`invalid(28): 'foo.lastIndexOf(bar, 0) !== -1' > Error 1/1 1`] = `
"
> 1 | foo.lastIndexOf(bar, 0) !== -1
    |     ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(28): 'foo.lastIndexOf(bar, 0) !== -1' > Output 1`] = `
"
  1 | foo.includes(bar)
"
`;

exports[`invalid(29): '<template><div v-if="foo.indexOf(bar,…' > Code 1`] = `
"
  1 | <template><div v-if="foo.indexOf(bar, 0) !== -1"></div></template>
"
`;

exports[`invalid(29): '<template><div v-if="foo.indexOf(bar,…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="foo.indexOf(bar, 0) !== -1"></div></template>
    |                          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(29): '<template><div v-if="foo.indexOf(bar,…' > Output 1`] = `
"
  1 | <template><div v-if="foo.includes(bar)"></div></template>
"
`;

exports[`invalid(30): 'foo.indexOf(bar, 1) !== -1' > Code 1`] = `
"
  1 | foo.indexOf(bar, 1) !== -1
"
`;

exports[`invalid(30): 'foo.indexOf(bar, 1) !== -1' > Error 1/1 1`] = `
"
> 1 | foo.indexOf(bar, 1) !== -1
    |     ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(30): 'foo.indexOf(bar, 1) !== -1' > Output 1`] = `
"
  1 | foo.includes(bar, 1)
"
`;

exports[`invalid(31): 'foo.lastIndexOf(bar, 1) !== -1' > Code 1`] = `
"
  1 | foo.lastIndexOf(bar, 1) !== -1
"
`;

exports[`invalid(31): 'foo.lastIndexOf(bar, 1) !== -1' > Error 1/1 1`] = `
"
> 1 | foo.lastIndexOf(bar, 1) !== -1
    |     ^^^^^^^^^^^ Use \`.includes()\`, rather than \`.lastIndexOf()\`, when checking for existence.
"
`;

exports[`invalid(31): 'foo.lastIndexOf(bar, 1) !== -1' > Output 1`] = `
"
  1 | foo.includes(bar, 1)
"
`;

exports[`invalid(32): '<template><div v-if="foo.indexOf(bar,…' > Code 1`] = `
"
  1 | <template><div v-if="foo.indexOf(bar, 1) !== -1"></div></template>
"
`;

exports[`invalid(32): '<template><div v-if="foo.indexOf(bar,…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="foo.indexOf(bar, 1) !== -1"></div></template>
    |                          ^^^^^^^ Use \`.includes()\`, rather than \`.indexOf()\`, when checking for existence.
"
`;

exports[`invalid(32): '<template><div v-if="foo.indexOf(bar,…' > Output 1`] = `
"
  1 | <template><div v-if="foo.includes(bar, 1)"></div></template>
"
`;
