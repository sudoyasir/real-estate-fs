import { ICache } from './cache';
import { Auth0ClientOptions, AuthorizationParams, AuthorizeOptions, LogoutOptions } from './global';
/**
 * @ignore
 */
export declare const GET_TOKEN_SILENTLY_LOCK_KEY = "auth0.lock.getTokenSilently";
/**
 * @ignore
 */
export declare const buildOrganizationHintCookieName: (clientId: string) => string;
/**
 * @ignore
 */
export declare const OLD_IS_AUTHENTICATED_COOKIE_NAME = "auth0.is.authenticated";
/**
 * @ignore
 */
export declare const buildIsAuthenticatedCookieName: (clientId: string) => string;
/**
 * @ignore
 */
export declare const cacheFactory: (location: string) => () => ICache;
/**
 * @ignore
 */
export declare const getAuthorizeParams: (clientOptions: Auth0ClientOptions & {
    authorizationParams: AuthorizationParams;
}, scope: string, authorizationParams: AuthorizationParams, state: string, nonce: string, code_challenge: string, redirect_uri: string | undefined, response_mode: string | undefined) => AuthorizeOptions;
/**
 * @ignore
 *
 * Function used to provide support for the deprecated onRedirect through openUrl.
 */
export declare const patchOpenUrlWithOnRedirect: <T extends Pick<LogoutOptions, "openUrl" | "onRedirect">>(options: T) => T;
