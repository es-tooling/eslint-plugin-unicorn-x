// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'values.findIndex(x => x === "foo")' > Code 1`] = `
"
  1 | values.findIndex(x => x === "foo")
"
`;

exports[`invalid(0): 'values.findIndex(x => x === "foo")' > Error 1/1 1`] = `
"
> 1 | values.findIndex(x => x === "foo")
    |        ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
"
`;

exports[`invalid(0): 'values.findIndex(x => x === "foo")' > Output 1`] = `
"
  1 | values.indexOf("foo")
"
`;

exports[`invalid(0): 'values.findLastIndex(x => x === "foo")' > Code 1`] = `
"
  1 | values.findLastIndex(x => x === "foo")
"
`;

exports[`invalid(0): 'values.findLastIndex(x => x === "foo")' > Error 1/1 1`] = `
"
> 1 | values.findLastIndex(x => x === "foo")
    |        ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
"
`;

exports[`invalid(0): 'values.findLastIndex(x => x === "foo")' > Output 1`] = `
"
  1 | values.lastIndexOf("foo")
"
`;

exports[`invalid(1): 'values.findIndex(x => "foo" === x)' > Code 1`] = `
"
  1 | values.findIndex(x => "foo" === x)
"
`;

exports[`invalid(1): 'values.findIndex(x => "foo" === x)' > Error 1/1 1`] = `
"
> 1 | values.findIndex(x => "foo" === x)
    |        ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
"
`;

exports[`invalid(1): 'values.findIndex(x => "foo" === x)' > Output 1`] = `
"
  1 | values.indexOf("foo")
"
`;

exports[`invalid(1): 'values.findLastIndex(x => "foo" === x)' > Code 1`] = `
"
  1 | values.findLastIndex(x => "foo" === x)
"
`;

exports[`invalid(1): 'values.findLastIndex(x => "foo" === x)' > Error 1/1 1`] = `
"
> 1 | values.findLastIndex(x => "foo" === x)
    |        ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
"
`;

exports[`invalid(1): 'values.findLastIndex(x => "foo" === x)' > Output 1`] = `
"
  1 | values.lastIndexOf("foo")
"
`;

exports[`invalid(2): 'values.findIndex(x => {return x === "…' > Code 1`] = `
"
  1 | values.findIndex(x => {return x === "foo";})
"
`;

exports[`invalid(2): 'values.findIndex(x => {return x === "…' > Error 1/1 1`] = `
"
> 1 | values.findIndex(x => {return x === "foo";})
    |        ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
"
`;

exports[`invalid(2): 'values.findIndex(x => {return x === "…' > Output 1`] = `
"
  1 | values.indexOf("foo")
"
`;

exports[`invalid(2): 'values.findLastIndex(x => {return x =…' > Code 1`] = `
"
  1 | values.findLastIndex(x => {return x === "foo";})
"
`;

exports[`invalid(2): 'values.findLastIndex(x => {return x =…' > Error 1/1 1`] = `
"
> 1 | values.findLastIndex(x => {return x === "foo";})
    |        ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
"
`;

exports[`invalid(2): 'values.findLastIndex(x => {return x =…' > Output 1`] = `
"
  1 | values.lastIndexOf("foo")
"
`;

exports[`invalid(3): 'values.findIndex(function (x) {return…' > Code 1`] = `
"
  1 | values.findIndex(function (x) {return x === "foo";})
"
`;

exports[`invalid(3): 'values.findIndex(function (x) {return…' > Error 1/1 1`] = `
"
> 1 | values.findIndex(function (x) {return x === "foo";})
    |        ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
"
`;

exports[`invalid(3): 'values.findIndex(function (x) {return…' > Output 1`] = `
"
  1 | values.indexOf("foo")
"
`;

exports[`invalid(3): 'values.findLastIndex(function (x) {re…' > Code 1`] = `
"
  1 | values.findLastIndex(function (x) {return x === "foo";})
