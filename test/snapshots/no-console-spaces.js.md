// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'console.log("abc", " def ", "ghi");' > Code 1`] = `
"
  1 | console.log("abc", " def ", "ghi");
"
`;

exports[`invalid(0): 'console.log("abc", " def ", "ghi");' > Error 1/2 1`] = `
"
> 1 | console.log("abc", " def ", "ghi");
    |                     ^ Do not use leading space between \`console.log\` parameters.
"
`;

exports[`invalid(0): 'console.log("abc", " def ", "ghi");' > Error 2/2 1`] = `
"
> 1 | console.log("abc", " def ", "ghi");
    |                         ^ Do not use trailing space between \`console.log\` parameters.
"
`;

exports[`invalid(0): 'console.log("abc", " def ", "ghi");' > Output 1`] = `
"
  1 | console.log("abc", "def", "ghi");
"
`;

exports[`invalid(1): 'console.error(\\n\\ttheme.error(\\'✗\\'),…' > Code 1`] = `
"
  1 | console.error(
  2 | 	theme.error('✗'),
  3 | 	'Verifying "packaging" fixture\\n ',
  4 | 	theme.error(errorMessage)
  5 | );
"
`;

exports[`invalid(1): 'console.error(\\n\\ttheme.error(\\'✗\\'),…' > Error 1/1 1`] = `
"
  1 | console.error(
  2 | 	theme.error('✗'),
> 3 | 	'Verifying "packaging" fixture\\n ',
    | 	                                ^ Do not use trailing space between \`console.error\` parameters.
  4 | 	theme.error(errorMessage)
  5 | );
"
`;

exports[`invalid(1): 'console.error(\\n\\ttheme.error(\\'✗\\'),…' > Output 1`] = `
"
  1 | console.error(
  2 | 	theme.error('✗'),
  3 | 	'Verifying "packaging" fixture\\n',
  4 | 	theme.error(errorMessage)
  5 | );
"
`;

exports[`invalid(2): 'console.log(\\n\\t\\'abc\\',\\n\\t\\'def \\',…' > Code 1`] = `
"
  1 | console.log(
  2 | 	'abc',
  3 | 	'def ',
  4 | 	'ghi'
  5 | );
"
`;

exports[`invalid(2): 'console.log(\\n\\t\\'abc\\',\\n\\t\\'def \\',…' > Error 1/1 1`] = `
"
  1 | console.log(
  2 | 	'abc',
> 3 | 	'def ',
    | 	    ^ Do not use trailing space between \`console.log\` parameters.
  4 | 	'ghi'
  5 | );
"
`;

exports[`invalid(2): 'console.log(\\n\\t\\'abc\\',\\n\\t\\'def \\',…' > Output 1`] = `
"
  1 | console.log(
  2 | 	'abc',
  3 | 	'def',
  4 | 	'ghi'
  5 | );
"
`;

exports[`invalid(3): 'console.log("_", " leading", "_")' > Code 1`] = `
"
  1 | console.log("_", " leading", "_")
"
`;

exports[`invalid(3): 'console.log("_", " leading", "_")' > Error 1/1 1`] = `
"
> 1 | console.log("_", " leading", "_")
    |                   ^ Do not use leading space between \`console.log\` parameters.
"
`;

exports[`invalid(3): 'console.log("_", " leading", "_")' > Output 1`] = `
"
  1 | console.log("_", "leading", "_")
"
`;

exports[`invalid(4): 'console.log("_", "trailing ", "_")' > Code 1`] = `
"
  1 | console.log("_", "trailing ", "_")
"
`;

exports[`invalid(4): 'console.log("_", "trailing ", "_")' > Error 1/1 1`] = `
"
> 1 | console.log("_", "trailing ", "_")
    |                           ^ Do not use trailing space between \`console.log\` parameters.
"
`;

exports[`invalid(4): 'console.log("_", "trailing ", "_")' > Output 1`] = `
"
  1 | console.log("_", "trailing", "_")
"
`;

exports[`invalid(5): 'console.log("_", " leading and traili…' > Code 1`] = `
"
  1 | console.log("_", " leading and trailing ", "_")
"
`;

exports[`invalid(5): 'console.log("_", " leading and traili…' > Error 1/2 1`] = `
"
> 1 | console.log("_", " leading and trailing ", "_")
    |                   ^ Do not use leading space between \`console.log\` parameters.
"
`;

