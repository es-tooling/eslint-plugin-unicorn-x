#!/usr/bin/env node
import fs, {promises as fsAsync} from 'node:fs';
import enquirer from 'enquirer';
import unicorn from '../index.js';

const rules = Object.keys(unicorn.rules);
const resolveFile = (file) => new URL(`../${file}`, import.meta.url);

function checkFiles(ruleId) {
	const files = [
		`docs/rules/${ruleId}.md`,
		`rules/${ruleId}.js`,
		`test/${ruleId}.js`,
		`test/snapshots/${ruleId}.js.md`,
		`test/snapshots/${ruleId}.js.snap`,
	];

	for (const file of files) {
		if (fs.existsSync(resolveFile(file))) {
			throw new Error(`“${file}” already exists.`);
		}
	}
}

async function renameFile(source, target) {
	source = resolveFile(source);
	target = resolveFile(target);

	if (fs.existsSync(source)) {
		await fsAsync.rename(source, target);
	}
}

async function renameRule(from, to) {
	await renameFile(`docs/rules/${from}.md`, `docs/rules/${to}.md`);
	await renameFile(`rules/${from}.js`, `rules/${to}.js`);
	await renameFile(`test/${from}.js`, `test/${to}.js`);
	await renameFile(
		`test/snapshots/${from}.js.md`,
		`test/snapshots/${to}.js.md`,
	);
	await renameFile(
		`test/snapshots/${from}.js.snap`,
		`test/snapshots/${to}.js.snap`,
	);

	for (const file of [
		'readme.md',
		'index.js',
		`docs/rules/${to}.md`,
		`rules/${to}.js`,
		`test/${to}.js`,
		`test/snapshots/${to}.js.md`,
	].map((file) => resolveFile(file))) {
		if (!fs.existsSync(file)) {
			continue;
		}

		let text = await fsAsync.readFile(file, 'utf8');
		text = text.replaceAll(from, to);

		await fsAsync.writeFile(file, text);
	}
}

const run = async () => {
	const originalRuleId = await new enquirer.AutoComplete({
		message: 'Select the rule you want rename:',
		limit: 10,
		choices: rules,
	}).run();

	const ruleId = await new enquirer.Input({
		message: 'New name:',
		initial: originalRuleId,
	}).run();

	if (!ruleId || originalRuleId === ruleId) {
		return;
	}

	if (rules.includes(ruleId)) {
		console.log(`${ruleId} already exists.`);
		return;
	}

	checkFiles(ruleId);
	renameRule(originalRuleId, ruleId);
};

await run();
