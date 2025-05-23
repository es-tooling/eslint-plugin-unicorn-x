import outdent from 'outdent';
import {getTester} from './utils/test.js';

const {test} = getTester(import.meta);

const MESSAGE_ID_ERROR = 'error';
const MESSAGE_ID_SUGGESTION = 'suggestion';

const methods = {
	parseInt: {
		safe: true,
		code: 'parseInt("10", 2);',
	},
	parseFloat: {
		safe: true,
		code: 'parseFloat("10.5");',
	},
	isNaN: {
		safe: false,
		code: 'isNaN(10);',
	},
	isFinite: {
		safe: false,
		code: 'isFinite(10);',
	},
};

const createError = (name, suggestionOutput) => {
	const {safe} = methods[name];

	const error = {
		messageId: MESSAGE_ID_ERROR,
		data: {
			description: name,
			property: name,
		},
	};

	const suggestions = safe
		? undefined
		: [
				{
					messageId: MESSAGE_ID_SUGGESTION,
					data: {
						description: name,
						property: name,
					},
					output: suggestionOutput,
				},
			];

	return {
		...error,
		suggestions,
	};
};

const invalidMethodTest = ({code, output, name, suggestionOutput}) => {
	const {safe} = methods[name];
	const test = {
		code,
		errors: [createError(name, suggestionOutput)],
	};
	if (safe) {
		test.output = output;
	}

	return test;
};

// Methods
test({
	valid: [
		'Number.parseInt("10", 2);',
		'Number.parseFloat("10.5");',
		'Number.isNaN(10);',
		'Number.isFinite(10);',

		// Shadowed
		...Object.entries(methods).map(
			([name, {code}]) => outdent`
				const ${name} = function() {};
				${code}
			`,
		),
		...Object.entries(methods).map(
			([name, {code}]) => outdent`
				const {${name}} = Number;
				${code}
			`,
		),
		...Object.entries(methods).map(
			([name, {code}]) => outdent`
				const ${name} = function() {};
				function inner() {
					return ${code}
				}
			`,
		),

		// Not read
		'global.isFinite = Number.isFinite;',
		'global.isFinite ??= 1;',
		'isFinite ||= 1;',
		'[global.isFinite] = [];',
		'[global.isFinite = 1] = [];',
		'[[global.isFinite = 1]] = [];',
		'[isFinite] = [];',
		'[isFinite = 1] = [];',
		'[[isFinite = 1]] = [];',
		'({foo: global.isFinite} = {});',
		'({foo: global.isFinite = 1} = {});',
		'({foo: {bar: global.isFinite = 1}} = {});',
		'({foo: isFinite} = {});',
		'({foo: isFinite = 1} = {});',
		'({foo: {bar: isFinite = 1}} = {});',
		'delete global.isFinite;',
	],

	invalid: [
		invalidMethodTest({
			code: 'parseInt("10", 2);',
			output: 'Number.parseInt("10", 2);',
			name: 'parseInt',
		}),
		invalidMethodTest({
			code: 'parseFloat("10.5");',
			output: 'Number.parseFloat("10.5");',
			name: 'parseFloat',
		}),
		invalidMethodTest({
			code: 'isNaN(10);',
			suggestionOutput: 'Number.isNaN(10);',
			name: 'isNaN',
		}),
		invalidMethodTest({
			code: 'isFinite(10);',
			suggestionOutput: 'Number.isFinite(10);',
			name: 'isFinite',
		}),
		{
			code: outdent`
				const a = parseInt("10", 2);
				const b = parseFloat("10.5");
				const c = isNaN(10);
				const d = isFinite(10);
			`,
			output: outdent`
				const a = Number.parseInt("10", 2);
				const b = Number.parseFloat("10.5");
				const c = isNaN(10);
				const d = isFinite(10);
			`,
			errors: [
				createError('parseInt'),
				createError('parseFloat'),
				createError(
					'isNaN',
					outdent`
						const a = parseInt("10", 2);
						const b = parseFloat("10.5");
						const c = Number.isNaN(10);
						const d = isFinite(10);
					`,
				),
				createError(
					'isFinite',
					outdent`
						const a = parseInt("10", 2);
						const b = parseFloat("10.5");
						const c = isNaN(10);
						const d = Number.isFinite(10);
					`,
				),
			],
		},
	],
});

// `NaN` and `Infinity`
const errorNaN = [
	{
		messageId: MESSAGE_ID_ERROR,
		data: {
			description: 'NaN',
			property: 'NaN',
		},
	},
];

