// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'switch(foo) {\\n\\tdefault: {\\n\\t\\tdoSo…' > Code 1`] = `
"
  1 | switch(foo) {
  2 | 	default: {
  3 | 		doSomething();
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'switch(foo) {\\n\\tdefault: {\\n\\t\\tdoSo…' > Error 1/1 1`] = `
"
  1 | switch(foo) {
> 2 | 	default: {
    | 	         ^ Unnecessary braces in case clause.
  3 | 		doSomething();
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'switch(foo) {\\n\\tdefault: {\\n\\t\\tdoSo…' > Options 1`] = `
"
[
  "avoid"
]
"
`;

exports[`invalid(0): 'switch(foo) {\\n\\tdefault: {\\n\\t\\tdoSo…' > Output 1`] = `
"
  1 | switch(foo) {
  2 | 	default:
  3 | 		doSomething();
  4 | 	
  5 | }
"
`;

exports[`invalid(0): 'switch(foo) {\\n\\tdefault:\\n\\t\\tdoSome…' > Code 1`] = `
"
  1 | switch(foo) {
  2 | 	default:
  3 | 		doSomething();
  4 | }
"
`;

exports[`invalid(0): 'switch(foo) {\\n\\tdefault:\\n\\t\\tdoSome…' > Error 1/1 1`] = `
"
  1 | switch(foo) {
> 2 | 	default:
    | 	^^^^^^^^ Missing braces in case clause.
  3 | 		doSomething();
  4 | }
"
`;

exports[`invalid(0): 'switch(foo) {\\n\\tdefault:\\n\\t\\tdoSome…' > Output 1`] = `
"
  1 | switch(foo) {
  2 | 	default: {
  3 | 		doSomething();
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'switch(foo){\\n\\tcase 1: {\\n\\t}\\n\\tcas…' > Code 1`] = `
"
  1 | switch(foo){
  2 | 	case 1: {
  3 | 	}
  4 | 	case 2: {
  5 | 	}
  6 | 	default: {
  7 | 		doSomething();
  8 | 	}
  9 | }
"
`;

exports[`invalid(0): 'switch(foo){\\n\\tcase 1: {\\n\\t}\\n\\tcas…' > Error 1/2 1`] = `
"
  1 | switch(foo){
> 2 | 	case 1: {
    | 	        ^ Unexpected braces in empty case clause.
  3 | 	}
  4 | 	case 2: {
  5 | 	}
  6 | 	default: {
  7 | 		doSomething();
  8 | 	}
  9 | }
"
`;

exports[`invalid(0): 'switch(foo){\\n\\tcase 1: {\\n\\t}\\n\\tcas…' > Error 2/2 1`] = `
"
  1 | switch(foo){
  2 | 	case 1: {
  3 | 	}
> 4 | 	case 2: {
    | 	        ^ Unexpected braces in empty case clause.
  5 | 	}
  6 | 	default: {
  7 | 		doSomething();
  8 | 	}
  9 | }
"
`;

exports[`invalid(0): 'switch(foo){\\n\\tcase 1: {\\n\\t}\\n\\tcas…' > Output 1`] = `
"
  1 | switch(foo){
  2 | 	case 1:
  3 | 	
  4 | 	case 2:
  5 | 	
  6 | 	default: {
  7 | 		doSomething();
  8 | 	}
  9 | }
"
`;

exports[`invalid(1): 'switch(foo) {\\n\\tcase 1: {\\n\\t\\tdoSom…' > Code 1`] = `
"
  1 | switch(foo) {
  2 | 	case 1: {
  3 | 		doSomething();
  4 | 	}
  5 | 	break; // <-- This should be between braces;
  6 | }
"
`;

exports[`invalid(1): 'switch(foo) {\\n\\tcase 1: {\\n\\t\\tdoSom…' > Error 1/1 1`] = `
"
  1 | switch(foo) {
> 2 | 	case 1: {
    | 	^^^^^^^ Missing braces in case clause.
  3 | 		doSomething();
  4 | 	}
  5 | 	break; // <-- This should be between braces;
  6 | }
"
`;

exports[`invalid(1): 'switch(foo) {\\n\\tcase 1: {\\n\\t\\tdoSom…' > Output 1`] = `
"
  1 | switch(foo) {
  2 | 	case 1: { {
  3 | 		doSomething();
  4 | 	}
  5 | 	break;
  6 | 	} // <-- This should be between braces;
  7 | }
"
`;

exports[`invalid(1): 'switch(foo) {\\n\\tdefault: {\\n\\t\\t{\\n\\…' > Code 1`] = `
"
  1 | switch(foo) {
  2 | 	default: {
  3 | 		{
  4 | 			const bar = 2;
  5 | 			doSomething();
  6 | 		}
  7 | 		doSomethingElse();
  8 | 	}
  9 | }
"
`;

exports[`invalid(1): 'switch(foo) {\\n\\tdefault: {\\n\\t\\t{\\n\\…' > Error 1/1 1`] = `
"
  1 | switch(foo) {
> 2 | 	default: {
    | 	         ^ Unnecessary braces in case clause.
  3 | 		{
  4 | 			const bar = 2;
  5 | 			doSomething();
  6 | 		}
  7 | 		doSomethingElse();
  8 | 	}
  9 | }
"
`;

exports[`invalid(1): 'switch(foo) {\\n\\tdefault: {\\n\\t\\t{\\n\\…' > Options 1`] = `
"
[
  "avoid"
]
"
`;

exports[`invalid(1): 'switch(foo) {\\n\\tdefault: {\\n\\t\\t{\\n\\…' > Output 1`] = `
"
  1 | switch(foo) {
  2 | 	default:
  3 | 		{
  4 | 			const bar = 2;
  5 | 			doSomething();
  6 | 		}
  7 | 		doSomethingElse();
  8 | 	
  9 | }
"
`;

exports[`invalid(1): 'switch(foo){\\n\\tcase 1: {\\n\\t\\t// fal…' > Code 1`] = `
"
   1 | switch(foo){
   2 | 	case 1: {
   3 | 		// fallthrough
   4 | 	}
   5 | 	default: {
   6 | 	}
   7 | 	// fallthrough
   8 | 	case 3: {
   9 | 		doSomething();
  10 | 		break;
  11 | 	}
  12 | }
"
`;

exports[`invalid(1): 'switch(foo){\\n\\tcase 1: {\\n\\t\\t// fal…' > Error 1/2 1`] = `
"
   1 | switch(foo){
>  2 | 	case 1: {
     | 	        ^ Unexpected braces in empty case clause.
   3 | 		// fallthrough
   4 | 	}
   5 | 	default: {
   6 | 	}
   7 | 	// fallthrough
   8 | 	case 3: {
   9 | 		doSomething();
  10 | 		break;
  11 | 	}
  12 | }
"
`;

exports[`invalid(1): 'switch(foo){\\n\\tcase 1: {\\n\\t\\t// fal…' > Error 2/2 1`] = `
"
   1 | switch(foo){
   2 | 	case 1: {
   3 | 		// fallthrough
   4 | 	}
>  5 | 	default: {
     | 	         ^ Unexpected braces in empty case clause.
   6 | 	}
   7 | 	// fallthrough
   8 | 	case 3: {
   9 | 		doSomething();
  10 | 		break;
  11 | 	}
  12 | }
"
`;

exports[`invalid(1): 'switch(foo){\\n\\tcase 1: {\\n\\t\\t// fal…' > Output 1`] = `
"
   1 | switch(foo){
   2 | 	case 1:
   3 | 		// fallthrough
   4 | 	
   5 | 	default:
   6 | 	
   7 | 	// fallthrough
   8 | 	case 3: {
   9 | 		doSomething();
  10 | 		break;
  11 | 	}
  12 | }
"
`;

exports[`invalid(2): 'switch(foo) {\\n\\tcase 1: {\\n\\t\\tbreak…' > Code 1`] = `
"
  1 | switch(foo) {
  2 | 	case 1: {
  3 | 		break;
  4 | 	}
  5 | }
"
`;

exports[`invalid(2): 'switch(foo) {\\n\\tcase 1: {\\n\\t\\tbreak…' > Error 1/1 1`] = `
"
  1 | switch(foo) {
> 2 | 	case 1: {
    | 	        ^ Unnecessary braces in case clause.
  3 | 		break;
  4 | 	}
  5 | }
"
`;

exports[`invalid(2): 'switch(foo) {\\n\\tcase 1: {\\n\\t\\tbreak…' > Options 1`] = `
"
[
  "avoid"
]
"
`;

exports[`invalid(2): 'switch(foo) {\\n\\tcase 1: {\\n\\t\\tbreak…' > Output 1`] = `
"
  1 | switch(foo) {
  2 | 	case 1:
  3 | 		break;
  4 | 	
  5 | }
"
`;

exports[`invalid(2): 'switch(foo) {\\n\\tdefault:\\n\\t\\tlabel:…' > Code 1`] = `
"
  1 | switch(foo) {
  2 | 	default:
  3 | 		label: {}
  4 | }
"
`;

exports[`invalid(2): 'switch(foo) {\\n\\tdefault:\\n\\t\\tlabel:…' > Error 1/1 1`] = `
"
  1 | switch(foo) {
> 2 | 	default:
    | 	^^^^^^^^ Missing braces in case clause.
  3 | 		label: {}
  4 | }
"
`;

exports[`invalid(2): 'switch(foo) {\\n\\tdefault:\\n\\t\\tlabel:…' > Output 1`] = `
"
  1 | switch(foo) {
  2 | 	default: {
  3 | 		label: {}
  4 | 	}
  5 | }
"
`;

exports[`invalid(3): 'switch(foo) {\\n\\tdefault: {{{\\n\\t\\tdo…' > Code 1`] = `
"
  1 | switch(foo) {
  2 | 	default: {{{
  3 | 		doSomething();
  4 | 	}}}
  5 | }
"
`;

exports[`invalid(3): 'switch(foo) {\\n\\tdefault: {{{\\n\\t\\tdo…' > Error 1/1 1`] = `
"
  1 | switch(foo) {
> 2 | 	default: {{{
    | 	         ^ Unnecessary braces in case clause.
  3 | 		doSomething();
  4 | 	}}}
  5 | }
"
`;

exports[`invalid(3): 'switch(foo) {\\n\\tdefault: {{{\\n\\t\\tdo…' > Options 1`] = `
"
[
  "avoid"
]
"
`;

exports[`invalid(3): 'switch(foo) {\\n\\tdefault: {{{\\n\\t\\tdo…' > Output 1`] = `
"
  1 | switch(foo) {
  2 | 	default:
  3 | 		doSomething();
  4 | 	
  5 | }
"
`;

exports[`invalid(4): 'switch(foo) {\\n\\tdefault: {{{\\n\\t\\tdo…' > Code 1`] = `
"
  1 | switch(foo) {
  2 | 	default: {{{
  3 | 		doSomething();
  4 | 		{
  5 | 			doSomethingElseInBlockStatement();
  6 | 		}
  7 | 	}}}
  8 | }
"
`;

exports[`invalid(4): 'switch(foo) {\\n\\tdefault: {{{\\n\\t\\tdo…' > Error 1/1 1`] = `
"
  1 | switch(foo) {
> 2 | 	default: {{{
    | 	         ^ Unnecessary braces in case clause.
  3 | 		doSomething();
  4 | 		{
  5 | 			doSomethingElseInBlockStatement();
  6 | 		}
  7 | 	}}}
  8 | }
"
`;

exports[`invalid(4): 'switch(foo) {\\n\\tdefault: {{{\\n\\t\\tdo…' > Options 1`] = `
"
[
  "avoid"
]
"
`;

exports[`invalid(4): 'switch(foo) {\\n\\tdefault: {{{\\n\\t\\tdo…' > Output 1`] = `
"
  1 | switch(foo) {
  2 | 	default:
  3 | 		doSomething();
  4 | 		{
  5 | 			doSomethingElseInBlockStatement();
  6 | 		}
  7 | 	
  8 | }
"
`;
