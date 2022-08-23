module.exports = {
	$schema: 'http://json.schemastore.org/eslintrc',
	root: true,
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	env: {
		'astro/astro': true,
		es2022: true,
		node: true,
	},
	extends: ['eslint:recommended'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			extends: [
				'plugin:astro/recommended',
				'plugin:@typescript-eslint/recommended',
			],
		},
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
		},
	],
};