const errorPositiveInfinity = [
	{
		messageId: MESSAGE_ID_ERROR,
		data: {
			description: 'Infinity',
			property: 'POSITIVE_INFINITY',
		},
	},
];

const errorNegativeInfinity = [
	{
		messageId: MESSAGE_ID_ERROR,
		data: {
			description: '-Infinity',
			property: 'NEGATIVE_INFINITY',
		},
	},
];

function withCheckInfinity(code) {
	return {
		code,
		options: [{checkInfinity: true}],
	};
}

test({
	valid: [
		'const foo = Number.NaN;',
		'const foo = window.Number.NaN;',
		'const foo = bar.NaN;',
		'const foo = nan;',
		'const foo = "NaN";',
		// Shadowed
		outdent`
			function foo () {
				const NaN = 2
				return NaN
			}
		`,
		'const {NaN} = {};',
		'const {a: NaN} = {};',
		'const {[a]: NaN} = {};',
		'const [NaN] = [];',
		'function NaN() {}',
		'const foo = function NaN() {}',
		'function foo(NaN) {}',
		'foo = function (NaN) {}',
		'foo = (NaN) => {}',
		'function foo({NaN}) {}',
		'function foo({a: NaN}) {}',
		'function foo({[a]: NaN}) {}',
		'function foo([NaN]) {}',
		'class NaN {}',
		'const Foo = class NaN {}',
		'class Foo {NaN(){}}',
		'class Foo {#NaN(){}}',
		'class Foo3 {NaN = 1}',
		'class Foo {#NaN = 1}',
		outdent`
			NaN: for (const foo of bar) {
				if (a) {
					continue NaN;
				} else {
					break NaN;
				}
			}
		`,
		'import {NaN} from "foo"',
		'import {NaN as NaN} from "foo"',
		'import NaN from "foo"',
		'import * as NaN from "foo"',
		'export {NaN} from "foo"',
		'export {NaN as NaN} from "foo"',
		'export * as NaN from "foo"',

		'const foo = Number.POSITIVE_INFINITY;',
		'const foo = window.Number.POSITIVE_INFINITY;',
		'const foo = bar.POSITIVE_INFINITY;',
		'const foo = Number.Infinity;',
		'const foo = window.Number.Infinity;',
		'const foo = bar.Infinity;',
		'const foo = infinity;',
		'const foo = "Infinity";',
		'const foo = "-Infinity";',
		// Shadowed
		outdent`
			function foo () {
				const Infinity = 2
				return Infinity
			}
		`,
		'const {Infinity} = {};',
		'function Infinity() {}',
		'class Infinity {}',
		'class Foo { Infinity(){}}',
		'const foo = Infinity;',
		'const foo = -Infinity;',
		{
			code: 'const foo = NaN',
			options: [{checkNaN: false}],
		},
	],
	invalid: [
		{
			code: 'const foo = NaN;',
			output: 'const foo = Number.NaN;',
			errors: errorNaN,
		},
		{
			code: 'if (Number.isNaN(NaN)) {}',
			output: 'if (Number.isNaN(Number.NaN)) {}',
			errors: errorNaN,
		},
		{
			code: 'if (Object.is(foo, NaN)) {}',
			output: 'if (Object.is(foo, Number.NaN)) {}',
			errors: errorNaN,
		},
		{
			code: 'const foo = bar[NaN];',
			output: 'const foo = bar[Number.NaN];',
			errors: errorNaN,
		},
		{
			code: 'const foo = {NaN};',
			output: 'const foo = {NaN: Number.NaN};',
			errors: errorNaN,
		},
		{
			code: 'const foo = {NaN: NaN};',
			output: 'const foo = {NaN: Number.NaN};',
			errors: errorNaN,
		},
		{
			code: 'const {foo = NaN} = {};',
			output: 'const {foo = Number.NaN} = {};',
			errors: errorNaN,
		},
		{
			code: 'const foo = NaN.toString();',
			output: 'const foo = Number.NaN.toString();',
			errors: errorNaN,
		},
		{
			code: 'class Foo3 {[NaN] = 1}',
			output: 'class Foo3 {[Number.NaN] = 1}',
			errors: errorNaN,
		},
		{
			...withCheckInfinity('const foo = Infinity;'),
			output: 'const foo = Number.POSITIVE_INFINITY;',
			errors: errorPositiveInfinity,
		},
		{
			...withCheckInfinity('const foo = -Infinity;'),
			output: 'const foo = Number.NEGATIVE_INFINITY;',
			errors: errorNegativeInfinity,
		},
	],
});

