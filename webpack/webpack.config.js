//const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  //파일을 읽어들이기 시작하는 진입점
  entry: "./js/main.js",
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
        //? s가 있을수도 없을수도 있다.
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
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
  ],
};
