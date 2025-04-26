// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '<template><div v-if="foo.length"></di…' > Code 1`] = `
"
  1 | <template><div v-if="foo.length"></div></template>
"
`;

exports[`invalid(0): '<template><div v-if="foo.length"></di…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="foo.length"></div></template>
    |                      ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(0): '<template><div v-if="foo.length"></di…' > Output 1`] = `
"
  1 | <template><div v-if="foo.length > 0"></div></template>
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Code 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 1/15 1`] = `
"
   1 | if (
   2 | 	!!!(
>  3 | 		!foo.length &&
     | 		^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 2/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
>  4 | 		foo.length == 0 &&
     | 		^^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 3/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
>  5 | 		foo.length < 1 &&
     | 		^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 4/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
>  6 | 		0 === foo.length &&
     | 		^^^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 5/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
>  7 | 		0 == foo.length &&
     | 		^^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 6/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
>  8 | 		1 > foo.length
     | 		^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 7/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
> 11 | 		foo.length ||
     | 		^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 8/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
> 12 | 		!!foo.length ||
     | 		^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 9/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
> 13 | 		foo.length !== 0 ||
     | 		^^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 10/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
> 14 | 		foo.length != 0 ||
     | 		^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 11/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
> 15 | 		foo.length >= 1 ||
     | 		^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 12/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
> 16 | 		0 !== foo.length ||
     | 		^^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 13/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
> 17 | 		0 != foo.length ||
     | 		^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  18 | 		0 < foo.length ||
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 14/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
> 18 | 		0 < foo.length ||
     | 		^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  19 | 		1 <= foo.length
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Error 15/15 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		!foo.length &&
   4 | 		foo.length == 0 &&
   5 | 		foo.length < 1 &&
   6 | 		0 === foo.length &&
   7 | 		0 == foo.length &&
   8 | 		1 > foo.length
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length ||
  12 | 		!!foo.length ||
  13 | 		foo.length !== 0 ||
  14 | 		foo.length != 0 ||
  15 | 		foo.length >= 1 ||
  16 | 		0 !== foo.length ||
  17 | 		0 != foo.length ||
  18 | 		0 < foo.length ||
> 19 | 		1 <= foo.length
     | 		^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(0): 'if (\\n\\t!!!(\\n\\t\\t!foo.length &&\\n\\t\\…' > Output 1`] = `
"
   1 | if (
   2 | 	!!!(
   3 | 		foo.length === 0 &&
   4 | 		foo.length === 0 &&
   5 | 		foo.length === 0 &&
   6 | 		foo.length === 0 &&
   7 | 		foo.length === 0 &&
   8 | 		foo.length === 0
   9 | 	) ||
  10 | 	!(
  11 | 		foo.length > 0 ||
  12 | 		foo.length > 0 ||
  13 | 		foo.length > 0 ||
  14 | 		foo.length > 0 ||
  15 | 		foo.length > 0 ||
  16 | 		foo.length > 0 ||
  17 | 		foo.length > 0 ||
  18 | 		foo.length > 0 ||
  19 | 		foo.length > 0
  20 | 	)
  21 | ) {}
"
`;

exports[`invalid(1): '<template>\\n\\t<div>\\n\\t\\t<div v-if="f…' > Code 1`] = `
"
  1 | <template>
  2 | 	<div>
  3 | 		<div v-if="foo"></div>
  4 | 		<div v-else-if="bar.length"></div>
  5 | 	</div>
  6 | </template>
"
`;

exports[`invalid(1): '<template>\\n\\t<div>\\n\\t\\t<div v-if="f…' > Error 1/1 1`] = `
"
  1 | <template>
  2 | 	<div>
  3 | 		<div v-if="foo"></div>
> 4 | 		<div v-else-if="bar.length"></div>
    | 		                ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
  5 | 	</div>
  6 | </template>
"
`;

exports[`invalid(1): '<template>\\n\\t<div>\\n\\t\\t<div v-if="f…' > Output 1`] = `
"
  1 | <template>
  2 | 	<div>
  3 | 		<div v-if="foo"></div>
  4 | 		<div v-else-if="bar.length > 0"></div>
  5 | 	</div>
  6 | </template>
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Code 1`] = `
"
   1 | if (
   2 | 	foo.length ||
   3 | 	!!foo.length ||
   4 | 	foo.length != 0 ||
   5 | 	foo.length > 0 ||
   6 | 	foo.length >= 1 ||
   7 | 	0 !== foo.length ||
   8 | 	0 != foo.length ||
   9 | 	0 < foo.length ||
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 1/9 1`] = `
"
   1 | if (
>  2 | 	foo.length ||
     | 	^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
   3 | 	!!foo.length ||
   4 | 	foo.length != 0 ||
   5 | 	foo.length > 0 ||
   6 | 	foo.length >= 1 ||
   7 | 	0 !== foo.length ||
   8 | 	0 != foo.length ||
   9 | 	0 < foo.length ||
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 2/9 1`] = `
"
   1 | if (
   2 | 	foo.length ||
>  3 | 	!!foo.length ||
     | 	^^^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
   4 | 	foo.length != 0 ||
   5 | 	foo.length > 0 ||
   6 | 	foo.length >= 1 ||
   7 | 	0 !== foo.length ||
   8 | 	0 != foo.length ||
   9 | 	0 < foo.length ||
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 3/9 1`] = `
"
   1 | if (
   2 | 	foo.length ||
   3 | 	!!foo.length ||
>  4 | 	foo.length != 0 ||
     | 	^^^^^^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
   5 | 	foo.length > 0 ||
   6 | 	foo.length >= 1 ||
   7 | 	0 !== foo.length ||
   8 | 	0 != foo.length ||
   9 | 	0 < foo.length ||
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 4/9 1`] = `
"
   1 | if (
   2 | 	foo.length ||
   3 | 	!!foo.length ||
   4 | 	foo.length != 0 ||
>  5 | 	foo.length > 0 ||
     | 	^^^^^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
   6 | 	foo.length >= 1 ||
   7 | 	0 !== foo.length ||
   8 | 	0 != foo.length ||
   9 | 	0 < foo.length ||
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 5/9 1`] = `
"
   1 | if (
   2 | 	foo.length ||
   3 | 	!!foo.length ||
   4 | 	foo.length != 0 ||
   5 | 	foo.length > 0 ||
>  6 | 	foo.length >= 1 ||
     | 	^^^^^^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
   7 | 	0 !== foo.length ||
   8 | 	0 != foo.length ||
   9 | 	0 < foo.length ||
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 6/9 1`] = `
"
   1 | if (
   2 | 	foo.length ||
   3 | 	!!foo.length ||
   4 | 	foo.length != 0 ||
   5 | 	foo.length > 0 ||
   6 | 	foo.length >= 1 ||
>  7 | 	0 !== foo.length ||
     | 	^^^^^^^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
   8 | 	0 != foo.length ||
   9 | 	0 < foo.length ||
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 7/9 1`] = `
"
   1 | if (
   2 | 	foo.length ||
   3 | 	!!foo.length ||
   4 | 	foo.length != 0 ||
   5 | 	foo.length > 0 ||
   6 | 	foo.length >= 1 ||
   7 | 	0 !== foo.length ||
>  8 | 	0 != foo.length ||
     | 	^^^^^^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
   9 | 	0 < foo.length ||
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 8/9 1`] = `
"
   1 | if (
   2 | 	foo.length ||
   3 | 	!!foo.length ||
   4 | 	foo.length != 0 ||
   5 | 	foo.length > 0 ||
   6 | 	foo.length >= 1 ||
   7 | 	0 !== foo.length ||
   8 | 	0 != foo.length ||
>  9 | 	0 < foo.length ||
     | 	^^^^^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
  10 | 	1 <= foo.length
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Error 9/9 1`] = `
"
   1 | if (
   2 | 	foo.length ||
   3 | 	!!foo.length ||
   4 | 	foo.length != 0 ||
   5 | 	foo.length > 0 ||
   6 | 	foo.length >= 1 ||
   7 | 	0 !== foo.length ||
   8 | 	0 != foo.length ||
   9 | 	0 < foo.length ||
> 10 | 	1 <= foo.length
     | 	^^^^^^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
  11 | ) {}
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Options 1`] = `
"
[
  {
    "non-zero": "not-equal"
  }
]
"
`;

exports[`invalid(1): 'if (\\n\\tfoo.length ||\\n\\t!!foo.length…' > Output 1`] = `
"
   1 | if (
   2 | 	foo.length !== 0 ||
   3 | 	foo.length !== 0 ||
   4 | 	foo.length !== 0 ||
   5 | 	foo.length !== 0 ||
   6 | 	foo.length !== 0 ||
   7 | 	foo.length !== 0 ||
   8 | 	foo.length !== 0 ||
   9 | 	foo.length !== 0 ||
  10 | 	foo.length !== 0
  11 | ) {}
"
`;

exports[`invalid(2): '<template><div v-if="foo.length"></di…' > Code 1`] = `
"
  1 | <template><div v-if="foo.length"></div></template>
"
`;

exports[`invalid(2): '<template><div v-if="foo.length"></di…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="foo.length"></div></template>
    |                      ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(2): '<template><div v-if="foo.length"></di…' > Output 1`] = `
"
  1 | <template><div v-if="foo.length > 0"></div></template>
"
`;

exports[`invalid(2): 'const foo = { length: 123 }; if (foo.…' > Code 1`] = `
"
  1 | const foo = { length: 123 }; if (foo.length) {}
"
`;

exports[`invalid(2): 'const foo = { length: 123 }; if (foo.…' > Error 1/1 1`] = `
"
> 1 | const foo = { length: 123 }; if (foo.length) {}
    |                                  ^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
"
`;

exports[`invalid(2): 'const foo = { length: 123 }; if (foo.…' > Options 1`] = `
"
[
  {
    "non-zero": "not-equal"
  }
]
"
`;

exports[`invalid(2): 'const foo = { length: 123 }; if (foo.…' > Output 1`] = `
"
  1 | const foo = { length: 123 }; if (foo.length !== 0) {}
"
`;

exports[`invalid(3): '<template><div v-if="foo.length"></di…' > Code 1`] = `
"
  1 | <template><div v-if="foo.length"></div></template>
"
`;

exports[`invalid(3): '<template><div v-if="foo.length"></di…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="foo.length"></div></template>
    |                      ^^^^^^^^^^ Use \`.length !== 0\` when checking length is not zero.
"
`;

exports[`invalid(3): '<template><div v-if="foo.length"></di…' > Options 1`] = `
"
[
  {
    "non-zero": "not-equal"
  }
]
"
`;

exports[`invalid(3): '<template><div v-if="foo.length"></di…' > Output 1`] = `
"
  1 | <template><div v-if="foo.length !== 0"></div></template>
"
`;

exports[`invalid(3): 'if (foo.bar && foo.bar.length) {}' > Code 1`] = `
"
  1 | if (foo.bar && foo.bar.length) {}
"
`;

exports[`invalid(3): 'if (foo.bar && foo.bar.length) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.bar && foo.bar.length) {}
    |                ^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(3): 'if (foo.bar && foo.bar.length) {}' > Output 1`] = `
"
  1 | if (foo.bar && foo.bar.length > 0) {}
"
`;

exports[`invalid(4): '<template><div v-if="foo.length"></di…' > Code 1`] = `
"
  1 | <template><div v-if="foo.length"></div></template>
"
`;

exports[`invalid(4): '<template><div v-if="foo.length"></di…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="foo.length"></div></template>
    |                      ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(4): '<template><div v-if="foo.length"></di…' > Options 1`] = `
"
[
  {
    "non-zero": "greater-than"
  }
]
"
`;

exports[`invalid(4): '<template><div v-if="foo.length"></di…' > Output 1`] = `
"
  1 | <template><div v-if="foo.length > 0"></div></template>
"
`;

exports[`invalid(4): 'if (foo.length || foo.bar()) {}' > Code 1`] = `
"
  1 | if (foo.length || foo.bar()) {}
"
`;

exports[`invalid(4): 'if (foo.length || foo.bar()) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.length || foo.bar()) {}
    |     ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(4): 'if (foo.length || foo.bar()) {}' > Output 1`] = `
"
  1 | if (foo.length > 0 || foo.bar()) {}
"
`;

exports[`invalid(5): '<template><div v-if="foo.length && ba…' > Code 1`] = `
"
  1 | <template><div v-if="foo.length && bar"></div></template>
"
`;

exports[`invalid(5): '<template><div v-if="foo.length && ba…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="foo.length && bar"></div></template>
    |                      ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(5): '<template><div v-if="foo.length && ba…' > Output 1`] = `
"
  1 | <template><div v-if="foo.length > 0 && bar"></div></template>
"
`;

exports[`invalid(5): 'if (!!(!!foo.length)) {}' > Code 1`] = `
"
  1 | if (!!(!!foo.length)) {}
"
`;

exports[`invalid(5): 'if (!!(!!foo.length)) {}' > Error 1/1 1`] = `
"
> 1 | if (!!(!!foo.length)) {}
    |     ^^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(5): 'if (!!(!!foo.length)) {}' > Output 1`] = `
"
  1 | if (foo.length > 0) {}
"
`;

exports[`invalid(6): '<script>if (foo.length) {}</script>' > Code 1`] = `
"
  1 | <script>if (foo.length) {}</script>
"
`;

exports[`invalid(6): '<script>if (foo.length) {}</script>' > Error 1/1 1`] = `
"
> 1 | <script>if (foo.length) {}</script>
    |             ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(6): '<script>if (foo.length) {}</script>' > Output 1`] = `
"
  1 | <script>if (foo.length > 0) {}</script>
"
`;

exports[`invalid(6): 'if (!(foo.length === 0)) {}' > Code 1`] = `
"
  1 | if (!(foo.length === 0)) {}
"
`;

exports[`invalid(6): 'if (!(foo.length === 0)) {}' > Error 1/1 1`] = `
"
> 1 | if (!(foo.length === 0)) {}
    |     ^^^^^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(6): 'if (!(foo.length === 0)) {}' > Output 1`] = `
"
  1 | if (foo.length > 0) {}
"
`;

exports[`invalid(7): '<template><div v-show="foo.length"></…' > Code 1`] = `
"
  1 | <template><div v-show="foo.length"></div></template>
"
`;

exports[`invalid(7): '<template><div v-show="foo.length"></…' > Error 1/1 1`] = `
"
> 1 | <template><div v-show="foo.length"></div></template>
    |                        ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(7): '<template><div v-show="foo.length"></…' > Output 1`] = `
"
  1 | <template><div v-show="foo.length > 0"></div></template>
"
`;

exports[`invalid(7): 'while (foo.length >= 1) {}' > Code 1`] = `
"
  1 | while (foo.length >= 1) {}
"
`;

exports[`invalid(7): 'while (foo.length >= 1) {}' > Error 1/1 1`] = `
"
> 1 | while (foo.length >= 1) {}
    |        ^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(7): 'while (foo.length >= 1) {}' > Output 1`] = `
"
  1 | while (foo.length > 0) {}
"
`;

exports[`invalid(8): '<template><div :hidden="foo.length >=…' > Code 1`] = `
"
  1 | <template><div :hidden="foo.length >= 1"></div></template>
"
`;

exports[`invalid(8): '<template><div :hidden="foo.length >=…' > Error 1/1 1`] = `
"
> 1 | <template><div :hidden="foo.length >= 1"></div></template>
    |                         ^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(8): '<template><div :hidden="foo.length >=…' > Output 1`] = `
"
  1 | <template><div :hidden="foo.length > 0"></div></template>
"
`;

exports[`invalid(8): 'do {} while (foo.length);' > Code 1`] = `
"
  1 | do {} while (foo.length);
"
`;

exports[`invalid(8): 'do {} while (foo.length);' > Error 1/1 1`] = `
"
> 1 | do {} while (foo.length);
    |              ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(8): 'do {} while (foo.length);' > Output 1`] = `
"
  1 | do {} while (foo.length > 0);
"
`;

exports[`invalid(9): '<template><div @click="foo.length >= …' > Code 1`] = `
"
  1 | <template><div @click="foo.length >= 1"></div></template>
"
`;

exports[`invalid(9): '<template><div @click="foo.length >= …' > Error 1/1 1`] = `
"
> 1 | <template><div @click="foo.length >= 1"></div></template>
    |                        ^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(9): '<template><div @click="foo.length >= …' > Output 1`] = `
"
  1 | <template><div @click="foo.length > 0"></div></template>
"
`;

exports[`invalid(9): 'for (let i = 0; (bar && !foo.length);…' > Code 1`] = `
"
  1 | for (let i = 0; (bar && !foo.length); i ++) {}
"
`;

exports[`invalid(9): 'for (let i = 0; (bar && !foo.length);…' > Error 1/1 1`] = `
"
> 1 | for (let i = 0; (bar && !foo.length); i ++) {}
    |                         ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(9): 'for (let i = 0; (bar && !foo.length);…' > Output 1`] = `
"
  1 | for (let i = 0; (bar && foo.length === 0); i ++) {}
"
`;

exports[`invalid(10): '<template><div @click="method($event,…' > Code 1`] = `
"
  1 | <template><div @click="method($event, foo.length >= 1)"></div></template>
"
`;

exports[`invalid(10): '<template><div @click="method($event,…' > Error 1/1 1`] = `
"
> 1 | <template><div @click="method($event, foo.length >= 1)"></div></template>
    |                                       ^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(10): '<template><div @click="method($event,…' > Output 1`] = `
"
  1 | <template><div @click="method($event, foo.length > 0)"></div></template>
"
`;

exports[`invalid(10): 'const isEmpty = foo.length < 1;' > Code 1`] = `
"
  1 | const isEmpty = foo.length < 1;
"
`;

exports[`invalid(10): 'const isEmpty = foo.length < 1;' > Error 1/1 1`] = `
"
> 1 | const isEmpty = foo.length < 1;
    |                 ^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(10): 'const isEmpty = foo.length < 1;' > Output 1`] = `
"
  1 | const isEmpty = foo.length === 0;
"
`;

