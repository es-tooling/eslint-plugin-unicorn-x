// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '_.fromPairs(pairs)' > Code 1`] = `
"
  1 | _.fromPairs(pairs)
"
`;

exports[`invalid(0): '_.fromPairs(pairs)' > Error 1/1 1`] = `
"
> 1 | _.fromPairs(pairs)
    | ^^^^^^^^^^^ Prefer \`Object.fromEntries()\` over \`_.fromPairs()\`.
"
`;

exports[`invalid(0): '_.fromPairs(pairs)' > Output 1`] = `
"
  1 | Object.fromEntries(pairs)
"
`;

exports[`invalid(0): 'pairs.reduce(object => ({...object, k…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, key}), {});
"
`;

exports[`invalid(0): 'pairs.reduce(object => ({...object, k…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, key}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(0): 'pairs.reduce(object => ({...object, k…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key]));
"
`;

exports[`invalid(1): 'lodash.fromPairs(pairs)' > Code 1`] = `
"
  1 | lodash.fromPairs(pairs)
"
`;

exports[`invalid(1): 'lodash.fromPairs(pairs)' > Error 1/1 1`] = `
"
> 1 | lodash.fromPairs(pairs)
    | ^^^^^^^^^^^^^^^^ Prefer \`Object.fromEntries()\` over \`lodash.fromPairs()\`.
"
`;

exports[`invalid(1): 'lodash.fromPairs(pairs)' > Output 1`] = `
"
  1 | Object.fromEntries(pairs)
"
`;

exports[`invalid(1): 'pairs.reduce(object => ({...object, k…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, key}), {},);
"
`;

exports[`invalid(1): 'pairs.reduce(object => ({...object, k…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, key}), {},);
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(1): 'pairs.reduce(object => ({...object, k…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key],));
"
`;

exports[`invalid(2): 'myFromPairsFunction(pairs)' > Code 1`] = `
"
  1 | myFromPairsFunction(pairs)
"
`;

exports[`invalid(2): 'myFromPairsFunction(pairs)' > Error 1/1 1`] = `
"
> 1 | myFromPairsFunction(pairs)
    | ^^^^^^^^^^^^^^^^^^^ Prefer \`Object.fromEntries()\` over \`myFromPairsFunction()\`.
"
`;

exports[`invalid(2): 'myFromPairsFunction(pairs)' > Options 1`] = `
"
[
  {
    "functions": [
      "myFromPairsFunction"
    ]
  }
]
"
`;

exports[`invalid(2): 'myFromPairsFunction(pairs)' > Output 1`] = `
"
  1 | Object.fromEntries(pairs)
"
`;

exports[`invalid(2): 'pairs.reduce(object => ({...object, k…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, key,}), {});
"
`;

exports[`invalid(2): 'pairs.reduce(object => ({...object, k…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, key,}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(2): 'pairs.reduce(object => ({...object, k…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key]));
"
`;

exports[`invalid(3): 'pairs.reduce(object => ({...object, k…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, key}), Object.create(null));
"
`;

exports[`invalid(3): 'pairs.reduce(object => ({...object, k…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, key}), Object.create(null));
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(3): 'pairs.reduce(object => ({...object, k…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key]));
"
`;

exports[`invalid(3): 'utils.object.foo(pairs)' > Code 1`] = `
"
  1 | utils.object.foo(pairs)
"
`;

exports[`invalid(3): 'utils.object.foo(pairs)' > Error 1/1 1`] = `
"
> 1 | utils.object.foo(pairs)
    | ^^^^^^^^^^^^^^^^ Prefer \`Object.fromEntries()\` over \`utils.object.foo()\`.
"
`;

exports[`invalid(3): 'utils.object.foo(pairs)' > Options 1`] = `
"
[
  {
    "functions": [
      "utils.object.foo"
    ]
  }
]
"
`;

exports[`invalid(3): 'utils.object.foo(pairs)' > Output 1`] = `
"
  1 | Object.fromEntries(pairs)
"
`;

exports[`invalid(4): 'pairs.reduce(object => ({...object, k…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, key}), Object.create(null),);
"
`;

exports[`invalid(4): 'pairs.reduce(object => ({...object, k…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, key}), Object.create(null),);
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(4): 'pairs.reduce(object => ({...object, k…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key],));
"
`;

exports[`invalid(5): 'pairs.reduce(object => ({...object, k…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, key}), (( {} )));
"
`;

exports[`invalid(5): 'pairs.reduce(object => ({...object, k…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, key}), (( {} )));
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(5): 'pairs.reduce(object => ({...object, k…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key]));
"
`;

exports[`invalid(6): 'pairs.reduce(object => ({...object, k…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, key}), (( Object.create(null) )),);
"
`;

exports[`invalid(6): 'pairs.reduce(object => ({...object, k…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, key}), (( Object.create(null) )),);
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(6): 'pairs.reduce(object => ({...object, k…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key],));
"
`;

exports[`invalid(7): 'pairs.reduce( (( object => ({...objec…' > Code 1`] = `
"
  1 | pairs.reduce( (( object => ({...object, key}) )) , {});
"
`;

exports[`invalid(7): 'pairs.reduce( (( object => ({...objec…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce( (( object => ({...object, key}) )) , {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(7): 'pairs.reduce( (( object => ({...objec…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map( (( () => ['key', key] )) ));
"
`;

exports[`invalid(8): 'pairs.reduce( (( (object) => ({...obj…' > Code 1`] = `
"
  1 | pairs.reduce( (( (object) => ({...object, key}) )) , {});
"
`;

exports[`invalid(8): 'pairs.reduce( (( (object) => ({...obj…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce( (( (object) => ({...object, key}) )) , {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(8): 'pairs.reduce( (( (object) => ({...obj…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map( (( () => ['key', key] )) ));
"
`;

exports[`invalid(9): 'pairs.reduce( (( (object,) => ({...ob…' > Code 1`] = `
"
  1 | pairs.reduce( (( (object,) => ({...object, key}) )) , {});
"
`;

exports[`invalid(9): 'pairs.reduce( (( (object,) => ({...ob…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce( (( (object,) => ({...object, key}) )) , {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(9): 'pairs.reduce( (( (object,) => ({...ob…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map( (( () => ['key', key] )) ));
"
`;

exports[`invalid(10): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, [((key))] : ((value))}), {});
"
`;

exports[`invalid(10): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, [((key))] : ((value))}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(10): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [((key)), ((value))]));
"
`;

exports[`invalid(11): '((\\n\\t(( pairs ))\\n\\t.reduce(\\n\\t\\t((…' > Code 1`] = `
"
   1 | ((
   2 | 	(( pairs ))
   3 | 	.reduce(
   4 | 		((
   5 | 			(object,) => ((
   6 | 				((
   7 | 					Object
   8 | 				)).assign(
   9 | 					((
  10 | 						object
  11 | 					)),
  12 | 					(({
  13 | 						[ ((key)) ] : ((value)),
  14 | 					}))
  15 | 				)
  16 | 			))
  17 | 		)),
  18 | 		Object.create(((null)),)
  19 | 	)
  20 | ));
"
`;

exports[`invalid(11): '((\\n\\t(( pairs ))\\n\\t.reduce(\\n\\t\\t((…' > Error 1/1 1`] = `
"
   1 | ((
   2 | 	(( pairs ))
>  3 | 	.reduce(
     | 	 ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
   4 | 		((
   5 | 			(object,) => ((
   6 | 				((
   7 | 					Object
   8 | 				)).assign(
   9 | 					((
  10 | 						object
  11 | 					)),
  12 | 					(({
  13 | 						[ ((key)) ] : ((value)),
  14 | 					}))
  15 | 				)
  16 | 			))
  17 | 		)),
  18 | 		Object.create(((null)),)
  19 | 	)
  20 | ));
"
`;

exports[`invalid(11): '((\\n\\t(( pairs ))\\n\\t.reduce(\\n\\t\\t((…' > Output 1`] = `
"
   1 | ((
   2 | 	Object.fromEntries((( pairs ))
   3 | 	.map(
   4 | 		((
   5 | 			() => 
   6 | 				[((key)), ((value))]
   7 | 			
   8 | 		))
   9 | 	))
  10 | ));
"
`;

exports[`invalid(12): 'pairs.reduce(object => ({...object, 0…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, 0: value}), {});
"
`;

exports[`invalid(12): 'pairs.reduce(object => ({...object, 0…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, 0: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(12): 'pairs.reduce(object => ({...object, 0…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [0, value]));
"
`;

exports[`invalid(13): 'pairs.reduce(object => ({...object, t…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, true: value}), {});
"
`;

exports[`invalid(13): 'pairs.reduce(object => ({...object, t…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, true: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(13): 'pairs.reduce(object => ({...object, t…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['true', value]));
"
`;

exports[`invalid(14): 'pairs.reduce(object => ({...object, 0…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, 0n: value}), {});
"
`;

exports[`invalid(14): 'pairs.reduce(object => ({...object, 0…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, 0n: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(14): 'pairs.reduce(object => ({...object, 0…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [0n, value]));
"
`;

exports[`invalid(15): 'pairs.reduce(object => ({...object, u…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, undefined: value}), {});
"
`;

exports[`invalid(15): 'pairs.reduce(object => ({...object, u…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, undefined: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(15): 'pairs.reduce(object => ({...object, u…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['undefined', value]));
"
`;

exports[`invalid(16): 'pairs.reduce(object => ({...object, n…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, null: value}), {});
"
`;

exports[`invalid(16): 'pairs.reduce(object => ({...object, n…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, null: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(16): 'pairs.reduce(object => ({...object, n…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['null', value]));
"
`;

exports[`invalid(17): 'pairs.reduce(object => ({...object, v…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, var: value}), {});
"
`;

exports[`invalid(17): 'pairs.reduce(object => ({...object, v…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, var: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(17): 'pairs.reduce(object => ({...object, v…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['var', value]));
"
`;

exports[`invalid(18): 'pairs.reduce(object => ({...object, f…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, for: value}), {});
"
`;

exports[`invalid(18): 'pairs.reduce(object => ({...object, f…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, for: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(18): 'pairs.reduce(object => ({...object, f…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['for', value]));
"
`;

exports[`invalid(19): 'pairs.reduce(object => ({...object, d…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, default: value}), {});
"
`;

exports[`invalid(19): 'pairs.reduce(object => ({...object, d…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, default: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(19): 'pairs.reduce(object => ({...object, d…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['default', value]));
"
`;

exports[`invalid(20): 'pairs.reduce(object => ({...object, s…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, string: value}), {});
"
`;

exports[`invalid(20): 'pairs.reduce(object => ({...object, s…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, string: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(20): 'pairs.reduce(object => ({...object, s…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['string', value]));
"
`;

exports[`invalid(21): 'pairs.reduce(object => ({...object, "…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, "string": value}), {});
"
`;

exports[`invalid(21): 'pairs.reduce(object => ({...object, "…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, "string": value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(21): 'pairs.reduce(object => ({...object, "…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ["string", value]));
"
`;

exports[`invalid(22): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, [0]: value}), {});
"
`;

exports[`invalid(22): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, [0]: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(22): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [0, value]));
"
`;

exports[`invalid(23): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, [true]: value}), {});
"
`;

exports[`invalid(23): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, [true]: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(23): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [true, value]));
"
`;

exports[`invalid(24): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, [0n]: value}), {});
"
`;

exports[`invalid(24): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, [0n]: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(24): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [0n, value]));
"
`;

exports[`invalid(25): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, [undefined]: value}), {});
"
`;

exports[`invalid(25): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, [undefined]: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(25): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [undefined, value]));
"
`;

exports[`invalid(26): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, [null]: value}), {});
"
`;

exports[`invalid(26): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, [null]: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(26): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [null, value]));
"
`;

exports[`invalid(27): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, ["for"]: value}), {});
"
`;

exports[`invalid(27): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, ["for"]: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(27): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ["for", value]));
"
`;

exports[`invalid(28): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, [string]: value}), {});
"
`;

exports[`invalid(28): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, [string]: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(28): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [string, value]));
"
`;

exports[`invalid(29): 'pairs.reduce(object => ({...object, […' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, ["string"]: value}), {});
"
`;

exports[`invalid(29): 'pairs.reduce(object => ({...object, […' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, ["string"]: value}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(29): 'pairs.reduce(object => ({...object, […' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ["string", value]));
"
`;

exports[`invalid(30): 'pairs.reduce(object => Object.assign(…' > Code 1`] = `
"
  1 | pairs.reduce(object => Object.assign(object, {key}), {});
"
`;

exports[`invalid(30): 'pairs.reduce(object => Object.assign(…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => Object.assign(object, {key}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(30): 'pairs.reduce(object => Object.assign(…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key]));
"
`;

exports[`invalid(31): 'pairs.reduce(object => Object.assign(…' > Code 1`] = `
"
  1 | pairs.reduce(object => Object.assign(object, {key,}), {});
"
`;

exports[`invalid(31): 'pairs.reduce(object => Object.assign(…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => Object.assign(object, {key,}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(31): 'pairs.reduce(object => Object.assign(…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', key]));
"
`;

exports[`invalid(32): 'pairs.reduce(object => Object.assign(…' > Code 1`] = `
"
  1 | pairs.reduce(object => Object.assign(object, {[key]: value,}), {});
"
`;

exports[`invalid(32): 'pairs.reduce(object => Object.assign(…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => Object.assign(object, {[key]: value,}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(32): 'pairs.reduce(object => Object.assign(…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => [key, value]));
"
`;

exports[`invalid(33): 'pairs.reduce((object, element, index,…' > Code 1`] = `
"
  1 | pairs.reduce((object, element, index, array) => ({...object, key}), {});
"
`;

exports[`invalid(33): 'pairs.reduce((object, element, index,…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce((object, element, index, array) => ({...object, key}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(33): 'pairs.reduce((object, element, index,…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(( element, index, array) => ['key', key]));
"
`;

exports[`invalid(34): 'pairs.reduce((object, [key, value], i…' > Code 1`] = `
"
  1 | pairs.reduce((object, [key, value], index, array,) => ({...object, [key]: value + index + array.length}), {});
"
`;

exports[`invalid(34): 'pairs.reduce((object, [key, value], i…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce((object, [key, value], index, array,) => ({...object, [key]: value + index + array.length}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(34): 'pairs.reduce((object, [key, value], i…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(( [key, value], index, array,) => [key, value + index + array.length]));
"
`;

exports[`invalid(35): 'pairs.reduce(object => ({...object, k…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, key: function (object) { return object; }}), {});
"
`;

exports[`invalid(35): 'pairs.reduce(object => ({...object, k…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, key: function (object) { return object; }}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(35): 'pairs.reduce(object => ({...object, k…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['key', function (object) { return object; }]));
"
`;

exports[`invalid(36): 'pairs.reduce(object => ({...object, m…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, method: async () => {}}), {});
"
`;

exports[`invalid(36): 'pairs.reduce(object => ({...object, m…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, method: async () => {}}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(36): 'pairs.reduce(object => ({...object, m…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['method', async () => {}]));
"
`;

exports[`invalid(37): 'pairs.reduce(object => ({...object, m…' > Code 1`] = `
"
  1 | pairs.reduce(object => ({...object, method: async function * (){}}), {});
"
`;

exports[`invalid(37): 'pairs.reduce(object => ({...object, m…' > Error 1/1 1`] = `
"
> 1 | pairs.reduce(object => ({...object, method: async function * (){}}), {});
    |       ^^^^^^ Prefer \`Object.fromEntries()\` over \`Array#reduce()\`.
"
`;

exports[`invalid(37): 'pairs.reduce(object => ({...object, m…' > Output 1`] = `
"
  1 | Object.fromEntries(pairs.map(() => ['method', async function * (){}]));
"
`;
