declare global {
    declare interface Fn<T = any> {
        (...arg: T[]): T
    }
}