exports[`invalid(11): '<template><div v-bind:hidden="0 === f…' > Code 1`] = `
"
  1 | <template><div v-bind:hidden="0 === foo.length"></div></template>
"
`;

exports[`invalid(11): '<template><div v-bind:hidden="0 === f…' > Error 1/1 1`] = `
"
> 1 | <template><div v-bind:hidden="0 === foo.length"></div></template>
    |                               ^^^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(11): '<template><div v-bind:hidden="0 === f…' > Output 1`] = `
"
  1 | <template><div v-bind:hidden="foo.length === 0"></div></template>
"
`;

exports[`invalid(11): 'bar(foo.length >= 1)' > Code 1`] = `
"
  1 | bar(foo.length >= 1)
"
`;

exports[`invalid(11): 'bar(foo.length >= 1)' > Error 1/1 1`] = `
"
> 1 | bar(foo.length >= 1)
    |     ^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(11): 'bar(foo.length >= 1)' > Output 1`] = `
"
  1 | bar(foo.length > 0)
"
`;

exports[`invalid(12): '<template><input :disabled="Boolean(f…' > Code 1`] = `
"
  1 | <template><input :disabled="Boolean(foo.length)"></template>
"
`;

exports[`invalid(12): '<template><input :disabled="Boolean(f…' > Error 1/1 1`] = `
"
> 1 | <template><input :disabled="Boolean(foo.length)"></template>
    |                             ^^^^^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(12): '<template><input :disabled="Boolean(f…' > Output 1`] = `
"
  1 | <template><input :disabled="foo.length > 0"></template>
"
`;

