// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'if (foo === 1) {}\\nelse if (foo === 2…' > Code 1`] = `
"
  1 | if (foo === 1) {}
  2 | else if (foo === 2) {}
  3 | else if (foo === 3) {}
"
`;

exports[`invalid(0): 'if (foo === 1) {}\\nelse if (foo === 2…' > Code 2`] = `
"
  1 | if (foo === 1) {}
  2 | else if (foo === 2) {}
"
`;

exports[`invalid(0): 'if (foo === 1) {}\\nelse if (foo === 2…' > Error 1/1 1`] = `
"
> 1 | if (foo === 1) {}
    | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo === 2) {}
  3 | else if (foo === 3) {}
"
`;

exports[`invalid(0): 'if (foo === 1) {}\\nelse if (foo === 2…' > Error 1/1 2`] = `
"
> 1 | if (foo === 1) {}
    | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo === 2) {}
"
`;

exports[`invalid(0): 'if (foo === 1) {}\\nelse if (foo === 2…' > Options 1`] = `
"
[
  {
    "minimumCases": 2
  }
]
"
`;

exports[`invalid(0): 'if (foo === 1) {}\\nelse if (foo === 2…' > Output 1`] = `
"
   1 | switch (foo) {
   2 | case 1: {
   3 | break;
   4 | }
   5 | case 2: {
   6 | break;
   7 | }
   8 | case 3: {
   9 | break;
  10 | }
  11 | // No default
  12 | }
"
`;

exports[`invalid(0): 'if (foo === 1) {}\\nelse if (foo === 2…' > Output 2`] = `
"
  1 | switch (foo) {
  2 | case 1: {
  3 | break;
  4 | }
  5 | case 2: {
  6 | break;
  7 | }
  8 | // No default
  9 | }
"
`;

exports[`invalid(1): 'if (foo === 1) {}\\nelse if (foo === 2…' > Code 1`] = `
"
  1 | if (foo === 1) {}
  2 | else if (foo === 2) {}
  3 | else if (foo === 3) {}
  4 | else {
  5 | 	// default
  6 | }
"
`;

exports[`invalid(1): 'if (foo === 1) {}\\nelse if (foo === 2…' > Code 2`] = `
"
  1 | if (foo === 1) {}
  2 | else if (foo === 2) {}
  3 | else {}
"
`;

exports[`invalid(1): 'if (foo === 1) {}\\nelse if (foo === 2…' > Error 1/1 1`] = `
"
> 1 | if (foo === 1) {}
    | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo === 2) {}
  3 | else if (foo === 3) {}
  4 | else {
  5 | 	// default
  6 | }
"
`;

exports[`invalid(1): 'if (foo === 1) {}\\nelse if (foo === 2…' > Error 1/1 2`] = `
"
> 1 | if (foo === 1) {}
    | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo === 2) {}
  3 | else {}
"
`;

exports[`invalid(1): 'if (foo === 1) {}\\nelse if (foo === 2…' > Options 1`] = `
"
[
  {
    "minimumCases": 2
  }
]
"
`;

exports[`invalid(1): 'if (foo === 1) {}\\nelse if (foo === 2…' > Output 1`] = `
"
   1 | switch (foo) {
   2 | case 1: {
   3 | break;
   4 | }
   5 | case 2: {
   6 | break;
   7 | }
   8 | case 3: {
   9 | break;
  10 | }
  11 | default: {
  12 | 	// default
  13 | }
  14 | }
"
`;

exports[`invalid(1): 'if (foo === 1) {}\\nelse if (foo === 2…' > Output 2`] = `
"
  1 | switch (foo) {
  2 | case 1: {
  3 | break;
  4 | }
  5 | case 2: {
  6 | break;
  7 | }
  8 | default: {}
  9 | }
"
`;

exports[`invalid(2): 'function foo() {\\n\\tif (foo === 1) {}…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	if (foo === 1) {}
  3 | 	else if (foo === 2) {}
  4 | 	else if (foo === 3) {}
  5 | }
"
`;

exports[`invalid(2): 'function foo() {\\n\\tif (foo === 1) {}…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	if (foo === 1) {}
    | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | 	else if (foo === 2) {}
  4 | 	else if (foo === 3) {}
  5 | }
"
`;

exports[`invalid(2): 'function foo() {\\n\\tif (foo === 1) {}…' > Options 1`] = `
"
[
  {
    "emptyDefaultCase": "no-default-comment"
  }
]
"
`;

exports[`invalid(2): 'function foo() {\\n\\tif (foo === 1) {}…' > Output 1`] = `
"
   1 | function foo() {
   2 | 	switch (foo) {
   3 | 	case 1: {
   4 | 	break;
   5 | 	}
   6 | 	case 2: {
   7 | 	break;
   8 | 	}
   9 | 	case 3: {
  10 | 	break;
  11 | 	}
  12 | 	// No default
  13 | 	}
  14 | }
"
`;

exports[`invalid(2): 'if (foo === 1) (notBlock())\\nelse if …' > Code 1`] = `
"
  1 | if (foo === 1) (notBlock())
  2 | else if (foo === 2) (notBlock())
  3 | else if (foo === 3) (notBlock())
  4 | else (notBlock())
"
`;

exports[`invalid(2): 'if (foo === 1) (notBlock())\\nelse if …' > Error 1/1 1`] = `
"
> 1 | if (foo === 1) (notBlock())
    | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo === 2) (notBlock())
  3 | else if (foo === 3) (notBlock())
  4 | else (notBlock())
"
`;

exports[`invalid(2): 'if (foo === 1) (notBlock())\\nelse if …' > Output 1`] = `
"
   1 | switch (foo) {
   2 | case 1: {
   3 | (notBlock())
   4 | break;
   5 | }
   6 | case 2: {
   7 | (notBlock())
   8 | break;
   9 | }
  10 | case 3: {
  11 | (notBlock())
  12 | break;
  13 | }
  14 | default: (notBlock())
  15 | }
"
`;

exports[`invalid(3): 'function foo() {\\n\\tif (foo === 1) {}…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	if (foo === 1) {}
  3 | 	else if (foo === 2) {}
  4 | 	else if (foo === 3) {}
  5 | }
