module.exports = {
  plugins: [
    require("cssnano")({
      preset: "default"
    }),
    require("postcss-will-change-transition"),
    require("postcss-will-change")
  ]
};
