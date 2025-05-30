const template = () =>
	`
import outdent from 'outdent';
import {getTester} from './utils/test.js';

const {test} = getTester(import.meta);

test.snapshot({
	valid: [
		'const foo = "🦄";',
	],
	invalid: [
		'const foo = "unicorn";',
	],
});
`.trimStart();

export default template;