"
`;

exports[`invalid(3): 'function foo() {\\n\\tif (foo === 1) {}…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	if (foo === 1) {}
    | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | 	else if (foo === 2) {}
  4 | 	else if (foo === 3) {}
  5 | }
"
`;

exports[`invalid(3): 'function foo() {\\n\\tif (foo === 1) {}…' > Options 1`] = `
"
[
  {
    "emptyDefaultCase": "do-nothing-comment"
  }
]
"
`;

exports[`invalid(3): 'function foo() {\\n\\tif (foo === 1) {}…' > Output 1`] = `
"
   1 | function foo() {
   2 | 	switch (foo) {
   3 | 	case 1: {
   4 | 	break;
   5 | 	}
   6 | 	case 2: {
   7 | 	break;
   8 | 	}
   9 | 	case 3: {
  10 | 	break;
  11 | 	}
  12 | 	default:
  13 | 	// Do nothing
  14 | 	}
  15 | }
"
`;

exports[`invalid(3): 'if (bar = 1) {}\\nelse if (foo === 1) …' > Code 1`] = `
"
  1 | if (bar = 1) {}
  2 | else if (foo === 1) {}
  3 | else if (foo === 2) {}
  4 | else if (foo === 3) {}
"
`;

exports[`invalid(3): 'if (bar = 1) {}\\nelse if (foo === 1) …' > Error 1/1 1`] = `
"
  1 | if (bar = 1) {}
> 2 | else if (foo === 1) {}
    |      ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | else if (foo === 2) {}
  4 | else if (foo === 3) {}
"
`;

exports[`invalid(3): 'if (bar = 1) {}\\nelse if (foo === 1) …' > Output 1`] = `
"
   1 | if (bar = 1) {}
   2 | else switch (foo) {
   3 |  case 1: {
   4 |  break;
   5 |  }
   6 |  case 2: {
   7 |  break;
   8 |  }
   9 |  case 3: {
  10 |  break;
  11 |  }
  12 |  // No default
  13 |  }
"
`;

exports[`invalid(4): 'function foo() {\\n\\tif (foo === 1) {}…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	if (foo === 1) {}
  3 | 	else if (foo === 2) {}
  4 | 	else if (foo === 3) {}
  5 | }
"
`;

exports[`invalid(4): 'function foo() {\\n\\tif (foo === 1) {}…' > Error 1/1 1`] = `
"
  1 | function foo() {
> 2 | 	if (foo === 1) {}
    | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | 	else if (foo === 2) {}
  4 | 	else if (foo === 3) {}
  5 | }
"
`;

exports[`invalid(4): 'function foo() {\\n\\tif (foo === 1) {}…' > Options 1`] = `
"
[
  {
    "emptyDefaultCase": "no-default-case"
  }
]
"
`;

exports[`invalid(4): 'function foo() {\\n\\tif (foo === 1) {}…' > Output 1`] = `
"
   1 | function foo() {
   2 | 	switch (foo) {
   3 | 	case 1: {
   4 | 	break;
   5 | 	}
   6 | 	case 2: {
   7 | 	break;
   8 | 	}
   9 | 	case 3: {
  10 | 	break;
  11 | 	}
  12 | 	}
  13 | }
"
`;

exports[`invalid(4): 'if (foo === 1) {}\\nelse if (foo === 2…' > Code 1`] = `
"
  1 | if (foo === 1) {}
  2 | else if (foo === 2) {}
  3 | else if (foo === 3) {}
  4 | else if (bar === 3) {}
"
`;

exports[`invalid(4): 'if (foo === 1) {}\\nelse if (foo === 2…' > Error 1/1 1`] = `
"
> 1 | if (foo === 1) {}
    | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo === 2) {}
  3 | else if (foo === 3) {}
  4 | else if (bar === 3) {}
"
`;

exports[`invalid(4): 'if (foo === 1) {}\\nelse if (foo === 2…' > Output 1`] = `
"
   1 | switch (foo) {
   2 | case 1: {
   3 | break;
   4 | }
   5 | case 2: {
   6 | break;
   7 | }
   8 | case 3: {
   9 | break;
  10 | }
  11 | default: if (bar === 3) {}
  12 | }
"
`;

exports[`invalid(5): 'if (foo === 0) {\\n\\tif (foo === 1) {}…' > Code 1`] = `
"
  1 | if (foo === 0) {
  2 | 	if (foo === 1) {}
  3 | 	else if (foo === 2) {}
  4 | 	else if (foo === 3) {}
  5 | }
"
`;

exports[`invalid(5): 'if (foo === 0) {\\n\\tif (foo === 1) {}…' > Error 1/1 1`] = `
"
  1 | if (foo === 0) {
> 2 | 	if (foo === 1) {}
    | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | 	else if (foo === 2) {}
  4 | 	else if (foo === 3) {}
  5 | }
"
`;

exports[`invalid(5): 'if (foo === 0) {\\n\\tif (foo === 1) {}…' > Output 1`] = `
"
   1 | if (foo === 0) {
   2 | 	switch (foo) {
   3 | 	case 1: {
   4 | 	break;
   5 | 	}
   6 | 	case 2: {
   7 | 	break;
   8 | 	}
   9 | 	case 3: {
  10 | 	break;
  11 | 	}
  12 | 	// No default
  13 | 	}
  14 | }
"
`;

exports[`invalid(6): 'if (1 === foo) {}\\nelse if (foo === 2…' > Code 1`] = `
"
  1 | if (1 === foo) {}
  2 | else if (foo === 2) {}
  3 | else if (3 === foo) {}
"
`;

exports[`invalid(6): 'if (1 === foo) {}\\nelse if (foo === 2…' > Error 1/1 1`] = `
"
> 1 | if (1 === foo) {}
    | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo === 2) {}
  3 | else if (3 === foo) {}
"
`;

exports[`invalid(6): 'if (1 === foo) {}\\nelse if (foo === 2…' > Output 1`] = `
"
   1 | switch (foo) {
   2 | case 1: {
   3 | break;
   4 | }
   5 | case 2: {
   6 | break;
   7 | }
   8 | case 3: {
   9 | break;
  10 | }
  11 | // No default
  12 | }
"
`;

exports[`invalid(7): 'if (true === foo) {}\\nelse if (bar.ba…' > Code 1`] = `
"
  1 | if (true === foo) {}
  2 | else if (bar.bar === true) {}
  3 | else if (true === baz()) {}
