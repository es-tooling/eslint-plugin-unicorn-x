// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '"string".split("")' > Code 1`] = `
"
  1 | "string".split("")
"
`;

exports[`invalid(0): '"string".split("")' > Error 1/1 1`] = `
"
> 1 | "string".split("")
    |          ^^^^^ Prefer the spread operator over \`String#split('')\`.
"
`;

exports[`invalid(0): '"string".split("")' > Output 1`] = `
"
  1 | [..."string"]
"
`;

exports[`invalid(0): '[1].concat(2)' > Code 1`] = `
"
  1 | [1].concat(2)
"
`;

exports[`invalid(0): '[1].concat(2)' > Error 1/1 1`] = `
"
> 1 | [1].concat(2)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(0): '[1].concat(2)' > Output 1`] = `
"
  1 | [1, 2]
"
`;

exports[`invalid(0): 'array.slice()' > Code 1`] = `
"
  1 | array.slice()
"
`;

exports[`invalid(0): 'array.slice()' > Error 1/1 1`] = `
"
> 1 | array.slice()
    |       ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(0): 'array.slice()' > Output 1`] = `
"
  1 | [...array]
"
`;

exports[`invalid(0): 'array.toSpliced()' > Code 1`] = `
"
  1 | array.toSpliced()
"
`;

exports[`invalid(0): 'array.toSpliced()' > Error 1/1 1`] = `
"
> 1 | array.toSpliced()
    |       ^^^^^^^^^ Prefer the spread operator over \`Array#toSpliced()\`.
"
`;

exports[`invalid(0): 'array.toSpliced()' > Output 1`] = `
"
  1 | [...array]
"
`;

exports[`invalid(0): 'const x = Array.from(set);' > Code 1`] = `
"
  1 | const x = Array.from(set);
"
`;

exports[`invalid(0): 'const x = Array.from(set);' > Error 1/1 1`] = `
"
> 1 | const x = Array.from(set);
    |           ^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(0): 'const x = Array.from(set);' > Output 1`] = `
"
  1 | const x = [...set];
"
`;

exports[`invalid(1): '"string".split(\\'\\')' > Code 1`] = `
"
  1 | "string".split('')
"
`;

exports[`invalid(1): '"string".split(\\'\\')' > Error 1/1 1`] = `
"
> 1 | "string".split('')
    |          ^^^^^ Prefer the spread operator over \`String#split('')\`.
"
`;

exports[`invalid(1): '"string".split(\\'\\')' > Output 1`] = `
"
  1 | [..."string"]
"
`;

exports[`invalid(1): '[1].concat([2, 3])' > Code 1`] = `
"
  1 | [1].concat([2, 3])
"
`;

exports[`invalid(1): '[1].concat([2, 3])' > Error 1/1 1`] = `
"
> 1 | [1].concat([2, 3])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(1): '[1].concat([2, 3])' > Output 1`] = `
"
  1 | [1, 2, 3]
"
`;

exports[`invalid(1): 'Array.from(set).map(() => {});' > Code 1`] = `
"
  1 | Array.from(set).map(() => {});
"
`;

exports[`invalid(1): 'Array.from(set).map(() => {});' > Error 1/1 1`] = `
"
> 1 | Array.from(set).map(() => {});
    | ^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(1): 'Array.from(set).map(() => {});' > Output 1`] = `
"
  1 | [...set].map(() => {});
"
`;

exports[`invalid(1): 'array.slice().slice()' > Code 1`] = `
"
  1 | array.slice().slice()
"
`;

exports[`invalid(1): 'array.slice().slice()' > Error 1/2 1`] = `
"
> 1 | array.slice().slice()
    |       ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(1): 'array.slice().slice()' > Error 2/2 1`] = `
"
> 1 | array.slice().slice()
    |               ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(1): 'array.slice().slice()' > Output 1`] = `
"
  1 | [...array].slice()
"
`;

exports[`invalid(1): 'array.toSpliced().toSpliced()' > Code 1`] = `
"
  1 | array.toSpliced().toSpliced()
"
`;

exports[`invalid(1): 'array.toSpliced().toSpliced()' > Error 1/2 1`] = `
"
> 1 | array.toSpliced().toSpliced()
    |       ^^^^^^^^^ Prefer the spread operator over \`Array#toSpliced()\`.
"
`;

exports[`invalid(1): 'array.toSpliced().toSpliced()' > Error 2/2 1`] = `
"
> 1 | array.toSpliced().toSpliced()
    |                   ^^^^^^^^^ Prefer the spread operator over \`Array#toSpliced()\`.
"
`;

exports[`invalid(1): 'array.toSpliced().toSpliced()' > Output 1`] = `
"
  1 | [...array].toSpliced()
"
`;

exports[`invalid(2): '[1].concat(2,)' > Code 1`] = `
"
  1 | [1].concat(2,)
"
`;

exports[`invalid(2): '[1].concat(2,)' > Error 1/1 1`] = `
"
> 1 | [1].concat(2,)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(2): '[1].concat(2,)' > Output 1`] = `
"
  1 | [1, 2]
"
`;

exports[`invalid(2): 'Array.from(new Set([1, 2])).map(() =>…' > Code 1`] = `
"
  1 | Array.from(new Set([1, 2])).map(() => {});
"
`;

exports[`invalid(2): 'Array.from(new Set([1, 2])).map(() =>…' > Error 1/1 1`] = `
"
> 1 | Array.from(new Set([1, 2])).map(() => {});
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(2): 'Array.from(new Set([1, 2])).map(() =>…' > Output 1`] = `
"
  1 | [...new Set([1, 2])].map(() => {});
"
`;

exports[`invalid(2): 'array.slice(1).slice()' > Code 1`] = `
"
  1 | array.slice(1).slice()
"
`;

exports[`invalid(2): 'array.slice(1).slice()' > Error 1/1 1`] = `
"
> 1 | array.slice(1).slice()
    |                ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(2): 'array.slice(1).slice()' > Output 1`] = `
"
  1 | [...array.slice(1)]
"
`;

exports[`invalid(2): 'const copy = array.toSpliced()' > Code 1`] = `
"
  1 | const copy = array.toSpliced()
"
`;

exports[`invalid(2): 'const copy = array.toSpliced()' > Error 1/1 1`] = `
"
> 1 | const copy = array.toSpliced()
    |                    ^^^^^^^^^ Prefer the spread operator over \`Array#toSpliced()\`.
"
`;

exports[`invalid(2): 'const copy = array.toSpliced()' > Output 1`] = `
"
  1 | const copy = [...array]
"
`;

exports[`invalid(2): 'unknown.split("")' > Code 1`] = `
"
  1 | unknown.split("")
"
`;

exports[`invalid(2): 'unknown.split("")' > Error 1/1 1`] = `
"
> 1 | unknown.split("")
    |         ^^^^^ Prefer the spread operator over \`String#split('')\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`...\` operator.
  1 | [...unknown]
"
`;

exports[`invalid(3): '(( (( (( array )).toSpliced ))() ))' > Code 1`] = `
"
  1 | (( (( (( array )).toSpliced ))() ))
"
`;

exports[`invalid(3): '(( (( (( array )).toSpliced ))() ))' > Error 1/1 1`] = `
"
> 1 | (( (( (( array )).toSpliced ))() ))
    |                   ^^^^^^^^^ Prefer the spread operator over \`Array#toSpliced()\`.
"
`;

exports[`invalid(3): '(( (( (( array )).toSpliced ))() ))' > Output 1`] = `
"
  1 | (( [...(( (( array )) ))] ))
"
`;

exports[`invalid(3): '[1].concat([2, ...bar],)' > Code 1`] = `
"
  1 | [1].concat([2, ...bar],)
"
`;

exports[`invalid(3): '[1].concat([2, ...bar],)' > Error 1/1 1`] = `
"
> 1 | [1].concat([2, ...bar],)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(3): '[1].concat([2, ...bar],)' > Output 1`] = `
"
  1 | [1, 2, ...bar]
"
`;

exports[`invalid(3): 'Array.from(document.querySelectorAll(…' > Code 1`] = `
"
  1 | Array.from(document.querySelectorAll("*")).map(() => {});
"
`;

