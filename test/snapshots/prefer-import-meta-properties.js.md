// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'import path from "path";\\nimport { fi…' > Code 1`] = `
"
  1 | import path from "path";
  2 | import { fileURLToPath } from "url";
  3 | const dirname = path.dirname(fileURLToPath(import.meta.url));
"
`;

exports[`invalid(0): 'import path from "path";\\nimport { fi…' > Error 1/1 1`] = `
"
  1 | import path from "path";
  2 | import { fileURLToPath } from "url";
> 3 | const dirname = path.dirname(fileURLToPath(import.meta.url));
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(0): 'import path from "path";\\nimport { fi…' > Output 1`] = `
"
  1 | import path from "path";
  2 | import { fileURLToPath } from "url";
  3 | const dirname = import.meta.dirname;
"
`;

exports[`invalid(1): 'import path from "path";\\nconst dirna…' > Code 1`] = `
"
  1 | import path from "path";
  2 | const dirname = path.dirname(import.meta.filename);
"
`;

exports[`invalid(1): 'import path from "path";\\nconst dirna…' > Error 1/1 1`] = `
"
  1 | import path from "path";
> 2 | const dirname = path.dirname(import.meta.filename);
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(1): 'import path from "path";\\nconst dirna…' > Output 1`] = `
"
  1 | import path from "path";
  2 | const dirname = import.meta.dirname;
"
`;

exports[`invalid(2): 'import { fileURLToPath } from "url";\\…' > Code 1`] = `
"
  1 | import { fileURLToPath } from "url";
  2 | const dirname = fileURLToPath(new URL(".", import.meta.url));
"
`;

exports[`invalid(2): 'import { fileURLToPath } from "url";\\…' > Error 1/1 1`] = `
"
  1 | import { fileURLToPath } from "url";
> 2 | const dirname = fileURLToPath(new URL(".", import.meta.url));
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(2): 'import { fileURLToPath } from "url";\\…' > Output 1`] = `
"
  1 | import { fileURLToPath } from "url";
  2 | const dirname = import.meta.dirname;
"
`;

exports[`invalid(3): 'import { fileURLToPath } from "url";\\…' > Code 1`] = `
"
  1 | import { fileURLToPath } from "url";
  2 | const dirname = fileURLToPath(new URL("./", import.meta.url));
"
`;

exports[`invalid(3): 'import { fileURLToPath } from "url";\\…' > Error 1/1 1`] = `
"
  1 | import { fileURLToPath } from "url";
> 2 | const dirname = fileURLToPath(new URL("./", import.meta.url));
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(3): 'import { fileURLToPath } from "url";\\…' > Output 1`] = `
"
  1 | import { fileURLToPath } from "url";
  2 | const dirname = import.meta.dirname;
"
`;

exports[`invalid(4): 'import { fileURLToPath } from "url";\\…' > Code 1`] = `
"
  1 | import { fileURLToPath } from "url";
  2 | const filename = fileURLToPath(import.meta.url);
"
`;

exports[`invalid(4): 'import { fileURLToPath } from "url";\\…' > Error 1/1 1`] = `
"
  1 | import { fileURLToPath } from "url";
> 2 | const filename = fileURLToPath(import.meta.url);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
"
`;

exports[`invalid(4): 'import { fileURLToPath } from "url";\\…' > Output 1`] = `
"
  1 | import { fileURLToPath } from "url";
  2 | const filename = import.meta.filename;
"
`;

exports[`invalid(5): 'import { fileURLToPath } from "url";\\…' > Code 1`] = `
"
  1 | import { fileURLToPath } from "url";
  2 | const filename = fileURLToPath(new URL(import.meta.url));
"
`;

exports[`invalid(5): 'import { fileURLToPath } from "url";\\…' > Error 1/1 1`] = `
"
  1 | import { fileURLToPath } from "url";
> 2 | const filename = fileURLToPath(new URL(import.meta.url));
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
"
`;

exports[`invalid(5): 'import { fileURLToPath } from "url";\\…' > Output 1`] = `
"
  1 | import { fileURLToPath } from "url";
  2 | const filename = import.meta.filename;
"
`;

exports[`invalid(6): 'import path from "node:path";\\nimport…' > Code 1`] = `
"
  1 | import path from "node:path";
  2 | import { fileURLToPath } from "node:url";
  3 | const dirname = path.dirname(fileURLToPath(import.meta.url));
"
`;

exports[`invalid(6): 'import path from "node:path";\\nimport…' > Error 1/1 1`] = `
"
  1 | import path from "node:path";
  2 | import { fileURLToPath } from "node:url";
> 3 | const dirname = path.dirname(fileURLToPath(import.meta.url));
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(6): 'import path from "node:path";\\nimport…' > Output 1`] = `
"
  1 | import path from "node:path";
  2 | import { fileURLToPath } from "node:url";
  3 | const dirname = import.meta.dirname;
