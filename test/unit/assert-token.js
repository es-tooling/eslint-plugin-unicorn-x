import {test, assert, expect} from 'vitest';
import assertToken from '../../rules/utils/assert-token.js';

const token = {value: 'b', type: 'a', extraKeyInToken: ''};

test('Pass on matched token', () => {
	assert.strictEqual(
		assertToken(token, {
			expected: {type: 'a', value: 'b'},
		}),
		undefined,
		'All matched.',
	);
	assert.strictEqual(
		assertToken(token, {
			expected: {type: 'a'},
		}),
		undefined,
		'`type` matched.',
	);
	assert.strictEqual(
		assertToken(token, {
			expected: {value: 'b'},
		}),
		undefined,
		'`value` matched.',
	);
	assert.strictEqual(
		assertToken(token, {
			expected: 'b',
		}),
		undefined,
		'treat string as `value`.',
	);
	assert.strictEqual(
		assertToken(token, {
			test: () => true,
			expected: 'x',
		}),
		undefined,
		'`test` function.',
	);
	assert.strictEqual(
		assertToken(token, {
			expected: ['a', 'b', 'c'],
		}),
		undefined,
		'`expected` is array.',
	);
});

test('Throw error when not match', () => {
	assert.throws(
		() => {
			assertToken(token, {
				expected: {type: 'a', value: 'c'},
				ruleId: 'test-rule',
			});
		},
		undefined,
		undefined,
		'`value` did not match.',
	);
	assert.throws(
		() => {
			assertToken(token, {
				test: () => false,
				expected: token,
				ruleId: 'test-rule',
			});
		},
		undefined,
		undefined,
		'`test` function return `false`.',
	);
	assert.throws(
		() => {
			assertToken(token, {
				expected: {nonExistingProperty: ''},
				ruleId: 'test-rule',
			});
		},
		undefined,
		undefined,
		'assert non-existing property.',
	);
	assert.throws(
		() => {
			assertToken(token, {
				expected: ['x', 'y', 'z'],
				ruleId: 'test-rule',
			});
		},
		undefined,
		undefined,
		'`expected` is array.',
	);
});

test('Error message', () => {
	let error;
	try {
		assertToken(token, {
			expected: ['expectedValue', {type: 'expectedType'}],
			ruleId: 'test-rule',
		});
	} catch (error_) {
		error = error_;
	}

	assert.isTrue(
		error.message.includes(
			JSON.stringify({value: token.value, type: token.type}),
		),
		'Should include actual token info.',
	);
	assert.isTrue(
		error.message.includes(JSON.stringify({value: 'expectedValue'})) &&
			error.message.includes(JSON.stringify({type: 'expectedType'})),
		'Should include expected token info.',
	);
	assert.isFalse(
		error.message.includes('extraKeyInToken'),
		'Should not include extra key in token.',
	);
	const correctIssueLink =
		'https://github.com/es-tooling/eslint-plugin-unicorn-x/issues/new?title=' +
		encodeURIComponent(
			'`test-rule`: Unexpected token \'{"value":"b","type":"a"}\'',
		);
	assert.isTrue(
		error.message.includes(correctIssueLink),
		'Should include issue link.',
	);

	expect(error).toMatchSnapshot();
});
