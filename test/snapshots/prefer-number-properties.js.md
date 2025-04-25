// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = {[NaN]: 1}' > Code 1`] = `
"
  1 | const foo = {[NaN]: 1}
"
`;

exports[`invalid(0): 'const foo = {[NaN]: 1}' > Error 1/1 1`] = `
"
> 1 | const foo = {[NaN]: 1}
    |               ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(0): 'const foo = {[NaN]: 1}' > Output 1`] = `
"
  1 | const foo = {[Number.NaN]: 1}
"
`;

exports[`invalid(1): 'const foo = {[NaN]() {}}' > Code 1`] = `
"
  1 | const foo = {[NaN]() {}}
"
`;

exports[`invalid(1): 'const foo = {[NaN]() {}}' > Error 1/1 1`] = `
"
> 1 | const foo = {[NaN]() {}}
    |               ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(1): 'const foo = {[NaN]() {}}' > Output 1`] = `
"
  1 | const foo = {[Number.NaN]() {}}
"
`;

exports[`invalid(2): 'foo[NaN] = 1;' > Code 1`] = `
"
  1 | foo[NaN] = 1;
"
`;

exports[`invalid(2): 'foo[NaN] = 1;' > Error 1/1 1`] = `
"
> 1 | foo[NaN] = 1;
    |     ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(2): 'foo[NaN] = 1;' > Output 1`] = `
"
  1 | foo[Number.NaN] = 1;
"
`;

exports[`invalid(3): 'class A {[NaN](){}}' > Code 1`] = `
"
  1 | class A {[NaN](){}}
"
`;

exports[`invalid(3): 'class A {[NaN](){}}' > Error 1/1 1`] = `
"
> 1 | class A {[NaN](){}}
    |           ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(3): 'class A {[NaN](){}}' > Output 1`] = `
"
  1 | class A {[Number.NaN](){}}
"
`;

exports[`invalid(4): 'foo = {[NaN]: 1}' > Code 1`] = `
"
  1 | foo = {[NaN]: 1}
"
`;

exports[`invalid(4): 'foo = {[NaN]: 1}' > Error 1/1 1`] = `
"
> 1 | foo = {[NaN]: 1}
    |         ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(4): 'foo = {[NaN]: 1}' > Output 1`] = `
"
  1 | foo = {[Number.NaN]: 1}
"
`;

exports[`invalid(5): 'const foo = Infinity;' > Code 1`] = `
"
  1 | const foo = Infinity;
"
`;

exports[`invalid(5): 'const foo = Infinity;' > Error 1/1 1`] = `
"
> 1 | const foo = Infinity;
    |             ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(5): 'const foo = Infinity;' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(5): 'const foo = Infinity;' > Output 1`] = `
"
  1 | const foo = Number.POSITIVE_INFINITY;
"
`;

exports[`invalid(6): 'if (Number.isNaN(Infinity)) {}' > Code 1`] = `
"
  1 | if (Number.isNaN(Infinity)) {}
"
`;

exports[`invalid(6): 'if (Number.isNaN(Infinity)) {}' > Error 1/1 1`] = `
"
> 1 | if (Number.isNaN(Infinity)) {}
    |                  ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(6): 'if (Number.isNaN(Infinity)) {}' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(6): 'if (Number.isNaN(Infinity)) {}' > Output 1`] = `
"
  1 | if (Number.isNaN(Number.POSITIVE_INFINITY)) {}
"
`;

exports[`invalid(7): 'if (Object.is(foo, Infinity)) {}' > Code 1`] = `
"
  1 | if (Object.is(foo, Infinity)) {}
"
`;

exports[`invalid(7): 'if (Object.is(foo, Infinity)) {}' > Error 1/1 1`] = `
"
> 1 | if (Object.is(foo, Infinity)) {}
    |                    ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(7): 'if (Object.is(foo, Infinity)) {}' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(7): 'if (Object.is(foo, Infinity)) {}' > Output 1`] = `
"
  1 | if (Object.is(foo, Number.POSITIVE_INFINITY)) {}
"
`;

exports[`invalid(8): 'const foo = bar[Infinity];' > Code 1`] = `
"
  1 | const foo = bar[Infinity];