test.babel({
	valid: ['class Foo2 {NaN = 1}'],
	invalid: [
		{
			code: 'class Foo2 {[NaN] = 1}',
			output: 'class Foo2 {[Number.NaN] = 1}',
			errors: 1,
		},
	],
});

test.typescript({
	valid: [
		// https://github.com/angular/angular/blob/b4972fa1656101c02c92ddbf247db6e0de139937/packages/common/src/i18n/locale_data_api.ts#L178
		{
			code: outdent`
				export enum NumberSymbol {
					Decimal,
					NaN,
				}
			`,
		},
		// https://github.com/microsoft/TypeScript/blob/114fe4deab68519a44969c1db8300003719059db/src/lib/es5.d.ts#L5
		{
			code: 'declare var NaN: number;',
		},
		// https://github.com/microsoft/TypeScript/blob/114fe4deab68519a44969c1db8300003719059db/src/lib/es5.d.ts#L566
		{
			code: outdent`
				interface NumberConstructor {
					readonly NaN: number;
				}
			`,
		},
		'declare function NaN(s: string, radix?: number): number;',
		'class Foo {NaN = 1}',
	],
	invalid: [
		{
			code: 'class Foo {[NaN] = 1}',
			output: 'class Foo {[Number.NaN] = 1}',
			errors: 1,
		},
	],
});

test.snapshot({
	valid: [
		'const foo = ++Infinity;',
		'const foo = --Infinity;',
		'const foo = -(--Infinity);',
	],
	invalid: [
		'const foo = {[NaN]: 1}',
		'const foo = {[NaN]() {}}',
		'foo[NaN] = 1;',
		'class A {[NaN](){}}',
		'foo = {[NaN]: 1}',
		withCheckInfinity('const foo = Infinity;'),
		withCheckInfinity('if (Number.isNaN(Infinity)) {}'),
		withCheckInfinity('if (Object.is(foo, Infinity)) {}'),
		withCheckInfinity('const foo = bar[Infinity];'),
		withCheckInfinity('const foo = {Infinity};'),
		withCheckInfinity('const foo = {Infinity: Infinity};'),
		withCheckInfinity('const foo = {[Infinity]: -Infinity};'),
		withCheckInfinity('const foo = {[-Infinity]: Infinity};'),
		withCheckInfinity('const foo = {Infinity: -Infinity};'),
		withCheckInfinity('const {foo = Infinity} = {};'),
		withCheckInfinity('const {foo = -Infinity} = {};'),
		withCheckInfinity('const foo = Infinity.toString();'),
		withCheckInfinity('const foo = -Infinity.toString();'),
		withCheckInfinity('const foo = (-Infinity).toString();'),
		withCheckInfinity('const foo = +Infinity;'),
		withCheckInfinity('const foo = +-Infinity;'),
		withCheckInfinity('const foo = -Infinity;'),
		withCheckInfinity('const foo = -(-Infinity);'),
		withCheckInfinity('const foo = 1 - Infinity;'),
		withCheckInfinity('const foo = 1 - -Infinity;'),
		withCheckInfinity(
			'const isPositiveZero = value => value === 0 && 1 / value === Infinity;',
		),
		withCheckInfinity(
			'const isNegativeZero = value => value === 0 && 1 / value === -Infinity;',
		),
		'const {a = NaN} = {};',
		'const {[NaN]: a = NaN} = {};',
		'const [a = NaN] = [];',
		'function foo({a = NaN}) {}',
		'function foo({[NaN]: a = NaN}) {}',
		'function foo([a = NaN]) {}',

		// Space after keywords
		withCheckInfinity('function foo() {return-Infinity}'),

		'globalThis.isNaN(foo);',
		'global.isNaN(foo);',
		'window.isNaN(foo);',
		'self.isNaN(foo);',
		'globalThis.parseFloat(foo);',
		'global.parseFloat(foo);',
		'window.parseFloat(foo);',
		'self.parseFloat(foo);',
		'globalThis.NaN',
		withCheckInfinity('-globalThis.Infinity'),

		// Not a call
		outdent`
			const options = {
				normalize: parseFloat,
				parseInt,
			};

			run(foo, options);
		`,
	],
});
