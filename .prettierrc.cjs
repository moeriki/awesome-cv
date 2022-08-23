module.exports = {
	arrowParens: 'always',
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,

	plugins: [
		require.resolve('prettier-plugin-astro'),
		require.resolve('prettier-plugin-package'),
	],
	overrides: [
		{
			files: '*.astro',
			options: { parser: 'astro' },
		},
	],
};