"
`;

exports[`invalid(3): 'values.findLastIndex(function (x) {re…' > Error 1/1 1`] = `
"
> 1 | values.findLastIndex(function (x) {return x === "foo";})
    |        ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
"
`;

exports[`invalid(3): 'values.findLastIndex(function (x) {re…' > Output 1`] = `
"
  1 | values.lastIndexOf("foo")
"
`;

exports[`invalid(4): '// 1\\n(0, values)\\n\\t// 2\\n\\t./* 3 */…' > Code 1`] = `
"
  1 | // 1
  2 | (0, values)
  3 | 	// 2
  4 | 	./* 3 */findIndex /* 3 */ (
  5 | 		/* 4 */
  6 | 		x /* 5 */ => /* 6 */ x /* 7 */ === /* 8 */ "foo" /* 9 */
  7 | 	) /* 10 */
"
`;

exports[`invalid(4): '// 1\\n(0, values)\\n\\t// 2\\n\\t./* 3 */…' > Code 2`] = `
"
  1 | // 1
  2 | (0, values)
  3 | 	// 2
  4 | 	./* 3 */findLastIndex /* 3 */ (
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
> 4 | 	./* 3 */findIndex /* 3 */ (
    | 	        ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
  5 | 		/* 4 */
  6 | 		x /* 5 */ => /* 6 */ x /* 7 */ === /* 8 */ "foo" /* 9 */
  7 | 	) /* 10 */
"
`;

exports[`invalid(4): '// 1\\n(0, values)\\n\\t// 2\\n\\t./* 3 */…' > Error 1/1 2`] = `
"
  1 | // 1
  2 | (0, values)
  3 | 	// 2
> 4 | 	./* 3 */findLastIndex /* 3 */ (
    | 	        ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
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
  4 | 	./* 3 */indexOf /* 3 */ (
  5 | 		/* 4 */
  6 | 		"foo" /* 9 */
  7 | 	) /* 10 */
"
`;

exports[`invalid(4): '// 1\\n(0, values)\\n\\t// 2\\n\\t./* 3 */…' > Output 2`] = `
"
  1 | // 1
  2 | (0, values)
  3 | 	// 2
  4 | 	./* 3 */lastIndexOf /* 3 */ (
  5 | 		/* 4 */
  6 | 		"foo" /* 9 */
  7 | 	) /* 10 */
"
`;

exports[`invalid(5): 'foo.findIndex(function (element) {\\n\\…' > Code 1`] = `
"
  1 | foo.findIndex(function (element) {
  2 | 	return element === bar.findIndex(x => x === 1);
  3 | });
"
`;

exports[`invalid(5): 'foo.findIndex(function (element) {\\n\\…' > Error 1/2 1`] = `
"
> 1 | foo.findIndex(function (element) {
    |     ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
  2 | 	return element === bar.findIndex(x => x === 1);
  3 | });

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.findIndex()\` with \`.indexOf()\`.
  1 | foo.indexOf(bar.findIndex(x => x === 1));
"
`;

exports[`invalid(5): 'foo.findIndex(function (element) {\\n\\…' > Error 2/2 1`] = `
"
  1 | foo.findIndex(function (element) {
> 2 | 	return element === bar.findIndex(x => x === 1);
    | 	                       ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
  3 | });
"
`;

exports[`invalid(5): 'foo.findIndex(function (element) {\\n\\…' > Output 1`] = `
"
  1 | foo.findIndex(function (element) {
  2 | 	return element === bar.indexOf(1);
  3 | });
"
`;

exports[`invalid(5): 'foo.findLastIndex(function (element) …' > Code 1`] = `
"
  1 | foo.findLastIndex(function (element) {
  2 | 	return element === bar.findLastIndex(x => x === 1);
  3 | });
"
`;

exports[`invalid(5): 'foo.findLastIndex(function (element) …' > Error 1/2 1`] = `
"
> 1 | foo.findLastIndex(function (element) {
    |     ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
  2 | 	return element === bar.findLastIndex(x => x === 1);
  3 | });

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.findLastIndex()\` with \`.lastIndexOf()\`.
  1 | foo.lastIndexOf(bar.findLastIndex(x => x === 1));
"
`;

exports[`invalid(5): 'foo.findLastIndex(function (element) …' > Error 2/2 1`] = `
"
  1 | foo.findLastIndex(function (element) {
> 2 | 	return element === bar.findLastIndex(x => x === 1);
    | 	                       ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
  3 | });
"
`;

exports[`invalid(5): 'foo.findLastIndex(function (element) …' > Output 1`] = `
"
  1 | foo.findLastIndex(function (element) {
  2 | 	return element === bar.lastIndexOf(1);
  3 | });
"
`;

exports[`invalid(6): 'values.findIndex(x => x === (0, "foo"…' > Code 1`] = `
"
  1 | values.findIndex(x => x === (0, "foo"))
"
`;

exports[`invalid(6): 'values.findIndex(x => x === (0, "foo"…' > Error 1/1 1`] = `
"
> 1 | values.findIndex(x => x === (0, "foo"))
    |        ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
"
`;

exports[`invalid(6): 'values.findIndex(x => x === (0, "foo"…' > Output 1`] = `
"
  1 | values.indexOf((0, "foo"))
"
`;

exports[`invalid(6): 'values.findLastIndex(x => x === (0, "…' > Code 1`] = `
"
  1 | values.findLastIndex(x => x === (0, "foo"))
"
`;

exports[`invalid(6): 'values.findLastIndex(x => x === (0, "…' > Error 1/1 1`] = `
"
> 1 | values.findLastIndex(x => x === (0, "foo"))
    |        ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
"
`;

exports[`invalid(6): 'values.findLastIndex(x => x === (0, "…' > Output 1`] = `
"
  1 | values.lastIndexOf((0, "foo"))
"
`;

exports[`invalid(7): 'values.findIndex((x => x === (0, "foo…' > Code 1`] = `
"
  1 | values.findIndex((x => x === (0, "foo")))
"
`;

exports[`invalid(7): 'values.findIndex((x => x === (0, "foo…' > Error 1/1 1`] = `
"
> 1 | values.findIndex((x => x === (0, "foo")))
    |        ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
"
`;

exports[`invalid(7): 'values.findIndex((x => x === (0, "foo…' > Output 1`] = `
"
  1 | values.indexOf((0, "foo"))
"
`;

exports[`invalid(7): 'values.findLastIndex((x => x === (0, …' > Code 1`] = `
"
  1 | values.findLastIndex((x => x === (0, "foo")))
"
`;

exports[`invalid(7): 'values.findLastIndex((x => x === (0, …' > Error 1/1 1`] = `
"
> 1 | values.findLastIndex((x => x === (0, "foo")))
    |        ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
"
`;

exports[`invalid(7): 'values.findLastIndex((x => x === (0, …' > Output 1`] = `
"
  1 | values.lastIndexOf((0, "foo"))
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.findIndex(x =>…' > Code 1`] = `
"
  1 | function fn() {
  2 | 	foo.findIndex(x => x === arguments.length)
  3 | }
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.findIndex(x =>…' > Error 1/1 1`] = `
"
  1 | function fn() {
> 2 | 	foo.findIndex(x => x === arguments.length)
    | 	    ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
  3 | }
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.findIndex(x =>…' > Output 1`] = `
"
  1 | function fn() {
  2 | 	foo.indexOf(arguments.length)
  3 | }
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.findLastIndex(…' > Code 1`] = `
"
  1 | function fn() {
  2 | 	foo.findLastIndex(x => x === arguments.length)
  3 | }
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.findLastIndex(…' > Error 1/1 1`] = `
"
  1 | function fn() {
> 2 | 	foo.findLastIndex(x => x === arguments.length)
    | 	    ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
  3 | }
"
`;