exports[`invalid(12): 'bar(!foo.length || foo.length)' > Code 1`] = `
"
  1 | bar(!foo.length || foo.length)
"
`;

exports[`invalid(12): 'bar(!foo.length || foo.length)' > Error 1/2 1`] = `
"
> 1 | bar(!foo.length || foo.length)
    |     ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(12): 'bar(!foo.length || foo.length)' > Error 2/2 1`] = `
"
> 1 | bar(!foo.length || foo.length)
    |                    ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.length\` with \`.length > 0\`.
  1 | bar(!foo.length || foo.length > 0)
"
`;

exports[`invalid(12): 'bar(!foo.length || foo.length)' > Output 1`] = `
"
  1 | bar(foo.length === 0 || foo.length)
"
`;

exports[`invalid(13): '<template><custom-component :custom-p…' > Code 1`] = `
"
  1 | <template><custom-component :custom-property="!foo.length"></custom-component></template>
"
`;

exports[`invalid(13): '<template><custom-component :custom-p…' > Error 1/1 1`] = `
"
> 1 | <template><custom-component :custom-property="!foo.length"></custom-component></template>
    |                                               ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(13): '<template><custom-component :custom-p…' > Output 1`] = `
"
  1 | <template><custom-component :custom-property="foo.length === 0"></custom-component></template>
"
`;

