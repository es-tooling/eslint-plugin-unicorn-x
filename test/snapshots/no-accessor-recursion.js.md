// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'class Foo {\\n\\tget #bar() {\\n\\t\\tcons…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	get #bar() {
  3 | 		const {#bar: bar} = this;
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'class Foo {\\n\\tget #bar() {\\n\\t\\tcons…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	get #bar() {
> 3 | 		const {#bar: bar} = this;
    | 		      ^^^^^^^^^^^^^^^^^^ Disallow recursive access to \`this\` within getters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'const foo = {\\n\\tget bar() {\\n\\t\\tret…' > Code 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		return this.bar;
  4 | 	}
  5 | };
"
`;

exports[`invalid(0): 'const foo = {\\n\\tget bar() {\\n\\t\\tret…' > Error 1/1 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
> 3 | 		return this.bar;
    | 		       ^^^^^^^^ Disallow recursive access to \`this\` within getters.
  4 | 	}
  5 | };
"
`;

exports[`invalid(1): 'class Foo {\\n\\tget bar() {\\n\\t\\tretur…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	get bar() {
  3 | 		return this.bar;
  4 | 	}
  5 | }
"
`;

exports[`invalid(1): 'class Foo {\\n\\tget bar() {\\n\\t\\tretur…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	get bar() {
> 3 | 		return this.bar;
    | 		       ^^^^^^^^ Disallow recursive access to \`this\` within getters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(2): 'const foo = {\\n\\tset bar(value) {\\n\\t…' > Code 1`] = `
"
  1 | const foo = {
  2 | 	set bar(value) {
  3 | 		this.bar = value;
  4 | 	}
  5 | };
"
`;

exports[`invalid(2): 'const foo = {\\n\\tset bar(value) {\\n\\t…' > Error 1/1 1`] = `
"
  1 | const foo = {
  2 | 	set bar(value) {
> 3 | 		this.bar = value;
    | 		^^^^^^^^ Disallow recursive access to \`this\` within setters.
  4 | 	}
  5 | };
"
`;

exports[`invalid(3): 'class Foo {\\n\\tset bar(value) {\\n\\t\\t…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	set bar(value) {
  3 | 		this.bar = value;
  4 | 	}
  5 | }
"
`;

exports[`invalid(3): 'class Foo {\\n\\tset bar(value) {\\n\\t\\t…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	set bar(value) {
> 3 | 		this.bar = value;
    | 		^^^^^^^^ Disallow recursive access to \`this\` within setters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(4): 'const foo = {\\n\\tget bar() {\\n\\t\\tret…' > Code 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		return this.bar.baz;
  4 | 	}
  5 | };
"
`;

exports[`invalid(4): 'const foo = {\\n\\tget bar() {\\n\\t\\tret…' > Error 1/1 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
> 3 | 		return this.bar.baz;
    | 		       ^^^^^^^^ Disallow recursive access to \`this\` within getters.
  4 | 	}
  5 | };
"
`;

exports[`invalid(5): 'const foo = {\\n\\tget bar() {\\n\\t\\tif …' > Code 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		if (true) {
  4 | 			return this.bar;
  5 | 		}
  6 | 	}
  7 | };
"
`;

exports[`invalid(5): 'const foo = {\\n\\tget bar() {\\n\\t\\tif …' > Error 1/1 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		if (true) {
> 4 | 			return this.bar;
    | 			       ^^^^^^^^ Disallow recursive access to \`this\` within getters.
  5 | 		}
  6 | 	}
  7 | };
"
`;

exports[`invalid(6): 'const foo = {\\n\\tget bar() {\\n\\t\\tcon…' > Code 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		const baz = () => {
  4 | 			return this.bar;
  5 | 		}
  6 | 	}
  7 | };
"
`;

exports[`invalid(6): 'const foo = {\\n\\tget bar() {\\n\\t\\tcon…' > Error 1/1 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		const baz = () => {
> 4 | 			return this.bar;
    | 			       ^^^^^^^^ Disallow recursive access to \`this\` within getters.
  5 | 		}
  6 | 	}
  7 | };
"
`;

exports[`invalid(7): 'const foo = {\\n\\tget bar() {\\n\\t\\tcon…' > Code 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		const baz = () => {
  4 | 			return () => {
  5 | 				return this.bar;
  6 | 			}
  7 | 		}
  8 | 	}
  9 | };
"
`;

exports[`invalid(7): 'const foo = {\\n\\tget bar() {\\n\\t\\tcon…' > Error 1/1 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		const baz = () => {
  4 | 			return () => {
> 5 | 				return this.bar;
    | 				       ^^^^^^^^ Disallow recursive access to \`this\` within getters.
  6 | 			}
  7 | 		}
  8 | 	}
  9 | };
"
`;

exports[`invalid(8): 'const foo = {\\n\\tget bar() {\\n\\t\\ta =…' > Code 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
  3 | 		a = this.bar;
  4 | 	}
  5 | };
"
`;

exports[`invalid(8): 'const foo = {\\n\\tget bar() {\\n\\t\\ta =…' > Error 1/1 1`] = `
"
  1 | const foo = {
  2 | 	get bar() {
> 3 | 		a = this.bar;
    | 		    ^^^^^^^^ Disallow recursive access to \`this\` within getters.
  4 | 	}
  5 | };
"
`;

exports[`invalid(9): 'class Foo{\\n\\tget bar() {\\n\\t\\treturn…' > Code 1`] = `
"
  1 | class Foo{
  2 | 	get bar() {
  3 | 		return this.#bar;
  4 | 	}
  5 |
  6 | 	get #bar() {
  7 | 		return this.#bar
  8 | 	}
  9 | }
"
`;

exports[`invalid(9): 'class Foo{\\n\\tget bar() {\\n\\t\\treturn…' > Error 1/1 1`] = `
"
  1 | class Foo{
  2 | 	get bar() {
  3 | 		return this.#bar;
  4 | 	}
  5 |
  6 | 	get #bar() {
> 7 | 		return this.#bar
    | 		       ^^^^^^^^^ Disallow recursive access to \`this\` within getters.
  8 | 	}
  9 | }
"
`;

exports[`invalid(10): 'class Foo{\\n\\tstatic get bar() {\\n\\t\\…' > Code 1`] = `
"
  1 | class Foo{
  2 | 	static get bar() {
  3 | 		return this.bar;
  4 | 	}
  5 | }
"
`;

exports[`invalid(10): 'class Foo{\\n\\tstatic get bar() {\\n\\t\\…' > Error 1/1 1`] = `
"
  1 | class Foo{
  2 | 	static get bar() {
> 3 | 		return this.bar;
    | 		       ^^^^^^^^ Disallow recursive access to \`this\` within getters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(11): 'class Foo{\\n\\tget bar() {\\n\\t\\tconst …' > Code 1`] = `
"
  1 | class Foo{
  2 | 	get bar() {
  3 | 		const {bar} = this;
  4 | 	}
  5 |
  6 | 	get baz() {
  7 | 		const {baz: baz1} = this;
  8 | 	}
  9 | }
"
`;

exports[`invalid(11): 'class Foo{\\n\\tget bar() {\\n\\t\\tconst …' > Error 1/2 1`] = `
"
  1 | class Foo{
  2 | 	get bar() {
> 3 | 		const {bar} = this;
    | 		      ^^^^^^^^^^^^ Disallow recursive access to \`this\` within getters.
  4 | 	}
  5 |
  6 | 	get baz() {
  7 | 		const {baz: baz1} = this;
  8 | 	}
  9 | }
"
`;

exports[`invalid(11): 'class Foo{\\n\\tget bar() {\\n\\t\\tconst …' > Error 2/2 1`] = `
"
  1 | class Foo{
  2 | 	get bar() {
  3 | 		const {bar} = this;
  4 | 	}
  5 |
  6 | 	get baz() {
> 7 | 		const {baz: baz1} = this;
    | 		      ^^^^^^^^^^^^^^^^^^ Disallow recursive access to \`this\` within getters.
  8 | 	}
  9 | }
"
`;

exports[`invalid(12): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t++ t…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
  3 | 		++ this.bar;
  4 | 	}
  5 | }
"
`;

exports[`invalid(12): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t++ t…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
> 3 | 		++ this.bar;
    | 		   ^^^^^^^^ Disallow recursive access to \`this\` within setters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(13): 'class Foo {\\n\\tset bar(v) {\\n\\t\\tthis…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
  3 | 		this.bar --;
  4 | 	}
  5 | }
"
`;

exports[`invalid(13): 'class Foo {\\n\\tset bar(v) {\\n\\t\\tthis…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
> 3 | 		this.bar --;
    | 		^^^^^^^^ Disallow recursive access to \`this\` within setters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(14): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t[thi…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
  3 | 		[this.bar] = array;
  4 | 	}
  5 | }
"
`;

exports[`invalid(14): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t[thi…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
> 3 | 		[this.bar] = array;
    | 		 ^^^^^^^^ Disallow recursive access to \`this\` within setters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(15): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t[thi…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
  3 | 		[this.bar = defaultValue] = array;
  4 | 	}
  5 | }
"
`;

exports[`invalid(15): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t[thi…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
> 3 | 		[this.bar = defaultValue] = array;
    | 		 ^^^^^^^^ Disallow recursive access to \`this\` within setters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(16): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t({pr…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
  3 | 		({property: this.bar} = object);
  4 | 	}
  5 | }
"
`;

exports[`invalid(16): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t({pr…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
> 3 | 		({property: this.bar} = object);
    | 		            ^^^^^^^^ Disallow recursive access to \`this\` within setters.
  4 | 	}
  5 | }
"
`;

exports[`invalid(17): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t({pr…' > Code 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
  3 | 		({property: this.bar = defaultValue} = object);
  4 | 	}
  5 | }
"
`;

exports[`invalid(17): 'class Foo {\\n\\tset bar(v) {\\n\\t\\t({pr…' > Error 1/1 1`] = `
"
  1 | class Foo {
  2 | 	set bar(v) {
> 3 | 		({property: this.bar = defaultValue} = object);
    | 		            ^^^^^^^^ Disallow recursive access to \`this\` within setters.
  4 | 	}
  5 | }
"
`;
