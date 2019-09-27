export type Action<T = string, PL = {}> = {
    type: T;
} & PL;
