// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'fetch(url, {body})' > Code 1`] = `
"
  1 | fetch(url, {body})
"
`;

exports[`invalid(0): 'fetch(url, {body})' > Error 1/1 1`] = `
"
> 1 | fetch(url, {body})
    |             ^^^^ "body" is not allowed when method is "GET".
"
`;

exports[`invalid(1): 'new Request(url, {body})' > Code 1`] = `
"
  1 | new Request(url, {body})
"
`;

exports[`invalid(1): 'new Request(url, {body})' > Error 1/1 1`] = `
"
> 1 | new Request(url, {body})
    |                   ^^^^ "body" is not allowed when method is "GET".
"
`;

exports[`invalid(2): 'fetch(url, {method: "GET", body})' > Code 1`] = `
"
  1 | fetch(url, {method: "GET", body})
"
`;

exports[`invalid(2): 'fetch(url, {method: "GET", body})' > Error 1/1 1`] = `
"
> 1 | fetch(url, {method: "GET", body})
    |                            ^^^^ "body" is not allowed when method is "GET".
"
`;

exports[`invalid(3): 'new Request(url, {method: "GET", body…' > Code 1`] = `
"
  1 | new Request(url, {method: "GET", body})
"
`;

exports[`invalid(3): 'new Request(url, {method: "GET", body…' > Error 1/1 1`] = `
"
> 1 | new Request(url, {method: "GET", body})
    |                                  ^^^^ "body" is not allowed when method is "GET".
"
`;

exports[`invalid(4): 'fetch(url, {method: "HEAD", body})' > Code 1`] = `
"
  1 | fetch(url, {method: "HEAD", body})
"
`;

exports[`invalid(4): 'fetch(url, {method: "HEAD", body})' > Error 1/1 1`] = `
"
> 1 | fetch(url, {method: "HEAD", body})
    |                             ^^^^ "body" is not allowed when method is "HEAD".
"
`;

exports[`invalid(5): 'new Request(url, {method: "HEAD", bod…' > Code 1`] = `
"
  1 | new Request(url, {method: "HEAD", body})
"
`;

exports[`invalid(5): 'new Request(url, {method: "HEAD", bod…' > Error 1/1 1`] = `
"
> 1 | new Request(url, {method: "HEAD", body})
    |                                   ^^^^ "body" is not allowed when method is "HEAD".
"
`;

exports[`invalid(6): 'fetch(url, {method: "head", body})' > Code 1`] = `
"
  1 | fetch(url, {method: "head", body})
"
`;

exports[`invalid(6): 'fetch(url, {method: "head", body})' > Error 1/1 1`] = `
"
> 1 | fetch(url, {method: "head", body})
    |                             ^^^^ "body" is not allowed when method is "HEAD".
"
`;

exports[`invalid(7): 'new Request(url, {method: "head", bod…' > Code 1`] = `
"
  1 | new Request(url, {method: "head", body})
"
`;

exports[`invalid(7): 'new Request(url, {method: "head", bod…' > Error 1/1 1`] = `
"
> 1 | new Request(url, {method: "head", body})
    |                                   ^^^^ "body" is not allowed when method is "HEAD".
"
`;

exports[`invalid(8): 'const method = "head"; new Request(ur…' > Code 1`] = `
"
  1 | const method = "head"; new Request(url, {method, body: "foo=bar"})
"
`;

exports[`invalid(8): 'const method = "head"; new Request(ur…' > Error 1/1 1`] = `
"
> 1 | const method = "head"; new Request(url, {method, body: "foo=bar"})
    |                                                  ^^^^ "body" is not allowed when method is "HEAD".
"
`;

exports[`invalid(9): 'const method = "head"; fetch(url, {me…' > Code 1`] = `
"
  1 | const method = "head"; fetch(url, {method, body: "foo=bar"})
"
`;

exports[`invalid(9): 'const method = "head"; fetch(url, {me…' > Error 1/1 1`] = `
"
> 1 | const method = "head"; fetch(url, {method, body: "foo=bar"})
    |                                            ^^^^ "body" is not allowed when method is "HEAD".
"
`;

exports[`invalid(10): 'fetch(url, {body}, extraArgument)' > Code 1`] = `
"
  1 | fetch(url, {body}, extraArgument)
"
`;

exports[`invalid(10): 'fetch(url, {body}, extraArgument)' > Error 1/1 1`] = `
"
> 1 | fetch(url, {body}, extraArgument)
    |             ^^^^ "body" is not allowed when method is "GET".
"
`;

exports[`invalid(11): 'new Request(url, {body}, extraArgumen…' > Code 1`] = `
"
  1 | new Request(url, {body}, extraArgument)
"
`;

exports[`invalid(11): 'new Request(url, {body}, extraArgumen…' > Error 1/1 1`] = `
"
> 1 | new Request(url, {body}, extraArgument)
    |                   ^^^^ "body" is not allowed when method is "GET".
"
`;

exports[`invalid(12): 'fetch(url, {\\n\\tbody: undefined,\\n\\tb…' > Code 1`] = `
"
  1 | fetch(url, {
  2 | 	body: undefined,
  3 | 	body: 'foo=bar',
  4 | });
"
`;

exports[`invalid(12): 'fetch(url, {\\n\\tbody: undefined,\\n\\tb…' > Error 1/1 1`] = `
"
  1 | fetch(url, {
  2 | 	body: undefined,
> 3 | 	body: 'foo=bar',
    | 	^^^^ "body" is not allowed when method is "GET".
  4 | });
"
`;

exports[`invalid(13): 'new Request(url, {\\n\\tbody: undefined…' > Code 1`] = `
"
  1 | new Request(url, {
  2 | 	body: undefined,
  3 | 	body: 'foo=bar',
  4 | });
"
`;

exports[`invalid(13): 'new Request(url, {\\n\\tbody: undefined…' > Error 1/1 1`] = `
"
  1 | new Request(url, {
  2 | 	body: undefined,
> 3 | 	body: 'foo=bar',
    | 	^^^^ "body" is not allowed when method is "GET".
  4 | });
"
`;

exports[`invalid(14): 'fetch(url, {\\n\\tmethod: \\'post\\',\\n\\t…' > Code 1`] = `
"
  1 | fetch(url, {
  2 | 	method: 'post',
  3 | 	body: 'foo=bar',
  4 | 	method: 'HEAD',
  5 | });
"
`;

exports[`invalid(14): 'fetch(url, {\\n\\tmethod: \\'post\\',\\n\\t…' > Error 1/1 1`] = `
"
  1 | fetch(url, {
  2 | 	method: 'post',
> 3 | 	body: 'foo=bar',
    | 	^^^^ "body" is not allowed when method is "HEAD".
  4 | 	method: 'HEAD',
  5 | });
"
`;

exports[`invalid(15): 'new Request(url, {\\n\\tmethod: \\'post\\…' > Code 1`] = `
"
  1 | new Request(url, {
  2 | 	method: 'post',
  3 | 	body: 'foo=bar',
  4 | 	method: 'HEAD',
  5 | });
"
`;

exports[`invalid(15): 'new Request(url, {\\n\\tmethod: \\'post\\…' > Error 1/1 1`] = `
"
  1 | new Request(url, {
  2 | 	method: 'post',
> 3 | 	body: 'foo=bar',
    | 	^^^^ "body" is not allowed when method is "HEAD".
  4 | 	method: 'HEAD',
  5 | });
"
`;