"
`;

exports[`invalid(7): 'if (true === foo) {}\\nelse if (bar.ba…' > Error 1/1 1`] = `
"
> 1 | if (true === foo) {}
    | ^^^^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (bar.bar === true) {}
  3 | else if (true === baz()) {}
"
`;

exports[`invalid(7): 'if (true === foo) {}\\nelse if (bar.ba…' > Output 1`] = `
"
   1 | switch (true) {
   2 | case foo: {
   3 | break;
   4 | }
   5 | case bar.bar: {
   6 | break;
   7 | }
   8 | case baz(): {
   9 | break;
  10 | }
  11 | // No default
  12 | }
"
`;

exports[`invalid(8): 'if (foo === ((0, 1))) {}\\nelse if (fo…' > Code 1`] = `
"
  1 | if (foo === ((0, 1))) {}
  2 | else if (foo === (bar + 2)) {}
  3 | else if (foo === (baz = 2)) {}
"
`;

exports[`invalid(8): 'if (foo === ((0, 1))) {}\\nelse if (fo…' > Error 1/1 1`] = `
"
> 1 | if (foo === ((0, 1))) {}
    | ^^^^^^^^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo === (bar + 2)) {}
  3 | else if (foo === (baz = 2)) {}
"
`;

exports[`invalid(8): 'if (foo === ((0, 1))) {}\\nelse if (fo…' > Output 1`] = `
"
   1 | switch (foo) {
   2 | case 0, 1: {
   3 | break;
   4 | }
   5 | case bar + 2: {
   6 | break;
   7 | }
   8 | case baz = 2: {
   9 | break;
  10 | }
  11 | // No default
  12 | }
"
`;

exports[`invalid(9): '// Should use "foo" as discriminant\\n…' > Code 1`] = `
"
  1 | // Should use "foo" as discriminant
  2 | if (foo === bar) {}
  3 | else if (foo === bar) {}
  4 | else if (foo === bar) {}
  5 |
  6 | // Should use "bar" as discriminant
  7 | if (bar === foo) {}
  8 | else if (bar === foo) {}
  9 | else if (foo === bar) {}
"
`;

exports[`invalid(9): '// Should use "foo" as discriminant\\n…' > Error 1/2 1`] = `
"
  1 | // Should use "foo" as discriminant
> 2 | if (foo === bar) {}
    | ^^^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | else if (foo === bar) {}
  4 | else if (foo === bar) {}
  5 |
  6 | // Should use "bar" as discriminant
  7 | if (bar === foo) {}
  8 | else if (bar === foo) {}
  9 | else if (foo === bar) {}
"
`;

exports[`invalid(9): '// Should use "foo" as discriminant\\n…' > Error 2/2 1`] = `
"
  1 | // Should use "foo" as discriminant
  2 | if (foo === bar) {}
  3 | else if (foo === bar) {}
  4 | else if (foo === bar) {}
  5 |
  6 | // Should use "bar" as discriminant
> 7 | if (bar === foo) {}
    | ^^^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  8 | else if (bar === foo) {}
  9 | else if (foo === bar) {}
"
`;

exports[`invalid(9): '// Should use "foo" as discriminant\\n…' > Output 1`] = `
"
   1 | // Should use "foo" as discriminant
   2 | switch (foo) {
   3 | case bar: {
   4 | break;
   5 | }
   6 | case bar: {
   7 | break;
   8 | }
   9 | case bar: {
  10 | break;
  11 | }
  12 | // No default
  13 | }
  14 |
  15 | // Should use "bar" as discriminant
  16 | switch (bar) {
  17 | case foo: {
  18 | break;
  19 | }
  20 | case foo: {
  21 | break;
  22 | }
  23 | case foo: {
  24 | break;
  25 | }
  26 | // No default
  27 | }
"
`;

exports[`invalid(10): 'if (foo === 1) {}\\nelse if (foo === 2…' > Code 1`] = `
"
   1 | if (foo === 1) {}
   2 | else if (foo === 2) {}
   3 | else if (foo === 3) {}
   4 | else if (foo === 4) {}
   5 | else if (foo === 5) {}
   6 | else if (foo === 6) {}
   7 | else if (foo === 7) {}
   8 | else if (foo === 8) {}
   9 | else if (foo === 9) {}
  10 | else if (foo === 10) {}
  11 | else if (foo === 11) {}
  12 | else if (foo === 12) {}
  13 | else if (foo === 13) {}
  14 | else if (foo === 14) {}
  15 | else if (foo === 15) {}
  16 | else if (foo === 16) {}
  17 | else if (foo === 17) {}
  18 | else if (foo === 18) {}
  19 | else if (foo === 19) {}
  20 | else if (foo === 20) {}
  21 | else if (foo === 21) {}
  22 | else if (foo === 22) {}
  23 | else if (foo === 23) {}
  24 | else if (foo === 24) {}
  25 | else if (foo === 25) {}
  26 | else if (foo === 26) {}
  27 | else if (foo === 27) {}
  28 | else if (foo === 28) {}
  29 | else if (foo === 29) {}
  30 | else if (foo === 30) {}
  31 | else if (foo === 31) {}
  32 | else if (foo === 32) {}
  33 | else if (foo === 33) {}
  34 | else if (foo === 34) {}
  35 | else if (foo === 35) {}
  36 | else if (foo === 36) {}
  37 | else if (foo === 37) {}
  38 | else if (foo === 38) {}
  39 | else if (foo === 39) {}
  40 | else if (foo === 40) {}
  41 | else if (foo === 41) {}
  42 | else if (foo === 42) {}
  43 | else if (foo === 43) {}
  44 | else if (foo === 44) {}
  45 | else if (foo === 45) {}
  46 | else if (foo === 46) {}
  47 | else if (foo === 47) {}
  48 | else if (foo === 48) {}
  49 | else if (foo === 49) {}
  50 | else if (foo === 50) {}
  51 | else {}
