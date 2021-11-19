const { themes } = require('@storybook/theming')

const path = require('path')

module.exports.parameters = {
    docs: {
        theme: themes.dark
    }
}

module.exports = {
    stories: [
        '../src/stories/**/*.stories.mdx',
        '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-docs',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    webpackFinal: async config => {
        config.resolve.alias['@'] = path.resolve(__dirname, '../src/')
        config.module.rules.push({
            test: /\.pug$/,
            use: [
                'pug-plain-loader',
                'pug-bem-plain-loader'
            ]
        })
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        })
        return config
    }
}