"
`;

exports[`invalid(8): 'const foo = bar[Infinity];' > Error 1/1 1`] = `
"
> 1 | const foo = bar[Infinity];
    |                 ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(8): 'const foo = bar[Infinity];' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(8): 'const foo = bar[Infinity];' > Output 1`] = `
"
  1 | const foo = bar[Number.POSITIVE_INFINITY];
"
`;

exports[`invalid(9): 'const foo = {Infinity};' > Code 1`] = `
"
  1 | const foo = {Infinity};
"
`;

exports[`invalid(9): 'const foo = {Infinity};' > Error 1/1 1`] = `
"
> 1 | const foo = {Infinity};
    |              ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(9): 'const foo = {Infinity};' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(9): 'const foo = {Infinity};' > Output 1`] = `
"
  1 | const foo = {Infinity: Number.POSITIVE_INFINITY};
"
`;

exports[`invalid(10): 'const foo = {Infinity: Infinity};' > Code 1`] = `
"
  1 | const foo = {Infinity: Infinity};
"
`;

exports[`invalid(10): 'const foo = {Infinity: Infinity};' > Error 1/1 1`] = `
"
> 1 | const foo = {Infinity: Infinity};
    |                        ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(10): 'const foo = {Infinity: Infinity};' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(10): 'const foo = {Infinity: Infinity};' > Output 1`] = `
"
  1 | const foo = {Infinity: Number.POSITIVE_INFINITY};
"
`;

exports[`invalid(11): 'const foo = {[Infinity]: -Infinity};' > Code 1`] = `
"
  1 | const foo = {[Infinity]: -Infinity};
"
`;

exports[`invalid(11): 'const foo = {[Infinity]: -Infinity};' > Error 1/2 1`] = `
"
> 1 | const foo = {[Infinity]: -Infinity};
    |               ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(11): 'const foo = {[Infinity]: -Infinity};' > Error 2/2 1`] = `
"
> 1 | const foo = {[Infinity]: -Infinity};
    |                          ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(11): 'const foo = {[Infinity]: -Infinity};' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(11): 'const foo = {[Infinity]: -Infinity};' > Output 1`] = `
"
  1 | const foo = {[Number.POSITIVE_INFINITY]: Number.NEGATIVE_INFINITY};
"
`;

exports[`invalid(12): 'const foo = {[-Infinity]: Infinity};' > Code 1`] = `
"
  1 | const foo = {[-Infinity]: Infinity};
"
`;

exports[`invalid(12): 'const foo = {[-Infinity]: Infinity};' > Error 1/2 1`] = `
"
> 1 | const foo = {[-Infinity]: Infinity};
    |               ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(12): 'const foo = {[-Infinity]: Infinity};' > Error 2/2 1`] = `
"
> 1 | const foo = {[-Infinity]: Infinity};
    |                           ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(12): 'const foo = {[-Infinity]: Infinity};' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(12): 'const foo = {[-Infinity]: Infinity};' > Output 1`] = `
"
  1 | const foo = {[Number.NEGATIVE_INFINITY]: Number.POSITIVE_INFINITY};
"
`;

exports[`invalid(13): 'const foo = {Infinity: -Infinity};' > Code 1`] = `
"
  1 | const foo = {Infinity: -Infinity};
"
`;

exports[`invalid(13): 'const foo = {Infinity: -Infinity};' > Error 1/1 1`] = `
"
> 1 | const foo = {Infinity: -Infinity};
    |                        ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(13): 'const foo = {Infinity: -Infinity};' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(13): 'const foo = {Infinity: -Infinity};' > Output 1`] = `
"
  1 | const foo = {Infinity: Number.NEGATIVE_INFINITY};
"
`;

exports[`invalid(14): 'const {foo = Infinity} = {};' > Code 1`] = `
"
  1 | const {foo = Infinity} = {};
"
`;

exports[`invalid(14): 'const {foo = Infinity} = {};' > Error 1/1 1`] = `
"
> 1 | const {foo = Infinity} = {};
    |              ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(14): 'const {foo = Infinity} = {};' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(14): 'const {foo = Infinity} = {};' > Output 1`] = `
"
  1 | const {foo = Number.POSITIVE_INFINITY} = {};
"
`;

exports[`invalid(15): 'const {foo = -Infinity} = {};' > Code 1`] = `
"
  1 | const {foo = -Infinity} = {};
