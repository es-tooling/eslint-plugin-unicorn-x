# Prefer modern `Math` APIs over legacy patterns

💼 This rule is enabled in the ✅ `recommended` [config](https://github.com/es-tooling/eslint-plugin-unicorn-x#recommended-config).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->
<!-- Do not manually modify this header. Run: `npm run fix:eslint-docs` -->

Math additions in ES2015:

- [Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
- [Math.trunc()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
- [Math.cbrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt)
- [Math.expm1()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1)
- [Math.log1p()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p)
- [Math.log10()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10)
- [Math.log2()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2)
- [Math.sinh()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh)
- [Math.cosh()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh)
- [Math.tanh()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh)
- [Math.asinh()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh)
- [Math.acosh()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh)
- [Math.atanh()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh)
- [Math.hypot()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)
- [Math.clz32()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32)
- [Math.imul()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)
- [Math.fround()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround)

Currently, we only check a few known cases, but we are open to add more patterns.

If you find a suitable case for this rule, please [open an issue](https://github.com/es-tooling/eslint-plugin-unicorn-x/issues/new?title=%20%60prefer-modern-math-apis%60%20%20change%20request&labels=evaluating).

## Prefer `Math.log10(x)` over

```js
Math.log(x) * Math.LOG10E
```

```js
Math.LOG10E * Math.log(x)
```

```js
Math.log(x) / Math.LN10
```

## Prefer `Math.log2(x)` over

```js
Math.log(x) * Math.LOG2E
```

```js
Math.LOG2E * Math.log(x)
```

```js
Math.log(x) / Math.LN2
```

## Prefer `Math.hypot(…)` over

```js
Math.sqrt(a * a + b * b)
```

```js
Math.sqrt(a ** 2 + b ** 2)
```

```js
Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
```

*This case requires [`prefer-exponentiation-operator`](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator) rule to fix it first.*

```js
Math.sqrt(x ** 2)
// This case fix to `Math.abs(x)`, since it should be better than `Math.hypot(x)`
```

## Separate rule for `Math.trunc()`

See [`unicorn/prefer-math-trunc`](./prefer-math-trunc.md) rule.