exports[`invalid(13): 'const bar = void !foo.length;' > Code 1`] = `
"
  1 | const bar = void !foo.length;
"
`;

exports[`invalid(13): 'const bar = void !foo.length;' > Error 1/1 1`] = `
"
> 1 | const bar = void !foo.length;
    |                  ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(13): 'const bar = void !foo.length;' > Output 1`] = `
"
  1 | const bar = void (foo.length === 0);
"
`;

exports[`invalid(14): 'const isNotEmpty = Boolean(foo.length)' > Code 1`] = `
"
  1 | const isNotEmpty = Boolean(foo.length)
"
`;

exports[`invalid(14): 'const isNotEmpty = Boolean(foo.length)' > Error 1/1 1`] = `
"
> 1 | const isNotEmpty = Boolean(foo.length)
    |                    ^^^^^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(14): 'const isNotEmpty = Boolean(foo.length)' > Output 1`] = `
"
  1 | const isNotEmpty = foo.length > 0
"
`;

exports[`invalid(15): 'const isNotEmpty = Boolean(foo.length…' > Code 1`] = `
"
  1 | const isNotEmpty = Boolean(foo.length || bar)
"
`;

exports[`invalid(15): 'const isNotEmpty = Boolean(foo.length…' > Error 1/1 1`] = `
"
> 1 | const isNotEmpty = Boolean(foo.length || bar)
    |                            ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(15): 'const isNotEmpty = Boolean(foo.length…' > Output 1`] = `
"
  1 | const isNotEmpty = Boolean(foo.length > 0 || bar)
"
`;

