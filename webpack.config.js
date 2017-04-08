module.exports = {
  entry: {
		statchan: "./resources/assets/js/app.js",
	},
	output: {
		path: "public/assets",
		filename: "[name].js",
	},
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
