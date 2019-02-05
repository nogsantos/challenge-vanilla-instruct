const path = require('path');

module.exports = {
	entry: {
		app: './src/js/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dev')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},
	devtool: 'source-map',
	mode: 'development'
};
