const { resolve } = require('path');

const aliases = {
	'@lib': './lib',
	'@assets': './assets'
};

module.exports = {
	plugins: [
		{
			resolve: resolve(__dirname, './index.js'),
			options: aliases
		},
		{
			resolve: resolve(__dirname, './lib/testPlugin.js'),
			options: aliases
		}
	]
};
