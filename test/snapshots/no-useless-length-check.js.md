// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'array.length === 0 || array.every(Boo…' > Code 1`] = `
"
  1 | array.length === 0 || array.every(Boolean)
"
`;

exports[`invalid(0): 'array.length === 0 || array.every(Boo…' > Error 1/1 1`] = `
"
> 1 | array.length === 0 || array.every(Boolean)
    |       ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(0): 'array.length === 0 || array.every(Boo…' > Output 1`] = `
"
  1 | array.every(Boolean)
"
`;

exports[`invalid(1): 'array.length > 0 && array.some(Boolea…' > Code 1`] = `
"
  1 | array.length > 0 && array.some(Boolean)
"
`;

exports[`invalid(1): 'array.length > 0 && array.some(Boolea…' > Error 1/1 1`] = `
"
> 1 | array.length > 0 && array.some(Boolean)
    |       ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(1): 'array.length > 0 && array.some(Boolea…' > Output 1`] = `
"
  1 | array.some(Boolean)
"
`;

exports[`invalid(2): 'array.length !== 0 && array.some(Bool…' > Code 1`] = `
"
  1 | array.length !== 0 && array.some(Boolean)
"
`;

exports[`invalid(2): 'array.length !== 0 && array.some(Bool…' > Error 1/1 1`] = `
"
> 1 | array.length !== 0 && array.some(Boolean)
    |       ^^^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(2): 'array.length !== 0 && array.some(Bool…' > Output 1`] = `
"
  1 | array.some(Boolean)
"
`;

exports[`invalid(3): '((\\n\\t((\\n\\t\\t(( array )).length\\n\\t)…' > Code 1`] = `
"
  1 | ((
  2 | 	((
  3 | 		(( array )).length
  4 | 	)) === (( 0 ))
  5 | 	||
  6 | 	((
  7 | 		(( array )).every(Boolean)
  8 | 	))
  9 | ))
"
`;

exports[`invalid(3): '((\\n\\t((\\n\\t\\t(( array )).length\\n\\t)…' > Error 1/1 1`] = `
"
  1 | ((
  2 | 	((
> 3 | 		(( array )).length
    | 		            ^^^^^^
> 4 | 	)) === (( 0 ))
    | ^^^^^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
  5 | 	||
  6 | 	((
  7 | 		(( array )).every(Boolean)
  8 | 	))
  9 | ))
"
`;

exports[`invalid(3): '((\\n\\t((\\n\\t\\t(( array )).length\\n\\t)…' > Output 1`] = `
"
  1 | ((
  2 | 	((
  3 | 		(( array )).every(Boolean)
  4 | 	))
  5 | ))
"
`;

exports[`invalid(4): '((\\n\\t((\\n\\t\\t(( array )).every(Boole…' > Code 1`] = `
"
  1 | ((
  2 | 	((
  3 | 		(( array )).every(Boolean)
  4 | 	))
  5 | 	||
  6 | 	((
  7 | 		(( array )).length
  8 | 	)) === (( 0 ))
  9 | ))
"
`;

exports[`invalid(4): '((\\n\\t((\\n\\t\\t(( array )).every(Boole…' > Error 1/1 1`] = `
"
  1 | ((
  2 | 	((
  3 | 		(( array )).every(Boolean)
  4 | 	))
  5 | 	||
  6 | 	((
> 7 | 		(( array )).length
    | 		            ^^^^^^
> 8 | 	)) === (( 0 ))
    | ^^^^^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
  9 | ))
"
`;

exports[`invalid(4): '((\\n\\t((\\n\\t\\t(( array )).every(Boole…' > Output 1`] = `
"
  1 | ((
  2 | 	((
  3 | 		(( array )).every(Boolean)
  4 | 	))
  5 | ))
"
`;

exports[`invalid(5): 'if ((( array.length > 0 )) && array.s…' > Code 1`] = `
"
  1 | if ((( array.length > 0 )) && array.some(Boolean));
"
`;

exports[`invalid(5): 'if ((( array.length > 0 )) && array.s…' > Error 1/1 1`] = `
"
> 1 | if ((( array.length > 0 )) && array.some(Boolean));
    |              ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(5): 'if ((( array.length > 0 )) && array.s…' > Output 1`] = `
"
  1 | if (array.some(Boolean));
"
`;

exports[`invalid(6): 'if (\\n\\tarray.length !== 0 &&\\n\\tarra…' > Code 1`] = `
"
  1 | if (
  2 | 	array.length !== 0 &&
  3 | 	array.some(Boolean) &&
  4 | 	foo
  5 | ) {
  6 | 	// ...
  7 | }
