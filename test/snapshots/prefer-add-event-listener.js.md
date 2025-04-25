// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.onclick = () => {}' > Code 1`] = `
"
  1 | foo.onclick = () => {}
"
`;

exports[`invalid(0): 'foo.onclick = () => {}' > Error 1/1 1`] = `
"
> 1 | foo.onclick = () => {}
    |     ^^^^^^^ Prefer \`addEventListener\` over \`onclick\`.
"
`;

exports[`invalid(0): 'foo.onclick = () => {}' > Output 1`] = `
"
  1 | foo.addEventListener('click', () => {})
"
`;

exports[`invalid(1): 'foo.onclick = 1' > Code 1`] = `
"
  1 | foo.onclick = 1
"
`;

exports[`invalid(1): 'foo.onclick = 1' > Error 1/1 1`] = `
"
> 1 | foo.onclick = 1
    |     ^^^^^^^ Prefer \`addEventListener\` over \`onclick\`.
"
`;

exports[`invalid(1): 'foo.onclick = 1' > Output 1`] = `
"
  1 | foo.addEventListener('click', 1)
"
`;

exports[`invalid(2): 'foo.bar.onclick = onClick' > Code 1`] = `
"
  1 | foo.bar.onclick = onClick
"
`;

exports[`invalid(2): 'foo.bar.onclick = onClick' > Error 1/1 1`] = `
"
> 1 | foo.bar.onclick = onClick
    |         ^^^^^^^ Prefer \`addEventListener\` over \`onclick\`.
"
`;

exports[`invalid(2): 'foo.bar.onclick = onClick' > Output 1`] = `
"
  1 | foo.bar.addEventListener('click', onClick)
"
`;

exports[`invalid(3): 'const bar = null; foo.onclick = bar;' > Code 1`] = `
"
  1 | const bar = null; foo.onclick = bar;
"
`;

exports[`invalid(3): 'const bar = null; foo.onclick = bar;' > Error 1/1 1`] = `
"
> 1 | const bar = null; foo.onclick = bar;
    |                       ^^^^^^^ Prefer \`addEventListener\` over \`onclick\`.
"
`;

exports[`invalid(3): 'const bar = null; foo.onclick = bar;' > Output 1`] = `
"
  1 | const bar = null; foo.addEventListener('click', bar);
"
`;

exports[`invalid(4): 'foo.onkeydown = () => {}' > Code 1`] = `
"
  1 | foo.onkeydown = () => {}
"
`;

exports[`invalid(4): 'foo.onkeydown = () => {}' > Error 1/1 1`] = `
"
> 1 | foo.onkeydown = () => {}
    |     ^^^^^^^^^ Prefer \`addEventListener\` over \`onkeydown\`.
"
`;

exports[`invalid(4): 'foo.onkeydown = () => {}' > Output 1`] = `
"
  1 | foo.addEventListener('keydown', () => {})
"
`;

exports[`invalid(5): 'foo.ondragend = () => {}' > Code 1`] = `
"
  1 | foo.ondragend = () => {}
"
`;

exports[`invalid(5): 'foo.ondragend = () => {}' > Error 1/1 1`] = `
"
> 1 | foo.ondragend = () => {}
    |     ^^^^^^^^^ Prefer \`addEventListener\` over \`ondragend\`.
"
`;

exports[`invalid(5): 'foo.ondragend = () => {}' > Output 1`] = `
"
  1 | foo.addEventListener('dragend', () => {})
"
`;

exports[`invalid(6): 'foo.onclick = function (e) {\\n\\tconso…' > Code 1`] = `
"
  1 | foo.onclick = function (e) {
  2 | 	console.log(e);
  3 | }
"
`;

exports[`invalid(6): 'foo.onclick = function (e) {\\n\\tconso…' > Error 1/1 1`] = `
"
> 1 | foo.onclick = function (e) {
    |     ^^^^^^^ Prefer \`addEventListener\` over \`onclick\`.
  2 | 	console.log(e);
  3 | }
"
`;

exports[`invalid(6): 'foo.onclick = function (e) {\\n\\tconso…' > Output 1`] = `
"
  1 | foo.addEventListener('click', function (e) {
  2 | 	console.log(e);
  3 | })
"
`;

exports[`invalid(7): 'foo.onclick = null' > Code 1`] = `
"
  1 | foo.onclick = null
"
`;

exports[`invalid(7): 'foo.onclick = null' > Error 1/1 1`] = `
"
> 1 | foo.onclick = null
    |     ^^^^^^^ Prefer \`removeEventListener\` over \`onclick\`.
"
`;

