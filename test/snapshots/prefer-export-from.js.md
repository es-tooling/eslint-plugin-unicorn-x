// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'import { foo } from "foo";\\nexport { …' > Code 1`] = `
"
  1 | import { foo } from "foo";
  2 | export { foo };
  3 | export type { bar } from "foo";
"
`;

exports[`invalid(0): 'import { foo } from "foo";\\nexport { …' > Error 1/1 1`] = `
"
  1 | import { foo } from "foo";
> 2 | export { foo };
    |          ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export type { bar } from "foo";
"
`;

exports[`invalid(0): 'import { foo } from "foo";\\nexport { …' > Output 1`] = `
"
  1 |
  2 |
  3 | export type { bar } from "foo";
  4 | export {foo} from "foo";
"
`;

exports[`invalid(0): 'import defaultExport from \\'foo\\';\\ne…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export default defaultExport;
"
`;

exports[`invalid(0): 'import defaultExport from \\'foo\\';\\ne…' > Code 2`] = `
"
  1 | import defaultExport from 'foo';
  2 | export {defaultExport as default};
  3 | export {defaultExport as named};
"
`;

exports[`invalid(0): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/1 1`] = `
"
  1 | import defaultExport from 'foo';
> 2 | export default defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(0): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/2 1`] = `
"
  1 | import defaultExport from 'foo';
> 2 | export {defaultExport as default};
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
  3 | export {defaultExport as named};
"
`;

exports[`invalid(0): 'import defaultExport from \\'foo\\';\\ne…' > Error 2/2 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export {defaultExport as default};
> 3 | export {defaultExport as named};
    |         ^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(0): 'import defaultExport from \\'foo\\';\\ne…' > Options 1`] = `
"
[
  {
    "ignoreUsedVariables": true
  }
]
"
`;

exports[`invalid(0): 'import defaultExport from \\'foo\\';\\ne…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default} from 'foo';
"
`;

exports[`invalid(0): 'import defaultExport from \\'foo\\';\\ne…' > Output 2`] = `
"
  1 |
  2 |
  3 |
  4 | export {default, default as named} from 'foo';
"
`;

exports[`invalid(0): 'import json from \\'./foo.json\\' with …' > Code 1`] = `
"
  1 | import json from './foo.json' with { type: 'json' };
  2 | export default json;
"
`;

exports[`invalid(0): 'import json from \\'./foo.json\\' with …' > Error 1/1 1`] = `
"
  1 | import json from './foo.json' with { type: 'json' };
> 2 | export default json;
    | ^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(0): 'import json from \\'./foo.json\\' with …' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default} from './foo.json' with { type: 'json' };
"
`;

exports[`invalid(1): 'import * as json from \\'./foo.json\\' …' > Code 1`] = `
"
  1 | import * as json from './foo.json' with { type: 'json' };
  2 | export {json};
"
`;

exports[`invalid(1): 'import * as json from \\'./foo.json\\' …' > Error 1/1 1`] = `
"
  1 | import * as json from './foo.json' with { type: 'json' };
> 2 | export {json};
    |         ^^^^ Use \`export…from\` to re-export \`json\`.
"
`;

exports[`invalid(1): 'import * as json from \\'./foo.json\\' …' > Output 1`] = `
"
  1 |
  2 |
  3 | export * as json from './foo.json' with { type: 'json' };
"
`;

exports[`invalid(1): 'import { foo } from "foo";\\nexport { …' > Code 1`] = `
"
  1 | import { foo } from "foo";
  2 | export { foo };
  3 | export { type bar } from "foo";
"
`;

exports[`invalid(1): 'import { foo } from "foo";\\nexport { …' > Error 1/1 1`] = `
"
  1 | import { foo } from "foo";
> 2 | export { foo };
    |          ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export { type bar } from "foo";
"
`;

exports[`invalid(1): 'import { foo } from "foo";\\nexport { …' > Output 1`] = `
"
  1 |
  2 |
  3 | export { type bar, foo } from "foo";
"
`;