exports[`invalid(16): 'const isEmpty = Boolean(!foo.length)' > Code 1`] = `
"
  1 | const isEmpty = Boolean(!foo.length)
"
`;

exports[`invalid(16): 'const isEmpty = Boolean(!foo.length)' > Error 1/1 1`] = `
"
> 1 | const isEmpty = Boolean(!foo.length)
    |                 ^^^^^^^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(16): 'const isEmpty = Boolean(!foo.length)' > Output 1`] = `
"
  1 | const isEmpty = foo.length === 0
"
`;

exports[`invalid(17): 'const isEmpty = Boolean(foo.length ==…' > Code 1`] = `
"
  1 | const isEmpty = Boolean(foo.length === 0)
"
`;

exports[`invalid(17): 'const isEmpty = Boolean(foo.length ==…' > Error 1/1 1`] = `
"
> 1 | const isEmpty = Boolean(foo.length === 0)
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(17): 'const isEmpty = Boolean(foo.length ==…' > Output 1`] = `
"
  1 | const isEmpty = foo.length === 0
"
`;

exports[`invalid(18): 'const isNotEmpty = !Boolean(foo.lengt…' > Code 1`] = `
"
  1 | const isNotEmpty = !Boolean(foo.length === 0)
"
`;

exports[`invalid(18): 'const isNotEmpty = !Boolean(foo.lengt…' > Error 1/1 1`] = `
"
> 1 | const isNotEmpty = !Boolean(foo.length === 0)
    |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(18): 'const isNotEmpty = !Boolean(foo.lengt…' > Output 1`] = `
"
  1 | const isNotEmpty = foo.length > 0
"
`;

