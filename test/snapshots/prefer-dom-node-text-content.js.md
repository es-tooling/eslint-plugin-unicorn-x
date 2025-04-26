// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'node.innerText;' > Code 1`] = `
"
  1 | node.innerText;
"
`;

exports[`invalid(0): 'node.innerText;' > Error 1/1 1`] = `
"
> 1 | node.innerText;
    |      ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | node.textContent;
"
`;

exports[`invalid(1): 'node?.innerText;' > Code 1`] = `
"
  1 | node?.innerText;
"
`;

exports[`invalid(1): 'node?.innerText;' > Error 1/1 1`] = `
"
> 1 | node?.innerText;
    |       ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | node?.textContent;
"
`;

exports[`invalid(2): 'node.innerText = \\'foo\\';' > Code 1`] = `
"
  1 | node.innerText = 'foo';
"
`;

exports[`invalid(2): 'node.innerText = \\'foo\\';' > Error 1/1 1`] = `
"
> 1 | node.innerText = 'foo';
    |      ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | node.textContent = 'foo';
"
`;

exports[`invalid(3): 'innerText.innerText;' > Code 1`] = `
"
  1 | innerText.innerText;
"
`;

exports[`invalid(3): 'innerText.innerText;' > Error 1/1 1`] = `
"
> 1 | innerText.innerText;
    |           ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | innerText.textContent;
"
`;

exports[`invalid(4): 'const {innerText} = node;' > Code 1`] = `
"
  1 | const {innerText} = node;
"
`;

exports[`invalid(4): 'const {innerText} = node;' > Error 1/1 1`] = `
"
> 1 | const {innerText} = node;
    |        ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | const {textContent: innerText} = node;
"
`;

exports[`invalid(5): 'const {innerText,} = node;' > Code 1`] = `
"
  1 | const {innerText,} = node;
"
`;

exports[`invalid(5): 'const {innerText,} = node;' > Error 1/1 1`] = `
"
> 1 | const {innerText,} = node;
    |        ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | const {textContent: innerText,} = node;
"
`;

exports[`invalid(6): 'const {innerText: text} = node;' > Code 1`] = `
"
  1 | const {innerText: text} = node;
"
`;

exports[`invalid(6): 'const {innerText: text} = node;' > Error 1/1 1`] = `
"
> 1 | const {innerText: text} = node;
    |        ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | const {textContent: text} = node;
"
`;

exports[`invalid(7): 'const {innerText = "default text"} = …' > Code 1`] = `
"
  1 | const {innerText = "default text"} = node;
"
`;

exports[`invalid(7): 'const {innerText = "default text"} = …' > Error 1/1 1`] = `
"
> 1 | const {innerText = "default text"} = node;
    |        ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | const {textContent: innerText = "default text"} = node;
"
`;

exports[`invalid(8): 'const {innerText: text = "default tex…' > Code 1`] = `
"
  1 | const {innerText: text = "default text"} = node;
"
`;

exports[`invalid(8): 'const {innerText: text = "default tex…' > Error 1/1 1`] = `
"
> 1 | const {innerText: text = "default text"} = node;
    |        ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | const {textContent: text = "default text"} = node;
"
`;

exports[`invalid(9): '({innerText} = node);' > Code 1`] = `
"
  1 | ({innerText} = node);
"
`;

exports[`invalid(9): '({innerText} = node);' > Error 1/1 1`] = `
"
> 1 | ({innerText} = node);
    |   ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | ({textContent: innerText} = node);
"
`;

exports[`invalid(10): '({innerText: text} = node);' > Code 1`] = `
"
  1 | ({innerText: text} = node);
"
`;

exports[`invalid(10): '({innerText: text} = node);' > Error 1/1 1`] = `
"
> 1 | ({innerText: text} = node);
    |   ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | ({textContent: text} = node);
"
`;

exports[`invalid(11): '({innerText = "default text"} = node);' > Code 1`] = `
"
  1 | ({innerText = "default text"} = node);
"
`;

exports[`invalid(11): '({innerText = "default text"} = node);' > Error 1/1 1`] = `
"
> 1 | ({innerText = "default text"} = node);
    |   ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | ({textContent: innerText = "default text"} = node);
"
`;

exports[`invalid(12): '({innerText: text = "default text"} =…' > Code 1`] = `
"
  1 | ({innerText: text = "default text"} = node);
"
`;

exports[`invalid(12): '({innerText: text = "default text"} =…' > Error 1/1 1`] = `
"
> 1 | ({innerText: text = "default text"} = node);
    |   ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | ({textContent: text = "default text"} = node);
"
`;

exports[`invalid(13): 'function foo({innerText}) {return inn…' > Code 1`] = `
"
  1 | function foo({innerText}) {return innerText}
"
`;

exports[`invalid(13): 'function foo({innerText}) {return inn…' > Error 1/1 1`] = `
"
> 1 | function foo({innerText}) {return innerText}
    |               ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | function foo({textContent: innerText}) {return innerText}
"
`;

exports[`invalid(14): 'for (const [{innerText}] of elements);' > Code 1`] = `
"
  1 | for (const [{innerText}] of elements);
"
`;

exports[`invalid(14): 'for (const [{innerText}] of elements);' > Error 1/1 1`] = `
"
> 1 | for (const [{innerText}] of elements);
    |              ^^^^^^^^^ Prefer \`.textContent\` over \`.innerText\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`.textContent\`.
  1 | for (const [{textContent: innerText}] of elements);
"
`;
