// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '\\'use strict\\';\\n\\nconsole.log(1);' > Code 1`] = `
"
  1 | 'use strict';
  2 |
  3 | console.log(1);
"
`;

exports[`invalid(0): '\\'use strict\\';\\n\\nconsole.log(1);' > Error 1/1 1`] = `
"
> 1 | 'use strict';
    | ^^^^^^^^^^^^^ Do not use "use strict" directive.
  2 |
  3 | console.log(1);

--------------------------------------------------------------------------------
Suggestion 1/1: Remove "use strict" directive.
  1 | console.log(1);
"
`;

exports[`invalid(0): '__filename' > Code 1`] = `
"
  1 | __filename
"
`;

exports[`invalid(0): '__filename' > Error 1/1 1`] = `
"
> 1 | __filename
    | ^^^^^^^^^^ Do not use "__filename".

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`__filename\` with \`import.meta.filename\`.
  1 | import.meta.filename

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`__filename\` with \`…(import.meta.url)\`.
  1 | url.fileURLToPath(import.meta.url)
"
`;

exports[`invalid(0): '__filename' > Filename 1`] = `
"
foo.mjs
"
`;

exports[`invalid(0): 'const dirname = __dirname;' > Code 1`] = `
"
  1 | const dirname = __dirname;
"
`;

exports[`invalid(0): 'const dirname = __dirname;' > Error 1/1 1`] = `
"
> 1 | const dirname = __dirname;
    |                 ^^^^^^^^^ Do not use "__dirname".

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`__dirname\` with \`import.meta.dirname\`.
  1 | const dirname = import.meta.dirname;

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`__dirname\` with \`…(import.meta.url)\`.
  1 | const dirname = path.dirname(url.fileURLToPath(import.meta.url));
"
`;

exports[`invalid(0): 'exports = foo;' > Code 1`] = `
"
  1 | exports = foo;
"
`;

exports[`invalid(0): 'exports = foo;' > Error 1/1 1`] = `
"
> 1 | exports = foo;
    | ^^^^^^^ Do not use "exports".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 | export default foo;
"
`;

exports[`invalid(0): 'require("foo");' > Code 1`] = `
"
  1 | require("foo");
"
`;

exports[`invalid(0): 'require("foo");' > Error 1/1 1`] = `
"
> 1 | require("foo");
    | ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import "foo";
"
`;

exports[`invalid(1): '"use strict";\\n\\nconsole.log(1);' > Code 1`] = `
"
  1 | "use strict";
  2 |
  3 | console.log(1);
"
`;

exports[`invalid(1): '"use strict";\\n\\nconsole.log(1);' > Error 1/1 1`] = `
"
> 1 | "use strict";
    | ^^^^^^^^^^^^^ Do not use "use strict" directive.
  2 |
  3 | console.log(1);

--------------------------------------------------------------------------------
Suggestion 1/1: Remove "use strict" directive.
  1 | console.log(1);
"
`;

exports[`invalid(1): 'const dirname = __filename;' > Code 1`] = `
"
  1 | const dirname = __filename;
"
`;

exports[`invalid(1): 'const dirname = __filename;' > Error 1/1 1`] = `
"
> 1 | const dirname = __filename;
    |                 ^^^^^^^^^^ Do not use "__filename".

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`__filename\` with \`import.meta.filename\`.
  1 | const dirname = import.meta.filename;

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`__filename\` with \`…(import.meta.url)\`.
  1 | const dirname = url.fileURLToPath(import.meta.url);
"
`;

exports[`invalid(1): 'module.exports = foo;' > Code 1`] = `
"
  1 | module.exports = foo;
"
`;

exports[`invalid(1): 'module.exports = foo;' > Error 1/1 1`] = `
"
> 1 | module.exports = foo;
    | ^^^^^^ Do not use "module".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 | export default foo;
"
`;

exports[`invalid(1): 'require("lodash")' > Code 1`] = `
"
  1 | require("lodash")
"
`;

exports[`invalid(1): 'require("lodash")' > Error 1/1 1`] = `
"
> 1 | require("lodash")
    | ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import "lodash"
"
`;

exports[`invalid(1): 'require("lodash")' > Filename 1`] = `
"
foo.js
"
`;

exports[`invalid(1): 'require(\\'foo\\');' > Code 1`] = `
"
  1 | require('foo');
"
`;

exports[`invalid(1): 'require(\\'foo\\');' > Error 1/1 1`] = `
"
> 1 | require('foo');
    | ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import 'foo';
"
`;

exports[`invalid(2): '(( ((exports)) = ((foo)) ));' > Code 1`] = `
"
  1 | (( ((exports)) = ((foo)) ));
"
`;

exports[`invalid(2): '(( ((exports)) = ((foo)) ));' > Error 1/1 1`] = `
"
> 1 | (( ((exports)) = ((foo)) ));
    |      ^^^^^^^ Do not use "exports".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 |  export default  ((foo)) ;
"
`;

exports[`invalid(2): 'const foo = { __dirname};' > Code 1`] = `
"
  1 | const foo = { __dirname};
"
`;

