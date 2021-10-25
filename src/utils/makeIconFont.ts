import fs from 'fs'
import * as crypto from 'crypto'
import { webfont } from 'webfont'

const fontPath = process.env.WEBFONT__FONT_PATH || './public/fonts/icons/'
const srcPath = process.env.WEBFONT__SRC_PATH || './src/assets/icons/template/'

function generateChecksum (
    // @ts-ignore
    str: string | Buffer,
    algorithm = 'md5',
    encoding = 'hex'
): string {
    return crypto
        .createHash(algorithm)
        .update(<string>str, 'utf8')
        .digest(<crypto.BinaryToTextEncoding>encoding)
}

const iconfont = function () {
    let existingSelection: null | string | { icons: string[] } = null
    if (fs.existsSync(`${srcPath}selection.json`)) {
        existingSelection = JSON.parse(
            fs.readFileSync(`${srcPath}selection.json`, 'utf8')
        )
    }

    const selection = {
        icons: []
    }

    let counter = 0

    webfont({
        files: process.env.WEBFONT__FONT_FILES || './src/assets/icons/**/*.svg',
        template: process.env.WEBFONT__FONT_TEMPLATE || './src/utils/template.html.njk',
        templateFontPath: fontPath,
        fontName: process.env.WEBFONT__FONT_NAME || 'iconfont',
        formats: [
            'woff',
            'woff2'
        ],
        prependUnicode: true,
        // @ts-ignore
        glyphTransformFn: obj => {
            const icon = {
                unicode: undefined as string[] | undefined,
                // @ts-ignore
                checksum: undefined as string | Buffer | undefined,
            }
            icon.unicode = obj.unicode
            // @ts-ignore
            const checksum = fs.readFileSync(obj.path)

            icon.checksum = generateChecksum(checksum)

            if (existingSelection &&
                // @ts-ignore
                existingSelection?.icons.length > counter &&
                // @ts-ignore
                icon.checksum === existingSelection.icons[counter].checksum
            ) {
                console.log('equal')
            } else if (existingSelection) {
                // @ts-ignore
                const sameIcon = existingSelection.icons.find(
                    // @ts-ignore
                    el => el.checksum === icon.checksum
                )
                if (typeof sameIcon !== 'undefined') {
                    // @ts-ignore
                    const filename = obj.path.replace(/^.*[\\/]/, '').split('-')
                    // @ts-ignore
                    const path = `${obj.path.substring(0, obj.path.lastIndexOf('/'))}/`
                    fs.renameSync(`${path}${filename[0]}-${filename[1]}`, `${path}u${sameIcon.unicode[0].charCodeAt(0).toString(16).toUpperCase()}-${filename[1]}`)
                }
            }

            // @ts-ignore
            selection.icons.push(icon)
            counter += 1

            return obj
        },
        fontHeight: 600,
        normalize: true
    })
        // @ts-ignore
        .then(result => {
            // @ts-ignore
            fs.writeFileSync(`${srcPath}demo.html`, result.template)
            fs.writeFileSync(`${srcPath}selection.json`, JSON.stringify(selection))
            // @ts-ignore
            fs.writeFileSync(`${fontPath}iconfont.woff`, result.woff)
            // @ts-ignore
            fs.writeFileSync(`${fontPath}iconfont.woff2`, result.woff2)

            return result
        })
        // @ts-ignore
        .catch(error => {
            throw error
        })
}

iconfont()
