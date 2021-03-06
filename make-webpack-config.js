const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function extsToRegExp(exts) {
	return new RegExp("\\.(" + exts.map(function(ext) {
		return ext.replace(/\./g, "\\.");
	}).join("|") + ")(\\?.*)?$");
}

function loadersByExtension(obj) {
	var loaders = [];
	Object.keys(obj).forEach(function(key) {
		var exts = key.split("|");
		var value = obj[key];
		var entry = {
			extensions: exts,
			test: extsToRegExp(exts)
		};
		if(Array.isArray(value)) {
			entry.loaders = value;
		} else if(typeof value === "string") {
			entry.loader = value;
		} else {
			Object.keys(value).forEach(function(valueKey) {
				entry[valueKey] = value[valueKey];
			});
		}
		loaders.push(entry);
	});
	return loaders;
};

var alias = {
	'components': 'js/components',
	'actions': 'js/actions',
	'reducers': 'js/reducers'
}

module.exports = function(options) {
    var node_modules_dir = path.resolve(__dirname, 'node_modules');
    var cssLoader = "css-loader";
	var stylesheetLoaders = {
		"css": cssLoader,
		"less": [cssLoader, "less-loader"],
		"styl": [cssLoader, "stylus-loader"],
		"scss|sass": [cssLoader, "sass-loader"]
	};

	var publicPath = (options.devServer) ?
		"http://localhost:5555/_assets/"
		:
		"http://localhost:6006/_assets/";

	Object.keys(stylesheetLoaders).forEach(function(ext) {
		var stylesheetLoader = stylesheetLoaders[ext];
		if(Array.isArray(stylesheetLoader)) stylesheetLoader = stylesheetLoader.join("!");
		stylesheetLoaders[ext] = ExtractTextPlugin.extract({fallback: "style-loader", use: stylesheetLoader});
	});

	var plugins = [];

	if (!options.devServer) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				compressor: {
					warnings: false
				},
				sourceMap: false
			}),
			new webpack.optimize.DedupePlugin() // don`t use it in watch mod!
		);
	}

    var loaders = {
          "jsx":{
              loader:"babel-loader?stage=0",
			  exclude: [path.join(__dirname, "node_modules")],
			  include: [
                  path.join(__dirname, "resources/assets/js")
              ],
			  query: {
                //   cacheDirectory: true,
              }
          },
          "js":{
              loader:"babel-loader?stage=0",
			  exclude: [path.join(__dirname, "node_modules")],
			  include: [
                  path.join(__dirname, "resources/assets/js")
              ],
			  query: {
                //   cacheDirectory: true,
              }
          },
          "json": "json-loader",
        //   "coffee": "coffee-redux-loader",
          "json5": "json5-loader",
          "txt": "raw-loader",
          "png|jpg|jpeg|gif|svg|ico": "url-loader?limit=5000",
          "woff|woff2": "url-loader?limit=100000",
          "ttf|eot": "file-loader",
        //   "wav|mp3": "file-loader",
          "html": "html-loader",
          "md|markdown": ["html-loader", "markdown-loader"],
    };

	return {
		devtool: options.devtool,
		debug: options.debug ? true : false,
	  	entry: {
			statchan: path.resolve(__dirname, 'resources/assets/js/app.js'),
		},
		output: {
			path: path.resolve(__dirname, 'public/assets'),
			publicPath: publicPath,
			filename: "[name].js",
		},
		module: {
			loaders: [].concat(loadersByExtension(loaders)).concat(loadersByExtension(stylesheetLoaders)),
		},
        plugins: plugins,
	    resolve: {
			extensions: ["", ".web.js", ".js", ".jsx", '.css', '.less'],
			root: path.resolve(__dirname, "resources/assets"),
			modulesDirectories: ["node_modules"],
			alias: alias
		}
	};
}