"
`;

exports[`invalid(6): 'if (\\n\\tarray.length !== 0 &&\\n\\tarra…' > Error 1/1 1`] = `
"
  1 | if (
> 2 | 	array.length !== 0 &&
    | 	      ^^^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
  3 | 	array.some(Boolean) &&
  4 | 	foo
  5 | ) {
  6 | 	// ...
  7 | }
"
`;

exports[`invalid(6): 'if (\\n\\tarray.length !== 0 &&\\n\\tarra…' > Output 1`] = `
"
  1 | if (
  2 | 	array.some(Boolean) &&
  3 | 	foo
  4 | ) {
  5 | 	// ...
  6 | }
"
`;

exports[`invalid(7): '(array.length === 0 || array.every(Bo…' > Code 1`] = `
"
  1 | (array.length === 0 || array.every(Boolean)) || foo
"
`;

exports[`invalid(7): '(array.length === 0 || array.every(Bo…' > Error 1/1 1`] = `
"
> 1 | (array.length === 0 || array.every(Boolean)) || foo
    |        ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(7): '(array.length === 0 || array.every(Bo…' > Output 1`] = `
"
  1 | (array.every(Boolean)) || foo
"
`;

exports[`invalid(8): 'foo || (array.length === 0 || array.e…' > Code 1`] = `
"
  1 | foo || (array.length === 0 || array.every(Boolean))
"
`;

exports[`invalid(8): 'foo || (array.length === 0 || array.e…' > Error 1/1 1`] = `
"
> 1 | foo || (array.length === 0 || array.every(Boolean))
    |               ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(8): 'foo || (array.length === 0 || array.e…' > Output 1`] = `
"
  1 | foo || (array.every(Boolean))
"
`;

exports[`invalid(9): '(array.length > 0 && array.some(Boole…' > Code 1`] = `
"
  1 | (array.length > 0 && array.some(Boolean)) && foo
"
`;

exports[`invalid(9): '(array.length > 0 && array.some(Boole…' > Error 1/1 1`] = `
"
> 1 | (array.length > 0 && array.some(Boolean)) && foo
    |        ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(9): '(array.length > 0 && array.some(Boole…' > Output 1`] = `
"
  1 | (array.some(Boolean)) && foo
"
`;

exports[`invalid(10): 'foo && (array.length > 0 && array.som…' > Code 1`] = `
"
  1 | foo && (array.length > 0 && array.some(Boolean))
"
`;

exports[`invalid(10): 'foo && (array.length > 0 && array.som…' > Error 1/1 1`] = `
"
> 1 | foo && (array.length > 0 && array.some(Boolean))
    |               ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(10): 'foo && (array.length > 0 && array.som…' > Output 1`] = `
"
  1 | foo && (array.some(Boolean))
"
`;

exports[`invalid(11): 'array.every(Boolean) || array.length …' > Code 1`] = `
"
  1 | array.every(Boolean) || array.length === 0
"
`;

exports[`invalid(11): 'array.every(Boolean) || array.length …' > Error 1/1 1`] = `
"
> 1 | array.every(Boolean) || array.length === 0
    |                               ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(11): 'array.every(Boolean) || array.length …' > Output 1`] = `
"
  1 | array.every(Boolean)
"
`;

exports[`invalid(12): 'array.some(Boolean) && array.length !…' > Code 1`] = `
"
  1 | array.some(Boolean) && array.length !== 0
"
`;

exports[`invalid(12): 'array.some(Boolean) && array.length !…' > Error 1/1 1`] = `
"
> 1 | array.some(Boolean) && array.length !== 0
    |                              ^^^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(12): 'array.some(Boolean) && array.length !…' > Output 1`] = `
"
  1 | array.some(Boolean)
"
`;

exports[`invalid(13): 'array.some(Boolean) && array.length >…' > Code 1`] = `
"
  1 | array.some(Boolean) && array.length > 0
"
`;

exports[`invalid(13): 'array.some(Boolean) && array.length >…' > Error 1/1 1`] = `
"
> 1 | array.some(Boolean) && array.length > 0
    |                              ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(13): 'array.some(Boolean) && array.length >…' > Output 1`] = `
"
  1 | array.some(Boolean)
"
`;

exports[`invalid(14): 'foo && array.length > 0 && array.some…' > Code 1`] = `
"
  1 | foo && array.length > 0 && array.some(Boolean)
"
`;

exports[`invalid(14): 'foo && array.length > 0 && array.some…' > Error 1/1 1`] = `
"
> 1 | foo && array.length > 0 && array.some(Boolean)
    |              ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(14): 'foo && array.length > 0 && array.some…' > Output 1`] = `
"
  1 | foo && array.some(Boolean)
