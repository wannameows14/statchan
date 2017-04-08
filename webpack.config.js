module.exports = {
  entry: {
		statchan: "./resources/assets/js/app.js",
	},
	output: {
		path: "public/assets",
		filename: "[name].js",
	},
	module : {
        loaders: [
				 {
					exclude: /(node_modules|bower_components)/,
					test: /\.js$/,
					loader: 'babel-loader'
				 },
        ]
    }
};
