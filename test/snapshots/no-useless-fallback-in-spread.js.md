// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const object = {...(foo || {})}' > Code 1`] = `
"
  1 | const object = {...(foo || {})}
"
`;

exports[`invalid(0): 'const object = {...(foo || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(foo || {})}
    |                            ^^ The empty object is useless.
"
`;

exports[`invalid(0): 'const object = {...(foo || {})}' > Output 1`] = `
"
  1 | const object = {...foo}
"
`;

exports[`invalid(1): 'const object = {...(foo ?? {})}' > Code 1`] = `
"
  1 | const object = {...(foo ?? {})}
"
`;

exports[`invalid(1): 'const object = {...(foo ?? {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(foo ?? {})}
    |                            ^^ The empty object is useless.
"
`;

exports[`invalid(1): 'const object = {...(foo ?? {})}' > Output 1`] = `
"
  1 | const object = {...foo}
"
`;

exports[`invalid(2): 'const object = {...(foo ?? (( {} )))}' > Code 1`] = `
"
  1 | const object = {...(foo ?? (( {} )))}
"
`;

exports[`invalid(2): 'const object = {...(foo ?? (( {} )))}' > Error 1/1 1`] = `
"
> 1 | const object = {...(foo ?? (( {} )))}
    |                               ^^ The empty object is useless.
"
`;

exports[`invalid(2): 'const object = {...(foo ?? (( {} )))}' > Output 1`] = `
"
  1 | const object = {...foo}
"
`;

exports[`invalid(3): 'const object = {...((( foo )) ?? (( {…' > Code 1`] = `
"
  1 | const object = {...((( foo )) ?? (( {} )))}
"
`;

exports[`invalid(3): 'const object = {...((( foo )) ?? (( {…' > Error 1/1 1`] = `
"
> 1 | const object = {...((( foo )) ?? (( {} )))}
    |                                     ^^ The empty object is useless.
"
`;

exports[`invalid(3): 'const object = {...((( foo )) ?? (( {…' > Output 1`] = `
"
  1 | const object = {...(( foo ))}
"
`;

exports[`invalid(4): 'const object = {...(( (( foo )) ?? ((…' > Code 1`] = `
"
  1 | const object = {...(( (( foo )) ?? (( {} )) ))}
"
`;

exports[`invalid(4): 'const object = {...(( (( foo )) ?? ((…' > Error 1/1 1`] = `
"
> 1 | const object = {...(( (( foo )) ?? (( {} )) ))}
    |                                       ^^ The empty object is useless.
"
`;

exports[`invalid(4): 'const object = {...(( (( foo )) ?? ((…' > Output 1`] = `
"
  1 | const object = {... (( foo )) }
"
`;

exports[`invalid(5): 'async ()=> ({...((await foo) || {})})' > Code 1`] = `
"
  1 | async ()=> ({...((await foo) || {})})
"
`;

exports[`invalid(5): 'async ()=> ({...((await foo) || {})})' > Error 1/1 1`] = `
"
> 1 | async ()=> ({...((await foo) || {})})
    |                                 ^^ The empty object is useless.
"
`;

exports[`invalid(5): 'async ()=> ({...((await foo) || {})})' > Output 1`] = `
"
  1 | async ()=> ({...(await foo)})
"
`;

exports[`invalid(6): 'const object = {...(0 || {})}' > Code 1`] = `
"
  1 | const object = {...(0 || {})}
"
`;

exports[`invalid(6): 'const object = {...(0 || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(0 || {})}
    |                          ^^ The empty object is useless.
"
`;

exports[`invalid(6): 'const object = {...(0 || {})}' > Output 1`] = `
"
  1 | const object = {...0}
"
`;

exports[`invalid(7): 'const object = {...((-0) || {})}' > Code 1`] = `
"
  1 | const object = {...((-0) || {})}
"
`;

exports[`invalid(7): 'const object = {...((-0) || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...((-0) || {})}
    |                             ^^ The empty object is useless.
"
`;

exports[`invalid(7): 'const object = {...((-0) || {})}' > Output 1`] = `
"
  1 | const object = {...(-0)}
"
`;

exports[`invalid(8): 'const object = {...(.0 || {})}' > Code 1`] = `
"
  1 | const object = {...(.0 || {})}
