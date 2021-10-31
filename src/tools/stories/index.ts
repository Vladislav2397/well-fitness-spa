type argumentTypes = {
    control: {
        type: string
        options?: string[]
    },
    defaultValue?: string | boolean,
    table?: {
        type: {
            summary: string
        }
    }
}

export function textControl (): argumentTypes {
    return {
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            }
        }
    }
}

export function selectControl (args: string[]): argumentTypes {
    return {
        control: {
            type: 'select',
            options: args
        },
        defaultValue: args[0],
        table: {
            type: {
                summary: args.join(' | ')
            }
        },
    }
}

export function booleanControl (): argumentTypes {
    return {
        control: {
            type: 'boolean',
        },
        defaultValue: false,
    }
}

export default {
    textControl,
    selectControl,
    booleanControl,
}