exports[`invalid(8): 'foo.onclick = undefined' > Code 1`] = `
"
  1 | foo.onclick = undefined
"
`;

exports[`invalid(8): 'foo.onclick = undefined' > Error 1/1 1`] = `
"
> 1 | foo.onclick = undefined
    |     ^^^^^^^ Prefer \`removeEventListener\` over \`onclick\`.
"
`;

exports[`invalid(9): 'window.onbeforeunload = null' > Code 1`] = `
"
  1 | window.onbeforeunload = null
"
`;

exports[`invalid(9): 'window.onbeforeunload = null' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = null
    |        ^^^^^^^^^^^^^^ Prefer \`removeEventListener\` over \`onbeforeunload\`.
"
`;

exports[`invalid(10): 'window.onbeforeunload = undefined' > Code 1`] = `
"
  1 | window.onbeforeunload = undefined
"
`;

exports[`invalid(10): 'window.onbeforeunload = undefined' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = undefined
    |        ^^^^^^^^^^^^^^ Prefer \`removeEventListener\` over \`onbeforeunload\`.
"
`;

exports[`invalid(11): 'window.onbeforeunload = foo' > Code 1`] = `
"
  1 | window.onbeforeunload = foo
"
`;

exports[`invalid(11): 'window.onbeforeunload = foo' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = foo
    |        ^^^^^^^^^^^^^^ Prefer \`addEventListener\` over \`onbeforeunload\`. Use \`event.preventDefault(); event.returnValue = 'foo'\` to trigger the prompt.
"
`;

exports[`invalid(12): 'window.onbeforeunload = () => \\'foo\\'' > Code 1`] = `
"
  1 | window.onbeforeunload = () => 'foo'
"
`;

exports[`invalid(12): 'window.onbeforeunload = () => \\'foo\\'' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = () => 'foo'
    |        ^^^^^^^^^^^^^^ Prefer \`addEventListener\` over \`onbeforeunload\`. Use \`event.preventDefault(); event.returnValue = 'foo'\` to trigger the prompt.
"
`;

exports[`invalid(13): 'window.onbeforeunload = () => {\\n\\tre…' > Code 1`] = `
"
  1 | window.onbeforeunload = () => {
  2 | 	return bar;
  3 | }
"
`;

exports[`invalid(13): 'window.onbeforeunload = () => {\\n\\tre…' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = () => {
    |        ^^^^^^^^^^^^^^ Prefer \`addEventListener\` over \`onbeforeunload\`. Use \`event.preventDefault(); event.returnValue = 'foo'\` to trigger the prompt.
  2 | 	return bar;
  3 | }
"
`;

exports[`invalid(14): 'window.onbeforeunload = function () {…' > Code 1`] = `
"
  1 | window.onbeforeunload = function () {
  2 | 	return 'bar';
  3 | }
"
`;

exports[`invalid(14): 'window.onbeforeunload = function () {…' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = function () {
    |        ^^^^^^^^^^^^^^ Prefer \`addEventListener\` over \`onbeforeunload\`. Use \`event.preventDefault(); event.returnValue = 'foo'\` to trigger the prompt.
  2 | 	return 'bar';
  3 | }
"
`;

exports[`invalid(15): 'window.onbeforeunload = function () {…' > Code 1`] = `
"
  1 | window.onbeforeunload = function () {
  2 | 	return;
  3 | }
"
`;

exports[`invalid(15): 'window.onbeforeunload = function () {…' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = function () {
    |        ^^^^^^^^^^^^^^ Prefer \`addEventListener\` over \`onbeforeunload\`.
  2 | 	return;
  3 | }
"
`;

exports[`invalid(15): 'window.onbeforeunload = function () {…' > Output 1`] = `
"
  1 | window.addEventListener('beforeunload', function () {
  2 | 	return;
  3 | })
"
`;

exports[`invalid(16): 'window.onbeforeunload = function () {…' > Code 1`] = `
"
  1 | window.onbeforeunload = function () {
  2 | 	(() => {
  3 | 		return 'foo';
  4 | 	})();
  5 | }
"
`;

exports[`invalid(16): 'window.onbeforeunload = function () {…' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = function () {
    |        ^^^^^^^^^^^^^^ Prefer \`addEventListener\` over \`onbeforeunload\`.
  2 | 	(() => {
  3 | 		return 'foo';
  4 | 	})();
  5 | }
"
`;

exports[`invalid(16): 'window.onbeforeunload = function () {…' > Output 1`] = `
"
  1 | window.addEventListener('beforeunload', function () {
  2 | 	(() => {
  3 | 		return 'foo';
  4 | 	})();
  5 | })
"
`;

exports[`invalid(17): 'window.onbeforeunload = e => {\\n\\tcon…' > Code 1`] = `
"
  1 | window.onbeforeunload = e => {
  2 | 	console.log(e);
  3 | }
"
`;

exports[`invalid(17): 'window.onbeforeunload = e => {\\n\\tcon…' > Error 1/1 1`] = `
"
> 1 | window.onbeforeunload = e => {
    |        ^^^^^^^^^^^^^^ Prefer \`addEventListener\` over \`onbeforeunload\`.
  2 | 	console.log(e);
  3 | }
"
`;

exports[`invalid(17): 'window.onbeforeunload = e => {\\n\\tcon…' > Output 1`] = `
"
  1 | window.addEventListener('beforeunload', e => {
  2 | 	console.log(e);
  3 | })
"
`;

exports[`invalid(18): 'const foo = require(\\'foo\\');\\n\\nfoo.…' > Code 1`] = `
"
  1 | const foo = require('foo');
  2 |
  3 | foo.onerror = () => {};
"
`;

exports[`invalid(18): 'const foo = require(\\'foo\\');\\n\\nfoo.…' > Error 1/1 1`] = `
"
  1 | const foo = require('foo');
  2 |
> 3 | foo.onerror = () => {};
    |     ^^^^^^^ Prefer \`addEventListener\` over \`onerror\`. Note that there is difference between \`{window,element}.onerror\` and \`{window,element}.addEventListener('error')\`.
"
`;

exports[`invalid(19): 'import foo from \\'foo\\';\\n\\nfoo.onerr…' > Code 1`] = `
"
  1 | import foo from 'foo';
  2 |
  3 | foo.onerror = () => {};
"
`;

exports[`invalid(19): 'import foo from \\'foo\\';\\n\\nfoo.onerr…' > Error 1/1 1`] = `
"
  1 | import foo from 'foo';
  2 |
> 3 | foo.onerror = () => {};
    |     ^^^^^^^ Prefer \`addEventListener\` over \`onerror\`. Note that there is difference between \`{window,element}.onerror\` and \`{window,element}.addEventListener('error')\`.
"
`;

exports[`invalid(20): 'foo.onerror = () => {};\\n\\nfunction b…' > Code 1`] = `
"
  1 | foo.onerror = () => {};
  2 |
  3 | function bar() {
  4 | 	const koa = require('koa');
  5 |
  6 | 	koa.onerror = () => {};
  7 | }
"
`;

exports[`invalid(20): 'foo.onerror = () => {};\\n\\nfunction b…' > Error 1/1 1`] = `
"
> 1 | foo.onerror = () => {};
    |     ^^^^^^^ Prefer \`addEventListener\` over \`onerror\`. Note that there is difference between \`{window,element}.onerror\` and \`{window,element}.addEventListener('error')\`.
  2 |
  3 | function bar() {
  4 | 	const koa = require('koa');
  5 |
  6 | 	koa.onerror = () => {};
  7 | }
"
`;

exports[`invalid(21): 'const Koa = require(\\'koa\\');\\nconst …' > Code 1`] = `
"
  1 | const Koa = require('koa');
  2 | const app = new Koa();
  3 |
  4 | app.onerror = () => {};
"
`;

exports[`invalid(21): 'const Koa = require(\\'koa\\');\\nconst …' > Error 1/1 1`] = `
"
  1 | const Koa = require('koa');
  2 | const app = new Koa();
  3 |
> 4 | app.onerror = () => {};
    |     ^^^^^^^ Prefer \`addEventListener\` over \`onerror\`. Note that there is difference between \`{window,element}.onerror\` and \`{window,element}.addEventListener('error')\`.
"
`;

exports[`invalid(21): 'const Koa = require(\\'koa\\');\\nconst …' > Options 1`] = `
"
[
  {
    "excludedPackages": [
      "foo"
    ]
  }
]
"
`;

exports[`invalid(22): 'import {Koa as Foo} from \\'koa\\';\\nco…' > Code 1`] = `
"
  1 | import {Koa as Foo} from 'koa';
  2 | const app = new Foo();
  3 |
  4 | app.onerror = () => {};
"
`;

exports[`invalid(22): 'import {Koa as Foo} from \\'koa\\';\\nco…' > Error 1/1 1`] = `
"
  1 | import {Koa as Foo} from 'koa';
  2 | const app = new Foo();
  3 |
> 4 | app.onerror = () => {};
    |     ^^^^^^^ Prefer \`addEventListener\` over \`onerror\`. Note that there is difference between \`{window,element}.onerror\` and \`{window,element}.addEventListener('error')\`.
"
`;

exports[`invalid(22): 'import {Koa as Foo} from \\'koa\\';\\nco…' > Options 1`] = `
"
[
  {
    "excludedPackages": [
      "foo"
    ]
  }
]
"
`;

exports[`invalid(23): 'const sax = require(\\'sax\\');\\nconst …' > Code 1`] = `
"
  1 | const sax = require('sax');
  2 | const parser = sax.parser();
  3 |
  4 | parser.onerror = () => {};
"
`;

exports[`invalid(23): 'const sax = require(\\'sax\\');\\nconst …' > Error 1/1 1`] = `
"
  1 | const sax = require('sax');
  2 | const parser = sax.parser();
  3 |
> 4 | parser.onerror = () => {};
    |        ^^^^^^^ Prefer \`addEventListener\` over \`onerror\`. Note that there is difference between \`{window,element}.onerror\` and \`{window,element}.addEventListener('error')\`.
"
`;

exports[`invalid(23): 'const sax = require(\\'sax\\');\\nconst …' > Options 1`] = `
"
[
  {
    "excludedPackages": [
      "foo"
    ]
  }
]
"
`;

exports[`invalid(24): 'myWorker.port.onmessage = function(e)…' > Code 1`] = `
"
  1 | myWorker.port.onmessage = function(e) {}
"
`;

exports[`invalid(24): 'myWorker.port.onmessage = function(e)…' > Error 1/1 1`] = `
"
> 1 | myWorker.port.onmessage = function(e) {}
    |               ^^^^^^^^^ Prefer \`addEventListener\` over \`onmessage\`. Note that there is difference between \`SharedWorker#onmessage\` and \`SharedWorker#addEventListener('message')\`.
"
`;

exports[`invalid(25): '((foo)).onclick = ((0, listener))' > Code 1`] = `
"
  1 | ((foo)).onclick = ((0, listener))
"
`;

exports[`invalid(25): '((foo)).onclick = ((0, listener))' > Error 1/1 1`] = `
"
> 1 | ((foo)).onclick = ((0, listener))
    |         ^^^^^^^ Prefer \`addEventListener\` over \`onclick\`.
"
`;

exports[`invalid(25): '((foo)).onclick = ((0, listener))' > Output 1`] = `
"
  1 | (foo).addEventListener('click', (0, listener))
"
`;

exports[`invalid(26): 'window.onload = window.onunload = fun…' > Code 1`] = `
"
  1 | window.onload = window.onunload = function() {};
"
`;

exports[`invalid(26): 'window.onload = window.onunload = fun…' > Error 1/2 1`] = `
"
> 1 | window.onload = window.onunload = function() {};
    |        ^^^^^^ Prefer \`addEventListener\` over \`onload\`.
"
`;

exports[`invalid(26): 'window.onload = window.onunload = fun…' > Error 2/2 1`] = `
"
> 1 | window.onload = window.onunload = function() {};
    |                        ^^^^^^^^ Prefer \`addEventListener\` over \`onunload\`.
"
`;

exports[`invalid(26): 'window.onload = window.onunload = fun…' > Output 1`] = `
"
  1 | window.addEventListener('load', window.onunload = function() {});
"
`;

exports[`invalid(27): 'window.onunload ??= function() {};' > Code 1`] = `
"
  1 | window.onunload ??= function() {};
"
`;

exports[`invalid(27): 'window.onunload ??= function() {};' > Error 1/1 1`] = `
"
> 1 | window.onunload ??= function() {};
    |        ^^^^^^^^ Prefer \`addEventListener\` over \`onunload\`.
"
`;

exports[`invalid(28): 'window.onunload ||= function() {};' > Code 1`] = `
"
  1 | window.onunload ||= function() {};
"
`;

exports[`invalid(28): 'window.onunload ||= function() {};' > Error 1/1 1`] = `
"
> 1 | window.onunload ||= function() {};
    |        ^^^^^^^^ Prefer \`addEventListener\` over \`onunload\`.
"
`;

exports[`invalid(29): 'window.onunload += function() {};' > Code 1`] = `
"
  1 | window.onunload += function() {};
"
`;

exports[`invalid(29): 'window.onunload += function() {};' > Error 1/1 1`] = `
"
> 1 | window.onunload += function() {};
    |        ^^^^^^^^ Prefer \`addEventListener\` over \`onunload\`.
"
`;
