// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'if (!a) {;} else {;}' > Code 1`] = `
"
  1 | if (!a) {;} else {;}
"
`;

exports[`invalid(0): 'if (!a) {;} else {;}' > Error 1/1 1`] = `
"
> 1 | if (!a) {;} else {;}
    |     ^^ Unexpected negated condition.
"
`;

exports[`invalid(0): 'if (!a) {;} else {;}' > Output 1`] = `
"
  1 | if (a) {;} else {;}
"
`;

exports[`invalid(1): 'if (a != b) {;} else {;}' > Code 1`] = `
"
  1 | if (a != b) {;} else {;}
"
`;

exports[`invalid(1): 'if (a != b) {;} else {;}' > Error 1/1 1`] = `
"
> 1 | if (a != b) {;} else {;}
    |     ^^^^^^ Unexpected negated condition.
"
`;

exports[`invalid(1): 'if (a != b) {;} else {;}' > Output 1`] = `
"
  1 | if (a == b) {;} else {;}
"
`;

exports[`invalid(2): 'if (a !== b) {;} else {;}' > Code 1`] = `
"
  1 | if (a !== b) {;} else {;}
"
`;

exports[`invalid(2): 'if (a !== b) {;} else {;}' > Error 1/1 1`] = `
"
> 1 | if (a !== b) {;} else {;}
    |     ^^^^^^^ Unexpected negated condition.
"
`;

exports[`invalid(2): 'if (a !== b) {;} else {;}' > Output 1`] = `
"
  1 | if (a === b) {;} else {;}
"
`;

exports[`invalid(3): '!a ? b : c' > Code 1`] = `
"
  1 | !a ? b : c
"
`;

exports[`invalid(3): '!a ? b : c' > Error 1/1 1`] = `
"
> 1 | !a ? b : c
    | ^^ Unexpected negated condition.
"
`;

exports[`invalid(3): '!a ? b : c' > Output 1`] = `
"
  1 | a ? c : b
"
`;

exports[`invalid(4): 'a != b ? c : d' > Code 1`] = `
"
  1 | a != b ? c : d
"
`;

exports[`invalid(4): 'a != b ? c : d' > Error 1/1 1`] = `
"
> 1 | a != b ? c : d
    | ^^^^^^ Unexpected negated condition.
"
`;

exports[`invalid(4): 'a != b ? c : d' > Output 1`] = `
"
  1 | a == b ? d : c
"
`;

exports[`invalid(5): 'a !== b ? c : d' > Code 1`] = `
"
  1 | a !== b ? c : d
"
`;

exports[`invalid(5): 'a !== b ? c : d' > Error 1/1 1`] = `
"
> 1 | a !== b ? c : d
    | ^^^^^^^ Unexpected negated condition.
"
`;

exports[`invalid(5): 'a !== b ? c : d' > Output 1`] = `
"
  1 | a === b ? d : c
"
`;

exports[`invalid(6): '(( !a )) ? b : c' > Code 1`] = `
"
  1 | (( !a )) ? b : c
"
`;

exports[`invalid(6): '(( !a )) ? b : c' > Error 1/1 1`] = `
"
> 1 | (( !a )) ? b : c
    |    ^^ Unexpected negated condition.
"
`;

exports[`invalid(6): '(( !a )) ? b : c' > Output 1`] = `
"
  1 | (( a )) ? c : b
"
`;

exports[`invalid(7): '!(( a )) ? b : c' > Code 1`] = `
"
  1 | !(( a )) ? b : c
"
`;

exports[`invalid(7): '!(( a )) ? b : c' > Error 1/1 1`] = `
"
> 1 | !(( a )) ? b : c
    | ^^^^^^^^ Unexpected negated condition.
"
`;

exports[`invalid(7): '!(( a )) ? b : c' > Output 1`] = `
"
  1 | (( a )) ? c : b
"
`;

exports[`invalid(8): 'if(!(( a ))) b(); else c();' > Code 1`] = `
"
  1 | if(!(( a ))) b(); else c();
"
`;

exports[`invalid(8): 'if(!(( a ))) b(); else c();' > Error 1/1 1`] = `
"
> 1 | if(!(( a ))) b(); else c();
    |    ^^^^^^^^ Unexpected negated condition.
"
`;

exports[`invalid(8): 'if(!(( a ))) b(); else c();' > Output 1`] = `
"
  1 | if( a ) {c();} else {b();}
"
`;

exports[`invalid(9): 'if((( !a ))) b(); else c();' > Code 1`] = `
"
  1 | if((( !a ))) b(); else c();
