// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = 1.0' > Code 1`] = `
"
  1 | const foo = 1.0
"
`;

exports[`invalid(0): 'const foo = 1.0' > Error 1/1 1`] = `
"
> 1 | const foo = 1.0
    |              ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(0): 'const foo = 1.0' > Output 1`] = `
"
  1 | const foo = 1
"
`;

exports[`invalid(1): 'const foo = 1.0 + 1' > Code 1`] = `
"
  1 | const foo = 1.0 + 1
"
`;

exports[`invalid(1): 'const foo = 1.0 + 1' > Error 1/1 1`] = `
"
> 1 | const foo = 1.0 + 1
    |              ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(1): 'const foo = 1.0 + 1' > Output 1`] = `
"
  1 | const foo = 1 + 1
"
`;

exports[`invalid(2): 'foo(1.0 + 1)' > Code 1`] = `
"
  1 | foo(1.0 + 1)
"
`;

exports[`invalid(2): 'foo(1.0 + 1)' > Error 1/1 1`] = `
"
> 1 | foo(1.0 + 1)
    |      ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(2): 'foo(1.0 + 1)' > Output 1`] = `
"
  1 | foo(1 + 1)
"
`;

exports[`invalid(3): 'const foo = 1.00' > Code 1`] = `
"
  1 | const foo = 1.00
"
`;

exports[`invalid(3): 'const foo = 1.00' > Error 1/1 1`] = `
"
> 1 | const foo = 1.00
    |              ^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(3): 'const foo = 1.00' > Output 1`] = `
"
  1 | const foo = 1
"
`;

exports[`invalid(4): 'const foo = 1.00000' > Code 1`] = `
"
  1 | const foo = 1.00000
"
`;

exports[`invalid(4): 'const foo = 1.00000' > Error 1/1 1`] = `
"
> 1 | const foo = 1.00000
    |              ^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(4): 'const foo = 1.00000' > Output 1`] = `
"
  1 | const foo = 1
"
`;

exports[`invalid(5): 'const foo = -1.0' > Code 1`] = `
"
  1 | const foo = -1.0
"
`;

exports[`invalid(5): 'const foo = -1.0' > Error 1/1 1`] = `
"
> 1 | const foo = -1.0
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(5): 'const foo = -1.0' > Output 1`] = `
"
  1 | const foo = -1
"
`;

exports[`invalid(6): 'const foo = 123123123.0' > Code 1`] = `
"
  1 | const foo = 123123123.0
"
`;

exports[`invalid(6): 'const foo = 123123123.0' > Error 1/1 1`] = `
"
> 1 | const foo = 123123123.0
    |                      ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(6): 'const foo = 123123123.0' > Output 1`] = `
"
  1 | const foo = 123123123
"
`;

exports[`invalid(7): 'const foo = 123.11100000000' > Code 1`] = `
"
  1 | const foo = 123.11100000000
"
`;

exports[`invalid(7): 'const foo = 123.11100000000' > Error 1/1 1`] = `
"
> 1 | const foo = 123.11100000000
    |                    ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(7): 'const foo = 123.11100000000' > Output 1`] = `
"
  1 | const foo = 123.111
"
`;

exports[`invalid(8): 'const foo = 1.' > Code 1`] = `
"
  1 | const foo = 1.
"
`;

exports[`invalid(8): 'const foo = 1.' > Error 1/1 1`] = `
"
> 1 | const foo = 1.
    |              ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(8): 'const foo = 1.' > Output 1`] = `
"
  1 | const foo = 1
"
`;

exports[`invalid(9): 'const foo = +1.' > Code 1`] = `
"
  1 | const foo = +1.
"
`;

exports[`invalid(9): 'const foo = +1.' > Error 1/1 1`] = `
"
> 1 | const foo = +1.
    |               ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(9): 'const foo = +1.' > Output 1`] = `
"
  1 | const foo = +1
"
`;

exports[`invalid(10): 'const foo = -1.' > Code 1`] = `
"
  1 | const foo = -1.
"
`;

exports[`invalid(10): 'const foo = -1.' > Error 1/1 1`] = `
"
> 1 | const foo = -1.
    |               ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(10): 'const foo = -1.' > Output 1`] = `
"
  1 | const foo = -1
"
`;

exports[`invalid(11): 'const foo = 1.e10' > Code 1`] = `
"
  1 | const foo = 1.e10
"
`;

exports[`invalid(11): 'const foo = 1.e10' > Error 1/1 1`] = `
"
> 1 | const foo = 1.e10
    |              ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(11): 'const foo = 1.e10' > Output 1`] = `
"
  1 | const foo = 1e10
"
`;

exports[`invalid(12): 'const foo = +1.e-10' > Code 1`] = `
"
  1 | const foo = +1.e-10
"
`;

exports[`invalid(12): 'const foo = +1.e-10' > Error 1/1 1`] = `
"
> 1 | const foo = +1.e-10
    |               ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(12): 'const foo = +1.e-10' > Output 1`] = `
"
  1 | const foo = +1e-10
"
`;

exports[`invalid(13): 'const foo = -1.e+10' > Code 1`] = `
"
  1 | const foo = -1.e+10
"
`;

exports[`invalid(13): 'const foo = -1.e+10' > Error 1/1 1`] = `
"
> 1 | const foo = -1.e+10
    |               ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(13): 'const foo = -1.e+10' > Output 1`] = `
"
  1 | const foo = -1e+10
"
`;

exports[`invalid(14): 'const foo = (1.).toString()' > Code 1`] = `
"
  1 | const foo = (1.).toString()
"
`;

exports[`invalid(14): 'const foo = (1.).toString()' > Error 1/1 1`] = `
"
> 1 | const foo = (1.).toString()
    |               ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(14): 'const foo = (1.).toString()' > Output 1`] = `
"
  1 | const foo = (1).toString()
"
`;

exports[`invalid(15): '+123_000.;' > Code 1`] = `
"
  1 | +123_000.;
"
`;

exports[`invalid(15): '+123_000.;' > Error 1/1 1`] = `
"
> 1 | +123_000.;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(15): '+123_000.;' > Output 1`] = `
"
  1 | +123_000;
"
`;

exports[`invalid(16): '-123_000.;' > Code 1`] = `
"
  1 | -123_000.;
"
`;

exports[`invalid(16): '-123_000.;' > Error 1/1 1`] = `
"
> 1 | -123_000.;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(16): '-123_000.;' > Output 1`] = `
"
  1 | -123_000;
"
`;

exports[`invalid(17): '+123_000.e1;' > Code 1`] = `
"
  1 | +123_000.e1;
"
`;

exports[`invalid(17): '+123_000.e1;' > Error 1/1 1`] = `
"
> 1 | +123_000.e1;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(17): '+123_000.e1;' > Output 1`] = `
"
  1 | +123_000e1;
"
`;

exports[`invalid(18): '-123_000.e1;' > Code 1`] = `
"
  1 | -123_000.e1;
"
`;

exports[`invalid(18): '-123_000.e1;' > Error 1/1 1`] = `
"
> 1 | -123_000.e1;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(18): '-123_000.e1;' > Output 1`] = `
"
  1 | -123_000e1;
"
`;

exports[`invalid(19): '+123_000.e+1;' > Code 1`] = `
"
  1 | +123_000.e+1;
"
`;

exports[`invalid(19): '+123_000.e+1;' > Error 1/1 1`] = `
"
> 1 | +123_000.e+1;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(19): '+123_000.e+1;' > Output 1`] = `
"
  1 | +123_000e+1;
