// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'try {} catch ({}) {}' > Code 1`] = `
"
  1 | try {} catch ({}) {}
"
`;

exports[`invalid(0): 'try {} catch ({}) {}' > Error 1/1 1`] = `
"
> 1 | try {} catch ({}) {}
    |               ^^ Remove unused catch binding.
"
`;

exports[`invalid(0): 'try {} catch ({}) {}' > Output 1`] = `
"
  1 | try {} catch {}
"
`;

exports[`invalid(1): 'try {} catch ({message}) {}' > Code 1`] = `
"
  1 | try {} catch ({message}) {}
"
`;

exports[`invalid(1): 'try {} catch ({message}) {}' > Error 1/1 1`] = `
"
> 1 | try {} catch ({message}) {}
    |               ^^^^^^^^^ Remove unused catch binding.
"
`;

exports[`invalid(1): 'try {} catch ({message}) {}' > Output 1`] = `
"
  1 | try {} catch {}
"
`;

exports[`invalid(2): 'try {} catch ({message: notUsedMessag…' > Code 1`] = `
"
  1 | try {} catch ({message: notUsedMessage}) {}
"
`;

exports[`invalid(2): 'try {} catch ({message: notUsedMessag…' > Error 1/1 1`] = `
"
> 1 | try {} catch ({message: notUsedMessage}) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^ Remove unused catch binding.
"
`;

exports[`invalid(2): 'try {} catch ({message: notUsedMessag…' > Output 1`] = `
"
  1 | try {} catch {}
"
`;

exports[`invalid(3): 'try {} catch ({cause: {message}}) {}' > Code 1`] = `
"
  1 | try {} catch ({cause: {message}}) {}
"
`;

exports[`invalid(3): 'try {} catch ({cause: {message}}) {}' > Error 1/1 1`] = `
"
> 1 | try {} catch ({cause: {message}}) {}
    |               ^^^^^^^^^^^^^^^^^^ Remove unused catch binding.
"
`;

exports[`invalid(3): 'try {} catch ({cause: {message}}) {}' > Output 1`] = `
"
  1 | try {} catch {}
"
`;