exports[`invalid(3): 'Array.from(document.querySelectorAll(…' > Error 1/1 1`] = `
"
> 1 | Array.from(document.querySelectorAll("*")).map(() => {});
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(3): 'Array.from(document.querySelectorAll(…' > Output 1`] = `
"
  1 | [...document.querySelectorAll("*")].map(() => {});
"
`;

exports[`invalid(3): 'array.slice().slice(1)' > Code 1`] = `
"
  1 | array.slice().slice(1)
"
`;

exports[`invalid(3): 'array.slice().slice(1)' > Error 1/1 1`] = `
"
> 1 | array.slice().slice(1)
    |       ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(3): 'array.slice().slice(1)' > Output 1`] = `
"
  1 | [...array].slice(1)
"
`;

exports[`invalid(3): 'const characters = "string".split("")' > Code 1`] = `
"
  1 | const characters = "string".split("")
"
`;

exports[`invalid(3): 'const characters = "string".split("")' > Error 1/1 1`] = `
"
> 1 | const characters = "string".split("")
    |                             ^^^^^ Prefer the spread operator over \`String#split('')\`.
"
`;

exports[`invalid(3): 'const characters = "string".split("")' > Output 1`] = `
"
  1 | const characters = [..."string"]
"
`;

exports[`invalid(4): '(( (( (( "string" )).split ))( ((""))…' > Code 1`] = `
"
  1 | (( (( (( "string" )).split ))( (("")) ) ))
"
`;

exports[`invalid(4): '(( (( (( "string" )).split ))( ((""))…' > Error 1/1 1`] = `
"
> 1 | (( (( (( "string" )).split ))( (("")) ) ))
    |                      ^^^^^ Prefer the spread operator over \`String#split('')\`.
"
`;

exports[`invalid(4): '(( (( (( "string" )).split ))( ((""))…' > Output 1`] = `
"
  1 | (( [...(( (( "string" )) ))] ))
"
`;

exports[`invalid(4): '[1,].concat(2)' > Code 1`] = `
"
  1 | [1,].concat(2)
"
`;

exports[`invalid(4): '[1,].concat(2)' > Error 1/1 1`] = `
"
> 1 | [1,].concat(2)
    |      ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(4): '[1,].concat(2)' > Output 1`] = `
"
  1 | [1, 2,]
"
`;

exports[`invalid(4): 'bar()\\nfoo.toSpliced()' > Code 1`] = `
"
  1 | bar()
  2 | foo.toSpliced()
"
`;

exports[`invalid(4): 'bar()\\nfoo.toSpliced()' > Error 1/1 1`] = `
"
  1 | bar()
> 2 | foo.toSpliced()
    |     ^^^^^^^^^ Prefer the spread operator over \`Array#toSpliced()\`.
"
`;

exports[`invalid(4): 'bar()\\nfoo.toSpliced()' > Output 1`] = `
"
  1 | bar()
  2 | ;[...foo]
"
`;

exports[`invalid(4): 'const copy = array.slice()' > Code 1`] = `
"
  1 | const copy = array.slice()
"
`;

exports[`invalid(4): 'const copy = array.slice()' > Error 1/1 1`] = `
"
> 1 | const copy = array.slice()
    |                    ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(4): 'const copy = array.slice()' > Output 1`] = `
"
  1 | const copy = [...array]
"
`;

exports[`invalid(4): 'const foo = []\\nArray.from(arrayLike)…' > Code 1`] = `
"
  1 | const foo = []
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(4): 'const foo = []\\nArray.from(arrayLike)…' > Error 1/1 1`] = `
"
  1 | const foo = []
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(4): 'const foo = []\\nArray.from(arrayLike)…' > Output 1`] = `
"
  1 | const foo = []
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(5): '"".toSpliced()' > Code 1`] = `
"
  1 | "".toSpliced()
"
`;

exports[`invalid(5): '"".toSpliced()' > Error 1/1 1`] = `
"
> 1 | "".toSpliced()
    |    ^^^^^^^^^ Prefer the spread operator over \`Array#toSpliced()\`.
"
`;

exports[`invalid(5): '"".toSpliced()' > Output 1`] = `
"
  1 | [...""]
"
`;

exports[`invalid(5): '(( (( (( array )).slice ))() ))' > Code 1`] = `
"
  1 | (( (( (( array )).slice ))() ))
"
`;

exports[`invalid(5): '(( (( (( array )).slice ))() ))' > Error 1/1 1`] = `
"
> 1 | (( (( (( array )).slice ))() ))
    |                   ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(5): '(( (( (( array )).slice ))() ))' > Output 1`] = `
"
  1 | (( [...(( (( array )) ))] ))
"
`;

exports[`invalid(5): '[1,].concat([2, 3])' > Code 1`] = `
"
  1 | [1,].concat([2, 3])
"
`;

exports[`invalid(5): '[1,].concat([2, 3])' > Error 1/1 1`] = `
"
> 1 | [1,].concat([2, 3])
    |      ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(5): '[1,].concat([2, 3])' > Output 1`] = `
"
  1 | [1, 2, 3,]
"
`;

exports[`invalid(5): 'bar()\\nfoo.split("")' > Code 1`] = `
"
  1 | bar()
  2 | foo.split("")
"
`;

exports[`invalid(5): 'bar()\\nfoo.split("")' > Error 1/1 1`] = `
"
  1 | bar()
> 2 | foo.split("")
    |     ^^^^^ Prefer the spread operator over \`String#split('')\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`...\` operator.
  1 | bar()
  2 | ;[...foo]
"
`;

exports[`invalid(5): 'const foo = "1"\\nArray.from(arrayLike…' > Code 1`] = `
"
  1 | const foo = "1"
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(5): 'const foo = "1"\\nArray.from(arrayLike…' > Error 1/1 1`] = `
"
  1 | const foo = "1"
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(5): 'const foo = "1"\\nArray.from(arrayLike…' > Output 1`] = `
"
  1 | const foo = "1"
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(6): '(scopeManager?.scopes).slice()' > Code 1`] = `
"
  1 | (scopeManager?.scopes).slice()
"
`;

exports[`invalid(6): '(scopeManager?.scopes).slice()' > Error 1/1 1`] = `
"
> 1 | (scopeManager?.scopes).slice()
    |                        ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(6): '(scopeManager?.scopes).slice()' > Output 1`] = `
"
  1 | [...(scopeManager?.scopes)]
"
`;

exports[`invalid(6): '[1,].concat(2,)' > Code 1`] = `
"
  1 | [1,].concat(2,)
"
`;

exports[`invalid(6): '[1,].concat(2,)' > Error 1/1 1`] = `
"
> 1 | [1,].concat(2,)
    |      ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(6): '[1,].concat(2,)' > Output 1`] = `
"
  1 | [1, 2,]
"
`;

exports[`invalid(6): 'const foo = null\\nArray.from(arrayLik…' > Code 1`] = `
"
  1 | const foo = null
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(6): 'const foo = null\\nArray.from(arrayLik…' > Error 1/1 1`] = `
"
  1 | const foo = null
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(6): 'const foo = null\\nArray.from(arrayLik…' > Output 1`] = `
"
  1 | const foo = null
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(6): 'new Uint8Array([10, 20, 30, 40, 50]).…' > Code 1`] = `
"
  1 | new Uint8Array([10, 20, 30, 40, 50]).toSpliced()
"
`;

exports[`invalid(6): 'new Uint8Array([10, 20, 30, 40, 50]).…' > Error 1/1 1`] = `
"
> 1 | new Uint8Array([10, 20, 30, 40, 50]).toSpliced()
    |                                      ^^^^^^^^^ Prefer the spread operator over \`Array#toSpliced()\`.
"
`;

exports[`invalid(6): 'new Uint8Array([10, 20, 30, 40, 50]).…' > Output 1`] = `
"
  1 | [...new Uint8Array([10, 20, 30, 40, 50])]
"
`;

exports[`invalid(6): 'unknown.split("")' > Code 1`] = `
"
  1 | unknown.split("")
"
`;

exports[`invalid(6): 'unknown.split("")' > Error 1/1 1`] = `
"
> 1 | unknown.split("")
    |         ^^^^^ Prefer the spread operator over \`String#split('')\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`...\` operator.
  1 | [...unknown]
"
`;

