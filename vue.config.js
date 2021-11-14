/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    chainWebpack: config => {
        config.module
            // .rule('vue')
            //     .use('vue-loader')
            //     .options({
            //         loaders: {
            //             'pug': [
            //                 'pug-bem-plain-loader'
            //             ]
            //         }
            //     })
            //     .end()
            .rule('vue')
                .use('vue-loader')
                .options({
                    loaders: {
                        'pug': {
                            loader: 'pug-bem-plain-loader',
                            options: {
                                b: true
                            }
                        }
                    }
                })
    }
}
