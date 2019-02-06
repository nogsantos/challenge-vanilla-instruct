const path = require('path');
const argv = require('yargs').argv;

module.exports = {
	entry: {
		app: './src/js/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, argv.env)
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
	mode: argv.env && argv.env == 'dev' ? 'development' : 'production'
};