"
`;

exports[`invalid(10): 'if (foo === 1) {}\\nelse if (foo === 2…' > Error 1/1 1`] = `
"
>  1 | if (foo === 1) {}
     | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
   2 | else if (foo === 2) {}
   3 | else if (foo === 3) {}
   4 | else if (foo === 4) {}
   5 | else if (foo === 5) {}
   6 | else if (foo === 6) {}
   7 | else if (foo === 7) {}
   8 | else if (foo === 8) {}
   9 | else if (foo === 9) {}
  10 | else if (foo === 10) {}
  11 | else if (foo === 11) {}
  12 | else if (foo === 12) {}
  13 | else if (foo === 13) {}
  14 | else if (foo === 14) {}
  15 | else if (foo === 15) {}
  16 | else if (foo === 16) {}
  17 | else if (foo === 17) {}
  18 | else if (foo === 18) {}
  19 | else if (foo === 19) {}
  20 | else if (foo === 20) {}
  21 | else if (foo === 21) {}
  22 | else if (foo === 22) {}
  23 | else if (foo === 23) {}
  24 | else if (foo === 24) {}
  25 | else if (foo === 25) {}
  26 | else if (foo === 26) {}
  27 | else if (foo === 27) {}
  28 | else if (foo === 28) {}
  29 | else if (foo === 29) {}
  30 | else if (foo === 30) {}
  31 | else if (foo === 31) {}
  32 | else if (foo === 32) {}
  33 | else if (foo === 33) {}
  34 | else if (foo === 34) {}
  35 | else if (foo === 35) {}
  36 | else if (foo === 36) {}
  37 | else if (foo === 37) {}
  38 | else if (foo === 38) {}
  39 | else if (foo === 39) {}
  40 | else if (foo === 40) {}
  41 | else if (foo === 41) {}
  42 | else if (foo === 42) {}
  43 | else if (foo === 43) {}
  44 | else if (foo === 44) {}
  45 | else if (foo === 45) {}
  46 | else if (foo === 46) {}
  47 | else if (foo === 47) {}
  48 | else if (foo === 48) {}
  49 | else if (foo === 49) {}
  50 | else if (foo === 50) {}
  51 | else {}
"
`;

exports[`invalid(10): 'if (foo === 1) {}\\nelse if (foo === 2…' > Output 1`] = `
"
   1 | switch (foo) {
   2 | case 1: {
   3 | break;
   4 | }
   5 | case 2: {
   6 | break;
   7 | }
   8 | case 3: {
   9 | break;
   10 | }
   11 | case 4: {
   12 | break;
   13 | }
   14 | case 5: {
   15 | break;
   16 | }
   17 | case 6: {
   18 | break;
   19 | }
   20 | case 7: {
   21 | break;
   22 | }
   23 | case 8: {
   24 | break;
   25 | }
   26 | case 9: {
   27 | break;
   28 | }
   29 | case 10: {
   30 | break;
   31 | }
   32 | case 11: {
   33 | break;
   34 | }
   35 | case 12: {
   36 | break;
   37 | }
   38 | case 13: {
   39 | break;
   40 | }
   41 | case 14: {
   42 | break;
   43 | }
   44 | case 15: {
   45 | break;
   46 | }
   47 | case 16: {
   48 | break;
   49 | }
   50 | case 17: {
   51 | break;
   52 | }
   53 | case 18: {
   54 | break;
   55 | }
   56 | case 19: {
   57 | break;
   58 | }
   59 | case 20: {
   60 | break;
   61 | }
   62 | case 21: {
   63 | break;
   64 | }
   65 | case 22: {
   66 | break;
   67 | }
   68 | case 23: {
   69 | break;
   70 | }
   71 | case 24: {
   72 | break;
   73 | }
   74 | case 25: {
   75 | break;
   76 | }
   77 | case 26: {
   78 | break;
   79 | }
   80 | case 27: {
   81 | break;
   82 | }
   83 | case 28: {
   84 | break;
   85 | }
   86 | case 29: {
   87 | break;
   88 | }
   89 | case 30: {
   90 | break;
   91 | }
   92 | case 31: {
   93 | break;
   94 | }
   95 | case 32: {
   96 | break;
   97 | }
   98 | case 33: {
   99 | break;
  100 | }
  101 | case 34: {
  102 | break;
  103 | }
  104 | case 35: {
  105 | break;
  106 | }
  107 | case 36: {
  108 | break;
  109 | }
  110 | case 37: {
  111 | break;
  112 | }
  113 | case 38: {
  114 | break;
  115 | }
  116 | case 39: {
  117 | break;
  118 | }
  119 | case 40: {
  120 | break;
  121 | }
  122 | case 41: {
  123 | break;
  124 | }
  125 | case 42: {
  126 | break;
  127 | }
  128 | case 43: {
  129 | break;
  130 | }
  131 | case 44: {
  132 | break;
  133 | }
  134 | case 45: {
  135 | break;
  136 | }
  137 | case 46: {
  138 | break;
  139 | }
  140 | case 47: {
  141 | break;
  142 | }
  143 | case 48: {
  144 | break;
  145 | }
  146 | case 49: {
  147 | break;
  148 | }
  149 | case 50: {
  150 | break;
  151 | }
  152 | default: {}
  153 | }
"
`;

exports[`invalid(11): 'if (foo === 1) {}\\nelse if ((foo === …' > Code 1`] = `
"
  1 | if (foo === 1) {}
  2 | else if ((foo === 2 || foo === 3) || (foo === 4)) {}
  3 | else if (foo === 5) {}
"
`;

exports[`invalid(11): 'if (foo === 1) {}\\nelse if ((foo === …' > Error 1/1 1`] = `
"
> 1 | if (foo === 1) {}
    | ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if ((foo === 2 || foo === 3) || (foo === 4)) {}
  3 | else if (foo === 5) {}
"
`;

exports[`invalid(11): 'if (foo === 1) {}\\nelse if ((foo === …' > Output 1`] = `
"
   1 | switch (foo) {
   2 | case 1: {
   3 | break;
   4 | }
   5 | case 2: 
   6 | case 3: 
   7 | case 4: {
   8 | break;
   9 | }
  10 | case 5: {
  11 | break;
  12 | }
  13 | // No default
  14 | }