"
`;

exports[`invalid(20): '-123_000.e+1;' > Code 1`] = `
"
  1 | -123_000.e+1;
"
`;

exports[`invalid(20): '-123_000.e+1;' > Error 1/1 1`] = `
"
> 1 | -123_000.e+1;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(20): '-123_000.e+1;' > Output 1`] = `
"
  1 | -123_000e+1;
"
`;

exports[`invalid(21): '+123_000.e-1;' > Code 1`] = `
"
  1 | +123_000.e-1;
"
`;

exports[`invalid(21): '+123_000.e-1;' > Error 1/1 1`] = `
"
> 1 | +123_000.e-1;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(21): '+123_000.e-1;' > Output 1`] = `
"
  1 | +123_000e-1;
"
`;

exports[`invalid(22): '-123_000.e-1;' > Code 1`] = `
"
  1 | -123_000.e-1;
"
`;

exports[`invalid(22): '-123_000.e-1;' > Error 1/1 1`] = `
"
> 1 | -123_000.e-1;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(22): '-123_000.e-1;' > Output 1`] = `
"
  1 | -123_000e-1;
"
`;

exports[`invalid(23): '+123_000.e0;' > Code 1`] = `
"
  1 | +123_000.e0;
"
`;

exports[`invalid(23): '+123_000.e0;' > Error 1/1 1`] = `
"
> 1 | +123_000.e0;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(23): '+123_000.e0;' > Output 1`] = `
"
  1 | +123_000e0;
"
`;

exports[`invalid(24): '-123_000.e0;' > Code 1`] = `
"
  1 | -123_000.e0;
"
`;

exports[`invalid(24): '-123_000.e0;' > Error 1/1 1`] = `
"
> 1 | -123_000.e0;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(24): '-123_000.e0;' > Output 1`] = `
"
  1 | -123_000e0;
"
`;

exports[`invalid(25): '+123_000.e+0;' > Code 1`] = `
"
  1 | +123_000.e+0;
"
`;

exports[`invalid(25): '+123_000.e+0;' > Error 1/1 1`] = `
"
> 1 | +123_000.e+0;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(25): '+123_000.e+0;' > Output 1`] = `
"
  1 | +123_000e+0;
"
`;

exports[`invalid(26): '-123_000.e+0;' > Code 1`] = `
"
  1 | -123_000.e+0;
"
`;

exports[`invalid(26): '-123_000.e+0;' > Error 1/1 1`] = `
"
> 1 | -123_000.e+0;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(26): '-123_000.e+0;' > Output 1`] = `
"
  1 | -123_000e+0;
"
`;

exports[`invalid(27): '+123_000.e-0;' > Code 1`] = `
"
  1 | +123_000.e-0;
"
`;

exports[`invalid(27): '+123_000.e-0;' > Error 1/1 1`] = `
"
> 1 | +123_000.e-0;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(27): '+123_000.e-0;' > Output 1`] = `
"
  1 | +123_000e-0;
"
`;

exports[`invalid(28): '-123_000.e-0;' > Code 1`] = `
"
  1 | -123_000.e-0;
"
`;

exports[`invalid(28): '-123_000.e-0;' > Error 1/1 1`] = `
"
> 1 | -123_000.e-0;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(28): '-123_000.e-0;' > Output 1`] = `
"
  1 | -123_000e-0;
"
`;

exports[`invalid(29): '+123_000.e10;' > Code 1`] = `
"
  1 | +123_000.e10;
"
`;

exports[`invalid(29): '+123_000.e10;' > Error 1/1 1`] = `
"
> 1 | +123_000.e10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(29): '+123_000.e10;' > Output 1`] = `
"
  1 | +123_000e10;
"
`;

exports[`invalid(30): '-123_000.e10;' > Code 1`] = `
"
  1 | -123_000.e10;
"
`;

exports[`invalid(30): '-123_000.e10;' > Error 1/1 1`] = `
"
> 1 | -123_000.e10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(30): '-123_000.e10;' > Output 1`] = `
"
  1 | -123_000e10;
"
`;

exports[`invalid(31): '+123_000.e+10;' > Code 1`] = `
"
  1 | +123_000.e+10;
"
`;

exports[`invalid(31): '+123_000.e+10;' > Error 1/1 1`] = `
"
> 1 | +123_000.e+10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(31): '+123_000.e+10;' > Output 1`] = `
"
  1 | +123_000e+10;
"
`;

exports[`invalid(32): '-123_000.e+10;' > Code 1`] = `
"
  1 | -123_000.e+10;
"
`;

exports[`invalid(32): '-123_000.e+10;' > Error 1/1 1`] = `
"
> 1 | -123_000.e+10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(32): '-123_000.e+10;' > Output 1`] = `
"
  1 | -123_000e+10;
"
`;

exports[`invalid(33): '+123_000.e-10;' > Code 1`] = `
"
  1 | +123_000.e-10;
"
`;

exports[`invalid(33): '+123_000.e-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.e-10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(33): '+123_000.e-10;' > Output 1`] = `
"
  1 | +123_000e-10;
"
`;

exports[`invalid(34): '-123_000.e-10;' > Code 1`] = `
"
  1 | -123_000.e-10;
"
`;

exports[`invalid(34): '-123_000.e-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.e-10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(34): '-123_000.e-10;' > Output 1`] = `
"
  1 | -123_000e-10;
"
`;

exports[`invalid(35): '+123_000.E-10;' > Code 1`] = `
"
  1 | +123_000.E-10;
"
`;

exports[`invalid(35): '+123_000.E-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.E-10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(35): '+123_000.E-10;' > Output 1`] = `
"
  1 | +123_000E-10;
"
`;

exports[`invalid(36): '-123_000.E-10;' > Code 1`] = `
"
  1 | -123_000.E-10;
"
`;

exports[`invalid(36): '-123_000.E-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.E-10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(36): '-123_000.E-10;' > Output 1`] = `
"
  1 | -123_000E-10;
"
`;

exports[`invalid(37): '+123_000.E-10_10;' > Code 1`] = `
"
  1 | +123_000.E-10_10;
"
`;

exports[`invalid(37): '+123_000.E-10_10;' > Error 1/1 1`] = `
"
> 1 | +123_000.E-10_10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(37): '+123_000.E-10_10;' > Output 1`] = `
"
  1 | +123_000E-10_10;
"
`;

exports[`invalid(38): '-123_000.E-10_10;' > Code 1`] = `
"
  1 | -123_000.E-10_10;
"
`;

exports[`invalid(38): '-123_000.E-10_10;' > Error 1/1 1`] = `
"
> 1 | -123_000.E-10_10;
    |         ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(38): '-123_000.E-10_10;' > Output 1`] = `
"
  1 | -123_000E-10_10;
"
`;

exports[`invalid(39): '+123_000.0;' > Code 1`] = `
"
  1 | +123_000.0;
"
`;

exports[`invalid(39): '+123_000.0;' > Error 1/1 1`] = `
"
> 1 | +123_000.0;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(39): '+123_000.0;' > Output 1`] = `
"
  1 | +123_000;
"
`;

exports[`invalid(40): '-123_000.0;' > Code 1`] = `
"
  1 | -123_000.0;
"
`;

exports[`invalid(40): '-123_000.0;' > Error 1/1 1`] = `
"
> 1 | -123_000.0;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(40): '-123_000.0;' > Output 1`] = `
"
  1 | -123_000;