exports[`invalid(7): '"🦄".split("")' > Code 1`] = `
"
  1 | "🦄".split("")
"
`;

exports[`invalid(7): '"🦄".split("")' > Error 1/1 1`] = `
"
> 1 | "🦄".split("")
    |      ^^^^^ Prefer the spread operator over \`String#split('')\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`...\` operator.
  1 | [..."🦄"]
"
`;

exports[`invalid(7): '[1,].concat([2, 3],)' > Code 1`] = `
"
  1 | [1,].concat([2, 3],)
"
`;

exports[`invalid(7): '[1,].concat([2, 3],)' > Error 1/1 1`] = `
"
> 1 | [1,].concat([2, 3],)
    |      ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(7): '[1,].concat([2, 3],)' > Output 1`] = `
"
  1 | [1, 2, 3,]
"
`;

exports[`invalid(7): 'bar()\\nfoo.slice()' > Code 1`] = `
"
  1 | bar()
  2 | foo.slice()
"
`;

exports[`invalid(7): 'bar()\\nfoo.slice()' > Error 1/1 1`] = `
"
  1 | bar()
> 2 | foo.slice()
    |     ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(7): 'bar()\\nfoo.slice()' > Output 1`] = `
"
  1 | bar()
  2 | ;[...foo]
"
`;

exports[`invalid(7): 'const foo = true\\nArray.from(arrayLik…' > Code 1`] = `
"
  1 | const foo = true
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(7): 'const foo = true\\nArray.from(arrayLik…' > Error 1/1 1`] = `
"
  1 | const foo = true
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(7): 'const foo = true\\nArray.from(arrayLik…' > Output 1`] = `
"
  1 | const foo = true
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(8): '"".slice()' > Code 1`] = `
"
  1 | "".slice()
"
`;

exports[`invalid(8): '"".slice()' > Error 1/1 1`] = `
"
> 1 | "".slice()
    |    ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(8): '"".slice()' > Output 1`] = `
"
  1 | [...""]
"
`;

exports[`invalid(8): '(( (( (( [1,] )).concat ))( (([2, 3])…' > Code 1`] = `
"
  1 | (( (( (( [1,] )).concat ))( (([2, 3])) ,) ))
"
`;

exports[`invalid(8): '(( (( (( [1,] )).concat ))( (([2, 3])…' > Error 1/1 1`] = `
"
> 1 | (( (( (( [1,] )).concat ))( (([2, 3])) ,) ))
    |                  ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(8): '(( (( (( [1,] )).concat ))( (([2, 3])…' > Output 1`] = `
"
  1 | (( (( (( [1, 2, 3,] )) )) ))
"
`;

exports[`invalid(8): 'const {length} = "🦄".split("")' > Code 1`] = `
"
  1 | const {length} = "🦄".split("")
"
`;

exports[`invalid(8): 'const {length} = "🦄".split("")' > Error 1/1 1`] = `
"
> 1 | const {length} = "🦄".split("")
    |                       ^^^^^ Prefer the spread operator over \`String#split('')\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Use \`...\` operator.
  1 | const {length} = [..."🦄"]
"
`;

exports[`invalid(8): 'const foo = 1\\nArray.from(arrayLike).…' > Code 1`] = `
"
  1 | const foo = 1
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(8): 'const foo = 1\\nArray.from(arrayLike).…' > Error 1/1 1`] = `
"
  1 | const foo = 1
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(8): 'const foo = 1\\nArray.from(arrayLike).…' > Output 1`] = `
"
  1 | const foo = 1
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(9): '(( (( (( [1,] )).concat ))( (([2, 3])…' > Code 1`] = `
"
  1 | (( (( (( [1,] )).concat ))( (([2, 3])) , bar ) ))
"
`;

exports[`invalid(9): '(( (( (( [1,] )).concat ))( (([2, 3])…' > Error 1/1 1`] = `
"
> 1 | (( (( (( [1,] )).concat ))( (([2, 3])) , bar ) ))
    |                  ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(9): '(( (( (( [1,] )).concat ))( (([2, 3])…' > Output 1`] = `
"
  1 | (( (( (( [1, 2, 3,] )).concat ))( bar ) ))
"
`;

exports[`invalid(9): 'const foo = /./\\nArray.from(arrayLike…' > Code 1`] = `
"
  1 | const foo = /./
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(9): 'const foo = /./\\nArray.from(arrayLike…' > Error 1/1 1`] = `
"
  1 | const foo = /./
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(9): 'const foo = /./\\nArray.from(arrayLike…' > Output 1`] = `
"
  1 | const foo = /./
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(9): 'new Uint8Array([10, 20, 30, 40, 50]).…' > Code 1`] = `
"
  1 | new Uint8Array([10, 20, 30, 40, 50]).slice()
"
`;

exports[`invalid(9): 'new Uint8Array([10, 20, 30, 40, 50]).…' > Error 1/1 1`] = `
"
> 1 | new Uint8Array([10, 20, 30, 40, 50]).slice()
    |                                      ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(9): 'new Uint8Array([10, 20, 30, 40, 50]).…' > Output 1`] = `
"
  1 | [...new Uint8Array([10, 20, 30, 40, 50])]
"
`;

exports[`invalid(10): 'array.slice(0)' > Code 1`] = `
"
  1 | array.slice(0)
"
`;

exports[`invalid(10): 'array.slice(0)' > Error 1/1 1`] = `
"
> 1 | array.slice(0)
    |       ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(10): 'array.slice(0)' > Output 1`] = `
"
  1 | [...array]
"
`;

exports[`invalid(10): 'const foo = /./g\\nArray.from(arrayLik…' > Code 1`] = `
"
  1 | const foo = /./g
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(10): 'const foo = /./g\\nArray.from(arrayLik…' > Error 1/1 1`] = `
"
  1 | const foo = /./g
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(10): 'const foo = /./g\\nArray.from(arrayLik…' > Output 1`] = `
"
  1 | const foo = /./g
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(10): 'foo.concat(2)' > Code 1`] = `
"
  1 | foo.concat(2)
"
`;

exports[`invalid(10): 'foo.concat(2)' > Error 1/1 1`] = `
"
> 1 | foo.concat(2)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(10): 'foo.concat(2)' > Output 1`] = `
"
  1 | [...foo, 2]
"
`;

exports[`invalid(11): 'array.slice(0b0)' > Code 1`] = `
"
  1 | array.slice(0b0)
"
`;

exports[`invalid(11): 'array.slice(0b0)' > Error 1/1 1`] = `
"
> 1 | array.slice(0b0)
    |       ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(11): 'array.slice(0b0)' > Output 1`] = `
"
  1 | [...array]
"
`;

exports[`invalid(11): 'const foo = bar\\nArray.from(arrayLike…' > Code 1`] = `
"
  1 | const foo = bar
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(11): 'const foo = bar\\nArray.from(arrayLike…' > Error 1/1 1`] = `
"
  1 | const foo = bar
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(11): 'const foo = bar\\nArray.from(arrayLike…' > Output 1`] = `
"
  1 | const foo = bar
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(11): 'foo.concat([2, 3])' > Code 1`] = `
"
  1 | foo.concat([2, 3])
"
`;

exports[`invalid(11): 'foo.concat([2, 3])' > Error 1/1 1`] = `
"
> 1 | foo.concat([2, 3])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(11): 'foo.concat([2, 3])' > Output 1`] = `
"
  1 | [...foo, 2, 3]
"
`;

exports[`invalid(12): 'array.slice(0.00)' > Code 1`] = `
"
  1 | array.slice(0.00)
"
`;

exports[`invalid(12): 'array.slice(0.00)' > Error 1/1 1`] = `
"
> 1 | array.slice(0.00)
    |       ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(12): 'array.slice(0.00)' > Output 1`] = `
"
  1 | [...array]
"
`;

exports[`invalid(12): 'const foo = bar.baz\\nArray.from(array…' > Code 1`] = `
"
  1 | const foo = bar.baz
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(12): 'const foo = bar.baz\\nArray.from(array…' > Error 1/1 1`] = `
"
  1 | const foo = bar.baz
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(12): 'const foo = bar.baz\\nArray.from(array…' > Output 1`] = `
"
  1 | const foo = bar.baz
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(12): 'foo.concat(2,)' > Code 1`] = `
"
  1 | foo.concat(2,)
"
`;

