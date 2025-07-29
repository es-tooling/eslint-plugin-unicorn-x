// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'export {}' > Code 1`] = `
"
  1 | export {}
"
`;

exports[`invalid(0): 'export {}' > Error 1/1 1`] = `
"
> 1 | export {}
    |        ^^ export statement without specifiers is not allowed.
"
`;

exports[`invalid(0): 'export {}' > Output 1`] = `
"
  1 |
"
`;

exports[`invalid(0): 'import {} from "foo";' > Code 1`] = `
"
  1 | import {} from "foo";
"
`;

exports[`invalid(0): 'import {} from "foo";' > Error 1/1 1`] = `
"
> 1 | import {} from "foo";
    |        ^^ import statement without specifiers is not allowed.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this import statement.
  1 |

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to side effect import.
  1 | import   "foo";
"
`;

exports[`invalid(1): 'export type{}' > Code 1`] = `
"
  1 | export type{}
"
`;

exports[`invalid(1): 'export type{}' > Error 1/1 1`] = `
"
> 1 | export type{}
    |            ^^ export statement without specifiers is not allowed.
"
`;

exports[`invalid(1): 'export type{}' > Output 1`] = `
"
  1 |
"
`;

exports[`invalid(1): 'import{}from"foo";' > Code 1`] = `
"
  1 | import{}from"foo";
"
`;

exports[`invalid(1): 'import{}from"foo";' > Error 1/1 1`] = `
"
> 1 | import{}from"foo";
    |       ^^ import statement without specifiers is not allowed.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this import statement.
  1 |

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to side effect import.
  1 | import"foo";
"
`;

exports[`invalid(2): 'export type {} from "foo";' > Code 1`] = `
"
  1 | export type {} from "foo";
"
`;

exports[`invalid(2): 'export type {} from "foo";' > Error 1/1 1`] = `
"
> 1 | export type {} from "foo";
    |             ^^ export statement without specifiers is not allowed.
"
`;

exports[`invalid(2): 'export type {} from "foo";' > Output 1`] = `
"
  1 |
"
`;

exports[`invalid(2): 'import {\\n} from "foo";' > Code 1`] = `
"
  1 | import {
  2 | } from "foo";
"
`;

exports[`invalid(2): 'import {\\n} from "foo";' > Error 1/1 1`] = `
"
> 1 | import {
    |        ^
> 2 | } from "foo";
    | ^^ import statement without specifiers is not allowed.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this import statement.
  1 |

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to side effect import.
  1 | import 
  2 |   "foo";
"
`;

exports[`invalid(3): 'declare export type {} from "foo";' > Code 1`] = `
"
  1 | declare export type {} from "foo";
"
`;

exports[`invalid(3): 'declare export type {} from "foo";' > Error 1/1 1`] = `
"
> 1 | declare export type {} from "foo";
    |                     ^^ export statement without specifiers is not allowed.
"
`;

exports[`invalid(3): 'declare export type {} from "foo";' > Output 1`] = `
"
  1 |
"
`;

exports[`invalid(3): 'import foo, {} from "foo";' > Code 1`] = `
"
  1 | import foo, {} from "foo";
"
`;

exports[`invalid(3): 'import foo, {} from "foo";' > Error 1/1 1`] = `
"
> 1 | import foo, {} from "foo";
    |             ^^ import statement without specifiers is not allowed.
"
`;

exports[`invalid(3): 'import foo, {} from "foo";' > Output 1`] = `
"
  1 | import foo  from "foo";
"
`;

exports[`invalid(4): 'export {} from "foo";' > Code 1`] = `
"
  1 | export {} from "foo";
"
`;

exports[`invalid(4): 'export {} from "foo";' > Error 1/1 1`] = `
"
> 1 | export {} from "foo";
    |        ^^ export statement without specifiers is not allowed.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this export statement.
  1 |

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to side effect import.
  1 | import   "foo";
"
`;

exports[`invalid(4): 'import foo,{}from "foo";' > Code 1`] = `
"
  1 | import foo,{}from "foo";
"
`;

exports[`invalid(4): 'import foo,{}from "foo";' > Error 1/1 1`] = `
"
> 1 | import foo,{}from "foo";
    |            ^^ import statement without specifiers is not allowed.
"
`;

exports[`invalid(4): 'import foo,{}from "foo";' > Output 1`] = `
"
  1 | import foo from "foo";
"
`;

exports[`invalid(5): 'export{}from"foo";' > Code 1`] = `
"
  1 | export{}from"foo";
