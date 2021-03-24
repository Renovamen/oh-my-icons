const isProd = process.env.NODE_ENV === "production";
const isExtractCSS = !!process.env.EXTRACT_CSS;

module.exports = {
  publicPath: isProd ? "/oh-vue-icons/" : "/",
  outputDir: isExtractCSS ? "dist-css" : "dist",
  css: {
    extract: isExtractCSS
  }
};
