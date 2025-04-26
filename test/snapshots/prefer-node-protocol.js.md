// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const {promises} = require("fs")' > Code 1`] = `
"
  1 | const {promises} = require("fs")
"
`;

exports[`invalid(0): 'const {promises} = require("fs")' > Error 1/1 1`] = `
"
> 1 | const {promises} = require("fs")
    |                            ^^^^ Prefer \`node:fs\` over \`fs\`.
"
`;

exports[`invalid(0): 'const {promises} = require("fs")' > Output 1`] = `
"
  1 | const {promises} = require("node:fs")
"
`;

exports[`invalid(0): 'const fs = process.getBuiltinModule("…' > Code 1`] = `
"
  1 | const fs = process.getBuiltinModule("fs")
"
`;

exports[`invalid(0): 'const fs = process.getBuiltinModule("…' > Error 1/1 1`] = `
"
> 1 | const fs = process.getBuiltinModule("fs")
    |                                     ^^^^ Prefer \`node:fs\` over \`fs\`.
"
`;

exports[`invalid(0): 'const fs = process.getBuiltinModule("…' > Output 1`] = `
"
  1 | const fs = process.getBuiltinModule("node:fs")
"
`;

exports[`invalid(0): 'import fs from "fs";' > Code 1`] = `
"
  1 | import fs from "fs";
"
`;

exports[`invalid(0): 'import fs from "fs";' > Error 1/1 1`] = `
"
> 1 | import fs from "fs";
    |                ^^^^ Prefer \`node:fs\` over \`fs\`.
"
`;

exports[`invalid(0): 'import fs from "fs";' > Output 1`] = `
"
  1 | import fs from "node:fs";
"
`;

exports[`invalid(1): 'const fs = require(\\'fs/promises\\')' > Code 1`] = `
"
  1 | const fs = require('fs/promises')
"
`;

exports[`invalid(1): 'const fs = require(\\'fs/promises\\')' > Error 1/1 1`] = `
"
> 1 | const fs = require('fs/promises')
    |                    ^^^^^^^^^^^^^ Prefer \`node:fs/promises\` over \`fs/promises\`.
"
`;

exports[`invalid(1): 'const fs = require(\\'fs/promises\\')' > Output 1`] = `
"
  1 | const fs = require('node:fs/promises')
"
`;

exports[`invalid(1): 'export {promises} from "fs";' > Code 1`] = `
"
  1 | export {promises} from "fs";
"
`;

exports[`invalid(1): 'export {promises} from "fs";' > Error 1/1 1`] = `
"
> 1 | export {promises} from "fs";
    |                        ^^^^ Prefer \`node:fs\` over \`fs\`.
"
`;

exports[`invalid(1): 'export {promises} from "fs";' > Output 1`] = `
"
  1 | export {promises} from "node:fs";
"
`;

