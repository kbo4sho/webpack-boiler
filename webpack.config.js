const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				exclude: '/node_modules/',
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			}
		]
	}
}