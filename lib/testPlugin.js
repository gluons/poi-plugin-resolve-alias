const { green, red } = require('chalk');
const { expect } = require('chai');
const successSymbol = require('success-symbol');

exports.name = 'resolve-alias-testing';
/**
 * @param {import('poi')} api
 * @param {Record<string, string>} expectedAliases
 */
exports.cli = (api, expectedAliases) => {
	api.cli.command('test', 'Run tests').action(() => {
		const webpackConfig = api.createWebpackChain().toConfig();
		const aliases = webpackConfig.resolve.alias;

		try {
			expect(aliases).to.include(expectedAliases);
			process.stdout.write(
				green(`${successSymbol} Aliases should be set into Poi\n`)
			);
		} catch (err) {
			const errMsg =
				err instanceof Error
					? `${err.name}: ${err.message}`
					: err.toString();

			process.stderr.write(`${red(errMsg)}\n`);
			process.stderr.end();
			process.exit(1);
		}
	});
};
