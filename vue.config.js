/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('pug')
                .oneOf('vue-loader')
                    .use('pug-plain')
                    .loader('pug-plain-loader')
            .end()
        config.module
            .rule('pug')
                .oneOf('vue-loader')
                    .use('pug-bem')
                    .loader('pug-bem-plain-loader')
            .end()
        config.module
            .rule('pug')
                .oneOf('raw-pug-files')
                    .use('pug-plain')
                    .loader('pug-plain-loader')
            .end()
        config.module
            .rule('pug')
                .oneOf('raw-pug-files')
                    .use('pug-bem')
                    .loader('pug-bem-plain-loader')
            .end()
    }
}
