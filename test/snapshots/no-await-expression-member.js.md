// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '(await promise)[0]' > Code 1`] = `
"
  1 | (await promise)[0]
"
`;

exports[`invalid(0): '(await promise)[0]' > Error 1/1 1`] = `
"
> 1 | (await promise)[0]
    |                 ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(1): '(await promise).property' > Code 1`] = `
"
  1 | (await promise).property
"
`;

exports[`invalid(1): '(await promise).property' > Error 1/1 1`] = `
"
> 1 | (await promise).property
    |                 ^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(2): 'const foo = (await promise).bar()' > Code 1`] = `
"
  1 | const foo = (await promise).bar()
"
`;

exports[`invalid(2): 'const foo = (await promise).bar()' > Error 1/1 1`] = `
"
> 1 | const foo = (await promise).bar()
    |                             ^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(3): 'const foo = (await promise).bar?.()' > Code 1`] = `
"
  1 | const foo = (await promise).bar?.()
"
`;

exports[`invalid(3): 'const foo = (await promise).bar?.()' > Error 1/1 1`] = `
"
> 1 | const foo = (await promise).bar?.()
    |                             ^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(4): 'const foo = (await promise)?.bar()' > Code 1`] = `
"
  1 | const foo = (await promise)?.bar()
"
`;

exports[`invalid(4): 'const foo = (await promise)?.bar()' > Error 1/1 1`] = `
"
> 1 | const foo = (await promise)?.bar()
    |                              ^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(5): 'const firstElement = (await getArray(…' > Code 1`] = `
"
  1 | const firstElement = (await getArray())[0]
"
`;

exports[`invalid(5): 'const firstElement = (await getArray(…' > Error 1/1 1`] = `
"
> 1 | const firstElement = (await getArray())[0]
    |                                         ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(5): 'const firstElement = (await getArray(…' > Output 1`] = `
"
  1 | const [firstElement] = await getArray()
"
`;

exports[`invalid(6): 'const secondElement = (await getArray…' > Code 1`] = `
"
  1 | const secondElement = (await getArray())[1]
"
`;

exports[`invalid(6): 'const secondElement = (await getArray…' > Error 1/1 1`] = `
"
> 1 | const secondElement = (await getArray())[1]
    |                                          ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(6): 'const secondElement = (await getArray…' > Output 1`] = `
"
  1 | const [, secondElement] = await getArray()
"
`;

exports[`invalid(7): 'const thirdElement = (await getArray(…' > Code 1`] = `
"
  1 | const thirdElement = (await getArray())[2]
"
`;

exports[`invalid(7): 'const thirdElement = (await getArray(…' > Error 1/1 1`] = `
"
> 1 | const thirdElement = (await getArray())[2]
    |                                         ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(8): 'const optionalFirstElement = (await g…' > Code 1`] = `
"
  1 | const optionalFirstElement = (await getArray())?.[0]
"
`;

exports[`invalid(8): 'const optionalFirstElement = (await g…' > Error 1/1 1`] = `
"
> 1 | const optionalFirstElement = (await getArray())?.[0]
    |                                                   ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(9): 'const {propertyOfFirstElement} = (awa…' > Code 1`] = `
"
  1 | const {propertyOfFirstElement} = (await getArray())[0]
"
`;

exports[`invalid(9): 'const {propertyOfFirstElement} = (awa…' > Error 1/1 1`] = `
"
> 1 | const {propertyOfFirstElement} = (await getArray())[0]
    |                                                     ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(10): 'const [firstElementOfFirstElement] = …' > Code 1`] = `
"
  1 | const [firstElementOfFirstElement] = (await getArray())[0]
"
`;

exports[`invalid(10): 'const [firstElementOfFirstElement] = …' > Error 1/1 1`] = `
"
> 1 | const [firstElementOfFirstElement] = (await getArray())[0]
    |                                                         ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(11): 'let foo, firstElement = (await getArr…' > Code 1`] = `
"
  1 | let foo, firstElement = (await getArray())[0]
"
`;

exports[`invalid(11): 'let foo, firstElement = (await getArr…' > Error 1/1 1`] = `
"
> 1 | let foo, firstElement = (await getArray())[0]
    |                                            ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(11): 'let foo, firstElement = (await getArr…' > Output 1`] = `