exports[`invalid(1): 'import {named} from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | export {named as default};
  3 | export {named as named};
"
`;

exports[`invalid(1): 'import {named} from \\'foo\\';\\nexport …' > Error 1/2 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export {named as default};
    |         ^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
  3 | export {named as named};
"
`;

exports[`invalid(1): 'import {named} from \\'foo\\';\\nexport …' > Error 2/2 1`] = `
"
  1 | import {named} from 'foo';
  2 | export {named as default};
> 3 | export {named as named};
    |         ^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(1): 'import {named} from \\'foo\\';\\nexport …' > Options 1`] = `
"
[
  {
    "ignoreUsedVariables": true
  }
]
"
`;

exports[`invalid(1): 'import {named} from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 |
  4 | export {named as default, named} from 'foo';
"
`;

exports[`invalid(1): 'import defaultExport from \\'foo\\';\\ne…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export {defaultExport as default};
"
`;

exports[`invalid(1): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/1 1`] = `
"
  1 | import defaultExport from 'foo';
> 2 | export {defaultExport as default};
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(1): 'import defaultExport from \\'foo\\';\\ne…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default} from 'foo';
"
`;

exports[`invalid(2): 'import { foo } from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import { foo } from 'foo';
  2 | export { foo };
  3 | export type { bar } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(2): 'import { foo } from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import { foo } from 'foo';
> 2 | export { foo };
    |          ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export type { bar } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(2): 'import { foo } from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export type { bar } from "foo";
  4 | export { baz, foo } from "foo";
"
`;

exports[`invalid(2): 'import {foo} from \\'./foo.json\\' with…' > Code 1`] = `
"
  1 | import {foo} from './foo.json' with { type: 'unknown' };
  2 | export {foo};
  3 | export {bar} from './foo.json';
"
`;

exports[`invalid(2): 'import {foo} from \\'./foo.json\\' with…' > Error 1/1 1`] = `
"
  1 | import {foo} from './foo.json' with { type: 'unknown' };
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {bar} from './foo.json';
"
`;

exports[`invalid(2): 'import {foo} from \\'./foo.json\\' with…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {bar, foo} from './foo.json';
"
`;

exports[`invalid(2): 'import {named} from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | export default named;
  3 | export {named as named};
"
`;

exports[`invalid(2): 'import {named} from \\'foo\\';\\nexport …' > Error 1/2 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export default named;
    | ^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
  3 | export {named as named};
"
`;

exports[`invalid(2): 'import {named} from \\'foo\\';\\nexport …' > Error 2/2 1`] = `
"
  1 | import {named} from 'foo';
  2 | export default named;
> 3 | export {named as named};
    |         ^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(2): 'import {named} from \\'foo\\';\\nexport …' > Options 1`] = `
"
[
  {
    "ignoreUsedVariables": true
  }
]
"
`;

exports[`invalid(2): 'import {named} from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 |
  4 | export {named as default, named} from 'foo';
"
`;

exports[`invalid(2): 'import defaultExport from \\'foo\\';\\ne…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export {defaultExport as named};
"
`;

exports[`invalid(2): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/1 1`] = `
"
  1 | import defaultExport from 'foo';
> 2 | export {defaultExport as named};
    |         ^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(2): 'import defaultExport from \\'foo\\';\\ne…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default as named} from 'foo';
"
`;

exports[`invalid(3): 'import { foo } from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import { foo } from 'foo';
  2 | export { foo };
  3 | export { type bar } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(3): 'import { foo } from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import { foo } from 'foo';
> 2 | export { foo };
    |          ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export { type bar } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(3): 'import { foo } from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export { type bar, foo } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(3): 'import {foo} from \\'./foo.json\\';\\nex…' > Code 1`] = `
"
  1 | import {foo} from './foo.json';
  2 | export {foo};
  3 | export {bar} from './foo.json' with { type: 'unknown' };
"
`;

exports[`invalid(3): 'import {foo} from \\'./foo.json\\';\\nex…' > Error 1/1 1`] = `
"
  1 | import {foo} from './foo.json';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {bar} from './foo.json' with { type: 'unknown' };
"
`;

exports[`invalid(3): 'import {foo} from \\'./foo.json\\';\\nex…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {bar, foo} from './foo.json' with { type: 'unknown' };
"
`;

exports[`invalid(3): 'import defaultExport from \\'foo\\';\\ne…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export const variable = defaultExport;
"
`;

exports[`invalid(3): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/1 1`] = `
"
  1 | import defaultExport from 'foo';
> 2 | export const variable = defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`variable\`.
"
`;

exports[`invalid(3): 'import defaultExport from \\'foo\\';\\ne…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default as variable} from 'foo';
"
`;

exports[`invalid(3): 'import defaultExport, {named} from \\'…' > Code 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
  2 | export default defaultExport;
  3 | export {named};
"
`;

exports[`invalid(3): 'import defaultExport, {named} from \\'…' > Error 1/2 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
> 2 | export default defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
  3 | export {named};
"
`;

exports[`invalid(3): 'import defaultExport, {named} from \\'…' > Error 2/2 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
  2 | export default defaultExport;
> 3 | export {named};
    |         ^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(3): 'import defaultExport, {named} from \\'…' > Options 1`] = `
"
[
  {
    "ignoreUsedVariables": true
  }
]
"
`;

exports[`invalid(3): 'import defaultExport, {named} from \\'…' > Output 1`] = `
"
  1 |
  2 |
  3 |
  4 | export {default, named} from 'foo';
"
`;

exports[`invalid(4): 'import {default as defaultExport} fro…' > Code 1`] = `
"
  1 | import {default as defaultExport} from 'foo';
  2 | export default defaultExport;
"
`;

exports[`invalid(4): 'import {default as defaultExport} fro…' > Error 1/1 1`] = `
"
  1 | import {default as defaultExport} from 'foo';
> 2 | export default defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(4): 'import {default as defaultExport} fro…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default} from 'foo';
"
`;

exports[`invalid(4): 'import defaultExport, {named} from \\'…' > Code 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
  2 | export {defaultExport as default, named};
"
`;

exports[`invalid(4): 'import defaultExport, {named} from \\'…' > Error 1/2 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
> 2 | export {defaultExport as default, named};
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(4): 'import defaultExport, {named} from \\'…' > Error 2/2 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
> 2 | export {defaultExport as default, named};
    |                                   ^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(4): 'import defaultExport, {named} from \\'…' > Options 1`] = `
"
[
  {
    "ignoreUsedVariables": true
  }
]
"
`;

exports[`invalid(4): 'import defaultExport, {named} from \\'…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default, named} from 'foo';
"
`;

exports[`invalid(4): 'import type { foo } from "foo";\\nexpo…' > Code 1`] = `
"
  1 | import type { foo } from "foo";
  2 | export type { foo };
  3 | export type { bar } from "foo";
"
`;

exports[`invalid(4): 'import type { foo } from "foo";\\nexpo…' > Error 1/1 1`] = `
"
  1 | import type { foo } from "foo";
> 2 | export type { foo };
    |               ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export type { bar } from "foo";
"
`;

exports[`invalid(4): 'import type { foo } from "foo";\\nexpo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export type { bar, foo } from "foo";
"
`;

exports[`invalid(5): 'import { foo } from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import { foo } from 'foo';
  2 | export { foo };
  3 | export { baz } from "foo";
  4 | export { type bar } from "foo";
"
`;

exports[`invalid(5): 'import { foo } from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import { foo } from 'foo';
> 2 | export { foo };
    |          ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export { baz } from "foo";
  4 | export { type bar } from "foo";
"
`;

exports[`invalid(5): 'import { foo } from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export { baz, foo } from "foo";
  4 | export { type bar } from "foo";
"
`;

exports[`invalid(5): 'import {default as defaultExport} fro…' > Code 1`] = `
"
  1 | import {default as defaultExport} from 'foo';
  2 | export {defaultExport as default};
"
`;

exports[`invalid(5): 'import {default as defaultExport} fro…' > Error 1/1 1`] = `
"
  1 | import {default as defaultExport} from 'foo';
> 2 | export {defaultExport as default};
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(5): 'import {default as defaultExport} fro…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default} from 'foo';
"
`;

exports[`invalid(5): 'import defaultExport from \\'foo\\';\\ne…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export const variable = defaultExport;
"
`;

exports[`invalid(5): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/1 1`] = `
"
  1 | import defaultExport from 'foo';
> 2 | export const variable = defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`variable\`.
"
`;

exports[`invalid(5): 'import defaultExport from \\'foo\\';\\ne…' > Options 1`] = `
"
[
  {
    "ignoreUsedVariables": true
  }
]
"
`;

exports[`invalid(5): 'import defaultExport from \\'foo\\';\\ne…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default as variable} from 'foo';
"
`;

exports[`invalid(6): 'import {default as defaultExport} fro…' > Code 1`] = `
"
  1 | import {default as defaultExport} from 'foo';
  2 | export {defaultExport as named};
"
`;

exports[`invalid(6): 'import {default as defaultExport} fro…' > Error 1/1 1`] = `
"
  1 | import {default as defaultExport} from 'foo';
> 2 | export {defaultExport as named};
    |         ^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(6): 'import {default as defaultExport} fro…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default as named} from 'foo';
"
`;

exports[`invalid(6): 'import {notUsedNotExported, exported}…' > Code 1`] = `
"
  1 | import {notUsedNotExported, exported} from 'foo';
  2 | export {exported};
"
`;

exports[`invalid(6): 'import {notUsedNotExported, exported}…' > Error 1/1 1`] = `
"
  1 | import {notUsedNotExported, exported} from 'foo';
> 2 | export {exported};
    |         ^^^^^^^^ Use \`export…from\` to re-export \`exported\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export…from\`.
  1 | import {notUsedNotExported, } from 'foo';
  2 |
  3 | export {exported} from 'foo';
"
`;

exports[`invalid(6): 'import {notUsedNotExported, exported}…' > Options 1`] = `
"
[
  {
    "ignoreUsedVariables": true
  }
]
"
`;

exports[`invalid(6): 'import type { foo } from "foo";\\nexpo…' > Code 1`] = `
"
  1 | import type { foo } from "foo";
  2 | export type { foo };
  3 | export { type bar } from "foo";
"
`;

exports[`invalid(6): 'import type { foo } from "foo";\\nexpo…' > Error 1/1 1`] = `
"
  1 | import type { foo } from "foo";
> 2 | export type { foo };
    |               ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export { type bar } from "foo";
"
`;

exports[`invalid(6): 'import type { foo } from "foo";\\nexpo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export { type bar, type foo } from "foo";
"
`;

exports[`invalid(7): 'import defaultExport from \\'foo\\';\\ne…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export const variable = defaultExport;
"
`;

exports[`invalid(7): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/1 1`] = `
"
  1 | import defaultExport from 'foo';
> 2 | export const variable = defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`variable\`.
"
`;

exports[`invalid(7): 'import defaultExport from \\'foo\\';\\ne…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default as variable} from 'foo';
"
`;

exports[`invalid(7): 'import type { foo } from \\'foo\\';\\nex…' > Code 1`] = `
"
  1 | import type { foo } from 'foo';
  2 | export type { foo };
  3 | export type { bar } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(7): 'import type { foo } from \\'foo\\';\\nex…' > Error 1/1 1`] = `
"
  1 | import type { foo } from 'foo';
> 2 | export type { foo };
    |               ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export type { bar } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(7): 'import type { foo } from \\'foo\\';\\nex…' > Output 1`] = `
"
  1 |
  2 |
  3 | export type { bar, foo } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(8): 'import defaultExport from \\'foo\\';\\nd…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | defaultExport.bar = 1;
  3 | export {defaultExport as named};
  4 | export {defaultExport as default};
  5 | export const variable = defaultExport;
"
`;

exports[`invalid(8): 'import defaultExport from \\'foo\\';\\nd…' > Error 1/3 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | defaultExport.bar = 1;
> 3 | export {defaultExport as named};
    |         ^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
  4 | export {defaultExport as default};
  5 | export const variable = defaultExport;
"
`;

exports[`invalid(8): 'import defaultExport from \\'foo\\';\\nd…' > Error 2/3 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | defaultExport.bar = 1;
  3 | export {defaultExport as named};
> 4 | export {defaultExport as default};
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
  5 | export const variable = defaultExport;
"
`;

exports[`invalid(8): 'import defaultExport from \\'foo\\';\\nd…' > Error 3/3 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | defaultExport.bar = 1;
  3 | export {defaultExport as named};
  4 | export {defaultExport as default};
> 5 | export const variable = defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`variable\`.
"
`;

exports[`invalid(8): 'import defaultExport from \\'foo\\';\\nd…' > Output 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | defaultExport.bar = 1;
  3 |
  4 |
  5 |
  6 | export {default as named, default, default as variable} from 'foo';
"
`;

exports[`invalid(8): 'import type { foo } from \\'foo\\';\\nex…' > Code 1`] = `
"
  1 | import type { foo } from 'foo';
  2 | export type { foo };
  3 | export { baz } from "foo";
  4 | export type { bar } from "foo";
"
`;

exports[`invalid(8): 'import type { foo } from \\'foo\\';\\nex…' > Error 1/1 1`] = `
"
  1 | import type { foo } from 'foo';
> 2 | export type { foo };
    |               ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export { baz } from "foo";
  4 | export type { bar } from "foo";
"
`;

exports[`invalid(8): 'import type { foo } from \\'foo\\';\\nex…' > Output 1`] = `
"
  1 |
  2 |
  3 | export { baz } from "foo";
  4 | export type { bar, foo } from "foo";
"
`;

exports[`invalid(9): 'import {named} from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | export default named;
"
`;

exports[`invalid(9): 'import {named} from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export default named;
    | ^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(9): 'import {named} from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export {named as default} from 'foo';
"
`;

exports[`invalid(9): 'import type { foo } from \\'foo\\';\\nex…' > Code 1`] = `
"
  1 | import type { foo } from 'foo';
  2 | export type { foo };
  3 | export { type bar } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(9): 'import type { foo } from \\'foo\\';\\nex…' > Error 1/1 1`] = `
"
  1 | import type { foo } from 'foo';
> 2 | export type { foo };
    |               ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export { type bar } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(9): 'import type { foo } from \\'foo\\';\\nex…' > Output 1`] = `
"
  1 |
  2 |
  3 | export { type bar, type foo } from "foo";
  4 | export { baz } from "foo";
"
`;

exports[`invalid(10): 'import {named} from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | export {named as default};
"
`;

exports[`invalid(10): 'import {named} from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export {named as default};
    |         ^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(10): 'import {named} from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export {named as default} from 'foo';
"
`;

exports[`invalid(10): 'import type { foo } from \\'foo\\';\\nex…' > Code 1`] = `
"
  1 | import type { foo } from 'foo';
  2 | export type { foo };
  3 | export { baz } from "foo";
  4 | export { type bar } from "foo";
"
`;

exports[`invalid(10): 'import type { foo } from \\'foo\\';\\nex…' > Error 1/1 1`] = `
"
  1 | import type { foo } from 'foo';
> 2 | export type { foo };
    |               ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export { baz } from "foo";
  4 | export { type bar } from "foo";
"
`;

exports[`invalid(10): 'import type { foo } from \\'foo\\';\\nex…' > Output 1`] = `
"
  1 |
  2 |
  3 | export { baz, type foo } from "foo";
  4 | export { type bar } from "foo";
"
`;

exports[`invalid(11): 'import { type foo } from \\'foo\\';\\nex…' > Code 1`] = `
"
  1 | import { type foo } from 'foo';
  2 | export type { foo };
"
`;

exports[`invalid(11): 'import { type foo } from \\'foo\\';\\nex…' > Error 1/1 1`] = `
"
  1 | import { type foo } from 'foo';
> 2 | export type { foo };
    |               ^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(11): 'import { type foo } from \\'foo\\';\\nex…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type foo} from 'foo';
"
`;

exports[`invalid(11): 'import {named} from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | export {named as named};
"
`;

exports[`invalid(11): 'import {named} from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export {named as named};
    |         ^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(11): 'import {named} from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export {named} from 'foo';
"
`;

exports[`invalid(12): 'import { foo } from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import { foo } from 'foo';
  2 | export type { foo };
"
`;

exports[`invalid(12): 'import { foo } from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import { foo } from 'foo';
> 2 | export type { foo };
    |               ^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(12): 'import { foo } from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type foo} from 'foo';
"
`;

exports[`invalid(12): 'import {named} from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | export {named as renamed};
"
`;

exports[`invalid(12): 'import {named} from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export {named as renamed};
    |         ^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`renamed\`.
"
`;

exports[`invalid(12): 'import {named} from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export {named as renamed} from 'foo';
"
`;

exports[`invalid(13): 'import {named} from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | export const variable = named;
"
`;

exports[`invalid(13): 'import {named} from \\'foo\\';\\nexport …' > Error 1/1 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export const variable = named;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`variable\`.
"
`;

exports[`invalid(13): 'import {named} from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export {named as variable} from 'foo';
"
`;

exports[`invalid(13): 'import type { foo } from \\'foo\\';\\nex…' > Code 1`] = `
"
  1 | import type { foo } from 'foo';
  2 | export { type foo };
"
`;

exports[`invalid(13): 'import type { foo } from \\'foo\\';\\nex…' > Error 1/1 1`] = `
"
  1 | import type { foo } from 'foo';
> 2 | export { type foo };
    |          ^^^^^^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(13): 'import type { foo } from \\'foo\\';\\nex…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type foo} from 'foo';
"
`;

exports[`invalid(14): 'import {named} from \\'foo\\';\\nnamed.b…' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | named.bar = 1;
  3 | export {named as named};
  4 | export {named as default};
  5 | export const variable = named;
"
`;

exports[`invalid(14): 'import {named} from \\'foo\\';\\nnamed.b…' > Error 1/3 1`] = `
"
  1 | import {named} from 'foo';
  2 | named.bar = 1;
> 3 | export {named as named};
    |         ^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
  4 | export {named as default};
  5 | export const variable = named;
"
`;

exports[`invalid(14): 'import {named} from \\'foo\\';\\nnamed.b…' > Error 2/3 1`] = `
"
  1 | import {named} from 'foo';
  2 | named.bar = 1;
  3 | export {named as named};
> 4 | export {named as default};
    |         ^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
  5 | export const variable = named;
"
`;

exports[`invalid(14): 'import {named} from \\'foo\\';\\nnamed.b…' > Error 3/3 1`] = `
"
  1 | import {named} from 'foo';
  2 | named.bar = 1;
  3 | export {named as named};
  4 | export {named as default};
> 5 | export const variable = named;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`variable\`.
"
`;

exports[`invalid(14): 'import {named} from \\'foo\\';\\nnamed.b…' > Output 1`] = `
"
  1 | import {named} from 'foo';
  2 | named.bar = 1;
  3 |
  4 |
  5 |
  6 | export {named, named as default, named as variable} from 'foo';
"
`;

exports[`invalid(14): 'import type foo from "foo";\\nexport d…' > Code 1`] = `
"
  1 | import type foo from "foo";
  2 | export default foo
"
`;

exports[`invalid(14): 'import type foo from "foo";\\nexport d…' > Error 1/1 1`] = `
"
  1 | import type foo from "foo";
> 2 | export default foo
    | ^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(14): 'import type foo from "foo";\\nexport d…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type default} from "foo";
"
`;

exports[`invalid(15): 'import * as namespace from \\'foo\\';\\n…' > Code 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | export {namespace as namespace};
"
`;

exports[`invalid(15): 'import * as namespace from \\'foo\\';\\n…' > Error 1/1 1`] = `
"
  1 | import * as namespace from 'foo';
> 2 | export {namespace as namespace};
    |         ^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`namespace\`.
"
`;

exports[`invalid(15): 'import * as namespace from \\'foo\\';\\n…' > Output 1`] = `
"
  1 |
  2 |
  3 | export * as namespace from 'foo';
"
`;

exports[`invalid(15): 'import {type foo} from \\'foo\\';\\nexpo…' > Code 1`] = `
"
  1 | import {type foo} from 'foo';
  2 | export {type foo as bar};
"
`;

exports[`invalid(15): 'import {type foo} from \\'foo\\';\\nexpo…' > Error 1/1 1`] = `
"
  1 | import {type foo} from 'foo';
> 2 | export {type foo as bar};
    |         ^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`bar\`.
"
`;

exports[`invalid(15): 'import {type foo} from \\'foo\\';\\nexpo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type foo as bar} from 'foo';
"
`;

exports[`invalid(16): 'import * as namespace from \\'foo\\';\\n…' > Code 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | export {namespace as renamed};
"
`;

exports[`invalid(16): 'import * as namespace from \\'foo\\';\\n…' > Error 1/1 1`] = `
"
  1 | import * as namespace from 'foo';
> 2 | export {namespace as renamed};
    |         ^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`renamed\`.
"
`;

exports[`invalid(16): 'import * as namespace from \\'foo\\';\\n…' > Output 1`] = `
"
  1 |
  2 |
  3 | export * as renamed from 'foo';
"
`;

exports[`invalid(16): 'import {type foo} from \\'foo\\';\\nexpo…' > Code 1`] = `
"
  1 | import {type foo} from 'foo';
  2 | export {type foo as bar};
  3 | export {type bar} from 'foo';
"
`;

exports[`invalid(16): 'import {type foo} from \\'foo\\';\\nexpo…' > Error 1/1 1`] = `
"
  1 | import {type foo} from 'foo';
> 2 | export {type foo as bar};
    |         ^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`bar\`.
  3 | export {type bar} from 'foo';
"
`;

exports[`invalid(16): 'import {type foo} from \\'foo\\';\\nexpo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type bar, type foo as bar} from 'foo';
"
`;

exports[`invalid(17): 'import * as namespace from \\'foo\\';\\n…' > Code 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | export const variable = namespace;
"
`;

exports[`invalid(17): 'import * as namespace from \\'foo\\';\\n…' > Error 1/1 1`] = `
"
  1 | import * as namespace from 'foo';
> 2 | export const variable = namespace;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`variable\`.
"
`;

exports[`invalid(17): 'import * as namespace from \\'foo\\';\\n…' > Output 1`] = `
"
  1 |
  2 |
  3 | export * as variable from 'foo';
"
`;

exports[`invalid(17): 'import {type foo as bar} from \\'foo\\'…' > Code 1`] = `
"
  1 | import {type foo as bar} from 'foo';
  2 | export {type bar as baz};
"
`;

exports[`invalid(17): 'import {type foo as bar} from \\'foo\\'…' > Error 1/1 1`] = `
"
  1 | import {type foo as bar} from 'foo';
> 2 | export {type bar as baz};
    |         ^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`baz\`.
"
`;

exports[`invalid(17): 'import {type foo as bar} from \\'foo\\'…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type foo as baz} from 'foo';
"
`;

exports[`invalid(18): 'import * as namespace from \\'foo\\';\\n…' > Code 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | namespace.bar = 1;
  3 | export {namespace as named};
  4 | export {namespace as default};
  5 | export const variable = namespace;
"
`;

exports[`invalid(18): 'import * as namespace from \\'foo\\';\\n…' > Error 1/2 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | namespace.bar = 1;
> 3 | export {namespace as named};
    |         ^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`named\`.
  4 | export {namespace as default};
  5 | export const variable = namespace;
"
`;

exports[`invalid(18): 'import * as namespace from \\'foo\\';\\n…' > Error 2/2 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | namespace.bar = 1;
  3 | export {namespace as named};
  4 | export {namespace as default};
> 5 | export const variable = namespace;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`variable\`.
"
`;

exports[`invalid(18): 'import * as namespace from \\'foo\\';\\n…' > Output 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | namespace.bar = 1;
  3 |
  4 | export {namespace as default};
  5 |
  6 | export * as named from 'foo';
  7 | export * as variable from 'foo';
"
`;

exports[`invalid(18): 'import {type foo as foo} from \\'foo\\'…' > Code 1`] = `
"
  1 | import {type foo as foo} from 'foo';
  2 | export {type foo as bar};
"
`;

exports[`invalid(18): 'import {type foo as foo} from \\'foo\\'…' > Error 1/1 1`] = `
"
  1 | import {type foo as foo} from 'foo';
> 2 | export {type foo as bar};
    |         ^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`bar\`.
"
`;

exports[`invalid(18): 'import {type foo as foo} from \\'foo\\'…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type foo as bar} from 'foo';
"
`;

exports[`invalid(19): 'import {named1, named2} from \\'foo\\';…' > Code 1`] = `
"
  1 | import {named1, named2} from 'foo';
  2 | export {named1};
"
`;

exports[`invalid(19): 'import {named1, named2} from \\'foo\\';…' > Error 1/1 1`] = `
"
  1 | import {named1, named2} from 'foo';
> 2 | export {named1};
    |         ^^^^^^ Use \`export…from\` to re-export \`named1\`.
"
`;

exports[`invalid(19): 'import {named1, named2} from \\'foo\\';…' > Output 1`] = `
"
  1 | import { named2} from 'foo';
  2 |
  3 | export {named1} from 'foo';
"
`;

exports[`invalid(19): 'import {type foo as bar} from \\'foo\\'…' > Code 1`] = `
"
  1 | import {type foo as bar} from 'foo';
  2 | export {type bar as bar};
"
`;

exports[`invalid(19): 'import {type foo as bar} from \\'foo\\'…' > Error 1/1 1`] = `
"
  1 | import {type foo as bar} from 'foo';
> 2 | export {type bar as bar};
    |         ^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`bar\`.
"
`;

exports[`invalid(19): 'import {type foo as bar} from \\'foo\\'…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type foo as bar} from 'foo';
"
`;

exports[`invalid(20): 'import {type foo as bar} from \\'foo\\'…' > Code 1`] = `
"
  1 | import {type foo as bar} from 'foo';
  2 | export {type bar as foo};
"
`;

exports[`invalid(20): 'import {type foo as bar} from \\'foo\\'…' > Error 1/1 1`] = `
"
  1 | import {type foo as bar} from 'foo';
> 2 | export {type bar as foo};
    |         ^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(20): 'import {type foo as bar} from \\'foo\\'…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {type foo} from 'foo';
"
`;

exports[`invalid(20): 'import defaultExport, {named} from \\'…' > Code 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
  2 | export {defaultExport};
"
`;

exports[`invalid(20): 'import defaultExport, {named} from \\'…' > Error 1/1 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
> 2 | export {defaultExport};
    |         ^^^^^^^^^^^^^ Use \`export…from\` to re-export \`defaultExport\`.
"
`;

exports[`invalid(20): 'import defaultExport, {named} from \\'…' > Output 1`] = `
"
  1 | import  {named} from 'foo';
  2 |
  3 | export {default as defaultExport} from 'foo';
"
`;

exports[`invalid(21): 'import defaultExport, {named} from \\'…' > Code 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
  2 | export {named};
"
`;

exports[`invalid(21): 'import defaultExport, {named} from \\'…' > Error 1/1 1`] = `
"
  1 | import defaultExport, {named} from 'foo';
> 2 | export {named};
    |         ^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(21): 'import defaultExport, {named} from \\'…' > Output 1`] = `
"
  1 | import defaultExport from 'foo';
  2 |
  3 | export {named} from 'foo';
"
`;

exports[`invalid(21): 'import json from \\'./foo.json\\' asser…' > Code 1`] = `
"
  1 | import json from './foo.json' assert { type: 'json' };
  2 | export default json;
"
`;

exports[`invalid(21): 'import json from \\'./foo.json\\' asser…' > Error 1/1 1`] = `
"
  1 | import json from './foo.json' assert { type: 'json' };
> 2 | export default json;
    | ^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(21): 'import json from \\'./foo.json\\' asser…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default} from './foo.json' assert { type: 'json' };
"
`;

exports[`invalid(22): 'import * as json from \\'./foo.json\\' …' > Code 1`] = `
"
  1 | import * as json from './foo.json' assert { type: 'json' };
  2 | export {json};
"
`;

exports[`invalid(22): 'import * as json from \\'./foo.json\\' …' > Error 1/1 1`] = `
"
  1 | import * as json from './foo.json' assert { type: 'json' };
> 2 | export {json};
    |         ^^^^ Use \`export…from\` to re-export \`json\`.
"
`;

exports[`invalid(22): 'import * as json from \\'./foo.json\\' …' > Output 1`] = `
"
  1 |
  2 |
  3 | export * as json from './foo.json' assert { type: 'json' };
"
`;

exports[`invalid(22): 'import defaultExport, * as namespace …' > Code 1`] = `
"
  1 | import defaultExport, * as namespace from 'foo';
  2 | export {defaultExport};
"
`;

exports[`invalid(22): 'import defaultExport, * as namespace …' > Error 1/1 1`] = `
"
  1 | import defaultExport, * as namespace from 'foo';
> 2 | export {defaultExport};
    |         ^^^^^^^^^^^^^ Use \`export…from\` to re-export \`defaultExport\`.
"
`;

exports[`invalid(22): 'import defaultExport, * as namespace …' > Output 1`] = `
"
  1 | import  * as namespace from 'foo';
  2 |
  3 | export {default as defaultExport} from 'foo';
"
`;

exports[`invalid(23): 'import * as foo from \\'foo\\';\\nexport…' > Code 1`] = `
"
  1 | import * as foo from 'foo';
  2 | export {foo};
  3 | export * as bar from 'foo';
"
`;

exports[`invalid(23): 'import * as foo from \\'foo\\';\\nexport…' > Error 1/1 1`] = `
"
  1 | import * as foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export * as bar from 'foo';
"
`;

exports[`invalid(23): 'import * as foo from \\'foo\\';\\nexport…' > Output 1`] = `
"
  1 |
  2 |
  3 | export * as bar from 'foo';
  4 | export * as foo from 'foo';
"
`;

exports[`invalid(23): 'import {foo} from \\'./foo.json\\' asse…' > Code 1`] = `
"
  1 | import {foo} from './foo.json' assert { type: 'unknown' };
  2 | export {foo};
  3 | export {bar} from './foo.json';
"
`;

exports[`invalid(23): 'import {foo} from \\'./foo.json\\' asse…' > Error 1/1 1`] = `
"
  1 | import {foo} from './foo.json' assert { type: 'unknown' };
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {bar} from './foo.json';
"
`;

exports[`invalid(23): 'import {foo} from \\'./foo.json\\' asse…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {bar, foo} from './foo.json';
"
`;

exports[`invalid(24): 'import * as foo from \\'foo\\';\\nexport…' > Code 1`] = `
"
  1 | import * as foo from 'foo';
  2 | export {foo};
  3 | export {bar} from 'foo';
"
`;

exports[`invalid(24): 'import * as foo from \\'foo\\';\\nexport…' > Error 1/1 1`] = `
"
  1 | import * as foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {bar} from 'foo';
"
`;

exports[`invalid(24): 'import * as foo from \\'foo\\';\\nexport…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {bar} from 'foo';
  4 | export * as foo from 'foo';
"
`;

exports[`invalid(24): 'import {foo} from \\'./foo.json\\';\\nex…' > Code 1`] = `
"
  1 | import {foo} from './foo.json';
  2 | export {foo};
  3 | export {bar} from './foo.json' assert { type: 'unknown' };
"
`;

exports[`invalid(24): 'import {foo} from \\'./foo.json\\';\\nex…' > Error 1/1 1`] = `
"
  1 | import {foo} from './foo.json';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {bar} from './foo.json' assert { type: 'unknown' };
"
`;

exports[`invalid(24): 'import {foo} from \\'./foo.json\\';\\nex…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {bar, foo} from './foo.json' assert { type: 'unknown' };
"
`;

exports[`invalid(25): 'import * as foo from \\'foo\\';\\nexport…' > Code 1`] = `
"
  1 | import * as foo from 'foo';
  2 | export {foo};
  3 | export {} from 'foo';
"
`;

exports[`invalid(25): 'import * as foo from \\'foo\\';\\nexport…' > Error 1/1 1`] = `
"
  1 | import * as foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {} from 'foo';
"
`;

exports[`invalid(25): 'import * as foo from \\'foo\\';\\nexport…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {} from 'foo';
  4 | export * as foo from 'foo';
"
`;

exports[`invalid(26): 'import * as foo from \\'foo\\';\\nexport…' > Code 1`] = `
"
  1 | import * as foo from 'foo';
  2 | export {foo};
  3 | export * from 'foo';
"
`;

exports[`invalid(26): 'import * as foo from \\'foo\\';\\nexport…' > Error 1/1 1`] = `
"
  1 | import * as foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export * from 'foo';
"
`;

exports[`invalid(26): 'import * as foo from \\'foo\\';\\nexport…' > Output 1`] = `
"
  1 |
  2 |
  3 | export * from 'foo';
  4 | export * as foo from 'foo';
"
`;

exports[`invalid(27): 'import foo from \\'foo\\';\\nexport {foo…' > Code 1`] = `
"
  1 | import foo from 'foo';
  2 | export {foo};
  3 | export * as bar from 'foo';
"
`;

exports[`invalid(27): 'import foo from \\'foo\\';\\nexport {foo…' > Error 1/1 1`] = `
"
  1 | import foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export * as bar from 'foo';
"
`;

exports[`invalid(27): 'import foo from \\'foo\\';\\nexport {foo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export * as bar from 'foo';
  4 | export {default as foo} from 'foo';
"
`;

exports[`invalid(28): 'import foo from \\'foo\\';\\nexport {foo…' > Code 1`] = `
"
  1 | import foo from 'foo';
  2 | export {foo};
  3 | export {bar} from 'foo';
"
`;

exports[`invalid(28): 'import foo from \\'foo\\';\\nexport {foo…' > Error 1/1 1`] = `
"
  1 | import foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {bar} from 'foo';
"
`;

exports[`invalid(28): 'import foo from \\'foo\\';\\nexport {foo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {bar, default as foo} from 'foo';
"
`;

exports[`invalid(29): 'import foo from \\'foo\\';\\nexport {foo…' > Code 1`] = `
"
  1 | import foo from 'foo';
  2 | export {foo};
  3 | export {bar,} from 'foo';
"
`;

exports[`invalid(29): 'import foo from \\'foo\\';\\nexport {foo…' > Error 1/1 1`] = `
"
  1 | import foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {bar,} from 'foo';
"
`;

exports[`invalid(29): 'import foo from \\'foo\\';\\nexport {foo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {bar, default as foo,} from 'foo';
"
`;

exports[`invalid(30): 'import foo from \\'foo\\';\\nexport {foo…' > Code 1`] = `
"
  1 | import foo from 'foo';
  2 | export {foo};
  3 | export {} from 'foo';
"
`;

exports[`invalid(30): 'import foo from \\'foo\\';\\nexport {foo…' > Error 1/1 1`] = `
"
  1 | import foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export {} from 'foo';
"
`;

exports[`invalid(30): 'import foo from \\'foo\\';\\nexport {foo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {default as foo} from 'foo';
"
`;

exports[`invalid(31): 'import foo from \\'foo\\';\\nexport {foo…' > Code 1`] = `
"
  1 | import foo from 'foo';
  2 | export {foo};
  3 | export * from 'foo';
"
`;

exports[`invalid(31): 'import foo from \\'foo\\';\\nexport {foo…' > Error 1/1 1`] = `
"
  1 | import foo from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
  3 | export * from 'foo';
"
`;

exports[`invalid(31): 'import foo from \\'foo\\';\\nexport {foo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export * from 'foo';
  4 | export {default as foo} from 'foo';
"
`;

exports[`invalid(32): 'import {named1, named2} from \\'foo\\';…' > Code 1`] = `
"
  1 | import {named1, named2} from 'foo';
  2 | export {named1, named2};
"
`;

exports[`invalid(32): 'import {named1, named2} from \\'foo\\';…' > Error 1/2 1`] = `
"
  1 | import {named1, named2} from 'foo';
> 2 | export {named1, named2};
    |         ^^^^^^ Use \`export…from\` to re-export \`named1\`.
"
`;

exports[`invalid(32): 'import {named1, named2} from \\'foo\\';…' > Error 2/2 1`] = `
"
  1 | import {named1, named2} from 'foo';
> 2 | export {named1, named2};
    |                 ^^^^^^ Use \`export…from\` to re-export \`named2\`.
"
`;

exports[`invalid(32): 'import {named1, named2} from \\'foo\\';…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {named1, named2} from 'foo';
"
`;

exports[`invalid(33): 'import {named} from \\'foo\\';\\nexport …' > Code 1`] = `
"
  1 | import {named} from 'foo';
  2 | export {named as default, named};
"
`;

exports[`invalid(33): 'import {named} from \\'foo\\';\\nexport …' > Error 1/2 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export {named as default, named};
    |         ^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(33): 'import {named} from \\'foo\\';\\nexport …' > Error 2/2 1`] = `
"
  1 | import {named} from 'foo';
> 2 | export {named as default, named};
    |                           ^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(33): 'import {named} from \\'foo\\';\\nexport …' > Output 1`] = `
"
  1 |
  2 |
  3 | export {named as default, named} from 'foo';
"
`;

exports[`invalid(34): 'import {named, named as renamed} from…' > Code 1`] = `
"
  1 | import {named, named as renamed} from 'foo';
  2 | export {named, renamed};
"
`;

exports[`invalid(34): 'import {named, named as renamed} from…' > Error 1/2 1`] = `
"
  1 | import {named, named as renamed} from 'foo';
> 2 | export {named, renamed};
    |         ^^^^^ Use \`export…from\` to re-export \`named\`.
"
`;

exports[`invalid(34): 'import {named, named as renamed} from…' > Error 2/2 1`] = `
"
  1 | import {named, named as renamed} from 'foo';
> 2 | export {named, renamed};
    |                ^^^^^^^ Use \`export…from\` to re-export \`renamed\`.
"
`;

exports[`invalid(34): 'import {named, named as renamed} from…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {named, named as renamed} from 'foo';
"
`;

exports[`invalid(35): 'import defaultExport, {named1, named2…' > Code 1`] = `
"
  1 | import defaultExport, {named1, named2} from 'foo';
  2 | export {named1 as default};
  3 | export {named2};
  4 | export {defaultExport};
"
`;

exports[`invalid(35): 'import defaultExport, {named1, named2…' > Error 1/3 1`] = `
"
  1 | import defaultExport, {named1, named2} from 'foo';
> 2 | export {named1 as default};
    |         ^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
  3 | export {named2};
  4 | export {defaultExport};
"
`;

exports[`invalid(35): 'import defaultExport, {named1, named2…' > Error 2/3 1`] = `
"
  1 | import defaultExport, {named1, named2} from 'foo';
  2 | export {named1 as default};
> 3 | export {named2};
    |         ^^^^^^ Use \`export…from\` to re-export \`named2\`.
  4 | export {defaultExport};
"
`;

exports[`invalid(35): 'import defaultExport, {named1, named2…' > Error 3/3 1`] = `
"
  1 | import defaultExport, {named1, named2} from 'foo';
  2 | export {named1 as default};
  3 | export {named2};
> 4 | export {defaultExport};
    |         ^^^^^^^^^^^^^ Use \`export…from\` to re-export \`defaultExport\`.
"
`;

exports[`invalid(35): 'import defaultExport, {named1, named2…' > Output 1`] = `
"
  1 |
  2 |
  3 |
  4 |
  5 | export {default as defaultExport, named1 as default, named2} from 'foo';
"
`;

exports[`invalid(36): 'import * as foo from \\'foo\\';\\nimport…' > Code 1`] = `
"
  1 | import * as foo from 'foo';
  2 | import * as bar from 'foo';
  3 | export {foo, bar};
"
`;

exports[`invalid(36): 'import * as foo from \\'foo\\';\\nimport…' > Error 1/2 1`] = `
"
  1 | import * as foo from 'foo';
  2 | import * as bar from 'foo';
> 3 | export {foo, bar};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(36): 'import * as foo from \\'foo\\';\\nimport…' > Error 2/2 1`] = `
"
  1 | import * as foo from 'foo';
  2 | import * as bar from 'foo';
> 3 | export {foo, bar};
    |              ^^^ Use \`export…from\` to re-export \`bar\`.
"
`;

exports[`invalid(36): 'import * as foo from \\'foo\\';\\nimport…' > Output 1`] = `
"
  1 |
  2 |
  3 |
  4 | export * as foo from 'foo';
  5 | export * as bar from 'foo';
"
`;

exports[`invalid(37): 'import * as foo from \\'foo\\';\\nexport…' > Code 1`] = `
"
  1 | import * as foo from 'foo';
  2 | export {foo, foo as bar};
"
`;

exports[`invalid(37): 'import * as foo from \\'foo\\';\\nexport…' > Error 1/2 1`] = `
"
  1 | import * as foo from 'foo';
> 2 | export {foo, foo as bar};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(37): 'import * as foo from \\'foo\\';\\nexport…' > Error 2/2 1`] = `
"
  1 | import * as foo from 'foo';
> 2 | export {foo, foo as bar};
    |              ^^^^^^^^^^ Use \`export…from\` to re-export \`bar\`.
"
`;

exports[`invalid(37): 'import * as foo from \\'foo\\';\\nexport…' > Output 1`] = `
"
  1 |
  2 |
  3 | export * as foo from 'foo';
  4 | export * as bar from 'foo';
"
`;

exports[`invalid(38): 'import defaultExport from \\'foo\\';\\ne…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export * from 'foo';
  3 | export default defaultExport;
"
`;

exports[`invalid(38): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/1 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export * from 'foo';
> 3 | export default defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(38): 'import defaultExport from \\'foo\\';\\ne…' > Output 1`] = `
"
  1 |
  2 | export * from 'foo';
  3 |
  4 | export {default} from 'foo';
"
`;

exports[`invalid(39): 'import defaultExport from \\'foo\\';\\ne…' > Code 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export {named} from 'foo';
  3 | export * from 'foo';
  4 | export default defaultExport;
"
`;

exports[`invalid(39): 'import defaultExport from \\'foo\\';\\ne…' > Error 1/1 1`] = `
"
  1 | import defaultExport from 'foo';
  2 | export {named} from 'foo';
  3 | export * from 'foo';
> 4 | export default defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(39): 'import defaultExport from \\'foo\\';\\ne…' > Output 1`] = `
"
  1 |
  2 | export {named, default} from 'foo';
  3 | export * from 'foo';
  4 |
"
`;

exports[`invalid(40): 'import defaultExport from \\'./foo.js\\…' > Code 1`] = `
"
  1 | import defaultExport from './foo.js';
  2 | export {named} from './foo.js';
  3 | export default defaultExport;
"
`;

exports[`invalid(40): 'import defaultExport from \\'./foo.js\\…' > Error 1/1 1`] = `
"
  1 | import defaultExport from './foo.js';
  2 | export {named} from './foo.js';
> 3 | export default defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(40): 'import defaultExport from \\'./foo.js\\…' > Output 1`] = `
"
  1 |
  2 | export {named, default} from './foo.js';
  3 |
"
`;

exports[`invalid(41): 'import defaultExport from \\'./foo.js\\…' > Code 1`] = `
"
  1 | import defaultExport from './foo.js';
  2 | export {named} from './foo.js?query';
  3 | export default defaultExport;
"
`;

exports[`invalid(41): 'import defaultExport from \\'./foo.js\\…' > Error 1/1 1`] = `
"
  1 | import defaultExport from './foo.js';
  2 | export {named} from './foo.js?query';
> 3 | export default defaultExport;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(41): 'import defaultExport from \\'./foo.js\\…' > Output 1`] = `
"
  1 |
  2 | export {named} from './foo.js?query';
  3 |
  4 | export {default} from './foo.js';
"
`;

exports[`invalid(42): 'import * as namespace from \\'foo\\';\\n…' > Code 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | export default namespace;
  3 | export {namespace};
"
`;

exports[`invalid(42): 'import * as namespace from \\'foo\\';\\n…' > Error 1/1 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | export default namespace;
> 3 | export {namespace};
    |         ^^^^^^^^^ Use \`export…from\` to re-export \`namespace\`.
"
`;

exports[`invalid(42): 'import * as namespace from \\'foo\\';\\n…' > Output 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | export default namespace;
  3 |
  4 | export * as namespace from 'foo';
"
`;

exports[`invalid(43): 'import * as namespace from \\'foo\\';\\n…' > Code 1`] = `
"
  1 | import * as namespace from 'foo';
  2 | export {namespace};
  3 | export default namespace;
"
`;

exports[`invalid(43): 'import * as namespace from \\'foo\\';\\n…' > Error 1/1 1`] = `
"
  1 | import * as namespace from 'foo';
> 2 | export {namespace};
    |         ^^^^^^^^^ Use \`export…from\` to re-export \`namespace\`.
  3 | export default namespace;
"
`;

exports[`invalid(43): 'import * as namespace from \\'foo\\';\\n…' > Output 1`] = `
"
  1 | import * as namespace from 'foo';
  2 |
  3 | export default namespace;
  4 | export * as namespace from 'foo';
"
`;

exports[`invalid(44): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Code 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
  2 | export default foo;
"
`;

exports[`invalid(44): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Error 1/1 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
> 2 | export default foo;
    | ^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(44): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {'foo' as default} from 'foo';
"
`;

exports[`invalid(45): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Code 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
  2 | export {foo};
"
`;

exports[`invalid(45): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Error 1/1 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(45): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {'foo' as foo} from 'foo';
"
`;

exports[`invalid(46): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Code 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
  2 | export const bar = foo;
"
`;

exports[`invalid(46): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Error 1/1 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
> 2 | export const bar = foo;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`bar\`.
"
`;

exports[`invalid(46): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {'foo' as bar} from 'foo';
"
`;

exports[`invalid(47): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Code 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
  2 | export {foo as 'foo'};
"
`;

exports[`invalid(47): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Error 1/1 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
> 2 | export {foo as 'foo'};
    |         ^^^^^^^^^^^^ Use \`export…from\` to re-export \`'foo'\`.
"
`;

exports[`invalid(47): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {'foo'} from 'foo';
"
`;

exports[`invalid(48): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Code 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
  2 | export {foo as "foo"};
"
`;

exports[`invalid(48): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Error 1/1 1`] = `
"
  1 | import {'foo' as foo} from 'foo';
> 2 | export {foo as "foo"};
    |         ^^^^^^^^^^^^ Use \`export…from\` to re-export \`"foo"\`.
"
`;

exports[`invalid(48): 'import {\\'foo\\' as foo} from \\'foo\\';…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {"foo"} from 'foo';
"
`;

exports[`invalid(49): 'import {\\'fo\\u{20}o\\' as foo} from \\'…' > Code 1`] = `
"
  1 | import {'fo\\u{20}o' as foo} from 'foo';
  2 | export {foo as "fo o"};
"
`;

exports[`invalid(49): 'import {\\'fo\\u{20}o\\' as foo} from \\'…' > Error 1/1 1`] = `
"
  1 | import {'fo\\u{20}o' as foo} from 'foo';
> 2 | export {foo as "fo o"};
    |         ^^^^^^^^^^^^^ Use \`export…from\` to re-export \`"fo o"\`.
"
`;

exports[`invalid(49): 'import {\\'fo\\u{20}o\\' as foo} from \\'…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {"fo o"} from 'foo';
"
`;

exports[`invalid(50): 'import {\\'fo\\no\\' as foo} from \\'foo\\…' > Code 1`] = `
"
  1 | import {'fo\\no' as foo} from 'foo';
  2 | export {foo as "fo\\u000ao"};
"
`;

exports[`invalid(50): 'import {\\'fo\\no\\' as foo} from \\'foo\\…' > Error 1/1 1`] = `
"
  1 | import {'fo\\no' as foo} from 'foo';
> 2 | export {foo as "fo\\u000ao"};
    |         ^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`"fo\\u000ao"\`.
"
`;

exports[`invalid(50): 'import {\\'fo\\no\\' as foo} from \\'foo\\…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {"fo\\u000ao"} from 'foo';
"
`;

exports[`invalid(51): 'import {\\'default\\' as foo} from \\'fo…' > Code 1`] = `
"
  1 | import {'default' as foo} from 'foo';
  2 | export {foo};
"
`;

exports[`invalid(51): 'import {\\'default\\' as foo} from \\'fo…' > Error 1/1 1`] = `
"
  1 | import {'default' as foo} from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(51): 'import {\\'default\\' as foo} from \\'fo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {'default' as foo} from 'foo';
"
`;

exports[`invalid(52): 'import {\\'default\\' as foo} from \\'fo…' > Code 1`] = `
"
  1 | import {'default' as foo} from 'foo';
  2 | export default foo;
"
`;

exports[`invalid(52): 'import {\\'default\\' as foo} from \\'fo…' > Error 1/1 1`] = `
"
  1 | import {'default' as foo} from 'foo';
> 2 | export default foo;
    | ^^^^^^^^^^^^^^^^^^^ Use \`export…from\` to re-export \`default\`.
"
`;

exports[`invalid(52): 'import {\\'default\\' as foo} from \\'fo…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {'default' as default} from 'foo';
"
`;

exports[`invalid(53): 'import {\\'*\\' as foo} from \\'foo\\';\\n…' > Code 1`] = `
"
  1 | import {'*' as foo} from 'foo';
  2 | export {foo};
"
`;

exports[`invalid(53): 'import {\\'*\\' as foo} from \\'foo\\';\\n…' > Error 1/1 1`] = `
"
  1 | import {'*' as foo} from 'foo';
> 2 | export {foo};
    |         ^^^ Use \`export…from\` to re-export \`foo\`.
"
`;

exports[`invalid(53): 'import {\\'*\\' as foo} from \\'foo\\';\\n…' > Output 1`] = `
"
  1 |
  2 |
  3 | export {'*' as foo} from 'foo';
"
`;