exports[`invalid(5): 'console.log("_", " leading and traili…' > Error 2/2 1`] = `
"
> 1 | console.log("_", " leading and trailing ", "_")
    |                                        ^ Do not use trailing space between \`console.log\` parameters.
"
`;

exports[`invalid(5): 'console.log("_", " leading and traili…' > Output 1`] = `
"
  1 | console.log("_", "leading and trailing", "_")
"
`;

exports[`invalid(6): 'console.log("_", " log ", "_")' > Code 1`] = `
"
  1 | console.log("_", " log ", "_")
"
`;

exports[`invalid(6): 'console.log("_", " log ", "_")' > Error 1/2 1`] = `
"
> 1 | console.log("_", " log ", "_")
    |                   ^ Do not use leading space between \`console.log\` parameters.
"
`;

exports[`invalid(6): 'console.log("_", " log ", "_")' > Error 2/2 1`] = `
"
> 1 | console.log("_", " log ", "_")
    |                       ^ Do not use trailing space between \`console.log\` parameters.
"
`;

exports[`invalid(6): 'console.log("_", " log ", "_")' > Output 1`] = `
"
  1 | console.log("_", "log", "_")
"
`;

exports[`invalid(7): 'console.debug("_", " debug ", "_")' > Code 1`] = `
"
  1 | console.debug("_", " debug ", "_")
"
`;

exports[`invalid(7): 'console.debug("_", " debug ", "_")' > Error 1/2 1`] = `
"
> 1 | console.debug("_", " debug ", "_")
    |                     ^ Do not use leading space between \`console.debug\` parameters.
"
`;

exports[`invalid(7): 'console.debug("_", " debug ", "_")' > Error 2/2 1`] = `
"
> 1 | console.debug("_", " debug ", "_")
    |                           ^ Do not use trailing space between \`console.debug\` parameters.
"
`;

exports[`invalid(7): 'console.debug("_", " debug ", "_")' > Output 1`] = `
"
  1 | console.debug("_", "debug", "_")
"
`;

exports[`invalid(8): 'console.info("_", " info ", "_")' > Code 1`] = `
"
  1 | console.info("_", " info ", "_")
"
`;

exports[`invalid(8): 'console.info("_", " info ", "_")' > Error 1/2 1`] = `
"
> 1 | console.info("_", " info ", "_")
    |                    ^ Do not use leading space between \`console.info\` parameters.
"
`;

exports[`invalid(8): 'console.info("_", " info ", "_")' > Error 2/2 1`] = `
"
> 1 | console.info("_", " info ", "_")
    |                         ^ Do not use trailing space between \`console.info\` parameters.
"
`;

exports[`invalid(8): 'console.info("_", " info ", "_")' > Output 1`] = `
"
  1 | console.info("_", "info", "_")
"
`;

exports[`invalid(9): 'console.warn("_", " warn ", "_")' > Code 1`] = `
"
  1 | console.warn("_", " warn ", "_")
"
`;

exports[`invalid(9): 'console.warn("_", " warn ", "_")' > Error 1/2 1`] = `
"
> 1 | console.warn("_", " warn ", "_")
    |                    ^ Do not use leading space between \`console.warn\` parameters.
"
`;

exports[`invalid(9): 'console.warn("_", " warn ", "_")' > Error 2/2 1`] = `
"
> 1 | console.warn("_", " warn ", "_")
    |                         ^ Do not use trailing space between \`console.warn\` parameters.
"
`;

exports[`invalid(9): 'console.warn("_", " warn ", "_")' > Output 1`] = `
"
  1 | console.warn("_", "warn", "_")
"
`;

exports[`invalid(10): 'console.error("_", " error ", "_")' > Code 1`] = `
"
  1 | console.error("_", " error ", "_")
"
`;

exports[`invalid(10): 'console.error("_", " error ", "_")' > Error 1/2 1`] = `
"
> 1 | console.error("_", " error ", "_")
    |                     ^ Do not use leading space between \`console.error\` parameters.
"
`;

exports[`invalid(10): 'console.error("_", " error ", "_")' > Error 2/2 1`] = `
"
> 1 | console.error("_", " error ", "_")
    |                           ^ Do not use trailing space between \`console.error\` parameters.
"
`;

exports[`invalid(10): 'console.error("_", " error ", "_")' > Output 1`] = `
"
  1 | console.error("_", "error", "_")
"
`;
