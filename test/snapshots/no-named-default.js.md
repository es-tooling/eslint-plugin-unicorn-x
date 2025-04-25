// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = 1, bar = 2;\\nexport {foo …' > Code 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export {foo as default};
"
`;

exports[`invalid(0): 'const foo = 1, bar = 2;\\nexport {foo …' > Error 1/1 1`] = `
"
  1 | const foo = 1, bar = 2;
> 2 | export {foo as default};
    |         ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(0): 'const foo = 1, bar = 2;\\nexport {foo …' > Output 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export default foo;
  3 |
"
`;

exports[`invalid(0): 'import {default as named} from "foo";' > Code 1`] = `
"
  1 | import {default as named} from "foo";
"
`;

exports[`invalid(0): 'import {default as named} from "foo";' > Error 1/1 1`] = `
"
> 1 | import {default as named} from "foo";
    |         ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(0): 'import {default as named} from "foo";' > Output 1`] = `
"
  1 | import named from "foo";
"
`;

exports[`invalid(1): 'const foo = 1, bar = 2;\\nexport {foo …' > Code 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export {foo as default,};
"
`;

exports[`invalid(1): 'const foo = 1, bar = 2;\\nexport {foo …' > Error 1/1 1`] = `
"
  1 | const foo = 1, bar = 2;
> 2 | export {foo as default,};
    |         ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(1): 'const foo = 1, bar = 2;\\nexport {foo …' > Output 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export default foo;
  3 |
"
`;

exports[`invalid(1): 'import {default as named,} from "foo";' > Code 1`] = `
"
  1 | import {default as named,} from "foo";
"
`;

exports[`invalid(1): 'import {default as named,} from "foo";' > Error 1/1 1`] = `
"
> 1 | import {default as named,} from "foo";
    |         ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(1): 'import {default as named,} from "foo";' > Output 1`] = `
"
  1 | import named from "foo";
"
`;

exports[`invalid(2): 'const foo = 1, bar = 2;\\nexport {foo …' > Code 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export {foo as default, bar};
"
`;

exports[`invalid(2): 'const foo = 1, bar = 2;\\nexport {foo …' > Error 1/1 1`] = `
"
  1 | const foo = 1, bar = 2;
> 2 | export {foo as default, bar};
    |         ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(2): 'const foo = 1, bar = 2;\\nexport {foo …' > Output 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export default foo;
  3 | export { bar};
"
`;

exports[`invalid(2): 'import {default as named, bar} from "…' > Code 1`] = `
"
  1 | import {default as named, bar} from "foo";
"
`;

exports[`invalid(2): 'import {default as named, bar} from "…' > Error 1/1 1`] = `
"
> 1 | import {default as named, bar} from "foo";
    |         ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(2): 'import {default as named, bar} from "…' > Output 1`] = `
"
  1 | import named, { bar} from "foo";
"
`;

exports[`invalid(3): 'const foo = 1, bar = 2;\\nexport {foo …' > Code 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export {foo as default, bar,};
"
`;

exports[`invalid(3): 'const foo = 1, bar = 2;\\nexport {foo …' > Error 1/1 1`] = `
"
  1 | const foo = 1, bar = 2;
> 2 | export {foo as default, bar,};
    |         ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(3): 'const foo = 1, bar = 2;\\nexport {foo …' > Output 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export default foo;
  3 | export { bar,};
"
`;

exports[`invalid(3): 'import {default as named, bar,} from …' > Code 1`] = `
"
  1 | import {default as named, bar,} from "foo";
"
`;

exports[`invalid(3): 'import {default as named, bar,} from …' > Error 1/1 1`] = `
"
> 1 | import {default as named, bar,} from "foo";
    |         ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(3): 'import {default as named, bar,} from …' > Output 1`] = `
"
  1 | import named, { bar,} from "foo";
"
`;

exports[`invalid(4): 'const foo = 1, bar = 2;\\nexport{foo a…' > Code 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export{foo as default};
"
`;

exports[`invalid(4): 'const foo = 1, bar = 2;\\nexport{foo a…' > Error 1/1 1`] = `
"
  1 | const foo = 1, bar = 2;
> 2 | export{foo as default};
    |        ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(4): 'const foo = 1, bar = 2;\\nexport{foo a…' > Output 1`] = `
"
  1 | const foo = 1, bar = 2;
  2 | export default foo;
  3 |
"
`;

exports[`invalid(4): 'import defaultExport, {default as nam…' > Code 1`] = `
"
  1 | import defaultExport, {default as named} from "foo";
