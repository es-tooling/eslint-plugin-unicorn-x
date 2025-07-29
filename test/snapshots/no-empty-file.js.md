// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '' > Code 1`] = `
"
  1 |
"
`;

exports[`invalid(0): '' > Error 1/1 1`] = `
"
> 1 |
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(0): '' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(1): '\\ufeff' > Code 1`] = `
"
  1 | ﻿
"
`;

exports[`invalid(1): '\\ufeff' > Error 1/1 1`] = `
"
> 1 | ﻿
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(1): '\\ufeff' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(2): ' ' > Code 1`] = `
"
  1 |  
"
`;

exports[`invalid(2): ' ' > Error 1/1 1`] = `
"
> 1 |  
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(2): ' ' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(3): '\\t' > Code 1`] = `
"
  1 | 	
"
`;

exports[`invalid(3): '\\t' > Error 1/1 1`] = `
"
> 1 | 	
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(3): '\\t' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(4): '\\n' > Code 1`] = `
"
  1 |
  2 |
"
`;

exports[`invalid(4): '\\n' > Error 1/1 1`] = `
"
> 1 |
    | ^
> 2 |
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(4): '\\n' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(5): '\\r' > Code 1`] = `
"
  1 |
  2 |
"
`;

exports[`invalid(5): '\\r' > Error 1/1 1`] = `
"
> 1 |
    | ^
> 2 |
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(5): '\\r' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(6): '\\r\\n' > Code 1`] = `
"
  1 |
  2 |
"
`;

exports[`invalid(6): '\\r\\n' > Error 1/1 1`] = `
"
> 1 |
    | ^
> 2 |
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(6): '\\r\\n' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(7): '' > Code 1`] = `
"
  1 |
"
`;

exports[`invalid(7): '' > Error 1/1 1`] = `
"
> 1 |
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(7): '' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(8): '// comment' > Code 1`] = `
"
  1 | // comment
"
`;

exports[`invalid(8): '// comment' > Error 1/1 1`] = `
"
> 1 | // comment
    | ^^^^^^^^^^ Empty files are not allowed.
"
`;

exports[`invalid(8): '// comment' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(9): '/* comment */' > Code 1`] = `
"
  1 | /* comment */
"
`;

exports[`invalid(9): '/* comment */' > Error 1/1 1`] = `
"
> 1 | /* comment */
    | ^^^^^^^^^^^^^ Empty files are not allowed.
"
`;

exports[`invalid(9): '/* comment */' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(10): '#!/usr/bin/env node' > Code 1`] = `
"
  1 | #!/usr/bin/env node
"
`;

exports[`invalid(10): '#!/usr/bin/env node' > Error 1/1 1`] = `
"
> 1 | #!/usr/bin/env node
    | ^^^^^^^^^^^^^^^^^^^ Empty files are not allowed.
"
`;

exports[`invalid(10): '#!/usr/bin/env node' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(11): '\\'use asm\\';' > Code 1`] = `
"
  1 | 'use asm';
"
`;

exports[`invalid(11): '\\'use asm\\';' > Error 1/1 1`] = `
"
> 1 | 'use asm';
    | ^^^^^^^^^^ Empty files are not allowed.
"
`;

exports[`invalid(11): '\\'use asm\\';' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(12): '\\'use strict\\';' > Code 1`] = `
"
  1 | 'use strict';
"
`;

exports[`invalid(12): '\\'use strict\\';' > Error 1/1 1`] = `
"
> 1 | 'use strict';
    | ^^^^^^^^^^^^^ Empty files are not allowed.
"
`;

exports[`invalid(12): '\\'use strict\\';' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(13): '"use strict"' > Code 1`] = `
"
  1 | "use strict"
"
`;

exports[`invalid(13): '"use strict"' > Error 1/1 1`] = `
"
> 1 | "use strict"
    | ^^^^^^^^^^^^ Empty files are not allowed.
"
`;

exports[`invalid(13): '"use strict"' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(14): '""' > Code 1`] = `
"
  1 | ""
"
`;

exports[`invalid(14): '""' > Error 1/1 1`] = `
"
> 1 | ""
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(14): '""' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(15): ';' > Code 1`] = `
"
  1 | ;
"
`;

exports[`invalid(15): ';' > Error 1/1 1`] = `
"
> 1 | ;
    | ^ Empty files are not allowed.
"
`;

exports[`invalid(15): ';' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(16): ';;' > Code 1`] = `
"
  1 | ;;
"
`;

exports[`invalid(16): ';;' > Error 1/1 1`] = `
"
> 1 | ;;
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(16): ';;' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(17): '{}' > Code 1`] = `
"
  1 | {}
"
`;

exports[`invalid(17): '{}' > Error 1/1 1`] = `
"
> 1 | {}
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(17): '{}' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(18): '{;;}' > Code 1`] = `
"
  1 | {;;}
"
`;

exports[`invalid(18): '{;;}' > Error 1/1 1`] = `
"
> 1 | {;;}
    | ^^^^ Empty files are not allowed.
"
`;

exports[`invalid(18): '{;;}' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(19): '{{}}' > Code 1`] = `
"
  1 | {{}}
"
`;

exports[`invalid(19): '{{}}' > Error 1/1 1`] = `
"
> 1 | {{}}
    | ^^^^ Empty files are not allowed.
"
`;

exports[`invalid(19): '{{}}' > Filename 1`] = `
"
example.js
"
`;

exports[`invalid(20): '{}' > Code 1`] = `
"
  1 | {}
"
`;

exports[`invalid(20): '{}' > Error 1/1 1`] = `
"
> 1 | {}
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(20): '{}' > Filename 1`] = `
"
example.mjs
"
`;

exports[`invalid(21): '{}' > Code 1`] = `
"
  1 | {}
"
`;

exports[`invalid(21): '{}' > Error 1/1 1`] = `
"
> 1 | {}
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(21): '{}' > Filename 1`] = `
"
example.cJs
"
`;

exports[`invalid(22): '{}' > Code 1`] = `
"
  1 | {}
"
`;

exports[`invalid(22): '{}' > Error 1/1 1`] = `
"
> 1 | {}
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(22): '{}' > Filename 1`] = `
"
example.ts
"
`;

exports[`invalid(23): '{}' > Code 1`] = `
"
  1 | {}
"
`;

exports[`invalid(23): '{}' > Error 1/1 1`] = `
"
> 1 | {}
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(23): '{}' > Filename 1`] = `
"
example.tsx
"
`;

exports[`invalid(24): '{}' > Code 1`] = `
"
  1 | {}
"
`;

exports[`invalid(24): '{}' > Error 1/1 1`] = `
"
> 1 | {}
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(24): '{}' > Filename 1`] = `
"
example.jsx
"
`;

exports[`invalid(25): '{}' > Code 1`] = `
"
  1 | {}
"
`;

exports[`invalid(25): '{}' > Error 1/1 1`] = `
"
> 1 | {}
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(25): '{}' > Filename 1`] = `
"
example.MTS
"
`;

exports[`invalid(26): '{}' > Code 1`] = `
"
  1 | {}
"
`;

exports[`invalid(26): '{}' > Error 1/1 1`] = `
"
> 1 | {}
    | ^^ Empty files are not allowed.
"
`;

exports[`invalid(26): '{}' > Filename 1`] = `
"
example.cts
"
`;
