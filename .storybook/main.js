const { themes } = require('@storybook/theming')

const path = require('path')

module.exports.parameters = {
    docs: {
        theme: themes.dark,
    },
}

module.exports = {
    stories: [
        '../**/*.stories.(js|jsx|ts|tsx)',
        '../src/stories/**/*.stories.mdx',
        '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    features: {
        babelModelV7: true,
    },
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-addon-designs',
    ],
    webpackFinal: async (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, '../src/')

        config.module.rules.push({
            test: /\.pug$/,
            use: ['pug-plain-loader', 'pug-bem-plain-loader'],
        })

        config.module.rules.push({
            test: /\.scss$/,
            oneOf: [
                {
                    resourceQuery: /\?vue/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                additionalData:
                                    '@import "~@/assets/scss/utility/vars";',
                            },
                        },
                    ],
                },
            ],

            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData:
                            '@import "~@/assets/scss/utility/vars";',
                    },
                },
            ],
        })
        return config
    },
}
