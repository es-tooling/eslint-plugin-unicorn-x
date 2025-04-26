// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'switch (foo) {\\n\\tcase a:\\n\\tdefault:…' > Code 1`] = `
"
  1 | switch (foo) {
  2 | 	case a:
  3 | 	default:
  4 | 		handleDefaultCase();
  5 | 		break;
  6 | }
"
`;

exports[`invalid(0): 'switch (foo) {\\n\\tcase a:\\n\\tdefault:…' > Error 1/1 1`] = `
"
  1 | switch (foo) {
> 2 | 	case a:
    | 	^^^^^^^ Useless case in switch statement.
  3 | 	default:
  4 | 		handleDefaultCase();
  5 | 		break;
  6 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	
  3 | 	default:
  4 | 		handleDefaultCase();
  5 | 		break;
  6 | }
"
`;

exports[`invalid(1): 'switch (foo) {\\n\\tcase a: {\\n\\t}\\n\\td…' > Code 1`] = `
"
  1 | switch (foo) {
  2 | 	case a: {
  3 | 	}
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }
"
`;

exports[`invalid(1): 'switch (foo) {\\n\\tcase a: {\\n\\t}\\n\\td…' > Error 1/1 1`] = `
"
  1 | switch (foo) {
> 2 | 	case a: {
    | 	^^^^^^^ Useless case in switch statement.
  3 | 	}
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	
  3 | 	default:
  4 | 		handleDefaultCase();
  5 | 		break;
  6 | }
"
`;

exports[`invalid(2): 'switch (foo) {\\n\\tcase a: {\\n\\t\\t;;\\n…' > Code 1`] = `
"
   1 | switch (foo) {
   2 | 	case a: {
   3 | 		;;
   4 | 		{
   5 | 			;;
   6 | 			{
   7 | 				;;
   8 | 			}
   9 | 		}
  10 | 	}
  11 | 	default:
  12 | 		handleDefaultCase();
  13 | 		break;
  14 | }
"
`;

exports[`invalid(2): 'switch (foo) {\\n\\tcase a: {\\n\\t\\t;;\\n…' > Error 1/1 1`] = `
"
   1 | switch (foo) {
>  2 | 	case a: {
     | 	^^^^^^^ Useless case in switch statement.
   3 | 		;;
   4 | 		{
   5 | 			;;
   6 | 			{
   7 | 				;;
   8 | 			}
   9 | 		}
  10 | 	}
  11 | 	default:
  12 | 		handleDefaultCase();
  13 | 		break;
  14 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	
  3 | 	default:
  4 | 		handleDefaultCase();
  5 | 		break;
  6 | }
"
`;

exports[`invalid(3): 'switch (foo) {\\n\\tcase a:\\n\\tcase (( …' > Code 1`] = `
"
  1 | switch (foo) {
  2 | 	case a:
  3 | 	case (( b ))         :
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }
"
`;

exports[`invalid(3): 'switch (foo) {\\n\\tcase a:\\n\\tcase (( …' > Error 1/2 1`] = `
"
  1 | switch (foo) {
> 2 | 	case a:
    | 	^^^^^^^ Useless case in switch statement.
  3 | 	case (( b ))         :
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	
  3 | 	case (( b ))         :
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }
"
`;

exports[`invalid(3): 'switch (foo) {\\n\\tcase a:\\n\\tcase (( …' > Error 2/2 1`] = `
"
  1 | switch (foo) {
  2 | 	case a:
> 3 | 	case (( b ))         :
    | 	^^^^^^^^^^^^^^^^^^^^^^ Useless case in switch statement.
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	case a:
  3 | 	
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }
"
`;

exports[`invalid(4): 'switch (foo) {\\n\\tcase a:\\n\\tcase b:\\…' > Code 1`] = `
"
   1 | switch (foo) {
   2 | 	case a:
   3 | 	case b:
   4 | 		handleCaseAB();
   5 | 		break;
   6 | 	case d:
   7 | 	case d:
   8 | 	default:
   9 | 		handleDefaultCase();
  10 | 		break;
  11 | }
