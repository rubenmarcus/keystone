/*
This file exports the common packages required by the Admin UI.

It is used by build.js to to generate public/js/packages.js, and the packages
below are excluded from the browserify builds generated by
admin/server/middleware/browserify.js
*/

module.exports = [
	'@jedwatson/react-color',
	'async',
	'blacklist',
	'bytes',
	'classnames',
	'color',
	'display-name',
	'elemental',
	'expression-match',
	'i',
	'list-to-array',
	'lodash',
	'marked',
	'moment',
	'numeral',
	'qs',
	'react-addons-css-transition-group',
	'react-alt-text',
	'react-day-picker',
	'react-dnd-html5-backend',
	'react-dnd',
	'react-dom',
	'react-redux',
	'react-router',
	'react-router-redux',
	'react-select',
	'react',
	'redux-thunk',
	'redux',
	'vkey',
	'xhr',
];