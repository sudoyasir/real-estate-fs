import { ICache, Cacheable, MaybePromise } from './shared';
export declare class LocalStorageCache implements ICache {
    set<T = Cacheable>(key: string, entry: T): void;
    get<T = Cacheable>(key: string): MaybePromise<T | undefined>;
    remove(key: string): void;
    allKeys(): string[];
}
