
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: ["./src/scripts/index.js"//,
    //"webpack/hot/dev-server",
    //"webpack-dev-server/client?http://localhost:8080"
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin()  
    ],
  //  externals: {
	//	jquery: 'jQuery' //jquery is external and available at the global variable jQuery
//	},
    output: {
        filename: "/scripts/bundle.js",
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
}