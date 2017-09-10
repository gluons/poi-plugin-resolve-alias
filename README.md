# poi-preset-resolve-alias
[![license](https://img.shields.io/github/license/gluons/poi-preset-resolve-alias.svg?style=flat-square)](./LICENSE)
[![npm](https://img.shields.io/npm/v/poi-preset-resolve-alias.svg?style=flat-square)](https://www.npmjs.com/package/poi-preset-resolve-alias)
[![npm](https://img.shields.io/npm/dt/poi-preset-resolve-alias.svg?style=flat-square)](https://www.npmjs.com/package/poi-preset-resolve-alias)

Use your custom [resolve alias](https://webpack.js.org/configuration/resolve/#resolve-alias) in [Poi](https://github.com/egoist/poi).

## Why?

**Poi** provides `@` as alias to the path to `src` folder.

But if you want the alias to the folder outside `src` folder, use this.

## Installation

> **Requirement:** You need to install [Poi](https://github.com/egoist/poi) first.

**Via NPM:**

```bash
npm install --save-dev poi-preset-resolve-alias
```

**Via Yarn:**

```bash
yarn add --dev poi-preset-resolve-alias
```

## Usage

Add this preset into your `poi.config.js` config file.

```javascript
module.exports = {
	presets: [
		require('poi-preset-resolve-alias')({
			'<my first alias>': '<my first resolve path>',
			'<my other alias>': '<my other resolve path>',
		})
	]
};
```