"
`;

exports[`invalid(41): '+123_000.0e1;' > Code 1`] = `
"
  1 | +123_000.0e1;
"
`;

exports[`invalid(41): '+123_000.0e1;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e1;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(41): '+123_000.0e1;' > Output 1`] = `
"
  1 | +123_000e1;
"
`;

exports[`invalid(42): '-123_000.0e1;' > Code 1`] = `
"
  1 | -123_000.0e1;
"
`;

exports[`invalid(42): '-123_000.0e1;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e1;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(42): '-123_000.0e1;' > Output 1`] = `
"
  1 | -123_000e1;
"
`;

exports[`invalid(43): '+123_000.0e+1;' > Code 1`] = `
"
  1 | +123_000.0e+1;
"
`;

exports[`invalid(43): '+123_000.0e+1;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e+1;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(43): '+123_000.0e+1;' > Output 1`] = `
"
  1 | +123_000e+1;
"
`;

exports[`invalid(44): '-123_000.0e+1;' > Code 1`] = `
"
  1 | -123_000.0e+1;
"
`;

exports[`invalid(44): '-123_000.0e+1;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e+1;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(44): '-123_000.0e+1;' > Output 1`] = `
"
  1 | -123_000e+1;
"
`;

exports[`invalid(45): '+123_000.0e-1;' > Code 1`] = `
"
  1 | +123_000.0e-1;
"
`;

exports[`invalid(45): '+123_000.0e-1;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e-1;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(45): '+123_000.0e-1;' > Output 1`] = `
"
  1 | +123_000e-1;
"
`;

exports[`invalid(46): '-123_000.0e-1;' > Code 1`] = `
"
  1 | -123_000.0e-1;
"
`;

exports[`invalid(46): '-123_000.0e-1;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e-1;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(46): '-123_000.0e-1;' > Output 1`] = `
"
  1 | -123_000e-1;
"
`;

exports[`invalid(47): '+123_000.0e0;' > Code 1`] = `
"
  1 | +123_000.0e0;
"
`;

exports[`invalid(47): '+123_000.0e0;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e0;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(47): '+123_000.0e0;' > Output 1`] = `
"
  1 | +123_000e0;
"
`;

exports[`invalid(48): '-123_000.0e0;' > Code 1`] = `
"
  1 | -123_000.0e0;
"
`;

exports[`invalid(48): '-123_000.0e0;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e0;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(48): '-123_000.0e0;' > Output 1`] = `
"
  1 | -123_000e0;
"
`;

exports[`invalid(49): '+123_000.0e+0;' > Code 1`] = `
"
  1 | +123_000.0e+0;
"
`;

exports[`invalid(49): '+123_000.0e+0;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e+0;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(49): '+123_000.0e+0;' > Output 1`] = `
"
  1 | +123_000e+0;
"
`;

exports[`invalid(50): '-123_000.0e+0;' > Code 1`] = `
"
  1 | -123_000.0e+0;
"
`;

exports[`invalid(50): '-123_000.0e+0;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e+0;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(50): '-123_000.0e+0;' > Output 1`] = `
"
  1 | -123_000e+0;
"
`;

exports[`invalid(51): '+123_000.0e-0;' > Code 1`] = `
"
  1 | +123_000.0e-0;
"
`;

exports[`invalid(51): '+123_000.0e-0;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e-0;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(51): '+123_000.0e-0;' > Output 1`] = `
"
  1 | +123_000e-0;
"
`;

exports[`invalid(52): '-123_000.0e-0;' > Code 1`] = `
"
  1 | -123_000.0e-0;
"
`;

exports[`invalid(52): '-123_000.0e-0;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e-0;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(52): '-123_000.0e-0;' > Output 1`] = `
"
  1 | -123_000e-0;
"
`;

exports[`invalid(53): '+123_000.0e10;' > Code 1`] = `
"
  1 | +123_000.0e10;
"
`;

exports[`invalid(53): '+123_000.0e10;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(53): '+123_000.0e10;' > Output 1`] = `
"
  1 | +123_000e10;
"
`;

exports[`invalid(54): '-123_000.0e10;' > Code 1`] = `
"
  1 | -123_000.0e10;
"
`;

exports[`invalid(54): '-123_000.0e10;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(54): '-123_000.0e10;' > Output 1`] = `
"
  1 | -123_000e10;
"
`;

exports[`invalid(55): '+123_000.0e+10;' > Code 1`] = `
"
  1 | +123_000.0e+10;
"
`;

exports[`invalid(55): '+123_000.0e+10;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e+10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(55): '+123_000.0e+10;' > Output 1`] = `
"
  1 | +123_000e+10;
"
`;

exports[`invalid(56): '-123_000.0e+10;' > Code 1`] = `
"
  1 | -123_000.0e+10;
"
`;

exports[`invalid(56): '-123_000.0e+10;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e+10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(56): '-123_000.0e+10;' > Output 1`] = `
"
  1 | -123_000e+10;
"
`;

exports[`invalid(57): '+123_000.0e-10;' > Code 1`] = `
"
  1 | +123_000.0e-10;
"
`;

exports[`invalid(57): '+123_000.0e-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.0e-10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(57): '+123_000.0e-10;' > Output 1`] = `
"
  1 | +123_000e-10;
"
`;

exports[`invalid(58): '-123_000.0e-10;' > Code 1`] = `
"
  1 | -123_000.0e-10;
"
`;

exports[`invalid(58): '-123_000.0e-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.0e-10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(58): '-123_000.0e-10;' > Output 1`] = `
"
  1 | -123_000e-10;
"
`;

exports[`invalid(59): '+123_000.0E-10;' > Code 1`] = `
"
  1 | +123_000.0E-10;
"
`;

exports[`invalid(59): '+123_000.0E-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.0E-10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(59): '+123_000.0E-10;' > Output 1`] = `
"
  1 | +123_000E-10;
"
`;

exports[`invalid(60): '-123_000.0E-10;' > Code 1`] = `
"
  1 | -123_000.0E-10;
"
`;

exports[`invalid(60): '-123_000.0E-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.0E-10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(60): '-123_000.0E-10;' > Output 1`] = `
"
  1 | -123_000E-10;
"
`;

exports[`invalid(61): '+123_000.0E-10_10;' > Code 1`] = `
"
  1 | +123_000.0E-10_10;
"
`;

exports[`invalid(61): '+123_000.0E-10_10;' > Error 1/1 1`] = `
"
> 1 | +123_000.0E-10_10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(61): '+123_000.0E-10_10;' > Output 1`] = `
"
  1 | +123_000E-10_10;
"
`;

exports[`invalid(62): '-123_000.0E-10_10;' > Code 1`] = `
"
  1 | -123_000.0E-10_10;
"
`;

exports[`invalid(62): '-123_000.0E-10_10;' > Error 1/1 1`] = `
"
> 1 | -123_000.0E-10_10;
    |         ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(62): '-123_000.0E-10_10;' > Output 1`] = `
"
  1 | -123_000E-10_10;
"
`;

exports[`invalid(63): '+123_000.000;' > Code 1`] = `
"
  1 | +123_000.000;
"
`;

exports[`invalid(63): '+123_000.000;' > Error 1/1 1`] = `
"
> 1 | +123_000.000;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(63): '+123_000.000;' > Output 1`] = `
"
  1 | +123_000;
"
`;

exports[`invalid(64): '-123_000.000;' > Code 1`] = `
"
  1 | -123_000.000;
