import { CacheKeyManifest } from './key-manifest';
import { CacheEntry, ICache, CacheKey, DecodedToken, IdTokenEntry } from './shared';
export declare class CacheManager {
    private cache;
    private keyManifest?;
    private nowProvider;
    constructor(cache: ICache, keyManifest?: CacheKeyManifest | undefined, nowProvider?: () => number | Promise<number>);
    setIdToken(clientId: string, idToken: string, decodedToken: DecodedToken): Promise<void>;
    getIdToken(cacheKey: CacheKey): Promise<IdTokenEntry | undefined>;
    get(cacheKey: CacheKey, expiryAdjustmentSeconds?: number): Promise<Partial<CacheEntry> | undefined>;
    set(entry: CacheEntry): Promise<void>;
    clear(clientId?: string): Promise<void>;
    private wrapCacheEntry;
    private getCacheKeys;
    /**
     * Returns the cache key to be used to store the id token
     * @param clientId The client id used to link to the id token
     * @returns The constructed cache key, as a string, to store the id token
     */
    private getIdTokenCacheKey;
    /**
     * Finds the corresponding key in the cache based on the provided cache key.
     * The keys inside the cache are in the format {prefix}::{clientId}::{audience}::{scope}.
     * The first key in the cache that satisfies the following conditions is returned
     *  - `prefix` is strict equal to Auth0's internally configured `keyPrefix`
     *  - `clientId` is strict equal to the `cacheKey.clientId`
     *  - `audience` is strict equal to the `cacheKey.audience`
     *  - `scope` contains at least all the `cacheKey.scope` values
     *  *
     * @param keyToMatch The provided cache key
     * @param allKeys A list of existing cache keys
     */
    private matchExistingCacheKey;
}
