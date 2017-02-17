const path = require("path");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");

const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";

const entry = PRODUCTION ? {
	app: ["./index.js"]
} : {
	app: ["./index.js", "webpack/hot/dev-server", "webpack-dev-server/client?http://localhost:8080"]
};
const plugins = DEVELOPMENT ? [

	new webpack.HotModuleReplacementPlugin(),
	// enable HMR globally
	new webpack.NamedModulesPlugin(),
	// prints more readable module names in the browser console on HMR updates
] : [];

plugins.push(
	new webpack.DefinePlugin({
		"PRODUCTION": JSON.stringify(PRODUCTION),
		"DEVELOPMENT": JSON.stringify(DEVELOPMENT)
	}),
	new copyWebpackPlugin([{
		from: "index.html",
		to: "index.html"
	}]));

module.exports = {
	devtool: "source-map",
	context: path.join(__dirname, "src"),
	entry: entry,
	output: {
		path: path.resolve(__dirname, "dist"),
		//path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js",
		publicPath: "/"
	},
	plugins: plugins
	/* externals: {
	     jquery: "jQuery" //jquery is external and available at the global variable jQuery
	 },*/

};