"
`;

exports[`invalid(64): '-123_000.000;' > Error 1/1 1`] = `
"
> 1 | -123_000.000;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(64): '-123_000.000;' > Output 1`] = `
"
  1 | -123_000;
"
`;

exports[`invalid(65): '+123_000.000e1;' > Code 1`] = `
"
  1 | +123_000.000e1;
"
`;

exports[`invalid(65): '+123_000.000e1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e1;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(65): '+123_000.000e1;' > Output 1`] = `
"
  1 | +123_000e1;
"
`;

exports[`invalid(66): '-123_000.000e1;' > Code 1`] = `
"
  1 | -123_000.000e1;
"
`;

exports[`invalid(66): '-123_000.000e1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e1;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(66): '-123_000.000e1;' > Output 1`] = `
"
  1 | -123_000e1;
"
`;

exports[`invalid(67): '+123_000.000e+1;' > Code 1`] = `
"
  1 | +123_000.000e+1;
"
`;

exports[`invalid(67): '+123_000.000e+1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e+1;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(67): '+123_000.000e+1;' > Output 1`] = `
"
  1 | +123_000e+1;
"
`;

exports[`invalid(68): '-123_000.000e+1;' > Code 1`] = `
"
  1 | -123_000.000e+1;
"
`;

exports[`invalid(68): '-123_000.000e+1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e+1;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(68): '-123_000.000e+1;' > Output 1`] = `
"
  1 | -123_000e+1;
"
`;

exports[`invalid(69): '+123_000.000e-1;' > Code 1`] = `
"
  1 | +123_000.000e-1;
"
`;

exports[`invalid(69): '+123_000.000e-1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e-1;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(69): '+123_000.000e-1;' > Output 1`] = `
"
  1 | +123_000e-1;
"
`;

exports[`invalid(70): '-123_000.000e-1;' > Code 1`] = `
"
  1 | -123_000.000e-1;
"
`;

exports[`invalid(70): '-123_000.000e-1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e-1;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(70): '-123_000.000e-1;' > Output 1`] = `
"
  1 | -123_000e-1;
"
`;

exports[`invalid(71): '+123_000.000e0;' > Code 1`] = `
"
  1 | +123_000.000e0;
"
`;

exports[`invalid(71): '+123_000.000e0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e0;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(71): '+123_000.000e0;' > Output 1`] = `
"
  1 | +123_000e0;
"
`;

exports[`invalid(72): '-123_000.000e0;' > Code 1`] = `
"
  1 | -123_000.000e0;
"
`;

exports[`invalid(72): '-123_000.000e0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e0;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(72): '-123_000.000e0;' > Output 1`] = `
"
  1 | -123_000e0;
"
`;

exports[`invalid(73): '+123_000.000e+0;' > Code 1`] = `
"
  1 | +123_000.000e+0;
"
`;

exports[`invalid(73): '+123_000.000e+0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e+0;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(73): '+123_000.000e+0;' > Output 1`] = `
"
  1 | +123_000e+0;
"
`;

exports[`invalid(74): '-123_000.000e+0;' > Code 1`] = `
"
  1 | -123_000.000e+0;
"
`;

exports[`invalid(74): '-123_000.000e+0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e+0;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(74): '-123_000.000e+0;' > Output 1`] = `
"
  1 | -123_000e+0;
"
`;

exports[`invalid(75): '+123_000.000e-0;' > Code 1`] = `
"
  1 | +123_000.000e-0;
"
`;

exports[`invalid(75): '+123_000.000e-0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e-0;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(75): '+123_000.000e-0;' > Output 1`] = `
"
  1 | +123_000e-0;
"
`;

exports[`invalid(76): '-123_000.000e-0;' > Code 1`] = `
"
  1 | -123_000.000e-0;
"
`;

exports[`invalid(76): '-123_000.000e-0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e-0;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(76): '-123_000.000e-0;' > Output 1`] = `
"
  1 | -123_000e-0;
"
`;

exports[`invalid(77): '+123_000.000e10;' > Code 1`] = `
"
  1 | +123_000.000e10;
"
`;

exports[`invalid(77): '+123_000.000e10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(77): '+123_000.000e10;' > Output 1`] = `
"
  1 | +123_000e10;
"
`;

exports[`invalid(78): '-123_000.000e10;' > Code 1`] = `
"
  1 | -123_000.000e10;
"
`;

exports[`invalid(78): '-123_000.000e10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(78): '-123_000.000e10;' > Output 1`] = `
"
  1 | -123_000e10;
"
`;

exports[`invalid(79): '+123_000.000e+10;' > Code 1`] = `
"
  1 | +123_000.000e+10;
"
`;

exports[`invalid(79): '+123_000.000e+10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e+10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(79): '+123_000.000e+10;' > Output 1`] = `
"
  1 | +123_000e+10;
"
`;

exports[`invalid(80): '-123_000.000e+10;' > Code 1`] = `
"
  1 | -123_000.000e+10;
"
`;

exports[`invalid(80): '-123_000.000e+10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e+10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(80): '-123_000.000e+10;' > Output 1`] = `
"
  1 | -123_000e+10;
"
`;

exports[`invalid(81): '+123_000.000e-10;' > Code 1`] = `
"
  1 | +123_000.000e-10;
"
`;

exports[`invalid(81): '+123_000.000e-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000e-10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(81): '+123_000.000e-10;' > Output 1`] = `
"
  1 | +123_000e-10;
"
`;

exports[`invalid(82): '-123_000.000e-10;' > Code 1`] = `
"
  1 | -123_000.000e-10;
"
`;

exports[`invalid(82): '-123_000.000e-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000e-10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(82): '-123_000.000e-10;' > Output 1`] = `
"
  1 | -123_000e-10;
"
`;

exports[`invalid(83): '+123_000.000E-10;' > Code 1`] = `
"
  1 | +123_000.000E-10;
"
`;

exports[`invalid(83): '+123_000.000E-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000E-10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(83): '+123_000.000E-10;' > Output 1`] = `
"
  1 | +123_000E-10;
"
`;

exports[`invalid(84): '-123_000.000E-10;' > Code 1`] = `
"
  1 | -123_000.000E-10;
"
`;

exports[`invalid(84): '-123_000.000E-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000E-10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(84): '-123_000.000E-10;' > Output 1`] = `
"
  1 | -123_000E-10;
"
`;

exports[`invalid(85): '+123_000.000E-10_10;' > Code 1`] = `
"
  1 | +123_000.000E-10_10;
"
`;

exports[`invalid(85): '+123_000.000E-10_10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000E-10_10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(85): '+123_000.000E-10_10;' > Output 1`] = `
"
  1 | +123_000E-10_10;
"
`;

exports[`invalid(86): '-123_000.000E-10_10;' > Code 1`] = `
"
  1 | -123_000.000E-10_10;
"
`;

exports[`invalid(86): '-123_000.000E-10_10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000E-10_10;
    |         ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(86): '-123_000.000E-10_10;' > Output 1`] = `
"
  1 | -123_000E-10_10;
"
`;

exports[`invalid(87): '+123_000.000_000;' > Code 1`] = `
"
  1 | +123_000.000_000;
"
`;

exports[`invalid(87): '+123_000.000_000;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(87): '+123_000.000_000;' > Output 1`] = `
"
  1 | +123_000;
"
`;

exports[`invalid(88): '-123_000.000_000;' > Code 1`] = `
"
  1 | -123_000.000_000;
"
`;

exports[`invalid(88): '-123_000.000_000;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(88): '-123_000.000_000;' > Output 1`] = `
"
  1 | -123_000;