exports[`invalid(2): 'async function foo() {\\n\\tconst fs = …' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	const fs = await import('fs');
  3 | }
"
`;

exports[`invalid(2): 'async function foo() {\\n\\tconst fs = …' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	const fs = await import('fs');
    | 	                        ^^^^ Prefer \`node:fs\` over \`fs\`.
  3 | }
"
`;

exports[`invalid(2): 'async function foo() {\\n\\tconst fs = …' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	const fs = await import('node:fs');
  3 | }
"
`;

exports[`invalid(3): 'import fs from "fs/promises";' > Code 1`] = `
"
  1 | import fs from "fs/promises";
"
`;

exports[`invalid(3): 'import fs from "fs/promises";' > Error 1/1 1`] = `
"
> 1 | import fs from "fs/promises";
    |                ^^^^^^^^^^^^^ Prefer \`node:fs/promises\` over \`fs/promises\`.
"
`;

exports[`invalid(3): 'import fs from "fs/promises";' > Output 1`] = `
"
  1 | import fs from "node:fs/promises";
"
`;

exports[`invalid(4): 'export {default} from "fs/promises";' > Code 1`] = `
"
  1 | export {default} from "fs/promises";
"
`;

exports[`invalid(4): 'export {default} from "fs/promises";' > Error 1/1 1`] = `
"
> 1 | export {default} from "fs/promises";
    |                       ^^^^^^^^^^^^^ Prefer \`node:fs/promises\` over \`fs/promises\`.
"
`;

exports[`invalid(4): 'export {default} from "fs/promises";' > Output 1`] = `
"
  1 | export {default} from "node:fs/promises";
"
`;

exports[`invalid(5): 'async function foo() {\\n\\tconst fs = …' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	const fs = await import('fs/promises');
  3 | }
"
`;

exports[`invalid(5): 'async function foo() {\\n\\tconst fs = …' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	const fs = await import('fs/promises');
    | 	                        ^^^^^^^^^^^^^ Prefer \`node:fs/promises\` over \`fs/promises\`.
  3 | }
"
`;

exports[`invalid(5): 'async function foo() {\\n\\tconst fs = …' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	const fs = await import('node:fs/promises');
  3 | }
"
`;

exports[`invalid(6): 'import {promises} from "fs";' > Code 1`] = `
"
  1 | import {promises} from "fs";
"
`;

exports[`invalid(6): 'import {promises} from "fs";' > Error 1/1 1`] = `
"
> 1 | import {promises} from "fs";
    |                        ^^^^ Prefer \`node:fs\` over \`fs\`.
"
`;

exports[`invalid(6): 'import {promises} from "fs";' > Output 1`] = `
"
  1 | import {promises} from "node:fs";
"
`;

exports[`invalid(7): 'export {default as promises} from "fs…' > Code 1`] = `
"
  1 | export {default as promises} from "fs";
"
`;

exports[`invalid(7): 'export {default as promises} from "fs…' > Error 1/1 1`] = `
"
> 1 | export {default as promises} from "fs";
    |                                   ^^^^ Prefer \`node:fs\` over \`fs\`.
"
`;

exports[`invalid(7): 'export {default as promises} from "fs…' > Output 1`] = `
"
  1 | export {default as promises} from "node:fs";
"
`;

exports[`invalid(8): 'import {promises} from \\'fs\\';' > Code 1`] = `
"
  1 | import {promises} from 'fs';
"
`;

exports[`invalid(8): 'import {promises} from \\'fs\\';' > Error 1/1 1`] = `
"
> 1 | import {promises} from 'fs';
    |                        ^^^^ Prefer \`node:fs\` over \`fs\`.
"
`;

exports[`invalid(8): 'import {promises} from \\'fs\\';' > Output 1`] = `
"
  1 | import {promises} from 'node:fs';
"
`;

exports[`invalid(9): 'async function foo() {\\n\\tconst fs = …' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	const fs = await import("fs/promises");
  3 | }
"
`;

exports[`invalid(9): 'async function foo() {\\n\\tconst fs = …' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	const fs = await import("fs/promises");
    | 	                        ^^^^^^^^^^^^^ Prefer \`node:fs/promises\` over \`fs/promises\`.
  3 | }
"
`;

exports[`invalid(9): 'async function foo() {\\n\\tconst fs = …' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	const fs = await import("node:fs/promises");
  3 | }
"
`;

exports[`invalid(10): 'async function foo() {\\n\\tconst fs = …' > Code 1`] = `
"
  1 | async function foo() {
  2 | 	const fs = await import(/* escaped */"\\u{66}s/promises");
  3 | }
"
`;

exports[`invalid(10): 'async function foo() {\\n\\tconst fs = …' > Error 1/1 1`] = `
"
  1 | async function foo() {
> 2 | 	const fs = await import(/* escaped */"\\u{66}s/promises");
    | 	                                     ^^^^^^^^^^^^^^^^^^ Prefer \`node:fs/promises\` over \`fs/promises\`.
  3 | }
"
`;

exports[`invalid(10): 'async function foo() {\\n\\tconst fs = …' > Output 1`] = `
"
  1 | async function foo() {
  2 | 	const fs = await import(/* escaped */"node:\\u{66}s/promises");
  3 | }
"
`;

exports[`invalid(11): 'import "buffer";' > Code 1`] = `
"
  1 | import "buffer";
"
`;

exports[`invalid(11): 'import "buffer";' > Error 1/1 1`] = `
"
> 1 | import "buffer";
    |        ^^^^^^^^ Prefer \`node:buffer\` over \`buffer\`.
"
`;

exports[`invalid(11): 'import "buffer";' > Output 1`] = `
"
  1 | import "node:buffer";
"
`;

exports[`invalid(12): 'import "child_process";' > Code 1`] = `
"
  1 | import "child_process";
"
`;

exports[`invalid(12): 'import "child_process";' > Error 1/1 1`] = `
"
> 1 | import "child_process";
    |        ^^^^^^^^^^^^^^^ Prefer \`node:child_process\` over \`child_process\`.
"
`;

exports[`invalid(12): 'import "child_process";' > Output 1`] = `
"
  1 | import "node:child_process";
"
`;

exports[`invalid(13): 'import "timers/promises";' > Code 1`] = `
"
  1 | import "timers/promises";
"
`;

exports[`invalid(13): 'import "timers/promises";' > Error 1/1 1`] = `
"
> 1 | import "timers/promises";
    |        ^^^^^^^^^^^^^^^^^ Prefer \`node:timers/promises\` over \`timers/promises\`.
"
`;

exports[`invalid(13): 'import "timers/promises";' > Output 1`] = `
"
  1 | import "node:timers/promises";
"
`;