"
`;

exports[`invalid(15): 'foo || array.length === 0 || array.ev…' > Code 1`] = `
"
  1 | foo || array.length === 0 || array.every(Boolean)
"
`;

exports[`invalid(15): 'foo || array.length === 0 || array.ev…' > Error 1/1 1`] = `
"
> 1 | foo || array.length === 0 || array.every(Boolean)
    |              ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(15): 'foo || array.length === 0 || array.ev…' > Output 1`] = `
"
  1 | foo || array.every(Boolean)
"
`;

exports[`invalid(16): '(foo || array.length === 0) || array.…' > Code 1`] = `
"
  1 | (foo || array.length === 0) || array.every(Boolean)
"
`;

exports[`invalid(16): '(foo || array.length === 0) || array.…' > Error 1/1 1`] = `
"
> 1 | (foo || array.length === 0) || array.every(Boolean)
    |               ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(16): '(foo || array.length === 0) || array.…' > Output 1`] = `
"
  1 | (foo) || array.every(Boolean)
"
`;

exports[`invalid(17): 'array.length === 0 || (array.every(Bo…' > Code 1`] = `
"
  1 | array.length === 0 || (array.every(Boolean) || foo)
"
`;

exports[`invalid(17): 'array.length === 0 || (array.every(Bo…' > Error 1/1 1`] = `
"
> 1 | array.length === 0 || (array.every(Boolean) || foo)
    |       ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(17): 'array.length === 0 || (array.every(Bo…' > Output 1`] = `
"
  1 | (array.every(Boolean) || foo)
"
`;

exports[`invalid(18): '(foo && array.length > 0) && array.so…' > Code 1`] = `
"
  1 | (foo && array.length > 0) && array.some(Boolean)
"
`;

exports[`invalid(18): '(foo && array.length > 0) && array.so…' > Error 1/1 1`] = `
"
> 1 | (foo && array.length > 0) && array.some(Boolean)
    |               ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(18): '(foo && array.length > 0) && array.so…' > Output 1`] = `
"
  1 | (foo) && array.some(Boolean)
"
`;

exports[`invalid(19): 'array.length > 0 && (array.some(Boole…' > Code 1`] = `
"
  1 | array.length > 0 && (array.some(Boolean) && foo)
"
`;

exports[`invalid(19): 'array.length > 0 && (array.some(Boole…' > Error 1/1 1`] = `
"
> 1 | array.length > 0 && (array.some(Boolean) && foo)
    |       ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
"
`;

exports[`invalid(19): 'array.length > 0 && (array.some(Boole…' > Output 1`] = `
"
  1 | (array.some(Boolean) && foo)
"
`;

exports[`invalid(20): 'array.every(Boolean) || array.length …' > Code 1`] = `
"
  1 | array.every(Boolean) || array.length === 0 || array.every(Boolean)
"
`;

exports[`invalid(20): 'array.every(Boolean) || array.length …' > Error 1/1 1`] = `
"
> 1 | array.every(Boolean) || array.length === 0 || array.every(Boolean)
    |                               ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(20): 'array.every(Boolean) || array.length …' > Output 1`] = `
"
  1 | array.every(Boolean) || array.every(Boolean)
"
`;

exports[`invalid(21): 'array.length === 0 || array.every(Boo…' > Code 1`] = `
"
  1 | array.length === 0 || array.every(Boolean) || array.length === 0
"
`;

exports[`invalid(21): 'array.length === 0 || array.every(Boo…' > Error 1/2 1`] = `
"
> 1 | array.length === 0 || array.every(Boolean) || array.length === 0
    |       ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(21): 'array.length === 0 || array.every(Boo…' > Error 2/2 1`] = `
"
> 1 | array.length === 0 || array.every(Boolean) || array.length === 0
    |                                                     ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
"
`;

exports[`invalid(21): 'array.length === 0 || array.every(Boo…' > Output 1`] = `
"
  1 | array.every(Boolean)
"
`;

exports[`invalid(22): 'array1.every(Boolean)\\n|| (( array1.l…' > Code 1`] = `
"
  1 | array1.every(Boolean)
  2 | || (( array1.length === 0 || array2.length === 0 )) // Both useless
  3 | || array2.every(Boolean)
"
`;

exports[`invalid(22): 'array1.every(Boolean)\\n|| (( array1.l…' > Error 1/2 1`] = `
"
  1 | array1.every(Boolean)
> 2 | || (( array1.length === 0 || array2.length === 0 )) // Both useless
    |              ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
  3 | || array2.every(Boolean)
"
`;

exports[`invalid(22): 'array1.every(Boolean)\\n|| (( array1.l…' > Error 2/2 1`] = `
"
  1 | array1.every(Boolean)