"
`;

exports[`invalid(7): 'import { fileURLToPath } from "node:u…' > Code 1`] = `
"
  1 | import { fileURLToPath } from "node:url";
  2 | const filename = fileURLToPath(import.meta.url);
"
`;

exports[`invalid(7): 'import { fileURLToPath } from "node:u…' > Error 1/1 1`] = `
"
  1 | import { fileURLToPath } from "node:url";
> 2 | const filename = fileURLToPath(import.meta.url);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
"
`;

exports[`invalid(7): 'import { fileURLToPath } from "node:u…' > Output 1`] = `
"
  1 | import { fileURLToPath } from "node:url";
  2 | const filename = import.meta.filename;
"
`;

exports[`invalid(8): 'import * as path from "node:path";\\ni…' > Code 1`] = `
"
  1 | import * as path from "node:path";
  2 | import url from "node:url";
  3 | const dirname = path.dirname(url.fileURLToPath(import.meta.url));
"
`;

exports[`invalid(8): 'import * as path from "node:path";\\ni…' > Error 1/1 1`] = `
"
  1 | import * as path from "node:path";
  2 | import url from "node:url";
> 3 | const dirname = path.dirname(url.fileURLToPath(import.meta.url));
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(8): 'import * as path from "node:path";\\ni…' > Output 1`] = `
"
  1 | import * as path from "node:path";
  2 | import url from "node:url";
  3 | const dirname = import.meta.dirname;
"
`;

exports[`invalid(9): 'import url from "node:url";\\nconst fi…' > Code 1`] = `
"
  1 | import url from "node:url";
  2 | const filename = url.fileURLToPath(import.meta.url);
"
`;

exports[`invalid(9): 'import url from "node:url";\\nconst fi…' > Error 1/1 1`] = `
"
  1 | import url from "node:url";
> 2 | const filename = url.fileURLToPath(import.meta.url);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
"
`;

exports[`invalid(9): 'import url from "node:url";\\nconst fi…' > Output 1`] = `
"
  1 | import url from "node:url";
  2 | const filename = import.meta.filename;
"
`;

exports[`invalid(10): 'import path from "node:path";\\nimport…' > Code 1`] = `
"
  1 | import path from "node:path";
  2 | import { fileURLToPath } from "node:url";
  3 | const __filename = fileURLToPath(import.meta.url);
  4 | const __dirname = path.dirname(__filename);
"
`;

exports[`invalid(10): 'import path from "node:path";\\nimport…' > Error 1/2 1`] = `
"
  1 | import path from "node:path";
  2 | import { fileURLToPath } from "node:url";
> 3 | const __filename = fileURLToPath(import.meta.url);
    |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
  4 | const __dirname = path.dirname(__filename);
"
`;

exports[`invalid(10): 'import path from "node:path";\\nimport…' > Error 2/2 1`] = `
"
  1 | import path from "node:path";
  2 | import { fileURLToPath } from "node:url";
  3 | const __filename = fileURLToPath(import.meta.url);
> 4 | const __dirname = path.dirname(__filename);
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(10): 'import path from "node:path";\\nimport…' > Output 1`] = `
"
  1 | import path from "node:path";
  2 | import { fileURLToPath } from "node:url";
  3 | const __filename = import.meta.filename;
  4 | const __dirname = import.meta.dirname;
"
`;

exports[`invalid(11): 'import path from "node:path";\\nconst …' > Code 1`] = `
"
  1 | import path from "node:path";
  2 | const __filename = import.meta.filename;
  3 | const __dirname = path.dirname(__filename);
"
`;

exports[`invalid(11): 'import path from "node:path";\\nconst …' > Error 1/1 1`] = `
"
  1 | import path from "node:path";
  2 | const __filename = import.meta.filename;
> 3 | const __dirname = path.dirname(__filename);
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(11): 'import path from "node:path";\\nconst …' > Output 1`] = `
"
  1 | import path from "node:path";
  2 | const __filename = import.meta.filename;
  3 | const __dirname = import.meta.dirname;
"
`;

exports[`invalid(12): 'const path = process.getBuiltinModule…' > Code 1`] = `
"
  1 | const path = process.getBuiltinModule("node:path");
  2 | const { fileURLToPath } = process.getBuiltinModule("node:url");
  3 | const filename = fileURLToPath(import.meta.url);
  4 | const dirname = path.dirname(filename);
"
`;

exports[`invalid(12): 'const path = process.getBuiltinModule…' > Error 1/2 1`] = `
"
  1 | const path = process.getBuiltinModule("node:path");
  2 | const { fileURLToPath } = process.getBuiltinModule("node:url");
> 3 | const filename = fileURLToPath(import.meta.url);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
  4 | const dirname = path.dirname(filename);
