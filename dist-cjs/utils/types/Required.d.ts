export declare type Required<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