"
`;

exports[`invalid(89): '+123_000.000_000e1;' > Code 1`] = `
"
  1 | +123_000.000_000e1;
"
`;

exports[`invalid(89): '+123_000.000_000e1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e1;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(89): '+123_000.000_000e1;' > Output 1`] = `
"
  1 | +123_000e1;
"
`;

exports[`invalid(90): '-123_000.000_000e1;' > Code 1`] = `
"
  1 | -123_000.000_000e1;
"
`;

exports[`invalid(90): '-123_000.000_000e1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e1;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(90): '-123_000.000_000e1;' > Output 1`] = `
"
  1 | -123_000e1;
"
`;

exports[`invalid(91): '+123_000.000_000e+1;' > Code 1`] = `
"
  1 | +123_000.000_000e+1;
"
`;

exports[`invalid(91): '+123_000.000_000e+1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e+1;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(91): '+123_000.000_000e+1;' > Output 1`] = `
"
  1 | +123_000e+1;
"
`;

exports[`invalid(92): '-123_000.000_000e+1;' > Code 1`] = `
"
  1 | -123_000.000_000e+1;
"
`;

exports[`invalid(92): '-123_000.000_000e+1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e+1;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(92): '-123_000.000_000e+1;' > Output 1`] = `
"
  1 | -123_000e+1;
"
`;

exports[`invalid(93): '+123_000.000_000e-1;' > Code 1`] = `
"
  1 | +123_000.000_000e-1;
"
`;

exports[`invalid(93): '+123_000.000_000e-1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e-1;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(93): '+123_000.000_000e-1;' > Output 1`] = `
"
  1 | +123_000e-1;
"
`;

exports[`invalid(94): '-123_000.000_000e-1;' > Code 1`] = `
"
  1 | -123_000.000_000e-1;
"
`;

exports[`invalid(94): '-123_000.000_000e-1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e-1;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(94): '-123_000.000_000e-1;' > Output 1`] = `
"
  1 | -123_000e-1;
"
`;

exports[`invalid(95): '+123_000.000_000e0;' > Code 1`] = `
"
  1 | +123_000.000_000e0;
"
`;

exports[`invalid(95): '+123_000.000_000e0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e0;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(95): '+123_000.000_000e0;' > Output 1`] = `
"
  1 | +123_000e0;
"
`;

exports[`invalid(96): '-123_000.000_000e0;' > Code 1`] = `
"
  1 | -123_000.000_000e0;
"
`;

exports[`invalid(96): '-123_000.000_000e0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e0;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(96): '-123_000.000_000e0;' > Output 1`] = `
"
  1 | -123_000e0;
"
`;

exports[`invalid(97): '+123_000.000_000e+0;' > Code 1`] = `
"
  1 | +123_000.000_000e+0;
"
`;

exports[`invalid(97): '+123_000.000_000e+0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e+0;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(97): '+123_000.000_000e+0;' > Output 1`] = `
"
  1 | +123_000e+0;
"
`;

exports[`invalid(98): '-123_000.000_000e+0;' > Code 1`] = `
"
  1 | -123_000.000_000e+0;
"
`;

exports[`invalid(98): '-123_000.000_000e+0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e+0;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(98): '-123_000.000_000e+0;' > Output 1`] = `
"
  1 | -123_000e+0;
"
`;

exports[`invalid(99): '+123_000.000_000e-0;' > Code 1`] = `
"
  1 | +123_000.000_000e-0;
"
`;

exports[`invalid(99): '+123_000.000_000e-0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e-0;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(99): '+123_000.000_000e-0;' > Output 1`] = `
"
  1 | +123_000e-0;
"
`;

exports[`invalid(100): '-123_000.000_000e-0;' > Code 1`] = `
"
  1 | -123_000.000_000e-0;
"
`;

exports[`invalid(100): '-123_000.000_000e-0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e-0;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(100): '-123_000.000_000e-0;' > Output 1`] = `
"
  1 | -123_000e-0;
"
`;

exports[`invalid(101): '+123_000.000_000e10;' > Code 1`] = `
"
  1 | +123_000.000_000e10;
"
`;

exports[`invalid(101): '+123_000.000_000e10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(101): '+123_000.000_000e10;' > Output 1`] = `
"
  1 | +123_000e10;
"
`;

exports[`invalid(102): '-123_000.000_000e10;' > Code 1`] = `
"
  1 | -123_000.000_000e10;
"
`;

exports[`invalid(102): '-123_000.000_000e10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(102): '-123_000.000_000e10;' > Output 1`] = `
"
  1 | -123_000e10;
"
`;

exports[`invalid(103): '+123_000.000_000e+10;' > Code 1`] = `
"
  1 | +123_000.000_000e+10;
"
`;

exports[`invalid(103): '+123_000.000_000e+10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e+10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(103): '+123_000.000_000e+10;' > Output 1`] = `
"
  1 | +123_000e+10;
"
`;

exports[`invalid(104): '-123_000.000_000e+10;' > Code 1`] = `
"
  1 | -123_000.000_000e+10;
"
`;

exports[`invalid(104): '-123_000.000_000e+10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e+10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(104): '-123_000.000_000e+10;' > Output 1`] = `
"
  1 | -123_000e+10;
"
`;

exports[`invalid(105): '+123_000.000_000e-10;' > Code 1`] = `
"
  1 | +123_000.000_000e-10;
"
`;

exports[`invalid(105): '+123_000.000_000e-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000e-10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(105): '+123_000.000_000e-10;' > Output 1`] = `
"
  1 | +123_000e-10;
"
`;

exports[`invalid(106): '-123_000.000_000e-10;' > Code 1`] = `
"
  1 | -123_000.000_000e-10;
"
`;

exports[`invalid(106): '-123_000.000_000e-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000e-10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(106): '-123_000.000_000e-10;' > Output 1`] = `
"
  1 | -123_000e-10;
"
`;

exports[`invalid(107): '+123_000.000_000E-10;' > Code 1`] = `
"
  1 | +123_000.000_000E-10;
"
`;

exports[`invalid(107): '+123_000.000_000E-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000E-10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(107): '+123_000.000_000E-10;' > Output 1`] = `
"
  1 | +123_000E-10;
"
`;

exports[`invalid(108): '-123_000.000_000E-10;' > Code 1`] = `
"
  1 | -123_000.000_000E-10;
"
`;

exports[`invalid(108): '-123_000.000_000E-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000E-10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(108): '-123_000.000_000E-10;' > Output 1`] = `
"
  1 | -123_000E-10;
"
`;

exports[`invalid(109): '+123_000.000_000E-10_10;' > Code 1`] = `
"
  1 | +123_000.000_000E-10_10;
"
`;

exports[`invalid(109): '+123_000.000_000E-10_10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_000E-10_10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(109): '+123_000.000_000E-10_10;' > Output 1`] = `
"
  1 | +123_000E-10_10;
"
`;

exports[`invalid(110): '-123_000.000_000E-10_10;' > Code 1`] = `
"
  1 | -123_000.000_000E-10_10;
"
`;

exports[`invalid(110): '-123_000.000_000E-10_10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_000E-10_10;
    |         ^^^^^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(110): '-123_000.000_000E-10_10;' > Output 1`] = `
"
  1 | -123_000E-10_10;
"
`;

exports[`invalid(111): '+123_000.123_000;' > Code 1`] = `
"
  1 | +123_000.123_000;
"
`;

exports[`invalid(111): '+123_000.123_000;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(111): '+123_000.123_000;' > Output 1`] = `
"
  1 | +123_000.123;
