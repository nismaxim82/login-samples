const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    const oneOfRule = config.module.rules.find(r => r.oneOf && r.oneOf.length);
    const existedCssRuleIndex = oneOfRule.oneOf.findIndex(o => o.use && o.use.length && o.use.some(r2 => r2 === 'css-loader'));
    if (existedCssRuleIndex) {
        oneOfRule.oneOf.splice(existedCssRuleIndex, 1);
    }
    const cssLoaderConfig = {
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
                filename: '[name].css',
            }),
        ],
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
            ],
        },
    };

    const result = merge(config, cssLoaderConfig);
    return result;

    // config.plugins.push(new ExtractTextPlugin('style.css', { allChunks: true }));
    // // if (!config.module.loaders) {
    // //     config.module.loaders = [];
    // // }
    // // config.module.loaders.push({
    // //     test: /\.css$/,
    // //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    // // });
    // if (existedCssRule) {
    //     // console.log(existedCssRule.test.toString());
    //     // existedCssRule.test = /\.css$/;
    //     existedCssRule.use = [
    //         {
    //             test: /\.css$/,
    //             loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    //         }
    //     ]
    //     // existedCssRule.use = [
    //     //     { loader: "style-loader" },
    //     //     {
    //     //         loader: "css-loader",
    //     //         options: {
    //     //             modules: {
    //     //                 mode: 'local',
    //     //                 localIdentName: '[path][name]__[local]--[hash:base64:5]',
    //     //                 context: path.resolve(__dirname, 'src'),
    //     //                 hashPrefix: 'my-custom-hash',
    //     //             },
    //     //             // sourceMap: true,
    //     //         }
    //     //     }
    //     // ];
    //     // console.log(existedCssRule);
    // } else {
    //     config.module.rules.push({
    //         test: /\.css$/,
    //         use: ["css-loader"],
    //         options: {
    //             modules: 'global',
    //         },
    //     });
    // }
    // // throw 'HERE IS DEBUG';
    // // If you want to add a new alias to the config.
    // // config.resolve.alias['moduleA'] = 'moduleB';

    // // Maybe you want to turn off compression in dev mode.
    // // if (config.mode === 'development') {
    // //     config.devServer.compress = false;
    // // }

    // // Or prevent minimizing the bundle when you build.
    // // if (config.mode === 'production') {
    // //     config.optimization.minimize = false;
    // // }

    // // Finally return the new config for the CLI to use.
    // return config;
};