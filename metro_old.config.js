const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig();
  // console.log('HERERERE');
  return config;
  const {
    resolver: { sourceExts }
  } = config;
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