"
`;

exports[`invalid(112): '-123_000.123_000;' > Code 1`] = `
"
  1 | -123_000.123_000;
"
`;

exports[`invalid(112): '-123_000.123_000;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(112): '-123_000.123_000;' > Output 1`] = `
"
  1 | -123_000.123;
"
`;

exports[`invalid(113): '+123_000.123_000e1;' > Code 1`] = `
"
  1 | +123_000.123_000e1;
"
`;

exports[`invalid(113): '+123_000.123_000e1;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e1;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(113): '+123_000.123_000e1;' > Output 1`] = `
"
  1 | +123_000.123e1;
"
`;

exports[`invalid(114): '-123_000.123_000e1;' > Code 1`] = `
"
  1 | -123_000.123_000e1;
"
`;

exports[`invalid(114): '-123_000.123_000e1;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e1;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(114): '-123_000.123_000e1;' > Output 1`] = `
"
  1 | -123_000.123e1;
"
`;

exports[`invalid(115): '+123_000.123_000e+1;' > Code 1`] = `
"
  1 | +123_000.123_000e+1;
"
`;

exports[`invalid(115): '+123_000.123_000e+1;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e+1;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(115): '+123_000.123_000e+1;' > Output 1`] = `
"
  1 | +123_000.123e+1;
"
`;

exports[`invalid(116): '-123_000.123_000e+1;' > Code 1`] = `
"
  1 | -123_000.123_000e+1;
"
`;

exports[`invalid(116): '-123_000.123_000e+1;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e+1;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(116): '-123_000.123_000e+1;' > Output 1`] = `
"
  1 | -123_000.123e+1;
"
`;

exports[`invalid(117): '+123_000.123_000e-1;' > Code 1`] = `
"
  1 | +123_000.123_000e-1;
"
`;

exports[`invalid(117): '+123_000.123_000e-1;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e-1;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(117): '+123_000.123_000e-1;' > Output 1`] = `
"
  1 | +123_000.123e-1;
"
`;

exports[`invalid(118): '-123_000.123_000e-1;' > Code 1`] = `
"
  1 | -123_000.123_000e-1;
"
`;

exports[`invalid(118): '-123_000.123_000e-1;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e-1;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(118): '-123_000.123_000e-1;' > Output 1`] = `
"
  1 | -123_000.123e-1;
"
`;

exports[`invalid(119): '+123_000.123_000e0;' > Code 1`] = `
"
  1 | +123_000.123_000e0;
"
`;

exports[`invalid(119): '+123_000.123_000e0;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e0;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(119): '+123_000.123_000e0;' > Output 1`] = `
"
  1 | +123_000.123e0;
"
`;

exports[`invalid(120): '-123_000.123_000e0;' > Code 1`] = `
"
  1 | -123_000.123_000e0;
"
`;

exports[`invalid(120): '-123_000.123_000e0;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e0;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(120): '-123_000.123_000e0;' > Output 1`] = `
"
  1 | -123_000.123e0;
"
`;

exports[`invalid(121): '+123_000.123_000e+0;' > Code 1`] = `
"
  1 | +123_000.123_000e+0;
"
`;

exports[`invalid(121): '+123_000.123_000e+0;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e+0;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(121): '+123_000.123_000e+0;' > Output 1`] = `
"
  1 | +123_000.123e+0;
"
`;

exports[`invalid(122): '-123_000.123_000e+0;' > Code 1`] = `
"
  1 | -123_000.123_000e+0;
"
`;

exports[`invalid(122): '-123_000.123_000e+0;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e+0;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(122): '-123_000.123_000e+0;' > Output 1`] = `
"
  1 | -123_000.123e+0;
"
`;

exports[`invalid(123): '+123_000.123_000e-0;' > Code 1`] = `
"
  1 | +123_000.123_000e-0;
"
`;

exports[`invalid(123): '+123_000.123_000e-0;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e-0;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(123): '+123_000.123_000e-0;' > Output 1`] = `
"
  1 | +123_000.123e-0;
"
`;

exports[`invalid(124): '-123_000.123_000e-0;' > Code 1`] = `
"
  1 | -123_000.123_000e-0;
"
`;

exports[`invalid(124): '-123_000.123_000e-0;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e-0;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(124): '-123_000.123_000e-0;' > Output 1`] = `
"
  1 | -123_000.123e-0;
"
`;

exports[`invalid(125): '+123_000.123_000e10;' > Code 1`] = `
"
  1 | +123_000.123_000e10;
"
`;

exports[`invalid(125): '+123_000.123_000e10;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(125): '+123_000.123_000e10;' > Output 1`] = `
"
  1 | +123_000.123e10;
"
`;

exports[`invalid(126): '-123_000.123_000e10;' > Code 1`] = `
"
  1 | -123_000.123_000e10;
"
`;

exports[`invalid(126): '-123_000.123_000e10;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(126): '-123_000.123_000e10;' > Output 1`] = `
"
  1 | -123_000.123e10;
"
`;

exports[`invalid(127): '+123_000.123_000e+10;' > Code 1`] = `
"
  1 | +123_000.123_000e+10;
"
`;

exports[`invalid(127): '+123_000.123_000e+10;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e+10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(127): '+123_000.123_000e+10;' > Output 1`] = `
"
  1 | +123_000.123e+10;
"
`;

exports[`invalid(128): '-123_000.123_000e+10;' > Code 1`] = `
"
  1 | -123_000.123_000e+10;
"
`;

exports[`invalid(128): '-123_000.123_000e+10;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e+10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(128): '-123_000.123_000e+10;' > Output 1`] = `
"
  1 | -123_000.123e+10;
"
`;

exports[`invalid(129): '+123_000.123_000e-10;' > Code 1`] = `
"
  1 | +123_000.123_000e-10;
"
`;

exports[`invalid(129): '+123_000.123_000e-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000e-10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(129): '+123_000.123_000e-10;' > Output 1`] = `
"
  1 | +123_000.123e-10;
"
`;

exports[`invalid(130): '-123_000.123_000e-10;' > Code 1`] = `
"
  1 | -123_000.123_000e-10;
"
`;

exports[`invalid(130): '-123_000.123_000e-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000e-10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(130): '-123_000.123_000e-10;' > Output 1`] = `
"
  1 | -123_000.123e-10;
"
`;

exports[`invalid(131): '+123_000.123_000E-10;' > Code 1`] = `
"
  1 | +123_000.123_000E-10;
"
`;

exports[`invalid(131): '+123_000.123_000E-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000E-10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(131): '+123_000.123_000E-10;' > Output 1`] = `
"
  1 | +123_000.123E-10;
"
`;

exports[`invalid(132): '-123_000.123_000E-10;' > Code 1`] = `
"
  1 | -123_000.123_000E-10;
"
`;

exports[`invalid(132): '-123_000.123_000E-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000E-10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(132): '-123_000.123_000E-10;' > Output 1`] = `
"
  1 | -123_000.123E-10;
"
`;

exports[`invalid(133): '+123_000.123_000E-10_10;' > Code 1`] = `
"
  1 | +123_000.123_000E-10_10;
"
`;

exports[`invalid(133): '+123_000.123_000E-10_10;' > Error 1/1 1`] = `
"
> 1 | +123_000.123_000E-10_10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(133): '+123_000.123_000E-10_10;' > Output 1`] = `
"
  1 | +123_000.123E-10_10;
