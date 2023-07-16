/*   "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
  전세계상위 1프로 이상의 모든 브라우저
  그리고 해당 브라우저의 마지막 2개 번전에 서 지원을 하겠다 packjson에 입력한다.
  */

module.exports = {
  presets: ["@babel/preset-env"],
  Plugins: ["@babel/plugin-transform-runtime"],
};