exports[`invalid(2): 'const foo = { __dirname};' > Error 1/1 1`] = `
"
> 1 | const foo = { __dirname};
    |               ^^^^^^^^^ Do not use "__dirname".

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`__dirname\` with \`import.meta.dirname\`.
  1 | const foo = { __dirname: import.meta.dirname};

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`__dirname\` with \`…(import.meta.url)\`.
  1 | const foo = { __dirname: path.dirname(url.fileURLToPath(import.meta.url))};
"
`;

exports[`invalid(2): 'function foo () {\\n\\t"use strict";\\n\\…' > Code 1`] = `
"
  1 | function foo () {
  2 | 	"use strict";
  3 | 	console.log(1);
  4 | }
"
`;

exports[`invalid(2): 'function foo () {\\n\\t"use strict";\\n\\…' > Error 1/1 1`] = `
"
  1 | function foo () {
> 2 | 	"use strict";
    | 	^^^^^^^^^^^^^ Do not use "use strict" directive.
  3 | 	console.log(1);
  4 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove "use strict" directive.
  1 | function foo () {
  2 | 	console.log(1);
  3 | }
"
`;

exports[`invalid(2): 'require( (("foo")) );' > Code 1`] = `
"
  1 | require( (("foo")) );
"
`;

exports[`invalid(2): 'require( (("foo")) );' > Error 1/1 1`] = `
"
> 1 | require( (("foo")) );
    | ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import  "foo" ;
"
`;

exports[`invalid(2): 'require("lodash")' > Code 1`] = `
"
  1 | require("lodash")
"
`;

exports[`invalid(2): 'require("lodash")' > Error 1/1 1`] = `
"
> 1 | require("lodash")
    | ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import "lodash"
"
`;

exports[`invalid(2): 'require("lodash")' > Filename 1`] = `
"
foo.cjs/foo.js
"
`;

exports[`invalid(3): '(( ((module.exports)) = ((foo)) ));' > Code 1`] = `
"
  1 | (( ((module.exports)) = ((foo)) ));
"
`;

exports[`invalid(3): '(( ((module.exports)) = ((foo)) ));' > Error 1/1 1`] = `
"
> 1 | (( ((module.exports)) = ((foo)) ));
    |      ^^^^^^ Do not use "module".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 |  export default  ((foo)) ;
"
`;

exports[`invalid(3): '((require))("foo");' > Code 1`] = `
"
  1 | ((require))("foo");
"
`;

exports[`invalid(3): '((require))("foo");' > Error 1/1 1`] = `
"
> 1 | ((require))("foo");
    |   ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import "foo";
"
`;

exports[`invalid(3): '\\'use strict\\';\\n\\nconsole.log(1);' > Code 1`] = `
"
  1 | 'use strict';
  2 |
  3 | console.log(1);
"
`;

exports[`invalid(3): '\\'use strict\\';\\n\\nconsole.log(1);' > Error 1/1 1`] = `
"
> 1 | 'use strict';
    | ^^^^^^^^^^^^^ Do not use "use strict" directive.
  2 |
  3 | console.log(1);
"
`;

exports[`invalid(3): '\\'use strict\\';\\n\\nconsole.log(1);' > Filename 1`] = `
"
example.mjs
"
`;

exports[`invalid(3): '\\'use strict\\';\\n\\nconsole.log(1);' > Output 1`] = `
"
  1 | console.log(1);
"
`;

exports[`invalid(3): 'const foo = {__filename, };' > Code 1`] = `
"
  1 | const foo = {__filename, };
"
`;

exports[`invalid(3): 'const foo = {__filename, };' > Error 1/1 1`] = `
"
> 1 | const foo = {__filename, };
    |              ^^^^^^^^^^ Do not use "__filename".

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`__filename\` with \`import.meta.filename\`.
  1 | const foo = {__filename: import.meta.filename, };

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`__filename\` with \`…(import.meta.url)\`.
  1 | const foo = {__filename: url.fileURLToPath(import.meta.url), };
"
`;

exports[`invalid(4): '(( require("foo") ));' > Code 1`] = `
"
  1 | (( require("foo") ));
"
`;

exports[`invalid(4): '(( require("foo") ));' > Error 1/1 1`] = `
"
> 1 | (( require("foo") ));
    |    ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 |  import "foo" ;
"
`;

exports[`invalid(4): 'const foo = 1;exports.foo = foo;' > Code 1`] = `
"
  1 | const foo = 1;exports.foo = foo;
"
`;

exports[`invalid(4): 'const foo = 1;exports.foo = foo;' > Error 1/1 1`] = `
"
> 1 | const foo = 1;exports.foo = foo;
    |               ^^^^^^^ Do not use "exports".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 | const foo = 1;export {foo as foo};
"
`;

exports[`invalid(4): 'if (__dirname.startsWith("/project/sr…' > Code 1`] = `
"
  1 | if (__dirname.startsWith("/project/src/")) {}
"
`;