"
`;

exports[`invalid(134): '-123_000.123_000E-10_10;' > Code 1`] = `
"
  1 | -123_000.123_000E-10_10;
"
`;

exports[`invalid(134): '-123_000.123_000E-10_10;' > Error 1/1 1`] = `
"
> 1 | -123_000.123_000E-10_10;
    |             ^^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(134): '-123_000.123_000E-10_10;' > Output 1`] = `
"
  1 | -123_000.123E-10_10;
"
`;

exports[`invalid(135): '+123_000.000_400;' > Code 1`] = `
"
  1 | +123_000.000_400;
"
`;

exports[`invalid(135): '+123_000.000_400;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(135): '+123_000.000_400;' > Output 1`] = `
"
  1 | +123_000.000_4;
"
`;

exports[`invalid(136): '-123_000.000_400;' > Code 1`] = `
"
  1 | -123_000.000_400;
"
`;

exports[`invalid(136): '-123_000.000_400;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(136): '-123_000.000_400;' > Output 1`] = `
"
  1 | -123_000.000_4;
"
`;

exports[`invalid(137): '+123_000.000_400e1;' > Code 1`] = `
"
  1 | +123_000.000_400e1;
"
`;

exports[`invalid(137): '+123_000.000_400e1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e1;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(137): '+123_000.000_400e1;' > Output 1`] = `
"
  1 | +123_000.000_4e1;
"
`;

exports[`invalid(138): '-123_000.000_400e1;' > Code 1`] = `
"
  1 | -123_000.000_400e1;
"
`;

exports[`invalid(138): '-123_000.000_400e1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e1;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(138): '-123_000.000_400e1;' > Output 1`] = `
"
  1 | -123_000.000_4e1;
"
`;

exports[`invalid(139): '+123_000.000_400e+1;' > Code 1`] = `
"
  1 | +123_000.000_400e+1;
"
`;

exports[`invalid(139): '+123_000.000_400e+1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e+1;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(139): '+123_000.000_400e+1;' > Output 1`] = `
"
  1 | +123_000.000_4e+1;
"
`;

exports[`invalid(140): '-123_000.000_400e+1;' > Code 1`] = `
"
  1 | -123_000.000_400e+1;
"
`;

exports[`invalid(140): '-123_000.000_400e+1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e+1;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(140): '-123_000.000_400e+1;' > Output 1`] = `
"
  1 | -123_000.000_4e+1;
"
`;

exports[`invalid(141): '+123_000.000_400e-1;' > Code 1`] = `
"
  1 | +123_000.000_400e-1;
"
`;

exports[`invalid(141): '+123_000.000_400e-1;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e-1;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(141): '+123_000.000_400e-1;' > Output 1`] = `
"
  1 | +123_000.000_4e-1;
"
`;

exports[`invalid(142): '-123_000.000_400e-1;' > Code 1`] = `
"
  1 | -123_000.000_400e-1;
"
`;

exports[`invalid(142): '-123_000.000_400e-1;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e-1;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(142): '-123_000.000_400e-1;' > Output 1`] = `
"
  1 | -123_000.000_4e-1;
"
`;

exports[`invalid(143): '+123_000.000_400e0;' > Code 1`] = `
"
  1 | +123_000.000_400e0;
"
`;

exports[`invalid(143): '+123_000.000_400e0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e0;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(143): '+123_000.000_400e0;' > Output 1`] = `
"
  1 | +123_000.000_4e0;
"
`;

exports[`invalid(144): '-123_000.000_400e0;' > Code 1`] = `
"
  1 | -123_000.000_400e0;
"
`;

exports[`invalid(144): '-123_000.000_400e0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e0;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(144): '-123_000.000_400e0;' > Output 1`] = `
"
  1 | -123_000.000_4e0;
"
`;

exports[`invalid(145): '+123_000.000_400e+0;' > Code 1`] = `
"
  1 | +123_000.000_400e+0;
"
`;

exports[`invalid(145): '+123_000.000_400e+0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e+0;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(145): '+123_000.000_400e+0;' > Output 1`] = `
"
  1 | +123_000.000_4e+0;
"
`;

exports[`invalid(146): '-123_000.000_400e+0;' > Code 1`] = `
"
  1 | -123_000.000_400e+0;
"
`;

exports[`invalid(146): '-123_000.000_400e+0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e+0;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(146): '-123_000.000_400e+0;' > Output 1`] = `
"
  1 | -123_000.000_4e+0;
"
`;

exports[`invalid(147): '+123_000.000_400e-0;' > Code 1`] = `
"
  1 | +123_000.000_400e-0;
"
`;

exports[`invalid(147): '+123_000.000_400e-0;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e-0;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(147): '+123_000.000_400e-0;' > Output 1`] = `
"
  1 | +123_000.000_4e-0;
"
`;

exports[`invalid(148): '-123_000.000_400e-0;' > Code 1`] = `
"
  1 | -123_000.000_400e-0;
"
`;

exports[`invalid(148): '-123_000.000_400e-0;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e-0;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(148): '-123_000.000_400e-0;' > Output 1`] = `
"
  1 | -123_000.000_4e-0;
"
`;

exports[`invalid(149): '+123_000.000_400e10;' > Code 1`] = `
"
  1 | +123_000.000_400e10;
"
`;

exports[`invalid(149): '+123_000.000_400e10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(149): '+123_000.000_400e10;' > Output 1`] = `
"
  1 | +123_000.000_4e10;
"
`;

exports[`invalid(150): '-123_000.000_400e10;' > Code 1`] = `
"
  1 | -123_000.000_400e10;
"
`;

exports[`invalid(150): '-123_000.000_400e10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(150): '-123_000.000_400e10;' > Output 1`] = `
"
  1 | -123_000.000_4e10;
"
`;

exports[`invalid(151): '+123_000.000_400e+10;' > Code 1`] = `
"
  1 | +123_000.000_400e+10;
"
`;

exports[`invalid(151): '+123_000.000_400e+10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e+10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(151): '+123_000.000_400e+10;' > Output 1`] = `
"
  1 | +123_000.000_4e+10;
"
`;

exports[`invalid(152): '-123_000.000_400e+10;' > Code 1`] = `
"
  1 | -123_000.000_400e+10;
"
`;

exports[`invalid(152): '-123_000.000_400e+10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e+10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(152): '-123_000.000_400e+10;' > Output 1`] = `
"
  1 | -123_000.000_4e+10;
"
`;

exports[`invalid(153): '+123_000.000_400e-10;' > Code 1`] = `
"
  1 | +123_000.000_400e-10;
"
`;

exports[`invalid(153): '+123_000.000_400e-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400e-10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(153): '+123_000.000_400e-10;' > Output 1`] = `
"
  1 | +123_000.000_4e-10;
"
`;

exports[`invalid(154): '-123_000.000_400e-10;' > Code 1`] = `
"
  1 | -123_000.000_400e-10;
"
`;

exports[`invalid(154): '-123_000.000_400e-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400e-10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(154): '-123_000.000_400e-10;' > Output 1`] = `
"
  1 | -123_000.000_4e-10;
"
`;

exports[`invalid(155): '+123_000.000_400E-10;' > Code 1`] = `
"
  1 | +123_000.000_400E-10;
"
`;

exports[`invalid(155): '+123_000.000_400E-10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400E-10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(155): '+123_000.000_400E-10;' > Output 1`] = `
"
  1 | +123_000.000_4E-10;
"
`;

exports[`invalid(156): '-123_000.000_400E-10;' > Code 1`] = `
"
  1 | -123_000.000_400E-10;