exports[`invalid(12): 'foo.concat(2,)' > Error 1/1 1`] = `
"
> 1 | foo.concat(2,)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(12): 'foo.concat(2,)' > Output 1`] = `
"
  1 | [...foo, 2]
"
`;

exports[`invalid(13): 'array.slice(0.00, )' > Code 1`] = `
"
  1 | array.slice(0.00, )
"
`;

exports[`invalid(13): 'array.slice(0.00, )' > Error 1/1 1`] = `
"
> 1 | array.slice(0.00, )
    |       ^^^^^ Prefer the spread operator over \`Array#slice()\`.
"
`;

exports[`invalid(13): 'array.slice(0.00, )' > Output 1`] = `
"
  1 | [...array]
"
`;

exports[`invalid(13): 'foo.concat([2, 3],)' > Code 1`] = `
"
  1 | foo.concat([2, 3],)
"
`;

exports[`invalid(13): 'foo.concat([2, 3],)' > Error 1/1 1`] = `
"
> 1 | foo.concat([2, 3],)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(13): 'foo.concat([2, 3],)' > Output 1`] = `
"
  1 | [...foo, 2, 3]
"
`;

exports[`invalid(13): 'function* foo() {\\n\\tyield Array.from…' > Code 1`] = `
"
  1 | function* foo() {
  2 | 	yield Array.from(arrayLike).forEach(doSomething)
  3 | }
"
`;

exports[`invalid(13): 'function* foo() {\\n\\tyield Array.from…' > Error 1/1 1`] = `
"
  1 | function* foo() {
> 2 | 	yield Array.from(arrayLike).forEach(doSomething)
    | 	      ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
  3 | }
"
`;

exports[`invalid(13): 'function* foo() {\\n\\tyield Array.from…' > Output 1`] = `
"
  1 | function* foo() {
  2 | 	yield [...arrayLike].forEach(doSomething)
  3 | }
"
`;

exports[`invalid(14): '(( (( ((foo)).concat ))( (([2, 3])) ,…' > Code 1`] = `
"
  1 | (( (( ((foo)).concat ))( (([2, 3])) ,) ))
"
`;

exports[`invalid(14): '(( (( ((foo)).concat ))( (([2, 3])) ,…' > Error 1/1 1`] = `
"
> 1 | (( (( ((foo)).concat ))( (([2, 3])) ,) ))
    |               ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(14): '(( (( ((foo)).concat ))( (([2, 3])) ,…' > Output 1`] = `
"
  1 | (( (( [...((foo)), 2, 3] )) ))
"
`;

exports[`invalid(14): 'const foo = \`bar\`\\nArray.from(arrayLi…' > Code 1`] = `
"
  1 | const foo = \`bar\`
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(14): 'const foo = \`bar\`\\nArray.from(arrayLi…' > Error 1/1 1`] = `
"
  1 | const foo = \`bar\`
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(14): 'const foo = \`bar\`\\nArray.from(arrayLi…' > Output 1`] = `
"
  1 | const foo = \`bar\`
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(15): '(( (( ((foo)).concat ))( (([2, 3])) ,…' > Code 1`] = `
"
  1 | (( (( ((foo)).concat ))( (([2, 3])) , bar ) ))
"
`;

exports[`invalid(15): '(( (( ((foo)).concat ))( (([2, 3])) ,…' > Error 1/1 1`] = `
"
> 1 | (( (( ((foo)).concat ))( (([2, 3])) , bar ) ))
    |               ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(15): '(( (( ((foo)).concat ))( (([2, 3])) ,…' > Output 1`] = `
"
  1 | (( (( [...((foo)), 2, 3].concat ))( bar ) ))
"
`;

exports[`invalid(15): 'const foo = [];\\nArray.from(arrayLike…' > Code 1`] = `
"
  1 | const foo = [];
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(15): 'const foo = [];\\nArray.from(arrayLike…' > Error 1/1 1`] = `
"
  1 | const foo = [];
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(15): 'const foo = [];\\nArray.from(arrayLike…' > Output 1`] = `
"
  1 | const foo = [];
  2 | [...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(16): 'bar()\\nfoo.concat(2)' > Code 1`] = `
"
  1 | bar()
  2 | foo.concat(2)
"
`;

exports[`invalid(16): 'bar()\\nfoo.concat(2)' > Error 1/1 1`] = `
"
  1 | bar()
> 2 | foo.concat(2)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(16): 'bar()\\nfoo.concat(2)' > Output 1`] = `
"
  1 | bar()
  2 | ;[...foo, 2]
"
`;

exports[`invalid(16): 'for (const key of Array.from(arrayLik…' > Code 1`] = `
"
  1 | for (const key of Array.from(arrayLike)) {
  2 | }
"
`;

exports[`invalid(16): 'for (const key of Array.from(arrayLik…' > Error 1/1 1`] = `
"
> 1 | for (const key of Array.from(arrayLike)) {
    |                   ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
  2 | }
"
`;

exports[`invalid(16): 'for (const key of Array.from(arrayLik…' > Output 1`] = `
"
  1 | for (const key of [...arrayLike]) {
  2 | }
"
`;

exports[`invalid(17): 'const foo = foo.concat(2)' > Code 1`] = `
"
  1 | const foo = foo.concat(2)
"
`;

exports[`invalid(17): 'const foo = foo.concat(2)' > Error 1/1 1`] = `
"
> 1 | const foo = foo.concat(2)
    |                 ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(17): 'const foo = foo.concat(2)' > Output 1`] = `
"
  1 | const foo = [...foo, 2]
"
`;

exports[`invalid(17): 'for (const key in Array.from(arrayLik…' > Code 1`] = `
"
  1 | for (const key in Array.from(arrayLike)) {
  2 | }
"
`;

exports[`invalid(17): 'for (const key in Array.from(arrayLik…' > Error 1/1 1`] = `
"
> 1 | for (const key in Array.from(arrayLike)) {
    |                   ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
  2 | }
"
`;

exports[`invalid(17): 'for (const key in Array.from(arrayLik…' > Output 1`] = `
"
  1 | for (const key in [...arrayLike]) {
  2 | }
"
`;

exports[`invalid(18): 'const foo = () => foo.concat(2)' > Code 1`] = `
"
  1 | const foo = () => foo.concat(2)
"
`;

exports[`invalid(18): 'const foo = () => foo.concat(2)' > Error 1/1 1`] = `
"
> 1 | const foo = () => foo.concat(2)
    |                       ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(18): 'const foo = () => foo.concat(2)' > Output 1`] = `
"
  1 | const foo = () => [...foo, 2]
"
`;

exports[`invalid(18): 'const foo = \`\${Array.from(arrayLike)}\`' > Code 1`] = `
"
  1 | const foo = \`\${Array.from(arrayLike)}\`
"
`;

exports[`invalid(18): 'const foo = \`\${Array.from(arrayLike)}\`' > Error 1/1 1`] = `
"
> 1 | const foo = \`\${Array.from(arrayLike)}\`
    |                ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(18): 'const foo = \`\${Array.from(arrayLike)}\`' > Output 1`] = `
"
  1 | const foo = \`\${[...arrayLike]}\`
"
`;

exports[`invalid(19): 'async function foo(){\\n\\treturn await…' > Code 1`] = `
"
  1 | async function foo(){
  2 | 	return await Array.from(arrayLike)
  3 | }
"
`;

exports[`invalid(19): 'async function foo(){\\n\\treturn await…' > Error 1/1 1`] = `
"
  1 | async function foo(){
> 2 | 	return await Array.from(arrayLike)
    | 	             ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
  3 | }
"
`;

exports[`invalid(19): 'async function foo(){\\n\\treturn await…' > Output 1`] = `
"
  1 | async function foo(){
  2 | 	return await [...arrayLike]
  3 | }
"
`;

exports[`invalid(19): 'const five = 2 + 3;\\nfoo.concat(five);' > Code 1`] = `
"
  1 | const five = 2 + 3;
  2 | foo.concat(five);
"
`;

exports[`invalid(19): 'const five = 2 + 3;\\nfoo.concat(five);' > Error 1/1 1`] = `
"
  1 | const five = 2 + 3;
> 2 | foo.concat(five);
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(19): 'const five = 2 + 3;\\nfoo.concat(five);' > Output 1`] = `
"
  1 | const five = 2 + 3;
  2 | [...foo, five];
"
`;

