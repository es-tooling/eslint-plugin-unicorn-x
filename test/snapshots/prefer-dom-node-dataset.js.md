// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'element.getAttribute(\\n\\t"data-foo", …' > Code 1`] = `
"
  1 | element.getAttribute(
  2 | 	"data-foo", // comment
  3 | );
"
`;

exports[`invalid(0): 'element.getAttribute(\\n\\t"data-foo", …' > Error 1/1 1`] = `
"
> 1 | element.getAttribute(
    | ^^^^^^^^^^^^^^^^^^^^^
> 2 | 	"data-foo", // comment
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 3 | );
    | ^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(0): 'element.getAttribute(\\n\\t"data-foo", …' > Output 1`] = `
"
  1 | element.dataset.foo;
"
`;

exports[`invalid(0): 'element.hasAttribute(\\n\\t"data-foo", …' > Code 1`] = `
"
  1 | element.hasAttribute(
  2 | 	"data-foo", // comment
  3 | );
"
`;

exports[`invalid(0): 'element.hasAttribute(\\n\\t"data-foo", …' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute(
    | ^^^^^^^^^^^^^^^^^^^^^
> 2 | 	"data-foo", // comment
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 3 | );
    | ^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(0): 'element.hasAttribute(\\n\\t"data-foo", …' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "foo");
"
`;

exports[`invalid(0): 'element.removeAttribute(\\n\\t"data-foo…' > Code 1`] = `
"
  1 | element.removeAttribute(
  2 | 	"data-foo", // comment
  3 | );
"
`;

exports[`invalid(0): 'element.removeAttribute(\\n\\t"data-foo…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute(
    | ^^^^^^^^^^^^^^^^^^^^^^^^
> 2 | 	"data-foo", // comment
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 3 | );
    | ^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(0): 'element.removeAttribute(\\n\\t"data-foo…' > Output 1`] = `
"
  1 | delete element.dataset.foo;
"
`;

exports[`invalid(0): 'element.setAttribute(\\n\\t\\'data-foo\\'…' > Code 1`] = `
"
  1 | element.setAttribute(
  2 | 	'data-foo', // comment
  3 | 	'bar' // comment
  4 | );
"
`;

exports[`invalid(0): 'element.setAttribute(\\n\\t\\'data-foo\\'…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute(
    | ^^^^^^^^^^^^^^^^^^^^^
> 2 | 	'data-foo', // comment
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 3 | 	'bar' // comment
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 | );
    | ^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(0): 'element.setAttribute(\\n\\t\\'data-foo\\'…' > Output 1`] = `
"
  1 | element.dataset.foo = 'bar';
"
`;

exports[`invalid(1): 'element.getAttribute(\\'data-unicorn\\'…' > Code 1`] = `
"
  1 | element.getAttribute('data-unicorn');
"
`;

exports[`invalid(1): 'element.getAttribute(\\'data-unicorn\\'…' > Error 1/1 1`] = `
"
> 1 | element.getAttribute('data-unicorn');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(1): 'element.getAttribute(\\'data-unicorn\\'…' > Output 1`] = `
"
  1 | element.dataset.unicorn;
"
`;

exports[`invalid(1): 'element.hasAttribute(\\'data-unicorn\\'…' > Code 1`] = `
"
  1 | element.hasAttribute('data-unicorn');
"
`;

exports[`invalid(1): 'element.hasAttribute(\\'data-unicorn\\'…' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute('data-unicorn');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(1): 'element.hasAttribute(\\'data-unicorn\\'…' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, 'unicorn');
"
`;

exports[`invalid(1): 'element.removeAttribute(\\'data-unicor…' > Code 1`] = `
"
  1 | element.removeAttribute('data-unicorn');
"
`;

exports[`invalid(1): 'element.removeAttribute(\\'data-unicor…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute('data-unicorn');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(1): 'element.removeAttribute(\\'data-unicor…' > Output 1`] = `
"
  1 | delete element.dataset.unicorn;
"
`;

exports[`invalid(1): 'element.setAttribute(\\'data-unicorn\\'…' > Code 1`] = `
"
  1 | element.setAttribute('data-unicorn', '🦄');
