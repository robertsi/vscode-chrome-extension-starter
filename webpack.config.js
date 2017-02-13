
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: [
        "./index.js",
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {        
        path: path.resolve(__dirname, "www"),
        //path: path.join(__dirname, 'dist'),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js",      
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
         // prints more readable module names in the browser console on HMR updates
    ],
   /* externals: {
        jquery: 'jQuery' //jquery is external and available at the global variable jQuery
    },*/
  
}