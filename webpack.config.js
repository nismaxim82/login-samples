const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    const oneOfRule = config.module.rules.find(r => r.oneOf && r.oneOf.length);
    const existedCssRuleIndex = oneOfRule.oneOf.findIndex(o => o.use && o.use.length && o.use.some(r2 => r2.toString().indexOf('css-loader') !== -1));
    if (existedCssRuleIndex) {
        oneOfRule.oneOf.splice(existedCssRuleIndex, 1);
    }
    const extendedConfig = {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css',
            }),
        ],
        resolve: {
            alias: {
                // "react-native/Libraries/Renderer/shims/ReactNativePropRegistry":
                //     "react-native-web/dist/modules/ReactNativePropRegistry",
                "react-native": "react-native-web"
            }
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: devMode,
                        },
                    }, 'css-loader'],
                },
                {
                    test: /\.[jt]sx?$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["babel-preset-expo"],
                            plugins: [
                                "@babel/plugin-proposal-class-properties",
                                "@babel/plugin-transform-modules-commonjs"
                            ],
                            cacheDirectory: true
                        }
                    },
                    include: [
                        path.resolve("node_modules/native-base-shoutem-theme"),
                        path.resolve("node_modules/react-navigation"),
                        path.resolve("node_modules/react-native-easy-grid"),
                        path.resolve("node_modules/react-native-drawer"),
                        path.resolve("node_modules/react-native-safe-area-view"),
                        path.resolve("node_modules/react-native-vector-icons"),
                        path.resolve(
                            "node_modules/react-native-keyboard-aware-scroll-view"
                        ),
                        path.resolve("node_modules/react-native-web"),
                        path.resolve("node_modules/react-native-tab-view"),
                        path.resolve("node_modules/static-container")
                    ]
                },
            ],
        },
    };

    const result = merge(config, extendedConfig);
    return result;
};