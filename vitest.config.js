import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		include: [
			"test/*.js",
			"test/unit/*.js"
		],
		coverage: {
			reporter: ['text', 'lcov'],
			include: [
				"rules/**/*.js",
				"configs/**/*.js"
			]
		}
	}
});