exports[`invalid(20): 'const array = [2 + 3];\\nfoo.concat(ar…' > Code 1`] = `
"
  1 | const array = [2 + 3];
  2 | foo.concat(array);
"
`;

exports[`invalid(20): 'const array = [2 + 3];\\nfoo.concat(ar…' > Error 1/1 1`] = `
"
  1 | const array = [2 + 3];
> 2 | foo.concat(array);
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(20): 'const array = [2 + 3];\\nfoo.concat(ar…' > Output 1`] = `
"
  1 | const array = [2 + 3];
  2 | [...foo, ...array];
"
`;

exports[`invalid(20): 'foo()\\nArray.from(arrayLike).forEach(…' > Code 1`] = `
"
  1 | foo()
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(20): 'foo()\\nArray.from(arrayLike).forEach(…' > Error 1/1 1`] = `
"
  1 | foo()
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(20): 'foo()\\nArray.from(arrayLike).forEach(…' > Output 1`] = `
"
  1 | foo()
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(21): 'const foo = {}\\nArray.from(arrayLike)…' > Code 1`] = `
"
  1 | const foo = {}
  2 | Array.from(arrayLike).forEach(doSomething)
"
`;

exports[`invalid(21): 'const foo = {}\\nArray.from(arrayLike)…' > Error 1/1 1`] = `
"
  1 | const foo = {}
> 2 | Array.from(arrayLike).forEach(doSomething)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(21): 'const foo = {}\\nArray.from(arrayLike)…' > Output 1`] = `
"
  1 | const foo = {}
  2 | ;[...arrayLike].forEach(doSomething)
"
`;

exports[`invalid(21): 'foo.concat([bar])' > Code 1`] = `
"
  1 | foo.concat([bar])
"
`;

exports[`invalid(21): 'foo.concat([bar])' > Error 1/1 1`] = `
"
> 1 | foo.concat([bar])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(21): 'foo.concat([bar])' > Output 1`] = `
"
  1 | [...foo, bar]
"
`;

exports[`invalid(22): '(Array).from(foo)' > Code 1`] = `
"
  1 | (Array).from(foo)
"
`;

exports[`invalid(22): '(Array).from(foo)' > Error 1/1 1`] = `
"
> 1 | (Array).from(foo)
    | ^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(22): '(Array).from(foo)' > Output 1`] = `
"
  1 | [...foo]
"
`;

exports[`invalid(22): 'foo.concat(bar)' > Code 1`] = `
"
  1 | foo.concat(bar)
"
`;

exports[`invalid(22): 'foo.concat(bar)' > Error 1/1 1`] = `
"
> 1 | foo.concat(bar)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/3: First argument is an \`array\`.
  1 | [...foo, ...bar]

--------------------------------------------------------------------------------
Suggestion 2/3: First argument is not an \`array\`.
  1 | [...foo, bar]

--------------------------------------------------------------------------------
Suggestion 3/3: Test first argument with \`Array.isArray(…)\`.
  1 | [...foo, ...(Array.isArray(bar) ? bar : [bar])]
"
`;

exports[`invalid(23): '(Array.from)(foo)' > Code 1`] = `
"
  1 | (Array.from)(foo)
"
`;

exports[`invalid(23): '(Array.from)(foo)' > Error 1/1 1`] = `
"
> 1 | (Array.from)(foo)
    | ^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(23): '(Array.from)(foo)' > Output 1`] = `
"
  1 | [...foo]
"
`;

exports[`invalid(23): 'Array.from(set).concat([2, 3])' > Code 1`] = `
"
  1 | Array.from(set).concat([2, 3])
"
`;

exports[`invalid(23): 'Array.from(set).concat([2, 3])' > Error 1/2 1`] = `
"
> 1 | Array.from(set).concat([2, 3])
    | ^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(23): 'Array.from(set).concat([2, 3])' > Error 2/2 1`] = `
"
> 1 | Array.from(set).concat([2, 3])
    |                 ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(23): 'Array.from(set).concat([2, 3])' > Output 1`] = `
"
  1 | [...set, 2, 3]
"
`;

exports[`invalid(24): '((Array).from)(foo)' > Code 1`] = `
"
  1 | ((Array).from)(foo)
"
`;

exports[`invalid(24): '((Array).from)(foo)' > Error 1/1 1`] = `
"
> 1 | ((Array).from)(foo)
    | ^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(24): '((Array).from)(foo)' > Output 1`] = `
"
  1 | [...foo]
"
`;

exports[`invalid(24): 'foo.concat([2, 3]).concat(4)' > Code 1`] = `
"
  1 | foo.concat([2, 3]).concat(4)
"
`;

exports[`invalid(24): 'foo.concat([2, 3]).concat(4)' > Error 1/2 1`] = `
"
> 1 | foo.concat([2, 3]).concat(4)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(24): 'foo.concat([2, 3]).concat(4)' > Error 2/2 1`] = `
"
> 1 | foo.concat([2, 3]).concat(4)
    |                    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(24): 'foo.concat([2, 3]).concat(4)' > Output 1`] = `
"
  1 | [...foo, 2, 3, 4]
"
`;

exports[`invalid(25): '(Array).from((0, foo))' > Code 1`] = `
"
  1 | (Array).from((0, foo))
"
`;

exports[`invalid(25): '(Array).from((0, foo))' > Error 1/1 1`] = `
"
> 1 | (Array).from((0, foo))
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(25): '(Array).from((0, foo))' > Output 1`] = `
"
  1 | [...(0, foo)]
"
`;

exports[`invalid(25): 'string.concat("bar")' > Code 1`] = `
"
  1 | string.concat("bar")
"
`;

exports[`invalid(25): 'string.concat("bar")' > Error 1/1 1`] = `
"
> 1 | string.concat("bar")
    |        ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(25): 'string.concat("bar")' > Output 1`] = `
"
  1 | [...string, "bar"]
"
`;

exports[`invalid(26): '(Array.from)((0, foo))' > Code 1`] = `
"
  1 | (Array.from)((0, foo))
"
`;

exports[`invalid(26): '(Array.from)((0, foo))' > Error 1/1 1`] = `
"
> 1 | (Array.from)((0, foo))
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(26): '(Array.from)((0, foo))' > Output 1`] = `
"
  1 | [...(0, foo)]
"
`;

exports[`invalid(26): 'foo.concat(2, 3)' > Code 1`] = `
"
  1 | foo.concat(2, 3)
"
`;

exports[`invalid(26): 'foo.concat(2, 3)' > Error 1/1 1`] = `
"
> 1 | foo.concat(2, 3)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(26): 'foo.concat(2, 3)' > Output 1`] = `
"
  1 | [...foo, 2, 3]
"
`;

exports[`invalid(27): '((Array).from)((0, foo))' > Code 1`] = `
"
  1 | ((Array).from)((0, foo))
"
`;

exports[`invalid(27): '((Array).from)((0, foo))' > Error 1/1 1`] = `
"
> 1 | ((Array).from)((0, foo))
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(27): '((Array).from)((0, foo))' > Output 1`] = `
"
  1 | [...(0, foo)]
"
`;

exports[`invalid(27): 'foo.concat(2, bar)' > Code 1`] = `
"
  1 | foo.concat(2, bar)
"
`;

exports[`invalid(27): 'foo.concat(2, bar)' > Error 1/1 1`] = `
"
> 1 | foo.concat(2, bar)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(27): 'foo.concat(2, bar)' > Output 1`] = `
"
  1 | [...foo, 2].concat(bar)
"
`;

exports[`invalid(28): '[...foo, 2].concat(bar)' > Code 1`] = `
"
  1 | [...foo, 2].concat(bar)
"
`;

exports[`invalid(28): '[...foo, 2].concat(bar)' > Error 1/1 1`] = `
"
> 1 | [...foo, 2].concat(bar)
    |             ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/3: First argument is an \`array\`.
  1 | [...foo, 2, ...bar]

--------------------------------------------------------------------------------
Suggestion 2/3: First argument is not an \`array\`.
  1 | [...foo, 2, bar]

--------------------------------------------------------------------------------
Suggestion 3/3: Test first argument with \`Array.isArray(…)\`.
  1 | [...foo, 2, ...(Array.isArray(bar) ? bar : [bar])]
"
`;

