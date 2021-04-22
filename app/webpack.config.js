const path = require("path")

const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  experiments: {
    asset: true,
  },

  entry: path.resolve(__dirname, "src", "index.tsx"),

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext]",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },

      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(s[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",

          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/styles/bootstrap.scss"],
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|jpeg|webp|svg)$/,
        type: "asset",
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main-[hash:8].css",
    }),
  ],

  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8087,
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
}