"
`;

exports[`invalid(15): 'const {foo = -Infinity} = {};' > Error 1/1 1`] = `
"
> 1 | const {foo = -Infinity} = {};
    |              ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(15): 'const {foo = -Infinity} = {};' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(15): 'const {foo = -Infinity} = {};' > Output 1`] = `
"
  1 | const {foo = Number.NEGATIVE_INFINITY} = {};
"
`;

exports[`invalid(16): 'const foo = Infinity.toString();' > Code 1`] = `
"
  1 | const foo = Infinity.toString();
"
`;

exports[`invalid(16): 'const foo = Infinity.toString();' > Error 1/1 1`] = `
"
> 1 | const foo = Infinity.toString();
    |             ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(16): 'const foo = Infinity.toString();' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(16): 'const foo = Infinity.toString();' > Output 1`] = `
"
  1 | const foo = Number.POSITIVE_INFINITY.toString();
"
`;

exports[`invalid(17): 'const foo = -Infinity.toString();' > Code 1`] = `
"
  1 | const foo = -Infinity.toString();
"
`;

exports[`invalid(17): 'const foo = -Infinity.toString();' > Error 1/1 1`] = `
"
> 1 | const foo = -Infinity.toString();
    |              ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(17): 'const foo = -Infinity.toString();' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(17): 'const foo = -Infinity.toString();' > Output 1`] = `
"
  1 | const foo = -Number.POSITIVE_INFINITY.toString();
"
`;

exports[`invalid(18): 'const foo = (-Infinity).toString();' > Code 1`] = `
"
  1 | const foo = (-Infinity).toString();
"
`;

exports[`invalid(18): 'const foo = (-Infinity).toString();' > Error 1/1 1`] = `
"
> 1 | const foo = (-Infinity).toString();
    |              ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(18): 'const foo = (-Infinity).toString();' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(18): 'const foo = (-Infinity).toString();' > Output 1`] = `
"
  1 | const foo = (Number.NEGATIVE_INFINITY).toString();
"
`;

exports[`invalid(19): 'const foo = +Infinity;' > Code 1`] = `
"
  1 | const foo = +Infinity;
"
`;

exports[`invalid(19): 'const foo = +Infinity;' > Error 1/1 1`] = `
"
> 1 | const foo = +Infinity;
    |              ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(19): 'const foo = +Infinity;' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(19): 'const foo = +Infinity;' > Output 1`] = `
"
  1 | const foo = +Number.POSITIVE_INFINITY;
"
`;

exports[`invalid(20): 'const foo = +-Infinity;' > Code 1`] = `
"
  1 | const foo = +-Infinity;
"
`;

exports[`invalid(20): 'const foo = +-Infinity;' > Error 1/1 1`] = `
"
> 1 | const foo = +-Infinity;
    |              ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(20): 'const foo = +-Infinity;' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(20): 'const foo = +-Infinity;' > Output 1`] = `
"
  1 | const foo = +Number.NEGATIVE_INFINITY;
"
`;

exports[`invalid(21): 'const foo = -Infinity;' > Code 1`] = `
"
  1 | const foo = -Infinity;
"
`;

exports[`invalid(21): 'const foo = -Infinity;' > Error 1/1 1`] = `
"
> 1 | const foo = -Infinity;
    |             ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(21): 'const foo = -Infinity;' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(21): 'const foo = -Infinity;' > Output 1`] = `
"
  1 | const foo = Number.NEGATIVE_INFINITY;
"
`;

exports[`invalid(22): 'const foo = -(-Infinity);' > Code 1`] = `
"
  1 | const foo = -(-Infinity);
"
`;

exports[`invalid(22): 'const foo = -(-Infinity);' > Error 1/1 1`] = `
"
> 1 | const foo = -(-Infinity);
    |               ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(22): 'const foo = -(-Infinity);' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(22): 'const foo = -(-Infinity);' > Output 1`] = `
"
  1 | const foo = -(Number.NEGATIVE_INFINITY);
"
`;

exports[`invalid(23): 'const foo = 1 - Infinity;' > Code 1`] = `
"
  1 | const foo = 1 - Infinity;
"
`;

exports[`invalid(23): 'const foo = 1 - Infinity;' > Error 1/1 1`] = `
"
> 1 | const foo = 1 - Infinity;
    |                 ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(23): 'const foo = 1 - Infinity;' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(23): 'const foo = 1 - Infinity;' > Output 1`] = `