exports[`invalid(19): 'const isEmpty = !Boolean(!Boolean(foo…' > Code 1`] = `
"
  1 | const isEmpty = !Boolean(!Boolean(foo.length === 0))
"
`;

exports[`invalid(19): 'const isEmpty = !Boolean(!Boolean(foo…' > Error 1/1 1`] = `
"
> 1 | const isEmpty = !Boolean(!Boolean(foo.length === 0))
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(19): 'const isEmpty = !Boolean(!Boolean(foo…' > Output 1`] = `
"
  1 | const isEmpty = foo.length === 0
"
`;

exports[`invalid(20): 'if (foo.size) {}' > Code 1`] = `
"
  1 | if (foo.size) {}
"
`;

exports[`invalid(20): 'if (foo.size) {}' > Error 1/1 1`] = `
"
> 1 | if (foo.size) {}
    |     ^^^^^^^^ Use \`.size > 0\` when checking size is not zero.
"
`;

exports[`invalid(20): 'if (foo.size) {}' > Output 1`] = `
"
  1 | if (foo.size > 0) {}
"
`;

exports[`invalid(21): 'if (foo.size && bar.length) {}' > Code 1`] = `
"
  1 | if (foo.size && bar.length) {}
"
`;

exports[`invalid(21): 'if (foo.size && bar.length) {}' > Error 1/2 1`] = `
"
> 1 | if (foo.size && bar.length) {}
    |     ^^^^^^^^ Use \`.size > 0\` when checking size is not zero.
"
`;

