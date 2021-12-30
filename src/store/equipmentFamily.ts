// import { Inject, Injectable } from "vue-typedi"

import { imageType } from "@/store/types"
import { State } from "vuex-simple"

export interface EquipmentFamily {
    title: string
    preview: imageType
    banner: imageType
    tags: [id: number, name: string][]
    list: {
        title: string
    }[]
}

export default class EquipmentFamilyModule {
    @State() public title = 'some'
    @State() public preview = ['som', 'cosm']
    @State() public banner = ['som', 'cosm']
    @State() public tags = [ [1, 'socd'], [2, 'sdfodm'] ]
    @State() public list: unknown[] = []

    constructor(options?: EquipmentFamily) {
        if (options) {
            this.title = options.title
            this.preview = options.preview
            this.banner = options.banner
            this.tags = options.tags
            this.list = options.list
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EquipmentFamilyTypes {

    export type state = {
        title: string
        preview: imageType
        banner: imageType
        tags: [id: number, name: string]
    }

    export type list = {
        title: string
        items: {
            title: string
            image: imageType
            characteristics: [key: string, value: string][]
        }[]
    }[]

    export type item = {
        title: string
        items: {
            title: string
            image: imageType
            characteristics: [key: string, value: string][]
        }[]
    }

    export type type = 'home' | 'gym'
}
