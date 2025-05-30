#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import enquirer from 'enquirer';
import openEditor from 'open-editor';
import {x} from 'tinyexec';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(dirname, '..');

function checkFiles(ruleId) {
	const files = [
		`docs/rules/${ruleId}.md`,
		`rules/${ruleId}.js`,
		`test/${ruleId}.js`,
		`test/snapshots/${ruleId}.js.md`,
		`test/snapshots/${ruleId}.js.snap`,
	];

	for (const file of files) {
		if (fs.existsSync(path.join(ROOT, file))) {
			throw new Error(`“${file}” already exists.`);
		}
	}
}

async function renderTemplate({source, target, data}) {
	const targetFile = path.join(ROOT, target);
	const module_ = await import(`./template/${source}.js`);

	const content = module_.default(data);
	return fs.writeFileSync(targetFile, content);
}

async function getData() {
	const questions = [
		{
			type: 'input',
			name: 'id',
			message: 'Rule name:',
			validate(value) {
				if (!value) {
					return 'Rule name is required.';
				}

				if (!/^[a-z-]+$/.test(value)) {
					return 'Invalid rule name.';
				}

				return true;
			},
		},
		{
			type: 'input',
			name: 'description',
			message: 'Rule description:',
			validate(value) {
				if (!value) {
					return 'Rule description is required.';
				}

				return true;
			},
		},
		{
			type: 'select',
			name: 'fixableType',
			message: 'Is it fixable?',
			choices: ['Code', 'Whitespace', 'No'],
			result: (value) => (value === 'No' ? false : value.toLowerCase()),
		},
		{
			type: 'select',
			name: 'type',
			message: 'Type:',
			choices: ['problem', 'suggestion', 'layout'],
		},
		{
			type: 'select',
			name: 'hasSuggestions',
			message: 'Does it provides suggestions?',
			choices: ['Yes', 'No'],
			result: (value) => value === 'Yes',
		},
	];

	const data = await enquirer.prompt(questions);

	return data;
}

const data = await getData();
const {id} = data;

checkFiles(id);
await renderTemplate({
	source: 'documentation',
	target: `docs/rules/${id}.md`,
	data,
});
await renderTemplate({
	source: 'rule',
	target: `rules/${id}.js`,
	data,
});
await renderTemplate({
	source: 'test',
	target: `test/${id}.js`,
	data,
});

const filesToOpen = [`docs/rules/${id}.md`, `rules/${id}.js`, `test/${id}.js`];
try {
	await openEditor(filesToOpen);
} catch {
	// https://github.com/sindresorhus/open-editor/issues/15
	try {
		await x('code', ['--new-window', '.', ...filesToOpen], {cwd: ROOT});
	} catch {
		// do nothing
	}
}
