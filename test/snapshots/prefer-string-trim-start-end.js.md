// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.trimLeft()' > Code 1`] = `
"
  1 | foo.trimLeft()
"
`;

exports[`invalid(0): 'foo.trimLeft()' > Error 1/1 1`] = `
"
> 1 | foo.trimLeft()
    |     ^^^^^^^^ Prefer \`String#trimStart()\` over \`String#trimLeft()\`.
"
`;

exports[`invalid(0): 'foo.trimLeft()' > Output 1`] = `
"
  1 | foo.trimStart()
"
`;

exports[`invalid(1): 'foo.trimRight()' > Code 1`] = `
"
  1 | foo.trimRight()
"
`;

exports[`invalid(1): 'foo.trimRight()' > Error 1/1 1`] = `
"
> 1 | foo.trimRight()
    |     ^^^^^^^^^ Prefer \`String#trimEnd()\` over \`String#trimRight()\`.
"
`;

exports[`invalid(1): 'foo.trimRight()' > Output 1`] = `
"
  1 | foo.trimEnd()
"
`;

exports[`invalid(2): 'trimLeft.trimRight()' > Code 1`] = `
"
  1 | trimLeft.trimRight()
"
`;

exports[`invalid(2): 'trimLeft.trimRight()' > Error 1/1 1`] = `
"
> 1 | trimLeft.trimRight()
    |          ^^^^^^^^^ Prefer \`String#trimEnd()\` over \`String#trimRight()\`.
"
`;

exports[`invalid(2): 'trimLeft.trimRight()' > Output 1`] = `
"
  1 | trimLeft.trimEnd()
"
`;

exports[`invalid(3): 'foo.trimLeft.trimRight()' > Code 1`] = `
"
  1 | foo.trimLeft.trimRight()
"
`;

exports[`invalid(3): 'foo.trimLeft.trimRight()' > Error 1/1 1`] = `
"
> 1 | foo.trimLeft.trimRight()
    |              ^^^^^^^^^ Prefer \`String#trimEnd()\` over \`String#trimRight()\`.
"
`;

exports[`invalid(3): 'foo.trimLeft.trimRight()' > Output 1`] = `
"
  1 | foo.trimLeft.trimEnd()
"
`;

exports[`invalid(4): '"foo".trimLeft()' > Code 1`] = `
"
  1 | "foo".trimLeft()
"
`;

exports[`invalid(4): '"foo".trimLeft()' > Error 1/1 1`] = `
"
> 1 | "foo".trimLeft()
    |       ^^^^^^^^ Prefer \`String#trimStart()\` over \`String#trimLeft()\`.
"
`;

exports[`invalid(4): '"foo".trimLeft()' > Output 1`] = `
"
  1 | "foo".trimStart()
"
`;

exports[`invalid(5): 'foo\\n\\t// comment\\n\\t.trimRight/* com…' > Code 1`] = `
"
  1 | foo
  2 | 	// comment
  3 | 	.trimRight/* comment */(
  4 | 		/* comment */
  5 | 	)
"
`;

exports[`invalid(5): 'foo\\n\\t// comment\\n\\t.trimRight/* com…' > Error 1/1 1`] = `
"
  1 | foo
  2 | 	// comment
> 3 | 	.trimRight/* comment */(
    | 	 ^^^^^^^^^ Prefer \`String#trimEnd()\` over \`String#trimRight()\`.
  4 | 		/* comment */
  5 | 	)
"
`;

exports[`invalid(5): 'foo\\n\\t// comment\\n\\t.trimRight/* com…' > Output 1`] = `
"
  1 | foo
  2 | 	// comment
  3 | 	.trimEnd/* comment */(
  4 | 		/* comment */
  5 | 	)
"
`;

exports[`invalid(6): 'foo?.trimLeft()' > Code 1`] = `
"
  1 | foo?.trimLeft()
"
`;

exports[`invalid(6): 'foo?.trimLeft()' > Error 1/1 1`] = `
"
> 1 | foo?.trimLeft()
    |      ^^^^^^^^ Prefer \`String#trimStart()\` over \`String#trimLeft()\`.
"
`;

exports[`invalid(6): 'foo?.trimLeft()' > Output 1`] = `
"
  1 | foo?.trimStart()
"
`;
