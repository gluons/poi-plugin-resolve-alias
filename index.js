const path = require('path');

/**
 * Transform raw aliases to array of alias with resolved path.
 *
 * @param {object} aliasMap Raw aliases.
 * @param {string} cwd Current working directory.
 * @returns Array of alias.
 */
function transformAlias(aliasMap, cwd = process.cwd()) {
	return Object.keys(aliasMap).map(aliasName => {
		return {
			name: aliasName,
			path: path.resolve(cwd, aliasMap[aliasName])
		};
	});
}

module.exports = (aliases = {}) => poi => {
	let cwd = poi.options.cwd;
	let aliasList = transformAlias(aliases, cwd);

	poi.extendWebpack(config => {
		aliasList.forEach(alias => {
			config.resolve.alias
				.set(alias.name, alias.path);
		});
	});
};
