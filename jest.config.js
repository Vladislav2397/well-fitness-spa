/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    testMatch: [
        '**/__tests__/**/*.spec.*',
        '**/*.spec.*',
    ],
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
}
