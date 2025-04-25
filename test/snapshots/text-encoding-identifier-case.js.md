// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '"UTF-8"' > Code 1`] = `
"
  1 | "UTF-8"
"
`;

exports[`invalid(0): '"UTF-8"' > Error 1/1 1`] = `
"
> 1 | "UTF-8"
    | ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | "utf8"
"
`;

exports[`invalid(0): '<not-meta charset="utf-8" />' > Code 1`] = `
"
  1 | <not-meta charset="utf-8" />
"
`;

exports[`invalid(0): '<not-meta charset="utf-8" />' > Error 1/1 1`] = `
"
> 1 | <not-meta charset="utf-8" />
    |                   ^^^^^^^ Prefer \`utf8\` over \`utf-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`utf-8\` with \`utf8\`.
  1 | <not-meta charset="utf8" />
"
`;

exports[`invalid(1): '"utf-8"' > Code 1`] = `
"
  1 | "utf-8"
"
`;

exports[`invalid(1): '"utf-8"' > Error 1/1 1`] = `
"
> 1 | "utf-8"
    | ^^^^^^^ Prefer \`utf8\` over \`utf-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`utf-8\` with \`utf8\`.
  1 | "utf8"
"
`;

exports[`invalid(1): '<meta not-charset="utf-8" />' > Code 1`] = `
"
  1 | <meta not-charset="utf-8" />
"
`;

exports[`invalid(1): '<meta not-charset="utf-8" />' > Error 1/1 1`] = `
"
> 1 | <meta not-charset="utf-8" />
    |                   ^^^^^^^ Prefer \`utf8\` over \`utf-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`utf-8\` with \`utf8\`.
  1 | <meta not-charset="utf8" />
"
`;

exports[`invalid(2): '<meta charset="ASCII" />' > Code 1`] = `
"
  1 | <meta charset="ASCII" />
"
`;

exports[`invalid(2): '<meta charset="ASCII" />' > Error 1/1 1`] = `
"
> 1 | <meta charset="ASCII" />
    |               ^^^^^^^ Prefer \`ascii\` over \`ASCII\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`ASCII\` with \`ascii\`.
  1 | <meta charset="ascii" />
"
`;

exports[`invalid(2): '\\'utf-8\\'' > Code 1`] = `
"
  1 | 'utf-8'
"
`;

exports[`invalid(2): '\\'utf-8\\'' > Error 1/1 1`] = `
"
> 1 | 'utf-8'
    | ^^^^^^^ Prefer \`utf8\` over \`utf-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`utf-8\` with \`utf8\`.
  1 | 'utf8'
"
`;

exports[`invalid(3): '"Utf8"' > Code 1`] = `
"
  1 | "Utf8"
"
`;

exports[`invalid(3): '"Utf8"' > Error 1/1 1`] = `
"
> 1 | "Utf8"
    | ^^^^^^ Prefer \`utf8\` over \`Utf8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`Utf8\` with \`utf8\`.
  1 | "utf8"
"
`;

exports[`invalid(3): '<META CHARSET="ASCII" />' > Code 1`] = `
"
  1 | <META CHARSET="ASCII" />
"
`;

exports[`invalid(3): '<META CHARSET="ASCII" />' > Error 1/1 1`] = `
"
> 1 | <META CHARSET="ASCII" />
    |               ^^^^^^^ Prefer \`ascii\` over \`ASCII\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`ASCII\` with \`ascii\`.
  1 | <META CHARSET="ascii" />
"
`;

exports[`invalid(4): '"ASCII"' > Code 1`] = `
"
  1 | "ASCII"
"
`;

exports[`invalid(4): '"ASCII"' > Error 1/1 1`] = `
"
> 1 | "ASCII"
    | ^^^^^^^ Prefer \`ascii\` over \`ASCII\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`ASCII\` with \`ascii\`.
  1 | "ascii"
"
`;

exports[`invalid(5): 'fs.readFile?.(file, "UTF-8")' > Code 1`] = `
"
  1 | fs.readFile?.(file, "UTF-8")
"
`;

exports[`invalid(5): 'fs.readFile?.(file, "UTF-8")' > Error 1/1 1`] = `
"
> 1 | fs.readFile?.(file, "UTF-8")
    |                     ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | fs.readFile?.(file, "utf8")
"
`;

exports[`invalid(6): 'fs?.readFile(file, "UTF-8")' > Code 1`] = `
"
  1 | fs?.readFile(file, "UTF-8")
"
`;

exports[`invalid(6): 'fs?.readFile(file, "UTF-8")' > Error 1/1 1`] = `
"
> 1 | fs?.readFile(file, "UTF-8")
    |                    ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | fs?.readFile(file, "utf8")
"
`;

exports[`invalid(7): 'readFile(file, "UTF-8")' > Code 1`] = `
"
  1 | readFile(file, "UTF-8")
"
`;

exports[`invalid(7): 'readFile(file, "UTF-8")' > Error 1/1 1`] = `
"
> 1 | readFile(file, "UTF-8")
    |                ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | readFile(file, "utf8")
"
`;

exports[`invalid(8): 'fs.readFile(...file, "UTF-8")' > Code 1`] = `
"
  1 | fs.readFile(...file, "UTF-8")
"
`;

