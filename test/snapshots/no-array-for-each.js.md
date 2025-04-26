// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.forEach?.(element => bar(element))' > Code 1`] = `
"
  1 | foo.forEach?.(element => bar(element))
"
`;

exports[`invalid(0): 'foo.forEach?.(element => bar(element))' > Error 1/1 1`] = `
"
> 1 | foo.forEach?.(element => bar(element))
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(1): '((  foo.forEach(element => bar(elemen…' > Code 1`] = `
"
  1 | ((  foo.forEach(element => bar(element))  ))
"
`;

exports[`invalid(1): '((  foo.forEach(element => bar(elemen…' > Error 1/1 1`] = `
"
> 1 | ((  foo.forEach(element => bar(element))  ))
    |         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(1): '((  foo.forEach(element => bar(elemen…' > Output 1`] = `
"
  1 |   for (const element of foo) bar(element)  
"
`;

exports[`invalid(2): '((  foo?.forEach(element => bar(eleme…' > Code 1`] = `
"
  1 | ((  foo?.forEach(element => bar(element))  ))
"
`;

exports[`invalid(2): '((  foo?.forEach(element => bar(eleme…' > Error 1/1 1`] = `
"
> 1 | ((  foo?.forEach(element => bar(element))  ))
    |          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(2): '((  foo?.forEach(element => bar(eleme…' > Output 1`] = `
"
  1 |   if (foo) for (const element of foo) bar(element)  
"
`;

exports[`invalid(3): 'foo.forEach(element => bar(element), …' > Code 1`] = `
"
  1 | foo.forEach(element => bar(element), thisArgument)
"
`;

exports[`invalid(3): 'foo.forEach(element => bar(element), …' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => bar(element), thisArgument)
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(4): 'foo?.forEach(element => bar(element),…' > Code 1`] = `
"
  1 | foo?.forEach(element => bar(element), thisArgument)
"
`;

exports[`invalid(4): 'foo?.forEach(element => bar(element),…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => bar(element), thisArgument)
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(5): 'foo.forEach()' > Code 1`] = `
"
  1 | foo.forEach()
"
`;

exports[`invalid(5): 'foo.forEach()' > Error 1/1 1`] = `
"
> 1 | foo.forEach()
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(6): 'foo?.forEach()' > Code 1`] = `
"
  1 | foo?.forEach()
"
`;

exports[`invalid(6): 'foo?.forEach()' > Error 1/1 1`] = `
"
> 1 | foo?.forEach()
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(7): 'const baz = foo.forEach(element => ba…' > Code 1`] = `
"
  1 | const baz = foo.forEach(element => bar(element))
"
`;

exports[`invalid(7): 'const baz = foo.forEach(element => ba…' > Error 1/1 1`] = `
"
> 1 | const baz = foo.forEach(element => bar(element))
    |                 ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(8): 'const baz = foo?.forEach(element => b…' > Code 1`] = `
"
  1 | const baz = foo?.forEach(element => bar(element))
"
`;

exports[`invalid(8): 'const baz = foo?.forEach(element => b…' > Error 1/1 1`] = `
"
> 1 | const baz = foo?.forEach(element => bar(element))
    |                  ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(9): 'foo.forEach(bar)' > Code 1`] = `
"
  1 | foo.forEach(bar)
"
`;

exports[`invalid(9): 'foo.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | foo.forEach(bar)
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(10): 'foo?.forEach(bar)' > Code 1`] = `
"
  1 | foo?.forEach(bar)
"
`;

exports[`invalid(10): 'foo?.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(bar)
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(11): 'foo.forEach(async function(element) {…' > Code 1`] = `
"
  1 | foo.forEach(async function(element) {})
"
`;

exports[`invalid(11): 'foo.forEach(async function(element) {…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(async function(element) {})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(12): 'foo?.forEach(async function(element) …' > Code 1`] = `
"
  1 | foo?.forEach(async function(element) {})
"
`;

exports[`invalid(12): 'foo?.forEach(async function(element) …' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(async function(element) {})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(13): 'foo.forEach(function * (element) {})' > Code 1`] = `
"
  1 | foo.forEach(function * (element) {})
"
`;

exports[`invalid(13): 'foo.forEach(function * (element) {})' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function * (element) {})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(14): 'foo?.forEach(function * (element) {})' > Code 1`] = `
"
  1 | foo?.forEach(function * (element) {})
"
`;

exports[`invalid(14): 'foo?.forEach(function * (element) {})' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function * (element) {})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(15): 'foo.forEach(() => bar())' > Code 1`] = `
"
  1 | foo.forEach(() => bar())
"
`;

exports[`invalid(15): 'foo.forEach(() => bar())' > Error 1/1 1`] = `
"
> 1 | foo.forEach(() => bar())
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(16): 'foo?.forEach(() => bar())' > Code 1`] = `
"
  1 | foo?.forEach(() => bar())
"
`;

exports[`invalid(16): 'foo?.forEach(() => bar())' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(() => bar())
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(17): 'foo.forEach((element, index, array) =…' > Code 1`] = `
"
  1 | foo.forEach((element, index, array) => bar())
"
`;

exports[`invalid(17): 'foo.forEach((element, index, array) =…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, index, array) => bar())
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(18): 'foo?.forEach((element, index, array) …' > Code 1`] = `
"
  1 | foo?.forEach((element, index, array) => bar())
"
`;

exports[`invalid(18): 'foo?.forEach((element, index, array) …' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element, index, array) => bar())
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(19): 'property.forEach(({property}) => bar(…' > Code 1`] = `
"
  1 | property.forEach(({property}) => bar(property))
"
`;

exports[`invalid(19): 'property.forEach(({property}) => bar(…' > Error 1/1 1`] = `
"
> 1 | property.forEach(({property}) => bar(property))
    |          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(20): 'property?.forEach(({property}) => bar…' > Code 1`] = `
"
  1 | property?.forEach(({property}) => bar(property))
"
`;

exports[`invalid(20): 'property?.forEach(({property}) => bar…' > Error 1/1 1`] = `
"
> 1 | property?.forEach(({property}) => bar(property))
    |           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(21): '() => foo.forEach()' > Code 1`] = `
"
  1 | () => foo.forEach()
"
`;

exports[`invalid(21): '() => foo.forEach()' > Error 1/1 1`] = `
"
> 1 | () => foo.forEach()
    |           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(22): '() => foo?.forEach()' > Code 1`] = `
"
  1 | () => foo?.forEach()
"
`;

exports[`invalid(22): '() => foo?.forEach()' > Error 1/1 1`] = `
"
> 1 | () => foo?.forEach()
    |            ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(23): 'foo.forEach((element = {}) => call(el…' > Code 1`] = `
"
  1 | foo.forEach((element = {}) => call(element))
"
`;

exports[`invalid(23): 'foo.forEach((element = {}) => call(el…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element = {}) => call(element))
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(24): 'foo?.forEach((element = {}) => call(e…' > Code 1`] = `
"
  1 | foo?.forEach((element = {}) => call(element))
"
`;

exports[`invalid(24): 'foo?.forEach((element = {}) => call(e…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element = {}) => call(element))
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(25): 'foo.forEach(element => {\\n\\tdo {\\n\\t\\…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	do {
  3 | 		return
  4 | 	} while (element)
  5 | });
"
`;

exports[`invalid(25): 'foo.forEach(element => {\\n\\tdo {\\n\\t\\…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	do {
  3 | 		return
  4 | 	} while (element)
  5 | });
"
`;

exports[`invalid(26): 'foo?.forEach(element => {\\n\\tdo {\\n\\t…' > Code 1`] = `
"
  1 | foo?.forEach(element => {
  2 | 	do {
  3 | 		return
  4 | 	} while (element)
  5 | });
"
`;

exports[`invalid(26): 'foo?.forEach(element => {\\n\\tdo {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	do {
  3 | 		return
  4 | 	} while (element)
  5 | });