exports[`invalid(4): 'if (__dirname.startsWith("/project/sr…' > Error 1/1 1`] = `
"
> 1 | if (__dirname.startsWith("/project/src/")) {}
    |     ^^^^^^^^^ Do not use "__dirname".

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`__dirname\` with \`import.meta.dirname\`.
  1 | if (import.meta.dirname.startsWith("/project/src/")) {}

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`__dirname\` with \`…(import.meta.url)\`.
  1 | if (path.dirname(url.fileURLToPath(import.meta.url)).startsWith("/project/src/")) {}
"
`;

exports[`invalid(5): 'const foo = 1;module.exports.foo = fo…' > Code 1`] = `
"
  1 | const foo = 1;module.exports.foo = foo;
"
`;

exports[`invalid(5): 'const foo = 1;module.exports.foo = fo…' > Error 1/1 1`] = `
"
> 1 | const foo = 1;module.exports.foo = foo;
    |               ^^^^^^ Do not use "module".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 | const foo = 1;export {foo as foo};
"
`;

exports[`invalid(5): 'const foo=require("foo");' > Code 1`] = `
"
  1 | const foo=require("foo");
"
`;

exports[`invalid(5): 'const foo=require("foo");' > Error 1/1 1`] = `
"
> 1 | const foo=require("foo");
    |           ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import foo from "foo";
"
`;

exports[`invalid(5): 'if (__filename.endsWith(".js")) {}' > Code 1`] = `
"
  1 | if (__filename.endsWith(".js")) {}
"
`;

exports[`invalid(5): 'if (__filename.endsWith(".js")) {}' > Error 1/1 1`] = `
"
> 1 | if (__filename.endsWith(".js")) {}
    |     ^^^^^^^^^^ Do not use "__filename".

--------------------------------------------------------------------------------
Suggestion 1/2: Replace \`__filename\` with \`import.meta.filename\`.
  1 | if (import.meta.filename.endsWith(".js")) {}

--------------------------------------------------------------------------------
Suggestion 2/2: Replace \`__filename\` with \`…(import.meta.url)\`.
  1 | if (url.fileURLToPath(import.meta.url).endsWith(".js")) {}
"
`;

exports[`invalid(6): 'const foo = require.resolve("foo");' > Code 1`] = `
"
  1 | const foo = require.resolve("foo");
"
`;

exports[`invalid(6): 'const foo = require.resolve("foo");' > Error 1/1 1`] = `
"
> 1 | const foo = require.resolve("foo");
    |             ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(6): 'exports["foo"] = foo;' > Code 1`] = `
"
  1 | exports["foo"] = foo;
"
`;

exports[`invalid(6): 'exports["foo"] = foo;' > Error 1/1 1`] = `
"
> 1 | exports["foo"] = foo;
    | ^^^^^^^ Do not use "exports".
"
`;

exports[`invalid(7): 'const foo\\n\\t=\\n\\trequire("foo");' > Code 1`] = `
"
  1 | const foo
  2 | 	=
  3 | 	require("foo");
"
`;

exports[`invalid(7): 'const foo\\n\\t=\\n\\trequire("foo");' > Error 1/1 1`] = `
"
  1 | const foo
  2 | 	=
> 3 | 	require("foo");
    | 	^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import foo from "foo";
"
`;

exports[`invalid(7): 'module.exports["foo"] = foo;' > Code 1`] = `
"
  1 | module.exports["foo"] = foo;
"
`;

exports[`invalid(7): 'module.exports["foo"] = foo;' > Error 1/1 1`] = `
"
> 1 | module.exports["foo"] = foo;
    | ^^^^^^ Do not use "module".
"
`;

exports[`invalid(8): 'const foo = exports;' > Code 1`] = `
"
  1 | const foo = exports;
"
`;

exports[`invalid(8): 'const foo = exports;' > Error 1/1 1`] = `
"
> 1 | const foo = exports;
    |             ^^^^^^^ Do not use "exports".
"
`;

exports[`invalid(8): 'const foo = require("foo");' > Code 1`] = `
"
  1 | const foo = require("foo");
"
`;

exports[`invalid(8): 'const foo = require("foo");' > Error 1/1 1`] = `
"
> 1 | const foo = require("foo");
    |             ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import foo from "foo";
"
`;

exports[`invalid(9): 'const foo = exports.foo;' > Code 1`] = `
"
  1 | const foo = exports.foo;
"
`;

exports[`invalid(9): 'const foo = exports.foo;' > Error 1/1 1`] = `
"
> 1 | const foo = exports.foo;
    |             ^^^^^^^ Do not use "exports".
"
`;

exports[`invalid(9): 'const foo = require( (("foo")) );' > Code 1`] = `
"
  1 | const foo = require( (("foo")) );
"
`;

exports[`invalid(9): 'const foo = require( (("foo")) );' > Error 1/1 1`] = `
"
> 1 | const foo = require( (("foo")) );
    |             ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import foo from  "foo" ;
"
`;

exports[`invalid(10): 'const foo = ((require))("foo");' > Code 1`] = `
"
  1 | const foo = ((require))("foo");
"
`;

exports[`invalid(10): 'const foo = ((require))("foo");' > Error 1/1 1`] = `
"
> 1 | const foo = ((require))("foo");
    |               ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import foo from "foo";
"
`;