"
`;

exports[`invalid(156): '-123_000.000_400E-10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400E-10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(156): '-123_000.000_400E-10;' > Output 1`] = `
"
  1 | -123_000.000_4E-10;
"
`;

exports[`invalid(157): '+123_000.000_400E-10_10;' > Code 1`] = `
"
  1 | +123_000.000_400E-10_10;
"
`;

exports[`invalid(157): '+123_000.000_400E-10_10;' > Error 1/1 1`] = `
"
> 1 | +123_000.000_400E-10_10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(157): '+123_000.000_400E-10_10;' > Output 1`] = `
"
  1 | +123_000.000_4E-10_10;
"
`;

exports[`invalid(158): '-123_000.000_400E-10_10;' > Code 1`] = `
"
  1 | -123_000.000_400E-10_10;
"
`;

exports[`invalid(158): '-123_000.000_400E-10_10;' > Error 1/1 1`] = `
"
> 1 | -123_000.000_400E-10_10;
    |               ^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(158): '-123_000.000_400E-10_10;' > Output 1`] = `
"
  1 | -123_000.000_4E-10_10;
"
`;

exports[`invalid(159): '1.00.toFixed(2)' > Code 1`] = `
"
  1 | 1.00.toFixed(2)
"
`;

exports[`invalid(159): '1.00.toFixed(2)' > Error 1/1 1`] = `
"
> 1 | 1.00.toFixed(2)
    |  ^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(159): '1.00.toFixed(2)' > Output 1`] = `
"
  1 | (1).toFixed(2)
"
`;

exports[`invalid(160): '1.00 .toFixed(2)' > Code 1`] = `
"
  1 | 1.00 .toFixed(2)
"
`;

exports[`invalid(160): '1.00 .toFixed(2)' > Error 1/1 1`] = `
"
> 1 | 1.00 .toFixed(2)
    |  ^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(160): '1.00 .toFixed(2)' > Output 1`] = `
"
  1 | (1) .toFixed(2)
"
`;

exports[`invalid(161): '(1.00).toFixed(2)' > Code 1`] = `
"
  1 | (1.00).toFixed(2)
"
`;

exports[`invalid(161): '(1.00).toFixed(2)' > Error 1/1 1`] = `
"
> 1 | (1.00).toFixed(2)
    |   ^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(161): '(1.00).toFixed(2)' > Output 1`] = `
"
  1 | (1).toFixed(2)
"
`;

exports[`invalid(162): '1.00?.toFixed(2)' > Code 1`] = `
"
  1 | 1.00?.toFixed(2)
"
`;

exports[`invalid(162): '1.00?.toFixed(2)' > Error 1/1 1`] = `
"
> 1 | 1.00?.toFixed(2)
    |  ^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(162): '1.00?.toFixed(2)' > Output 1`] = `
"
  1 | (1)?.toFixed(2)
"
`;

exports[`invalid(163): 'console.log()\\n1..toString()' > Code 1`] = `
"
  1 | console.log()
  2 | 1..toString()
"
`;

exports[`invalid(163): 'console.log()\\n1..toString()' > Error 1/1 1`] = `
"
  1 | console.log()
> 2 | 1..toString()
    |  ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(163): 'console.log()\\n1..toString()' > Output 1`] = `
"
  1 | console.log()
  2 | ;(1).toString()
"
`;

exports[`invalid(164): 'console.log()\\na[1.].toString()' > Code 1`] = `
"
  1 | console.log()
  2 | a[1.].toString()
"
`;

exports[`invalid(164): 'console.log()\\na[1.].toString()' > Error 1/1 1`] = `
"
  1 | console.log()
> 2 | a[1.].toString()
    |    ^ Don't use a dangling dot in the number.
"
`;

exports[`invalid(164): 'console.log()\\na[1.].toString()' > Output 1`] = `
"
  1 | console.log()
  2 | a[1].toString()
"
`;

exports[`invalid(165): 'console.log()\\n1.00e10.toString()' > Code 1`] = `
"
  1 | console.log()
  2 | 1.00e10.toString()
"
`;

exports[`invalid(165): 'console.log()\\n1.00e10.toString()' > Error 1/1 1`] = `
"
  1 | console.log()
> 2 | 1.00e10.toString()
    |  ^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(165): 'console.log()\\n1.00e10.toString()' > Output 1`] = `
"
  1 | console.log()
  2 | 1e10.toString()
"
`;

exports[`invalid(166): 'console.log()\\na[1.00e10].toString()' > Code 1`] = `
"
  1 | console.log()
  2 | a[1.00e10].toString()
"
`;

exports[`invalid(166): 'console.log()\\na[1.00e10].toString()' > Error 1/1 1`] = `
"
  1 | console.log()
> 2 | a[1.00e10].toString()
    |    ^^^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(166): 'console.log()\\na[1.00e10].toString()' > Output 1`] = `
"
  1 | console.log()
  2 | a[1e10].toString()
"
`;

exports[`invalid(167): 'a = .0;' > Code 1`] = `
"
  1 | a = .0;
"
`;

exports[`invalid(167): 'a = .0;' > Error 1/1 1`] = `
"
> 1 | a = .0;
    |      ^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(167): 'a = .0;' > Output 1`] = `
"
  1 | a = 0;
"
`;

exports[`invalid(168): 'a = .0.toString()' > Code 1`] = `
"
  1 | a = .0.toString()
"
`;

exports[`invalid(168): 'a = .0.toString()' > Error 1/1 1`] = `
"
> 1 | a = .0.toString()
    |      ^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(168): 'a = .0.toString()' > Output 1`] = `
"
  1 | a = (0).toString()
"
`;

exports[`invalid(169): 'function foo(){return.0}' > Code 1`] = `
"
  1 | function foo(){return.0}
"
`;

exports[`invalid(169): 'function foo(){return.0}' > Error 1/1 1`] = `
"
> 1 | function foo(){return.0}
    |                       ^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(169): 'function foo(){return.0}' > Output 1`] = `
"
  1 | function foo(){return 0}
"
`;

exports[`invalid(170): 'function foo(){return.0.toString()}' > Code 1`] = `
"
  1 | function foo(){return.0.toString()}
"
`;

exports[`invalid(170): 'function foo(){return.0.toString()}' > Error 1/1 1`] = `
"
> 1 | function foo(){return.0.toString()}
    |                       ^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(170): 'function foo(){return.0.toString()}' > Output 1`] = `
"
  1 | function foo(){return (0).toString()}
"
`;

exports[`invalid(171): 'function foo(){return.0+.1}' > Code 1`] = `
"
  1 | function foo(){return.0+.1}
"
`;

exports[`invalid(171): 'function foo(){return.0+.1}' > Error 1/1 1`] = `
"
> 1 | function foo(){return.0+.1}
    |                       ^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(171): 'function foo(){return.0+.1}' > Output 1`] = `
"
  1 | function foo(){return 0+.1}
"
`;

exports[`invalid(172): 'console.log()\\n.0.toString()' > Code 1`] = `
"
  1 | console.log()
  2 | .0.toString()
"
`;

exports[`invalid(172): 'console.log()\\n.0.toString()' > Error 1/1 1`] = `
"
  1 | console.log()
> 2 | .0.toString()
    |  ^ Don't use a zero fraction in the number.
"
`;

exports[`invalid(172): 'console.log()\\n.0.toString()' > Output 1`] = `
"
  1 | console.log()
  2 | ;(0).toString()
"
`;
