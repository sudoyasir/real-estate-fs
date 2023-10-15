export declare const singlePromise: <T>(cb: () => Promise<T>, key: string) => Promise<T>;
export declare const retryPromise: (cb: () => Promise<boolean>, maxNumberOfRetries?: number) => Promise<boolean>;
