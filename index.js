/**
 * Transform raw aliases to array of alias with resolved path.
 *
 * @param {{ [name: string]: string }} aliasMap Raw aliases.
 * @returns Array of alias.
 */
function transformAlias(aliasMap) {
	return Object.keys(aliasMap).map(aliasName => {
		return {
			name: aliasName,
			path: aliasMap[aliasName]
		};
	});
}

/**
 * Add webpack `resolve.alias` into Poi.
 *
 * @param {{ [name: string]: string }} aliases Aliases.
 */
module.exports = (aliases = {}) => poi => {
	let aliasList = transformAlias(aliases);

	poi.chainWebpack(config => {
		aliasList.forEach(alias => {
			config.resolve.alias
				.set(alias.name, alias.path);
		});
	});
};