"
`;

exports[`invalid(27): 'foo.forEach(element => {\\n\\twhile (el…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	while (element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(27): 'foo.forEach(element => {\\n\\twhile (el…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	while (element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(28): 'foo?.forEach(element => {\\n\\twhile (e…' > Code 1`] = `
"
  1 | foo?.forEach(element => {
  2 | 	while (element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(28): 'foo?.forEach(element => {\\n\\twhile (e…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	while (element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(29): 'foo.forEach(element => {\\n\\tfor (let …' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	for (let i = 0; i < 2; i++) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(29): 'foo.forEach(element => {\\n\\tfor (let …' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (let i = 0; i < 2; i++) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(30): 'foo?.forEach(element => {\\n\\tfor (let…' > Code 1`] = `
"
  1 | foo?.forEach(element => {
  2 | 	for (let i = 0; i < 2; i++) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(30): 'foo?.forEach(element => {\\n\\tfor (let…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (let i = 0; i < 2; i++) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(31): 'foo.forEach(element => {\\n\\tfor (let …' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	for (let i in element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(31): 'foo.forEach(element => {\\n\\tfor (let …' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (let i in element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(32): 'foo?.forEach(element => {\\n\\tfor (let…' > Code 1`] = `
"
  1 | foo?.forEach(element => {
  2 | 	for (let i in element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(32): 'foo?.forEach(element => {\\n\\tfor (let…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (let i in element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(33): 'foo.forEach(element => {\\n\\tfor (let …' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	for (let i of element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(33): 'foo.forEach(element => {\\n\\tfor (let …' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (let i of element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(34): 'foo?.forEach(element => {\\n\\tfor (let…' > Code 1`] = `
"
  1 | foo?.forEach(element => {
  2 | 	for (let i of element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(34): 'foo?.forEach(element => {\\n\\tfor (let…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (let i of element) {
  3 | 		return;
  4 | 	}
  5 | });
"
`;

exports[`invalid(35): 'foo.forEach(element => {\\n\\tswitch (e…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	switch (element) {
  3 | 		case 1:
  4 | 			break;
  5 | 		case 2:
  6 | 			return;
  7 | 	}
  8 | });
"
`;

exports[`invalid(35): 'foo.forEach(element => {\\n\\tswitch (e…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	switch (element) {
  3 | 		case 1:
  4 | 			break;
  5 | 		case 2:
  6 | 			return;
  7 | 	}
  8 | });
"
`;

exports[`invalid(35): 'foo.forEach(element => {\\n\\tswitch (e…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	switch (element) {
  3 | 		case 1:
  4 | 			break;
  5 | 		case 2:
  6 | 			continue;
  7 | 	}
  8 | }
"
`;

exports[`invalid(36): 'foo?.forEach(element => {\\n\\tswitch (…' > Code 1`] = `
"
  1 | foo?.forEach(element => {
  2 | 	switch (element) {
  3 | 		case 1:
  4 | 			break;
  5 | 		case 2:
  6 | 			return;
  7 | 	}
  8 | });
"
`;

exports[`invalid(36): 'foo?.forEach(element => {\\n\\tswitch (…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	switch (element) {
  3 | 		case 1:
  4 | 			break;
  5 | 		case 2:
  6 | 			return;
  7 | 	}
  8 | });
"
`;

exports[`invalid(36): 'foo?.forEach(element => {\\n\\tswitch (…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	switch (element) {
  3 | 		case 1:
  4 | 			break;
  5 | 		case 2:
  6 | 			continue;
  7 | 	}
  8 | }
"
`;

exports[`invalid(37): 'foo.forEach(foo => bar());' > Code 1`] = `
"
  1 | foo.forEach(foo => bar());
"
`;

exports[`invalid(37): 'foo.forEach(foo => bar());' > Error 1/1 1`] = `
"
> 1 | foo.forEach(foo => bar());
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(38): 'foo?.forEach(foo => bar());' > Code 1`] = `
"
  1 | foo?.forEach(foo => bar());
"
`;

exports[`invalid(38): 'foo?.forEach(foo => bar());' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(foo => bar());
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(39): 'const foo = [];\\nfoo.forEach(foo => b…' > Code 1`] = `
"
  1 | const foo = [];
  2 | foo.forEach(foo => bar());
"
`;

exports[`invalid(39): 'const foo = [];\\nfoo.forEach(foo => b…' > Error 1/1 1`] = `
"
  1 | const foo = [];
> 2 | foo.forEach(foo => bar());
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(40): 'const foo = [];\\nfoo?.forEach(foo => …' > Code 1`] = `
"
  1 | const foo = [];
  2 | foo?.forEach(foo => bar());
"
`;

exports[`invalid(40): 'const foo = [];\\nfoo?.forEach(foo => …' > Error 1/1 1`] = `
"
  1 | const foo = [];
> 2 | foo?.forEach(foo => bar());
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(41): 'const foo = [];\\nfunction unicorn() {…' > Code 1`] = `
"
  1 | const foo = [];
  2 | function unicorn() {
  3 | 	foo.forEach(foo => bar());
  4 | }
"
`;

exports[`invalid(41): 'const foo = [];\\nfunction unicorn() {…' > Error 1/1 1`] = `
"
  1 | const foo = [];
  2 | function unicorn() {
> 3 | 	foo.forEach(foo => bar());
    | 	    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  4 | }
"
`;

exports[`invalid(42): 'const foo = [];\\nfunction unicorn() {…' > Code 1`] = `
"
  1 | const foo = [];
  2 | function unicorn() {
  3 | 	foo?.forEach(foo => bar());
  4 | }
"
`;

exports[`invalid(42): 'const foo = [];\\nfunction unicorn() {…' > Error 1/1 1`] = `
"
  1 | const foo = [];
  2 | function unicorn() {
> 3 | 	foo?.forEach(foo => bar());
    | 	     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  4 | }
"
`;

exports[`invalid(43): 'index.forEach((a, index) => bar());' > Code 1`] = `
"
  1 | index.forEach((a, index) => bar());
"
`;

exports[`invalid(43): 'index.forEach((a, index) => bar());' > Error 1/1 1`] = `
"
> 1 | index.forEach((a, index) => bar());
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(44): 'index?.forEach((a, index) => bar());' > Code 1`] = `
"
  1 | index?.forEach((a, index) => bar());
"
`;

exports[`invalid(44): 'index?.forEach((a, index) => bar());' > Error 1/1 1`] = `
"
> 1 | index?.forEach((a, index) => bar());
    |        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(45): 'const index = [];\\nindex.forEach((a, …' > Code 1`] = `
"
  1 | const index = [];
  2 | index.forEach((a, index) => bar());
"
`;

exports[`invalid(45): 'const index = [];\\nindex.forEach((a, …' > Error 1/1 1`] = `
"
  1 | const index = [];
> 2 | index.forEach((a, index) => bar());
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(46): 'const index = [];\\nindex?.forEach((a,…' > Code 1`] = `
"
  1 | const index = [];
  2 | index?.forEach((a, index) => bar());
"
`;

exports[`invalid(46): 'const index = [];\\nindex?.forEach((a,…' > Error 1/1 1`] = `
"
  1 | const index = [];
> 2 | index?.forEach((a, index) => bar());
    |        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(47): 'const index = [];\\nfunction unicorn()…' > Code 1`] = `
"
  1 | const index = [];
  2 | function unicorn() {
  3 | 	index.forEach((a, index) => bar());
  4 | }
"
`;

exports[`invalid(47): 'const index = [];\\nfunction unicorn()…' > Error 1/1 1`] = `
"
  1 | const index = [];
  2 | function unicorn() {
> 3 | 	index.forEach((a, index) => bar());
    | 	      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  4 | }
"
`;

exports[`invalid(48): 'const index = [];\\nfunction unicorn()…' > Code 1`] = `
"
  1 | const index = [];
  2 | function unicorn() {
  3 | 	index?.forEach((a, index) => bar());
  4 | }
"
`;

exports[`invalid(48): 'const index = [];\\nfunction unicorn()…' > Error 1/1 1`] = `
"
  1 | const index = [];
  2 | function unicorn() {
> 3 | 	index?.forEach((a, index) => bar());
    | 	       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  4 | }
"
`;

exports[`invalid(49): 'a[foo].forEach(foo => bar());' > Code 1`] = `
"
  1 | a[foo].forEach(foo => bar());
"
`;

exports[`invalid(49): 'a[foo].forEach(foo => bar());' > Error 1/1 1`] = `
"
> 1 | a[foo].forEach(foo => bar());
    |        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(50): 'a[foo]?.forEach(foo => bar());' > Code 1`] = `
"
  1 | a[foo]?.forEach(foo => bar());
"
`;

exports[`invalid(50): 'a[foo]?.forEach(foo => bar());' > Error 1/1 1`] = `
"
> 1 | a[foo]?.forEach(foo => bar());
    |         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(51): 'const foo = 1;\\na[foo].forEach(foo =>…' > Code 1`] = `
"
  1 | const foo = 1;
  2 | a[foo].forEach(foo => bar());
"
`;

exports[`invalid(51): 'const foo = 1;\\na[foo].forEach(foo =>…' > Error 1/1 1`] = `
"
  1 | const foo = 1;
> 2 | a[foo].forEach(foo => bar());
    |        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(52): 'const foo = 1;\\na[foo]?.forEach(foo =…' > Code 1`] = `
"
  1 | const foo = 1;
  2 | a[foo]?.forEach(foo => bar());
"
`;

exports[`invalid(52): 'const foo = 1;\\na[foo]?.forEach(foo =…' > Error 1/1 1`] = `
"
  1 | const foo = 1;
> 2 | a[foo]?.forEach(foo => bar());
    |         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(53): 'const foo = 1;\\nfunction unicorn() {\\…' > Code 1`] = `
"
  1 | const foo = 1;
  2 | function unicorn() {
  3 | 	a[foo].forEach(foo => bar());
  4 | }
"
`;

exports[`invalid(53): 'const foo = 1;\\nfunction unicorn() {\\…' > Error 1/1 1`] = `
"
  1 | const foo = 1;
  2 | function unicorn() {
> 3 | 	a[foo].forEach(foo => bar());
    | 	       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  4 | }
"
`;

exports[`invalid(54): 'const foo = 1;\\nfunction unicorn() {\\…' > Code 1`] = `
"
  1 | const foo = 1;
  2 | function unicorn() {
  3 | 	a[foo]?.forEach(foo => bar());
  4 | }
"
`;

exports[`invalid(54): 'const foo = 1;\\nfunction unicorn() {\\…' > Error 1/1 1`] = `
"
  1 | const foo = 1;
  2 | function unicorn() {
> 3 | 	a[foo]?.forEach(foo => bar());
    | 	        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  4 | }
"
`;

exports[`invalid(55): 'a[index].forEach((b, index) => bar());' > Code 1`] = `
"
  1 | a[index].forEach((b, index) => bar());
"
`;

exports[`invalid(55): 'a[index].forEach((b, index) => bar());' > Error 1/1 1`] = `
"
> 1 | a[index].forEach((b, index) => bar());
    |          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(56): 'a[index]?.forEach((b, index) => bar()…' > Code 1`] = `
"
  1 | a[index]?.forEach((b, index) => bar());
"
`;

exports[`invalid(56): 'a[index]?.forEach((b, index) => bar()…' > Error 1/1 1`] = `
"
> 1 | a[index]?.forEach((b, index) => bar());
    |           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(57): 'a((foo) => foo).forEach(foo => bar());' > Code 1`] = `
"
  1 | a((foo) => foo).forEach(foo => bar());
"
`;

exports[`invalid(57): 'a((foo) => foo).forEach(foo => bar());' > Error 1/1 1`] = `
"
> 1 | a((foo) => foo).forEach(foo => bar());
    |                 ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(57): 'a((foo) => foo).forEach(foo => bar());' > Output 1`] = `
"
  1 | for (const foo of a((foo) => foo)) bar();
"
`;

exports[`invalid(58): 'a((foo) => foo)?.forEach(foo => bar()…' > Code 1`] = `
"
  1 | a((foo) => foo)?.forEach(foo => bar());
"
`;

exports[`invalid(58): 'a((foo) => foo)?.forEach(foo => bar()…' > Error 1/1 1`] = `
"
> 1 | a((foo) => foo)?.forEach(foo => bar());
    |                  ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`for…of\`.
  1 | if (a((foo) => foo)) for (const foo of a((foo) => foo)) bar();
"
`;

exports[`invalid(59): 'a((foo, index) => foo + index).forEac…' > Code 1`] = `
"
  1 | a((foo, index) => foo + index).forEach((foo, index) => bar());
"
`;

exports[`invalid(59): 'a((foo, index) => foo + index).forEac…' > Error 1/1 1`] = `
"
> 1 | a((foo, index) => foo + index).forEach((foo, index) => bar());
    |                                ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(59): 'a((foo, index) => foo + index).forEac…' > Output 1`] = `
"
  1 | for (const [index, foo] of a((foo, index) => foo + index).entries()) bar();
"
`;

exports[`invalid(60): 'a((foo, index) => foo + index)?.forEa…' > Code 1`] = `
"
  1 | a((foo, index) => foo + index)?.forEach((foo, index) => bar());
"
`;

exports[`invalid(60): 'a((foo, index) => foo + index)?.forEa…' > Error 1/1 1`] = `
"
> 1 | a((foo, index) => foo + index)?.forEach((foo, index) => bar());
    |                                 ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`for…of\`.
  1 | if (a((foo, index) => foo + index)) for (const [index, foo] of a((foo, index) => foo + index).entries()) bar();
"
`;

exports[`invalid(61): 'const foo = [];\\nconst index = 1;\\na.…' > Code 1`] = `
"
  1 | const foo = [];
  2 | const index = 1;
  3 | a.forEach((foo, index) => foo[index]);
"
`;

exports[`invalid(61): 'const foo = [];\\nconst index = 1;\\na.…' > Error 1/1 1`] = `
"
  1 | const foo = [];
  2 | const index = 1;
> 3 | a.forEach((foo, index) => foo[index]);
    |   ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(61): 'const foo = [];\\nconst index = 1;\\na.…' > Output 1`] = `
"
  1 | const foo = [];
  2 | const index = 1;
  3 | for (const [index, foo] of a.entries()) foo[index];
"
`;

exports[`invalid(62): 'const foo = [];\\nconst index = 1;\\na?…' > Code 1`] = `
"
  1 | const foo = [];
  2 | const index = 1;
  3 | a?.forEach((foo, index) => foo[index]);
"
`;

exports[`invalid(62): 'const foo = [];\\nconst index = 1;\\na?…' > Error 1/1 1`] = `
"
  1 | const foo = [];
  2 | const index = 1;
> 3 | a?.forEach((foo, index) => foo[index]);
    |    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(62): 'const foo = [];\\nconst index = 1;\\na?…' > Output 1`] = `
"
  1 | const foo = [];
  2 | const index = 1;
  3 | if (a) for (const [index, foo] of a.entries()) foo[index];
"
`;

exports[`invalid(63): 'foo.forEach(function a(element) {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach(function a(element) {
  2 | 	bar(a)
  3 | })
"
`;

exports[`invalid(63): 'foo.forEach(function a(element) {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function a(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(a)
  3 | })
"
`;

exports[`invalid(64): 'foo?.forEach(function a(element) {\\n\\…' > Code 1`] = `
"
  1 | foo?.forEach(function a(element) {
  2 | 	bar(a)
  3 | })
"
`;

exports[`invalid(64): 'foo?.forEach(function a(element) {\\n\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function a(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(a)
  3 | })
"
`;

exports[`invalid(65): 'foo.forEach(function a(element) {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach(function a(element) {
  2 | 	function b() {
  3 | 		bar(a)
  4 | 	}
  5 | })
"
`;

exports[`invalid(65): 'foo.forEach(function a(element) {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function a(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	function b() {
  3 | 		bar(a)
  4 | 	}
  5 | })
"
`;

exports[`invalid(66): 'foo?.forEach(function a(element) {\\n\\…' > Code 1`] = `
"
  1 | foo?.forEach(function a(element) {
  2 | 	function b() {
  3 | 		bar(a)
  4 | 	}
  5 | })
"
`;

exports[`invalid(66): 'foo?.forEach(function a(element) {\\n\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function a(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	function b() {
  3 | 		bar(a)
  4 | 	}
  5 | })
"
`;

exports[`invalid(67): 'foo.forEach(function a(element) {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach(function a(element) {
  2 | 	function b(a) {
  3 | 		bar(a)
  4 | 	}
  5 | })
"
`;

exports[`invalid(67): 'foo.forEach(function a(element) {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function a(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	function b(a) {
  3 | 		bar(a)
  4 | 	}
  5 | })
"
`;

exports[`invalid(67): 'foo.forEach(function a(element) {\\n\\t…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	function b(a) {
  3 | 		bar(a)
  4 | 	}
  5 | }
"
`;

exports[`invalid(68): 'foo?.forEach(function a(element) {\\n\\…' > Code 1`] = `
"
  1 | foo?.forEach(function a(element) {
  2 | 	function b(a) {
  3 | 		bar(a)
  4 | 	}
  5 | })
"
`;

exports[`invalid(68): 'foo?.forEach(function a(element) {\\n\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function a(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	function b(a) {
  3 | 		bar(a)
  4 | 	}
  5 | })
"
`;

exports[`invalid(68): 'foo?.forEach(function a(element) {\\n\\…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	function b(a) {
  3 | 		bar(a)
  4 | 	}
  5 | }
"
`;

exports[`invalid(69): 'foo.forEach(function(element) {\\n\\tba…' > Code 1`] = `
"
  1 | foo.forEach(function(element) {
  2 | 	bar(this)
  3 | })
"
`;

exports[`invalid(69): 'foo.forEach(function(element) {\\n\\tba…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(this)
  3 | })
"
`;

exports[`invalid(70): 'foo?.forEach(function(element) {\\n\\tb…' > Code 1`] = `
"
  1 | foo?.forEach(function(element) {
  2 | 	bar(this)
  3 | })
"
`;

exports[`invalid(70): 'foo?.forEach(function(element) {\\n\\tb…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(this)
  3 | })
"
`;

exports[`invalid(71): 'foo.forEach(function(element) {\\n\\tfu…' > Code 1`] = `
"
  1 | foo.forEach(function(element) {
  2 | 	function b() {
  3 | 		bar(this)
  4 | 	}
  5 | })
"
`;

exports[`invalid(71): 'foo.forEach(function(element) {\\n\\tfu…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	function b() {
  3 | 		bar(this)
  4 | 	}
  5 | })
"
`;

exports[`invalid(71): 'foo.forEach(function(element) {\\n\\tfu…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	function b() {
  3 | 		bar(this)
  4 | 	}
  5 | }
"
`;

exports[`invalid(72): 'foo?.forEach(function(element) {\\n\\tf…' > Code 1`] = `
"
  1 | foo?.forEach(function(element) {
  2 | 	function b() {
  3 | 		bar(this)
  4 | 	}
  5 | })
"
`;

exports[`invalid(72): 'foo?.forEach(function(element) {\\n\\tf…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	function b() {
  3 | 		bar(this)
  4 | 	}
  5 | })
"
`;

exports[`invalid(72): 'foo?.forEach(function(element) {\\n\\tf…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	function b() {
  3 | 		bar(this)
  4 | 	}
  5 | }
"
`;

exports[`invalid(73): 'foo.forEach(function(element) {\\n\\tco…' > Code 1`] = `
"
  1 | foo.forEach(function(element) {
  2 | 	const x = b => {
  3 | 		bar(this)
  4 | 	}
  5 | })
"
`;

exports[`invalid(73): 'foo.forEach(function(element) {\\n\\tco…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	const x = b => {
  3 | 		bar(this)
  4 | 	}
  5 | })
"
`;

exports[`invalid(73): 'foo.forEach(function(element) {\\n\\tco…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	const x = b => {
  3 | 		bar(this)
  4 | 	}
  5 | }
"
`;

exports[`invalid(74): 'foo?.forEach(function(element) {\\n\\tc…' > Code 1`] = `
"
  1 | foo?.forEach(function(element) {
  2 | 	const x = b => {
  3 | 		bar(this)
  4 | 	}
  5 | })
"
`;

exports[`invalid(74): 'foo?.forEach(function(element) {\\n\\tc…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	const x = b => {
  3 | 		bar(this)
  4 | 	}
  5 | })
"
`;

exports[`invalid(74): 'foo?.forEach(function(element) {\\n\\tc…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	const x = b => {
  3 | 		bar(this)
  4 | 	}
  5 | }
"
`;

exports[`invalid(75): 'foo.forEach((element) => {\\n\\tbar(thi…' > Code 1`] = `
"
  1 | foo.forEach((element) => {
  2 | 	bar(this)
  3 | })
"
`;

exports[`invalid(75): 'foo.forEach((element) => {\\n\\tbar(thi…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(this)
  3 | })
"
`;

exports[`invalid(75): 'foo.forEach((element) => {\\n\\tbar(thi…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(this)
  3 | }
"
`;

exports[`invalid(76): 'foo?.forEach((element) => {\\n\\tbar(th…' > Code 1`] = `
"
  1 | foo?.forEach((element) => {
  2 | 	bar(this)
  3 | })
"
`;

exports[`invalid(76): 'foo?.forEach((element) => {\\n\\tbar(th…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(this)
  3 | })
"
`;

exports[`invalid(76): 'foo?.forEach((element) => {\\n\\tbar(th…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(this)
  3 | }
"
`;

exports[`invalid(77): 'foo.forEach(function(element) {\\n\\tba…' > Code 1`] = `
"
  1 | foo.forEach(function(element) {
  2 | 	bar(arguments)
  3 | })
"
`;

exports[`invalid(77): 'foo.forEach(function(element) {\\n\\tba…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(arguments)
  3 | })
"
`;

exports[`invalid(78): 'foo?.forEach(function(element) {\\n\\tb…' > Code 1`] = `
"
  1 | foo?.forEach(function(element) {
  2 | 	bar(arguments)
  3 | })
"
`;

exports[`invalid(78): 'foo?.forEach(function(element) {\\n\\tb…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(arguments)
  3 | })
"
`;

exports[`invalid(79): 'foo.forEach(function(element) {\\n\\tfu…' > Code 1`] = `
"
  1 | foo.forEach(function(element) {
  2 | 	function b() {
  3 | 		bar(arguments)
  4 | 	}
  5 | })
"
`;

exports[`invalid(79): 'foo.forEach(function(element) {\\n\\tfu…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	function b() {
  3 | 		bar(arguments)
  4 | 	}
  5 | })
"
`;

exports[`invalid(79): 'foo.forEach(function(element) {\\n\\tfu…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	function b() {
  3 | 		bar(arguments)
  4 | 	}
  5 | }
"
`;

exports[`invalid(80): 'foo?.forEach(function(element) {\\n\\tf…' > Code 1`] = `
"
  1 | foo?.forEach(function(element) {
  2 | 	function b() {
  3 | 		bar(arguments)
  4 | 	}
  5 | })
"
`;

exports[`invalid(80): 'foo?.forEach(function(element) {\\n\\tf…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	function b() {
  3 | 		bar(arguments)
  4 | 	}
  5 | })
"
`;

exports[`invalid(80): 'foo?.forEach(function(element) {\\n\\tf…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	function b() {
  3 | 		bar(arguments)
  4 | 	}
  5 | }
"
`;

exports[`invalid(81): 'foo.forEach(function(element) {\\n\\tco…' > Code 1`] = `
"
  1 | foo.forEach(function(element) {
  2 | 	const b = () => {
  3 | 		bar(arguments)
  4 | 	}
  5 | })
"
`;

exports[`invalid(81): 'foo.forEach(function(element) {\\n\\tco…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	const b = () => {
  3 | 		bar(arguments)
  4 | 	}
  5 | })
"
`;

exports[`invalid(81): 'foo.forEach(function(element) {\\n\\tco…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	const b = () => {
  3 | 		bar(arguments)
  4 | 	}
  5 | }
"
`;

exports[`invalid(82): 'foo?.forEach(function(element) {\\n\\tc…' > Code 1`] = `
"
  1 | foo?.forEach(function(element) {
  2 | 	const b = () => {
  3 | 		bar(arguments)
  4 | 	}
  5 | })
"
`;

exports[`invalid(82): 'foo?.forEach(function(element) {\\n\\tc…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	const b = () => {
  3 | 		bar(arguments)
  4 | 	}
  5 | })
"
`;

exports[`invalid(82): 'foo?.forEach(function(element) {\\n\\tc…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	const b = () => {
  3 | 		bar(arguments)
  4 | 	}
  5 | }
"
`;

exports[`invalid(83): 'foo.forEach((element) => {\\n\\tbar(arg…' > Code 1`] = `
"
  1 | foo.forEach((element) => {
  2 | 	bar(arguments)
  3 | })
"
`;

exports[`invalid(83): 'foo.forEach((element) => {\\n\\tbar(arg…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(arguments)
  3 | })
"
`;

exports[`invalid(83): 'foo.forEach((element) => {\\n\\tbar(arg…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(arguments)
  3 | }
"
`;

exports[`invalid(84): 'foo?.forEach((element) => {\\n\\tbar(ar…' > Code 1`] = `
"
  1 | foo?.forEach((element) => {
  2 | 	bar(arguments)
  3 | })
"
`;

exports[`invalid(84): 'foo?.forEach((element) => {\\n\\tbar(ar…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(arguments)
  3 | })
"
`;

exports[`invalid(84): 'foo?.forEach((element) => {\\n\\tbar(ar…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(arguments)
  3 | }
"
`;

exports[`invalid(85): 'a = foo?.bar.forEach((element) => bar…' > Code 1`] = `
"
  1 | a = foo?.bar.forEach((element) => bar(element));
"
`;

exports[`invalid(85): 'a = foo?.bar.forEach((element) => bar…' > Error 1/1 1`] = `
"
> 1 | a = foo?.bar.forEach((element) => bar(element));
    |              ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(86): 'a = foo?.bar?.forEach((element) => ba…' > Code 1`] = `
"
  1 | a = foo?.bar?.forEach((element) => bar(element));
"
`;

exports[`invalid(86): 'a = foo?.bar?.forEach((element) => ba…' > Error 1/1 1`] = `
"
> 1 | a = foo?.bar?.forEach((element) => bar(element));
    |               ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(87): 'foo.forEach(function (element) {\\n\\tb…' > Code 1`] = `
"
  1 | foo.forEach(function (element) {
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(87): 'foo.forEach(function (element) {\\n\\tb…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function (element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(87): 'foo.forEach(function (element) {\\n\\tb…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(88): 'foo?.forEach(function (element) {\\n\\t…' > Code 1`] = `
"
  1 | foo?.forEach(function (element) {
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(88): 'foo?.forEach(function (element) {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function (element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(88): 'foo?.forEach(function (element) {\\n\\t…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(89): 'foo.forEach(function withName(element…' > Code 1`] = `
"
  1 | foo.forEach(function withName(element) {
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(89): 'foo.forEach(function withName(element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function withName(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(89): 'foo.forEach(function withName(element…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(90): 'foo?.forEach(function withName(elemen…' > Code 1`] = `
"
  1 | foo?.forEach(function withName(element) {
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(90): 'foo?.forEach(function withName(elemen…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function withName(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(90): 'foo?.forEach(function withName(elemen…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(91): 'foo.forEach((element) => {\\n\\tbar(ele…' > Code 1`] = `
"
  1 | foo.forEach((element) => {
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(91): 'foo.forEach((element) => {\\n\\tbar(ele…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(91): 'foo.forEach((element) => {\\n\\tbar(ele…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(92): 'foo?.forEach((element) => {\\n\\tbar(el…' > Code 1`] = `
"
  1 | foo?.forEach((element) => {
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(92): 'foo?.forEach((element) => {\\n\\tbar(el…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | });
"
`;

exports[`invalid(92): 'foo?.forEach((element) => {\\n\\tbar(el…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(93): 'foo.forEach((element) => bar(element)…' > Code 1`] = `
"
  1 | foo.forEach((element) => bar(element));
"
`;

exports[`invalid(93): 'foo.forEach((element) => bar(element)…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element) => bar(element));
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(93): 'foo.forEach((element) => bar(element)…' > Output 1`] = `
"
  1 | for (const element of foo) bar(element);
"
`;

exports[`invalid(94): 'foo?.forEach((element) => bar(element…' > Code 1`] = `
"
  1 | foo?.forEach((element) => bar(element));
"
`;

exports[`invalid(94): 'foo?.forEach((element) => bar(element…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element) => bar(element));
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(94): 'foo?.forEach((element) => bar(element…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) bar(element);
"
`;

exports[`invalid(95): 'foo.forEach(function (element, index)…' > Code 1`] = `
"
  1 | foo.forEach(function (element, index) {
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(95): 'foo.forEach(function (element, index)…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function (element, index) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(95): 'foo.forEach(function (element, index)…' > Output 1`] = `
"
  1 | for (const [index, element] of foo.entries()) {
  2 | 	bar(element, index);
  3 | }
"
`;

exports[`invalid(96): 'foo?.forEach(function (element, index…' > Code 1`] = `
"
  1 | foo?.forEach(function (element, index) {
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(96): 'foo?.forEach(function (element, index…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function (element, index) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(96): 'foo?.forEach(function (element, index…' > Output 1`] = `
"
  1 | if (foo) for (const [index, element] of foo.entries()) {
  2 | 	bar(element, index);
  3 | }
"
`;

exports[`invalid(97): 'foo.forEach(function withName(element…' > Code 1`] = `
"
  1 | foo.forEach(function withName(element, index) {
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(97): 'foo.forEach(function withName(element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function withName(element, index) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(97): 'foo.forEach(function withName(element…' > Output 1`] = `
"
  1 | for (const [index, element] of foo.entries()) {
  2 | 	bar(element, index);
  3 | }
"
`;

exports[`invalid(98): 'foo?.forEach(function withName(elemen…' > Code 1`] = `
"
  1 | foo?.forEach(function withName(element, index) {
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(98): 'foo?.forEach(function withName(elemen…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function withName(element, index) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(98): 'foo?.forEach(function withName(elemen…' > Output 1`] = `
"
  1 | if (foo) for (const [index, element] of foo.entries()) {
  2 | 	bar(element, index);
  3 | }
"
`;

exports[`invalid(99): 'foo.forEach((element, index) => {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach((element, index) => {
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(99): 'foo.forEach((element, index) => {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, index) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(99): 'foo.forEach((element, index) => {\\n\\t…' > Output 1`] = `
"
  1 | for (const [index, element] of foo.entries()) {
  2 | 	bar(element, index);
  3 | }
"
`;

exports[`invalid(100): 'foo?.forEach((element, index) => {\\n\\…' > Code 1`] = `
"
  1 | foo?.forEach((element, index) => {
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(100): 'foo?.forEach((element, index) => {\\n\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element, index) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element, index);
  3 | });
"
`;

exports[`invalid(100): 'foo?.forEach((element, index) => {\\n\\…' > Output 1`] = `
"
  1 | if (foo) for (const [index, element] of foo.entries()) {
  2 | 	bar(element, index);
  3 | }
"
`;

exports[`invalid(101): 'foo.forEach((element, index) => bar(e…' > Code 1`] = `
"
  1 | foo.forEach((element, index) => bar(element, index));
"
`;

exports[`invalid(101): 'foo.forEach((element, index) => bar(e…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, index) => bar(element, index));
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(101): 'foo.forEach((element, index) => bar(e…' > Output 1`] = `
"
  1 | for (const [index, element] of foo.entries()) bar(element, index);
"
`;

exports[`invalid(102): 'foo?.forEach((element, index) => bar(…' > Code 1`] = `
"
  1 | foo?.forEach((element, index) => bar(element, index));
"
`;

exports[`invalid(102): 'foo?.forEach((element, index) => bar(…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element, index) => bar(element, index));
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(102): 'foo?.forEach((element, index) => bar(…' > Output 1`] = `
"
  1 | if (foo) for (const [index, element] of foo.entries()) bar(element, index);
"
`;

exports[`invalid(103): 'foo?.bar.forEach((element) => bar(ele…' > Code 1`] = `
"
  1 | foo?.bar.forEach((element) => bar(element));
"
`;

exports[`invalid(103): 'foo?.bar.forEach((element) => bar(ele…' > Error 1/1 1`] = `
"
> 1 | foo?.bar.forEach((element) => bar(element));
    |          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(103): 'foo?.bar.forEach((element) => bar(ele…' > Output 1`] = `
"
  1 | for (const element of foo?.bar) bar(element);
"
`;

exports[`invalid(104): 'foo?.bar?.forEach((element) => bar(el…' > Code 1`] = `
"
  1 | foo?.bar?.forEach((element) => bar(element));
"
`;

exports[`invalid(104): 'foo?.bar?.forEach((element) => bar(el…' > Error 1/1 1`] = `
"
> 1 | foo?.bar?.forEach((element) => bar(element));
    |           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(104): 'foo?.bar?.forEach((element) => bar(el…' > Output 1`] = `
"
  1 | if (foo?.bar) for (const element of foo?.bar) bar(element);
"
`;

exports[`invalid(105): 'foo.bar.forEach((element) => log(elem…' > Code 1`] = `
"
  1 | foo.bar.forEach((element) => log(element))
"
`;

exports[`invalid(105): 'foo.bar.forEach((element) => log(elem…' > Error 1/1 1`] = `
"
> 1 | foo.bar.forEach((element) => log(element))
    |         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(105): 'foo.bar.forEach((element) => log(elem…' > Output 1`] = `
"
  1 | for (const element of foo.bar) log(element)
"
`;

exports[`invalid(106): 'foo.bar?.forEach((element) => log(ele…' > Code 1`] = `
"
  1 | foo.bar?.forEach((element) => log(element))
"
`;

exports[`invalid(106): 'foo.bar?.forEach((element) => log(ele…' > Error 1/1 1`] = `
"
> 1 | foo.bar?.forEach((element) => log(element))
    |          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(106): 'foo.bar?.forEach((element) => log(ele…' > Output 1`] = `
"
  1 | if (foo.bar) for (const element of foo.bar) log(element)
"
`;

exports[`invalid(107): 'foo.bar().forEach((element) => log(el…' > Code 1`] = `
"
  1 | foo.bar().forEach((element) => log(element))
"
`;

exports[`invalid(107): 'foo.bar().forEach((element) => log(el…' > Error 1/1 1`] = `
"
> 1 | foo.bar().forEach((element) => log(element))
    |           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(107): 'foo.bar().forEach((element) => log(el…' > Output 1`] = `
"
  1 | for (const element of foo.bar()) log(element)
"
`;

exports[`invalid(108): 'foo.bar()?.forEach((element) => log(e…' > Code 1`] = `
"
  1 | foo.bar()?.forEach((element) => log(element))
"
`;

exports[`invalid(108): 'foo.bar()?.forEach((element) => log(e…' > Error 1/1 1`] = `
"
> 1 | foo.bar()?.forEach((element) => log(element))
    |            ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`for…of\`.
  1 | if (foo.bar()) for (const element of foo.bar()) log(element)
"
`;

exports[`invalid(109): '(a ? b : c).forEach((element) => log(…' > Code 1`] = `
"
  1 | (a ? b : c).forEach((element) => log(element))
"
`;

exports[`invalid(109): '(a ? b : c).forEach((element) => log(…' > Error 1/1 1`] = `
"
> 1 | (a ? b : c).forEach((element) => log(element))
    |             ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(109): '(a ? b : c).forEach((element) => log(…' > Output 1`] = `
"
  1 | for (const element of (a ? b : c)) log(element)
"
`;

exports[`invalid(110): '(a ? b : c)?.forEach((element) => log…' > Code 1`] = `
"
  1 | (a ? b : c)?.forEach((element) => log(element))
"
`;

exports[`invalid(110): '(a ? b : c)?.forEach((element) => log…' > Error 1/1 1`] = `
"
> 1 | (a ? b : c)?.forEach((element) => log(element))
    |              ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(110): '(a ? b : c)?.forEach((element) => log…' > Output 1`] = `
"
  1 | if (a ? b : c) for (const element of (a ? b : c)) log(element)
"
`;

exports[`invalid(111): '(a ? b : c()).forEach((element) => lo…' > Code 1`] = `
"
  1 | (a ? b : c()).forEach((element) => log(element))
"
`;

exports[`invalid(111): '(a ? b : c()).forEach((element) => lo…' > Error 1/1 1`] = `
"
> 1 | (a ? b : c()).forEach((element) => log(element))
    |               ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(111): '(a ? b : c()).forEach((element) => lo…' > Output 1`] = `
"
  1 | for (const element of (a ? b : c())) log(element)
"
`;

exports[`invalid(112): '(a ? b : c())?.forEach((element) => l…' > Code 1`] = `
"
  1 | (a ? b : c())?.forEach((element) => log(element))
"
`;

exports[`invalid(112): '(a ? b : c())?.forEach((element) => l…' > Error 1/1 1`] = `
"
> 1 | (a ? b : c())?.forEach((element) => log(element))
    |                ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`for…of\`.
  1 | if (a ? b : c()) for (const element of (a ? b : c())) log(element)
"
`;

exports[`invalid(113): '(foo || bar).forEach((element) => log…' > Code 1`] = `
"
  1 | (foo || bar).forEach((element) => log(element))
"
`;

exports[`invalid(113): '(foo || bar).forEach((element) => log…' > Error 1/1 1`] = `
"
> 1 | (foo || bar).forEach((element) => log(element))
    |              ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(113): '(foo || bar).forEach((element) => log…' > Output 1`] = `
"
  1 | for (const element of (foo || bar)) log(element)
"
`;

exports[`invalid(114): '(foo || bar)?.forEach((element) => lo…' > Code 1`] = `
"
  1 | (foo || bar)?.forEach((element) => log(element))
"
`;

exports[`invalid(114): '(foo || bar)?.forEach((element) => lo…' > Error 1/1 1`] = `
"
> 1 | (foo || bar)?.forEach((element) => log(element))
    |               ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(114): '(foo || bar)?.forEach((element) => lo…' > Output 1`] = `
"
  1 | if (foo || bar) for (const element of (foo || bar)) log(element)
"
`;

exports[`invalid(115): '(foo || bar()).forEach((element) => l…' > Code 1`] = `
"
  1 | (foo || bar()).forEach((element) => log(element))
"
`;

exports[`invalid(115): '(foo || bar()).forEach((element) => l…' > Error 1/1 1`] = `
"
> 1 | (foo || bar()).forEach((element) => log(element))
    |                ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(115): '(foo || bar()).forEach((element) => l…' > Output 1`] = `
"
  1 | for (const element of (foo || bar())) log(element)
"
`;

exports[`invalid(116): '(foo || bar())?.forEach((element) => …' > Code 1`] = `
"
  1 | (foo || bar())?.forEach((element) => log(element))
"
`;

exports[`invalid(116): '(foo || bar())?.forEach((element) => …' > Error 1/1 1`] = `
"
> 1 | (foo || bar())?.forEach((element) => log(element))
    |                 ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Switch to \`for…of\`.
  1 | if (foo || bar()) for (const element of (foo || bar())) log(element)
"
`;

exports[`invalid(117): '(foo).forEach((element, index) => bar…' > Code 1`] = `
"
  1 | (foo).forEach((element, index) => bar(element, index))
"
`;

exports[`invalid(117): '(foo).forEach((element, index) => bar…' > Error 1/1 1`] = `
"
> 1 | (foo).forEach((element, index) => bar(element, index))
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(117): '(foo).forEach((element, index) => bar…' > Output 1`] = `
"
  1 | for (const [index, element] of (foo).entries()) bar(element, index)
"
`;

exports[`invalid(118): '(foo)?.forEach((element, index) => ba…' > Code 1`] = `
"
  1 | (foo)?.forEach((element, index) => bar(element, index))
"
`;

exports[`invalid(118): '(foo)?.forEach((element, index) => ba…' > Error 1/1 1`] = `
"
> 1 | (foo)?.forEach((element, index) => bar(element, index))
    |        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(118): '(foo)?.forEach((element, index) => ba…' > Output 1`] = `
"
  1 | if (foo) for (const [index, element] of (foo).entries()) bar(element, index)
"
`;

exports[`invalid(119): '(0, foo).forEach((element, index) => …' > Code 1`] = `
"
  1 | (0, foo).forEach((element, index) => bar(element, index))
"
`;

exports[`invalid(119): '(0, foo).forEach((element, index) => …' > Error 1/1 1`] = `
"
> 1 | (0, foo).forEach((element, index) => bar(element, index))
    |          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(119): '(0, foo).forEach((element, index) => …' > Output 1`] = `
"
  1 | for (const [index, element] of (0, foo).entries()) bar(element, index)
"
`;

exports[`invalid(120): '(0, foo)?.forEach((element, index) =>…' > Code 1`] = `
"
  1 | (0, foo)?.forEach((element, index) => bar(element, index))
"
`;

exports[`invalid(120): '(0, foo)?.forEach((element, index) =>…' > Error 1/1 1`] = `
"
> 1 | (0, foo)?.forEach((element, index) => bar(element, index))
    |           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(120): '(0, foo)?.forEach((element, index) =>…' > Output 1`] = `
"
  1 | if (0, foo) for (const [index, element] of (0, foo).entries()) bar(element, index)
"
`;

exports[`invalid(121): 'foo.forEach(function (element) {\\n\\tb…' > Code 1`] = `
"
  1 | foo.forEach(function (element) {
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(121): 'foo.forEach(function (element) {\\n\\tb…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function (element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(121): 'foo.forEach(function (element) {\\n\\tb…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(122): 'foo?.forEach(function (element) {\\n\\t…' > Code 1`] = `
"
  1 | foo?.forEach(function (element) {
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(122): 'foo?.forEach(function (element) {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function (element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(122): 'foo?.forEach(function (element) {\\n\\t…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(123): 'foo.forEach(function withName(element…' > Code 1`] = `
"
  1 | foo.forEach(function withName(element) {
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(123): 'foo.forEach(function withName(element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function withName(element) {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(123): 'foo.forEach(function withName(element…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(124): 'foo?.forEach(function withName(elemen…' > Code 1`] = `
"
  1 | foo?.forEach(function withName(element) {
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(124): 'foo?.forEach(function withName(elemen…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function withName(element) {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(124): 'foo?.forEach(function withName(elemen…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(125): 'foo.forEach((element) => {\\n\\tbar(ele…' > Code 1`] = `
"
  1 | foo.forEach((element) => {
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(125): 'foo.forEach((element) => {\\n\\tbar(ele…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(125): 'foo.forEach((element) => {\\n\\tbar(ele…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(126): 'foo?.forEach((element) => {\\n\\tbar(el…' > Code 1`] = `
"
  1 | foo?.forEach((element) => {
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(126): 'foo?.forEach((element) => {\\n\\tbar(el…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | },);
"
`;

exports[`invalid(126): 'foo?.forEach((element) => {\\n\\tbar(el…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(element);
  3 | }
"
`;

exports[`invalid(127): 'foo.forEach((element) => bar(element)…' > Code 1`] = `
"
  1 | foo.forEach((element) => bar(element),);
"
`;

exports[`invalid(127): 'foo.forEach((element) => bar(element)…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element) => bar(element),);
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(127): 'foo.forEach((element) => bar(element)…' > Output 1`] = `
"
  1 | for (const element of foo) bar(element);
"
`;

exports[`invalid(128): 'foo?.forEach((element) => bar(element…' > Code 1`] = `
"
  1 | foo?.forEach((element) => bar(element),);
"
`;

exports[`invalid(128): 'foo?.forEach((element) => bar(element…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element) => bar(element),);
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(128): 'foo?.forEach((element) => bar(element…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) bar(element);
"
`;

exports[`invalid(129): 'foo.forEach((element) => bar(element)…' > Code 1`] = `
"
  1 | foo.forEach((element) => bar(element))
  2 | ;[foo].pop();
"
`;

exports[`invalid(129): 'foo.forEach((element) => bar(element)…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element) => bar(element))
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | ;[foo].pop();
"
`;

exports[`invalid(129): 'foo.forEach((element) => bar(element)…' > Output 1`] = `
"
  1 | for (const element of foo) bar(element)
  2 | ;[foo].pop();
"
`;

exports[`invalid(130): 'foo?.forEach((element) => bar(element…' > Code 1`] = `
"
  1 | foo?.forEach((element) => bar(element))
  2 | ;[foo].pop();
"
`;

exports[`invalid(130): 'foo?.forEach((element) => bar(element…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element) => bar(element))
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | ;[foo].pop();
"
`;

exports[`invalid(130): 'foo?.forEach((element) => bar(element…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) bar(element)
  2 | ;[foo].pop();
"
`;

exports[`invalid(131): 'foo.forEach((element) => {\\n\\tbar(ele…' > Code 1`] = `
"
  1 | foo.forEach((element) => {
  2 | 	bar(element);
  3 | });
  4 | function noneRelatedFunction() {
  5 | 	while (element) {
  6 | 		return;
  7 | 	}
  8 | }
"
`;

exports[`invalid(131): 'foo.forEach((element) => {\\n\\tbar(ele…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | });
  4 | function noneRelatedFunction() {
  5 | 	while (element) {
  6 | 		return;
  7 | 	}
  8 | }
"
`;

exports[`invalid(131): 'foo.forEach((element) => {\\n\\tbar(ele…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	bar(element);
  3 | }
  4 | function noneRelatedFunction() {
  5 | 	while (element) {
  6 | 		return;
  7 | 	}
  8 | }
"
`;

exports[`invalid(132): 'foo?.forEach((element) => {\\n\\tbar(el…' > Code 1`] = `
"
  1 | foo?.forEach((element) => {
  2 | 	bar(element);
  3 | });
  4 | function noneRelatedFunction() {
  5 | 	while (element) {
  6 | 		return;
  7 | 	}
  8 | }
"
`;

exports[`invalid(132): 'foo?.forEach((element) => {\\n\\tbar(el…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	bar(element);
  3 | });
  4 | function noneRelatedFunction() {
  5 | 	while (element) {
  6 | 		return;
  7 | 	}
  8 | }
"
`;

exports[`invalid(132): 'foo?.forEach((element) => {\\n\\tbar(el…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) {
  2 | 	bar(element);
  3 | }
  4 | function noneRelatedFunction() {
  5 | 	while (element) {
  6 | 		return;
  7 | 	}
  8 | }
"
`;

exports[`invalid(133): 'foo.forEach(element => ({}))' > Code 1`] = `
"
  1 | foo.forEach(element => ({}))
"
`;

exports[`invalid(133): 'foo.forEach(element => ({}))' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => ({}))
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(133): 'foo.forEach(element => ({}))' > Output 1`] = `
"
  1 | for (const element of foo) ({})
"
`;

exports[`invalid(134): 'foo?.forEach(element => ({}))' > Code 1`] = `
"
  1 | foo?.forEach(element => ({}))
"
`;

exports[`invalid(134): 'foo?.forEach(element => ({}))' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => ({}))
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(134): 'foo?.forEach(element => ({}))' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) ({})
"
`;

exports[`invalid(135): 'foo.forEach((((((element => bar(eleme…' > Code 1`] = `
"
  1 | foo.forEach((((((element => bar(element)))))));
"
`;

exports[`invalid(135): 'foo.forEach((((((element => bar(eleme…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((((((element => bar(element)))))));
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(135): 'foo.forEach((((((element => bar(eleme…' > Output 1`] = `
"
  1 | for (const element of foo) bar(element);
"
`;

exports[`invalid(136): 'foo?.forEach((((((element => bar(elem…' > Code 1`] = `
"
  1 | foo?.forEach((((((element => bar(element)))))));
"
`;

exports[`invalid(136): 'foo?.forEach((((((element => bar(elem…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((((((element => bar(element)))))));
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(136): 'foo?.forEach((((((element => bar(elem…' > Output 1`] = `
"
  1 | if (foo) for (const element of foo) bar(element);
"
`;

exports[`invalid(137): 'foo.forEach((element) => {\\n\\tif (1) …' > Code 1`] = `
"
   1 | foo.forEach((element) => {
   2 | 	if (1) {
   3 | 		return;
   4 | 	}
   5 | 	if (1) {
   6 | 		return
   7 | 	}
   8 | 	if (1) {
   9 | 		return!true;
  10 | 	}
  11 | 	if (1) {
  12 | 		return!true
  13 | 	}
  14 | 	if (1) {
  15 | 		return bar();
  16 | 	}
  17 | 	if (1) {
  18 | 		return bar()
  19 | 		unreachable();
  20 | 	}
  21 | 	if (1) {
  22 | 		return {};
  23 | 	}
  24 | 	if (1) {
  25 | 		return ({});
  26 | 	}
  27 | 	if (1) {
  28 | 		return {a} = a;
  29 | 	}
  30 | 	if (1) {
  31 | 		return [a] = a;
  32 | 	}
  33 | 	if (1) {
  34 | 		foo
  35 | 		return []
  36 | 	}
  37 | 	if (1) {
  38 | 		foo
  39 | 		return [foo] = bar;
  40 | 	}
  41 | });
"
`;

exports[`invalid(137): 'foo.forEach((element) => {\\n\\tif (1) …' > Error 1/1 1`] = `
"
>  1 | foo.forEach((element) => {
     |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
   2 | 	if (1) {
   3 | 		return;
   4 | 	}
   5 | 	if (1) {
   6 | 		return
   7 | 	}
   8 | 	if (1) {
   9 | 		return!true;
  10 | 	}
  11 | 	if (1) {
  12 | 		return!true
  13 | 	}
  14 | 	if (1) {
  15 | 		return bar();
  16 | 	}
  17 | 	if (1) {
  18 | 		return bar()
  19 | 		unreachable();
  20 | 	}
  21 | 	if (1) {
  22 | 		return {};
  23 | 	}
  24 | 	if (1) {
  25 | 		return ({});
  26 | 	}
  27 | 	if (1) {
  28 | 		return {a} = a;
  29 | 	}
  30 | 	if (1) {
  31 | 		return [a] = a;
  32 | 	}
  33 | 	if (1) {
  34 | 		foo
  35 | 		return []
  36 | 	}
  37 | 	if (1) {
  38 | 		foo
  39 | 		return [foo] = bar;
  40 | 	}
  41 | });
"
`;

exports[`invalid(137): 'foo.forEach((element) => {\\n\\tif (1) …' > Output 1`] = `
"
   1 | for (const element of foo) {
   2 | 	if (1) {
   3 | 		continue;
   4 | 	}
   5 | 	if (1) {
   6 | 		continue
   7 | 	}
   8 | 	if (1) {
   9 | 		!true; continue;
  10 | 	}
  11 | 	if (1) {
  12 | 		!true; continue;
  13 | 	}
  14 | 	if (1) {
  15 | 		 bar(); continue;
  16 | 	}
  17 | 	if (1) {
  18 | 		 bar(); continue;
  19 | 		unreachable();
  20 | 	}
  21 | 	if (1) {
  22 | 		 ({}); continue;
  23 | 	}
  24 | 	if (1) {
  25 | 		 ({}); continue;
  26 | 	}
  27 | 	if (1) {
  28 | 		 ({a} = a); continue;
  29 | 	}
  30 | 	if (1) {
  31 | 		 ([a] = a); continue;
  32 | 	}
  33 | 	if (1) {
  34 | 		foo
  35 | 		 ;[]; continue;
  36 | 	}
  37 | 	if (1) {
  38 | 		foo
  39 | 		 ;([foo] = bar); continue;
  40 | 	}
  41 | }
"
`;

exports[`invalid(138): 'foo?.forEach((element) => {\\n\\tif (1)…' > Code 1`] = `
"
   1 | foo?.forEach((element) => {
   2 | 	if (1) {
   3 | 		return;
   4 | 	}
   5 | 	if (1) {
   6 | 		return
   7 | 	}
   8 | 	if (1) {
   9 | 		return!true;
  10 | 	}
  11 | 	if (1) {
  12 | 		return!true
  13 | 	}
  14 | 	if (1) {
  15 | 		return bar();
  16 | 	}
  17 | 	if (1) {
  18 | 		return bar()
  19 | 		unreachable();
  20 | 	}
  21 | 	if (1) {
  22 | 		return {};
  23 | 	}
  24 | 	if (1) {
  25 | 		return ({});
  26 | 	}
  27 | 	if (1) {
  28 | 		return {a} = a;
  29 | 	}
  30 | 	if (1) {
  31 | 		return [a] = a;
  32 | 	}
  33 | 	if (1) {
  34 | 		foo
  35 | 		return []
  36 | 	}
  37 | 	if (1) {
  38 | 		foo
  39 | 		return [foo] = bar;
  40 | 	}
  41 | });
"
`;

exports[`invalid(138): 'foo?.forEach((element) => {\\n\\tif (1)…' > Error 1/1 1`] = `
"
>  1 | foo?.forEach((element) => {
     |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
   2 | 	if (1) {
   3 | 		return;
   4 | 	}
   5 | 	if (1) {
   6 | 		return
   7 | 	}
   8 | 	if (1) {
   9 | 		return!true;
  10 | 	}
  11 | 	if (1) {
  12 | 		return!true
  13 | 	}
  14 | 	if (1) {
  15 | 		return bar();
  16 | 	}
  17 | 	if (1) {
  18 | 		return bar()
  19 | 		unreachable();
  20 | 	}
  21 | 	if (1) {
  22 | 		return {};
  23 | 	}
  24 | 	if (1) {
  25 | 		return ({});
  26 | 	}
  27 | 	if (1) {
  28 | 		return {a} = a;
  29 | 	}
  30 | 	if (1) {
  31 | 		return [a] = a;
  32 | 	}
  33 | 	if (1) {
  34 | 		foo
  35 | 		return []
  36 | 	}
  37 | 	if (1) {
  38 | 		foo
  39 | 		return [foo] = bar;
  40 | 	}
  41 | });
"
`;

exports[`invalid(138): 'foo?.forEach((element) => {\\n\\tif (1)…' > Output 1`] = `
"
   1 | if (foo) for (const element of foo) {
   2 | 	if (1) {
   3 | 		continue;
   4 | 	}
   5 | 	if (1) {
   6 | 		continue
   7 | 	}
   8 | 	if (1) {
   9 | 		!true; continue;
  10 | 	}
  11 | 	if (1) {
  12 | 		!true; continue;
  13 | 	}
  14 | 	if (1) {
  15 | 		 bar(); continue;
  16 | 	}
  17 | 	if (1) {
  18 | 		 bar(); continue;
  19 | 		unreachable();
  20 | 	}
  21 | 	if (1) {
  22 | 		 ({}); continue;
  23 | 	}
  24 | 	if (1) {
  25 | 		 ({}); continue;
  26 | 	}
  27 | 	if (1) {
  28 | 		 ({a} = a); continue;
  29 | 	}
  30 | 	if (1) {
  31 | 		 ([a] = a); continue;
  32 | 	}
  33 | 	if (1) {
  34 | 		foo
  35 | 		 ;[]; continue;
  36 | 	}
  37 | 	if (1) {
  38 | 		foo
  39 | 		 ;([foo] = bar); continue;
  40 | 	}
  41 | }
"
`;

exports[`invalid(139): 'node.children.index.forEach((children…' > Code 1`] = `
"
  1 | node.children.index.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(139): 'node.children.index.forEach((children…' > Error 1/1 1`] = `
"
> 1 | node.children.index.forEach((children, index) => process(children, index))
    |                     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(139): 'node.children.index.forEach((children…' > Output 1`] = `
"
  1 | for (const [index, children] of node.children.index.entries()) process(children, index)
"
`;

exports[`invalid(140): 'node.children.index?.forEach((childre…' > Code 1`] = `
"
  1 | node.children.index?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(140): 'node.children.index?.forEach((childre…' > Error 1/1 1`] = `
"
> 1 | node.children.index?.forEach((children, index) => process(children, index))
    |                      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(140): 'node.children.index?.forEach((childre…' > Output 1`] = `
"
  1 | if (node.children.index) for (const [index, children] of node.children.index.entries()) process(children, index)
"
`;

exports[`invalid(141): '(node?.children?.index).forEach((chil…' > Code 1`] = `
"
  1 | (node?.children?.index).forEach((children, index) => process(children, index))
"
`;

exports[`invalid(141): '(node?.children?.index).forEach((chil…' > Error 1/1 1`] = `
"
> 1 | (node?.children?.index).forEach((children, index) => process(children, index))
    |                         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(141): '(node?.children?.index).forEach((chil…' > Output 1`] = `
"
  1 | for (const [index, children] of (node?.children?.index).entries()) process(children, index)
"
`;

exports[`invalid(142): '(node?.children?.index)?.forEach((chi…' > Code 1`] = `
"
  1 | (node?.children?.index)?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(142): '(node?.children?.index)?.forEach((chi…' > Error 1/1 1`] = `
"
> 1 | (node?.children?.index)?.forEach((children, index) => process(children, index))
    |                          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(142): '(node?.children?.index)?.forEach((chi…' > Output 1`] = `
"
  1 | if (node?.children?.index) for (const [index, children] of (node?.children?.index).entries()) process(children, index)
"
`;

exports[`invalid(143): 'node[children].index.forEach((childre…' > Code 1`] = `
"
  1 | node[children].index.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(143): 'node[children].index.forEach((childre…' > Error 1/1 1`] = `
"
> 1 | node[children].index.forEach((children, index) => process(children, index))
    |                      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(144): 'node[children].index?.forEach((childr…' > Code 1`] = `
"
  1 | node[children].index?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(144): 'node[children].index?.forEach((childr…' > Error 1/1 1`] = `
"
> 1 | node[children].index?.forEach((children, index) => process(children, index))
    |                       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(145): '(node.children?.[index]).forEach((chi…' > Code 1`] = `
"
  1 | (node.children?.[index]).forEach((children, index) => process(children, index))
"
`;

exports[`invalid(145): '(node.children?.[index]).forEach((chi…' > Error 1/1 1`] = `
"
> 1 | (node.children?.[index]).forEach((children, index) => process(children, index))
    |                          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(146): '(node.children?.[index])?.forEach((ch…' > Code 1`] = `
"
  1 | (node.children?.[index])?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(146): '(node.children?.[index])?.forEach((ch…' > Error 1/1 1`] = `
"
> 1 | (node.children?.[index])?.forEach((children, index) => process(children, index))
    |                           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(147): '[{children: 1, index: 1}].forEach((ch…' > Code 1`] = `
"
  1 | [{children: 1, index: 1}].forEach((children, index) => process(children, index))
"
`;

exports[`invalid(147): '[{children: 1, index: 1}].forEach((ch…' > Error 1/1 1`] = `
"
> 1 | [{children: 1, index: 1}].forEach((children, index) => process(children, index))
    |                           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(147): '[{children: 1, index: 1}].forEach((ch…' > Output 1`] = `
"
  1 | for (const [index, children] of [{children: 1, index: 1}].entries()) process(children, index)
"
`;

exports[`invalid(148): '[{children: 1, index: 1}]?.forEach((c…' > Code 1`] = `
"
  1 | [{children: 1, index: 1}]?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(148): '[{children: 1, index: 1}]?.forEach((c…' > Error 1/1 1`] = `
"
> 1 | [{children: 1, index: 1}]?.forEach((children, index) => process(children, index))
    |                            ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(148): '[{children: 1, index: 1}]?.forEach((c…' > Output 1`] = `
"
  1 | if ([{children: 1, index: 1}]) for (const [index, children] of [{children: 1, index: 1}].entries()) process(children, index)
"
`;

exports[`invalid(149): '[{[children]: 1, index: 1}].forEach((…' > Code 1`] = `
"
  1 | [{[children]: 1, index: 1}].forEach((children, index) => process(children, index))
"
`;

exports[`invalid(149): '[{[children]: 1, index: 1}].forEach((…' > Error 1/1 1`] = `
"
> 1 | [{[children]: 1, index: 1}].forEach((children, index) => process(children, index))
    |                             ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(150): '[{[children]: 1, index: 1}]?.forEach(…' > Code 1`] = `
"
  1 | [{[children]: 1, index: 1}]?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(150): '[{[children]: 1, index: 1}]?.forEach(…' > Error 1/1 1`] = `
"
> 1 | [{[children]: 1, index: 1}]?.forEach((children, index) => process(children, index))
    |                              ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(151): '[{[children]: 1, [index]: 1}].forEach…' > Code 1`] = `
"
  1 | [{[children]: 1, [index]: 1}].forEach((children, index) => process(children, index))
"
`;

exports[`invalid(151): '[{[children]: 1, [index]: 1}].forEach…' > Error 1/1 1`] = `
"
> 1 | [{[children]: 1, [index]: 1}].forEach((children, index) => process(children, index))
    |                               ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(152): '[{[children]: 1, [index]: 1}]?.forEac…' > Code 1`] = `
"
  1 | [{[children]: 1, [index]: 1}]?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(152): '[{[children]: 1, [index]: 1}]?.forEac…' > Error 1/1 1`] = `
"
> 1 | [{[children]: 1, [index]: 1}]?.forEach((children, index) => process(children, index))
    |                                ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(153): '[{children, index: 1}].forEach((child…' > Code 1`] = `
"
  1 | [{children, index: 1}].forEach((children, index) => process(children, index))
"
`;

exports[`invalid(153): '[{children, index: 1}].forEach((child…' > Error 1/1 1`] = `
"
> 1 | [{children, index: 1}].forEach((children, index) => process(children, index))
    |                        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(154): '[{children, index: 1}]?.forEach((chil…' > Code 1`] = `
"
  1 | [{children, index: 1}]?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(154): '[{children, index: 1}]?.forEach((chil…' > Error 1/1 1`] = `
"
> 1 | [{children, index: 1}]?.forEach((children, index) => process(children, index))
    |                         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(155): '[{children: 1, index}].forEach((child…' > Code 1`] = `
"
  1 | [{children: 1, index}].forEach((children, index) => process(children, index))
"
`;

exports[`invalid(155): '[{children: 1, index}].forEach((child…' > Error 1/1 1`] = `
"
> 1 | [{children: 1, index}].forEach((children, index) => process(children, index))
    |                        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(156): '[{children: 1, index}]?.forEach((chil…' > Code 1`] = `
"
  1 | [{children: 1, index}]?.forEach((children, index) => process(children, index))
"
`;

exports[`invalid(156): '[{children: 1, index}]?.forEach((chil…' > Error 1/1 1`] = `
"
> 1 | [{children: 1, index}]?.forEach((children, index) => process(children, index))
    |                         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(157): '[function name() {}].forEach((name, i…' > Code 1`] = `
"
  1 | [function name() {}].forEach((name, index) => process(name, index))
"
`;

exports[`invalid(157): '[function name() {}].forEach((name, i…' > Error 1/1 1`] = `
"
> 1 | [function name() {}].forEach((name, index) => process(name, index))
    |                      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(157): '[function name() {}].forEach((name, i…' > Output 1`] = `
"
  1 | for (const [index, name] of [function name() {}].entries()) process(name, index)
"
`;

exports[`invalid(158): '[function name() {}]?.forEach((name, …' > Code 1`] = `
"
  1 | [function name() {}]?.forEach((name, index) => process(name, index))
"
`;

exports[`invalid(158): '[function name() {}]?.forEach((name, …' > Error 1/1 1`] = `
"
> 1 | [function name() {}]?.forEach((name, index) => process(name, index))
    |                       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(158): '[function name() {}]?.forEach((name, …' > Output 1`] = `
"
  1 | if ([function name() {}]) for (const [index, name] of [function name() {}].entries()) process(name, index)
"
`;

exports[`invalid(159): '[\\n\\tfunction () {\\n\\t\\tfunction inde…' > Code 1`] = `
"
  1 | [
  2 | 	function () {
  3 | 		function index() {}
  4 | 	}
  5 | ].forEach((name, index) => process(name, index))
"
`;

exports[`invalid(159): '[\\n\\tfunction () {\\n\\t\\tfunction inde…' > Error 1/1 1`] = `
"
  1 | [
  2 | 	function () {
  3 | 		function index() {}
  4 | 	}
> 5 | ].forEach((name, index) => process(name, index))
    |   ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(159): '[\\n\\tfunction () {\\n\\t\\tfunction inde…' > Output 1`] = `
"
  1 | for (const [index, name] of [
  2 | 	function () {
  3 | 		function index() {}
  4 | 	}
  5 | ].entries()) process(name, index)
"
`;

exports[`invalid(160): '[\\n\\tfunction () {\\n\\t\\tfunction inde…' > Code 1`] = `
"
  1 | [
  2 | 	function () {
  3 | 		function index() {}
  4 | 	}
  5 | ]?.forEach((name, index) => process(name, index))
"
`;

exports[`invalid(160): '[\\n\\tfunction () {\\n\\t\\tfunction inde…' > Error 1/1 1`] = `
"
  1 | [
  2 | 	function () {
  3 | 		function index() {}
  4 | 	}
> 5 | ]?.forEach((name, index) => process(name, index))
    |    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(160): '[\\n\\tfunction () {\\n\\t\\tfunction inde…' > Output 1`] = `
"
  1 | if ([
  2 | 	function () {
  3 | 		function index() {}
  4 | 	}
  5 | ]) for (const [index, name] of [
  6 | 	function () {
  7 | 		function index() {}
  8 | 	}
  9 | ].entries()) process(name, index)
"
`;

exports[`invalid(161): '[\\n\\tfunction () {\\n\\t\\tclass index {…' > Code 1`] = `
"
  1 | [
  2 | 	function () {
  3 | 		class index {}
  4 | 	}
  5 | ].forEach((name, index) => process(name, index))
"
`;

exports[`invalid(161): '[\\n\\tfunction () {\\n\\t\\tclass index {…' > Error 1/1 1`] = `
"
  1 | [
  2 | 	function () {
  3 | 		class index {}
  4 | 	}
> 5 | ].forEach((name, index) => process(name, index))
    |   ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(161): '[\\n\\tfunction () {\\n\\t\\tclass index {…' > Output 1`] = `
"
  1 | for (const [index, name] of [
  2 | 	function () {
  3 | 		class index {}
  4 | 	}
  5 | ].entries()) process(name, index)
"
`;

exports[`invalid(162): '[\\n\\tfunction () {\\n\\t\\tclass index {…' > Code 1`] = `
"
  1 | [
  2 | 	function () {
  3 | 		class index {}
  4 | 	}
  5 | ]?.forEach((name, index) => process(name, index))
"
`;

exports[`invalid(162): '[\\n\\tfunction () {\\n\\t\\tclass index {…' > Error 1/1 1`] = `
"
  1 | [
  2 | 	function () {
  3 | 		class index {}
  4 | 	}
> 5 | ]?.forEach((name, index) => process(name, index))
    |    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(162): '[\\n\\tfunction () {\\n\\t\\tclass index {…' > Output 1`] = `
"
  1 | if ([
  2 | 	function () {
  3 | 		class index {}
  4 | 	}
  5 | ]) for (const [index, name] of [
  6 | 	function () {
  7 | 		class index {}
  8 | 	}
  9 | ].entries()) process(name, index)
"
`;

exports[`invalid(163): '[class Foo{}].forEach((Foo, index) =>…' > Code 1`] = `
"
  1 | [class Foo{}].forEach((Foo, index) => process(Foo, index))
"
`;

exports[`invalid(163): '[class Foo{}].forEach((Foo, index) =>…' > Error 1/1 1`] = `
"
> 1 | [class Foo{}].forEach((Foo, index) => process(Foo, index))
    |               ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(163): '[class Foo{}].forEach((Foo, index) =>…' > Output 1`] = `
"
  1 | for (const [index, Foo] of [class Foo{}].entries()) process(Foo, index)
"
`;

exports[`invalid(164): '[class Foo{}]?.forEach((Foo, index) =…' > Code 1`] = `
"
  1 | [class Foo{}]?.forEach((Foo, index) => process(Foo, index))
"
`;

exports[`invalid(164): '[class Foo{}]?.forEach((Foo, index) =…' > Error 1/1 1`] = `
"
> 1 | [class Foo{}]?.forEach((Foo, index) => process(Foo, index))
    |                ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(164): '[class Foo{}]?.forEach((Foo, index) =…' > Output 1`] = `
"
  1 | if ([class Foo{}]) for (const [index, Foo] of [class Foo{}].entries()) process(Foo, index)
"
`;

exports[`invalid(165): '[class Foo{}].forEach((X, Foo) => pro…' > Code 1`] = `
"
  1 | [class Foo{}].forEach((X, Foo) => process(X, Foo))
"
`;

exports[`invalid(165): '[class Foo{}].forEach((X, Foo) => pro…' > Error 1/1 1`] = `
"
> 1 | [class Foo{}].forEach((X, Foo) => process(X, Foo))
    |               ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(165): '[class Foo{}].forEach((X, Foo) => pro…' > Output 1`] = `
"
  1 | for (const [Foo, X] of [class Foo{}].entries()) process(X, Foo)
"
`;

exports[`invalid(166): '[class Foo{}]?.forEach((X, Foo) => pr…' > Code 1`] = `
"
  1 | [class Foo{}]?.forEach((X, Foo) => process(X, Foo))
"
`;

exports[`invalid(166): '[class Foo{}]?.forEach((X, Foo) => pr…' > Error 1/1 1`] = `
"
> 1 | [class Foo{}]?.forEach((X, Foo) => process(X, Foo))
    |                ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(166): '[class Foo{}]?.forEach((X, Foo) => pr…' > Output 1`] = `
"
  1 | if ([class Foo{}]) for (const [Foo, X] of [class Foo{}].entries()) process(X, Foo)
"
`;

exports[`invalid(167): '[\\n\\tclass Foo {\\n\\t\\tbar() {}\\n\\t}\\n…' > Code 1`] = `
"
  1 | [
  2 | 	class Foo {
  3 | 		bar() {}
  4 | 	}
  5 | ].forEach((Foo, bar) => process(Foo, bar))
"
`;

exports[`invalid(167): '[\\n\\tclass Foo {\\n\\t\\tbar() {}\\n\\t}\\n…' > Error 1/1 1`] = `
"
  1 | [
  2 | 	class Foo {
  3 | 		bar() {}
  4 | 	}
> 5 | ].forEach((Foo, bar) => process(Foo, bar))
    |   ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(167): '[\\n\\tclass Foo {\\n\\t\\tbar() {}\\n\\t}\\n…' > Output 1`] = `
"
  1 | for (const [bar, Foo] of [
  2 | 	class Foo {
  3 | 		bar() {}
  4 | 	}
  5 | ].entries()) process(Foo, bar)
"
`;

exports[`invalid(168): '[\\n\\tclass Foo {\\n\\t\\tbar() {}\\n\\t}\\n…' > Code 1`] = `
"
  1 | [
  2 | 	class Foo {
  3 | 		bar() {}
  4 | 	}
  5 | ]?.forEach((Foo, bar) => process(Foo, bar))
"
`;

exports[`invalid(168): '[\\n\\tclass Foo {\\n\\t\\tbar() {}\\n\\t}\\n…' > Error 1/1 1`] = `
"
  1 | [
  2 | 	class Foo {
  3 | 		bar() {}
  4 | 	}
> 5 | ]?.forEach((Foo, bar) => process(Foo, bar))
    |    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(168): '[\\n\\tclass Foo {\\n\\t\\tbar() {}\\n\\t}\\n…' > Output 1`] = `
"
  1 | if ([
  2 | 	class Foo {
  3 | 		bar() {}
  4 | 	}
  5 | ]) for (const [bar, Foo] of [
  6 | 	class Foo {
  7 | 		bar() {}
  8 | 	}
  9 | ].entries()) process(Foo, bar)
"
`;

exports[`invalid(169): 'foo.React.Children.forEach(bar)' > Code 1`] = `
"
  1 | foo.React.Children.forEach(bar)
"
`;

exports[`invalid(169): 'foo.React.Children.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | foo.React.Children.forEach(bar)
    |                    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(170): 'foo.React.Children?.forEach(bar)' > Code 1`] = `
"
  1 | foo.React.Children?.forEach(bar)
"
`;

exports[`invalid(170): 'foo.React.Children?.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | foo.React.Children?.forEach(bar)
    |                     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(171): 'NotReact.Children.forEach(bar)' > Code 1`] = `
"
  1 | NotReact.Children.forEach(bar)
"
`;

exports[`invalid(171): 'NotReact.Children.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | NotReact.Children.forEach(bar)
    |                   ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(172): 'NotReact.Children?.forEach(bar)' > Code 1`] = `
"
  1 | NotReact.Children?.forEach(bar)
"
`;

exports[`invalid(172): 'NotReact.Children?.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | NotReact.Children?.forEach(bar)
    |                    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(173): 'React.NotChildren.forEach(bar)' > Code 1`] = `
"
  1 | React.NotChildren.forEach(bar)
"
`;

exports[`invalid(173): 'React.NotChildren.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | React.NotChildren.forEach(bar)
    |                   ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(174): 'React.NotChildren?.forEach(bar)' > Code 1`] = `
"
  1 | React.NotChildren?.forEach(bar)
"
`;

exports[`invalid(174): 'React.NotChildren?.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | React.NotChildren?.forEach(bar)
    |                    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(175): 'React?.Children.forEach(bar)' > Code 1`] = `
"
  1 | React?.Children.forEach(bar)
"
`;

exports[`invalid(175): 'React?.Children.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | React?.Children.forEach(bar)
    |                 ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(176): 'React?.Children?.forEach(bar)' > Code 1`] = `
"
  1 | React?.Children?.forEach(bar)
"
`;

exports[`invalid(176): 'React?.Children?.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | React?.Children?.forEach(bar)
    |                  ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(177): 'NotChildren.forEach(bar)' > Code 1`] = `
"
  1 | NotChildren.forEach(bar)
"
`;

exports[`invalid(177): 'NotChildren.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | NotChildren.forEach(bar)
    |             ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(178): 'NotChildren?.forEach(bar)' > Code 1`] = `
"
  1 | NotChildren?.forEach(bar)
"
`;

exports[`invalid(178): 'NotChildren?.forEach(bar)' > Error 1/1 1`] = `
"
> 1 | NotChildren?.forEach(bar)
    |              ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(179): 'foo.forEach(element => {\\n\\telement +…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	element ++;
  3 | })
"
`;

exports[`invalid(179): 'foo.forEach(element => {\\n\\telement +…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	element ++;
  3 | })
"
`;

exports[`invalid(179): 'foo.forEach(element => {\\n\\telement +…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	element ++;
  3 | }
"
`;

exports[`invalid(180): 'foo?.forEach(element => {\\n\\telement …' > Code 1`] = `
"
  1 | foo?.forEach(element => {
  2 | 	element ++;
  3 | })
"
`;

exports[`invalid(180): 'foo?.forEach(element => {\\n\\telement …' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	element ++;
  3 | })
"
`;

exports[`invalid(180): 'foo?.forEach(element => {\\n\\telement …' > Output 1`] = `
"
  1 | if (foo) for (let element of foo) {
  2 | 	element ++;
  3 | }
"
`;

exports[`invalid(181): 'foo.forEach(element => {\\n\\tconst a =…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	const a = -- element;
  3 | })
"
`;

exports[`invalid(181): 'foo.forEach(element => {\\n\\tconst a =…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	const a = -- element;
  3 | })
"
`;

exports[`invalid(181): 'foo.forEach(element => {\\n\\tconst a =…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	const a = -- element;
  3 | }
"
`;

exports[`invalid(182): 'foo?.forEach(element => {\\n\\tconst a …' > Code 1`] = `
"
  1 | foo?.forEach(element => {
  2 | 	const a = -- element;
  3 | })
"
`;

exports[`invalid(182): 'foo?.forEach(element => {\\n\\tconst a …' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(element => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	const a = -- element;
  3 | })
"
`;

exports[`invalid(182): 'foo?.forEach(element => {\\n\\tconst a …' > Output 1`] = `
"
  1 | if (foo) for (let element of foo) {
  2 | 	const a = -- element;
  3 | }
"
`;

exports[`invalid(183): 'foo.forEach((element, index) => {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach((element, index) => {
  2 | 	index ++;
  3 | 	element = 2
  4 | });
"
`;

exports[`invalid(183): 'foo.forEach((element, index) => {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, index) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	index ++;
  3 | 	element = 2
  4 | });
"
`;

exports[`invalid(183): 'foo.forEach((element, index) => {\\n\\t…' > Output 1`] = `
"
  1 | for (let [index, element] of foo.entries()) {
  2 | 	index ++;
  3 | 	element = 2
  4 | }
"
`;

exports[`invalid(184): 'foo?.forEach((element, index) => {\\n\\…' > Code 1`] = `
"
  1 | foo?.forEach((element, index) => {
  2 | 	index ++;
  3 | 	element = 2
  4 | });
"
`;

exports[`invalid(184): 'foo?.forEach((element, index) => {\\n\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element, index) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	index ++;
  3 | 	element = 2
  4 | });
"
`;

exports[`invalid(184): 'foo?.forEach((element, index) => {\\n\\…' > Output 1`] = `
"
  1 | if (foo) for (let [index, element] of foo.entries()) {
  2 | 	index ++;
  3 | 	element = 2
  4 | }
"
`;

exports[`invalid(185): 'foo.forEach((element, index) => {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach((element, index) => {
  2 | 	element >>>= 2;
  3 | });
"
`;

exports[`invalid(185): 'foo.forEach((element, index) => {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, index) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	element >>>= 2;
  3 | });
"
`;

exports[`invalid(185): 'foo.forEach((element, index) => {\\n\\t…' > Output 1`] = `
"
  1 | for (let [index, element] of foo.entries()) {
  2 | 	element >>>= 2;
  3 | }
"
`;

exports[`invalid(186): 'foo?.forEach((element, index) => {\\n\\…' > Code 1`] = `
"
  1 | foo?.forEach((element, index) => {
  2 | 	element >>>= 2;
  3 | });
"
`;

exports[`invalid(186): 'foo?.forEach((element, index) => {\\n\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element, index) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	element >>>= 2;
  3 | });
"
`;

exports[`invalid(186): 'foo?.forEach((element, index) => {\\n\\…' > Output 1`] = `
"
  1 | if (foo) for (let [index, element] of foo.entries()) {
  2 | 	element >>>= 2;
  3 | }
"
`;

exports[`invalid(187): 'foo.forEach((element, index) => {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach((element, index) => {
  2 | 	const a = element = 1;
  3 | });
"
`;

exports[`invalid(187): 'foo.forEach((element, index) => {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, index) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	const a = element = 1;
  3 | });
"
`;

exports[`invalid(187): 'foo.forEach((element, index) => {\\n\\t…' > Output 1`] = `
"
  1 | for (let [index, element] of foo.entries()) {
  2 | 	const a = element = 1;
  3 | }
"
`;

exports[`invalid(188): 'foo?.forEach((element, index) => {\\n\\…' > Code 1`] = `
"
  1 | foo?.forEach((element, index) => {
  2 | 	const a = element = 1;
  3 | });
"
`;

exports[`invalid(188): 'foo?.forEach((element, index) => {\\n\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element, index) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	const a = element = 1;
  3 | });
"
`;

exports[`invalid(188): 'foo?.forEach((element, index) => {\\n\\…' > Output 1`] = `
"
  1 | if (foo) for (let [index, element] of foo.entries()) {
  2 | 	const a = element = 1;
  3 | }
"
`;

exports[`invalid(189): 'foo.forEach((element, index) => {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach((element, index) => {
  2 | 	let a;
  3 | 	a >>>= element;
  4 | });
"
`;

exports[`invalid(189): 'foo.forEach((element, index) => {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, index) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	let a;
  3 | 	a >>>= element;
  4 | });
"
`;

exports[`invalid(189): 'foo.forEach((element, index) => {\\n\\t…' > Output 1`] = `
"
  1 | for (const [index, element] of foo.entries()) {
  2 | 	let a;
  3 | 	a >>>= element;
  4 | }
"
`;

exports[`invalid(190): 'foo?.forEach((element, index) => {\\n\\…' > Code 1`] = `
"
  1 | foo?.forEach((element, index) => {
  2 | 	let a;
  3 | 	a >>>= element;
  4 | });
"
`;

exports[`invalid(190): 'foo?.forEach((element, index) => {\\n\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element, index) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	let a;
  3 | 	a >>>= element;
  4 | });
"
`;

exports[`invalid(190): 'foo?.forEach((element, index) => {\\n\\…' > Output 1`] = `
"
  1 | if (foo) for (const [index, element] of foo.entries()) {
  2 | 	let a;
  3 | 	a >>>= element;
  4 | }
"
`;

exports[`invalid(191): 'foo.forEach(({property}) => {bar(prop…' > Code 1`] = `
"
  1 | foo.forEach(({property}) => {bar(property)})
"
`;

exports[`invalid(191): 'foo.forEach(({property}) => {bar(prop…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(({property}) => {bar(property)})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(191): 'foo.forEach(({property}) => {bar(prop…' > Output 1`] = `
"
  1 | for (const {property} of foo) {bar(property)}
"
`;

exports[`invalid(192): 'foo?.forEach(({property}) => {bar(pro…' > Code 1`] = `
"
  1 | foo?.forEach(({property}) => {bar(property)})
"
`;

exports[`invalid(192): 'foo?.forEach(({property}) => {bar(pro…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(({property}) => {bar(property)})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(192): 'foo?.forEach(({property}) => {bar(pro…' > Output 1`] = `
"
  1 | if (foo) for (const {property} of foo) {bar(property)}
"
`;

exports[`invalid(193): 'foo.forEach(({foo: {foo: [property]}}…' > Code 1`] = `
"
  1 | foo.forEach(({foo: {foo: [property]}}) => {bar(property, index)})
"
`;

exports[`invalid(193): 'foo.forEach(({foo: {foo: [property]}}…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(({foo: {foo: [property]}}) => {bar(property, index)})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(193): 'foo.forEach(({foo: {foo: [property]}}…' > Output 1`] = `
"
  1 | for (const {foo: {foo: [property]}} of foo) {bar(property, index)}
"
`;

exports[`invalid(194): 'foo?.forEach(({foo: {foo: [property]}…' > Code 1`] = `
"
  1 | foo?.forEach(({foo: {foo: [property]}}) => {bar(property, index)})
"
`;

exports[`invalid(194): 'foo?.forEach(({foo: {foo: [property]}…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(({foo: {foo: [property]}}) => {bar(property, index)})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(194): 'foo?.forEach(({foo: {foo: [property]}…' > Output 1`] = `
"
  1 | if (foo) for (const {foo: {foo: [property]}} of foo) {bar(property, index)}
"
`;

exports[`invalid(195): 'foo.forEach((element, {bar: {bar: [in…' > Code 1`] = `
"
  1 | foo.forEach((element, {bar: {bar: [index]}}) => {bar(element, index)})
"
`;

exports[`invalid(195): 'foo.forEach((element, {bar: {bar: [in…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, {bar: {bar: [index]}}) => {bar(element, index)})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(196): 'foo?.forEach((element, {bar: {bar: [i…' > Code 1`] = `
"
  1 | foo?.forEach((element, {bar: {bar: [index]}}) => {bar(element, index)})
"
`;

exports[`invalid(196): 'foo?.forEach((element, {bar: {bar: [i…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element, {bar: {bar: [index]}}) => {bar(element, index)})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(197): 'foo.forEach((element = elementDefault…' > Code 1`] = `
"
  1 | foo.forEach((element = elementDefaultValue, index = indexDefaultValue) => {})
"
`;

exports[`invalid(197): 'foo.forEach((element = elementDefault…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element = elementDefaultValue, index = indexDefaultValue) => {})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(198): 'foo?.forEach((element = elementDefaul…' > Code 1`] = `
"
  1 | foo?.forEach((element = elementDefaultValue, index = indexDefaultValue) => {})
"
`;

exports[`invalid(198): 'foo?.forEach((element = elementDefaul…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach((element = elementDefaultValue, index = indexDefaultValue) => {})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(199): 'foo.forEach(({}) => {})' > Code 1`] = `
"
  1 | foo.forEach(({}) => {})
"
`;

exports[`invalid(199): 'foo.forEach(({}) => {})' > Error 1/1 1`] = `
"
> 1 | foo.forEach(({}) => {})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(199): 'foo.forEach(({}) => {})' > Output 1`] = `
"
  1 | for (const {} of foo) {}
"
`;

exports[`invalid(200): 'foo?.forEach(({}) => {})' > Code 1`] = `
"
  1 | foo?.forEach(({}) => {})
"
`;

exports[`invalid(200): 'foo?.forEach(({}) => {})' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(({}) => {})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(200): 'foo?.forEach(({}) => {})' > Output 1`] = `
"
  1 | if (foo) for (const {} of foo) {}
"
`;

exports[`invalid(201): 'foo.forEach(function foo({a, b, c, d}…' > Code 1`] = `
"
  1 | foo.forEach(function foo({a, b, c, d}) {})
"
`;

exports[`invalid(201): 'foo.forEach(function foo({a, b, c, d}…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function foo({a, b, c, d}) {})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(201): 'foo.forEach(function foo({a, b, c, d}…' > Output 1`] = `
"
  1 | for (const {a, b, c, d} of foo) {}
"
`;

exports[`invalid(202): 'foo?.forEach(function foo({a, b, c, d…' > Code 1`] = `
"
  1 | foo?.forEach(function foo({a, b, c, d}) {})
"
`;

exports[`invalid(202): 'foo?.forEach(function foo({a, b, c, d…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function foo({a, b, c, d}) {})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(202): 'foo?.forEach(function foo({a, b, c, d…' > Output 1`] = `
"
  1 | if (foo) for (const {a, b, c, d} of foo) {}
"
`;

exports[`invalid(203): 'foo.forEach(function foo({a, b, c, d,…' > Code 1`] = `
"
  1 | foo.forEach(function foo({a, b, c, d, foo}) {})
"
`;

exports[`invalid(203): 'foo.forEach(function foo({a, b, c, d,…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(function foo({a, b, c, d, foo}) {})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(204): 'foo?.forEach(function foo({a, b, c, d…' > Code 1`] = `
"
  1 | foo?.forEach(function foo({a, b, c, d, foo}) {})
"
`;

exports[`invalid(204): 'foo?.forEach(function foo({a, b, c, d…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(function foo({a, b, c, d, foo}) {})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(205): 'foo.forEach(({foo: property}) => {bar…' > Code 1`] = `
"
  1 | foo.forEach(({foo: property}) => {bar(property)})
"
`;

exports[`invalid(205): 'foo.forEach(({foo: property}) => {bar…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(({foo: property}) => {bar(property)})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(205): 'foo.forEach(({foo: property}) => {bar…' > Output 1`] = `
"
  1 | for (const {foo: property} of foo) {bar(property)}
"
`;

exports[`invalid(206): 'foo?.forEach(({foo: property}) => {ba…' > Code 1`] = `
"
  1 | foo?.forEach(({foo: property}) => {bar(property)})
"
`;

exports[`invalid(206): 'foo?.forEach(({foo: property}) => {ba…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(({foo: property}) => {bar(property)})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(206): 'foo?.forEach(({foo: property}) => {ba…' > Output 1`] = `
"
  1 | if (foo) for (const {foo: property} of foo) {bar(property)}
"
`;

exports[`invalid(207): 'foo.forEach(({[foo]: property}) => {b…' > Code 1`] = `
"
  1 | foo.forEach(({[foo]: property}) => {bar(property)})
"
`;

exports[`invalid(207): 'foo.forEach(({[foo]: property}) => {b…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(({[foo]: property}) => {bar(property)})
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(207): 'foo.forEach(({[foo]: property}) => {b…' > Output 1`] = `
"
  1 | for (const {[foo]: property} of foo) {bar(property)}
"
`;

exports[`invalid(208): 'foo?.forEach(({[foo]: property}) => {…' > Code 1`] = `
"
  1 | foo?.forEach(({[foo]: property}) => {bar(property)})
"
`;

exports[`invalid(208): 'foo?.forEach(({[foo]: property}) => {…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(({[foo]: property}) => {bar(property)})
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(208): 'foo?.forEach(({[foo]: property}) => {…' > Output 1`] = `
"
  1 | if (foo) for (const {[foo]: property} of foo) {bar(property)}
"
`;

exports[`invalid(209): 'foo.forEach(({element}, index) => {\\n…' > Code 1`] = `
"
  1 | foo.forEach(({element}, index) => {
  2 | 	element &&= 2;
  3 | });
"
`;

exports[`invalid(209): 'foo.forEach(({element}, index) => {\\n…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(({element}, index) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	element &&= 2;
  3 | });
"
`;

exports[`invalid(209): 'foo.forEach(({element}, index) => {\\n…' > Output 1`] = `
"
  1 | for (let [index, {element}] of foo.entries()) {
  2 | 	element &&= 2;
  3 | }
"
`;

exports[`invalid(210): 'foo?.forEach(({element}, index) => {\\…' > Code 1`] = `
"
  1 | foo?.forEach(({element}, index) => {
  2 | 	element &&= 2;
  3 | });
"
`;

exports[`invalid(210): 'foo?.forEach(({element}, index) => {\\…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(({element}, index) => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	element &&= 2;
  3 | });
"
`;

exports[`invalid(210): 'foo?.forEach(({element}, index) => {\\…' > Output 1`] = `
"
  1 | if (foo) for (let [index, {element}] of foo.entries()) {
  2 | 	element &&= 2;
  3 | }
"
`;

exports[`invalid(211): 'foo.forEach(_ => {\\n\\tif (true) retur…' > Code 1`] = `
"
  1 | foo.forEach(_ => {
  2 | 	if (true) return {};
  3 | })
"
`;

exports[`invalid(211): 'foo.forEach(_ => {\\n\\tif (true) retur…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(_ => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	if (true) return {};
  3 | })
"
`;

exports[`invalid(211): 'foo.forEach(_ => {\\n\\tif (true) retur…' > Output 1`] = `
"
  1 | for (const _ of foo) {
  2 | 	if (true)  { ({}); continue; }
  3 | }
"
`;

exports[`invalid(212): 'foo?.forEach(_ => {\\n\\tif (true) retu…' > Code 1`] = `
"
  1 | foo?.forEach(_ => {
  2 | 	if (true) return {};
  3 | })
"
`;

exports[`invalid(212): 'foo?.forEach(_ => {\\n\\tif (true) retu…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(_ => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	if (true) return {};
  3 | })
"
`;

exports[`invalid(212): 'foo?.forEach(_ => {\\n\\tif (true) retu…' > Output 1`] = `
"
  1 | if (foo) for (const _ of foo) {
  2 | 	if (true)  { ({}); continue; }
  3 | }
"
`;

exports[`invalid(213): 'foo.forEach(_ => {\\n\\tif (true);\\n\\te…' > Code 1`] = `
"
  1 | foo.forEach(_ => {
  2 | 	if (true);
  3 | 	else return {};
  4 | })
"
`;

exports[`invalid(213): 'foo.forEach(_ => {\\n\\tif (true);\\n\\te…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(_ => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	if (true);
  3 | 	else return {};
  4 | })
"
`;

exports[`invalid(213): 'foo.forEach(_ => {\\n\\tif (true);\\n\\te…' > Output 1`] = `
"
  1 | for (const _ of foo) {
  2 | 	if (true);
  3 | 	else  { ({}); continue; }
  4 | }
"
`;

exports[`invalid(214): 'foo?.forEach(_ => {\\n\\tif (true);\\n\\t…' > Code 1`] = `
"
  1 | foo?.forEach(_ => {
  2 | 	if (true);
  3 | 	else return {};
  4 | })
"
`;

exports[`invalid(214): 'foo?.forEach(_ => {\\n\\tif (true);\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo?.forEach(_ => {
    |      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	if (true);
  3 | 	else return {};
  4 | })
"
`;

exports[`invalid(214): 'foo?.forEach(_ => {\\n\\tif (true);\\n\\t…' > Output 1`] = `
"
  1 | if (foo) for (const _ of foo) {
  2 | 	if (true);
  3 | 	else  { ({}); continue; }
  4 | }
"
`;

exports[`invalid(215): 'if (true) {} else[foo].forEach((eleme…' > Code 1`] = `
"
  1 | if (true) {} else[foo].forEach((element) => {})
"
`;

exports[`invalid(215): 'if (true) {} else[foo].forEach((eleme…' > Error 1/1 1`] = `
"
> 1 | if (true) {} else[foo].forEach((element) => {})
    |                        ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(215): 'if (true) {} else[foo].forEach((eleme…' > Output 1`] = `
"
  1 | if (true) {} else for (const element of [foo]) {}
"
`;

exports[`invalid(216): 'if (true) {} else[foo]?.forEach((elem…' > Code 1`] = `
"
  1 | if (true) {} else[foo]?.forEach((element) => {})
"
`;

exports[`invalid(216): 'if (true) {} else[foo]?.forEach((elem…' > Error 1/1 1`] = `
"
> 1 | if (true) {} else[foo]?.forEach((element) => {})
    |                         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(216): 'if (true) {} else[foo]?.forEach((elem…' > Output 1`] = `
"
  1 | if (true) {} else if ([foo]) for (const element of [foo]) {}
"
`;

exports[`invalid(217): 'const a = () => ((  foo.forEach(eleme…' > Code 1`] = `
"
  1 | const a = () => ((  foo.forEach(element => bar(element))  ))
"
`;

exports[`invalid(217): 'const a = () => ((  foo.forEach(eleme…' > Error 1/1 1`] = `
"
> 1 | const a = () => ((  foo.forEach(element => bar(element))  ))
    |                         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(217): 'const a = () => ((  foo.forEach(eleme…' > Output 1`] = `
"
  1 | const a = () =>   { for (const element of foo) bar(element) }  
"
`;

exports[`invalid(218): 'const a = () => ((  foo?.forEach(elem…' > Code 1`] = `
"
  1 | const a = () => ((  foo?.forEach(element => bar(element))  ))
"
`;

exports[`invalid(218): 'const a = () => ((  foo?.forEach(elem…' > Error 1/1 1`] = `
"
> 1 | const a = () => ((  foo?.forEach(element => bar(element))  ))
    |                          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(218): 'const a = () => ((  foo?.forEach(elem…' > Output 1`] = `
"
  1 | const a = () =>   { if (foo) for (const element of foo) bar(element) }  
"
`;

exports[`invalid(219): 'const a = () => ((  foo.forEach(eleme…' > Code 1`] = `
"
  1 | const a = () => ((  foo.forEach(element => bar(element))  ));
"
`;

exports[`invalid(219): 'const a = () => ((  foo.forEach(eleme…' > Error 1/1 1`] = `
"
> 1 | const a = () => ((  foo.forEach(element => bar(element))  ));
    |                         ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(219): 'const a = () => ((  foo.forEach(eleme…' > Output 1`] = `
"
  1 | const a = () =>   { for (const element of foo) bar(element) }  ;
"
`;

exports[`invalid(220): 'const a = () => ((  foo?.forEach(elem…' > Code 1`] = `
"
  1 | const a = () => ((  foo?.forEach(element => bar(element))  ));
"
`;

exports[`invalid(220): 'const a = () => ((  foo?.forEach(elem…' > Error 1/1 1`] = `
"
> 1 | const a = () => ((  foo?.forEach(element => bar(element))  ));
    |                          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(220): 'const a = () => ((  foo?.forEach(elem…' > Output 1`] = `
"
  1 | const a = () =>   { if (foo) for (const element of foo) bar(element) }  ;
"
`;

exports[`invalid(221): 'const a = () => foo.forEach(element =…' > Code 1`] = `
"
  1 | const a = () => foo.forEach(element => bar(element))
"
`;

exports[`invalid(221): 'const a = () => foo.forEach(element =…' > Error 1/1 1`] = `
"
> 1 | const a = () => foo.forEach(element => bar(element))
    |                     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(221): 'const a = () => foo.forEach(element =…' > Output 1`] = `
"
  1 | const a = () => { for (const element of foo) bar(element) }
"
`;

exports[`invalid(222): 'const a = () => foo?.forEach(element …' > Code 1`] = `
"
  1 | const a = () => foo?.forEach(element => bar(element))
"
`;

exports[`invalid(222): 'const a = () => foo?.forEach(element …' > Error 1/1 1`] = `
"
> 1 | const a = () => foo?.forEach(element => bar(element))
    |                      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(222): 'const a = () => foo?.forEach(element …' > Output 1`] = `
"
  1 | const a = () => { if (foo) for (const element of foo) bar(element) }
"
`;

exports[`invalid(223): 'const a = () => foo.forEach(element =…' > Code 1`] = `
"
  1 | const a = () => foo.forEach(element => bar(element));
"
`;

exports[`invalid(223): 'const a = () => foo.forEach(element =…' > Error 1/1 1`] = `
"
> 1 | const a = () => foo.forEach(element => bar(element));
    |                     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(223): 'const a = () => foo.forEach(element =…' > Output 1`] = `
"
  1 | const a = () => { for (const element of foo) bar(element) };
"
`;

exports[`invalid(224): 'const a = () => foo?.forEach(element …' > Code 1`] = `
"
  1 | const a = () => foo?.forEach(element => bar(element));
"
`;

exports[`invalid(224): 'const a = () => foo?.forEach(element …' > Error 1/1 1`] = `
"
> 1 | const a = () => foo?.forEach(element => bar(element));
    |                      ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(224): 'const a = () => foo?.forEach(element …' > Output 1`] = `
"
  1 | const a = () => { if (foo) for (const element of foo) bar(element) };
"
`;

exports[`invalid(225): 'const a = () => void foo.forEach(elem…' > Code 1`] = `
"
  1 | const a = () => void foo.forEach(element => bar(element));
"
`;

exports[`invalid(225): 'const a = () => void foo.forEach(elem…' > Error 1/1 1`] = `
"
> 1 | const a = () => void foo.forEach(element => bar(element));
    |                          ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(226): 'const a = () => void foo?.forEach(ele…' > Code 1`] = `
"
  1 | const a = () => void foo?.forEach(element => bar(element));
"
`;

exports[`invalid(226): 'const a = () => void foo?.forEach(ele…' > Error 1/1 1`] = `
"
> 1 | const a = () => void foo?.forEach(element => bar(element));
    |                           ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(227): '1?.forEach((a, b) => call(a, b))' > Code 1`] = `
"
  1 | 1?.forEach((a, b) => call(a, b))
"
`;

exports[`invalid(227): '1?.forEach((a, b) => call(a, b))' > Error 1/1 1`] = `
"
> 1 | 1?.forEach((a, b) => call(a, b))
    |    ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(227): '1?.forEach((a, b) => call(a, b))' > Output 1`] = `
"
  1 | if (1) for (const [b, a] of (1).entries()) call(a, b)
"
`;

exports[`invalid(228): 'array.forEach((arrayInArray) => array…' > Code 1`] = `
"
  1 | array.forEach((arrayInArray) => arrayInArray.forEach(element => bar(element)));
"
`;

exports[`invalid(228): 'array.forEach((arrayInArray) => array…' > Error 1/2 1`] = `
"
> 1 | array.forEach((arrayInArray) => arrayInArray.forEach(element => bar(element)));
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(228): 'array.forEach((arrayInArray) => array…' > Error 2/2 1`] = `
"
> 1 | array.forEach((arrayInArray) => arrayInArray.forEach(element => bar(element)));
    |                                              ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(228): 'array.forEach((arrayInArray) => array…' > Output 1`] = `
"
  1 | for (const arrayInArray of array) for (const element of arrayInArray) bar(element);
"
`;

exports[`invalid(229): 'array.forEach((arrayInArray) => array…' > Code 1`] = `
"
  1 | array.forEach((arrayInArray) => arrayInArray?.forEach(element => bar(element)));
"
`;

exports[`invalid(229): 'array.forEach((arrayInArray) => array…' > Error 1/2 1`] = `
"
> 1 | array.forEach((arrayInArray) => arrayInArray?.forEach(element => bar(element)));
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(229): 'array.forEach((arrayInArray) => array…' > Error 2/2 1`] = `
"
> 1 | array.forEach((arrayInArray) => arrayInArray?.forEach(element => bar(element)));
    |                                               ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(229): 'array.forEach((arrayInArray) => array…' > Output 1`] = `
"
  1 | for (const arrayInArray of array) if (arrayInArray) for (const element of arrayInArray) bar(element);
"
`;

exports[`invalid(230): 'foo.forEach(element => {\\n\\t({element…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({element} = bar);
  3 | });
"
`;

exports[`invalid(230): 'foo.forEach(element => {\\n\\t({element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({element} = bar);
  3 | });
"
`;

exports[`invalid(230): 'foo.forEach(element => {\\n\\t({element…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({element} = bar);
  3 | }
"
`;

exports[`invalid(231): 'foo.forEach(element => {\\n\\t({element…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({element: a} = bar);
  3 | });
"
`;

exports[`invalid(231): 'foo.forEach(element => {\\n\\t({element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({element: a} = bar);
  3 | });
"
`;

exports[`invalid(231): 'foo.forEach(element => {\\n\\t({element…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	({element: a} = bar);
  3 | }
"
`;

exports[`invalid(232): 'foo.forEach(element => {\\n\\t({a: elem…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({a: element} = bar);
  3 | });
"
`;

exports[`invalid(232): 'foo.forEach(element => {\\n\\t({a: elem…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({a: element} = bar);
  3 | });
"
`;

exports[`invalid(232): 'foo.forEach(element => {\\n\\t({a: elem…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({a: element} = bar);
  3 | }
"
`;

exports[`invalid(233): 'foo.forEach(element => {\\n\\t({[elemen…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({[element]: a} = bar);
  3 | });
"
`;

exports[`invalid(233): 'foo.forEach(element => {\\n\\t({[elemen…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({[element]: a} = bar);
  3 | });
"
`;

exports[`invalid(233): 'foo.forEach(element => {\\n\\t({[elemen…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	({[element]: a} = bar);
  3 | }
"
`;

exports[`invalid(234): 'foo.forEach(element => {\\n\\t({[a]: el…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({[a]: element} = bar);
  3 | });
"
`;

exports[`invalid(234): 'foo.forEach(element => {\\n\\t({[a]: el…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({[a]: element} = bar);
  3 | });
"
`;

exports[`invalid(234): 'foo.forEach(element => {\\n\\t({[a]: el…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({[a]: element} = bar);
  3 | }
"
`;

exports[`invalid(235): 'foo.forEach(element => {\\n\\t({element…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({element = a} = bar);
  3 | });
"
`;

exports[`invalid(235): 'foo.forEach(element => {\\n\\t({element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({element = a} = bar);
  3 | });
"
`;

exports[`invalid(235): 'foo.forEach(element => {\\n\\t({element…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({element = a} = bar);
  3 | }
"
`;

exports[`invalid(236): 'foo.forEach(element => {\\n\\t({a = ele…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({a = element} = bar);
  3 | });
"
`;

exports[`invalid(236): 'foo.forEach(element => {\\n\\t({a = ele…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({a = element} = bar);
  3 | });
"
`;

exports[`invalid(236): 'foo.forEach(element => {\\n\\t({a = ele…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	({a = element} = bar);
  3 | }
"
`;

exports[`invalid(237): 'foo.forEach(element => {\\n\\t[element]…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[element] = bar;
  3 | });
"
`;

exports[`invalid(237): 'foo.forEach(element => {\\n\\t[element]…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[element] = bar;
  3 | });
"
`;

exports[`invalid(237): 'foo.forEach(element => {\\n\\t[element]…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	[element] = bar;
  3 | }
"
`;

exports[`invalid(238): 'foo.forEach(element => {\\n\\t[element …' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[element = a] = bar;
  3 | });
"
`;

exports[`invalid(238): 'foo.forEach(element => {\\n\\t[element …' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[element = a] = bar;
  3 | });
"
`;

exports[`invalid(238): 'foo.forEach(element => {\\n\\t[element …' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	[element = a] = bar;
  3 | }
"
`;

exports[`invalid(239): 'foo.forEach(element => {\\n\\t[a = elem…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[a = element] = bar;
  3 | });
"
`;

exports[`invalid(239): 'foo.forEach(element => {\\n\\t[a = elem…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[a = element] = bar;
  3 | });
"
`;

exports[`invalid(239): 'foo.forEach(element => {\\n\\t[a = elem…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	[a = element] = bar;
  3 | }
"
`;

exports[`invalid(240): 'foo.forEach(element => {\\n\\t({deep: {…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: {element}} = bar);
  3 | });
"
`;

exports[`invalid(240): 'foo.forEach(element => {\\n\\t({deep: {…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: {element}} = bar);
  3 | });
"
`;

exports[`invalid(240): 'foo.forEach(element => {\\n\\t({deep: {…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({deep: {element}} = bar);
  3 | }
"
`;

exports[`invalid(241): 'foo.forEach(element => {\\n\\t({deep: {…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: {element: a}} = bar);
  3 | });
"
`;

exports[`invalid(241): 'foo.forEach(element => {\\n\\t({deep: {…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: {element: a}} = bar);
  3 | });
"
`;

exports[`invalid(241): 'foo.forEach(element => {\\n\\t({deep: {…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	({deep: {element: a}} = bar);
  3 | }
"
`;

exports[`invalid(242): 'foo.forEach(element => {\\n\\t({deep: {…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: {a: element}} = bar);
  3 | });
"
`;

exports[`invalid(242): 'foo.forEach(element => {\\n\\t({deep: {…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: {a: element}} = bar);
  3 | });
"
`;

exports[`invalid(242): 'foo.forEach(element => {\\n\\t({deep: {…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({deep: {a: element}} = bar);
  3 | }
"
`;

exports[`invalid(243): 'foo.forEach(element => {\\n\\t({deep: {…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: {[element]: a}} = bar);
  3 | });
"
`;

exports[`invalid(243): 'foo.forEach(element => {\\n\\t({deep: {…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: {[element]: a}} = bar);
  3 | });
"
`;

exports[`invalid(243): 'foo.forEach(element => {\\n\\t({deep: {…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	({deep: {[element]: a}} = bar);
  3 | }
"
`;

exports[`invalid(244): 'foo.forEach(element => {\\n\\t({deep: {…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: {[a]: element}} = bar);
  3 | });
"
`;

exports[`invalid(244): 'foo.forEach(element => {\\n\\t({deep: {…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: {[a]: element}} = bar);
  3 | });
"
`;

exports[`invalid(244): 'foo.forEach(element => {\\n\\t({deep: {…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({deep: {[a]: element}} = bar);
  3 | }
"
`;

exports[`invalid(245): 'foo.forEach(element => {\\n\\t({deep: {…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: {element = a}} = bar);
  3 | });
"
`;

exports[`invalid(245): 'foo.forEach(element => {\\n\\t({deep: {…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: {element = a}} = bar);
  3 | });
"
`;

exports[`invalid(245): 'foo.forEach(element => {\\n\\t({deep: {…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({deep: {element = a}} = bar);
  3 | }
"
`;

exports[`invalid(246): 'foo.forEach(element => {\\n\\t({deep: {…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: {a = element}} = bar);
  3 | });
"
`;

exports[`invalid(246): 'foo.forEach(element => {\\n\\t({deep: {…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: {a = element}} = bar);
  3 | });
"
`;

exports[`invalid(246): 'foo.forEach(element => {\\n\\t({deep: {…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	({deep: {a = element}} = bar);
  3 | }
"
`;

exports[`invalid(247): 'foo.forEach(element => {\\n\\t({deep: […' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: [element]} = bar);
  3 | });
"
`;

exports[`invalid(247): 'foo.forEach(element => {\\n\\t({deep: […' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: [element]} = bar);
  3 | });
"
`;

exports[`invalid(247): 'foo.forEach(element => {\\n\\t({deep: […' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({deep: [element]} = bar);
  3 | }
"
`;

exports[`invalid(248): 'foo.forEach(element => {\\n\\t({deep: […' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: [element = a]} = bar);
  3 | });
"
`;

exports[`invalid(248): 'foo.forEach(element => {\\n\\t({deep: […' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: [element = a]} = bar);
  3 | });
"
`;

exports[`invalid(248): 'foo.forEach(element => {\\n\\t({deep: […' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	({deep: [element = a]} = bar);
  3 | }
"
`;

exports[`invalid(249): 'foo.forEach(element => {\\n\\t({deep: […' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	({deep: [a = element]} = bar);
  3 | });
"
`;

exports[`invalid(249): 'foo.forEach(element => {\\n\\t({deep: […' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	({deep: [a = element]} = bar);
  3 | });
"
`;

exports[`invalid(249): 'foo.forEach(element => {\\n\\t({deep: […' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	({deep: [a = element]} = bar);
  3 | }
"
`;

exports[`invalid(250): 'foo.forEach(element => {\\n\\t[{element…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[{element}] = bar;
  3 | });
"
`;

exports[`invalid(250): 'foo.forEach(element => {\\n\\t[{element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[{element}] = bar;
  3 | });
"
`;

exports[`invalid(250): 'foo.forEach(element => {\\n\\t[{element…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	[{element}] = bar;
  3 | }
"
`;

exports[`invalid(251): 'foo.forEach(element => {\\n\\t[{element…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[{element: a}] = bar;
  3 | });
"
`;

exports[`invalid(251): 'foo.forEach(element => {\\n\\t[{element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[{element: a}] = bar;
  3 | });
"
`;

exports[`invalid(251): 'foo.forEach(element => {\\n\\t[{element…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	[{element: a}] = bar;
  3 | }
"
`;

exports[`invalid(252): 'foo.forEach(element => {\\n\\t[{a: elem…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[{a: element}] = bar;
  3 | });
"
`;

exports[`invalid(252): 'foo.forEach(element => {\\n\\t[{a: elem…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[{a: element}] = bar;
  3 | });
"
`;

exports[`invalid(252): 'foo.forEach(element => {\\n\\t[{a: elem…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	[{a: element}] = bar;
  3 | }
"
`;

exports[`invalid(253): 'foo.forEach(element => {\\n\\t[{[elemen…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[{[element]: a}] = bar;
  3 | });
"
`;

exports[`invalid(253): 'foo.forEach(element => {\\n\\t[{[elemen…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[{[element]: a}] = bar;
  3 | });
"
`;

exports[`invalid(253): 'foo.forEach(element => {\\n\\t[{[elemen…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	[{[element]: a}] = bar;
  3 | }
"
`;

exports[`invalid(254): 'foo.forEach(element => {\\n\\t[{[a]: el…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[{[a]: element}] = bar;
  3 | });
"
`;

exports[`invalid(254): 'foo.forEach(element => {\\n\\t[{[a]: el…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[{[a]: element}] = bar;
  3 | });
"
`;

exports[`invalid(254): 'foo.forEach(element => {\\n\\t[{[a]: el…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	[{[a]: element}] = bar;
  3 | }
"
`;

exports[`invalid(255): 'foo.forEach(element => {\\n\\t[{element…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[{element = a}] = bar;
  3 | });
"
`;

exports[`invalid(255): 'foo.forEach(element => {\\n\\t[{element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[{element = a}] = bar;
  3 | });
"
`;

exports[`invalid(255): 'foo.forEach(element => {\\n\\t[{element…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	[{element = a}] = bar;
  3 | }
"
`;

exports[`invalid(256): 'foo.forEach(element => {\\n\\t[{a = ele…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[{a = element}] = bar;
  3 | });
"
`;

exports[`invalid(256): 'foo.forEach(element => {\\n\\t[{a = ele…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[{a = element}] = bar;
  3 | });
"
`;

exports[`invalid(256): 'foo.forEach(element => {\\n\\t[{a = ele…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	[{a = element}] = bar;
  3 | }
"
`;

exports[`invalid(257): 'foo.forEach(element => {\\n\\t[[element…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[[element]] = bar;
  3 | });
"
`;

exports[`invalid(257): 'foo.forEach(element => {\\n\\t[[element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[[element]] = bar;
  3 | });
"
`;

exports[`invalid(257): 'foo.forEach(element => {\\n\\t[[element…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	[[element]] = bar;
  3 | }
"
`;

exports[`invalid(258): 'foo.forEach(element => {\\n\\t[[element…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[[element = a]] = bar;
  3 | });
"
`;

exports[`invalid(258): 'foo.forEach(element => {\\n\\t[[element…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[[element = a]] = bar;
  3 | });
"
`;

exports[`invalid(258): 'foo.forEach(element => {\\n\\t[[element…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	[[element = a]] = bar;
  3 | }
"
`;

exports[`invalid(259): 'foo.forEach(element => {\\n\\t[[a = ele…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[[a = element]] = bar;
  3 | });
"
`;

exports[`invalid(259): 'foo.forEach(element => {\\n\\t[[a = ele…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[[a = element]] = bar;
  3 | });
"
`;

exports[`invalid(259): 'foo.forEach(element => {\\n\\t[[a = ele…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	[[a = element]] = bar;
  3 | }
"
`;

exports[`invalid(260): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[
  3 | 		bar = ((element) => {
  4 | 			[element] = array;
  5 | 		})(element)
  6 | 	] = baz;
  7 | });
"
`;

exports[`invalid(260): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[
  3 | 		bar = ((element) => {
  4 | 			[element] = array;
  5 | 		})(element)
  6 | 	] = baz;
  7 | });
"
`;

exports[`invalid(260): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	[
  3 | 		bar = ((element) => {
  4 | 			[element] = array;
  5 | 		})(element)
  6 | 	] = baz;
  7 | }
"
`;

exports[`invalid(261): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[
  3 | 		bar = ((element = array) => element)(element)
  4 | 	] = baz;
  5 | });
"
`;

exports[`invalid(261): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[
  3 | 		bar = ((element = array) => element)(element)
  4 | 	] = baz;
  5 | });
"
`;

exports[`invalid(261): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	[
  3 | 		bar = ((element = array) => element)(element)
  4 | 	] = baz;
  5 | }
"
`;

exports[`invalid(262): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	[
  3 | 		bar = (([element] = array) => element)(element)
  4 | 	] = baz;
  5 | });
"
`;

exports[`invalid(262): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	[
  3 | 		bar = (([element] = array) => element)(element)
  4 | 	] = baz;
  5 | });
"
`;

exports[`invalid(262): 'foo.forEach(element => {\\n\\t[\\n\\t\\tba…' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	[
  3 | 		bar = (([element] = array) => element)(element)
  4 | 	] = baz;
  5 | }
"
`;

exports[`invalid(263): 'foo.forEach(element => {\\n\\tfor (elem…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	for (element in bar);
  3 | });
"
`;

exports[`invalid(263): 'foo.forEach(element => {\\n\\tfor (elem…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (element in bar);
  3 | });
"
`;

exports[`invalid(263): 'foo.forEach(element => {\\n\\tfor (elem…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	for (element in bar);
  3 | }
"
`;

exports[`invalid(264): 'foo.forEach(element => {\\n\\tfor ([{el…' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	for ([{element}] of bar);
  3 | });
"
`;

exports[`invalid(264): 'foo.forEach(element => {\\n\\tfor ([{el…' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for ([{element}] of bar);
  3 | });
"
`;

exports[`invalid(264): 'foo.forEach(element => {\\n\\tfor ([{el…' > Output 1`] = `
"
  1 | for (let element of foo) {
  2 | 	for ([{element}] of bar);
  3 | }
"
`;

exports[`invalid(265): 'foo.forEach(element => {\\n\\tfor (key …' > Code 1`] = `
"
  1 | foo.forEach(element => {
  2 | 	for (key in element);
  3 | 	for (item of element);
  4 | });
"
`;

exports[`invalid(265): 'foo.forEach(element => {\\n\\tfor (key …' > Error 1/1 1`] = `
"
> 1 | foo.forEach(element => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (key in element);
  3 | 	for (item of element);
  4 | });
"
`;

exports[`invalid(265): 'foo.forEach(element => {\\n\\tfor (key …' > Output 1`] = `
"
  1 | for (const element of foo) {
  2 | 	for (key in element);
  3 | 	for (item of element);
  4 | }
"
`;

exports[`invalid(266): 'foo.forEach((element, index) => {\\n\\t…' > Code 1`] = `
"
  1 | foo.forEach((element, index) => {
  2 | 	for (index of bar);
  3 | });
"
`;

exports[`invalid(266): 'foo.forEach((element, index) => {\\n\\t…' > Error 1/1 1`] = `
"
> 1 | foo.forEach((element, index) => {
    |     ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
  2 | 	for (index of bar);
  3 | });
"
`;

exports[`invalid(266): 'foo.forEach((element, index) => {\\n\\t…' > Output 1`] = `
"
  1 | for (let [index, element] of foo.entries()) {
  2 | 	for (index of bar);
  3 | }
"
`;

exports[`invalid(267): 'array.forEach((element, index = eleme…' > Code 1`] = `
"
  1 | array.forEach((element, index = element) => {})
"
`;

exports[`invalid(267): 'array.forEach((element, index = eleme…' > Error 1/1 1`] = `
"
> 1 | array.forEach((element, index = element) => {})
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(268): 'array.forEach(({foo}, index = foo) =>…' > Code 1`] = `
"
  1 | array.forEach(({foo}, index = foo) => {})
"
`;

exports[`invalid(268): 'array.forEach(({foo}, index = foo) =>…' > Error 1/1 1`] = `
"
> 1 | array.forEach(({foo}, index = foo) => {})
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(269): 'array.forEach((element, {bar = elemen…' > Code 1`] = `
"
  1 | array.forEach((element, {bar = element}) => {})
"
`;

exports[`invalid(269): 'array.forEach((element, {bar = elemen…' > Error 1/1 1`] = `
"
> 1 | array.forEach((element, {bar = element}) => {})
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;

exports[`invalid(270): 'array.forEach(({foo}, {bar = foo}) =>…' > Code 1`] = `
"
  1 | array.forEach(({foo}, {bar = foo}) => {})
"
`;

exports[`invalid(270): 'array.forEach(({foo}, {bar = foo}) =>…' > Error 1/1 1`] = `
"
> 1 | array.forEach(({foo}, {bar = foo}) => {})
    |       ^^^^^^^ Use \`for…of\` instead of \`.forEach(…)\`.
"
`;
