import {defineConfig} from 'vitest/config';
import path from 'node:path';

export default defineConfig({
	test: {
		globals: true,
		resolveSnapshotPath: (testPath) => {
			return path.join(
				path.join(path.dirname(testPath), 'snapshots'),
				`${path.basename(testPath)}.md`
			);
		},
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
