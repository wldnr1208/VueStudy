const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
  //파일을 읽어들이기 시작하는 진입점
  entry: "./src/main.js",
  //결과물을 반환하는 설정
  output: {
    //구성이 복잡하면 아래 주석을 열어야한다.
    /*    path: path.resolve(__dirname, "public"),
    filename: "main.js", */
    //전에 만든 파일 삭제
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "static",
        },
      ],
    }),
    new VueLoaderPlugin(),
  ],
};
