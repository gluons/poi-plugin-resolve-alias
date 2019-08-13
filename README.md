# poi-plugin-resolve-alias
[![license](https://img.shields.io/github/license/gluons/poi-plugin-resolve-alias.svg?style=flat-square)](./LICENSE)
[![npm](https://img.shields.io/npm/v/poi-plugin-resolve-alias.svg?style=flat-square)](https://www.npmjs.com/package/poi-plugin-resolve-alias)
[![npm](https://img.shields.io/npm/dt/poi-plugin-resolve-alias.svg?style=flat-square)](https://www.npmjs.com/package/poi-plugin-resolve-alias)
[![Travis](https://img.shields.io/travis/gluons/poi-plugin-resolve-alias.svg?style=flat-square)](https://travis-ci.org/gluons/poi-plugin-resolve-alias)

Use your custom [resolve alias](https://webpack.js.org/configuration/resolve/#resolve-alias) in [Poi](https://poi.js.org/).

## Why?

**Poi** provides `@` as alias to the path to `src` folder.

But if you want the alias to the folder outside `src` folder, use this.

## Installation

> **Requirement:** You need to install [Poi](https://github.com/egoist/poi) first.

**Via NPM:**

```bash
npm install --save-dev poi-plugin-resolve-alias
```

**Via Yarn:**

```bash
yarn add --dev poi-plugin-resolve-alias
```

## Usage

Add this preset into your `poi.config.js` config file.

```javascript
const aliases = {
	'<my first alias>': '<my first resolve path>',
	'<my other alias>': '<my other resolve path>'
};

module.exports = {
	plugins: [
		{
			resolve: 'poi-plugin-resolve-alias',
			options: aliases
		}
	]
};
```
