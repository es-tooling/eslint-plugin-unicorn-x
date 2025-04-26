// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'new Date(date.getTime())' > Code 1`] = `
"
  1 | new Date(date.getTime())
"
`;

exports[`invalid(0): 'new Date(date.getTime())' > Error 1/1 1`] = `
"
> 1 | new Date(date.getTime())
    |               ^^^^^^^^^ Unnecessary \`.getTime()\` call.
"
`;

exports[`invalid(0): 'new Date(date.getTime())' > Output 1`] = `
"
  1 | new Date(date)
"
`;

exports[`invalid(1): 'new Date(date.getTime(),)' > Code 1`] = `
"
  1 | new Date(date.getTime(),)
"
`;

exports[`invalid(1): 'new Date(date.getTime(),)' > Error 1/1 1`] = `
"
> 1 | new Date(date.getTime(),)
    |               ^^^^^^^^^ Unnecessary \`.getTime()\` call.
"
`;

exports[`invalid(1): 'new Date(date.getTime(),)' > Output 1`] = `
"
  1 | new Date(date,)
"
`;

exports[`invalid(2): 'new Date((0, date).getTime())' > Code 1`] = `
"
  1 | new Date((0, date).getTime())
"
`;

exports[`invalid(2): 'new Date((0, date).getTime())' > Error 1/1 1`] = `
"
> 1 | new Date((0, date).getTime())
    |                    ^^^^^^^^^ Unnecessary \`.getTime()\` call.
"
`;

exports[`invalid(2): 'new Date((0, date).getTime())' > Output 1`] = `
"
  1 | new Date((0, date))
"
`;

exports[`invalid(3): 'new Date(date.getTime(/* comment */))' > Code 1`] = `
"
  1 | new Date(date.getTime(/* comment */))
"
`;

exports[`invalid(3): 'new Date(date.getTime(/* comment */))' > Error 1/1 1`] = `
"
> 1 | new Date(date.getTime(/* comment */))
    |               ^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`.getTime()\` call.
"
`;

exports[`invalid(3): 'new Date(date.getTime(/* comment */))' > Output 1`] = `
"
  1 | new Date(date)
"
`;

exports[`invalid(4): 'new Date(date./* comment */getTime())' > Code 1`] = `
"
  1 | new Date(date./* comment */getTime())
"
`;

exports[`invalid(4): 'new Date(date./* comment */getTime())' > Error 1/1 1`] = `
"
> 1 | new Date(date./* comment */getTime())
    |                            ^^^^^^^^^ Unnecessary \`.getTime()\` call.
"
`;

exports[`invalid(4): 'new Date(date./* comment */getTime())' > Output 1`] = `
"
  1 | new Date(date)
"
`;
