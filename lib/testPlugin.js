const { green, red } = require('chalk');
const { expect } = require('chai');
const { tick, cross } = require('figures');

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
				green(`${tick} Aliases should be set into Poi\n`)
			);
		} catch (err) {
			const errMsg =
				err instanceof Error
					? `${err.name}: ${err.message}`
					: err.toString();

			process.stderr.write(red(`${cross} ${errMsg}\n`));
			process.stderr.end();
			process.exit(1);
		}
	});
};