"
`;

exports[`invalid(12): 'function foo() {\\n\\tfor (const a of b…' > Code 1`] = `
"
   1 | function foo() {
   2 | 	for (const a of b) {
   3 | 		if (foo === 1) {
   4 | 			return 1;
   5 | 		} else if (foo === 2) {
   6 | 			throw new Error();
   7 | 		} else if (foo === 3) {
   8 | 			alert(foo);
   9 | 		} else {
  10 | 			console.log('wow');
  11 | 		}
  12 | 	}
  13 | }
"
`;

exports[`invalid(12): 'function foo() {\\n\\tfor (const a of b…' > Error 1/1 1`] = `
"
   1 | function foo() {
   2 | 	for (const a of b) {
>  3 | 		if (foo === 1) {
     | 		^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
   4 | 			return 1;
   5 | 		} else if (foo === 2) {
   6 | 			throw new Error();
   7 | 		} else if (foo === 3) {
   8 | 			alert(foo);
   9 | 		} else {
  10 | 			console.log('wow');
  11 | 		}
  12 | 	}
  13 | }
"
`;

exports[`invalid(12): 'function foo() {\\n\\tfor (const a of b…' > Output 1`] = `
"
   1 | function foo() {
   2 | 	for (const a of b) {
   3 | 		switch (foo) {
   4 | 		case 1: {
   5 | 			return 1;
   6 | 		}
   7 | 		case 2: {
   8 | 			throw new Error();
   9 | 		}
  10 | 		case 3: {
  11 | 			alert(foo);
  12 | 		
  13 | 		break;
  14 | 		}
  15 | 		default: {
  16 | 			console.log('wow');
  17 | 		}
  18 | 		}
  19 | 	}
  20 | }
"
`;

exports[`invalid(13): 'function foo() {\\n\\treturn bar.map(fo…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	return bar.map(foo => {
  3 | 		if (foo === 1) return foo;
  4 | 		else if (foo === 2) throw new Error();
  5 | 		else if (foo === 3) foo++
  6 | 		else console.log('wow');
  7 | 	})
  8 | }
"
`;

exports[`invalid(13): 'function foo() {\\n\\treturn bar.map(fo…' > Error 1/1 1`] = `
"
  1 | function foo() {
  2 | 	return bar.map(foo => {
> 3 | 		if (foo === 1) return foo;
    | 		^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  4 | 		else if (foo === 2) throw new Error();
  5 | 		else if (foo === 3) foo++
  6 | 		else console.log('wow');
  7 | 	})
  8 | }
"
`;

exports[`invalid(13): 'function foo() {\\n\\treturn bar.map(fo…' > Output 1`] = `
"
   1 | function foo() {
   2 | 	return bar.map(foo => {
   3 | 		switch (foo) {
   4 | 		case 1: return foo;
   5 | 		case 2: throw new Error();
   6 | 		case 3: {
   7 | 		foo++
   8 | 		break;
   9 | 		}
  10 | 		default: console.log('wow');
  11 | 		}
  12 | 	})
  13 | }
"
`;

exports[`invalid(14): 'if (one) {}\\nelse if (foo === 1) {}\\n…' > Code 1`] = `
"
   1 | if (one) {}
   2 | else if (foo === 1) {}
   3 | else if (foo === 2) {}
   4 | else if (foo === 3) {}
   5 | else if (two) {}
   6 | else if (bar === 1) {}
   7 | else if (bar === 2) {}
   8 | else if (bar === 3) {}
   9 | else if (foo === 1) {}
  10 | else if (foo === 2) {}
  11 | else if (foo === 3) {}
"
`;

exports[`invalid(14): 'if (one) {}\\nelse if (foo === 1) {}\\n…' > Error 1/3 1`] = `
"
   1 | if (one) {}
>  2 | else if (foo === 1) {}
     |      ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
   3 | else if (foo === 2) {}
   4 | else if (foo === 3) {}
   5 | else if (two) {}
   6 | else if (bar === 1) {}
   7 | else if (bar === 2) {}
   8 | else if (bar === 3) {}
   9 | else if (foo === 1) {}
  10 | else if (foo === 2) {}
  11 | else if (foo === 3) {}
"
`;

exports[`invalid(14): 'if (one) {}\\nelse if (foo === 1) {}\\n…' > Error 2/3 1`] = `
"
   1 | if (one) {}
   2 | else if (foo === 1) {}
   3 | else if (foo === 2) {}
   4 | else if (foo === 3) {}
   5 | else if (two) {}
>  6 | else if (bar === 1) {}
     |      ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
   7 | else if (bar === 2) {}
   8 | else if (bar === 3) {}
   9 | else if (foo === 1) {}
  10 | else if (foo === 2) {}
  11 | else if (foo === 3) {}
"
`;

exports[`invalid(14): 'if (one) {}\\nelse if (foo === 1) {}\\n…' > Error 3/3 1`] = `
"
   1 | if (one) {}
   2 | else if (foo === 1) {}
   3 | else if (foo === 2) {}
   4 | else if (foo === 3) {}
   5 | else if (two) {}
   6 | else if (bar === 1) {}
   7 | else if (bar === 2) {}
   8 | else if (bar === 3) {}
>  9 | else if (foo === 1) {}
     |      ^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  10 | else if (foo === 2) {}
  11 | else if (foo === 3) {}
"
`;

exports[`invalid(14): 'if (one) {}\\nelse if (foo === 1) {}\\n…' > Output 1`] = `
"
   1 | if (one) {}
   2 | else switch (foo) {
   3 |  case 1: {
   4 |  break;
   5 |  }
   6 |  case 2: {
   7 |  break;
   8 |  }
   9 |  case 3: {
  10 |  break;
  11 |  }
  12 |  default: if (two) {}
  13 | else switch (bar) {
  14 |  case 1: {
  15 |  break;
  16 |  }
  17 |  case 2: {
  18 |  break;
  19 |  }
  20 |  case 3: {
  21 |  break;
  22 |  }
  23 |  default: switch (foo) {
  24 |  case 1: {
  25 |  break;
  26 |  }
  27 |  case 2: {
  28 |  break;
  29 |  }
  30 |  case 3: {
  31 |  break;
  32 |  }
  33 |  // No default
  34 |  }
  35 |  }
  36 |  }
"
`;

exports[`invalid(15): 'if (foo.baz === 1) {}\\nelse if (foo[\\…' > Code 1`] = `
"
  1 | if (foo.baz === 1) {}
  2 | else if (foo['baz'] === 2) {}
  3 | else if (foo["ba" + 'z'] === 3) {}
