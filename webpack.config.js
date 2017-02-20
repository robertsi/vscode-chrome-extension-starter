const path = require("path");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";

const entry = PRODUCTION ? {
	background: ["./resources/pages/background.js"],
	pageAction: ["./resources/pages/page_action.js"],
	browserAction: ["./resources/pages/browser_action.js"],
} : {
	background: ["./resources/pages/background.js", "webpack/hot/dev-server",
		"webpack-dev-server/client?http://localhost:8080"
	],
	pageAction: ["./resources/pages/page_action.js", "webpack/hot/dev-server",
		"webpack-dev-server/client?http://localhost:8080"
	],
	browserAction: ["./resources/pages/browser_action.js", "webpack/hot/dev-server",
		"webpack-dev-server/client?http://localhost:8080"
	],
};
const plugins = DEVELOPMENT ? [

	new webpack.HotModuleReplacementPlugin(),
	// enable HMR globally
	new webpack.NamedModulesPlugin()
	// prints more readable module names in the browser console on HMR updates,

] : [new webpack.optimize.UglifyJsPlugin({
	sourceMap: true
})
];

plugins.push(
	new webpack.DefinePlugin({
		"PRODUCTION": JSON.stringify(PRODUCTION),
		"DEVELOPMENT": JSON.stringify(DEVELOPMENT)
	}),
	new copyWebpackPlugin([{
		from: "./resources/manifest/manifest.json"
	},
	{
		from: "./resources/icons/icon.png",
	}
	]),
	new HTMLWebpackPlugin({
		filename: "page_action.html",
		template: "./resources/pages/page_action.html",
		chunks: ["pageAction"]
	}),
	new HTMLWebpackPlugin({
		filename: "browser_action.html",
		template: "./resources/pages/browser_action.html",
		chunks: ["browserAction"]
	})
);

module.exports = {
	devtool: "source-map",
	context: path.join(__dirname, "src"),
	entry: entry,
	output: {
		path: path.resolve(__dirname, "dist"),
		//path: path.join(__dirname, "dist"),
		filename: PRODUCTION ? "[name].bundle.min.js" : "[name].bundle.js",
		//chunkFilename: "[id].chunk.js",
		publicPath: ""
	},
	plugins: plugins,
	resolve: {
		alias: {
			jquery: PRODUCTION ? "jquery/dist/jquery.min" : "jquery/src/jquery"
		}
	}
};