exports[`invalid(8): 'fs.readFile(...file, "UTF-8")' > Error 1/1 1`] = `
"
> 1 | fs.readFile(...file, "UTF-8")
    |                      ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | fs.readFile(...file, "utf8")
"
`;

exports[`invalid(9): 'new fs.readFile(file, "UTF-8")' > Code 1`] = `
"
  1 | new fs.readFile(file, "UTF-8")
"
`;

exports[`invalid(9): 'new fs.readFile(file, "UTF-8")' > Error 1/1 1`] = `
"
> 1 | new fs.readFile(file, "UTF-8")
    |                       ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | new fs.readFile(file, "utf8")
"
`;

exports[`invalid(10): 'fs.readFile(file, {encoding: "UTF-8"})' > Code 1`] = `
"
  1 | fs.readFile(file, {encoding: "UTF-8"})
"
`;

exports[`invalid(10): 'fs.readFile(file, {encoding: "UTF-8"})' > Error 1/1 1`] = `
"
> 1 | fs.readFile(file, {encoding: "UTF-8"})
    |                              ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | fs.readFile(file, {encoding: "utf8"})
"
`;

exports[`invalid(11): 'fs.readFile("UTF-8")' > Code 1`] = `
"
  1 | fs.readFile("UTF-8")
"
`;

exports[`invalid(11): 'fs.readFile("UTF-8")' > Error 1/1 1`] = `
"
> 1 | fs.readFile("UTF-8")
    |             ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | fs.readFile("utf8")
"
`;

exports[`invalid(12): 'fs.readFile(file, "UTF-8", () => {})' > Code 1`] = `
"
  1 | fs.readFile(file, "UTF-8", () => {})
"
`;

exports[`invalid(12): 'fs.readFile(file, "UTF-8", () => {})' > Error 1/1 1`] = `
"
> 1 | fs.readFile(file, "UTF-8", () => {})
    |                   ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.
"
`;

exports[`invalid(12): 'fs.readFile(file, "UTF-8", () => {})' > Output 1`] = `
"
  1 | fs.readFile(file, "utf8", () => {})
"
`;

exports[`invalid(13): 'fs.readFileSync(file, "UTF-8")' > Code 1`] = `
"
  1 | fs.readFileSync(file, "UTF-8")
"
`;

exports[`invalid(13): 'fs.readFileSync(file, "UTF-8")' > Error 1/1 1`] = `
"
> 1 | fs.readFileSync(file, "UTF-8")
    |                       ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.
"
`;

exports[`invalid(13): 'fs.readFileSync(file, "UTF-8")' > Output 1`] = `
"
  1 | fs.readFileSync(file, "utf8")
"
`;

exports[`invalid(14): 'fs[readFile](file, "UTF-8")' > Code 1`] = `
"
  1 | fs[readFile](file, "UTF-8")
"
`;

exports[`invalid(14): 'fs[readFile](file, "UTF-8")' > Error 1/1 1`] = `
"
> 1 | fs[readFile](file, "UTF-8")
    |                    ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | fs[readFile](file, "utf8")
"
`;

exports[`invalid(15): 'fs["readFile"](file, "UTF-8")' > Code 1`] = `
"
  1 | fs["readFile"](file, "UTF-8")
"
`;

exports[`invalid(15): 'fs["readFile"](file, "UTF-8")' > Error 1/1 1`] = `
"
> 1 | fs["readFile"](file, "UTF-8")
    |                      ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`UTF-8\` with \`utf8\`.
  1 | fs["readFile"](file, "utf8")
"
`;

exports[`invalid(16): 'await fs.readFile(file, "UTF-8",)' > Code 1`] = `
"
  1 | await fs.readFile(file, "UTF-8",)
"
`;

exports[`invalid(16): 'await fs.readFile(file, "UTF-8",)' > Error 1/1 1`] = `
"
> 1 | await fs.readFile(file, "UTF-8",)
    |                         ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.
"
`;

exports[`invalid(16): 'await fs.readFile(file, "UTF-8",)' > Output 1`] = `
"
  1 | await fs.readFile(file, "utf8",)
"
`;

exports[`invalid(17): 'fs.promises.readFile(file, "UTF-8",)' > Code 1`] = `
"
  1 | fs.promises.readFile(file, "UTF-8",)
"
`;

exports[`invalid(17): 'fs.promises.readFile(file, "UTF-8",)' > Error 1/1 1`] = `
"
> 1 | fs.promises.readFile(file, "UTF-8",)
    |                            ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.
"
`;

exports[`invalid(17): 'fs.promises.readFile(file, "UTF-8",)' > Output 1`] = `
"
  1 | fs.promises.readFile(file, "utf8",)
"
`;

exports[`invalid(18): 'whatever.readFile(file, "UTF-8",)' > Code 1`] = `
"
  1 | whatever.readFile(file, "UTF-8",)
"
`;

exports[`invalid(18): 'whatever.readFile(file, "UTF-8",)' > Error 1/1 1`] = `
"
> 1 | whatever.readFile(file, "UTF-8",)
    |                         ^^^^^^^ Prefer \`utf8\` over \`UTF-8\`.
"
`;

exports[`invalid(18): 'whatever.readFile(file, "UTF-8",)' > Output 1`] = `
"
  1 | whatever.readFile(file, "utf8",)
"
`;