"
`;

exports[`invalid(15): 'if (foo.baz === 1) {}\\nelse if (foo[\\…' > Error 1/1 1`] = `
"
> 1 | if (foo.baz === 1) {}
    | ^^^^^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  2 | else if (foo['baz'] === 2) {}
  3 | else if (foo["ba" + 'z'] === 3) {}
"
`;

exports[`invalid(15): 'if (foo.baz === 1) {}\\nelse if (foo[\\…' > Output 1`] = `
"
   1 | switch (foo.baz) {
   2 | case 1: {
   3 | break;
   4 | }
   5 | case 2: {
   6 | break;
   7 | }
   8 | case 3: {
   9 | break;
  10 | }
  11 | // No default
  12 | }
"
`;

exports[`invalid(16): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Code 1`] = `
"
  1 | while (bar) {
  2 | 	if (foo === 1) {
  3 | 		for (const foo of bar) {
  4 | 			break;
  5 | 		}
  6 | 	} else if (foo === 2) {
  7 | 	} else if (foo === 3) {
  8 | 	}
  9 | }
"
`;

exports[`invalid(16): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Error 1/1 1`] = `
"
  1 | while (bar) {
> 2 | 	if (foo === 1) {
    | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | 		for (const foo of bar) {
  4 | 			break;
  5 | 		}
  6 | 	} else if (foo === 2) {
  7 | 	} else if (foo === 3) {
  8 | 	}
  9 | }
"
`;

exports[`invalid(16): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Output 1`] = `
"
   1 | while (bar) {
   2 | 	switch (foo) {
   3 | 	case 1: {
   4 | 		for (const foo of bar) {
   5 | 			break;
   6 | 		}
   7 | 	
   8 | 	break;
   9 | 	}
  10 | 	case 2: {
  11 | 	
  12 | 	break;
  13 | 	}
  14 | 	case 3: {
  15 | 	
  16 | 	break;
  17 | 	}
  18 | 	// No default
  19 | 	}
  20 | }
"
`;

exports[`invalid(17): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Code 1`] = `
"
  1 | while (bar) {
  2 | 	if (foo === 1) {
  3 | 		break;
  4 | 	} else if (foo === 2) {
  5 | 	} else if (foo === 3) {
  6 | 	}
  7 | }
"
`;

exports[`invalid(17): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Error 1/1 1`] = `
"
  1 | while (bar) {
> 2 | 	if (foo === 1) {
    | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | 		break;
  4 | 	} else if (foo === 2) {
  5 | 	} else if (foo === 3) {
  6 | 	}
  7 | }
"
`;

exports[`invalid(18): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Code 1`] = `
"
  1 | while (bar) {
  2 | 	if (foo === 1) {
  3 | 	} else if (foo === 2) {
  4 | 		break;
  5 | 	} else if (foo === 3) {
  6 | 	}
  7 | }
"
`;

exports[`invalid(18): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Error 1/1 1`] = `
"
  1 | while (bar) {
> 2 | 	if (foo === 1) {
    | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  3 | 	} else if (foo === 2) {
  4 | 		break;
  5 | 	} else if (foo === 3) {
  6 | 	}
  7 | }
"
`;

exports[`invalid(19): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Code 1`] = `
"
   1 | while (bar) {
   2 | 	if (foo === 1) {
   3 | 	} else if (foo === 2) {
   4 | 	} else if (foo === 3) {
   5 | 		if (a) {
   6 | 			if (b) {
   7 | 				if (c) {
   8 | 					break;
   9 | 				}
  10 | 			}
  11 | 		}
  12 | 	}
  13 | }
"
`;

exports[`invalid(19): 'while (bar) {\\n\\tif (foo === 1) {\\n\\t…' > Error 1/1 1`] = `
"
   1 | while (bar) {
>  2 | 	if (foo === 1) {
     | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
   3 | 	} else if (foo === 2) {
   4 | 	} else if (foo === 3) {
   5 | 		if (a) {
   6 | 			if (b) {
   7 | 				if (c) {
   8 | 					break;
   9 | 				}
  10 | 			}
  11 | 		}
  12 | 	}
  13 | }
"
`;

exports[`invalid(20): 'switch (bar) {\\n\\tcase \\'bar\\':\\n\\t\\t…' > Code 1`] = `
"
  1 | switch (bar) {
  2 | 	case 'bar':
  3 | 		if (foo === 1) {
  4 | 		} else if (foo === 2) {
  5 | 		} else if (foo === 3) {
  6 | 			break;
  7 | 		}
  8 | }
"
`;

exports[`invalid(20): 'switch (bar) {\\n\\tcase \\'bar\\':\\n\\t\\t…' > Error 1/1 1`] = `
"
  1 | switch (bar) {
  2 | 	case 'bar':
> 3 | 		if (foo === 1) {
    | 		^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
  4 | 		} else if (foo === 2) {
  5 | 		} else if (foo === 3) {
  6 | 			break;
  7 | 		}
  8 | }
"
`;

exports[`invalid(21): 'function unicorn() {\\n\\tif (foo === 1…' > Code 1`] = `
"
   1 | function unicorn() {
   2 | 	if (foo === 1) return 1;
   3 | 	else if (foo === 2) throw new Error("");
   4 | 	else if (foo === 3) process.exit(1);
   5 | 	else if (foo === 4) {}
   6 | 	else if (foo === 5) ;
   7 | 	else if (foo === 6) {
   8 | 		return 6;
   9 | 		// Already unreachable
  10 | 		call();
  11 | 	}
  12 | 	else if (foo === 7) {
  13 | 		return 7;
  14 | 		// EmptyStatement after return
  15 | 		;;;;;;
  16 | 	}
  17 | 	else if (foo === 8) {
  18 | 		return 8;
  19 | 		// FunctionDeclaration after return
  20 | 		function afterReturn() {}
  21 | 	}
  22 | 	else if (foo === 9) {
  23 | 		return 9;
  24 | 		// FunctionExpression after return
  25 | 		const afterReturn = function afterReturn() {return 9}
  26 | 	}
  27 | 	else if (foo === 10) {
  28 | 		{{{
  29 | 			return 10;
  30 | 		};};};
  31 | 	}
  32 | 	else if (foo === 11) {
  33 | 		return 11;
  34 |
  35 | 		{{{
  36 | 			;;;
  37 | 			function afterReturn() {}
  38 | 			;;;
  39 | 			function afterReturn2() {}
  40 | 			;;;
  41 | 		}}}
  42 | 	}
  43 | 	else if (foo === 12) {
  44 | 		return twelve;
  45 | 		var twelve = 12;
  46 | 	}
  47 | 	else return 'default';
  48 | }