exports[`invalid(8): 'function fn() {\\n\\tfoo.findLastIndex(…' > Output 1`] = `
"
  1 | function fn() {
  2 | 	foo.lastIndexOf(arguments.length)
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.findIndex(x =>…' > Code 1`] = `
"
  1 | function fn() {
  2 | 	foo.findIndex(x => x === this[1])
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.findIndex(x =>…' > Error 1/1 1`] = `
"
  1 | function fn() {
> 2 | 	foo.findIndex(x => x === this[1])
    | 	    ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.findIndex(x =>…' > Output 1`] = `
"
  1 | function fn() {
  2 | 	foo.indexOf(this[1])
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.findLastIndex(…' > Code 1`] = `
"
  1 | function fn() {
  2 | 	foo.findLastIndex(x => x === this[1])
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.findLastIndex(…' > Error 1/1 1`] = `
"
  1 | function fn() {
> 2 | 	foo.findLastIndex(x => x === this[1])
    | 	    ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
  3 | }
"
`;

exports[`invalid(9): 'function fn() {\\n\\tfoo.findLastIndex(…' > Output 1`] = `
"
  1 | function fn() {
  2 | 	foo.lastIndexOf(this[1])
  3 | }
"
`;

exports[`invalid(10): 'values.findIndex(x => x === foo())' > Code 1`] = `
"
  1 | values.findIndex(x => x === foo())
"
`;