"
`;

exports[`invalid(4): 'import defaultExport, {default as nam…' > Error 1/1 1`] = `
"
> 1 | import defaultExport, {default as named} from "foo";
    |                        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(4): 'import defaultExport, {default as nam…' > Output 1`] = `
"
  1 | import named from "foo";
  2 | import defaultExport from "foo";
"
`;

exports[`invalid(5): 'export{foo as default, bar as default…' > Code 1`] = `
"
  1 | export{foo as default, bar as default};
"
`;

exports[`invalid(5): 'export{foo as default, bar as default…' > Error 1/2 1`] = `
"
> 1 | export{foo as default, bar as default};
    |        ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(5): 'export{foo as default, bar as default…' > Error 2/2 1`] = `
"
> 1 | export{foo as default, bar as default};
    |                        ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(5): 'export{foo as default, bar as default…' > Output 1`] = `
"
  1 | export default foo;
  2 | export default bar;
  3 |
"
`;

exports[`invalid(5): 'import defaultExport, {default as nam…' > Code 1`] = `
"
  1 | import defaultExport, {default as named,} from "foo";
"
`;

exports[`invalid(5): 'import defaultExport, {default as nam…' > Error 1/1 1`] = `
"
> 1 | import defaultExport, {default as named,} from "foo";
    |                        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(5): 'import defaultExport, {default as nam…' > Output 1`] = `
"
  1 | import named from "foo";
  2 | import defaultExport from "foo";
"
`;

exports[`invalid(6): 'export default foo;\\nexport {foo as d…' > Code 1`] = `
"
  1 | export default foo;
  2 | export {foo as default};
"
`;

exports[`invalid(6): 'export default foo;\\nexport {foo as d…' > Error 1/1 1`] = `
"
  1 | export default foo;
> 2 | export {foo as default};
    |         ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(6): 'export default foo;\\nexport {foo as d…' > Output 1`] = `
"
  1 | export default foo;
  2 | export default foo;
  3 |
"
`;

exports[`invalid(6): 'import defaultExport, {default as nam…' > Code 1`] = `
"
  1 | import defaultExport, {default as named, bar} from "foo";
"
`;

exports[`invalid(6): 'import defaultExport, {default as nam…' > Error 1/1 1`] = `
"
> 1 | import defaultExport, {default as named, bar} from "foo";
    |                        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(6): 'import defaultExport, {default as nam…' > Output 1`] = `
"
  1 | import named from "foo";
  2 | import defaultExport, { bar} from "foo";
"
`;

exports[`invalid(7): 'export default bar;\\nexport {foo as d…' > Code 1`] = `
"
  1 | export default bar;
  2 | export {foo as default};
"
`;

exports[`invalid(7): 'export default bar;\\nexport {foo as d…' > Error 1/1 1`] = `
"
  1 | export default bar;
> 2 | export {foo as default};
    |         ^^^^^^^^^^^^^^ Prefer using the default export over named export.
"
`;

exports[`invalid(7): 'export default bar;\\nexport {foo as d…' > Output 1`] = `
"
  1 | export default bar;
  2 | export default foo;
  3 |
"
`;

exports[`invalid(7): 'import defaultExport, {default as nam…' > Code 1`] = `
"
  1 | import defaultExport, {default as named, bar,} from "foo";
"
`;

exports[`invalid(7): 'import defaultExport, {default as nam…' > Error 1/1 1`] = `
"
> 1 | import defaultExport, {default as named, bar,} from "foo";
    |                        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(7): 'import defaultExport, {default as nam…' > Output 1`] = `
"
  1 | import named from "foo";
  2 | import defaultExport, { bar,} from "foo";
"
`;

exports[`invalid(8): 'import{default as named}from"foo";' > Code 1`] = `
"
  1 | import{default as named}from"foo";
"
`;

exports[`invalid(8): 'import{default as named}from"foo";' > Error 1/1 1`] = `
"
> 1 | import{default as named}from"foo";
    |        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(8): 'import{default as named}from"foo";' > Output 1`] = `
"
  1 | import named from"foo";
"
`;

exports[`invalid(9): 'import {default as named}from"foo";' > Code 1`] = `
"
  1 | import {default as named}from"foo";
"
`;

exports[`invalid(9): 'import {default as named}from"foo";' > Error 1/1 1`] = `
"
> 1 | import {default as named}from"foo";
    |         ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(9): 'import {default as named}from"foo";' > Output 1`] = `
"
  1 | import named from"foo";
"
`;

exports[`invalid(10): 'import{default as named} from"foo";' > Code 1`] = `
"
  1 | import{default as named} from"foo";