exports[`invalid(28): 'Array.from(a ? b : c)' > Code 1`] = `
"
  1 | Array.from(a ? b : c)
"
`;

exports[`invalid(28): 'Array.from(a ? b : c)' > Error 1/1 1`] = `
"
> 1 | Array.from(a ? b : c)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(28): 'Array.from(a ? b : c)' > Output 1`] = `
"
  1 | [...a ? b : c]
"
`;

exports[`invalid(29): 'Array.from((0, a))' > Code 1`] = `
"
  1 | Array.from((0, a))
"
`;

exports[`invalid(29): 'Array.from((0, a))' > Error 1/1 1`] = `
"
> 1 | Array.from((0, a))
    | ^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(29): 'Array.from((0, a))' > Output 1`] = `
"
  1 | [...(0, a)]
"
`;

exports[`invalid(29): 'let sortedScores = scores.concat().so…' > Code 1`] = `
"
  1 | let sortedScores = scores.concat().sort((a, b) => b[0] - a[0]);
"
`;

exports[`invalid(29): 'let sortedScores = scores.concat().so…' > Error 1/1 1`] = `
"
> 1 | let sortedScores = scores.concat().sort((a, b) => b[0] - a[0]);
    |                           ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(29): 'let sortedScores = scores.concat().so…' > Output 1`] = `
"
  1 | let sortedScores = [...scores].sort((a, b) => b[0] - a[0]);
"
`;

exports[`invalid(30): 'Array.from([...a, ...b], )' > Code 1`] = `
"
  1 | Array.from([...a, ...b], )
"
`;

exports[`invalid(30): 'Array.from([...a, ...b], )' > Error 1/1 1`] = `
"
> 1 | Array.from([...a, ...b], )
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(30): 'Array.from([...a, ...b], )' > Output 1`] = `
"
  1 | [...a, ...b]
"
`;

exports[`invalid(30): 'foo.concat(bar, 2, 3)' > Code 1`] = `
"
  1 | foo.concat(bar, 2, 3)
"
`;

exports[`invalid(30): 'foo.concat(bar, 2, 3)' > Error 1/1 1`] = `
"
> 1 | foo.concat(bar, 2, 3)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/3: First argument is an \`array\`.
  1 | [...foo, ...bar, 2, 3]

--------------------------------------------------------------------------------
Suggestion 2/3: First argument is not an \`array\`.
  1 | [...foo, bar, 2, 3]

--------------------------------------------------------------------------------
Suggestion 3/3: Test first argument with \`Array.isArray(…)\`.
  1 | [...foo, ...(Array.isArray(bar) ? bar : [bar]), 2, 3]
"
`;

exports[`invalid(31): 'Array.from([1])' > Code 1`] = `
"
  1 | Array.from([1])
"
`;

exports[`invalid(31): 'Array.from([1])' > Error 1/1 1`] = `
"
> 1 | Array.from([1])
    | ^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(31): 'Array.from([1])' > Output 1`] = `
"
  1 | [1]
"
`;

exports[`invalid(31): 'foo.concat(bar, 2, 3, baz)' > Code 1`] = `
"
  1 | foo.concat(bar, 2, 3, baz)
"
`;

exports[`invalid(31): 'foo.concat(bar, 2, 3, baz)' > Error 1/1 1`] = `
"
> 1 | foo.concat(bar, 2, 3, baz)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/4: First argument is an \`array\`.
  1 | [...foo, ...bar, 2, 3].concat(baz)

--------------------------------------------------------------------------------
Suggestion 2/4: First argument is not an \`array\`.
  1 | [...foo, bar, 2, 3].concat(baz)

--------------------------------------------------------------------------------
Suggestion 3/4: Test first argument with \`Array.isArray(…)\`.
  1 | [...foo, ...(Array.isArray(bar) ? bar : [bar]), 2, 3].concat(baz)

--------------------------------------------------------------------------------
Suggestion 4/4: Spread all unknown arguments\`.
  1 | [...foo, ...bar, 2, 3, ...baz]
"
`;

exports[`invalid(32): 'Array.from([...a, ...b])' > Code 1`] = `
"
  1 | Array.from([...a, ...b])
"
`;

exports[`invalid(32): 'Array.from([...a, ...b])' > Error 1/1 1`] = `
"
> 1 | Array.from([...a, ...b])
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(32): 'Array.from([...a, ...b])' > Output 1`] = `
"
  1 | [...a, ...b]
"
`;

exports[`invalid(32): 'async function a() {return [].concat(…' > Code 1`] = `
"
  1 | async function a() {return [].concat(await bar)}
"
`;

exports[`invalid(32): 'async function a() {return [].concat(…' > Error 1/1 1`] = `
"
> 1 | async function a() {return [].concat(await bar)}
    |                               ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: First argument is an \`array\`.
  1 | async function a() {return [...await bar]}

--------------------------------------------------------------------------------
Suggestion 2/2: First argument is not an \`array\`.
  1 | async function a() {return [await bar]}
"
`;

exports[`invalid(33): '/* 1 */ Array /* 2 */ .from /* 3 */ (…' > Code 1`] = `
"
  1 | /* 1 */ Array /* 2 */ .from /* 3 */ ( /* 4 */ a /* 5 */,)
"
`;

exports[`invalid(33): '/* 1 */ Array /* 2 */ .from /* 3 */ (…' > Error 1/1 1`] = `
"
> 1 | /* 1 */ Array /* 2 */ .from /* 3 */ ( /* 4 */ a /* 5 */,)
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer the spread operator over \`Array.from(…)\`.
"
`;

exports[`invalid(33): '/* 1 */ Array /* 2 */ .from /* 3 */ (…' > Output 1`] = `
"
  1 | /* 1 */ [...a]
"
`;

exports[`invalid(33): 'async function a() {return [].concat(…' > Code 1`] = `
"
  1 | async function a() {return [].concat((0, bar))}
"
`;

exports[`invalid(33): 'async function a() {return [].concat(…' > Error 1/1 1`] = `
"
> 1 | async function a() {return [].concat((0, bar))}
    |                               ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/3: First argument is an \`array\`.
  1 | async function a() {return [...(0, bar)]}

--------------------------------------------------------------------------------
Suggestion 2/3: First argument is not an \`array\`.
  1 | async function a() {return [(0, bar)]}

--------------------------------------------------------------------------------
Suggestion 3/3: Test first argument with \`Array.isArray(…)\`.
  1 | async function a() {return [...(Array.isArray((0, bar)) ? (0, bar) : [(0, bar)])]}
"
`;

exports[`invalid(34): 'async function a() {return [].concat(…' > Code 1`] = `
"
  1 | async function a() {return [].concat(((await bar)))}
"
`;

exports[`invalid(34): 'async function a() {return [].concat(…' > Error 1/1 1`] = `
"
> 1 | async function a() {return [].concat(((await bar)))}
    |                               ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: First argument is an \`array\`.
  1 | async function a() {return [...((await bar))]}

--------------------------------------------------------------------------------
Suggestion 2/2: First argument is not an \`array\`.
  1 | async function a() {return [((await bar))]}
"
`;

exports[`invalid(35): 'foo.concat((0, 1))' > Code 1`] = `
"
  1 | foo.concat((0, 1))
"
`;

exports[`invalid(35): 'foo.concat((0, 1))' > Error 1/1 1`] = `
"
> 1 | foo.concat((0, 1))
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(35): 'foo.concat((0, 1))' > Output 1`] = `
"
  1 | [...foo, (0, 1)]
"
`;

exports[`invalid(36): 'async function a() {return (await bar…' > Code 1`] = `
"
  1 | async function a() {return (await bar).concat(1)}
"
`;

exports[`invalid(36): 'async function a() {return (await bar…' > Error 1/1 1`] = `
"
> 1 | async function a() {return (await bar).concat(1)}
    |                                        ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(36): 'async function a() {return (await bar…' > Output 1`] = `
"
  1 | async function a() {return [...(await bar), 1]}
"
`;

exports[`invalid(37): '[].concat(...bar)' > Code 1`] = `
"
  1 | [].concat(...bar)
"
`;

