module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				exclude: /node-modules/,
				query: {
					presets: ['es2015']
				}

			}
		]
	}
};