"
  1 | const foo = 1 - Number.POSITIVE_INFINITY;
"
`;

exports[`invalid(24): 'const foo = 1 - -Infinity;' > Code 1`] = `
"
  1 | const foo = 1 - -Infinity;
"
`;

exports[`invalid(24): 'const foo = 1 - -Infinity;' > Error 1/1 1`] = `
"
> 1 | const foo = 1 - -Infinity;
    |                 ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(24): 'const foo = 1 - -Infinity;' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(24): 'const foo = 1 - -Infinity;' > Output 1`] = `
"
  1 | const foo = 1 - Number.NEGATIVE_INFINITY;
"
`;

exports[`invalid(25): 'const isPositiveZero = value => value…' > Code 1`] = `
"
  1 | const isPositiveZero = value => value === 0 && 1 / value === Infinity;
"
`;

exports[`invalid(25): 'const isPositiveZero = value => value…' > Error 1/1 1`] = `
"
> 1 | const isPositiveZero = value => value === 0 && 1 / value === Infinity;
    |                                                              ^^^^^^^^ Prefer \`Number.POSITIVE_INFINITY\` over \`Infinity\`.
"
`;

exports[`invalid(25): 'const isPositiveZero = value => value…' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(25): 'const isPositiveZero = value => value…' > Output 1`] = `
"
  1 | const isPositiveZero = value => value === 0 && 1 / value === Number.POSITIVE_INFINITY;
"
`;

exports[`invalid(26): 'const isNegativeZero = value => value…' > Code 1`] = `
"
  1 | const isNegativeZero = value => value === 0 && 1 / value === -Infinity;
"
`;

exports[`invalid(26): 'const isNegativeZero = value => value…' > Error 1/1 1`] = `
"
> 1 | const isNegativeZero = value => value === 0 && 1 / value === -Infinity;
    |                                                              ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(26): 'const isNegativeZero = value => value…' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(26): 'const isNegativeZero = value => value…' > Output 1`] = `
"
  1 | const isNegativeZero = value => value === 0 && 1 / value === Number.NEGATIVE_INFINITY;
"
`;

exports[`invalid(27): 'const {a = NaN} = {};' > Code 1`] = `
"
  1 | const {a = NaN} = {};
"
`;

exports[`invalid(27): 'const {a = NaN} = {};' > Error 1/1 1`] = `
"
> 1 | const {a = NaN} = {};
    |            ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(27): 'const {a = NaN} = {};' > Output 1`] = `
"
  1 | const {a = Number.NaN} = {};
"
`;

exports[`invalid(28): 'const {[NaN]: a = NaN} = {};' > Code 1`] = `
"
  1 | const {[NaN]: a = NaN} = {};
"
`;

exports[`invalid(28): 'const {[NaN]: a = NaN} = {};' > Error 1/2 1`] = `
"
> 1 | const {[NaN]: a = NaN} = {};
    |         ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(28): 'const {[NaN]: a = NaN} = {};' > Error 2/2 1`] = `
"
> 1 | const {[NaN]: a = NaN} = {};
    |                   ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(28): 'const {[NaN]: a = NaN} = {};' > Output 1`] = `
"
  1 | const {[Number.NaN]: a = Number.NaN} = {};
"
`;

exports[`invalid(29): 'const [a = NaN] = [];' > Code 1`] = `
"
  1 | const [a = NaN] = [];
"
`;

exports[`invalid(29): 'const [a = NaN] = [];' > Error 1/1 1`] = `
"
> 1 | const [a = NaN] = [];
    |            ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(29): 'const [a = NaN] = [];' > Output 1`] = `
"
  1 | const [a = Number.NaN] = [];
"
`;

exports[`invalid(30): 'function foo({a = NaN}) {}' > Code 1`] = `
"
  1 | function foo({a = NaN}) {}
"
`;

exports[`invalid(30): 'function foo({a = NaN}) {}' > Error 1/1 1`] = `
"
> 1 | function foo({a = NaN}) {}
    |                   ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(30): 'function foo({a = NaN}) {}' > Output 1`] = `
"
  1 | function foo({a = Number.NaN}) {}
"
`;

