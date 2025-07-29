// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '<template><div v-if="0XdeEd_Beef > 0"…' > Code 1`] = `
"
  1 | <template><div v-if="0XdeEd_Beef > 0"></div></template>
"
`;

exports[`invalid(0): '<template><div v-if="0XdeEd_Beef > 0"…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="0XdeEd_Beef > 0"></div></template>
    |                      ^^^^^^^^^^^ Invalid number literal casing.
"
`;

exports[`invalid(0): '<template><div v-if="0XdeEd_Beef > 0"…' > Output 1`] = `
"
  1 | <template><div v-if="0xDEED_BEEF > 0"></div></template>
"
`;

exports[`invalid(0): 'console.log(BigInt(0B10 + 1.2E+3) + 0…' > Code 1`] = `
"
  1 | console.log(BigInt(0B10 + 1.2E+3) + 0XdeEd_Beefn)
"
`;

exports[`invalid(0): 'console.log(BigInt(0B10 + 1.2E+3) + 0…' > Error 1/3 1`] = `
"
> 1 | console.log(BigInt(0B10 + 1.2E+3) + 0XdeEd_Beefn)
    |                    ^^^^ Invalid number literal casing.
"
`;

exports[`invalid(0): 'console.log(BigInt(0B10 + 1.2E+3) + 0…' > Error 2/3 1`] = `
"
> 1 | console.log(BigInt(0B10 + 1.2E+3) + 0XdeEd_Beefn)
    |                           ^^^^^^ Invalid number literal casing.
"
`;

exports[`invalid(0): 'console.log(BigInt(0B10 + 1.2E+3) + 0…' > Error 3/3 1`] = `
"
> 1 | console.log(BigInt(0B10 + 1.2E+3) + 0XdeEd_Beefn)
    |                                     ^^^^^^^^^^^^ Invalid number literal casing.
"
`;

exports[`invalid(0): 'console.log(BigInt(0B10 + 1.2E+3) + 0…' > Output 1`] = `
"
  1 | console.log(BigInt(0b10 + 1.2e+3) + 0xDEED_BEEFn)
"
`;

exports[`invalid(1): '<template><div v-if="0XdeEd_Beefn > 0…' > Code 1`] = `
"
  1 | <template><div v-if="0XdeEd_Beefn > 0n"></div></template>
"
`;

exports[`invalid(1): '<template><div v-if="0XdeEd_Beefn > 0…' > Error 1/1 1`] = `
"
> 1 | <template><div v-if="0XdeEd_Beefn > 0n"></div></template>
    |                      ^^^^^^^^^^^^ Invalid number literal casing.
"
`;

exports[`invalid(1): '<template><div v-if="0XdeEd_Beefn > 0…' > Output 1`] = `
"
  1 | <template><div v-if="0xDEED_BEEFn > 0n"></div></template>
"
`;

exports[`invalid(2): '<template><div>{{1.2E3}}</div></templ…' > Code 1`] = `
"
  1 | <template><div>{{1.2E3}}</div></template>
"
`;

exports[`invalid(2): '<template><div>{{1.2E3}}</div></templ…' > Error 1/1 1`] = `
"
> 1 | <template><div>{{1.2E3}}</div></template>
    |                  ^^^^^ Invalid number literal casing.
"
`;

exports[`invalid(2): '<template><div>{{1.2E3}}</div></templ…' > Output 1`] = `
"
  1 | <template><div>{{1.2e3}}</div></template>
"
`;

exports[`invalid(3): '<template><div>{{0B1n}}</div></templa…' > Code 1`] = `
"
  1 | <template><div>{{0B1n}}</div></template>
"
`;

exports[`invalid(3): '<template><div>{{0B1n}}</div></templa…' > Error 1/1 1`] = `
"
> 1 | <template><div>{{0B1n}}</div></template>
    |                  ^^^^ Invalid number literal casing.
"
`;

exports[`invalid(3): '<template><div>{{0B1n}}</div></templa…' > Output 1`] = `
"
  1 | <template><div>{{0b1n}}</div></template>
"
`;

exports[`invalid(4): '<script>export default {data() {retur…' > Code 1`] = `
"
  1 | <script>export default {data() {return {n: 0XdeEd_Beefn}}}</script>
"
`;

exports[`invalid(4): '<script>export default {data() {retur…' > Error 1/1 1`] = `
"
> 1 | <script>export default {data() {return {n: 0XdeEd_Beefn}}}</script>
    |                                            ^^^^^^^^^^^^ Invalid number literal casing.
"
`;

exports[`invalid(4): '<script>export default {data() {retur…' > Output 1`] = `
"
  1 | <script>export default {data() {return {n: 0xDEED_BEEFn}}}</script>
"
`;