exports[`invalid(37): '[].concat(...bar)' > Error 1/1 1`] = `
"
> 1 | [].concat(...bar)
    |    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(38): '[].concat([,], [])' > Code 1`] = `
"
  1 | [].concat([,], [])
"
`;

exports[`invalid(38): '[].concat([,], [])' > Error 1/1 1`] = `
"
> 1 | [].concat([,], [])
    |    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(38): '[].concat([,], [])' > Output 1`] = `
"
  1 | [,]
"
`;

exports[`invalid(39): '[,].concat([,], [,])' > Code 1`] = `
"
  1 | [,].concat([,], [,])
"
`;

exports[`invalid(39): '[,].concat([,], [,])' > Error 1/1 1`] = `
"
> 1 | [,].concat([,], [,])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(39): '[,].concat([,], [,])' > Output 1`] = `
"
  1 | [, , ,]
"
`;

exports[`invalid(40): '[,].concat([,,], [,])' > Code 1`] = `
"
  1 | [,].concat([,,], [,])
"
`;

exports[`invalid(40): '[,].concat([,,], [,])' > Error 1/1 1`] = `
"
> 1 | [,].concat([,,], [,])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(40): '[,].concat([,,], [,])' > Output 1`] = `
"
  1 | [, ,, ,]
"
`;

exports[`invalid(41): '[,].concat([,], [,,])' > Code 1`] = `
"
  1 | [,].concat([,], [,,])
"
`;

exports[`invalid(41): '[,].concat([,], [,,])' > Error 1/1 1`] = `
"
> 1 | [,].concat([,], [,,])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(41): '[,].concat([,], [,,])' > Output 1`] = `
"
  1 | [, , ,,]
"
`;

exports[`invalid(42): '[1].concat([2,], [3,])' > Code 1`] = `
"
  1 | [1].concat([2,], [3,])
"
`;

exports[`invalid(42): '[1].concat([2,], [3,])' > Error 1/1 1`] = `
"
> 1 | [1].concat([2,], [3,])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(42): '[1].concat([2,], [3,])' > Output 1`] = `
"
  1 | [1, 2, 3,]
"
`;

exports[`invalid(43): '[1].concat([2,,], [3,,])' > Code 1`] = `
"
  1 | [1].concat([2,,], [3,,])
"
`;

exports[`invalid(43): '[1].concat([2,,], [3,,])' > Error 1/1 1`] = `
"
> 1 | [1].concat([2,,], [3,,])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(43): '[1].concat([2,,], [3,,])' > Output 1`] = `
"
  1 | [1, 2,, 3,,]
"
`;

exports[`invalid(44): '[1,].concat([2,], [3,])' > Code 1`] = `
"
  1 | [1,].concat([2,], [3,])
"
`;

exports[`invalid(44): '[1,].concat([2,], [3,])' > Error 1/1 1`] = `
"
> 1 | [1,].concat([2,], [3,])
    |      ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(44): '[1,].concat([2,], [3,])' > Output 1`] = `
"
  1 | [1, 2, 3,]
"
`;

exports[`invalid(45): '[1,].concat([2,,], [3,,])' > Code 1`] = `
"
  1 | [1,].concat([2,,], [3,,])
"
`;

exports[`invalid(45): '[1,].concat([2,,], [3,,])' > Error 1/1 1`] = `
"
> 1 | [1,].concat([2,,], [3,,])
    |      ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(45): '[1,].concat([2,,], [3,,])' > Output 1`] = `
"
  1 | [1, 2,, 3,,]
"
`;

exports[`invalid(46): '[].concat([], [])' > Code 1`] = `
"
  1 | [].concat([], [])
"
`;

exports[`invalid(46): '[].concat([], [])' > Error 1/1 1`] = `
"
> 1 | [].concat([], [])
    |    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(46): '[].concat([], [])' > Output 1`] = `
"
  1 | []
"
`;

exports[`invalid(47): 'const EMPTY_STRING = ""\\nconst EMPTY_…' > Code 1`] = `
"
   1 | const EMPTY_STRING = ""
   2 | const EMPTY_STRING_IN_ARRAY = ""
   3 | const EMPTY_STRING_IN_ARRAY_OF_ARRAY = ""
   4 | const array = [].concat(
   5 | 	undefined,
   6 | 	null,
   7 | 	EMPTY_STRING,
   8 | 	false,
   9 | 	0,
  10 | 	[EMPTY_STRING_IN_ARRAY],
  11 | 	[[EMPTY_STRING_IN_ARRAY_OF_ARRAY]]
  12 | )
"
`;

exports[`invalid(47): 'const EMPTY_STRING = ""\\nconst EMPTY_…' > Error 1/1 1`] = `
"
   1 | const EMPTY_STRING = ""
   2 | const EMPTY_STRING_IN_ARRAY = ""
   3 | const EMPTY_STRING_IN_ARRAY_OF_ARRAY = ""
>  4 | const array = [].concat(
     |                  ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
   5 | 	undefined,
   6 | 	null,
   7 | 	EMPTY_STRING,
   8 | 	false,
   9 | 	0,
  10 | 	[EMPTY_STRING_IN_ARRAY],
  11 | 	[[EMPTY_STRING_IN_ARRAY_OF_ARRAY]]
  12 | )
"
`;

exports[`invalid(47): 'const EMPTY_STRING = ""\\nconst EMPTY_…' > Output 1`] = `
"
  1 | const EMPTY_STRING = ""
  2 | const EMPTY_STRING_IN_ARRAY = ""
  3 | const EMPTY_STRING_IN_ARRAY_OF_ARRAY = ""
  4 | const array = [undefined, null, EMPTY_STRING, false, 0, EMPTY_STRING_IN_ARRAY, [EMPTY_STRING_IN_ARRAY_OF_ARRAY]]
"
`;

exports[`invalid(48): '[].concat((a.b.c), 2)' > Code 1`] = `
"
  1 | [].concat((a.b.c), 2)
"
`;

exports[`invalid(48): '[].concat((a.b.c), 2)' > Error 1/1 1`] = `
"
> 1 | [].concat((a.b.c), 2)
    |    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/3: First argument is an \`array\`.
  1 | [...(a.b.c), 2]

--------------------------------------------------------------------------------
Suggestion 2/3: First argument is not an \`array\`.
  1 | [(a.b.c), 2]

--------------------------------------------------------------------------------
Suggestion 3/3: Test first argument with \`Array.isArray(…)\`.
  1 | [...(Array.isArray((a.b.c)) ? (a.b.c) : [(a.b.c)]), 2]
"
`;

exports[`invalid(49): '[].concat(a.b(), 2)' > Code 1`] = `
"
  1 | [].concat(a.b(), 2)
"
`;

exports[`invalid(49): '[].concat(a.b(), 2)' > Error 1/1 1`] = `
"
> 1 | [].concat(a.b(), 2)
    |    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/2: First argument is an \`array\`.
  1 | [...a.b(), 2]

--------------------------------------------------------------------------------
Suggestion 2/2: First argument is not an \`array\`.
  1 | [a.b(), 2]
"
`;

exports[`invalid(50): 'foo.concat(bar, 2, [3, 4], baz, 5, [6…' > Code 1`] = `
"
  1 | foo.concat(bar, 2, [3, 4], baz, 5, [6, 7])
"
`;

exports[`invalid(50): 'foo.concat(bar, 2, [3, 4], baz, 5, [6…' > Error 1/1 1`] = `
"
> 1 | foo.concat(bar, 2, [3, 4], baz, 5, [6, 7])
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/4: First argument is an \`array\`.
  1 | [...foo, ...bar, 2, 3, 4].concat(baz, 5, [6, 7])

--------------------------------------------------------------------------------
Suggestion 2/4: First argument is not an \`array\`.
  1 | [...foo, bar, 2, 3, 4].concat(baz, 5, [6, 7])

--------------------------------------------------------------------------------
Suggestion 3/4: Test first argument with \`Array.isArray(…)\`.
  1 | [...foo, ...(Array.isArray(bar) ? bar : [bar]), 2, 3, 4].concat(baz, 5, [6, 7])

--------------------------------------------------------------------------------
Suggestion 4/4: Spread all unknown arguments\`.
  1 | [...foo, ...bar, 2, 3, 4, ...baz, 5, 6, 7]
"
`;