"
`;

exports[`invalid(4): 'switch (foo) {\\n\\tcase a:\\n\\tcase b:\\…' > Error 1/2 1`] = `
"
   1 | switch (foo) {
   2 | 	case a:
   3 | 	case b:
   4 | 		handleCaseAB();
   5 | 		break;
>  6 | 	case d:
     | 	^^^^^^^ Useless case in switch statement.
   7 | 	case d:
   8 | 	default:
   9 | 		handleDefaultCase();
  10 | 		break;
  11 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
   1 | switch (foo) {
   2 | 	case a:
   3 | 	case b:
   4 | 		handleCaseAB();
   5 | 		break;
   6 | 	
   7 | 	case d:
   8 | 	default:
   9 | 		handleDefaultCase();
  10 | 		break;
  11 | }
"
`;

exports[`invalid(4): 'switch (foo) {\\n\\tcase a:\\n\\tcase b:\\…' > Error 2/2 1`] = `
"
   1 | switch (foo) {
   2 | 	case a:
   3 | 	case b:
   4 | 		handleCaseAB();
   5 | 		break;
   6 | 	case d:
>  7 | 	case d:
     | 	^^^^^^^ Useless case in switch statement.
   8 | 	default:
   9 | 		handleDefaultCase();
  10 | 		break;
  11 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
   1 | switch (foo) {
   2 | 	case a:
   3 | 	case b:
   4 | 		handleCaseAB();
   5 | 		break;
   6 | 	case d:
   7 | 	
   8 | 	default:
   9 | 		handleDefaultCase();
  10 | 		break;
  11 | }
"
`;

exports[`invalid(5): 'switch (foo) {\\n\\tcase a:\\n\\tcase b:\\…' > Code 1`] = `
"
  1 | switch (foo) {
  2 | 	case a:
  3 | 	case b:
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }
"
`;

exports[`invalid(5): 'switch (foo) {\\n\\tcase a:\\n\\tcase b:\\…' > Error 1/2 1`] = `
"
  1 | switch (foo) {
> 2 | 	case a:
    | 	^^^^^^^ Useless case in switch statement.
  3 | 	case b:
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	
  3 | 	case b:
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }
"
`;

exports[`invalid(5): 'switch (foo) {\\n\\tcase a:\\n\\tcase b:\\…' > Error 2/2 1`] = `
"
  1 | switch (foo) {
  2 | 	case a:
> 3 | 	case b:
    | 	^^^^^^^ Useless case in switch statement.
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	case a:
  3 | 	
  4 | 	default:
  5 | 		handleDefaultCase();
  6 | 		break;
  7 | }
"
`;

exports[`invalid(6): 'switch (foo) {\\n\\t// eslint-disable-n…' > Code 1`] = `
"
  1 | switch (foo) {
  2 | 	// eslint-disable-next-line
  3 | 	case a:
  4 | 	case b:
  5 | 	default:
  6 | 		handleDefaultCase();
  7 | 		break;
  8 | }
"
`;

exports[`invalid(6): 'switch (foo) {\\n\\t// eslint-disable-n…' > Error 1/1 1`] = `
"
  1 | switch (foo) {
  2 | 	// eslint-disable-next-line
  3 | 	case a:
> 4 | 	case b:
    | 	^^^^^^^ Useless case in switch statement.
  5 | 	default:
  6 | 		handleDefaultCase();
  7 | 		break;
  8 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	// eslint-disable-next-line
  3 | 	case a:
  4 | 	
  5 | 	default:
  6 | 		handleDefaultCase();
  7 | 		break;
  8 | }
"
`;

exports[`invalid(7): 'switch (foo) {\\n\\tcase a:\\n\\t// eslin…' > Code 1`] = `
"
  1 | switch (foo) {
  2 | 	case a:
  3 | 	// eslint-disable-next-line
  4 | 	case b:
  5 | 	default:
  6 | 		handleDefaultCase();
  7 | 		break;
  8 | }
"
`;

exports[`invalid(7): 'switch (foo) {\\n\\tcase a:\\n\\t// eslin…' > Error 1/1 1`] = `
"
  1 | switch (foo) {
> 2 | 	case a:
    | 	^^^^^^^ Useless case in switch statement.
  3 | 	// eslint-disable-next-line
  4 | 	case b:
  5 | 	default:
  6 | 		handleDefaultCase();
  7 | 		break;
  8 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Remove this case.
  1 | switch (foo) {
  2 | 	
  3 | 	// eslint-disable-next-line
  4 | 	case b:
  5 | 	default:
  6 | 		handleDefaultCase();
  7 | 		break;
  8 | }
"
`;
