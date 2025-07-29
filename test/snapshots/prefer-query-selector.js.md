// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'document.getElementById("foo");' > Code 1`] = `
"
  1 | document.getElementById("foo");
"
`;

exports[`invalid(0): 'document.getElementById("foo");' > Error 1/1 1`] = `
"
> 1 | document.getElementById("foo");
    |          ^^^^^^^^^^^^^^ Prefer \`.querySelector()\` over \`.getElementById()\`.
"
`;

exports[`invalid(0): 'document.getElementById("foo");' > Output 1`] = `
"
  1 | document.querySelector("#foo");
"
`;

exports[`invalid(1): 'document.getElementsByClassName("foo"…' > Code 1`] = `
"
  1 | document.getElementsByClassName("foo");
"
`;

exports[`invalid(1): 'document.getElementsByClassName("foo"…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName("foo");
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(1): 'document.getElementsByClassName("foo"…' > Output 1`] = `
"
  1 | document.querySelectorAll(".foo");
"
`;

exports[`invalid(2): 'document.getElementsByClassName("foo …' > Code 1`] = `
"
  1 | document.getElementsByClassName("foo bar");
"
`;

exports[`invalid(2): 'document.getElementsByClassName("foo …' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName("foo bar");
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(2): 'document.getElementsByClassName("foo …' > Output 1`] = `
"
  1 | document.querySelectorAll(".foo.bar");
"
`;

exports[`invalid(3): 'document.getElementsByTagName("foo");' > Code 1`] = `
"
  1 | document.getElementsByTagName("foo");
"
`;

exports[`invalid(3): 'document.getElementsByTagName("foo");' > Error 1/1 1`] = `
"
> 1 | document.getElementsByTagName("foo");
    |          ^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByTagName()\`.
"
`;

exports[`invalid(3): 'document.getElementsByTagName("foo");' > Output 1`] = `
"
  1 | document.querySelectorAll("foo");
"
`;

exports[`invalid(4): 'document.getElementById("");' > Code 1`] = `
"
  1 | document.getElementById("");
"
`;

exports[`invalid(4): 'document.getElementById("");' > Error 1/1 1`] = `
"
> 1 | document.getElementById("");
    |          ^^^^^^^^^^^^^^ Prefer \`.querySelector()\` over \`.getElementById()\`.
"
`;

exports[`invalid(5): 'document.getElementById(\\'foo\\');' > Code 1`] = `
"
  1 | document.getElementById('foo');
"
`;

exports[`invalid(5): 'document.getElementById(\\'foo\\');' > Error 1/1 1`] = `
"
> 1 | document.getElementById('foo');
    |          ^^^^^^^^^^^^^^ Prefer \`.querySelector()\` over \`.getElementById()\`.
"
`;

exports[`invalid(5): 'document.getElementById(\\'foo\\');' > Output 1`] = `
"
  1 | document.querySelector('#foo');
"
`;

exports[`invalid(6): 'document.getElementsByClassName(\\'foo…' > Code 1`] = `
"
  1 | document.getElementsByClassName('foo');
"
`;

exports[`invalid(6): 'document.getElementsByClassName(\\'foo…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName('foo');
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(6): 'document.getElementsByClassName(\\'foo…' > Output 1`] = `
"
  1 | document.querySelectorAll('.foo');
"
`;

exports[`invalid(7): 'document.getElementsByClassName(\\'foo…' > Code 1`] = `
"
  1 | document.getElementsByClassName('foo bar');
"
`;

exports[`invalid(7): 'document.getElementsByClassName(\\'foo…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName('foo bar');
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(7): 'document.getElementsByClassName(\\'foo…' > Output 1`] = `
"
  1 | document.querySelectorAll('.foo.bar');
"
`;

exports[`invalid(8): 'document.getElementsByTagName(\\'foo\\'…' > Code 1`] = `
"
  1 | document.getElementsByTagName('foo');
"
`;