exports[`invalid(21): 'if (foo.size && bar.length) {}' > Error 2/2 1`] = `
"
> 1 | if (foo.size && bar.length) {}
    |                 ^^^^^^^^^^ Use \`.length > 0\` when checking length is not zero.
"
`;

exports[`invalid(21): 'if (foo.size && bar.length) {}' > Output 1`] = `
"
  1 | if (foo.size > 0 && bar.length > 0) {}
"
`;

exports[`invalid(22): 'function foo() {return!foo.length}' > Code 1`] = `
"
  1 | function foo() {return!foo.length}
"
`;

exports[`invalid(22): 'function foo() {return!foo.length}' > Error 1/1 1`] = `
"
> 1 | function foo() {return!foo.length}
    |                       ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(22): 'function foo() {return!foo.length}' > Output 1`] = `
"
  1 | function foo() {return foo.length === 0}
"
`;

exports[`invalid(23): 'function foo() {throw!foo.length}' > Code 1`] = `
"
  1 | function foo() {throw!foo.length}
"
`;

exports[`invalid(23): 'function foo() {throw!foo.length}' > Error 1/1 1`] = `
"
> 1 | function foo() {throw!foo.length}
    |                      ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(23): 'function foo() {throw!foo.length}' > Output 1`] = `
"
  1 | function foo() {throw foo.length === 0}
"
`;

exports[`invalid(24): 'async function foo() {await!foo.lengt…' > Code 1`] = `
"
  1 | async function foo() {await!foo.length}
"
`;

exports[`invalid(24): 'async function foo() {await!foo.lengt…' > Error 1/1 1`] = `
"
> 1 | async function foo() {await!foo.length}
    |                            ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(24): 'async function foo() {await!foo.lengt…' > Output 1`] = `
"
  1 | async function foo() {await (foo.length === 0)}
"
`;

exports[`invalid(25): 'function * foo() {yield!foo.length}' > Code 1`] = `
"
  1 | function * foo() {yield!foo.length}
"
`;

exports[`invalid(25): 'function * foo() {yield!foo.length}' > Error 1/1 1`] = `
"
> 1 | function * foo() {yield!foo.length}
    |                        ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(25): 'function * foo() {yield!foo.length}' > Output 1`] = `
"
  1 | function * foo() {yield foo.length === 0}
"
`;

exports[`invalid(26): 'function * foo() {yield*!foo.length}' > Code 1`] = `
"
  1 | function * foo() {yield*!foo.length}
"
`;

exports[`invalid(26): 'function * foo() {yield*!foo.length}' > Error 1/1 1`] = `
"
> 1 | function * foo() {yield*!foo.length}
    |                         ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(26): 'function * foo() {yield*!foo.length}' > Output 1`] = `
"
  1 | function * foo() {yield*foo.length === 0}
"
`;

exports[`invalid(27): 'delete!foo.length' > Code 1`] = `
"
  1 | delete!foo.length
"
`;

exports[`invalid(27): 'delete!foo.length' > Error 1/1 1`] = `
"
> 1 | delete!foo.length
    |       ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(27): 'delete!foo.length' > Output 1`] = `
"
  1 | delete (foo.length === 0)
"
`;