exports[`invalid(31): 'function foo({[NaN]: a = NaN}) {}' > Code 1`] = `
"
  1 | function foo({[NaN]: a = NaN}) {}
"
`;

exports[`invalid(31): 'function foo({[NaN]: a = NaN}) {}' > Error 1/2 1`] = `
"
> 1 | function foo({[NaN]: a = NaN}) {}
    |                ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(31): 'function foo({[NaN]: a = NaN}) {}' > Error 2/2 1`] = `
"
> 1 | function foo({[NaN]: a = NaN}) {}
    |                          ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(31): 'function foo({[NaN]: a = NaN}) {}' > Output 1`] = `
"
  1 | function foo({[Number.NaN]: a = Number.NaN}) {}
"
`;

exports[`invalid(32): 'function foo([a = NaN]) {}' > Code 1`] = `
"
  1 | function foo([a = NaN]) {}
"
`;

exports[`invalid(32): 'function foo([a = NaN]) {}' > Error 1/1 1`] = `
"
> 1 | function foo([a = NaN]) {}
    |                   ^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(32): 'function foo([a = NaN]) {}' > Output 1`] = `
"
  1 | function foo([a = Number.NaN]) {}
"
`;

exports[`invalid(33): 'function foo() {return-Infinity}' > Code 1`] = `
"
  1 | function foo() {return-Infinity}
"
`;

exports[`invalid(33): 'function foo() {return-Infinity}' > Error 1/1 1`] = `
"
> 1 | function foo() {return-Infinity}
    |                       ^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(33): 'function foo() {return-Infinity}' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(33): 'function foo() {return-Infinity}' > Output 1`] = `
"
  1 | function foo() {return Number.NEGATIVE_INFINITY}
"
`;

exports[`invalid(34): 'globalThis.isNaN(foo);' > Code 1`] = `
"
  1 | globalThis.isNaN(foo);
"
`;

exports[`invalid(34): 'globalThis.isNaN(foo);' > Error 1/1 1`] = `
"
> 1 | globalThis.isNaN(foo);
    | ^^^^^^^^^^^^^^^^ Prefer \`Number.isNaN\` over \`isNaN\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`isNaN\` with \`Number.isNaN\`.
  1 | Number.isNaN(foo);
"
`;

exports[`invalid(35): 'global.isNaN(foo);' > Code 1`] = `
"
  1 | global.isNaN(foo);
"
`;

exports[`invalid(35): 'global.isNaN(foo);' > Error 1/1 1`] = `
"
> 1 | global.isNaN(foo);
    | ^^^^^^^^^^^^ Prefer \`Number.isNaN\` over \`isNaN\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`isNaN\` with \`Number.isNaN\`.
  1 | Number.isNaN(foo);
"
`;

exports[`invalid(36): 'window.isNaN(foo);' > Code 1`] = `
"
  1 | window.isNaN(foo);
"
`;

exports[`invalid(36): 'window.isNaN(foo);' > Error 1/1 1`] = `
"
> 1 | window.isNaN(foo);
    | ^^^^^^^^^^^^ Prefer \`Number.isNaN\` over \`isNaN\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`isNaN\` with \`Number.isNaN\`.
  1 | Number.isNaN(foo);
"
`;

exports[`invalid(37): 'self.isNaN(foo);' > Code 1`] = `
"
  1 | self.isNaN(foo);
"
`;

exports[`invalid(37): 'self.isNaN(foo);' > Error 1/1 1`] = `
"
> 1 | self.isNaN(foo);
    | ^^^^^^^^^^ Prefer \`Number.isNaN\` over \`isNaN\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`isNaN\` with \`Number.isNaN\`.
  1 | Number.isNaN(foo);
"
`;

exports[`invalid(38): 'globalThis.parseFloat(foo);' > Code 1`] = `
"
  1 | globalThis.parseFloat(foo);
"
`;

exports[`invalid(38): 'globalThis.parseFloat(foo);' > Error 1/1 1`] = `
"
> 1 | globalThis.parseFloat(foo);
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer \`Number.parseFloat\` over \`parseFloat\`.
"
`;

exports[`invalid(38): 'globalThis.parseFloat(foo);' > Output 1`] = `
"
  1 | Number.parseFloat(foo);
"
`;