exports[`invalid(10): 'values.findIndex(x => x === foo())' > Error 1/1 1`] = `
"
> 1 | values.findIndex(x => x === foo())
    |        ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.findIndex()\` with \`.indexOf()\`.
  1 | values.indexOf(foo())
"
`;

exports[`invalid(10): 'values.findLastIndex(x => x === foo())' > Code 1`] = `
"
  1 | values.findLastIndex(x => x === foo())
"
`;

exports[`invalid(10): 'values.findLastIndex(x => x === foo())' > Error 1/1 1`] = `
"
> 1 | values.findLastIndex(x => x === foo())
    |        ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.findLastIndex()\` with \`.lastIndexOf()\`.
  1 | values.lastIndexOf(foo())
"
`;

exports[`invalid(11): 'foo.findIndex(function a(x) {\\n\\tretu…' > Code 1`] = `
"
  1 | foo.findIndex(function a(x) {
  2 | 	return x === (function (a) {
  3 | 		return a(this) === arguments[1]
  4 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument)
  5 | })
"
`;

exports[`invalid(11): 'foo.findIndex(function a(x) {\\n\\tretu…' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(function a(x) {
    |     ^^^^^^^^^ Use \`.indexOf()\` instead of \`.findIndex()\` when looking for the index of an item.
  2 | 	return x === (function (a) {
  3 | 		return a(this) === arguments[1]
  4 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument)
  5 | })

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.findIndex()\` with \`.indexOf()\`.
  1 | foo.indexOf((function (a) {
  2 | 		return a(this) === arguments[1]
  3 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument))
"
`;

exports[`invalid(11): 'foo.findLastIndex(function a(x) {\\n\\t…' > Code 1`] = `
"
  1 | foo.findLastIndex(function a(x) {
  2 | 	return x === (function (a) {
  3 | 		return a(this) === arguments[1]
  4 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument)
  5 | })
"
`;

exports[`invalid(11): 'foo.findLastIndex(function a(x) {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.findLastIndex(function a(x) {
    |     ^^^^^^^^^^^^^ Use \`.lastIndexOf()\` instead of \`findLastIndex() when looking for the index of an item.\`
  2 | 	return x === (function (a) {
  3 | 		return a(this) === arguments[1]
  4 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument)
  5 | })

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.findLastIndex()\` with \`.lastIndexOf()\`.
  1 | foo.lastIndexOf((function (a) {
  2 | 		return a(this) === arguments[1]
  3 | 	}).call(thisObject, anotherFunctionNamedA, secondArgument))
"
`;