exports[`invalid(8): 'document.getElementsByTagName(\\'foo\\'…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByTagName('foo');
    |          ^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByTagName()\`.
"
`;

exports[`invalid(8): 'document.getElementsByTagName(\\'foo\\'…' > Output 1`] = `
"
  1 | document.querySelectorAll('foo');
"
`;

exports[`invalid(9): 'document.getElementsByClassName(\\'\\');' > Code 1`] = `
"
  1 | document.getElementsByClassName('');
"
`;

exports[`invalid(9): 'document.getElementsByClassName(\\'\\');' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName('');
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(10): 'document.getElementById(\`foo\`);' > Code 1`] = `
"
  1 | document.getElementById(\`foo\`);
"
`;

exports[`invalid(10): 'document.getElementById(\`foo\`);' > Error 1/1 1`] = `
"
> 1 | document.getElementById(\`foo\`);
    |          ^^^^^^^^^^^^^^ Prefer \`.querySelector()\` over \`.getElementById()\`.
"
`;

exports[`invalid(10): 'document.getElementById(\`foo\`);' > Output 1`] = `
"
  1 | document.querySelector(\`#foo\`);
"
`;

exports[`invalid(11): 'document.getElementsByClassName(\`foo\`…' > Code 1`] = `
"
  1 | document.getElementsByClassName(\`foo\`);
"
`;

exports[`invalid(11): 'document.getElementsByClassName(\`foo\`…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName(\`foo\`);
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(11): 'document.getElementsByClassName(\`foo\`…' > Output 1`] = `
"
  1 | document.querySelectorAll(\`.foo\`);
"
`;

exports[`invalid(12): 'document.getElementsByClassName(\`foo …' > Code 1`] = `
"
  1 | document.getElementsByClassName(\`foo bar\`);
"
`;

exports[`invalid(12): 'document.getElementsByClassName(\`foo …' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName(\`foo bar\`);
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(12): 'document.getElementsByClassName(\`foo …' > Output 1`] = `
"
  1 | document.querySelectorAll(\`.foo.bar\`);
"
`;

exports[`invalid(13): 'document.getElementsByTagName(\`foo\`);' > Code 1`] = `
"
  1 | document.getElementsByTagName(\`foo\`);
"
`;

exports[`invalid(13): 'document.getElementsByTagName(\`foo\`);' > Error 1/1 1`] = `
"
> 1 | document.getElementsByTagName(\`foo\`);
    |          ^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByTagName()\`.
"
`;

exports[`invalid(13): 'document.getElementsByTagName(\`foo\`);' > Output 1`] = `
"
  1 | document.querySelectorAll(\`foo\`);
"
`;

exports[`invalid(14): 'document.getElementsByTagName(\`\`);' > Code 1`] = `
"
  1 | document.getElementsByTagName(\`\`);
"
`;

exports[`invalid(14): 'document.getElementsByTagName(\`\`);' > Error 1/1 1`] = `
"
> 1 | document.getElementsByTagName(\`\`);
    |          ^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByTagName()\`.
"
`;

exports[`invalid(15): 'document.getElementsByClassName(\`\${fn…' > Code 1`] = `
"
  1 | document.getElementsByClassName(\`\${fn()}\`);
"
`;

exports[`invalid(15): 'document.getElementsByClassName(\`\${fn…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName(\`\${fn()}\`);
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(16): 'document.getElementsByClassName(\`foo …' > Code 1`] = `
"
  1 | document.getElementsByClassName(\`foo \${undefined}\`);
"
`;

exports[`invalid(16): 'document.getElementsByClassName(\`foo …' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName(\`foo \${undefined}\`);
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(17): 'document.getElementsByClassName(null);' > Code 1`] = `
"
  1 | document.getElementsByClassName(null);
"
`;

exports[`invalid(17): 'document.getElementsByClassName(null);' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName(null);
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(17): 'document.getElementsByClassName(null);' > Output 1`] = `
"
  1 | document.querySelectorAll(null);
"
`;

exports[`invalid(18): 'document.getElementsByTagName(null);' > Code 1`] = `
"
  1 | document.getElementsByTagName(null);
"
`;

exports[`invalid(18): 'document.getElementsByTagName(null);' > Error 1/1 1`] = `
"
> 1 | document.getElementsByTagName(null);
    |          ^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByTagName()\`.
"
`;

exports[`invalid(18): 'document.getElementsByTagName(null);' > Output 1`] = `
"
  1 | document.querySelectorAll(null);
"
`;

exports[`invalid(19): 'document.getElementsByClassName(fn());' > Code 1`] = `
"
  1 | document.getElementsByClassName(fn());
"
`;

exports[`invalid(19): 'document.getElementsByClassName(fn());' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName(fn());
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(20): 'document.getElementsByClassName("foo"…' > Code 1`] = `
"
  1 | document.getElementsByClassName("foo" + fn());
"
`;

exports[`invalid(20): 'document.getElementsByClassName("foo"…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName("foo" + fn());
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(21): 'document.getElementsByClassName(foo +…' > Code 1`] = `
"
  1 | document.getElementsByClassName(foo + "bar");
"
`;

exports[`invalid(21): 'document.getElementsByClassName(foo +…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByClassName(foo + "bar");
    |          ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
"
`;

exports[`invalid(22): 'for (const div of document.body.getEl…' > Code 1`] = `
"
  1 | for (const div of document.body.getElementById("id").getElementsByClassName("class")) {
  2 | 	console.log(div.getElementsByTagName("div"));
  3 | }
"
`;

exports[`invalid(22): 'for (const div of document.body.getEl…' > Error 1/3 1`] = `
"
> 1 | for (const div of document.body.getElementById("id").getElementsByClassName("class")) {
    |                                 ^^^^^^^^^^^^^^ Prefer \`.querySelector()\` over \`.getElementById()\`.
  2 | 	console.log(div.getElementsByTagName("div"));
  3 | }
"
`;

exports[`invalid(22): 'for (const div of document.body.getEl…' > Error 2/3 1`] = `
"
> 1 | for (const div of document.body.getElementById("id").getElementsByClassName("class")) {
    |                                                      ^^^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByClassName()\`.
  2 | 	console.log(div.getElementsByTagName("div"));
  3 | }
"
`;

exports[`invalid(22): 'for (const div of document.body.getEl…' > Error 3/3 1`] = `
"
  1 | for (const div of document.body.getElementById("id").getElementsByClassName("class")) {
> 2 | 	console.log(div.getElementsByTagName("div"));
    | 	                ^^^^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByTagName()\`.
  3 | }
"
`;

exports[`invalid(22): 'for (const div of document.body.getEl…' > Output 1`] = `
"
  1 | for (const div of document.body.querySelector("#id").querySelectorAll(".class")) {
  2 | 	console.log(div.querySelectorAll("div"));
  3 | }
"
`;

exports[`invalid(23): 'e.getElementById(3)' > Code 1`] = `
"
  1 | e.getElementById(3)
"
`;

exports[`invalid(23): 'e.getElementById(3)' > Error 1/1 1`] = `
"
> 1 | e.getElementById(3)
    |   ^^^^^^^^^^^^^^ Prefer \`.querySelector()\` over \`.getElementById()\`.
"
`;

exports[`invalid(24): 'document.getElementsByName("foo");' > Code 1`] = `
"
  1 | document.getElementsByName("foo");
"
`;

exports[`invalid(24): 'document.getElementsByName("foo");' > Error 1/1 1`] = `
"
> 1 | document.getElementsByName("foo");
    |          ^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByName()\`.
"
`;

exports[`invalid(24): 'document.getElementsByName("foo");' > Output 1`] = `
"
  1 | document.querySelectorAll("[name='foo']");
"
`;

exports[`invalid(25): 'document.getElementsByName(\\'foo\\');' > Code 1`] = `
"
  1 | document.getElementsByName('foo');
"
`;

exports[`invalid(25): 'document.getElementsByName(\\'foo\\');' > Error 1/1 1`] = `
"
> 1 | document.getElementsByName('foo');
    |          ^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByName()\`.
"
`;

exports[`invalid(25): 'document.getElementsByName(\\'foo\\');' > Output 1`] = `
"
  1 | document.querySelectorAll('[name="foo"]');
"
`;

exports[`invalid(26): 'document.getElementsByName(\`foo\`);' > Code 1`] = `
"
  1 | document.getElementsByName(\`foo\`);
"
`;

exports[`invalid(26): 'document.getElementsByName(\`foo\`);' > Error 1/1 1`] = `
"
> 1 | document.getElementsByName(\`foo\`);
    |          ^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByName()\`.
"
`;

exports[`invalid(26): 'document.getElementsByName(\`foo\`);' > Output 1`] = `
"
  1 | document.querySelectorAll(\`[name='foo']\`);
"
`;

exports[`invalid(27): 'document.getElementsByName(\`\${\\'foo\\'…' > Code 1`] = `
"
  1 | document.getElementsByName(\`\${'foo'}\`);
"
`;

exports[`invalid(27): 'document.getElementsByName(\`\${\\'foo\\'…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByName(\`\${'foo'}\`);
    |          ^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByName()\`.
"
`;

exports[`invalid(28): 'document.getElementsByName(null);' > Code 1`] = `
"
  1 | document.getElementsByName(null);
"
`;

exports[`invalid(28): 'document.getElementsByName(null);' > Error 1/1 1`] = `
"
> 1 | document.getElementsByName(null);
    |          ^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByName()\`.
"
`;

exports[`invalid(28): 'document.getElementsByName(null);' > Output 1`] = `
"
  1 | document.querySelectorAll(null);
"
`;

exports[`invalid(29): 'document.getElementsByName("");' > Code 1`] = `
"
  1 | document.getElementsByName("");
"
`;

exports[`invalid(29): 'document.getElementsByName("");' > Error 1/1 1`] = `
"
> 1 | document.getElementsByName("");
    |          ^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByName()\`.
"
`;

exports[`invalid(30): 'document.getElementsByName(foo + "bar…' > Code 1`] = `
"
  1 | document.getElementsByName(foo + "bar");
"
`;

exports[`invalid(30): 'document.getElementsByName(foo + "bar…' > Error 1/1 1`] = `
"
> 1 | document.getElementsByName(foo + "bar");
    |          ^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByName()\`.
"
`;

exports[`invalid(31): 'document.getElementsByName("multiple …' > Code 1`] = `
"
  1 | document.getElementsByName("multiple name should be fixable");
"
`;

exports[`invalid(31): 'document.getElementsByName("multiple …' > Error 1/1 1`] = `
"
> 1 | document.getElementsByName("multiple name should be fixable");
    |          ^^^^^^^^^^^^^^^^^ Prefer \`.querySelectorAll()\` over \`.getElementsByName()\`.
"
`;

exports[`invalid(31): 'document.getElementsByName("multiple …' > Output 1`] = `
"
  1 | document.querySelectorAll("[name='multiple name should be fixable']");
"
`;
