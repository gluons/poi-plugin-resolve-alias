const { green, red } = require('chalk');
const { expect } = require('chai');
const successSymbol = require('success-symbol');

/**
 * A plugin for testing.
 *
 * @param {{ aliases: { [name: string]: string } }} options Plugin options.
 */
module.exports = function testPlugin(options = { aliases: {} }) {
	return poi => {
		if (!poi.cli.isCurrentCommand('test')) {
			return;
		}

		poi.cli.handleCommand('test', 'Test', () => {
			const webpackConfig = poi.createWebpackConfig();
			const aliases = webpackConfig.resolve.alias;
			const expectedAliases = options.aliases;

			try {
				expect(aliases).to.include(expectedAliases);
				process.stdout.write(green(`${successSymbol} Aliases should be set into Poi\n`));
			} catch (err) {
				let errMsg = err instanceof Error ? err.stack : err.toString();
				process.stderr.write(`${ red(errMsg) }\n`);
				process.stderr.end();
				process.exit(1);
			}
		});
	};
};