exports[`invalid(51): 'foo.concat(bar, 2, 3, ...baz)' > Code 1`] = `
"
  1 | foo.concat(bar, 2, 3, ...baz)
"
`;

exports[`invalid(51): 'foo.concat(bar, 2, 3, ...baz)' > Error 1/1 1`] = `
"
> 1 | foo.concat(bar, 2, 3, ...baz)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/3: First argument is an \`array\`.
  1 | [...foo, ...bar, 2, 3].concat(...baz)

--------------------------------------------------------------------------------
Suggestion 2/3: First argument is not an \`array\`.
  1 | [...foo, bar, 2, 3].concat(...baz)

--------------------------------------------------------------------------------
Suggestion 3/3: Test first argument with \`Array.isArray(…)\`.
  1 | [...foo, ...(Array.isArray(bar) ? bar : [bar]), 2, 3].concat(...baz)
"
`;

exports[`invalid(52): 'notClass.concat(1)' > Code 1`] = `
"
  1 | notClass.concat(1)
"
`;

exports[`invalid(52): 'notClass.concat(1)' > Error 1/1 1`] = `
"
> 1 | notClass.concat(1)
    |          ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(52): 'notClass.concat(1)' > Output 1`] = `
"
  1 | [...notClass, 1]
"
`;

exports[`invalid(53): '_A.concat(1)' > Code 1`] = `
"
  1 | _A.concat(1)
"
`;

exports[`invalid(53): '_A.concat(1)' > Error 1/1 1`] = `
"
> 1 | _A.concat(1)
    |    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(53): '_A.concat(1)' > Output 1`] = `
"
  1 | [..._A, 1]
"
`;

exports[`invalid(54): 'FOO.concat(1)' > Code 1`] = `
"
  1 | FOO.concat(1)
"
`;

exports[`invalid(54): 'FOO.concat(1)' > Error 1/1 1`] = `
"
> 1 | FOO.concat(1)
    |     ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(54): 'FOO.concat(1)' > Output 1`] = `
"
  1 | [...FOO, 1]
"
`;

exports[`invalid(55): 'A.concat(1)' > Code 1`] = `
"
  1 | A.concat(1)
"
`;

exports[`invalid(55): 'A.concat(1)' > Error 1/1 1`] = `
"
> 1 | A.concat(1)
    |   ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(55): 'A.concat(1)' > Output 1`] = `
"
  1 | [...A, 1]
"
`;

exports[`invalid(56): 'Foo.x.concat(1)' > Code 1`] = `
"
  1 | Foo.x.concat(1)
"
`;

exports[`invalid(56): 'Foo.x.concat(1)' > Error 1/1 1`] = `
"
> 1 | Foo.x.concat(1)
    |       ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(56): 'Foo.x.concat(1)' > Output 1`] = `
"
  1 | [...Foo.x, 1]
"
`;

exports[`invalid(57): 'if (test) foo.concat(1)' > Code 1`] = `
"
  1 | if (test) foo.concat(1)
"
`;

exports[`invalid(57): 'if (test) foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | if (test) foo.concat(1)
    |               ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(57): 'if (test) foo.concat(1)' > Output 1`] = `
"
  1 | if (test) [...foo, 1]
"
`;

exports[`invalid(58): 'if (test) {} else foo.concat(1)' > Code 1`] = `
"
  1 | if (test) {} else foo.concat(1)
"
`;

exports[`invalid(58): 'if (test) {} else foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | if (test) {} else foo.concat(1)
    |                       ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(58): 'if (test) {} else foo.concat(1)' > Output 1`] = `
"
  1 | if (test) {} else [...foo, 1]
"
`;

exports[`invalid(59): 'if (test) {} else foo.concat(1)' > Code 1`] = `
"
  1 | if (test) {} else foo.concat(1)
"
`;

exports[`invalid(59): 'if (test) {} else foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | if (test) {} else foo.concat(1)
    |                       ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(59): 'if (test) {} else foo.concat(1)' > Output 1`] = `
"
  1 | if (test) {} else [...foo, 1]
"
`;

exports[`invalid(60): 'for (;;) foo.concat(1)' > Code 1`] = `
"
  1 | for (;;) foo.concat(1)
"
`;

exports[`invalid(60): 'for (;;) foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | for (;;) foo.concat(1)
    |              ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(60): 'for (;;) foo.concat(1)' > Output 1`] = `
"
  1 | for (;;) [...foo, 1]
"
`;

exports[`invalid(61): 'for (a in b) foo.concat(1)' > Code 1`] = `
"
  1 | for (a in b) foo.concat(1)
"
`;

exports[`invalid(61): 'for (a in b) foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | for (a in b) foo.concat(1)
    |                  ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(61): 'for (a in b) foo.concat(1)' > Output 1`] = `
"
  1 | for (a in b) [...foo, 1]
"
`;

exports[`invalid(62): 'for (a in b) foo.concat(1)' > Code 1`] = `
"
  1 | for (a in b) foo.concat(1)
"
`;

exports[`invalid(62): 'for (a in b) foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | for (a in b) foo.concat(1)
    |                  ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(62): 'for (a in b) foo.concat(1)' > Output 1`] = `
"
  1 | for (a in b) [...foo, 1]
"
`;

exports[`invalid(63): 'for (const a of b) foo.concat(1)' > Code 1`] = `
"
  1 | for (const a of b) foo.concat(1)
"
`;

exports[`invalid(63): 'for (const a of b) foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | for (const a of b) foo.concat(1)
    |                        ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(63): 'for (const a of b) foo.concat(1)' > Output 1`] = `
"
  1 | for (const a of b) [...foo, 1]
"
`;

exports[`invalid(64): 'while (test) foo.concat(1)' > Code 1`] = `
"
  1 | while (test) foo.concat(1)
"
`;

exports[`invalid(64): 'while (test) foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | while (test) foo.concat(1)
    |                  ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(64): 'while (test) foo.concat(1)' > Output 1`] = `
"
  1 | while (test) [...foo, 1]
"
`;

exports[`invalid(65): 'do foo.concat(1); while (test)' > Code 1`] = `
"
  1 | do foo.concat(1); while (test)
"
`;

exports[`invalid(65): 'do foo.concat(1); while (test)' > Error 1/1 1`] = `
"
> 1 | do foo.concat(1); while (test)
    |        ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(65): 'do foo.concat(1); while (test)' > Output 1`] = `
"
  1 | do [...foo, 1]; while (test)
"
`;

exports[`invalid(66): 'with (foo) foo.concat(1)' > Code 1`] = `
"
  1 | with (foo) foo.concat(1)
"
`;

exports[`invalid(66): 'with (foo) foo.concat(1)' > Error 1/1 1`] = `
"
> 1 | with (foo) foo.concat(1)
    |                ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(66): 'with (foo) foo.concat(1)' > Output 1`] = `
"
  1 | with (foo) [...foo, 1]
"
`;

exports[`invalid(67): 'const baz = [2];\\ncall(foo, ...[bar].…' > Code 1`] = `
"
  1 | const baz = [2];
  2 | call(foo, ...[bar].concat(baz));
"
`;

exports[`invalid(67): 'const baz = [2];\\ncall(foo, ...[bar].…' > Error 1/1 1`] = `
"
  1 | const baz = [2];
> 2 | call(foo, ...[bar].concat(baz));
    |                    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(67): 'const baz = [2];\\ncall(foo, ...[bar].…' > Output 1`] = `
"
  1 | const baz = [2];
  2 | call(foo, ...[bar, ...baz]);
"
`;

exports[`invalid(68): 'foo.join(foo, bar).concat("...")' > Code 1`] = `
"
  1 | foo.join(foo, bar).concat("...")
"
`;

exports[`invalid(68): 'foo.join(foo, bar).concat("...")' > Error 1/1 1`] = `
"
> 1 | foo.join(foo, bar).concat("...")
    |                    ^^^^^^ Prefer the spread operator over \`Array#concat(…)\`.
"
`;

exports[`invalid(68): 'foo.join(foo, bar).concat("...")' > Output 1`] = `
"
  1 | [...foo.join(foo, bar), "..."]
"
`;