"
`;

exports[`invalid(12): 'const path = process.getBuiltinModule…' > Error 2/2 1`] = `
"
  1 | const path = process.getBuiltinModule("node:path");
  2 | const { fileURLToPath } = process.getBuiltinModule("node:url");
  3 | const filename = fileURLToPath(import.meta.url);
> 4 | const dirname = path.dirname(filename);
    |                 ^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(12): 'const path = process.getBuiltinModule…' > Output 1`] = `
"
  1 | const path = process.getBuiltinModule("node:path");
  2 | const { fileURLToPath } = process.getBuiltinModule("node:url");
  3 | const filename = import.meta.filename;
  4 | const dirname = import.meta.dirname;
"
`;

exports[`invalid(13): 'const { fileURLToPath: renamed } = pr…' > Code 1`] = `
"
  1 | const { fileURLToPath: renamed } = process.getBuiltinModule("node:url");
  2 | const filename = renamed(import.meta.url);
"
`;

exports[`invalid(13): 'const { fileURLToPath: renamed } = pr…' > Error 1/1 1`] = `
"
  1 | const { fileURLToPath: renamed } = process.getBuiltinModule("node:url");
> 2 | const filename = renamed(import.meta.url);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
"
`;

exports[`invalid(13): 'const { fileURLToPath: renamed } = pr…' > Output 1`] = `
"
  1 | const { fileURLToPath: renamed } = process.getBuiltinModule("node:url");
  2 | const filename = import.meta.filename;
"
`;

exports[`invalid(14): 'import { fileURLToPath as renamed } f…' > Code 1`] = `
"
  1 | import { fileURLToPath as renamed } from "node:url";
  2 | const filename = renamed(import.meta.url);
"
`;

exports[`invalid(14): 'import { fileURLToPath as renamed } f…' > Error 1/1 1`] = `
"
  1 | import { fileURLToPath as renamed } from "node:url";
> 2 | const filename = renamed(import.meta.url);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
"
`;

exports[`invalid(14): 'import { fileURLToPath as renamed } f…' > Output 1`] = `
"
  1 | import { fileURLToPath as renamed } from "node:url";
  2 | const filename = import.meta.filename;
"
`;

exports[`invalid(15): 'const path = process.getBuiltinModule…' > Code 1`] = `
"
  1 | const path = process.getBuiltinModule("path");
  2 | const { fileURLToPath } = process.getBuiltinModule("url");
  3 | const filename = fileURLToPath(import.meta.url);
  4 | const dirname = path.dirname(filename);
"
`;

exports[`invalid(15): 'const path = process.getBuiltinModule…' > Error 1/2 1`] = `
"
  1 | const path = process.getBuiltinModule("path");
  2 | const { fileURLToPath } = process.getBuiltinModule("url");
> 3 | const filename = fileURLToPath(import.meta.url);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
  4 | const dirname = path.dirname(filename);
"
`;

exports[`invalid(15): 'const path = process.getBuiltinModule…' > Error 2/2 1`] = `
"
  1 | const path = process.getBuiltinModule("path");
  2 | const { fileURLToPath } = process.getBuiltinModule("url");
  3 | const filename = fileURLToPath(import.meta.url);
> 4 | const dirname = path.dirname(filename);
    |                 ^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(15): 'const path = process.getBuiltinModule…' > Output 1`] = `
"
  1 | const path = process.getBuiltinModule("path");
  2 | const { fileURLToPath } = process.getBuiltinModule("url");
  3 | const filename = import.meta.filename;
  4 | const dirname = import.meta.dirname;
"
`;

exports[`invalid(16): 'const filename = process.getBuiltinMo…' > Code 1`] = `
"
  1 | const filename = process.getBuiltinModule("node:url").fileURLToPath(import.meta.url);
  2 | const dirname = process.getBuiltinModule("node:path").dirname(filename);
"
`;

exports[`invalid(16): 'const filename = process.getBuiltinMo…' > Error 1/2 1`] = `
"
> 1 | const filename = process.getBuiltinModule("node:url").fileURLToPath(import.meta.url);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct filename using \`fileURLToPath()\`.
  2 | const dirname = process.getBuiltinModule("node:path").dirname(filename);
"
`;

exports[`invalid(16): 'const filename = process.getBuiltinMo…' > Error 2/2 1`] = `
"
  1 | const filename = process.getBuiltinModule("node:url").fileURLToPath(import.meta.url);
> 2 | const dirname = process.getBuiltinModule("node:path").dirname(filename);
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not construct dirname.
"
`;

exports[`invalid(16): 'const filename = process.getBuiltinMo…' > Output 1`] = `
"
  1 | const filename = import.meta.filename;
  2 | const dirname = import.meta.dirname;
"
`;