exports[`invalid(10): 'const foo = module.exports;' > Code 1`] = `
"
  1 | const foo = module.exports;
"
`;

exports[`invalid(10): 'const foo = module.exports;' > Error 1/1 1`] = `
"
> 1 | const foo = module.exports;
    |             ^^^^^^ Do not use "module".
"
`;

exports[`invalid(11): 'const foo = (( require("foo") ));' > Code 1`] = `
"
  1 | const foo = (( require("foo") ));
"
`;

exports[`invalid(11): 'const foo = (( require("foo") ));' > Error 1/1 1`] = `
"
> 1 | const foo = (( require("foo") ));
    |                ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import foo from  "foo" ;
"
`;

exports[`invalid(11): 'const foo = module.exports.foo;' > Code 1`] = `
"
  1 | const foo = module.exports.foo;
"
`;

exports[`invalid(11): 'const foo = module.exports.foo;' > Error 1/1 1`] = `
"
> 1 | const foo = module.exports.foo;
    |             ^^^^^^ Do not use "module".
"
`;

exports[`invalid(12): 'const {foo}=require("foo");' > Code 1`] = `
"
  1 | const {foo}=require("foo");
"
`;

exports[`invalid(12): 'const {foo}=require("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo}=require("foo");
    |             ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo} from "foo";
"
`;

exports[`invalid(12): 'module["exports"] = foo;' > Code 1`] = `
"
  1 | module["exports"] = foo;
"
`;

exports[`invalid(12): 'module["exports"] = foo;' > Error 1/1 1`] = `
"
> 1 | module["exports"] = foo;
    | ^^^^^^ Do not use "module".
"
`;

exports[`invalid(13): 'const {foo}\\n\\t=\\n\\trequire("foo");' > Code 1`] = `
"
  1 | const {foo}
  2 | 	=
  3 | 	require("foo");
"
`;

exports[`invalid(13): 'const {foo}\\n\\t=\\n\\trequire("foo");' > Error 1/1 1`] = `
"
  1 | const {foo}
  2 | 	=
> 3 | 	require("foo");
    | 	^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo} from "foo";
"
`;

exports[`invalid(13): 'module[exports] = foo;' > Code 1`] = `
"
  1 | module[exports] = foo;
"
`;

exports[`invalid(13): 'module[exports] = foo;' > Error 1/2 1`] = `
"
> 1 | module[exports] = foo;
    | ^^^^^^ Do not use "module".
"
`;

exports[`invalid(13): 'module[exports] = foo;' > Error 2/2 1`] = `
"
> 1 | module[exports] = foo;
    |        ^^^^^^^ Do not use "exports".
"
`;

exports[`invalid(14): 'const {foo} = require("foo");' > Code 1`] = `
"
  1 | const {foo} = require("foo");
"
`;

exports[`invalid(14): 'const {foo} = require("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo} = require("foo");
    |               ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo} from "foo";
"
`;

exports[`invalid(14): 'module.exports.foo.bar = foo;' > Code 1`] = `
"
  1 | module.exports.foo.bar = foo;
"
`;

exports[`invalid(14): 'module.exports.foo.bar = foo;' > Error 1/1 1`] = `
"
> 1 | module.exports.foo.bar = foo;
    | ^^^^^^ Do not use "module".
"
`;

exports[`invalid(15): 'const {foo} = require( (("foo")) );' > Code 1`] = `
"
  1 | const {foo} = require( (("foo")) );
"
`;

exports[`invalid(15): 'const {foo} = require( (("foo")) );' > Error 1/1 1`] = `
"
> 1 | const {foo} = require( (("foo")) );
    |               ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo} from  "foo" ;
"
`;

exports[`invalid(15): 'const foo = 1;exports.default = foo;' > Code 1`] = `
"
  1 | const foo = 1;exports.default = foo;
"
`;

exports[`invalid(15): 'const foo = 1;exports.default = foo;' > Error 1/1 1`] = `
"
> 1 | const foo = 1;exports.default = foo;
    |               ^^^^^^^ Do not use "exports".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 | const foo = 1;export {foo as default};
"
`;

exports[`invalid(16): 'const {foo} = ((require))("foo");' > Code 1`] = `
"
  1 | const {foo} = ((require))("foo");
"
`;

exports[`invalid(16): 'const {foo} = ((require))("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo} = ((require))("foo");
    |                 ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo} from "foo";
"
`;

exports[`invalid(16): 'const foo = 1;module.exports.default …' > Code 1`] = `
"
  1 | const foo = 1;module.exports.default = foo;
"
`;

exports[`invalid(16): 'const foo = 1;module.exports.default …' > Error 1/1 1`] = `
"
> 1 | const foo = 1;module.exports.default = foo;
    |               ^^^^^^ Do not use "module".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 | const foo = 1;export {foo as default};
"
`;

exports[`invalid(17): 'const {foo} = (( require("foo") ));' > Code 1`] = `
"
  1 | const {foo} = (( require("foo") ));
"
`;

exports[`invalid(17): 'const {foo} = (( require("foo") ));' > Error 1/1 1`] = `
"
> 1 | const {foo} = (( require("foo") ));
    |                  ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo} from  "foo" ;
"
`;

exports[`invalid(17): 'exports.foo.bar = foo;' > Code 1`] = `
"
  1 | exports.foo.bar = foo;
"
`;

exports[`invalid(17): 'exports.foo.bar = foo;' > Error 1/1 1`] = `
"
> 1 | exports.foo.bar = foo;
    | ^^^^^^^ Do not use "exports".
"
`;

exports[`invalid(18): 'const {foo} = (( require("foo") ));' > Code 1`] = `
"
  1 | const {foo} = (( require("foo") ));
"
`;

exports[`invalid(18): 'const {foo} = (( require("foo") ));' > Error 1/1 1`] = `
"
> 1 | const {foo} = (( require("foo") ));
    |                  ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo} from  "foo" ;
"
`;

exports[`invalid(18): 'exports = 1;' > Code 1`] = `
"
  1 | exports = 1;
"
`;

exports[`invalid(18): 'exports = 1;' > Error 1/1 1`] = `
"
> 1 | exports = 1;
    | ^^^^^^^ Do not use "exports".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 | export default 1;
"
`;

exports[`invalid(19): 'const {foo: foo}=require("foo");' > Code 1`] = `
"
  1 | const {foo: foo}=require("foo");
"
`;

exports[`invalid(19): 'const {foo: foo}=require("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo: foo}=require("foo");
    |                  ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as foo} from "foo";
"
`;

exports[`invalid(19): 'exports.foo = [];' > Code 1`] = `
"
  1 | exports.foo = [];
"
`;

exports[`invalid(19): 'exports.foo = [];' > Error 1/1 1`] = `
"
> 1 | exports.foo = [];
    | ^^^^^^^ Do not use "exports".
"
`;

exports[`invalid(20): 'const {foo: foo}\\n\\t=\\n\\trequire("foo…' > Code 1`] = `
"
  1 | const {foo: foo}
  2 | 	=
  3 | 	require("foo");
"
`;

exports[`invalid(20): 'const {foo: foo}\\n\\t=\\n\\trequire("foo…' > Error 1/1 1`] = `
"
  1 | const {foo: foo}
  2 | 	=
> 3 | 	require("foo");
    | 	^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as foo} from "foo";
"
`;

exports[`invalid(20): 'module.exports = function() {};' > Code 1`] = `
"
  1 | module.exports = function() {};
"
`;

exports[`invalid(20): 'module.exports = function() {};' > Error 1/1 1`] = `
"
> 1 | module.exports = function() {};
    | ^^^^^^ Do not use "module".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`export\`.
  1 | export default function() {};
"
`;

exports[`invalid(21): 'const {foo: foo} = require("foo");' > Code 1`] = `
"
  1 | const {foo: foo} = require("foo");
"
`;

exports[`invalid(21): 'const {foo: foo} = require("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo: foo} = require("foo");
    |                    ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as foo} from "foo";
"
`;

exports[`invalid(21): 'module.exports.foo = foo || bar;' > Code 1`] = `
"
  1 | module.exports.foo = foo || bar;
"
`;

exports[`invalid(21): 'module.exports.foo = foo || bar;' > Error 1/1 1`] = `
"
> 1 | module.exports.foo = foo || bar;
    | ^^^^^^ Do not use "module".
"
`;

exports[`invalid(22): 'const {foo: foo} = require( (("foo"))…' > Code 1`] = `
"
  1 | const {foo: foo} = require( (("foo")) );
"
`;

exports[`invalid(22): 'const {foo: foo} = require( (("foo"))…' > Error 1/1 1`] = `
"
> 1 | const {foo: foo} = require( (("foo")) );
    |                    ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as foo} from  "foo" ;
"
`;

exports[`invalid(22): 'exports += foo;' > Code 1`] = `
"
  1 | exports += foo;
"
`;

exports[`invalid(22): 'exports += foo;' > Error 1/1 1`] = `
"
> 1 | exports += foo;
    | ^^^^^^^ Do not use "exports".
"
`;

exports[`invalid(23): 'const {foo: foo} = ((require))("foo");' > Code 1`] = `
"
  1 | const {foo: foo} = ((require))("foo");
"
`;

exports[`invalid(23): 'const {foo: foo} = ((require))("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo: foo} = ((require))("foo");
    |                      ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as foo} from "foo";
"
`;

exports[`invalid(23): 'const foo = module.children' > Code 1`] = `
"
  1 | const foo = module.children
"
`;

exports[`invalid(23): 'const foo = module.children' > Error 1/1 1`] = `
"
> 1 | const foo = module.children
    |             ^^^^^^ Do not use "module".
"
`;

exports[`invalid(24): 'const {foo: foo} = (( require("foo") …' > Code 1`] = `
"
  1 | const {foo: foo} = (( require("foo") ));
"
`;

exports[`invalid(24): 'const {foo: foo} = (( require("foo") …' > Error 1/1 1`] = `
"
> 1 | const {foo: foo} = (( require("foo") ));
    |                       ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as foo} from  "foo" ;
"
`;

exports[`invalid(24): 'const parentModule = module.parent' > Code 1`] = `
"
  1 | const parentModule = module.parent
"
`;

exports[`invalid(24): 'const parentModule = module.parent' > Error 1/1 1`] = `
"
> 1 | const parentModule = module.parent
    |                      ^^^^^^ Do not use "module".
"
`;

exports[`invalid(25): 'const {foo: foo} = (( require("foo") …' > Code 1`] = `
"
  1 | const {foo: foo} = (( require("foo") ));
"
`;

exports[`invalid(25): 'const {foo: foo} = (( require("foo") …' > Error 1/1 1`] = `
"
> 1 | const {foo: foo} = (( require("foo") ));
    |                       ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as foo} from  "foo" ;
"
`;

exports[`invalid(25): 'function foo() {\\n\\texports.foo = foo…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	exports.foo = foo;
  3 | 	module.exports.foo = foo;
  4 | }
"
`;

exports[`invalid(25): 'function foo() {\\n\\texports.foo = foo…' > Error 1/2 1`] = `
"
  1 | function foo() {
> 2 | 	exports.foo = foo;
    | 	^^^^^^^ Do not use "exports".
  3 | 	module.exports.foo = foo;
  4 | }
"
`;

exports[`invalid(25): 'function foo() {\\n\\texports.foo = foo…' > Error 2/2 1`] = `
"
  1 | function foo() {
  2 | 	exports.foo = foo;
> 3 | 	module.exports.foo = foo;
    | 	^^^^^^ Do not use "module".
  4 | }
"
`;

exports[`invalid(26): 'const {foo:bar}=require("foo");' > Code 1`] = `
"
  1 | const {foo:bar}=require("foo");
"
`;

exports[`invalid(26): 'const {foo:bar}=require("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo:bar}=require("foo");
    |                 ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as bar} from "foo";
"
`;

exports[`invalid(27): 'const {foo:bar}\\n\\t=\\n\\trequire("foo"…' > Code 1`] = `
"
  1 | const {foo:bar}
  2 | 	=
  3 | 	require("foo");
"
`;

exports[`invalid(27): 'const {foo:bar}\\n\\t=\\n\\trequire("foo"…' > Error 1/1 1`] = `
"
  1 | const {foo:bar}
  2 | 	=
> 3 | 	require("foo");
    | 	^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as bar} from "foo";
"
`;

exports[`invalid(28): 'const {foo:bar} = require("foo");' > Code 1`] = `
"
  1 | const {foo:bar} = require("foo");
"
`;

exports[`invalid(28): 'const {foo:bar} = require("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo:bar} = require("foo");
    |                   ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as bar} from "foo";
"
`;

exports[`invalid(29): 'const {foo:bar} = require( (("foo")) …' > Code 1`] = `
"
  1 | const {foo:bar} = require( (("foo")) );
"
`;

exports[`invalid(29): 'const {foo:bar} = require( (("foo")) …' > Error 1/1 1`] = `
"
> 1 | const {foo:bar} = require( (("foo")) );
    |                   ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as bar} from  "foo" ;
"
`;

exports[`invalid(30): 'const {foo:bar} = ((require))("foo");' > Code 1`] = `
"
  1 | const {foo:bar} = ((require))("foo");
"
`;

exports[`invalid(30): 'const {foo:bar} = ((require))("foo");' > Error 1/1 1`] = `
"
> 1 | const {foo:bar} = ((require))("foo");
    |                     ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as bar} from "foo";
"
`;

exports[`invalid(31): 'const {foo:bar} = (( require("foo") )…' > Code 1`] = `
"
  1 | const {foo:bar} = (( require("foo") ));
"
`;

exports[`invalid(31): 'const {foo:bar} = (( require("foo") )…' > Error 1/1 1`] = `
"
> 1 | const {foo:bar} = (( require("foo") ));
    |                      ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as bar} from  "foo" ;
"
`;

exports[`invalid(32): 'const {foo:bar} = (( require("foo") )…' > Code 1`] = `
"
  1 | const {foo:bar} = (( require("foo") ));
"
`;

exports[`invalid(32): 'const {foo:bar} = (( require("foo") )…' > Error 1/1 1`] = `
"
> 1 | const {foo:bar} = (( require("foo") ));
    |                      ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {foo as bar} from  "foo" ;
"
`;

exports[`invalid(33): 'const {a   :foo, b:   bar, default   …' > Code 1`] = `
"
  1 | const {a   :foo, b:   bar, default   :   baz}=require("foo");
"
`;

exports[`invalid(33): 'const {a   :foo, b:   bar, default   …' > Error 1/1 1`] = `
"
> 1 | const {a   :foo, b:   bar, default   :   baz}=require("foo");
    |                                               ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {a as foo, b as bar, default as baz} from "foo";
"
`;

exports[`invalid(34): 'const {\\n\\ta   :foo,\\n\\tb:   bar,\\n\\t…' > Code 1`] = `
"
  1 | const {
  2 | 	a   :foo,
  3 | 	b:   bar,
  4 | 	default   :   baz,
  5 | }
  6 | 	=
  7 | 	require("foo");
"
`;

exports[`invalid(34): 'const {\\n\\ta   :foo,\\n\\tb:   bar,\\n\\t…' > Error 1/1 1`] = `
"
  1 | const {
  2 | 	a   :foo,
  3 | 	b:   bar,
  4 | 	default   :   baz,
  5 | }
  6 | 	=
> 7 | 	require("foo");
    | 	^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {
  2 | 	a as foo,
  3 | 	b as bar,
  4 | 	default as baz,
  5 | } from "foo";
"
`;

exports[`invalid(35): 'const {a   :foo, b:   bar, default   …' > Code 1`] = `
"
  1 | const {a   :foo, b:   bar, default   :   baz} = require("foo");
"
`;

exports[`invalid(35): 'const {a   :foo, b:   bar, default   …' > Error 1/1 1`] = `
"
> 1 | const {a   :foo, b:   bar, default   :   baz} = require("foo");
    |                                                 ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {a as foo, b as bar, default as baz} from "foo";
"
`;

exports[`invalid(36): 'const {a   :foo, b:   bar, default   …' > Code 1`] = `
"
  1 | const {a   :foo, b:   bar, default   :   baz} = require( (("foo")) );
"
`;

exports[`invalid(36): 'const {a   :foo, b:   bar, default   …' > Error 1/1 1`] = `
"
> 1 | const {a   :foo, b:   bar, default   :   baz} = require( (("foo")) );
    |                                                 ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {a as foo, b as bar, default as baz} from  "foo" ;
"
`;

exports[`invalid(37): 'const {a   :foo, b:   bar, default   …' > Code 1`] = `
"
  1 | const {a   :foo, b:   bar, default   :   baz} = ((require))("foo");
"
`;

exports[`invalid(37): 'const {a   :foo, b:   bar, default   …' > Error 1/1 1`] = `
"
> 1 | const {a   :foo, b:   bar, default   :   baz} = ((require))("foo");
    |                                                   ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {a as foo, b as bar, default as baz} from "foo";
"
`;

exports[`invalid(38): 'const {a   :foo, b:   bar, default   …' > Code 1`] = `
"
  1 | const {a   :foo, b:   bar, default   :   baz} = (( require("foo") ));
"
`;

exports[`invalid(38): 'const {a   :foo, b:   bar, default   …' > Error 1/1 1`] = `
"
> 1 | const {a   :foo, b:   bar, default   :   baz} = (( require("foo") ));
    |                                                    ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {a as foo, b as bar, default as baz} from  "foo" ;
"
`;

exports[`invalid(39): 'const {a   :foo, b:   bar, default   …' > Code 1`] = `
"
  1 | const {a   :foo, b:   bar, default   :   baz} = (( require("foo") ));
"
`;

exports[`invalid(39): 'const {a   :foo, b:   bar, default   …' > Error 1/1 1`] = `
"
> 1 | const {a   :foo, b:   bar, default   :   baz} = (( require("foo") ));
    |                                                    ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {a as foo, b as bar, default as baz} from  "foo" ;
"
`;

exports[`invalid(40): 'const {} = require("foo");' > Code 1`] = `
"
  1 | const {} = require("foo");
"
`;

exports[`invalid(40): 'const {} = require("foo");' > Error 1/1 1`] = `
"
> 1 | const {} = require("foo");
    |            ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import {} from "foo";
"
`;

exports[`invalid(41): 'const{   }=require("foo");' > Code 1`] = `
"
  1 | const{   }=require("foo");
"
`;

exports[`invalid(41): 'const{   }=require("foo");' > Error 1/1 1`] = `
"
> 1 | const{   }=require("foo");
    |            ^^^^^^^ Do not use "require".

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`import\`.
  1 | import{   } from "foo";
"
`;

exports[`invalid(42): 'const r = require;\\nconst foo = r("fo…' > Code 1`] = `
"
  1 | const r = require;
  2 | const foo = r("foo");
"
`;

exports[`invalid(42): 'const r = require;\\nconst foo = r("fo…' > Error 1/1 1`] = `
"
> 1 | const r = require;
    |           ^^^^^^^ Do not use "require".
  2 | const foo = r("foo");
"
`;

exports[`invalid(43): 'new require("foo")' > Code 1`] = `
"
  1 | new require("foo")
"
`;

exports[`invalid(43): 'new require("foo")' > Error 1/1 1`] = `
"
> 1 | new require("foo")
    |     ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(44): 'require("foo", extraArgument)' > Code 1`] = `
"
  1 | require("foo", extraArgument)
"
`;

exports[`invalid(44): 'require("foo", extraArgument)' > Error 1/1 1`] = `
"
> 1 | require("foo", extraArgument)
    | ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(45): 'const a = require()' > Code 1`] = `
"
  1 | const a = require()
"
`;

exports[`invalid(45): 'const a = require()' > Error 1/1 1`] = `
"
> 1 | const a = require()
    |           ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(46): 'require(..."foo")' > Code 1`] = `
"
  1 | require(..."foo")
"
`;

exports[`invalid(46): 'require(..."foo")' > Error 1/1 1`] = `
"
> 1 | require(..."foo")
    | ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(47): 'require("../" + "file.js")' > Code 1`] = `
"
  1 | require("../" + "file.js")
"
`;

exports[`invalid(47): 'require("../" + "file.js")' > Error 1/1 1`] = `
"
> 1 | require("../" + "file.js")
    | ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(48): 'require(file)' > Code 1`] = `
"
  1 | require(file)
"
`;

exports[`invalid(48): 'require(file)' > Error 1/1 1`] = `
"
> 1 | require(file)
    | ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(49): 'a = require("foo")' > Code 1`] = `
"
  1 | a = require("foo")
"
`;

exports[`invalid(49): 'a = require("foo")' > Error 1/1 1`] = `
"
> 1 | a = require("foo")
    |     ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(50): 'function a(a = require("foo")) {}' > Code 1`] = `
"
  1 | function a(a = require("foo")) {}
"
`;

exports[`invalid(50): 'function a(a = require("foo")) {}' > Error 1/1 1`] = `
"
> 1 | function a(a = require("foo")) {}
    |                ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(51): 'let foo = require("foo");' > Code 1`] = `
"
  1 | let foo = require("foo");
"
`;

exports[`invalid(51): 'let foo = require("foo");' > Error 1/1 1`] = `
"
> 1 | let foo = require("foo");
    |           ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(52): 'const foo = require("foo"), bar = req…' > Code 1`] = `
"
  1 | const foo = require("foo"), bar = require("bar");
"
`;

