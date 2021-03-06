const fs = require('fs')
const params = process.argv[2].split('=')
const type = params[0]
const namePath = getNamePath(params[1])
const name = namePath[namePath.length - 1]
const folders = namePath.filter(folder => folder !== name).reduce((t, f) => (t += `/${f}`), '')
const validTypes = ['ui', 'blanks', 'popups', 'modals', 'sections', 'layouts']

const cssDirectory = './src/assets/scss'
const vueDirectory = './src/components'

const isValidType = validTypes.includes(type)

function getNamePath(string) {
    const split = string.split('/')

    if (split.length > 1) {
        split[0] = camelToKebab(split[0])
    }

    return split
}

if (isValidType) {
    create()
} else {
    let equal = validTypes.find(t => type.indexOf(t) !== -1)

    if (equal) {
        console.log(`Ошибка параметра: ${process.argv[2]}, возможно вы имели в виду ${equal}`)
    } else {
        console.log(`Ошибка параметра: ${process.argv[2]}`)
    }
}

function camelToKebab(str) {
    return str
        .split('')
        .map((letter, idx) => {
            return letter.toUpperCase() === letter ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter
        })
        .join('')
}

function create() {
    const cssTypeFolder = `${cssDirectory}/${type}`
    const newCssFolder = `${cssTypeFolder}${folders}`
    const newCssFolderFiles = `${newCssFolder}/${camelToKebab(name)}`
    const cssFileImport = `@import '${folders.replace('/', '')}/${camelToKebab(name)}/${camelToKebab(name)}`

    const vueTypeFolder = `${vueDirectory}/${type}`
    const newVueFolder = `${vueTypeFolder}${folders}`

    const vueFileName = `${ucFirst(name)}`
    const vueFile = `${newVueFolder}/${vueFileName}.vue`

    if (fs.existsSync(newCssFolderFiles) || fs.existsSync(vueFile)) {
        console.log(`Сущность ${name} уже существует`)
    } else {
        addVueFile()
        addScssFiles()
    }

    function addScssFiles() {
        if (folders && !fs.existsSync(newCssFolder)) {
            fs.mkdirSync(newCssFolder)
            console.log(`Создана директория ${newCssFolder}`)
        }

        fs.mkdirSync(newCssFolderFiles)
        console.log(`Создана директория ${newCssFolderFiles}`)

        fs.writeFile(`${newCssFolderFiles}/${camelToKebab(name)}--critical.scss`, '', err => {
            if (err) throw err
            console.log(`Создан файл ${newCssFolderFiles}/${camelToKebab(name)}--critical.scss`)
        })

        fs.writeFile(`${newCssFolderFiles}/${camelToKebab(name)}--main.scss`, '', err => {
            if (err) throw err
            console.log(`Создан файл ${newCssFolderFiles}/${camelToKebab(name)}--main.scss`)
        })

        fs.appendFile(`${cssTypeFolder}/${type}--critical.scss`, `${cssFileImport}--critical';\n`, function (err) {
            if (err) {
                console.log(`Ошибка с добавлением импорта в ${type}--critical.scss`)
            } else {
                console.log(`Добавлен импорт в ${type}--critical.scss`)
            }
        })

        fs.appendFile(`${cssTypeFolder}/${type}--main.scss`, `${cssFileImport}--main';\n`, function (err) {
            if (err) {
                console.log(`Ошибка с добавлением импорта в ${type}--main.scss`)
            } else {
                console.log(`Добавлен импорт в ${type}--main.scss`)
            }
        })
    }

    function addVueFile() {
        const content = vueFileTemplate(name, vueFileName, namePath.length)

        if (folders && !fs.existsSync(newVueFolder)) {
            fs.mkdirSync(newVueFolder)
            console.log(`Создана директория ${newVueFolder}`)
        }

        fs.writeFile(vueFile, content, err => {
            if (err) throw err
            console.log(`Создан файл ${vueFile}`)
        })
    }
}

function ucFirst(str) {
    if (!str) return str

    const split = str.split('-')

    if (split.length > 1) {
        return split.reduce((total, word) => {
            return (total += word[0].toUpperCase() + word.slice(1))
        }, '')
    } else {
        return str[0].toUpperCase() + str.slice(1)
    }
}

function vueFileTemplate(cssName, vueName, nesting) {
    return `<template lang="pug">

.${camelToKebab(cssName)}
    
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class ${vueName} extends Vue {

}

</script>`
}