exports[`invalid(28): 'typeof!foo.length' > Code 1`] = `
"
  1 | typeof!foo.length
"
`;

exports[`invalid(28): 'typeof!foo.length' > Error 1/1 1`] = `
"
> 1 | typeof!foo.length
    |       ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(28): 'typeof!foo.length' > Output 1`] = `
"
  1 | typeof (foo.length === 0)
"
`;

exports[`invalid(29): 'void!foo.length' > Code 1`] = `
"
  1 | void!foo.length
"
`;

exports[`invalid(29): 'void!foo.length' > Error 1/1 1`] = `
"
> 1 | void!foo.length
    |     ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(29): 'void!foo.length' > Output 1`] = `
"
  1 | void (foo.length === 0)
"
`;

exports[`invalid(30): 'a instanceof!foo.length' > Code 1`] = `
"
  1 | a instanceof!foo.length
"
`;

exports[`invalid(30): 'a instanceof!foo.length' > Error 1/1 1`] = `
"
> 1 | a instanceof!foo.length
    |             ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(30): 'a instanceof!foo.length' > Output 1`] = `
"
  1 | a instanceof foo.length === 0
"
`;

exports[`invalid(31): 'a in!foo.length' > Code 1`] = `
"
  1 | a in!foo.length
"
`;

exports[`invalid(31): 'a in!foo.length' > Error 1/1 1`] = `
"
> 1 | a in!foo.length
    |     ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(31): 'a in!foo.length' > Output 1`] = `
"
  1 | a in foo.length === 0
"
`;

exports[`invalid(32): 'export default!foo.length' > Code 1`] = `
"
  1 | export default!foo.length
"
`;

exports[`invalid(32): 'export default!foo.length' > Error 1/1 1`] = `
"
> 1 | export default!foo.length
    |               ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(32): 'export default!foo.length' > Output 1`] = `
"
  1 | export default foo.length === 0
"
`;

exports[`invalid(33): 'if(true){}else!foo.length' > Code 1`] = `
"
  1 | if(true){}else!foo.length
"
`;

exports[`invalid(33): 'if(true){}else!foo.length' > Error 1/1 1`] = `
"
> 1 | if(true){}else!foo.length
    |               ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(33): 'if(true){}else!foo.length' > Output 1`] = `
"
  1 | if(true){}else foo.length === 0
"
`;

exports[`invalid(34): 'do!foo.length;while(true) {}' > Code 1`] = `
"
  1 | do!foo.length;while(true) {}
"
`;

exports[`invalid(34): 'do!foo.length;while(true) {}' > Error 1/1 1`] = `
"
> 1 | do!foo.length;while(true) {}
    |   ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(34): 'do!foo.length;while(true) {}' > Output 1`] = `
"
  1 | do foo.length === 0;while(true) {}
"
`;

exports[`invalid(35): 'switch(foo){case!foo.length:{}}' > Code 1`] = `
"
  1 | switch(foo){case!foo.length:{}}
"
`;

exports[`invalid(35): 'switch(foo){case!foo.length:{}}' > Error 1/1 1`] = `
"
> 1 | switch(foo){case!foo.length:{}}
    |                 ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(35): 'switch(foo){case!foo.length:{}}' > Output 1`] = `
"
  1 | switch(foo){case foo.length === 0:{}}
"
`;

exports[`invalid(36): 'for(const a of!foo.length);' > Code 1`] = `
"
  1 | for(const a of!foo.length);
"
`;

exports[`invalid(36): 'for(const a of!foo.length);' > Error 1/1 1`] = `
"
> 1 | for(const a of!foo.length);
    |               ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(36): 'for(const a of!foo.length);' > Output 1`] = `
"
  1 | for(const a of foo.length === 0);
"
`;

exports[`invalid(37): 'for(const a in!foo.length);' > Code 1`] = `
"
  1 | for(const a in!foo.length);
"
`;

exports[`invalid(37): 'for(const a in!foo.length);' > Error 1/1 1`] = `
"
> 1 | for(const a in!foo.length);
    |               ^^^^^^^^^^^ Use \`.length === 0\` when checking length is zero.
"
`;

exports[`invalid(37): 'for(const a in!foo.length);' > Output 1`] = `
"
  1 | for(const a in foo.length === 0);
"
`;
