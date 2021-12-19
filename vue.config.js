const path = require('path')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./src/assets/scss/utility/vars.scss";`,
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('scss')
            .oneOf('vue')

            .uses
            .clear()
            .end()

            .use('vue-style-loader')
            .loader('vue-style-loader')
            .end()

            .use('css-loader')
            .loader(__dirname + '/node_modules/css-loader/dist/cjs.js')
            .options({
                sourceMap: false,
                importLoaders: 2
            })
            .end()

            .use('postcss-loader')
            .loader(__dirname + '/node_modules/postcss-loader/src/index.js')
            .options({
                sourceMap: false,
                plugins: [
                    function () { /* omitted long function */
                    }
                ]
            })
            .end()

            .use('sass-loader')
            .loader(__dirname + '/node_modules/sass-loader/dist/cjs.js')
            .options({
                sourceMap: false,
                additionalData: `@import "./src/assets/scss/utility/vars.scss";`,
            })
            .end()

        // ========== PUG BEM ==========

        config.module
            .rule('pug')
            .oneOf('vue-loader')

            .use('pug-plain')
            .loader('pug-plain-loader')
            .end()

            .use('pug-bem')
            .loader('pug-bem-plain-loader')
            // .options({
            //     b: true
            // })
            .end()

        config.module
            .rule('pug')
            .oneOf('raw-pug-files')

            .use('pug-plain')
            .loader('pug-plain-loader')
            .end()

            .use('pug-bem')
            .loader('pug-bem-plain-loader')
            // .options({
            //     b: true
            // })
            .end()
    },
}