"
`;

exports[`invalid(21): 'function unicorn() {\\n\\tif (foo === 1…' > Error 1/1 1`] = `
"
   1 | function unicorn() {
>  2 | 	if (foo === 1) return 1;
     | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
   3 | 	else if (foo === 2) throw new Error("");
   4 | 	else if (foo === 3) process.exit(1);
   5 | 	else if (foo === 4) {}
   6 | 	else if (foo === 5) ;
   7 | 	else if (foo === 6) {
   8 | 		return 6;
   9 | 		// Already unreachable
  10 | 		call();
  11 | 	}
  12 | 	else if (foo === 7) {
  13 | 		return 7;
  14 | 		// EmptyStatement after return
  15 | 		;;;;;;
  16 | 	}
  17 | 	else if (foo === 8) {
  18 | 		return 8;
  19 | 		// FunctionDeclaration after return
  20 | 		function afterReturn() {}
  21 | 	}
  22 | 	else if (foo === 9) {
  23 | 		return 9;
  24 | 		// FunctionExpression after return
  25 | 		const afterReturn = function afterReturn() {return 9}
  26 | 	}
  27 | 	else if (foo === 10) {
  28 | 		{{{
  29 | 			return 10;
  30 | 		};};};
  31 | 	}
  32 | 	else if (foo === 11) {
  33 | 		return 11;
  34 |
  35 | 		{{{
  36 | 			;;;
  37 | 			function afterReturn() {}
  38 | 			;;;
  39 | 			function afterReturn2() {}
  40 | 			;;;
  41 | 		}}}
  42 | 	}
  43 | 	else if (foo === 12) {
  44 | 		return twelve;
  45 | 		var twelve = 12;
  46 | 	}
  47 | 	else return 'default';
  48 | }
"
`;

exports[`invalid(21): 'function unicorn() {\\n\\tif (foo === 1…' > Output 1`] = `
"
   1 | function unicorn() {
   2 | 	switch (foo) {
   3 | 	case 1: return 1;
   4 | 	case 2: throw new Error("");
   5 | 	case 3: {
   6 | 	process.exit(1);
   7 | 	break;
   8 | 	}
   9 | 	case 4: {
  10 | 	break;
  11 | 	}
  12 | 	case 5: {
  13 | 	;
  14 | 	break;
  15 | 	}
  16 | 	case 6: {
  17 | 		return 6;
  18 | 		// Already unreachable
  19 | 		call();
  20 | 	
  21 | 	break;
  22 | 	}
  23 | 	case 7: {
  24 | 		return 7;
  25 | 		// EmptyStatement after return
  26 | 		;;;;;;
  27 | 	}
  28 | 	case 8: {
  29 | 		return 8;
  30 | 		// FunctionDeclaration after return
  31 | 		function afterReturn() {}
  32 | 	}
  33 | 	case 9: {
  34 | 		return 9;
  35 | 		// FunctionExpression after return
  36 | 		const afterReturn = function afterReturn() {return 9}
  37 | 	
  38 | 	break;
  39 | 	}
  40 | 	case 10: {
  41 | 		{{{
  42 | 			return 10;
  43 | 		};};};
  44 | 	}
  45 | 	case 11: {
  46 | 		return 11;
  47 |
  48 | 		{{{
  49 | 			;;;
  50 | 			function afterReturn() {}
  51 | 			;;;
  52 | 			function afterReturn2() {}
  53 | 			;;;
  54 | 		}}}
  55 | 	}
  56 | 	case 12: {
  57 | 		return twelve;
  58 | 		var twelve = 12;
  59 | 	
  60 | 	break;
  61 | 	}
  62 | 	default: return 'default';
  63 | 	}
  64 | }
"
`;

exports[`invalid(22): 'function unicorn() {\\n\\tif (foo === 1…' > Code 1`] = `
"
   1 | function unicorn() {
   2 | 	if (foo === 1) {
   3 | 		if (true) {
   4 | 			throw error;
   5 | 		} else {
   6 | 			return false;
   7 | 		}
   8 | 	}
   9 | 	else if (foo === 2) {
  10 | 		if (true) {
  11 | 			throw error;
  12 | 		}
  13 | 	// no else, need break
  14 | 	}
  15 | 	else if (foo === 3) {
  16 | 		if (a) {
  17 | 			return a;
  18 | 		} else if (b) {
  19 | 			return b;
  20 | 		} else if (c) {
  21 | 			return c;
  22 | 		} else if (d) {
  23 | 			if (dd) {
  24 | 				return dd;
  25 | 			} else {
  26 | 				return dd;
  27 | 			}
  28 | 		} else {
  29 | 			return f;
  30 | 		}
  31 | 	}
  32 | 	else if (foo === 4) {
  33 | 		if (a) {
  34 | 			return a;
  35 | 		} else if (b) {
  36 | 			return b;
  37 | 		} else if (c) {
  38 | 			return c;
  39 | 		} else if (d) {
  40 | 			return e;
  41 | 		} // here
  42 | 	// missing else deep inside, need break
  43 | 	}
  44 | 	else if (foo === 5) {
  45 | 		if (a) {
  46 | 			return a;
  47 | 		} else if (b) {
  48 | 			return b;
  49 | 		} else if (c) {
  50 | 			return c;
  51 | 		} else if (d) {
  52 | 			if (dd) {
  53 | 				return dd;
  54 | 			} else if (de) {
  55 | 				return de;
  56 | 			} // here
  57 | 		} else {
  58 | 			return f;
  59 | 		}
  60 | 	// missing else deep inside, need break
  61 | 	}
  62 | 	else if (foo === 6) {
  63 | 		if (a) {
  64 | 			return a;
  65 | 		} else if (b) {
  66 | 			return b;
  67 | 		} else if (c) {
  68 | 			// here
  69 | 		} else if (d) {
  70 | 			return e;
  71 | 		} else {
  72 | 			return f;
  73 | 		}
  74 | 	// missing one return, need break
  75 | 	}
  76 | 	else if (foo === 7) {
  77 | 		if (a) return a;
  78 | 		else if (b) {
  79 | 			return b;;;;;
  80 | 		} else if (c) {
  81 | 			return c;
  82 | 			function x() {}
  83 | 		} else if (d) {
  84 | 			return e;
  85 | 		} else {
  86 | 			return f;
  87 | 		}
  88 | 	}
  89 | }