exports[`invalid(52): 'const foo = require("foo"), bar = req…' > Error 1/2 1`] = `
"
> 1 | const foo = require("foo"), bar = require("bar");
    |             ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(52): 'const foo = require("foo"), bar = req…' > Error 2/2 1`] = `
"
> 1 | const foo = require("foo"), bar = require("bar");
    |                                   ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(53): 'const {[foo]: foo} = require("foo");' > Code 1`] = `
"
  1 | const {[foo]: foo} = require("foo");
"
`;

exports[`invalid(53): 'const {[foo]: foo} = require("foo");' > Error 1/1 1`] = `
"
> 1 | const {[foo]: foo} = require("foo");
    |                      ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(54): 'const {["foo"]: foo} = require("foo");' > Code 1`] = `
"
  1 | const {["foo"]: foo} = require("foo");
"
`;

exports[`invalid(54): 'const {["foo"]: foo} = require("foo");' > Error 1/1 1`] = `
"
> 1 | const {["foo"]: foo} = require("foo");
    |                        ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(55): 'if (foo) require("foo");' > Code 1`] = `
"
  1 | if (foo) require("foo");
"
`;

exports[`invalid(55): 'if (foo) require("foo");' > Error 1/1 1`] = `
"
> 1 | if (foo) require("foo");
    |          ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(56): 'const foo = require\`foo\`;' > Code 1`] = `
"
  1 | const foo = require\`foo\`;
"
`;

