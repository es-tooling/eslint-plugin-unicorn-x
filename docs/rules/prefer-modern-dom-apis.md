# Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`

💼 This rule is enabled in the ✅ `recommended` [config](https://github.com/es-tooling/eslint-plugin-unicorn-x#recommended-config).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->
<!-- Do not manually modify this header. Run: `npm run fix:eslint-docs` -->

Enforces the use of:

- [childNode.replaceWith(newNode)](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith) over [parentNode.replaceChild(newNode, oldNode)](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
- [referenceNode.before(newNode)](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before) over [parentNode.insertBefore(newNode, referenceNode)](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
- [referenceNode.before('text')](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before) over [referenceNode.insertAdjacentText('beforebegin', 'text')](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText)
- [referenceNode.before(newNode)](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before) over [referenceNode.insertAdjacentElement('beforebegin', newNode)](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)

There are some advantages of using the newer DOM APIs, like:

- Traversing to the parent node is not necessary.
- Appending multiple nodes at once.
- Both [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) and [DOM node objects](https://developer.mozilla.org/en-US/docs/Web/API/Element) can be manipulated.

## Fail

```js
foo.replaceChild(baz, bar);

foo.insertBefore(baz, bar);

foo.insertAdjacentText('position', bar);

foo.insertAdjacentElement('position', bar);
```

## Pass

```js
foo.replaceWith(bar);
foo.replaceWith('bar');
foo.replaceWith(bar, 'baz'));

foo.before(bar)
foo.before('bar')
foo.before(bar, 'baz')

foo.prepend(bar)
foo.prepend('bar')
foo.prepend(bar, 'baz')

foo.append(bar)
foo.append('bar')
foo.append(bar, 'baz')

foo.after(bar)
foo.after('bar')
foo.after(bar, 'baz')
```
