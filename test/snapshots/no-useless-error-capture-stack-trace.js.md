// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError);
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError);
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(0): 'class MyError extends Error {\\n\\tcons…' > Output 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(1): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace?.(this, MyError);
  4 | 	}
  5 | }
"
`;

exports[`invalid(1): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace?.(this, MyError);
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(2): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, this.constructor);
  4 | 	}
  5 | }
"
`;

exports[`invalid(2): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, this.constructor);
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(2): 'class MyError extends Error {\\n\\tcons…' > Output 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(3): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, this.constructor);
  4 | 	}
  5 | }
"
`;

exports[`invalid(3): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, this.constructor);
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(3): 'class MyError extends Error {\\n\\tcons…' > Output 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(4): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace?.(this, this.constructor);
  4 | 	}
  5 | }
"
`;

exports[`invalid(4): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace?.(this, this.constructor);
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(5): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, new.target);
  4 | 	}
  5 | }
"
`;

exports[`invalid(5): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, new.target);
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(5): 'class MyError extends Error {\\n\\tcons…' > Output 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(6): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace?.(this, new.target);
  4 | 	}
  5 | }
"
`;

exports[`invalid(6): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace?.(this, new.target);
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(7): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(7): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(7): 'class MyError extends Error {\\n\\tcons…' > Output 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(8): 'class MyError extends EvalError {\\n\\t…' > Code 1`] = `
"
  1 | class MyError extends EvalError {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(8): 'class MyError extends EvalError {\\n\\t…' > Error 1/1 1`] = `
"
  1 | class MyError extends EvalError {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(8): 'class MyError extends EvalError {\\n\\t…' > Output 1`] = `
"
  1 | class MyError extends EvalError {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(9): 'class MyError extends RangeError {\\n\\…' > Code 1`] = `
"
  1 | class MyError extends RangeError {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(9): 'class MyError extends RangeError {\\n\\…' > Error 1/1 1`] = `
"
  1 | class MyError extends RangeError {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(9): 'class MyError extends RangeError {\\n\\…' > Output 1`] = `
"
  1 | class MyError extends RangeError {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(10): 'class MyError extends ReferenceError …' > Code 1`] = `
"
  1 | class MyError extends ReferenceError {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(10): 'class MyError extends ReferenceError …' > Error 1/1 1`] = `
"
  1 | class MyError extends ReferenceError {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(10): 'class MyError extends ReferenceError …' > Output 1`] = `
"
  1 | class MyError extends ReferenceError {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(11): 'class MyError extends SyntaxError {\\n…' > Code 1`] = `
"
  1 | class MyError extends SyntaxError {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(11): 'class MyError extends SyntaxError {\\n…' > Error 1/1 1`] = `
"
  1 | class MyError extends SyntaxError {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(11): 'class MyError extends SyntaxError {\\n…' > Output 1`] = `
"
  1 | class MyError extends SyntaxError {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(12): 'class MyError extends TypeError {\\n\\t…' > Code 1`] = `
"
  1 | class MyError extends TypeError {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(12): 'class MyError extends TypeError {\\n\\t…' > Error 1/1 1`] = `
"
  1 | class MyError extends TypeError {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(12): 'class MyError extends TypeError {\\n\\t…' > Output 1`] = `
"
  1 | class MyError extends TypeError {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(13): 'class MyError extends URIError {\\n\\tc…' > Code 1`] = `
"
  1 | class MyError extends URIError {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(13): 'class MyError extends URIError {\\n\\tc…' > Error 1/1 1`] = `
"
  1 | class MyError extends URIError {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(13): 'class MyError extends URIError {\\n\\tc…' > Output 1`] = `
"
  1 | class MyError extends URIError {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(14): 'class MyError extends AggregateError …' > Code 1`] = `
"
  1 | class MyError extends AggregateError {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(14): 'class MyError extends AggregateError …' > Error 1/1 1`] = `
"
  1 | class MyError extends AggregateError {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(14): 'class MyError extends AggregateError …' > Output 1`] = `
"
  1 | class MyError extends AggregateError {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(15): 'class MyError extends SuppressedError…' > Code 1`] = `
"
  1 | class MyError extends SuppressedError {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(15): 'class MyError extends SuppressedError…' > Error 1/1 1`] = `
"
  1 | class MyError extends SuppressedError {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, MyError)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(15): 'class MyError extends SuppressedError…' > Output 1`] = `
"
  1 | class MyError extends SuppressedError {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(16): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		const foo = () => {
  4 | 			Error.captureStackTrace(this, MyError)
  5 | 		}
  6 | 	}
  7 | }
"
`;

exports[`invalid(16): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		const foo = () => {
> 4 | 			Error.captureStackTrace(this, MyError)
    | 			^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  5 | 		}
  6 | 	}
  7 | }
"
`;

exports[`invalid(16): 'class MyError extends Error {\\n\\tcons…' > Output 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		const foo = () => {
  4 | 			
  5 | 		}
  6 | 	}
  7 | }
"
`;

exports[`invalid(17): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		if (a) Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(17): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		if (a) Error.captureStackTrace(this, MyError)
    | 		       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(18): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		const x = () => Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(18): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		const x = () => Error.captureStackTrace(this, MyError)
    | 		                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(19): 'class MyError extends Error {\\n\\tcons…' > Code 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
  3 | 		void Error.captureStackTrace(this, MyError)
  4 | 	}
  5 | }
"
`;

exports[`invalid(19): 'class MyError extends Error {\\n\\tcons…' > Error 1/1 1`] = `
"
  1 | class MyError extends Error {
  2 | 	constructor() {
> 3 | 		void Error.captureStackTrace(this, MyError)
    | 		     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(20): 'export default class extends Error {\\…' > Code 1`] = `
"
  1 | export default class extends Error {
  2 | 	constructor() {
  3 | 		Error.captureStackTrace(this, new.target)
  4 | 	}
  5 | }
"
`;

exports[`invalid(20): 'export default class extends Error {\\…' > Error 1/1 1`] = `
"
  1 | export default class extends Error {
  2 | 	constructor() {
> 3 | 		Error.captureStackTrace(this, new.target)
    | 		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  4 | 	}
  5 | }
"
`;

exports[`invalid(20): 'export default class extends Error {\\…' > Output 1`] = `
"
  1 | export default class extends Error {
  2 | 	constructor() {
  3 | 		
  4 | 	}
  5 | }
"
`;

exports[`invalid(21): 'export default (\\n\\tclass extends Err…' > Code 1`] = `
"
  1 | export default (
  2 | 	class extends Error {
  3 | 		constructor() {
  4 | 			Error.captureStackTrace(this, new.target)
  5 | 		}
  6 | 	}
  7 | )
"
`;

exports[`invalid(21): 'export default (\\n\\tclass extends Err…' > Error 1/1 1`] = `
"
  1 | export default (
  2 | 	class extends Error {
  3 | 		constructor() {
> 4 | 			Error.captureStackTrace(this, new.target)
    | 			^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary \`Error.captureStackTrace(…)\` call.
  5 | 		}
  6 | 	}
  7 | )
"
`;

exports[`invalid(21): 'export default (\\n\\tclass extends Err…' > Output 1`] = `
"
  1 | export default (
  2 | 	class extends Error {
  3 | 		constructor() {
  4 | 			
  5 | 		}
  6 | 	}
  7 | )
"
`;
