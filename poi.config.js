const testPlugin = require('./lib/testPlugin');

const aliases = {
	'@lib': './lib',
	'@assets': './assets'
};

module.exports = {
	plugins: [
		require('./')(aliases),
		testPlugin({ aliases })
	]
};
