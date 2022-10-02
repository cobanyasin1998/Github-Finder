const path = require("path");
module.exports = {
  module:{
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader","sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"]
      }
    ],
},
  entry: "./src/app.js",
  mode:'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
 
};
