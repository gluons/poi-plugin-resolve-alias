/**
 * Transform raw aliases to array of alias with resolved path.
 *
 * @param {Record<string, string>} aliasMap Raw aliases.
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
 * Plugin name.
 */
exports.name = 'resolve-alias';
/**
 * Add webpack `resolve.alias` into Poi.
 *
 * @param {import('poi')} api Poi instance.
 * @param {Record<string, string>} aliases Aliases.
 */
exports.apply = (api, aliases) => {
	const aliasList = transformAlias(aliases);

	api.hook('createWebpackChain', config => {
		aliasList.forEach(alias => {
			config.resolve.alias.set(alias.name, alias.path);
		});
	});
};
