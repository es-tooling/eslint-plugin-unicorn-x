// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'parentNode.removeChild(foo)' > Code 1`] = `
"
  1 | parentNode.removeChild(foo)
"
`;

exports[`invalid(0): 'parentNode.removeChild(foo)' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild(foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(0): 'parentNode.removeChild(foo)' > Output 1`] = `
"
  1 | foo.remove()
"
`;

exports[`invalid(1): 'parentNode.removeChild(this)' > Code 1`] = `
"
  1 | parentNode.removeChild(this)
"
`;

exports[`invalid(1): 'parentNode.removeChild(this)' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild(this)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(1): 'parentNode.removeChild(this)' > Output 1`] = `
"
  1 | this.remove()
"
`;

exports[`invalid(2): 'parentNode.removeChild(some.node)' > Code 1`] = `
"
  1 | parentNode.removeChild(some.node)
"
`;

exports[`invalid(2): 'parentNode.removeChild(some.node)' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild(some.node)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(2): 'parentNode.removeChild(some.node)' > Output 1`] = `
"
  1 | some.node.remove()
"
`;

exports[`invalid(3): 'parentNode.removeChild(getChild())' > Code 1`] = `
"
  1 | parentNode.removeChild(getChild())
"
`;

exports[`invalid(3): 'parentNode.removeChild(getChild())' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild(getChild())
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(3): 'parentNode.removeChild(getChild())' > Output 1`] = `
"
  1 | getChild().remove()
"
`;

exports[`invalid(4): 'parentNode.removeChild(lib.getChild())' > Code 1`] = `
"
  1 | parentNode.removeChild(lib.getChild())
"
`;

exports[`invalid(4): 'parentNode.removeChild(lib.getChild())' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild(lib.getChild())
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(4): 'parentNode.removeChild(lib.getChild())' > Output 1`] = `
"
  1 | lib.getChild().remove()
"
`;

exports[`invalid(5): 'parentNode.removeChild((() => childNo…' > Code 1`] = `
"
  1 | parentNode.removeChild((() => childNode)())
"
`;

exports[`invalid(5): 'parentNode.removeChild((() => childNo…' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild((() => childNode)())
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(5): 'parentNode.removeChild((() => childNo…' > Output 1`] = `
"
  1 | (() => childNode)().remove()
"
`;

exports[`invalid(6): 'async function foo () {\\n\\tparentNode…' > Code 1`] = `
"
  1 | async function foo () {
  2 | 	parentNode.removeChild(
  3 | 		await getChild()
  4 | 	);
  5 | }
"
`;

exports[`invalid(6): 'async function foo () {\\n\\tparentNode…' > Error 1/1 1`] = `
"
  1 | async function foo () {
> 2 | 	parentNode.removeChild(
    | 	^^^^^^^^^^^^^^^^^^^^^^^
> 3 | 		await getChild()
    | ^^^^^^^^^^^^^^^^^^
> 4 | 	);
    | ^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
  5 | }
"
`;

exports[`invalid(6): 'async function foo () {\\n\\tparentNode…' > Output 1`] = `
"
  1 | async function foo () {
  2 | 	(await getChild()).remove();
  3 | }
"
`;

exports[`invalid(7): 'async function foo () {\\n\\tparentNode…' > Code 1`] = `
"
  1 | async function foo () {
  2 | 	parentNode.removeChild(
  3 | 		(await getChild())
  4 | 	);
  5 | }
"
`;

exports[`invalid(7): 'async function foo () {\\n\\tparentNode…' > Error 1/1 1`] = `
"
  1 | async function foo () {
> 2 | 	parentNode.removeChild(
    | 	^^^^^^^^^^^^^^^^^^^^^^^
> 3 | 		(await getChild())
    | ^^^^^^^^^^^^^^^^^^^^
> 4 | 	);
    | ^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
  5 | }
"
`;

exports[`invalid(7): 'async function foo () {\\n\\tparentNode…' > Output 1`] = `
"
  1 | async function foo () {
  2 | 	(await getChild()).remove();
  3 | }
"
`;

exports[`invalid(8): 'parentNode.removeChild((0, child))' > Code 1`] = `
"
  1 | parentNode.removeChild((0, child))
"
`;

exports[`invalid(8): 'parentNode.removeChild((0, child))' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild((0, child))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(8): 'parentNode.removeChild((0, child))' > Output 1`] = `
"
  1 | (0, child).remove()
"
`;

exports[`invalid(9): 'parentNode.removeChild( (  (new Image…' > Code 1`] = `
"
  1 | parentNode.removeChild( (  (new Image)) )
"
`;

exports[`invalid(9): 'parentNode.removeChild( (  (new Image…' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild( (  (new Image)) )
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(9): 'parentNode.removeChild( (  (new Image…' > Output 1`] = `
"
  1 | (  (new Image)).remove()
"
`;

exports[`invalid(10): 'parentNode.removeChild( new Audio )' > Code 1`] = `
"
  1 | parentNode.removeChild( new Audio )
"
`;

exports[`invalid(10): 'parentNode.removeChild( new Audio )' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild( new Audio )
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(10): 'parentNode.removeChild( new Audio )' > Output 1`] = `
"
  1 | (new Audio).remove()
"
`;

exports[`invalid(11): 'const array = []\\nparentNode.removeCh…' > Code 1`] = `
"
  1 | const array = []
  2 | parentNode.removeChild([a, b, c].reduce(child => child, child))
"
`;

exports[`invalid(11): 'const array = []\\nparentNode.removeCh…' > Error 1/1 1`] = `
"
  1 | const array = []
> 2 | parentNode.removeChild([a, b, c].reduce(child => child, child))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(11): 'const array = []\\nparentNode.removeCh…' > Output 1`] = `
"
  1 | const array = []
  2 | ;[a, b, c].reduce(child => child, child).remove()
"
`;

exports[`invalid(12): 'async function foo () {\\n\\tconst arra…' > Code 1`] = `
"
  1 | async function foo () {
  2 | 	const array = []
  3 | 	parentNode.removeChild(
  4 | 		await getChild()
  5 | 	);
  6 | }
"
`;

exports[`invalid(12): 'async function foo () {\\n\\tconst arra…' > Error 1/1 1`] = `
"
  1 | async function foo () {
  2 | 	const array = []
> 3 | 	parentNode.removeChild(
    | 	^^^^^^^^^^^^^^^^^^^^^^^
> 4 | 		await getChild()
    | ^^^^^^^^^^^^^^^^^^
> 5 | 	);
    | ^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
  6 | }
"
`;

exports[`invalid(12): 'async function foo () {\\n\\tconst arra…' > Output 1`] = `
"
  1 | async function foo () {
  2 | 	const array = []
  3 | 	;(await getChild()).remove();
  4 | }
"
`;

exports[`invalid(13): 'async function foo () {\\n\\tconst arra…' > Code 1`] = `
"
  1 | async function foo () {
  2 | 	const array = []
  3 | 	parentNode.removeChild(
  4 | 		(0, childNode)
  5 | 	);
  6 | }
"
`;

exports[`invalid(13): 'async function foo () {\\n\\tconst arra…' > Error 1/1 1`] = `
"
  1 | async function foo () {
  2 | 	const array = []
> 3 | 	parentNode.removeChild(
    | 	^^^^^^^^^^^^^^^^^^^^^^^
> 4 | 		(0, childNode)
    | ^^^^^^^^^^^^^^^^
> 5 | 	);
    | ^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
  6 | }
"
`;

exports[`invalid(13): 'async function foo () {\\n\\tconst arra…' > Output 1`] = `
"
  1 | async function foo () {
  2 | 	const array = []
  3 | 	;(0, childNode).remove();
  4 | }
"
`;

exports[`invalid(14): 'if (parentNode.removeChild(foo)) {}' > Code 1`] = `
"
  1 | if (parentNode.removeChild(foo)) {}
"
`;

exports[`invalid(14): 'if (parentNode.removeChild(foo)) {}' > Error 1/1 1`] = `
"
> 1 | if (parentNode.removeChild(foo)) {}
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | if (foo.remove()) {}
"
`;

exports[`invalid(15): 'var removed = parentNode.removeChild(…' > Code 1`] = `
"
  1 | var removed = parentNode.removeChild(child);
"
`;

exports[`invalid(15): 'var removed = parentNode.removeChild(…' > Error 1/1 1`] = `
"
> 1 | var removed = parentNode.removeChild(child);
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | var removed = child.remove();
"
`;

exports[`invalid(16): 'const foo = parentNode.removeChild(ch…' > Code 1`] = `
"
  1 | const foo = parentNode.removeChild(child);
"
`;

exports[`invalid(16): 'const foo = parentNode.removeChild(ch…' > Error 1/1 1`] = `
"
> 1 | const foo = parentNode.removeChild(child);
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | const foo = child.remove();
"
`;

exports[`invalid(17): 'foo.bar(parentNode.removeChild(child)…' > Code 1`] = `
"
  1 | foo.bar(parentNode.removeChild(child));
"
`;

exports[`invalid(17): 'foo.bar(parentNode.removeChild(child)…' > Error 1/1 1`] = `
"
> 1 | foo.bar(parentNode.removeChild(child));
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | foo.bar(child.remove());
"
`;

exports[`invalid(18): 'parentNode.removeChild(child) || "foo…' > Code 1`] = `
"
  1 | parentNode.removeChild(child) || "foo";
"
`;

exports[`invalid(18): 'parentNode.removeChild(child) || "foo…' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild(child) || "foo";
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | child.remove() || "foo";
"
`;

exports[`invalid(19): 'parentNode.removeChild(child) + 0;' > Code 1`] = `
"
  1 | parentNode.removeChild(child) + 0;
"
`;

exports[`invalid(19): 'parentNode.removeChild(child) + 0;' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild(child) + 0;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | child.remove() + 0;
"
`;

exports[`invalid(20): '+parentNode.removeChild(child);' > Code 1`] = `
"
  1 | +parentNode.removeChild(child);
"
`;

exports[`invalid(20): '+parentNode.removeChild(child);' > Error 1/1 1`] = `
"
> 1 | +parentNode.removeChild(child);
    |  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | +child.remove();
"
`;

exports[`invalid(21): 'parentNode.removeChild(child) ? "foo"…' > Code 1`] = `
"
  1 | parentNode.removeChild(child) ? "foo" : "bar";
"
`;

exports[`invalid(21): 'parentNode.removeChild(child) ? "foo"…' > Error 1/1 1`] = `
"
> 1 | parentNode.removeChild(child) ? "foo" : "bar";
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | child.remove() ? "foo" : "bar";
"
`;

exports[`invalid(22): 'if (parentNode.removeChild(child)) {}' > Code 1`] = `
"
  1 | if (parentNode.removeChild(child)) {}
"
`;

exports[`invalid(22): 'if (parentNode.removeChild(child)) {}' > Error 1/1 1`] = `
"
> 1 | if (parentNode.removeChild(child)) {}
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | if (child.remove()) {}
"
`;

exports[`invalid(23): 'const foo = [parentNode.removeChild(c…' > Code 1`] = `
"
  1 | const foo = [parentNode.removeChild(child)]
"
`;

exports[`invalid(23): 'const foo = [parentNode.removeChild(c…' > Error 1/1 1`] = `
"
> 1 | const foo = [parentNode.removeChild(child)]
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | const foo = [child.remove()]
"
`;

exports[`invalid(24): 'const foo = { bar: parentNode.removeC…' > Code 1`] = `
"
  1 | const foo = { bar: parentNode.removeChild(child) }
"
`;

exports[`invalid(24): 'const foo = { bar: parentNode.removeC…' > Error 1/1 1`] = `
"
> 1 | const foo = { bar: parentNode.removeChild(child) }
    |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | const foo = { bar: child.remove() }
"
`;

exports[`invalid(25): 'function foo() { return parentNode.re…' > Code 1`] = `
"
  1 | function foo() { return parentNode.removeChild(child); }
"
`;

exports[`invalid(25): 'function foo() { return parentNode.re…' > Error 1/1 1`] = `
"
> 1 | function foo() { return parentNode.removeChild(child); }
    |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | function foo() { return child.remove(); }
"
`;

exports[`invalid(26): 'const foo = () => { return parentElem…' > Code 1`] = `
"
  1 | const foo = () => { return parentElement.removeChild(child); }
"
`;

exports[`invalid(26): 'const foo = () => { return parentElem…' > Error 1/1 1`] = `
"
> 1 | const foo = () => { return parentElement.removeChild(child); }
    |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | const foo = () => { return child.remove(); }
"
`;

exports[`invalid(27): 'foo(bar = parentNode.removeChild(chil…' > Code 1`] = `
"
  1 | foo(bar = parentNode.removeChild(child))
"
`;

exports[`invalid(27): 'foo(bar = parentNode.removeChild(chil…' > Error 1/1 1`] = `
"
> 1 | foo(bar = parentNode.removeChild(child))
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | foo(bar = child.remove())
"
`;

exports[`invalid(28): 'foo().removeChild(child)' > Code 1`] = `
"
  1 | foo().removeChild(child)
"
`;

exports[`invalid(28): 'foo().removeChild(child)' > Error 1/1 1`] = `
"
> 1 | foo().removeChild(child)
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | child.remove()
"
`;

exports[`invalid(29): 'foo[doSomething()].removeChild(child)' > Code 1`] = `
"
  1 | foo[doSomething()].removeChild(child)
"
`;

exports[`invalid(29): 'foo[doSomething()].removeChild(child)' > Error 1/1 1`] = `
"
> 1 | foo[doSomething()].removeChild(child)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | child.remove()
"
`;

exports[`invalid(30): 'parentNode?.removeChild(foo)' > Code 1`] = `
"
  1 | parentNode?.removeChild(foo)
"
`;

exports[`invalid(30): 'parentNode?.removeChild(foo)' > Error 1/1 1`] = `
"
> 1 | parentNode?.removeChild(foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode?.remove()\`.
  1 | foo?.remove()

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | foo.remove()
"
`;

exports[`invalid(31): 'foo?.parentNode.removeChild(foo)' > Code 1`] = `
"
  1 | foo?.parentNode.removeChild(foo)
"
`;

exports[`invalid(31): 'foo?.parentNode.removeChild(foo)' > Error 1/1 1`] = `
"
> 1 | foo?.parentNode.removeChild(foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(31): 'foo?.parentNode.removeChild(foo)' > Output 1`] = `
"
  1 | foo?.remove()
"
`;

exports[`invalid(32): 'foo.parentNode?.removeChild(foo)' > Code 1`] = `
"
  1 | foo.parentNode?.removeChild(foo)
"
`;

exports[`invalid(32): 'foo.parentNode?.removeChild(foo)' > Error 1/1 1`] = `
"
> 1 | foo.parentNode?.removeChild(foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode?.remove()\`.
  1 | foo?.remove()

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | foo.remove()
"
`;

exports[`invalid(33): 'foo?.parentNode?.removeChild(foo)' > Code 1`] = `
"
  1 | foo?.parentNode?.removeChild(foo)
"
`;

exports[`invalid(33): 'foo?.parentNode?.removeChild(foo)' > Error 1/1 1`] = `
"
> 1 | foo?.parentNode?.removeChild(foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode?.remove()\`.
  1 | foo?.remove()

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | foo.remove()
"
`;

exports[`invalid(34): 'foo.bar?.parentNode.removeChild(foo.b…' > Code 1`] = `
"
  1 | foo.bar?.parentNode.removeChild(foo.bar)
"
`;

exports[`invalid(34): 'foo.bar?.parentNode.removeChild(foo.b…' > Error 1/1 1`] = `
"
> 1 | foo.bar?.parentNode.removeChild(foo.bar)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode?.remove()\`.
  1 | foo.bar?.remove()

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | foo.bar.remove()
"
`;

exports[`invalid(35): 'a.b?.c.parentNode.removeChild(foo)' > Code 1`] = `
"
  1 | a.b?.c.parentNode.removeChild(foo)
"
`;

exports[`invalid(35): 'a.b?.c.parentNode.removeChild(foo)' > Error 1/1 1`] = `
"
> 1 | a.b?.c.parentNode.removeChild(foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode?.remove()\`.
  1 | foo?.remove()

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | foo.remove()
"
`;

exports[`invalid(36): 'a[b?.c].parentNode.removeChild(foo)' > Code 1`] = `
"
  1 | a[b?.c].parentNode.removeChild(foo)
"
`;

exports[`invalid(36): 'a[b?.c].parentNode.removeChild(foo)' > Error 1/1 1`] = `
"
> 1 | a[b?.c].parentNode.removeChild(foo)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.
"
`;

exports[`invalid(36): 'a[b?.c].parentNode.removeChild(foo)' > Output 1`] = `
"
  1 | foo.remove()
"
`;

exports[`invalid(37): 'a?.b.parentNode.removeChild(a.b)' > Code 1`] = `
"
  1 | a?.b.parentNode.removeChild(a.b)
"
`;

exports[`invalid(37): 'a?.b.parentNode.removeChild(a.b)' > Error 1/1 1`] = `
"
> 1 | a?.b.parentNode.removeChild(a.b)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`childNode.remove()\` over \`parentNode.removeChild(childNode)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode?.remove()\`.
  1 | a.b?.remove()

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`parentNode.removeChild(childNode)\` with \`childNode.remove()\`.
  1 | a.b.remove()
"
`;
