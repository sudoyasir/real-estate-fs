import { IdToken, User } from '../global';
export declare const CACHE_KEY_PREFIX = "@@auth0spajs@@";
export declare const CACHE_KEY_ID_TOKEN_SUFFIX = "@@user@@";
export declare type CacheKeyData = {
    audience?: string;
    scope?: string;
    clientId: string;
};
export declare class CacheKey {
    prefix: string;
    suffix?: string | undefined;
    clientId: string;
    scope?: string;
    audience?: string;
    constructor(data: CacheKeyData, prefix?: string, suffix?: string | undefined);
    /**
     * Converts this `CacheKey` instance into a string for use in a cache
     * @returns A string representation of the key
     */
    toKey(): string;
    /**
     * Converts a cache key string into a `CacheKey` instance.
     * @param key The key to convert
     * @returns An instance of `CacheKey`
     */
    static fromKey(key: string): CacheKey;
    /**
     * Utility function to build a `CacheKey` instance from a cache entry
     * @param entry The entry
     * @returns An instance of `CacheKey`
     */
    static fromCacheEntry(entry: CacheEntry): CacheKey;
}
export interface DecodedToken {
    claims: IdToken;
    user: User;
}
export interface IdTokenEntry {
    id_token: string;
    decodedToken: DecodedToken;
}
export declare type CacheEntry = {
    id_token?: string;
    access_token: string;
    expires_in: number;
    decodedToken?: DecodedToken;
    audience: string;
    scope: string;
    client_id: string;
    refresh_token?: string;
    oauthTokenScope?: string;
};
export declare type WrappedCacheEntry = {
    body: Partial<CacheEntry>;
    expiresAt: number;
};
export declare type KeyManifestEntry = {
    keys: string[];
};
export declare type Cacheable = WrappedCacheEntry | KeyManifestEntry;
export declare type MaybePromise<T> = Promise<T> | T;
export interface ICache {
    set<T = Cacheable>(key: string, entry: T): MaybePromise<void>;
    get<T = Cacheable>(key: string): MaybePromise<T | undefined>;
    remove(key: string): MaybePromise<void>;
    allKeys?(): MaybePromise<string[]>;
}