"
`;

exports[`invalid(5): 'export{}from"foo";' > Error 1/1 1`] = `
"
> 1 | export{}from"foo";
    |       ^^ export statement without specifiers is not allowed.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this export statement.
  1 |

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to side effect import.
  1 | import"foo";
"
`;

exports[`invalid(5): 'import foo, {\\n} from "foo";' > Code 1`] = `
"
  1 | import foo, {
  2 | } from "foo";
"
`;

exports[`invalid(5): 'import foo, {\\n} from "foo";' > Error 1/1 1`] = `
"
> 1 | import foo, {
    |             ^
> 2 | } from "foo";
    | ^^ import statement without specifiers is not allowed.
"
`;

exports[`invalid(5): 'import foo, {\\n} from "foo";' > Output 1`] = `
"
  1 | import foo 
  2 |  from "foo";
"
`;

exports[`invalid(6): 'export {\\n} from "foo";' > Code 1`] = `
"
  1 | export {
  2 | } from "foo";
"
`;

exports[`invalid(6): 'export {\\n} from "foo";' > Error 1/1 1`] = `
"
> 1 | export {
    |        ^
> 2 | } from "foo";
    | ^^ export statement without specifiers is not allowed.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this export statement.
  1 |

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to side effect import.
  1 | import 
  2 |   "foo";
"
`;

exports[`invalid(6): 'import foo,{}/* comment */from "foo";' > Code 1`] = `
"
  1 | import foo,{}/* comment */from "foo";
"
`;

exports[`invalid(6): 'import foo,{}/* comment */from "foo";' > Error 1/1 1`] = `
"
> 1 | import foo,{}/* comment */from "foo";
    |            ^^ import statement without specifiers is not allowed.
"
`;

exports[`invalid(6): 'import foo,{}/* comment */from "foo";' > Output 1`] = `
"
  1 | import foo/* comment */from "foo";
"
`;

exports[`invalid(7): 'export {} from "foo" with {type: "jso…' > Code 1`] = `
"
  1 | export {} from "foo" with {type: "json"};
"
`;

exports[`invalid(7): 'export {} from "foo" with {type: "jso…' > Error 1/1 1`] = `
"
> 1 | export {} from "foo" with {type: "json"};
    |        ^^ export statement without specifiers is not allowed.

--------------------------------------------------------------------------------
Suggestion 1/2: Remove this export statement.
  1 |

--------------------------------------------------------------------------------
Suggestion 2/2: Switch to side effect import.
  1 | import   "foo" with {type: "json"};
"
`;

exports[`invalid(7): 'import type {} from "foo";' > Code 1`] = `
"
  1 | import type {} from "foo";
"
`;

exports[`invalid(7): 'import type {} from "foo";' > Error 1/1 1`] = `
"
> 1 | import type {} from "foo";
    |             ^^ import statement without specifiers is not allowed.
"
`;

exports[`invalid(7): 'import type {} from "foo";' > Output 1`] = `
"
  1 |
"
`;

exports[`invalid(8): 'import type{}from"foo";' > Code 1`] = `
"
  1 | import type{}from"foo";
"
`;

exports[`invalid(8): 'import type{}from"foo";' > Error 1/1 1`] = `
"
> 1 | import type{}from"foo";
    |            ^^ import statement without specifiers is not allowed.
"
`;

exports[`invalid(8): 'import type{}from"foo";' > Output 1`] = `
"
  1 |
"
`;

exports[`invalid(9): 'import type foo, {} from "foo";' > Code 1`] = `
"
  1 | import type foo, {} from "foo";
"
`;

exports[`invalid(9): 'import type foo, {} from "foo";' > Error 1/1 1`] = `
"
> 1 | import type foo, {} from "foo";
    |                  ^^ import statement without specifiers is not allowed.
"
`;

exports[`invalid(9): 'import type foo, {} from "foo";' > Output 1`] = `
"
  1 | import type foo  from "foo";
"
`;

exports[`invalid(10): 'import type foo,{}from "foo";' > Code 1`] = `
"
  1 | import type foo,{}from "foo";
"
`;

exports[`invalid(10): 'import type foo,{}from "foo";' > Error 1/1 1`] = `
"
> 1 | import type foo,{}from "foo";
    |                 ^^ import statement without specifiers is not allowed.
"
`;

exports[`invalid(10): 'import type foo,{}from "foo";' > Output 1`] = `
"
  1 | import type foo from "foo";
"
`;
