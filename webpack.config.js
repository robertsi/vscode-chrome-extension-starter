const path = require("path");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";

/*const entry = {
	background: ["./scripts/background.js"],
	pageAction: ["./scripts/page_action.js"],
	options: ["./scripts/options.js"],
	contentScript: ["./scripts/content_script.js"]
};*/
const entry = PRODUCTION ? {
	background: ["./scripts/background.js"],
	pageAction: ["./scripts/page_action.js"],
	options: ["./scripts/options.js"],
	contentScript: ["./scripts/content_script.js"]
} : {
		background: ["./scripts/background.js", "webpack/hot/dev-server",
			"webpack-dev-server/client?https://localhost:8080"
		],
		pageAction: ["./scripts/page_action.js", "webpack/hot/dev-server",
			"webpack-dev-server/client?https://localhost:8080"
		],
		options: ["./scripts/options.js", "webpack/hot/dev-server",
			"webpack-dev-server/client?https://localhost:8080"
		],
		contentScript: ["./scripts/content_script.js", "webpack/hot/dev-server",
			"webpack-dev-server/client?https://localhost:8080"
		],
	};
const plugins = DEVELOPMENT ? [
	new webpack.HotModuleReplacementPlugin(),
	// enable HMR globally,
	new webpack.NamedModulesPlugin(),
	// prints more readable module names in the browser console on HMR updates,
	new copyWebpackPlugin([{
		from: "./resources/manifest/manifest-dev.json",
		to: "manifest.json"
	}
	]),
] :
	[
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		}),
		new copyWebpackPlugin([{
			from: "./resources/manifest/manifest-prod.json",
			to: "manifest.json"
		}])
	];

plugins.push(
	new webpack.DefinePlugin({
		"PRODUCTION": JSON.stringify(PRODUCTION),
		"DEVELOPMENT": JSON.stringify(DEVELOPMENT)
	}),
	new copyWebpackPlugin([
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
		filename: "options.html",
		template: "./resources/pages/options.html",
		chunks: ["options"],
		//inject: false
	}),
	new HTMLWebpackPlugin({
		filename: "background.html",
		template: "./resources/pages/background.html",
		chunks: ["background"],
		//inject: false
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
		publicPath: PRODUCTION ? "" : "https://localhost:8080/"
	},
	plugins: plugins,
	resolve: {
		alias: {
			jquery: PRODUCTION ? "jquery/dist/jquery.min" : "jquery/src/jquery"
		}
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};