"
`;

exports[`invalid(9): 'if((( !a ))) b(); else c();' > Error 1/1 1`] = `
"
> 1 | if((( !a ))) b(); else c();
    |       ^^ Unexpected negated condition.
"
`;

exports[`invalid(9): 'if((( !a ))) b(); else c();' > Output 1`] = `
"
  1 | if((( a ))) {c();} else {b();}
"
`;

exports[`invalid(10): 'function a() {return!a ? b : c}' > Code 1`] = `
"
  1 | function a() {return!a ? b : c}
"
`;

exports[`invalid(10): 'function a() {return!a ? b : c}' > Error 1/1 1`] = `
"
> 1 | function a() {return!a ? b : c}
    |                     ^^ Unexpected negated condition.
"
`;

exports[`invalid(10): 'function a() {return!a ? b : c}' > Output 1`] = `
"
  1 | function a() {return a ? c : b}
"
`;

exports[`invalid(11): 'function a() {return!(( a )) ? b : c}' > Code 1`] = `
"
  1 | function a() {return!(( a )) ? b : c}
"
`;

exports[`invalid(11): 'function a() {return!(( a )) ? b : c}' > Error 1/1 1`] = `
"
> 1 | function a() {return!(( a )) ? b : c}
    |                     ^^^^^^^^ Unexpected negated condition.
"
`;

exports[`invalid(11): 'function a() {return!(( a )) ? b : c}' > Output 1`] = `
"
  1 | function a() {return (( a )) ? c : b}
"
`;

exports[`invalid(12): 'function a() {\\n\\treturn ! // comment…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return ! // comment
  3 | 		a ? b : c;
  4 | }
"
`;

exports[`invalid(12): 'function a() {\\n\\treturn ! // comment…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return ! // comment
    | 	       ^^^^^^^^^^^^
> 3 | 		a ? b : c;
    | ^^^^ Unexpected negated condition.
  4 | }
"
`;

exports[`invalid(12): 'function a() {\\n\\treturn ! // comment…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return (  // comment
  3 | 		a ? c : b);
  4 | }
"
`;

exports[`invalid(13): 'function a() {\\n\\treturn (! // Return…' > Code 1`] = `
"
  1 | function a() {
  2 | 	return (! // ReturnStatement argument is parenthesized
  3 | 		a ? b : c);
  4 | }
"
`;

exports[`invalid(13): 'function a() {\\n\\treturn (! // Return…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	return (! // ReturnStatement argument is parenthesized
    | 	        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 | 		a ? b : c);
    | ^^^^ Unexpected negated condition.
  4 | }
"
`;

exports[`invalid(13): 'function a() {\\n\\treturn (! // Return…' > Output 1`] = `
"
  1 | function a() {
  2 | 	return ( // ReturnStatement argument is parenthesized
  3 | 		a ? c : b);
  4 | }
"
`;

exports[`invalid(14): 'function a() {\\n\\treturn (\\n\\t\\t! // …' > Code 1`] = `
"
  1 | function a() {
  2 | 	return (
  3 | 		! // UnaryExpression argument is parenthesized
  4 | 		a) ? b : c;
  5 | }
"
`;

exports[`invalid(14): 'function a() {\\n\\treturn (\\n\\t\\t! // …' > Error 1/1 1`] = `
"
  1 | function a() {
  2 | 	return (
> 3 | 		! // UnaryExpression argument is parenthesized
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | 		a) ? b : c;
    | ^^^^ Unexpected negated condition.
  5 | }
"
`;

exports[`invalid(14): 'function a() {\\n\\treturn (\\n\\t\\t! // …' > Output 1`] = `
"
  1 | function a() {
  2 | 	return (
  3 | 		 // UnaryExpression argument is parenthesized
  4 | 		a) ? c : b;
  5 | }
"
`;

exports[`invalid(15): 'function a() {\\n\\tthrow ! // comment\\…' > Code 1`] = `
"
  1 | function a() {
  2 | 	throw ! // comment
  3 | 		a ? b : c;
  4 | }
"
`;

exports[`invalid(15): 'function a() {\\n\\tthrow ! // comment\\…' > Error 1/1 1`] = `
"
  1 | function a() {
> 2 | 	throw ! // comment
    | 	      ^^^^^^^^^^^^
> 3 | 		a ? b : c;
    | ^^^^ Unexpected negated condition.
  4 | }
