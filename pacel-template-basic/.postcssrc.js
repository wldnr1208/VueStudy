//.은 보통 구성옵션

//CommomJs

//보통 브라우저에서 내보내기 가져오기
//import autoprefixer from "autoprefixer"
//const autoprefixer = require("autoprefixer");

//export
/*
module.exports = {
  Plugin: [autoprefixer],
};
  */

/* module.exports = {
  Plugin: [autoprefixer],
};



require("autoprefixer"); */

//위에내용을 간소화
module.exports = {
  Plugin: [require("autoprefixer")],
};
