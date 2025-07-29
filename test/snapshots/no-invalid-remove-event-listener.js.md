// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'window.removeEventListener("scroll", …' > Code 1`] = `
"
  1 | window.removeEventListener("scroll", handler.bind(abc))
"
`;

exports[`invalid(0): 'window.removeEventListener("scroll", …' > Error 1/1 1`] = `
"
> 1 | window.removeEventListener("scroll", handler.bind(abc))
    |                                              ^^^^ The listener argument should be a function reference.
"
`;

exports[`invalid(1): 'window.removeEventListener("scroll", …' > Code 1`] = `
"
  1 | window.removeEventListener("scroll", this.handler.bind(abc))
"
`;

exports[`invalid(1): 'window.removeEventListener("scroll", …' > Error 1/1 1`] = `
"
> 1 | window.removeEventListener("scroll", this.handler.bind(abc))
    |                                                   ^^^^ The listener argument should be a function reference.
"
`;

exports[`invalid(2): 'window.removeEventListener("click", (…' > Code 1`] = `
"
  1 | window.removeEventListener("click", () => {})
"
`;

exports[`invalid(2): 'window.removeEventListener("click", (…' > Error 1/1 1`] = `
"
> 1 | window.removeEventListener("click", () => {})
    |                                        ^^ The listener argument should be a function reference.
"
`;

exports[`invalid(3): 'window.removeEventListener("keydown",…' > Code 1`] = `
"
  1 | window.removeEventListener("keydown", function () {})
"
`;

exports[`invalid(3): 'window.removeEventListener("keydown",…' > Error 1/1 1`] = `
"
> 1 | window.removeEventListener("keydown", function () {})
    |                                       ^^^^^^^^^ The listener argument should be a function reference.
"
`;

exports[`invalid(4): 'el.removeEventListener("click", (e) =…' > Code 1`] = `
"
  1 | el.removeEventListener("click", (e) => { e.preventDefault(); })
"
`;

exports[`invalid(4): 'el.removeEventListener("click", (e) =…' > Error 1/1 1`] = `
"
> 1 | el.removeEventListener("click", (e) => { e.preventDefault(); })
    |                                     ^^ The listener argument should be a function reference.
"
`;

exports[`invalid(5): 'el.removeEventListener("mouseover", f…' > Code 1`] = `
"
  1 | el.removeEventListener("mouseover", fn.bind(abc))
"
`;

exports[`invalid(5): 'el.removeEventListener("mouseover", f…' > Error 1/1 1`] = `
"
> 1 | el.removeEventListener("mouseover", fn.bind(abc))
    |                                        ^^^^ The listener argument should be a function reference.
"
`;

exports[`invalid(6): 'el.removeEventListener("mouseout", fu…' > Code 1`] = `
"
  1 | el.removeEventListener("mouseout", function (e) {})
"
`;

exports[`invalid(6): 'el.removeEventListener("mouseout", fu…' > Error 1/1 1`] = `
"
> 1 | el.removeEventListener("mouseout", function (e) {})
    |                                    ^^^^^^^^^ The listener argument should be a function reference.
"
`;

exports[`invalid(7): 'el.removeEventListener("mouseout", fu…' > Code 1`] = `
"
  1 | el.removeEventListener("mouseout", function (e) {}, true)
"
`;

exports[`invalid(7): 'el.removeEventListener("mouseout", fu…' > Error 1/1 1`] = `
"
> 1 | el.removeEventListener("mouseout", function (e) {}, true)
    |                                    ^^^^^^^^^ The listener argument should be a function reference.
"
`;

exports[`invalid(8): 'el.removeEventListener("click", funct…' > Code 1`] = `
"
  1 | el.removeEventListener("click", function (e) {}, ...moreArguments)
"
`;

exports[`invalid(8): 'el.removeEventListener("click", funct…' > Error 1/1 1`] = `
"
> 1 | el.removeEventListener("click", function (e) {}, ...moreArguments)
    |                                 ^^^^^^^^^ The listener argument should be a function reference.
"
`;

exports[`invalid(9): 'el.removeEventListener(() => {}, () =…' > Code 1`] = `
"
  1 | el.removeEventListener(() => {}, () => {}, () => {})
"
`;

exports[`invalid(9): 'el.removeEventListener(() => {}, () =…' > Error 1/1 1`] = `
"
> 1 | el.removeEventListener(() => {}, () => {}, () => {})
    |                                     ^^ The listener argument should be a function reference.
"
`;
