const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    const oneOfRule = config.module.rules.find(r => r.oneOf && r.oneOf.length);
    const existedCssRule = oneOfRule.oneOf.find(o => o.use && o.use.length && o.use.some(r2 => r2 === 'css-loader'));
    if (existedCssRule) {
        // console.log(existedCssRule.test.toString());
        // existedCssRule.test = /\.css$/;
        existedCssRule.use = [
            { loader: "style-loader" },
            {
                loader: "css-loader",
                options: {
                    modules: 'global',
                    sourceMap: true,
                }
            }
        ];
        // console.log(existedCssRule);
    } else {
        config.module.rules.push({
            test: /\.css$/,
            use: ["css-loader"],
            options: {
                modules: 'global',
            },
        });
    }
    // throw 'HERE IS DEBUG';
    // If you want to add a new alias to the config.
    // config.resolve.alias['moduleA'] = 'moduleB';

    // Maybe you want to turn off compression in dev mode.
    // if (config.mode === 'development') {
    //     config.devServer.compress = false;
    // }

    // Or prevent minimizing the bundle when you build.
    // if (config.mode === 'production') {
    //     config.optimization.minimize = false;
    // }

    // Finally return the new config for the CLI to use.
    return config;
};