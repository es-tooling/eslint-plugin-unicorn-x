// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.replace(/a/g, bar)' > Code 1`] = `
"
  1 | foo.replace(/a/g, bar)
"
`;

exports[`invalid(0): 'foo.replace(/a/g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a/g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(0): 'foo.replace(/a/g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll('a', bar)
"
`;

exports[`invalid(1): 'foo/* comment 1 */\\n\\t.replace/* comm…' > Code 1`] = `
"
  1 | foo/* comment 1 */
  2 | 	.replace/* comment 2 */(
  3 | 		/* comment 3 */
  4 | 		/a/g // comment 4
  5 | 		,
  6 | 		bar
  7 | 	)
"
`;

exports[`invalid(1): 'foo/* comment 1 */\\n\\t.replace/* comm…' > Error 1/1 1`] = `
"
  1 | foo/* comment 1 */
> 2 | 	.replace/* comment 2 */(
    | 	 ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
  3 | 		/* comment 3 */
  4 | 		/a/g // comment 4
  5 | 		,
  6 | 		bar
  7 | 	)
"
`;

exports[`invalid(1): 'foo/* comment 1 */\\n\\t.replace/* comm…' > Output 1`] = `
"
  1 | foo/* comment 1 */
  2 | 	.replaceAll/* comment 2 */(
  3 | 		/* comment 3 */
  4 | 		'a' // comment 4
  5 | 		,
  6 | 		bar
  7 | 	)
"
`;

exports[`invalid(2): 'foo.replace(/"\\'/g, \\'\\\\'\\')' > Code 1`] = `
"
  1 | foo.replace(/"'/g, '\\'')
"
`;

exports[`invalid(2): 'foo.replace(/"\\'/g, \\'\\\\'\\')' > Error 1/1 1`] = `
"
> 1 | foo.replace(/"'/g, '\\'')
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(2): 'foo.replace(/"\\'/g, \\'\\\\'\\')' > Output 1`] = `
"
  1 | foo.replaceAll('"\\'', '\\'')
"
`;

exports[`invalid(3): 'foo.replace(/\\./g, bar)' > Code 1`] = `
"
  1 | foo.replace(/\\./g, bar)
"
`;

exports[`invalid(3): 'foo.replace(/\\./g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\./g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(3): 'foo.replace(/\\./g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll('.', bar)
"
`;

exports[`invalid(4): 'foo.replace(/\\\\\\./g, bar)' > Code 1`] = `
"
  1 | foo.replace(/\\\\\\./g, bar)
"
`;

exports[`invalid(4): 'foo.replace(/\\\\\\./g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\\\\\./g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(4): 'foo.replace(/\\\\\\./g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll('\\\\.', bar)
"
`;

exports[`invalid(5): 'foo.replace(/\\|/g, bar)' > Code 1`] = `
"
  1 | foo.replace(/\\|/g, bar)
"
`;

exports[`invalid(5): 'foo.replace(/\\|/g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\|/g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(5): 'foo.replace(/\\|/g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll('|', bar)
"
`;

exports[`invalid(6): 'foo.replace(/a/gu, bar)' > Code 1`] = `
"
  1 | foo.replace(/a/gu, bar)
"
`;

exports[`invalid(6): 'foo.replace(/a/gu, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a/gu, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(6): 'foo.replace(/a/gu, bar)' > Output 1`] = `
"
  1 | foo.replaceAll('a', bar)
"
`;

exports[`invalid(7): 'foo.replace(/a/ug, bar)' > Code 1`] = `
"
  1 | foo.replace(/a/ug, bar)
"
`;

exports[`invalid(7): 'foo.replace(/a/ug, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a/ug, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(7): 'foo.replace(/a/ug, bar)' > Output 1`] = `
"
  1 | foo.replaceAll('a', bar)
"
`;

exports[`invalid(8): 'foo.replace(/[a]/g, bar)' > Code 1`] = `
"
  1 | foo.replace(/[a]/g, bar)
"
`;

exports[`invalid(8): 'foo.replace(/[a]/g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/[a]/g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(8): 'foo.replace(/[a]/g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/[a]/g, bar)
"
`;

exports[`invalid(9): 'foo.replace(/a?/g, bar)' > Code 1`] = `
"
  1 | foo.replace(/a?/g, bar)
"
`;

exports[`invalid(9): 'foo.replace(/a?/g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a?/g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(9): 'foo.replace(/a?/g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/a?/g, bar)
"
`;

exports[`invalid(10): 'foo.replace(/.*/g, bar)' > Code 1`] = `
"
  1 | foo.replace(/.*/g, bar)
"
`;

exports[`invalid(10): 'foo.replace(/.*/g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/.*/g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(10): 'foo.replace(/.*/g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/.*/g, bar)
"
`;

exports[`invalid(11): 'foo.replace(/a|b/g, bar)' > Code 1`] = `
"
  1 | foo.replace(/a|b/g, bar)
"
`;

exports[`invalid(11): 'foo.replace(/a|b/g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a|b/g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(11): 'foo.replace(/a|b/g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/a|b/g, bar)
"
`;

exports[`invalid(12): 'foo.replace(/\\W/g, bar)' > Code 1`] = `
"
  1 | foo.replace(/\\W/g, bar)
"
`;

exports[`invalid(12): 'foo.replace(/\\W/g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\W/g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(12): 'foo.replace(/\\W/g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/\\W/g, bar)
"
`;

exports[`invalid(13): 'foo.replace(/\\u{61}/g, bar)' > Code 1`] = `
"
  1 | foo.replace(/\\u{61}/g, bar)
"
`;

exports[`invalid(13): 'foo.replace(/\\u{61}/g, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u{61}/g, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(13): 'foo.replace(/\\u{61}/g, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/\\u{61}/g, bar)
"
`;

exports[`invalid(14): 'foo.replace(/\\u{61}/gu, bar)' > Code 1`] = `
"
  1 | foo.replace(/\\u{61}/gu, bar)
"
`;

exports[`invalid(14): 'foo.replace(/\\u{61}/gu, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u{61}/gu, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(14): 'foo.replace(/\\u{61}/gu, bar)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u{61}', bar)
"
`;

exports[`invalid(15): 'foo.replace(/\\u{61}/gv, bar)' > Code 1`] = `
"
  1 | foo.replace(/\\u{61}/gv, bar)
"
`;

exports[`invalid(15): 'foo.replace(/\\u{61}/gv, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u{61}/gv, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(15): 'foo.replace(/\\u{61}/gv, bar)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u{61}', bar)
"
`;

exports[`invalid(16): 'str.replace(/\\u200B/g, \\'\\')' > Code 1`] = `
"
  1 | str.replace(/\\u200B/g, '')
"
`;

exports[`invalid(16): 'str.replace(/\\u200B/g, \\'\\')' > Error 1/1 1`] = `
"
> 1 | str.replace(/\\u200B/g, '')
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(16): 'str.replace(/\\u200B/g, \\'\\')' > Output 1`] = `
"
  1 | str.replaceAll('\\u200B', '')
"
`;

exports[`invalid(17): 'str.replace(/\\x20/g, \\'\\')' > Code 1`] = `
"
  1 | str.replace(/\\x20/g, '')
"
`;

exports[`invalid(17): 'str.replace(/\\x20/g, \\'\\')' > Error 1/1 1`] = `
"
> 1 | str.replace(/\\x20/g, '')
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(17): 'str.replace(/\\x20/g, \\'\\')' > Output 1`] = `
"
  1 | str.replaceAll('\\x20', '')
"
`;

exports[`invalid(18): 'foo.replace(/]/g, "bar")' > Code 1`] = `
"
  1 | foo.replace(/]/g, "bar")
"
`;

exports[`invalid(18): 'foo.replace(/]/g, "bar")' > Error 1/1 1`] = `
"
> 1 | foo.replace(/]/g, "bar")
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(18): 'foo.replace(/]/g, "bar")' > Output 1`] = `
"
  1 | foo.replaceAll(']', "bar")
"
`;

exports[`invalid(19): 'foo.replace(/a/gi, bar)' > Code 1`] = `
"
  1 | foo.replace(/a/gi, bar)
"
`;

exports[`invalid(19): 'foo.replace(/a/gi, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a/gi, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(19): 'foo.replace(/a/gi, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/a/gi, bar)
"
`;

exports[`invalid(20): 'foo.replace(/a/gui, bar)' > Code 1`] = `
"
  1 | foo.replace(/a/gui, bar)
"
`;

exports[`invalid(20): 'foo.replace(/a/gui, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a/gui, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(20): 'foo.replace(/a/gui, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/a/gui, bar)
"
`;

exports[`invalid(21): 'foo.replace(/a/uig, bar)' > Code 1`] = `
"
  1 | foo.replace(/a/uig, bar)
"
`;

exports[`invalid(21): 'foo.replace(/a/uig, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a/uig, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(21): 'foo.replace(/a/uig, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/a/uig, bar)
"
`;

exports[`invalid(22): 'foo.replace(/a/vig, bar)' > Code 1`] = `
"
  1 | foo.replace(/a/vig, bar)
"
`;

exports[`invalid(22): 'foo.replace(/a/vig, bar)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a/vig, bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(22): 'foo.replace(/a/vig, bar)' > Output 1`] = `
"
  1 | foo.replaceAll(/a/vig, bar)
"
`;

exports[`invalid(23): 'const pattern = new RegExp("foo", "g"…' > Code 1`] = `
"
  1 | const pattern = new RegExp("foo", "g"); foo.replace(pattern, bar)
"
`;

exports[`invalid(23): 'const pattern = new RegExp("foo", "g"…' > Error 1/1 1`] = `
"
> 1 | const pattern = new RegExp("foo", "g"); foo.replace(pattern, bar)
    |                                             ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(23): 'const pattern = new RegExp("foo", "g"…' > Output 1`] = `
"
  1 | const pattern = new RegExp("foo", "g"); foo.replaceAll(pattern, bar)
"
`;

exports[`invalid(24): 'foo.replace(new RegExp("foo", "g"), b…' > Code 1`] = `
"
  1 | foo.replace(new RegExp("foo", "g"), bar)
"
`;

exports[`invalid(24): 'foo.replace(new RegExp("foo", "g"), b…' > Error 1/1 1`] = `
"
> 1 | foo.replace(new RegExp("foo", "g"), bar)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(24): 'foo.replace(new RegExp("foo", "g"), b…' > Output 1`] = `
"
  1 | foo.replaceAll(new RegExp("foo", "g"), bar)
"
`;

exports[`invalid(25): 'foo.replace(/a]/g, _)' > Code 1`] = `
"
  1 | foo.replace(/a]/g, _)
"
`;

exports[`invalid(25): 'foo.replace(/a]/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a]/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(25): 'foo.replace(/a]/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('a]', _)
"
`;

exports[`invalid(26): 'foo.replace(/[a]/g, _)' > Code 1`] = `
"
  1 | foo.replace(/[a]/g, _)
"
`;

exports[`invalid(26): 'foo.replace(/[a]/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/[a]/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(26): 'foo.replace(/[a]/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll(/[a]/g, _)
"
`;

exports[`invalid(27): 'foo.replace(/a{1/g, _)' > Code 1`] = `
"
  1 | foo.replace(/a{1/g, _)
"
`;

exports[`invalid(27): 'foo.replace(/a{1/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a{1/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(27): 'foo.replace(/a{1/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('a{1', _)
"
`;

exports[`invalid(28): 'foo.replace(/a{1}/g, _)' > Code 1`] = `
"
  1 | foo.replace(/a{1}/g, _)
"
`;

exports[`invalid(28): 'foo.replace(/a{1}/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/a{1}/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(28): 'foo.replace(/a{1}/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll(/a{1}/g, _)
"
`;

exports[`invalid(29): 'foo.replace(/\\u0022/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\u0022/g, _)
"
`;

exports[`invalid(29): 'foo.replace(/\\u0022/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u0022/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(29): 'foo.replace(/\\u0022/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u0022', _)
"
`;

exports[`invalid(30): 'foo.replace(/\\u0027/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\u0027/g, _)
"
`;

exports[`invalid(30): 'foo.replace(/\\u0027/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u0027/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(30): 'foo.replace(/\\u0027/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u0027', _)
"
`;

exports[`invalid(31): 'foo.replace(/\\cM\\cj\\cI/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\cM\\cj\\cI/g, _)
"
`;

exports[`invalid(31): 'foo.replace(/\\cM\\cj\\cI/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\cM\\cj\\cI/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(31): 'foo.replace(/\\cM\\cj\\cI/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\r\\n\\t', _)
"
`;

exports[`invalid(32): 'foo.replace(/\\x0d\\x0a\\x09/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\x0d\\x0a\\x09/g, _)
"
`;

exports[`invalid(32): 'foo.replace(/\\x0d\\x0a\\x09/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\x0d\\x0a\\x09/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(32): 'foo.replace(/\\x0d\\x0a\\x09/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\x0d\\x0a\\x09', _)
"
`;

exports[`invalid(33): 'foo.replace(/\\u000d\\u000a\\u0009/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\u000d\\u000a\\u0009/g, _)
"
`;

exports[`invalid(33): 'foo.replace(/\\u000d\\u000a\\u0009/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u000d\\u000a\\u0009/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(33): 'foo.replace(/\\u000d\\u000a\\u0009/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u000d\\u000a\\u0009', _)
"
`;

exports[`invalid(34): 'foo.replace(/\\x22/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\x22/g, _)
"
`;

exports[`invalid(34): 'foo.replace(/\\x22/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\x22/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(34): 'foo.replace(/\\x22/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\x22', _)
"
`;

exports[`invalid(35): 'foo.replace(/\\x27/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\x27/g, _)
"
`;

exports[`invalid(35): 'foo.replace(/\\x27/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\x27/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(35): 'foo.replace(/\\x27/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\x27', _)
"
`;

exports[`invalid(36): 'foo.replace(/\\uD83D\\ude00/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\uD83D\\ude00/g, _)
"
`;

exports[`invalid(36): 'foo.replace(/\\uD83D\\ude00/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\uD83D\\ude00/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(36): 'foo.replace(/\\uD83D\\ude00/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\uD83D\\ude00', _)
"
`;

exports[`invalid(37): 'foo.replace(/\\u{1f600}/gu, _)' > Code 1`] = `
"
  1 | foo.replace(/\\u{1f600}/gu, _)
"
`;

exports[`invalid(37): 'foo.replace(/\\u{1f600}/gu, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u{1f600}/gu, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(37): 'foo.replace(/\\u{1f600}/gu, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u{1f600}', _)
"
`;

exports[`invalid(38): 'foo.replace(/\\n/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\n/g, _)
"
`;

exports[`invalid(38): 'foo.replace(/\\n/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\n/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(38): 'foo.replace(/\\n/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\n', _)
"
`;

exports[`invalid(39): 'foo.replace(/\\u{20}/gu, _)' > Code 1`] = `
"
  1 | foo.replace(/\\u{20}/gu, _)
"
`;

exports[`invalid(39): 'foo.replace(/\\u{20}/gu, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u{20}/gu, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(39): 'foo.replace(/\\u{20}/gu, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u{20}', _)
"
`;

exports[`invalid(40): 'foo.replace(/\\u{20}/gv, _)' > Code 1`] = `
"
  1 | foo.replace(/\\u{20}/gv, _)
"
`;

exports[`invalid(40): 'foo.replace(/\\u{20}/gv, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\u{20}/gv, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(40): 'foo.replace(/\\u{20}/gv, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u{20}', _)
"
`;

exports[`invalid(41): 'foo.replace(/\\1/g, _)' > Code 1`] = `
"
  1 | foo.replace(/\\1/g, _)
"
`;

exports[`invalid(41): 'foo.replace(/\\1/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replace(/\\1/g, _)
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(41): 'foo.replace(/\\1/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\u{1}', _)
"
`;

exports[`invalid(42): 'foo.replaceAll(/a]/g, _)' > Code 1`] = `
"
  1 | foo.replaceAll(/a]/g, _)
"
`;

exports[`invalid(42): 'foo.replaceAll(/a]/g, _)' > Error 1/1 1`] = `
"
> 1 | foo.replaceAll(/a]/g, _)
    |                ^^^^^ This pattern can be replaced with 'a]'.
"
`;

exports[`invalid(42): 'foo.replaceAll(/a]/g, _)' > Output 1`] = `
"
  1 | foo.replaceAll('a]', _)
"
`;

exports[`invalid(43): 'foo.replaceAll(/\\r\\n\\u{1f600}/gu, _)' > Code 1`] = `
"
  1 | foo.replaceAll(/\\r\\n\\u{1f600}/gu, _)
"
`;

exports[`invalid(43): 'foo.replaceAll(/\\r\\n\\u{1f600}/gu, _)' > Error 1/1 1`] = `
"
> 1 | foo.replaceAll(/\\r\\n\\u{1f600}/gu, _)
    |                ^^^^^^^^^^^^^^^^^ This pattern can be replaced with '\\r\\n\\u{1f600}'.
"
`;

exports[`invalid(43): 'foo.replaceAll(/\\r\\n\\u{1f600}/gu, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\r\\n\\u{1f600}', _)
"
`;

exports[`invalid(44): 'foo.replaceAll(/\\r\\n\\u{1f600}/gv, _)' > Code 1`] = `
"
  1 | foo.replaceAll(/\\r\\n\\u{1f600}/gv, _)
"
`;

exports[`invalid(44): 'foo.replaceAll(/\\r\\n\\u{1f600}/gv, _)' > Error 1/1 1`] = `
"
> 1 | foo.replaceAll(/\\r\\n\\u{1f600}/gv, _)
    |                ^^^^^^^^^^^^^^^^^ This pattern can be replaced with '\\r\\n\\u{1f600}'.
"
`;

exports[`invalid(44): 'foo.replaceAll(/\\r\\n\\u{1f600}/gv, _)' > Output 1`] = `
"
  1 | foo.replaceAll('\\r\\n\\u{1f600}', _)
"
`;

exports[`invalid(45): 'foo.replaceAll(/a very very very very…' > Code 1`] = `
"
  1 | foo.replaceAll(/a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long string/g, _)
"
`;

exports[`invalid(45): 'foo.replaceAll(/a very very very very…' > Error 1/1 1`] = `
"
> 1 | foo.replaceAll(/a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long string/g, _)
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This pattern can be replaced with a string literal.
"
`;

exports[`invalid(45): 'foo.replaceAll(/a very very very very…' > Output 1`] = `
"
  1 | foo.replaceAll('a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long string', _)
"
`;

exports[`invalid(46): 'foo.replace(/(?!a)+/g, "")' > Code 1`] = `
"
  1 | foo.replace(/(?!a)+/g, "")
"
`;

exports[`invalid(46): 'foo.replace(/(?!a)+/g, "")' > Error 1/1 1`] = `
"
> 1 | foo.replace(/(?!a)+/g, "")
    |     ^^^^^^^ Prefer \`String#replaceAll()\` over \`String#replace()\`.
"
`;

exports[`invalid(46): 'foo.replace(/(?!a)+/g, "")' > Output 1`] = `
"
  1 | foo.replaceAll(/(?!a)+/g, "")
"
`;
