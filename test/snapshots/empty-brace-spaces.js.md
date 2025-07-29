// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'try {\\n\\tfoo();\\n} catch (error) {\\n\\…' > Code 1`] = `
"
  1 | try {
  2 | 	foo();
  3 | } catch (error) {
  4 | 	       
  5 | }
"
`;

exports[`invalid(0): 'try {\\n\\tfoo();\\n} catch (error) {\\n\\…' > Error 1/1 1`] = `
"
  1 | try {
  2 | 	foo();
> 3 | } catch (error) {
    |                  ^
> 4 | 	       
    | ^^^^^^^^
> 5 | }
    | ^ Do not add spaces between braces.
"
`;

exports[`invalid(0): 'try {\\n\\tfoo();\\n} catch (error) {\\n\\…' > Output 1`] = `
"
  1 | try {
  2 | 	foo();
  3 | } catch (error) {}
"
`;