"
`;

exports[`invalid(10): 'import{default as named} from"foo";' > Error 1/1 1`] = `
"
> 1 | import{default as named} from"foo";
    |        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(10): 'import{default as named} from"foo";' > Output 1`] = `
"
  1 | import named from"foo";
"
`;

exports[`invalid(11): 'import{default as named,}from"foo";' > Code 1`] = `
"
  1 | import{default as named,}from"foo";
"
`;

exports[`invalid(11): 'import{default as named,}from"foo";' > Error 1/1 1`] = `
"
> 1 | import{default as named,}from"foo";
    |        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(11): 'import{default as named,}from"foo";' > Output 1`] = `
"
  1 | import named from"foo";
"
`;

exports[`invalid(12): 'import/*comment*/{default as named}fr…' > Code 1`] = `
"
  1 | import/*comment*/{default as named}from"foo";
"
`;

exports[`invalid(12): 'import/*comment*/{default as named}fr…' > Error 1/1 1`] = `
"
> 1 | import/*comment*/{default as named}from"foo";
    |                   ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(12): 'import/*comment*/{default as named}fr…' > Output 1`] = `
"
  1 | import named/*comment*/from"foo";
"
`;

exports[`invalid(13): 'import /*comment*/{default as named}f…' > Code 1`] = `
"
  1 | import /*comment*/{default as named}from"foo";
"
`;

exports[`invalid(13): 'import /*comment*/{default as named}f…' > Error 1/1 1`] = `
"
> 1 | import /*comment*/{default as named}from"foo";
    |                    ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(13): 'import /*comment*/{default as named}f…' > Output 1`] = `
"
  1 | import named /*comment*/from"foo";
"
`;

exports[`invalid(14): 'import{default as named}/*comment*/fr…' > Code 1`] = `
"
  1 | import{default as named}/*comment*/from"foo";
"
`;

exports[`invalid(14): 'import{default as named}/*comment*/fr…' > Error 1/1 1`] = `
"
> 1 | import{default as named}/*comment*/from"foo";
    |        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(14): 'import{default as named}/*comment*/fr…' > Output 1`] = `
"
  1 | import named from"foo";
"
`;

exports[`invalid(15): 'import defaultExport,{default as name…' > Code 1`] = `
"
  1 | import defaultExport,{default as named}from "foo";
"
`;

exports[`invalid(15): 'import defaultExport,{default as name…' > Error 1/1 1`] = `
"
> 1 | import defaultExport,{default as named}from "foo";
    |                       ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(15): 'import defaultExport,{default as name…' > Output 1`] = `
"
  1 | import named from "foo";
  2 | import defaultExport from "foo";
"
`;

exports[`invalid(16): 'import defaultExport, {default as nam…' > Code 1`] = `
"
  1 | import defaultExport, {default as named} from "foo" with {type: "json"};
"
`;

exports[`invalid(16): 'import defaultExport, {default as nam…' > Error 1/1 1`] = `
"
> 1 | import defaultExport, {default as named} from "foo" with {type: "json"};
    |                        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(16): 'import defaultExport, {default as nam…' > Output 1`] = `
"
  1 | import named from "foo" with {type: "json"};
  2 | import defaultExport from "foo" with {type: "json"};
"
`;

exports[`invalid(17): 'import defaultExport, {default as nam…' > Code 1`] = `
"
  1 | import defaultExport, {default as named} from "foo" with {type: "json"}
"
`;

exports[`invalid(17): 'import defaultExport, {default as nam…' > Error 1/1 1`] = `
"
> 1 | import defaultExport, {default as named} from "foo" with {type: "json"}
    |                        ^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(17): 'import defaultExport, {default as nam…' > Output 1`] = `
"
  1 | import named from "foo" with {type: "json"}
  2 | import defaultExport from "foo" with {type: "json"}
"
`;

exports[`invalid(18): 'import {default as named1, default as…' > Code 1`] = `
"
  1 | import {default as named1, default as named2,} from "foo";
"
`;

exports[`invalid(18): 'import {default as named1, default as…' > Error 1/2 1`] = `
"
> 1 | import {default as named1, default as named2,} from "foo";
    |         ^^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(18): 'import {default as named1, default as…' > Error 2/2 1`] = `
"
> 1 | import {default as named1, default as named2,} from "foo";
    |                            ^^^^^^^^^^^^^^^^^ Prefer using the default import over named import.
"
`;

exports[`invalid(18): 'import {default as named1, default as…' > Output 1`] = `
"
  1 | import named2 from "foo";
  2 | import named1 from "foo";
"
`;
