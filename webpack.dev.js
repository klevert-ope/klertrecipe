// webpack.dev.js
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/javascript/routing.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'source-map', // Enable source maps for debugging
	devServer: {
		contentBase: './dist',
		open: true,
	},
	module: {
		rules: [
			// Add development-specific rules if needed
		],
	},
};
