var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	hot: true,
	inline: true,
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	},
	contentBase: "dist",
	historyApiFallback: true,
	 watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
});
server.listen(8080, 'localhost', function() {});