// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'import util from \\'util\\'' > Code 1`] = `
"
  1 | import util from 'util'
"
`;

exports[`invalid(0): 'import util from \\'util\\'' > Error 1/1 1`] = `
"
> 1 | import util from 'util'
    | ^^^^^^^^^^^^^^^^^^^^^^^ Use named import for module \`util\`.
"
`;

exports[`invalid(1): 'import util from \\'node:util\\'' > Code 1`] = `
"
  1 | import util from 'node:util'
"
`;

exports[`invalid(1): 'import util from \\'node:util\\'' > Error 1/1 1`] = `
"
> 1 | import util from 'node:util'
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use named import for module \`node:util\`.
"
`;

exports[`invalid(2): 'import * as util from \\'util\\'' > Code 1`] = `
"
  1 | import * as util from 'util'
"
`;

exports[`invalid(2): 'import * as util from \\'util\\'' > Error 1/1 1`] = `
"
> 1 | import * as util from 'util'
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use named import for module \`util\`.
"
`;

exports[`invalid(3): 'import * as util from \\'node:util\\'' > Code 1`] = `
"
  1 | import * as util from 'node:util'
"
`;

exports[`invalid(3): 'import * as util from \\'node:util\\'' > Error 1/1 1`] = `
"
> 1 | import * as util from 'node:util'
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use named import for module \`node:util\`.
"
`;

exports[`invalid(4): 'const util = require(\\'util\\')' > Code 1`] = `
"
  1 | const util = require('util')
"
`;

exports[`invalid(4): 'const util = require(\\'util\\')' > Error 1/1 1`] = `
"
> 1 | const util = require('util')
    |       ^^^^^^^^^^^^^^^^^^^^^^ Use named import for module \`util\`.
"
`;

exports[`invalid(5): 'const util = require(\\'node:util\\')' > Code 1`] = `
"
  1 | const util = require('node:util')
"
`;

exports[`invalid(5): 'const util = require(\\'node:util\\')' > Error 1/1 1`] = `
"
> 1 | const util = require('node:util')
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use named import for module \`node:util\`.
"
`;

exports[`invalid(6): 'require(\\'util\\')' > Code 1`] = `
"
  1 | require('util')
"
`;

exports[`invalid(6): 'require(\\'util\\')' > Error 1/1 1`] = `
"
> 1 | require('util')
    | ^^^^^^^^^^^^^^^ Use named import for module \`util\`.
"
`;

exports[`invalid(7): 'require(\\'node:util\\')' > Code 1`] = `
"
  1 | require('node:util')
"
`;

exports[`invalid(7): 'require(\\'node:util\\')' > Error 1/1 1`] = `
"
> 1 | require('node:util')
    | ^^^^^^^^^^^^^^^^^^^^ Use named import for module \`node:util\`.
"
`;

exports[`invalid(8): 'import {red} from \\'chalk\\'' > Code 1`] = `
"
  1 | import {red} from 'chalk'
"
`;

exports[`invalid(8): 'import {red} from \\'chalk\\'' > Error 1/1 1`] = `
"
> 1 | import {red} from 'chalk'
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Use default import for module \`chalk\`.
"
`;

exports[`invalid(9): 'import {red as green} from \\'chalk\\'' > Code 1`] = `
"
  1 | import {red as green} from 'chalk'
"
`;

exports[`invalid(9): 'import {red as green} from \\'chalk\\'' > Error 1/1 1`] = `
"
> 1 | import {red as green} from 'chalk'
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use default import for module \`chalk\`.
"
`;

exports[`invalid(10): 'async () => {\\n\\tconst {red} = await …' > Code 1`] = `
"
  1 | async () => {
  2 | 	const {red} = await import('chalk');
  3 | }
"
`;

exports[`invalid(10): 'async () => {\\n\\tconst {red} = await …' > Error 1/1 1`] = `
"
  1 | async () => {
> 2 | 	const {red} = await import('chalk');
    | 	      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use default import for module \`chalk\`.
  3 | }
"
`;
