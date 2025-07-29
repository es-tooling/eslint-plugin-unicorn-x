// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'window.addEventListener(\\'click\\', ({…' > Code 1`] = `
"
  1 | window.addEventListener('click', ({which, another}) => {
  2 | 	if (which === 23) {
  3 | 		console.log('Wrong!')
  4 | 	}
  5 | })
"
`;

exports[`invalid(0): 'window.addEventListener(\\'click\\', ({…' > Error 1/1 1`] = `
"
> 1 | window.addEventListener('click', ({which, another}) => {
    |                                    ^^^^^ Use \`.key\` instead of \`.which\`.
  2 | 	if (which === 23) {
  3 | 		console.log('Wrong!')
  4 | 	}
  5 | })
"
`;

exports[`invalid(1): 'foo123.addEventListener(\\'click\\', ev…' > Code 1`] = `
"
  1 | foo123.addEventListener('click', event => {
  2 | 	if (event.keyCode === 27) {
  3 | 	}
  4 | });
"
`;

exports[`invalid(1): 'foo123.addEventListener(\\'click\\', ev…' > Error 1/1 1`] = `
"
  1 | foo123.addEventListener('click', event => {
> 2 | 	if (event.keyCode === 27) {
    | 	          ^^^^^^^ Use \`.key\` instead of \`.keyCode\`.
  3 | 	}
  4 | });
"
`;

exports[`invalid(1): 'foo123.addEventListener(\\'click\\', ev…' > Output 1`] = `
"
  1 | foo123.addEventListener('click', event => {
  2 | 	if (event.key === 'Escape') {
  3 | 	}
  4 | });
"
`;