exports[`invalid(56): 'const foo = require\`foo\`;' > Error 1/1 1`] = `
"
> 1 | const foo = require\`foo\`;
    |             ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(57): 'function loadModule() {\\n\\treturn req…' > Code 1`] = `
"
  1 | function loadModule() {
  2 | 	return require("foo");
  3 | }
"
`;

exports[`invalid(57): 'function loadModule() {\\n\\treturn req…' > Error 1/1 1`] = `
"
  1 | function loadModule() {
> 2 | 	return require("foo");
    | 	       ^^^^^^^ Do not use "require".
  3 | }
"
`;

exports[`invalid(58): 'function loadModule() {\\n\\tconst foo …' > Code 1`] = `
"
  1 | function loadModule() {
  2 | 	const foo = require("foo");
  3 | 	return foo;
  4 | }
"
`;

exports[`invalid(58): 'function loadModule() {\\n\\tconst foo …' > Error 1/1 1`] = `
"
  1 | function loadModule() {
> 2 | 	const foo = require("foo");
    | 	            ^^^^^^^ Do not use "require".
  3 | 	return foo;
  4 | }
"
`;

exports[`invalid(59): 'const foo = require("foo"), bar = 1;' > Code 1`] = `
"
  1 | const foo = require("foo"), bar = 1;
"
`;

exports[`invalid(59): 'const foo = require("foo"), bar = 1;' > Error 1/1 1`] = `
"
> 1 | const foo = require("foo"), bar = 1;
    |             ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(60): 'const foo = require("foo"), bar = req…' > Code 1`] = `
"
  1 | const foo = require("foo"), bar = require("bar");
"
`;

exports[`invalid(60): 'const foo = require("foo"), bar = req…' > Error 1/2 1`] = `
"
> 1 | const foo = require("foo"), bar = require("bar");
    |             ^^^^^^^ Do not use "require".
"
`;

exports[`invalid(60): 'const foo = require("foo"), bar = req…' > Error 2/2 1`] = `
"
> 1 | const foo = require("foo"), bar = require("bar");
    |                                   ^^^^^^^ Do not use "require".
"
`;
