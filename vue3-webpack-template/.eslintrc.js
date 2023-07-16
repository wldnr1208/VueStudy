module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-strongly-recommend", "eslint:recommended"],
  parserOption: {
    paser: "babel-eslint",
  },
  rules: {
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
      {
        "vue/html-self-closing": [
          "error",
          {
            html: {
              void: "never",
              normal: "always",
              component: "always",
            },
            svg: "always",
            math: "always",
          },
        ],
      },
    ],
  },
};
