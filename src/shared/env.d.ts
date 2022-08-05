interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VUE_APP_GRAPHQL_HOST: string
    readonly VUE_APP_MEDIA_HOST: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