"
`;

exports[`invalid(22): 'function unicorn() {\\n\\tif (foo === 1…' > Error 1/1 1`] = `
"
   1 | function unicorn() {
>  2 | 	if (foo === 1) {
     | 	^^^^^^^^^^^^^^^ Use \`switch\` instead of multiple \`else-if\`.
   3 | 		if (true) {
   4 | 			throw error;
   5 | 		} else {
   6 | 			return false;
   7 | 		}
   8 | 	}
   9 | 	else if (foo === 2) {
  10 | 		if (true) {
  11 | 			throw error;
  12 | 		}
  13 | 	// no else, need break
  14 | 	}
  15 | 	else if (foo === 3) {
  16 | 		if (a) {
  17 | 			return a;
  18 | 		} else if (b) {
  19 | 			return b;
  20 | 		} else if (c) {
  21 | 			return c;
  22 | 		} else if (d) {
  23 | 			if (dd) {
  24 | 				return dd;
  25 | 			} else {
  26 | 				return dd;
  27 | 			}
  28 | 		} else {
  29 | 			return f;
  30 | 		}
  31 | 	}
  32 | 	else if (foo === 4) {
  33 | 		if (a) {
  34 | 			return a;
  35 | 		} else if (b) {
  36 | 			return b;
  37 | 		} else if (c) {
  38 | 			return c;
  39 | 		} else if (d) {
  40 | 			return e;
  41 | 		} // here
  42 | 	// missing else deep inside, need break
  43 | 	}
  44 | 	else if (foo === 5) {
  45 | 		if (a) {
  46 | 			return a;
  47 | 		} else if (b) {
  48 | 			return b;
  49 | 		} else if (c) {
  50 | 			return c;
  51 | 		} else if (d) {
  52 | 			if (dd) {
  53 | 				return dd;
  54 | 			} else if (de) {
  55 | 				return de;
  56 | 			} // here
  57 | 		} else {
  58 | 			return f;
  59 | 		}
  60 | 	// missing else deep inside, need break
  61 | 	}
  62 | 	else if (foo === 6) {
  63 | 		if (a) {
  64 | 			return a;
  65 | 		} else if (b) {
  66 | 			return b;
  67 | 		} else if (c) {
  68 | 			// here
  69 | 		} else if (d) {
  70 | 			return e;
  71 | 		} else {
  72 | 			return f;
  73 | 		}
  74 | 	// missing one return, need break
  75 | 	}
  76 | 	else if (foo === 7) {
  77 | 		if (a) return a;
  78 | 		else if (b) {
  79 | 			return b;;;;;
  80 | 		} else if (c) {
  81 | 			return c;
  82 | 			function x() {}
  83 | 		} else if (d) {
  84 | 			return e;
  85 | 		} else {
  86 | 			return f;
  87 | 		}
  88 | 	}
  89 | }
"
`;

exports[`invalid(22): 'function unicorn() {\\n\\tif (foo === 1…' > Output 1`] = `
"
   1 | function unicorn() {
   2 | 	switch (foo) {
   3 | 	case 1: {
   4 | 		if (true) {
   5 | 			throw error;
   6 | 		} else {
   7 | 			return false;
   8 | 		}
   9 | 	}
   10 | 	case 2: {
   11 | 		if (true) {
   12 | 			throw error;
   13 | 		}
   14 | 	// no else, need break
   15 | 	
   16 | 	break;
   17 | 	}
   18 | 	case 3: {
   19 | 		if (a) {
   20 | 			return a;
   21 | 		} else if (b) {
   22 | 			return b;
   23 | 		} else if (c) {
   24 | 			return c;
   25 | 		} else if (d) {
   26 | 			if (dd) {
   27 | 				return dd;
   28 | 			} else {
   29 | 				return dd;
   30 | 			}
   31 | 		} else {
   32 | 			return f;
   33 | 		}
   34 | 	}
   35 | 	case 4: {
   36 | 		if (a) {
   37 | 			return a;
   38 | 		} else if (b) {
   39 | 			return b;
   40 | 		} else if (c) {
   41 | 			return c;
   42 | 		} else if (d) {
   43 | 			return e;
   44 | 		} // here
   45 | 	// missing else deep inside, need break
   46 | 	
   47 | 	break;
   48 | 	}
   49 | 	case 5: {
   50 | 		if (a) {
   51 | 			return a;
   52 | 		} else if (b) {
   53 | 			return b;
   54 | 		} else if (c) {
   55 | 			return c;
   56 | 		} else if (d) {
   57 | 			if (dd) {
   58 | 				return dd;
   59 | 			} else if (de) {
   60 | 				return de;
   61 | 			} // here
   62 | 		} else {
   63 | 			return f;
   64 | 		}
   65 | 	// missing else deep inside, need break
   66 | 	
   67 | 	break;
   68 | 	}
   69 | 	case 6: {
   70 | 		if (a) {
   71 | 			return a;
   72 | 		} else if (b) {
   73 | 			return b;
   74 | 		} else if (c) {
   75 | 			// here
   76 | 		} else if (d) {
   77 | 			return e;
   78 | 		} else {
   79 | 			return f;
   80 | 		}
   81 | 	// missing one return, need break
   82 | 	
   83 | 	break;
   84 | 	}
   85 | 	case 7: {
   86 | 		if (a) return a;
   87 | 		else if (b) {
   88 | 			return b;;;;;
   89 | 		} else if (c) {
   90 | 			return c;
   91 | 			function x() {}
   92 | 		} else if (d) {
   93 | 			return e;
   94 | 		} else {
   95 | 			return f;
   96 | 		}
   97 | 	}
   98 | 	// No default
   99 | 	}
  100 | }
"
`;