"
`;

exports[`invalid(8): 'const object = {...(.0 || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(.0 || {})}
    |                           ^^ The empty object is useless.
"
`;

exports[`invalid(8): 'const object = {...(.0 || {})}' > Output 1`] = `
"
  1 | const object = {....0}
"
`;

exports[`invalid(9): 'const object = {...(0n || {})}' > Code 1`] = `
"
  1 | const object = {...(0n || {})}
"
`;

exports[`invalid(9): 'const object = {...(0n || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(0n || {})}
    |                           ^^ The empty object is useless.
"
`;

exports[`invalid(9): 'const object = {...(0n || {})}' > Output 1`] = `
"
  1 | const object = {...0n}
"
`;

exports[`invalid(10): 'const object = {...(false || {})}' > Code 1`] = `
"
  1 | const object = {...(false || {})}
"
`;

exports[`invalid(10): 'const object = {...(false || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(false || {})}
    |                              ^^ The empty object is useless.
"
`;

exports[`invalid(10): 'const object = {...(false || {})}' > Output 1`] = `
"
  1 | const object = {...false}
"
`;

exports[`invalid(11): 'const object = {...(null || {})}' > Code 1`] = `
"
  1 | const object = {...(null || {})}
"
`;

exports[`invalid(11): 'const object = {...(null || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(null || {})}
    |                             ^^ The empty object is useless.
"
`;

exports[`invalid(11): 'const object = {...(null || {})}' > Output 1`] = `
"
  1 | const object = {...null}
"
`;

exports[`invalid(12): 'const object = {...(undefined || {})}' > Code 1`] = `
"
  1 | const object = {...(undefined || {})}
"
`;

exports[`invalid(12): 'const object = {...(undefined || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(undefined || {})}
    |                                  ^^ The empty object is useless.
"
`;

exports[`invalid(12): 'const object = {...(undefined || {})}' > Output 1`] = `
"
  1 | const object = {...undefined}
"
`;

exports[`invalid(13): 'const object = {...((a && b) || {})}' > Code 1`] = `
"
  1 | const object = {...((a && b) || {})}
"
`;

exports[`invalid(13): 'const object = {...((a && b) || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...((a && b) || {})}
    |                                 ^^ The empty object is useless.
"
`;

exports[`invalid(13): 'const object = {...((a && b) || {})}' > Output 1`] = `
"
  1 | const object = {...(a && b)}
"
`;

exports[`invalid(14): 'const object = {...(NaN || {})}' > Code 1`] = `
"
  1 | const object = {...(NaN || {})}
"
`;

exports[`invalid(14): 'const object = {...(NaN || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(NaN || {})}
    |                            ^^ The empty object is useless.
"
`;

exports[`invalid(14): 'const object = {...(NaN || {})}' > Output 1`] = `
"
  1 | const object = {...NaN}
"
`;

exports[`invalid(15): 'const object = {...("" || {})}' > Code 1`] = `
"
  1 | const object = {...("" || {})}
"
`;

exports[`invalid(15): 'const object = {...("" || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...("" || {})}
    |                           ^^ The empty object is useless.
"
`;

exports[`invalid(15): 'const object = {...("" || {})}' > Output 1`] = `
"
  1 | const object = {...""}
"
`;

exports[`invalid(16): 'const object = {...([] || {})}' > Code 1`] = `
"
  1 | const object = {...([] || {})}
"
`;

exports[`invalid(16): 'const object = {...([] || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...([] || {})}
    |                           ^^ The empty object is useless.
"
`;

exports[`invalid(16): 'const object = {...([] || {})}' > Output 1`] = `
"
  1 | const object = {...[]}
"
`;

exports[`invalid(17): 'const object = {...({} || {})}' > Code 1`] = `
"
  1 | const object = {...({} || {})}
"
`;

exports[`invalid(17): 'const object = {...({} || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...({} || {})}
    |                           ^^ The empty object is useless.
"
`;

exports[`invalid(17): 'const object = {...({} || {})}' > Output 1`] = `
"
  1 | const object = {...{}}
"
`;

exports[`invalid(18): 'const object = {...(foo || {}),}' > Code 1`] = `
"
  1 | const object = {...(foo || {}),}