"
`;

exports[`invalid(1): 'element.setAttribute(\\'data-unicorn\\'…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute('data-unicorn', '🦄');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(1): 'element.setAttribute(\\'data-unicorn\\'…' > Output 1`] = `
"
  1 | element.dataset.unicorn = '🦄';
"
`;

exports[`invalid(2): 'element.getAttribute("data-unicorn");' > Code 1`] = `
"
  1 | element.getAttribute("data-unicorn");
"
`;

exports[`invalid(2): 'element.getAttribute("data-unicorn");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-unicorn");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(2): 'element.getAttribute("data-unicorn");' > Output 1`] = `
"
  1 | element.dataset.unicorn;
"
`;

exports[`invalid(2): 'element.hasAttribute("data-unicorn");' > Code 1`] = `
"
  1 | element.hasAttribute("data-unicorn");
"
`;

exports[`invalid(2): 'element.hasAttribute("data-unicorn");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-unicorn");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(2): 'element.hasAttribute("data-unicorn");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "unicorn");
"
`;

exports[`invalid(2): 'element.removeAttribute("data-unicorn…' > Code 1`] = `
"
  1 | element.removeAttribute("data-unicorn");
"
`;

exports[`invalid(2): 'element.removeAttribute("data-unicorn…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-unicorn");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(2): 'element.removeAttribute("data-unicorn…' > Output 1`] = `
"
  1 | delete element.dataset.unicorn;
"
`;

exports[`invalid(2): 'element.setAttribute(\\'data-🦄\\', \\'…' > Code 1`] = `
"
  1 | element.setAttribute('data-🦄', '🦄');
"
`;

exports[`invalid(2): 'element.setAttribute(\\'data-🦄\\', \\'…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute('data-🦄', '🦄');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(2): 'element.setAttribute(\\'data-🦄\\', \\'…' > Output 1`] = `
"
  1 | element.dataset['🦄'] = '🦄';
"
`;

exports[`invalid(3): 'element.getAttribute("data-unicorn",);' > Code 1`] = `
"
  1 | element.getAttribute("data-unicorn",);
"
`;

exports[`invalid(3): 'element.getAttribute("data-unicorn",);' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-unicorn",);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(3): 'element.getAttribute("data-unicorn",);' > Output 1`] = `
"
  1 | element.dataset.unicorn;
"
`;

exports[`invalid(3): 'element.hasAttribute("data-unicorn",);' > Code 1`] = `
"
  1 | element.hasAttribute("data-unicorn",);
"
`;

exports[`invalid(3): 'element.hasAttribute("data-unicorn",);' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-unicorn",);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(3): 'element.hasAttribute("data-unicorn",);' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "unicorn");
"
`;

exports[`invalid(3): 'element.removeAttribute("data-unicorn…' > Code 1`] = `
"
  1 | element.removeAttribute("data-unicorn",);
"
`;

exports[`invalid(3): 'element.removeAttribute("data-unicorn…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-unicorn",);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(3): 'element.removeAttribute("data-unicorn…' > Output 1`] = `
"
  1 | delete element.dataset.unicorn;
"
`;

exports[`invalid(3): 'element.setAttribute(\\'data-ゆ\\', \\'ゆ\\…' > Code 1`] = `
"
  1 | element.setAttribute('data-ゆ', 'ゆ');
"
`;

exports[`invalid(3): 'element.setAttribute(\\'data-ゆ\\', \\'ゆ\\…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute('data-ゆ', 'ゆ');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(3): 'element.setAttribute(\\'data-ゆ\\', \\'ゆ\\…' > Output 1`] = `
"
  1 | element.dataset.ゆ = 'ゆ';
"
`;

exports[`invalid(4): 'element.getAttribute("data-🦄");' > Code 1`] = `
"
  1 | element.getAttribute("data-🦄");
"
`;

exports[`invalid(4): 'element.getAttribute("data-🦄");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(4): 'element.getAttribute("data-🦄");' > Output 1`] = `
"
  1 | element.dataset["🦄"];
"
`;

exports[`invalid(4): 'element.hasAttribute("data-🦄");' > Code 1`] = `
"
  1 | element.hasAttribute("data-🦄");
"
`;

exports[`invalid(4): 'element.hasAttribute("data-🦄");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(4): 'element.hasAttribute("data-🦄");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "🦄");
"
`;

exports[`invalid(4): 'element.removeAttribute("data-🦄");' > Code 1`] = `
"
  1 | element.removeAttribute("data-🦄");
"
`;

exports[`invalid(4): 'element.removeAttribute("data-🦄");' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(4): 'element.removeAttribute("data-🦄");' > Output 1`] = `
"
  1 | delete element.dataset["🦄"];
"
`;

exports[`invalid(4): 'element.setAttribute(\\'data-foo2\\', \\…' > Code 1`] = `
"
  1 | element.setAttribute('data-foo2', '🦄');
"
`;

exports[`invalid(4): 'element.setAttribute(\\'data-foo2\\', \\…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute('data-foo2', '🦄');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(4): 'element.setAttribute(\\'data-foo2\\', \\…' > Output 1`] = `
"
  1 | element.dataset.foo2 = '🦄';
"
`;

exports[`invalid(5): 'element.getAttribute("data-ゆ");' > Code 1`] = `
"
  1 | element.getAttribute("data-ゆ");
"
`;

exports[`invalid(5): 'element.getAttribute("data-ゆ");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-ゆ");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(5): 'element.getAttribute("data-ゆ");' > Output 1`] = `
"
  1 | element.dataset.ゆ;
"
`;

exports[`invalid(5): 'element.hasAttribute("data-ゆ");' > Code 1`] = `
"
  1 | element.hasAttribute("data-ゆ");
"
`;

exports[`invalid(5): 'element.hasAttribute("data-ゆ");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-ゆ");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(5): 'element.hasAttribute("data-ゆ");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "ゆ");
"
`;

exports[`invalid(5): 'element.removeAttribute("data-ゆ");' > Code 1`] = `
"
  1 | element.removeAttribute("data-ゆ");
"
`;

exports[`invalid(5): 'element.removeAttribute("data-ゆ");' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-ゆ");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(5): 'element.removeAttribute("data-ゆ");' > Output 1`] = `
"
  1 | delete element.dataset.ゆ;
"
`;

exports[`invalid(5): 'element.setAttribute(\\'data-foo:bar\\'…' > Code 1`] = `
"
  1 | element.setAttribute('data-foo:bar', 'zaz');
"
`;

exports[`invalid(5): 'element.setAttribute(\\'data-foo:bar\\'…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute('data-foo:bar', 'zaz');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(5): 'element.setAttribute(\\'data-foo:bar\\'…' > Output 1`] = `
"
  1 | element.dataset['foo:bar'] = 'zaz';
"
`;

exports[`invalid(6): 'element.getAttribute("data-foo2");' > Code 1`] = `
"
  1 | element.getAttribute("data-foo2");
"
`;

exports[`invalid(6): 'element.getAttribute("data-foo2");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-foo2");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(6): 'element.getAttribute("data-foo2");' > Output 1`] = `
"
  1 | element.dataset.foo2;
"
`;

exports[`invalid(6): 'element.hasAttribute("data-foo2");' > Code 1`] = `
"
  1 | element.hasAttribute("data-foo2");
"
`;

exports[`invalid(6): 'element.hasAttribute("data-foo2");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-foo2");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(6): 'element.hasAttribute("data-foo2");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "foo2");
"
`;

exports[`invalid(6): 'element.removeAttribute("data-foo2");' > Code 1`] = `
"
  1 | element.removeAttribute("data-foo2");
"
`;

exports[`invalid(6): 'element.removeAttribute("data-foo2");' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-foo2");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(6): 'element.removeAttribute("data-foo2");' > Output 1`] = `
"
  1 | delete element.dataset.foo2;
"
`;

exports[`invalid(6): 'element.setAttribute("data-foo:bar", …' > Code 1`] = `
"
  1 | element.setAttribute("data-foo:bar", "zaz");
"
`;

exports[`invalid(6): 'element.setAttribute("data-foo:bar", …' > Error 1/1 1`] = `
"
> 1 | element.setAttribute("data-foo:bar", "zaz");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(6): 'element.setAttribute("data-foo:bar", …' > Output 1`] = `
"
  1 | element.dataset["foo:bar"] = "zaz";
"
`;

exports[`invalid(7): 'element.getAttribute("data-foo:bar");' > Code 1`] = `
"
  1 | element.getAttribute("data-foo:bar");
"
`;

exports[`invalid(7): 'element.getAttribute("data-foo:bar");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-foo:bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(7): 'element.getAttribute("data-foo:bar");' > Output 1`] = `
"
  1 | element.dataset["foo:bar"];
"
`;

exports[`invalid(7): 'element.hasAttribute("data-foo:bar");' > Code 1`] = `
"
  1 | element.hasAttribute("data-foo:bar");
"
`;

exports[`invalid(7): 'element.hasAttribute("data-foo:bar");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-foo:bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(7): 'element.hasAttribute("data-foo:bar");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "foo:bar");
"
`;

exports[`invalid(7): 'element.removeAttribute("data-foo:bar…' > Code 1`] = `
"
  1 | element.removeAttribute("data-foo:bar");