"
  1 | let foo, [firstElement] = await getArray()
"
`;

exports[`invalid(12): 'var firstElement = (await getArray())…' > Code 1`] = `
"
  1 | var firstElement = (await getArray())[0], bar
"
`;

exports[`invalid(12): 'var firstElement = (await getArray())…' > Error 1/1 1`] = `
"
> 1 | var firstElement = (await getArray())[0], bar
    |                                       ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(12): 'var firstElement = (await getArray())…' > Output 1`] = `
"
  1 | var [firstElement] = await getArray(), bar
"
`;

exports[`invalid(13): 'const property = (await getObject()).…' > Code 1`] = `
"
  1 | const property = (await getObject()).property
"
`;

exports[`invalid(13): 'const property = (await getObject()).…' > Error 1/1 1`] = `
"
> 1 | const property = (await getObject()).property
    |                                      ^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(13): 'const property = (await getObject()).…' > Output 1`] = `
"
  1 | const {property} = await getObject()
"
`;

exports[`invalid(14): 'const renamed = (await getObject()).p…' > Code 1`] = `
"
  1 | const renamed = (await getObject()).property
"
`;

exports[`invalid(14): 'const renamed = (await getObject()).p…' > Error 1/1 1`] = `
"
> 1 | const renamed = (await getObject()).property
    |                                     ^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(15): 'const property = (await getObject())[…' > Code 1`] = `
"
  1 | const property = (await getObject())[property]
"
`;

exports[`invalid(15): 'const property = (await getObject())[…' > Error 1/1 1`] = `
"
> 1 | const property = (await getObject())[property]
    |                                      ^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(16): 'const property = (await getObject())?…' > Code 1`] = `
"
  1 | const property = (await getObject())?.property
"
`;

exports[`invalid(16): 'const property = (await getObject())?…' > Error 1/1 1`] = `
"
> 1 | const property = (await getObject())?.property
    |                                       ^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(17): 'const {propertyOfProperty} = (await g…' > Code 1`] = `
"
  1 | const {propertyOfProperty} = (await getObject()).property
"
`;

exports[`invalid(17): 'const {propertyOfProperty} = (await g…' > Error 1/1 1`] = `
"
> 1 | const {propertyOfProperty} = (await getObject()).property
    |                                                  ^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(18): 'const {propertyOfProperty} = (await g…' > Code 1`] = `
"
  1 | const {propertyOfProperty} = (await getObject()).propertyOfProperty
"
`;

exports[`invalid(18): 'const {propertyOfProperty} = (await g…' > Error 1/1 1`] = `
"
> 1 | const {propertyOfProperty} = (await getObject()).propertyOfProperty
    |                                                  ^^^^^^^^^^^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(19): 'const [firstElementOfProperty] = (awa…' > Code 1`] = `
"
  1 | const [firstElementOfProperty] = (await getObject()).property
"
`;

exports[`invalid(19): 'const [firstElementOfProperty] = (awa…' > Error 1/1 1`] = `
"
> 1 | const [firstElementOfProperty] = (await getObject()).property
    |                                                      ^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(20): 'const [firstElementOfProperty] = (awa…' > Code 1`] = `
"
  1 | const [firstElementOfProperty] = (await getObject()).firstElementOfProperty
"
`;

exports[`invalid(20): 'const [firstElementOfProperty] = (awa…' > Error 1/1 1`] = `
"
> 1 | const [firstElementOfProperty] = (await getObject()).firstElementOfProperty
    |                                                      ^^^^^^^^^^^^^^^^^^^^^^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(21): 'firstElement = (await getArray())[0]' > Code 1`] = `
"
  1 | firstElement = (await getArray())[0]
"
`;

exports[`invalid(21): 'firstElement = (await getArray())[0]' > Error 1/1 1`] = `
"
> 1 | firstElement = (await getArray())[0]
    |                                   ^ Do not access a member directly from an await expression.
"
`;

exports[`invalid(22): 'property = (await getArray()).property' > Code 1`] = `
"
  1 | property = (await getArray()).property
"
`;

exports[`invalid(22): 'property = (await getArray()).property' > Error 1/1 1`] = `
"
> 1 | property = (await getArray()).property
    |                               ^^^^^^^^ Do not access a member directly from an await expression.
"
`;