> 2 | || (( array1.length === 0 || array2.length === 0 )) // Both useless
    |                                     ^^^^^^^^^^^^ The empty check is useless as \`Array#every()\` returns \`true\` for an empty array.
  3 | || array2.every(Boolean)
"
`;

exports[`invalid(22): 'array1.every(Boolean)\\n|| (( array1.l…' > Output 1`] = `
"
  1 | array1.every(Boolean) // Both useless
  2 | || array2.every(Boolean)
"
`;

exports[`invalid(23): 'function isUselessLengthCheckNode({no…' > Code 1`] = `
"
   1 | function isUselessLengthCheckNode({node, operator, siblings}) {
   2 | 	return (
   3 | 		(
   4 | 			operator === '||' &&
   5 | 			zeroLengthChecks.has(node) &&
   6 | 			siblings.length > 0 &&
   7 | 			siblings.some(condition =>
   8 | 				arrayEveryCalls.has(condition) &&
   9 | 				isSameReference(node.left.object, condition.callee.object)
  10 | 			)
  11 | 		) ||
  12 | 		(
  13 | 			operator === '&&' &&
  14 | 			nonZeroLengthChecks.has(node) &&
  15 | 			siblings.length > 0 &&
  16 | 			siblings.some(condition =>
  17 | 				arraySomeCalls.has(condition) &&
  18 | 				isSameReference(node.left.object, condition.callee.object)
  19 | 			)
  20 | 		)
  21 | 	);
  22 | }
"
`;

exports[`invalid(23): 'function isUselessLengthCheckNode({no…' > Error 1/2 1`] = `
"
   1 | function isUselessLengthCheckNode({node, operator, siblings}) {
   2 | 	return (
   3 | 		(
   4 | 			operator === '||' &&
   5 | 			zeroLengthChecks.has(node) &&
>  6 | 			siblings.length > 0 &&
     | 			         ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
   7 | 			siblings.some(condition =>
   8 | 				arrayEveryCalls.has(condition) &&
   9 | 				isSameReference(node.left.object, condition.callee.object)
  10 | 			)
  11 | 		) ||
  12 | 		(
  13 | 			operator === '&&' &&
  14 | 			nonZeroLengthChecks.has(node) &&
  15 | 			siblings.length > 0 &&
  16 | 			siblings.some(condition =>
  17 | 				arraySomeCalls.has(condition) &&
  18 | 				isSameReference(node.left.object, condition.callee.object)
  19 | 			)
  20 | 		)
  21 | 	);
  22 | }
"
`;

exports[`invalid(23): 'function isUselessLengthCheckNode({no…' > Error 2/2 1`] = `
"
   1 | function isUselessLengthCheckNode({node, operator, siblings}) {
   2 | 	return (
   3 | 		(
   4 | 			operator === '||' &&
   5 | 			zeroLengthChecks.has(node) &&
   6 | 			siblings.length > 0 &&
   7 | 			siblings.some(condition =>
   8 | 				arrayEveryCalls.has(condition) &&
   9 | 				isSameReference(node.left.object, condition.callee.object)
  10 | 			)
  11 | 		) ||
  12 | 		(
  13 | 			operator === '&&' &&
  14 | 			nonZeroLengthChecks.has(node) &&
> 15 | 			siblings.length > 0 &&
     | 			         ^^^^^^^^^^ The non-empty check is useless as \`Array#some()\` returns \`false\` for an empty array.
  16 | 			siblings.some(condition =>
  17 | 				arraySomeCalls.has(condition) &&
  18 | 				isSameReference(node.left.object, condition.callee.object)
  19 | 			)
  20 | 		)
  21 | 	);
  22 | }
"
`;

exports[`invalid(23): 'function isUselessLengthCheckNode({no…' > Output 1`] = `
"
   1 | function isUselessLengthCheckNode({node, operator, siblings}) {
   2 | 	return (
   3 | 		(
   4 | 			operator === '||' &&
   5 | 			zeroLengthChecks.has(node) &&
   6 | 			siblings.some(condition =>
   7 | 				arrayEveryCalls.has(condition) &&
   8 | 				isSameReference(node.left.object, condition.callee.object)
   9 | 			)
  10 | 		) ||
  11 | 		(
  12 | 			operator === '&&' &&
  13 | 			nonZeroLengthChecks.has(node) &&
  14 | 			siblings.some(condition =>
  15 | 				arraySomeCalls.has(condition) &&
  16 | 				isSameReference(node.left.object, condition.callee.object)
  17 | 			)
  18 | 		)
  19 | 	);
  20 | }
"
`;
