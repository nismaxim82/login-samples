const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve(
        "react-native-typed-css-transformer"
      )
    },
    resolver: {
      sourceExts: [...sourceExts, "css"]
    }
  };
})();