module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'standard-with-typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	parser: '@typescript-eslint/parser',

	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-explicit-any': 0
	}
};