"
`;

exports[`invalid(18): 'const object = {...(foo || {}),}' > Error 1/1 1`] = `
"
> 1 | const object = {...(foo || {}),}
    |                            ^^ The empty object is useless.
"
`;

exports[`invalid(18): 'const object = {...(foo || {}),}' > Output 1`] = `
"
  1 | const object = {...foo,}
"
`;

exports[`invalid(19): 'const object = {...((foo ?? {}) || {}…' > Code 1`] = `
"
  1 | const object = {...((foo ?? {}) || {})}
"
`;

exports[`invalid(19): 'const object = {...((foo ?? {}) || {}…' > Error 1/1 1`] = `
"
> 1 | const object = {...((foo ?? {}) || {})}
    |                                    ^^ The empty object is useless.
"
`;

exports[`invalid(19): 'const object = {...((foo ?? {}) || {}…' > Output 1`] = `
"
  1 | const object = {...foo}
"
`;

exports[`invalid(20): 'const object = {...((foo && {}) || {}…' > Code 1`] = `
"
  1 | const object = {...((foo && {}) || {})}
"
`;

exports[`invalid(20): 'const object = {...((foo && {}) || {}…' > Error 1/1 1`] = `
"
> 1 | const object = {...((foo && {}) || {})}
    |                                    ^^ The empty object is useless.
"
`;

exports[`invalid(20): 'const object = {...((foo && {}) || {}…' > Output 1`] = `
"
  1 | const object = {...(foo && {})}
"
`;

exports[`invalid(21): 'const object = {...(foo && {} || {})}' > Code 1`] = `
"
  1 | const object = {...(foo && {} || {})}
"
`;

exports[`invalid(21): 'const object = {...(foo && {} || {})}' > Error 1/1 1`] = `
"
> 1 | const object = {...(foo && {} || {})}
    |                                  ^^ The empty object is useless.
"
`;

exports[`invalid(21): 'const object = {...(foo && {} || {})}' > Output 1`] = `
"
  1 | const object = {...foo && {}}
"
`;

exports[`invalid(22): 'const object = {...({...(foo || {})})}' > Code 1`] = `
"
  1 | const object = {...({...(foo || {})})}
"
`;

exports[`invalid(22): 'const object = {...({...(foo || {})})}' > Error 1/1 1`] = `
"
> 1 | const object = {...({...(foo || {})})}
    |                                 ^^ The empty object is useless.
"
`;

exports[`invalid(22): 'const object = {...({...(foo || {})})}' > Output 1`] = `
"
  1 | const object = {...({...foo})}
"
`;

exports[`invalid(23): 'const object = {...({...((0, foo) || …' > Code 1`] = `
"
  1 | const object = {...({...((0, foo) || {})})}
"
`;

exports[`invalid(23): 'const object = {...({...((0, foo) || …' > Error 1/1 1`] = `
"
> 1 | const object = {...({...((0, foo) || {})})}
    |                                      ^^ The empty object is useless.
"
`;

exports[`invalid(23): 'const object = {...({...((0, foo) || …' > Output 1`] = `
"
  1 | const object = {...({...(0, foo)})}
"
`;

exports[`invalid(24): 'function foo(a = {...(bar || {})}){}' > Code 1`] = `
"
  1 | function foo(a = {...(bar || {})}){}
"
`;

exports[`invalid(24): 'function foo(a = {...(bar || {})}){}' > Error 1/1 1`] = `
"
> 1 | function foo(a = {...(bar || {})}){}
    |                              ^^ The empty object is useless.
"
`;

exports[`invalid(24): 'function foo(a = {...(bar || {})}){}' > Output 1`] = `
"
  1 | function foo(a = {...bar}){}
"
`;

exports[`invalid(25): 'const object = {...(document.all || {…' > Code 1`] = `
"
  1 | const object = {...(document.all || {})}
"
`;

exports[`invalid(25): 'const object = {...(document.all || {…' > Error 1/1 1`] = `
"
> 1 | const object = {...(document.all || {})}
    |                                     ^^ The empty object is useless.
"
`;

exports[`invalid(25): 'const object = {...(document.all || {…' > Output 1`] = `
"
  1 | const object = {...document.all}
"
`;
