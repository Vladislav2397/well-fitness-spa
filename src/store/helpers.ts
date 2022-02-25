export type ActionType<F> = F extends (
    state: infer S,
    payload: infer P,
) => infer R
    ? (payload?: P) => Promise<R>
    : never
