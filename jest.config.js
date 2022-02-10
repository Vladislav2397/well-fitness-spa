/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
}