exports[`invalid(39): 'global.parseFloat(foo);' > Code 1`] = `
"
  1 | global.parseFloat(foo);
"
`;

exports[`invalid(39): 'global.parseFloat(foo);' > Error 1/1 1`] = `
"
> 1 | global.parseFloat(foo);
    | ^^^^^^^^^^^^^^^^^ Prefer \`Number.parseFloat\` over \`parseFloat\`.
"
`;

exports[`invalid(39): 'global.parseFloat(foo);' > Output 1`] = `
"
  1 | Number.parseFloat(foo);
"
`;

exports[`invalid(40): 'window.parseFloat(foo);' > Code 1`] = `
"
  1 | window.parseFloat(foo);
"
`;

exports[`invalid(40): 'window.parseFloat(foo);' > Error 1/1 1`] = `
"
> 1 | window.parseFloat(foo);
    | ^^^^^^^^^^^^^^^^^ Prefer \`Number.parseFloat\` over \`parseFloat\`.
"
`;

exports[`invalid(40): 'window.parseFloat(foo);' > Output 1`] = `
"
  1 | Number.parseFloat(foo);
"
`;

exports[`invalid(41): 'self.parseFloat(foo);' > Code 1`] = `
"
  1 | self.parseFloat(foo);
"
`;

exports[`invalid(41): 'self.parseFloat(foo);' > Error 1/1 1`] = `
"
> 1 | self.parseFloat(foo);
    | ^^^^^^^^^^^^^^^ Prefer \`Number.parseFloat\` over \`parseFloat\`.
"
`;

exports[`invalid(41): 'self.parseFloat(foo);' > Output 1`] = `
"
  1 | Number.parseFloat(foo);
"
`;

exports[`invalid(42): 'globalThis.NaN' > Code 1`] = `
"
  1 | globalThis.NaN
"
`;

exports[`invalid(42): 'globalThis.NaN' > Error 1/1 1`] = `
"
> 1 | globalThis.NaN
    | ^^^^^^^^^^^^^^ Prefer \`Number.NaN\` over \`NaN\`.
"
`;

exports[`invalid(42): 'globalThis.NaN' > Output 1`] = `
"
  1 | Number.NaN
"
`;

exports[`invalid(43): '-globalThis.Infinity' > Code 1`] = `
"
  1 | -globalThis.Infinity
"
`;

exports[`invalid(43): '-globalThis.Infinity' > Error 1/1 1`] = `
"
> 1 | -globalThis.Infinity
    | ^^^^^^^^^^^^^^^^^^^^ Prefer \`Number.NEGATIVE_INFINITY\` over \`-Infinity\`.
"
`;

exports[`invalid(43): '-globalThis.Infinity' > Options 1`] = `
"
[
  {
    "checkInfinity": true
  }
]
"
`;

exports[`invalid(43): '-globalThis.Infinity' > Output 1`] = `
"
  1 | Number.NEGATIVE_INFINITY
"
`;

exports[`invalid(44): 'const options = {\\n\\tnormalize: parse…' > Code 1`] = `
"
  1 | const options = {
  2 | 	normalize: parseFloat,
  3 | 	parseInt,
  4 | };
  5 |
  6 | run(foo, options);
"
`;

exports[`invalid(44): 'const options = {\\n\\tnormalize: parse…' > Error 1/2 1`] = `
"
  1 | const options = {
> 2 | 	normalize: parseFloat,
    | 	           ^^^^^^^^^^ Prefer \`Number.parseFloat\` over \`parseFloat\`.
  3 | 	parseInt,
  4 | };
  5 |
  6 | run(foo, options);
"
`;

exports[`invalid(44): 'const options = {\\n\\tnormalize: parse…' > Error 2/2 1`] = `
"
  1 | const options = {
  2 | 	normalize: parseFloat,
> 3 | 	parseInt,
    | 	^^^^^^^^ Prefer \`Number.parseInt\` over \`parseInt\`.
  4 | };
  5 |
  6 | run(foo, options);
"
`;

exports[`invalid(44): 'const options = {\\n\\tnormalize: parse…' > Output 1`] = `
"
  1 | const options = {
  2 | 	normalize: Number.parseFloat,
  3 | 	parseInt: Number.parseInt,
  4 | };
  5 |
  6 | run(foo, options);
"
`;
