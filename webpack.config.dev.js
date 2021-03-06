import webpack from 'webpack'
import path from 'path'

export default {
	devtool: 'inline-source-map',
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: __dirname + '/src', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
		{test: /\.js$/,exclude: /node_modules/, include: path.join(__dirname, 'src'), loaders: ['babel']},
		{test: /(\.css)$/, loaders: ['style', 'css']},
		{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},//eslint-disable-line security/detect-unsafe-regex
		{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
		{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},//eslint-disable-line security/detect-unsafe-regex
		{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},//eslint-disable-line security/detect-unsafe-regex
		{test: /\.scss$/, loaders: ['style', 'css', 'sass']},
		{test: /\.jpg/, loader: 'file'}
		]
	}
  };
