export default {
	'**/*.{js,ts}': ['eslint'],
	'**/*.{md,json,yml,yaml}': ['prettier --check', 'cspell --no-progress --no-must-find-files'],
};