"
`;

exports[`invalid(7): 'element.removeAttribute("data-foo:bar…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-foo:bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(7): 'element.removeAttribute("data-foo:bar…' > Output 1`] = `
"
  1 | delete element.dataset["foo:bar"];
"
`;

exports[`invalid(7): 'element.setAttribute(\\'data-foo.bar\\'…' > Code 1`] = `
"
  1 | element.setAttribute('data-foo.bar', 'zaz');
"
`;

exports[`invalid(7): 'element.setAttribute(\\'data-foo.bar\\'…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute('data-foo.bar', 'zaz');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(7): 'element.setAttribute(\\'data-foo.bar\\'…' > Output 1`] = `
"
  1 | element.dataset['foo.bar'] = 'zaz';
"
`;

exports[`invalid(8): 'element.getAttribute("data-foo:bar");' > Code 1`] = `
"
  1 | element.getAttribute("data-foo:bar");
"
`;

exports[`invalid(8): 'element.getAttribute("data-foo:bar");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-foo:bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(8): 'element.getAttribute("data-foo:bar");' > Output 1`] = `
"
  1 | element.dataset["foo:bar"];
"
`;

exports[`invalid(8): 'element.hasAttribute("data-foo:bar");' > Code 1`] = `
"
  1 | element.hasAttribute("data-foo:bar");
"
`;

exports[`invalid(8): 'element.hasAttribute("data-foo:bar");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-foo:bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(8): 'element.hasAttribute("data-foo:bar");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "foo:bar");
"
`;

exports[`invalid(8): 'element.removeAttribute("data-foo:bar…' > Code 1`] = `
"
  1 | element.removeAttribute("data-foo:bar");
"
`;

exports[`invalid(8): 'element.removeAttribute("data-foo:bar…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-foo:bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(8): 'element.removeAttribute("data-foo:bar…' > Output 1`] = `
"
  1 | delete element.dataset["foo:bar"];
"
`;

exports[`invalid(8): 'element.setAttribute(\\'data-foo-bar\\'…' > Code 1`] = `
"
  1 | element.setAttribute('data-foo-bar', 'zaz');
"
`;

exports[`invalid(8): 'element.setAttribute(\\'data-foo-bar\\'…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute('data-foo-bar', 'zaz');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(8): 'element.setAttribute(\\'data-foo-bar\\'…' > Output 1`] = `
"
  1 | element.dataset.fooBar = 'zaz';
"
`;

exports[`invalid(9): 'element.getAttribute("data-foo.bar");' > Code 1`] = `
"
  1 | element.getAttribute("data-foo.bar");
"
`;

exports[`invalid(9): 'element.getAttribute("data-foo.bar");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-foo.bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(9): 'element.getAttribute("data-foo.bar");' > Output 1`] = `
"
  1 | element.dataset["foo.bar"];
"
`;

exports[`invalid(9): 'element.hasAttribute("data-foo.bar");' > Code 1`] = `
"
  1 | element.hasAttribute("data-foo.bar");
"
`;

exports[`invalid(9): 'element.hasAttribute("data-foo.bar");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-foo.bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(9): 'element.hasAttribute("data-foo.bar");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "foo.bar");
"
`;

exports[`invalid(9): 'element.removeAttribute("data-foo.bar…' > Code 1`] = `
"
  1 | element.removeAttribute("data-foo.bar");
"
`;

exports[`invalid(9): 'element.removeAttribute("data-foo.bar…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-foo.bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(9): 'element.removeAttribute("data-foo.bar…' > Output 1`] = `
"
  1 | delete element.dataset["foo.bar"];
"
`;

exports[`invalid(9): 'element.setAttribute(\\'data-foo\\', /*…' > Code 1`] = `
"
  1 | element.setAttribute('data-foo', /* comment */ 'bar');
"
`;

exports[`invalid(9): 'element.setAttribute(\\'data-foo\\', /*…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute('data-foo', /* comment */ 'bar');
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(9): 'element.setAttribute(\\'data-foo\\', /*…' > Output 1`] = `
"
  1 | element.dataset.foo = 'bar';
"
`;

exports[`invalid(10): 'element.getAttribute("data-foo-bar");' > Code 1`] = `
"
  1 | element.getAttribute("data-foo-bar");
"
`;

exports[`invalid(10): 'element.getAttribute("data-foo-bar");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-foo-bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(10): 'element.getAttribute("data-foo-bar");' > Output 1`] = `
"
  1 | element.dataset.fooBar;
"
`;

exports[`invalid(10): 'element.hasAttribute("data-foo-bar");' > Code 1`] = `
"
  1 | element.hasAttribute("data-foo-bar");
"
`;

exports[`invalid(10): 'element.hasAttribute("data-foo-bar");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-foo-bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(10): 'element.hasAttribute("data-foo-bar");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "fooBar");
"
`;

exports[`invalid(10): 'element.querySelector(\\'#selector\\').…' > Code 1`] = `
"
  1 | element.querySelector('#selector').setAttribute('data-AllowAccess', true);
"
`;

exports[`invalid(10): 'element.querySelector(\\'#selector\\').…' > Error 1/1 1`] = `
"
> 1 | element.querySelector('#selector').setAttribute('data-AllowAccess', true);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(10): 'element.querySelector(\\'#selector\\').…' > Output 1`] = `
"
  1 | element.querySelector('#selector').dataset.allowaccess = true;
"
`;

exports[`invalid(10): 'element.removeAttribute("data-foo-bar…' > Code 1`] = `
"
  1 | element.removeAttribute("data-foo-bar");
"
`;

exports[`invalid(10): 'element.removeAttribute("data-foo-bar…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-foo-bar");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(10): 'element.removeAttribute("data-foo-bar…' > Output 1`] = `
"
  1 | delete element.dataset.fooBar;
"
`;

exports[`invalid(11): 'element.getAttribute("data-foo");' > Code 1`] = `
"
  1 | element.getAttribute("data-foo");
"
`;

exports[`invalid(11): 'element.getAttribute("data-foo");' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-foo");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(11): 'element.getAttribute("data-foo");' > Output 1`] = `
"
  1 | element.dataset.foo;
"
`;

exports[`invalid(11): 'element.hasAttribute("data-foo");' > Code 1`] = `
"
  1 | element.hasAttribute("data-foo");
"
`;

exports[`invalid(11): 'element.hasAttribute("data-foo");' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-foo");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(11): 'element.hasAttribute("data-foo");' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "foo");
"
`;

exports[`invalid(11): 'element.removeAttribute("data-foo");' > Code 1`] = `
"
  1 | element.removeAttribute("data-foo");
"
`;

exports[`invalid(11): 'element.removeAttribute("data-foo");' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-foo");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(11): 'element.removeAttribute("data-foo");' > Output 1`] = `
"
  1 | delete element.dataset.foo;
"
`;

exports[`invalid(11): 'element.setAttribute("data-", "🦄");' > Code 1`] = `
"
  1 | element.setAttribute("data-", "🦄");
"
`;

exports[`invalid(11): 'element.setAttribute("data-", "🦄");' > Error 1/1 1`] = `
"
> 1 | element.setAttribute("data-", "🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(11): 'element.setAttribute("data-", "🦄");' > Output 1`] = `
"
  1 | element.dataset[""] = "🦄";
"
`;

exports[`invalid(12): 'element.querySelector("#selector").ge…' > Code 1`] = `
"
  1 | element.querySelector("#selector").getAttribute("data-AllowAccess");
"
`;

exports[`invalid(12): 'element.querySelector("#selector").ge…' > Error 1/1 1`] = `
"
> 1 | element.querySelector("#selector").getAttribute("data-AllowAccess");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(12): 'element.querySelector("#selector").ge…' > Output 1`] = `
"
  1 | element.querySelector("#selector").dataset.allowaccess;
"
`;

exports[`invalid(12): 'element.querySelector("#selector").ha…' > Code 1`] = `
"
  1 | element.querySelector("#selector").hasAttribute("data-AllowAccess");
"
`;

exports[`invalid(12): 'element.querySelector("#selector").ha…' > Error 1/1 1`] = `
"
> 1 | element.querySelector("#selector").hasAttribute("data-AllowAccess");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(12): 'element.querySelector("#selector").ha…' > Output 1`] = `
"
  1 | Object.hasOwn(element.querySelector("#selector").dataset, "allowaccess");
"
`;

exports[`invalid(12): 'element.querySelector("#selector").re…' > Code 1`] = `
"
  1 | element.querySelector("#selector").removeAttribute("data-AllowAccess");
"
`;

exports[`invalid(12): 'element.querySelector("#selector").re…' > Error 1/1 1`] = `
"
> 1 | element.querySelector("#selector").removeAttribute("data-AllowAccess");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(12): 'element.querySelector("#selector").re…' > Output 1`] = `
"
  1 | delete element.querySelector("#selector").dataset.allowaccess;
"
`;

exports[`invalid(12): 'element.setAttribute("data--foo", "🦄…' > Code 1`] = `
"
  1 | element.setAttribute("data--foo", "🦄");
"
`;

exports[`invalid(12): 'element.setAttribute("data--foo", "🦄…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute("data--foo", "🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(12): 'element.setAttribute("data--foo", "🦄…' > Output 1`] = `
"
  1 | element.dataset.Foo = "🦄";
"
`;

exports[`invalid(13): 'element.removeAttribute("data-");' > Code 1`] = `
"
  1 | element.removeAttribute("data-");
"
`;

exports[`invalid(13): 'element.removeAttribute("data-");' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(13): 'element.removeAttribute("data-");' > Output 1`] = `
"
  1 | delete element.dataset[""];
"
`;

exports[`invalid(13): 'element.setAttribute("DATA--FOO", "🦄…' > Code 1`] = `
"
  1 | element.setAttribute("DATA--FOO", "🦄");
"
`;

exports[`invalid(13): 'element.setAttribute("DATA--FOO", "🦄…' > Error 1/1 1`] = `
"
> 1 | element.setAttribute("DATA--FOO", "🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(13): 'element.setAttribute("DATA--FOO", "🦄…' > Output 1`] = `
"
  1 | element.dataset.Foo = "🦄";
"
`;

exports[`invalid(13): 'optional?.element.getAttribute("data-…' > Code 1`] = `
"
  1 | optional?.element.getAttribute("data-unicorn");
"
`;

exports[`invalid(13): 'optional?.element.getAttribute("data-…' > Error 1/1 1`] = `
"
> 1 | optional?.element.getAttribute("data-unicorn");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(13): 'optional?.element.getAttribute("data-…' > Output 1`] = `
"
  1 | optional?.element.dataset.unicorn;
"
`;

exports[`invalid(13): 'optional?.element.hasAttribute("data-…' > Code 1`] = `
"
  1 | optional?.element.hasAttribute("data-unicorn");
"
`;

exports[`invalid(13): 'optional?.element.hasAttribute("data-…' > Error 1/1 1`] = `
"
> 1 | optional?.element.hasAttribute("data-unicorn");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(13): 'optional?.element.hasAttribute("data-…' > Output 1`] = `
"
  1 | Object.hasOwn(optional?.element.dataset, "unicorn");
"
`;

exports[`invalid(14): 'element.getAttribute("data-unicorn").…' > Code 1`] = `
"
  1 | element.getAttribute("data-unicorn").toString()
"
`;

exports[`invalid(14): 'element.getAttribute("data-unicorn").…' > Error 1/1 1`] = `
"
> 1 | element.getAttribute("data-unicorn").toString()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`getAttribute(…)\`.
"
`;

exports[`invalid(14): 'element.getAttribute("data-unicorn").…' > Output 1`] = `
"
  1 | element.dataset.unicorn.toString()
"
`;

exports[`invalid(14): 'element.hasAttribute("data-unicorn").…' > Code 1`] = `
"
  1 | element.hasAttribute("data-unicorn").toString()
"
`;

exports[`invalid(14): 'element.hasAttribute("data-unicorn").…' > Error 1/1 1`] = `
"
> 1 | element.hasAttribute("data-unicorn").toString()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`hasAttribute(…)\`.
"
`;

exports[`invalid(14): 'element.hasAttribute("data-unicorn").…' > Output 1`] = `
"
  1 | Object.hasOwn(element.dataset, "unicorn").toString()
"
`;

exports[`invalid(14): 'element.setAttribute("DATA- ", "🦄");' > Code 1`] = `
"
  1 | element.setAttribute("DATA- ", "🦄");
"
`;

exports[`invalid(14): 'element.setAttribute("DATA- ", "🦄");' > Error 1/1 1`] = `
"
> 1 | element.setAttribute("DATA- ", "🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(14): 'element.setAttribute("DATA- ", "🦄");' > Output 1`] = `
"
  1 | element.dataset[" "] = "🦄";
"
`;

exports[`invalid(14): 'optional?.element.removeAttribute("da…' > Code 1`] = `
"
  1 | optional?.element.removeAttribute("data-unicorn");
"
`;

exports[`invalid(14): 'optional?.element.removeAttribute("da…' > Error 1/1 1`] = `
"
> 1 | optional?.element.removeAttribute("data-unicorn");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(14): 'optional?.element.removeAttribute("da…' > Output 1`] = `
"
  1 | delete optional?.element.dataset.unicorn;
"
`;

exports[`invalid(15): 'element.removeAttribute("data-unicorn…' > Code 1`] = `
"
  1 | element.removeAttribute("data-unicorn")?.property
"
`;

exports[`invalid(15): 'element.removeAttribute("data-unicorn…' > Error 1/1 1`] = `
"
> 1 | element.removeAttribute("data-unicorn")?.property
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`removeAttribute(…)\`.
"
`;

exports[`invalid(15): 'element.setAttribute("DATA-Foo-bar", …' > Code 1`] = `
"
  1 | element.setAttribute("DATA-Foo-bar", "🦄");
"
`;

exports[`invalid(15): 'element.setAttribute("DATA-Foo-bar", …' > Error 1/1 1`] = `
"
> 1 | element.setAttribute("DATA-Foo-bar", "🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(15): 'element.setAttribute("DATA-Foo-bar", …' > Output 1`] = `
"
  1 | element.dataset.fooBar = "🦄";
"
`;

exports[`invalid(16): 'optional?.element.setAttribute("data-…' > Code 1`] = `
"
  1 | optional?.element.setAttribute("data-unicorn", "🦄");
"
`;

exports[`invalid(16): 'optional?.element.setAttribute("data-…' > Error 1/1 1`] = `
"
> 1 | optional?.element.setAttribute("data-unicorn", "🦄");
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;

exports[`invalid(17): 'console.log(element.setAttribute("dat…' > Code 1`] = `
"
  1 | console.log(element.setAttribute("data-unicorn", "🦄"))
"
`;

exports[`invalid(17): 'console.log(element.setAttribute("dat…' > Error 1/1 1`] = `
"
> 1 | console.log(element.setAttribute("data-unicorn", "🦄"))
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.dataset\` over \`setAttribute(…)\`.
"
`;