"
`;

exports[`invalid(15): 'function a() {\\n\\tthrow ! // comment\\…' > Output 1`] = `
"
  1 | function a() {
  2 | 	throw (  // comment
  3 | 		a ? c : b);
  4 | }
"
`;

exports[`invalid(16): '!a ? b : c ? d : e' > Code 1`] = `
"
  1 | !a ? b : c ? d : e
"
`;

exports[`invalid(16): '!a ? b : c ? d : e' > Error 1/1 1`] = `
"
> 1 | !a ? b : c ? d : e
    | ^^ Unexpected negated condition.
"
`;

exports[`invalid(16): '!a ? b : c ? d : e' > Output 1`] = `
"
  1 | a ? c ? d : e : b
"
`;

exports[`invalid(17): '!a ? b : (( c ? d : e ))' > Code 1`] = `
"
  1 | !a ? b : (( c ? d : e ))
"
`;

exports[`invalid(17): '!a ? b : (( c ? d : e ))' > Error 1/1 1`] = `
"
> 1 | !a ? b : (( c ? d : e ))
    | ^^ Unexpected negated condition.
"
`;

exports[`invalid(17): '!a ? b : (( c ? d : e ))' > Output 1`] = `
"
  1 | a ? (( c ? d : e )) : b
"
`;

exports[`invalid(18): 'a\\n![] ? b : c' > Code 1`] = `
"
  1 | a
  2 | ![] ? b : c
"
`;

exports[`invalid(18): 'a\\n![] ? b : c' > Error 1/1 1`] = `
"
  1 | a
> 2 | ![] ? b : c
    | ^^^ Unexpected negated condition.
"
`;

exports[`invalid(18): 'a\\n![] ? b : c' > Output 1`] = `
"
  1 | a
  2 | ;[] ? c : b
"
`;

exports[`invalid(19): 'a\\n!+b ? c : d' > Code 1`] = `
"
  1 | a
  2 | !+b ? c : d
"
`;

exports[`invalid(19): 'a\\n!+b ? c : d' > Error 1/1 1`] = `
"
  1 | a
> 2 | !+b ? c : d
    | ^^^ Unexpected negated condition.
"
`;

exports[`invalid(19): 'a\\n!+b ? c : d' > Output 1`] = `
"
  1 | a
  2 | ;+b ? d : c
"
`;

exports[`invalid(20): 'a\\n!(b) ? c : d' > Code 1`] = `
"
  1 | a
  2 | !(b) ? c : d
"
`;

exports[`invalid(20): 'a\\n!(b) ? c : d' > Error 1/1 1`] = `
"
  1 | a
> 2 | !(b) ? c : d
    | ^^^^ Unexpected negated condition.
"
`;

exports[`invalid(20): 'a\\n!(b) ? c : d' > Output 1`] = `
"
  1 | a
  2 | ;(b) ? d : c
"
`;

exports[`invalid(21): 'a\\n!b ? c : d' > Code 1`] = `
"
  1 | a
  2 | !b ? c : d
"
`;

exports[`invalid(21): 'a\\n!b ? c : d' > Error 1/1 1`] = `
"
  1 | a
> 2 | !b ? c : d
    | ^^ Unexpected negated condition.
"
`;

exports[`invalid(21): 'a\\n!b ? c : d' > Output 1`] = `
"
  1 | a
  2 | b ? d : c
"
`;

exports[`invalid(22): 'if (!a)\\n\\tb()\\nelse\\n\\tc()' > Code 1`] = `
"
  1 | if (!a)
  2 | 	b()
  3 | else
  4 | 	c()
"
`;

exports[`invalid(22): 'if (!a)\\n\\tb()\\nelse\\n\\tc()' > Error 1/1 1`] = `
"
> 1 | if (!a)
    |     ^^ Unexpected negated condition.
  2 | 	b()
  3 | else
  4 | 	c()
"
`;

exports[`invalid(22): 'if (!a)\\n\\tb()\\nelse\\n\\tc()' > Output 1`] = `
"
  1 | if (a)
  2 | 	{c()}
  3 | else
  4 | 	{b()}
"
`;

exports[`invalid(23): 'if(!a) b(); else c()' > Code 1`] = `
"
  1 | if(!a) b(); else c()
"
`;

exports[`invalid(23): 'if(!a) b(); else c()' > Error 1/1 1`] = `
"
> 1 | if(!a) b(); else c()
    |    ^^ Unexpected negated condition.
"
`;

exports[`invalid(23): 'if(!a) b(); else c()' > Output 1`] = `
"
  1 | if(a) {c()} else {b();}
