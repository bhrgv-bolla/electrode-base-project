module.exports = {
  cache: {
    cacheId: "electrode-base-project",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-base-project",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
