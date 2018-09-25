const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/App.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015', 'react' ]
                }
			},
			{
				test: /\.sass$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
        ]
    }
};