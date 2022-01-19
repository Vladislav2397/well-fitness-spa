// import { Inject, Injectable } from "vue-typedi"

import { imageType } from "@/store/types"
import { State } from "vuex-simple"

// @ts-ignore
export default class EquipmentFamilyModule {
    @State() public title = ''
    @State() public preview?: imageType
    @State() public banner?: imageType
    @State() public tags: [key: string, value: string ][] = []
    @State() public list: unknown[] = []
}

export type EquipmentFamilyState = Pick<
    EquipmentFamilyModule,
    | 'title'
    | 'preview'
    | 'banner'
    | 'tags'
    | 'list'
>

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EquipmentFamilyTypes {
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
