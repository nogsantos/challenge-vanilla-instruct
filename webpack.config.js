const path = require('path');

module.exports = {
	entry: {
		app: './src/js/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dev'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}
				]
			}
		]
	},
	devtool: 'source-map',
	mode: 'development'
};