"
`;

exports[`invalid(24): 'function fn() {\\n\\tif(!a) b(); else r…' > Code 1`] = `
"
  1 | function fn() {
  2 | 	if(!a) b(); else return
  3 | }
"
`;

exports[`invalid(24): 'function fn() {\\n\\tif(!a) b(); else r…' > Error 1/1 1`] = `
"
  1 | function fn() {
> 2 | 	if(!a) b(); else return
    | 	   ^^ Unexpected negated condition.
  3 | }
"
`;

exports[`invalid(24): 'function fn() {\\n\\tif(!a) b(); else r…' > Output 1`] = `
"
  1 | function fn() {
  2 | 	if(a) {return} else {b();}
  3 | }
"
`;

exports[`invalid(25): 'if(!a) {b()} else {c()}' > Code 1`] = `
"
  1 | if(!a) {b()} else {c()}
"
`;

exports[`invalid(25): 'if(!a) {b()} else {c()}' > Error 1/1 1`] = `
"
> 1 | if(!a) {b()} else {c()}
    |    ^^ Unexpected negated condition.
"
`;

exports[`invalid(25): 'if(!a) {b()} else {c()}' > Output 1`] = `
"
  1 | if(a) {c()} else {b()}
"
`;

exports[`invalid(26): 'if(!!a) b(); else c();' > Code 1`] = `
"
  1 | if(!!a) b(); else c();
"
`;

exports[`invalid(26): 'if(!!a) b(); else c();' > Error 1/1 1`] = `
"
> 1 | if(!!a) b(); else c();
    |    ^^^ Unexpected negated condition.
"
`;

exports[`invalid(26): 'if(!!a) b(); else c();' > Output 1`] = `
"
  1 | if(a) {b();} else {c();}
"
`;

exports[`invalid(27): '(!!a) ? b() : c();' > Code 1`] = `
"
  1 | (!!a) ? b() : c();
"
`;

exports[`invalid(27): '(!!a) ? b() : c();' > Error 1/1 1`] = `
"
> 1 | (!!a) ? b() : c();
    |  ^^^ Unexpected negated condition.
"
`;

exports[`invalid(27): '(!!a) ? b() : c();' > Output 1`] = `
"
  1 | (a) ? b() : c();
"
`;

exports[`invalid(28): 'function fn() {\\n\\treturn!a !== b ? c…' > Code 1`] = `
"
  1 | function fn() {
  2 | 	return!a !== b ? c : d
  3 | 	return((!((a)) != b)) ? c : d
  4 | }
"
`;

exports[`invalid(28): 'function fn() {\\n\\treturn!a !== b ? c…' > Error 1/2 1`] = `
"
  1 | function fn() {
> 2 | 	return!a !== b ? c : d
    | 	      ^^^^^^^^ Unexpected negated condition.
  3 | 	return((!((a)) != b)) ? c : d
  4 | }
"
`;

exports[`invalid(28): 'function fn() {\\n\\treturn!a !== b ? c…' > Error 2/2 1`] = `
"
  1 | function fn() {
  2 | 	return!a !== b ? c : d
> 3 | 	return((!((a)) != b)) ? c : d
    | 	        ^^^^^^^^^^^ Unexpected negated condition.
  4 | }
"
`;

exports[`invalid(28): 'function fn() {\\n\\treturn!a !== b ? c…' > Output 1`] = `
"
  1 | function fn() {
  2 | 	return!a === b ? d : c
  3 | 	return((!((a)) == b)) ? d : c
  4 | }
"
`;

exports[`invalid(29): 'if (!a) {\\n\\tb();\\n} else if (!c) {\\n…' > Code 1`] = `
"
  1 | if (!a) {
  2 | 	b();
  3 | } else if (!c) {
  4 | 	d();
  5 | } else {
  6 | 	e();
  7 | }
"
`;

exports[`invalid(29): 'if (!a) {\\n\\tb();\\n} else if (!c) {\\n…' > Error 1/1 1`] = `
"
  1 | if (!a) {
  2 | 	b();
> 3 | } else if (!c) {
    |            ^^ Unexpected negated condition.
  4 | 	d();
  5 | } else {
  6 | 	e();
  7 | }
"
`;

exports[`invalid(29): 'if (!a) {\\n\\tb();\\n} else if (!c) {\\n…' > Output 1`] = `
"
  1 | if (!a) {
  2 | 	b();
  3 | } else if (c) {
  4 | 	e();
  5 | } else {
  6 | 	d();
  7 | }
"
`;
