/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
    if (import.meta.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`)
    }
    return import.meta.env[key] || ""
}

/** API entrypoint */
export const GRAPHQL_HOST = getEnvVar("VUE_APP_GRAPHQL_HOST")

/** Режим запуска программы */
/** Режим разработки */
export const isDevEnv = getEnvVar("DEV") // Vite feature
/** Режим продакшена */
export const isProdEnv = getEnvVar("PROD") // Vite feature
