// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'window.postMessage(message)' > Code 1`] = `
"
  1 | window.postMessage(message)
"
`;

exports[`invalid(0): 'window.postMessage(message)' > Error 1/1 1`] = `
"
> 1 | window.postMessage(message)
    |                           ^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/2: Use \`window.location.origin\`.
  1 | window.postMessage(message, window.location.origin)

--------------------------------------------------------------------------------
Suggestion 2/2: Use \`'*'\`.
  1 | window.postMessage(message, '*')
"
`;

exports[`invalid(1): 'self.postMessage(message)' > Code 1`] = `
"
  1 | self.postMessage(message)
"
`;

exports[`invalid(1): 'self.postMessage(message)' > Error 1/1 1`] = `
"
> 1 | self.postMessage(message)
    |                         ^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/2: Use \`self.location.origin\`.
  1 | self.postMessage(message, self.location.origin)

--------------------------------------------------------------------------------
Suggestion 2/2: Use \`'*'\`.
  1 | self.postMessage(message, '*')
"
`;

exports[`invalid(2): 'globalThis.postMessage(message)' > Code 1`] = `
"
  1 | globalThis.postMessage(message)
"
`;

exports[`invalid(2): 'globalThis.postMessage(message)' > Error 1/1 1`] = `
"
> 1 | globalThis.postMessage(message)
    |                               ^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/2: Use \`globalThis.location.origin\`.
  1 | globalThis.postMessage(message, globalThis.location.origin)

--------------------------------------------------------------------------------
Suggestion 2/2: Use \`'*'\`.
  1 | globalThis.postMessage(message, '*')
"
`;

exports[`invalid(3): 'foo.postMessage(message )' > Code 1`] = `
"
  1 | foo.postMessage(message )
"
`;

exports[`invalid(3): 'foo.postMessage(message )' > Error 1/1 1`] = `
"
> 1 | foo.postMessage(message )
    |                        ^^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/3: Use \`foo.location.origin\`.
  1 | foo.postMessage(message , foo.location.origin)

--------------------------------------------------------------------------------
Suggestion 2/3: Use \`self.location.origin\`.
  1 | foo.postMessage(message , self.location.origin)

--------------------------------------------------------------------------------
Suggestion 3/3: Use \`'*'\`.
  1 | foo.postMessage(message , '*')
"
`;

exports[`invalid(4): 'foo.postMessage( ((message)) )' > Code 1`] = `
"
  1 | foo.postMessage( ((message)) )
"
`;

exports[`invalid(4): 'foo.postMessage( ((message)) )' > Error 1/1 1`] = `
"
> 1 | foo.postMessage( ((message)) )
    |                             ^^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/3: Use \`foo.location.origin\`.
  1 | foo.postMessage( ((message)) , foo.location.origin)

--------------------------------------------------------------------------------
Suggestion 2/3: Use \`self.location.origin\`.
  1 | foo.postMessage( ((message)) , self.location.origin)

--------------------------------------------------------------------------------
Suggestion 3/3: Use \`'*'\`.
  1 | foo.postMessage( ((message)) , '*')
"
`;

exports[`invalid(5): 'foo.postMessage(message,)' > Code 1`] = `
"
  1 | foo.postMessage(message,)
"
`;

exports[`invalid(5): 'foo.postMessage(message,)' > Error 1/1 1`] = `
"
> 1 | foo.postMessage(message,)
    |                         ^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/3: Use \`foo.location.origin\`.
  1 | foo.postMessage(message, foo.location.origin,)

--------------------------------------------------------------------------------
Suggestion 2/3: Use \`self.location.origin\`.
  1 | foo.postMessage(message, self.location.origin,)

--------------------------------------------------------------------------------
Suggestion 3/3: Use \`'*'\`.
  1 | foo.postMessage(message, '*',)
"
`;

exports[`invalid(6): 'foo.postMessage(message , )' > Code 1`] = `
"
  1 | foo.postMessage(message , )
"
`;

exports[`invalid(6): 'foo.postMessage(message , )' > Error 1/1 1`] = `
"
> 1 | foo.postMessage(message , )
    |                          ^^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/3: Use \`foo.location.origin\`.
  1 | foo.postMessage(message ,  foo.location.origin,)

--------------------------------------------------------------------------------
Suggestion 2/3: Use \`self.location.origin\`.
  1 | foo.postMessage(message ,  self.location.origin,)

--------------------------------------------------------------------------------
Suggestion 3/3: Use \`'*'\`.
  1 | foo.postMessage(message ,  '*',)
"
`;

exports[`invalid(7): 'foo.window.postMessage(message)' > Code 1`] = `
"
  1 | foo.window.postMessage(message)
"
`;

exports[`invalid(7): 'foo.window.postMessage(message)' > Error 1/1 1`] = `
"
> 1 | foo.window.postMessage(message)
    |                               ^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/2: Use \`self.location.origin\`.
  1 | foo.window.postMessage(message, self.location.origin)

--------------------------------------------------------------------------------
Suggestion 2/2: Use \`'*'\`.
  1 | foo.window.postMessage(message, '*')
"
`;

exports[`invalid(8): 'document.defaultView.postMessage(mess…' > Code 1`] = `
"
  1 | document.defaultView.postMessage(message)
"
`;

exports[`invalid(8): 'document.defaultView.postMessage(mess…' > Error 1/1 1`] = `
"
> 1 | document.defaultView.postMessage(message)
    |                                         ^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/2: Use \`self.location.origin\`.
  1 | document.defaultView.postMessage(message, self.location.origin)

--------------------------------------------------------------------------------
Suggestion 2/2: Use \`'*'\`.
  1 | document.defaultView.postMessage(message, '*')
"
`;

exports[`invalid(9): 'getWindow().postMessage(message)' > Code 1`] = `
"
  1 | getWindow().postMessage(message)
"
`;

exports[`invalid(9): 'getWindow().postMessage(message)' > Error 1/1 1`] = `
"
> 1 | getWindow().postMessage(message)
    |                                ^ Missing the \`targetOrigin\` argument.

--------------------------------------------------------------------------------
Suggestion 1/2: Use \`self.location.origin\`.
  1 | getWindow().postMessage(message, self.location.origin)

--------------------------------------------------------------------------------
Suggestion 2/2: Use \`'*'\`.
  1 | getWindow().postMessage(message, '*')
"
`;
