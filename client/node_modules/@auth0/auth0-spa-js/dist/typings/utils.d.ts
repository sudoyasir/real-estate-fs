import { AuthenticationResult, PopupConfigOptions } from './global';
export declare const parseAuthenticationResult: (queryString: string) => AuthenticationResult;
export declare const runIframe: (authorizeUrl: string, eventOrigin: string, timeoutInSeconds?: number) => Promise<AuthenticationResult>;
export declare const openPopup: (url: string) => Window | null;
export declare const runPopup: (config: PopupConfigOptions) => Promise<AuthenticationResult>;
export declare const getCrypto: () => Crypto;
export declare const createRandomString: () => string;
export declare const encode: (value: string) => string;
export declare const decode: (value: string) => string;
export declare const createQueryParams: ({ clientId: client_id, ...params }: any) => string;
export declare const sha256: (s: string) => Promise<any>;
export declare const urlDecodeB64: (input: string) => string;
export declare const bufferToBase64UrlEncoded: (input: number[] | Uint8Array) => string;
export declare const validateCrypto: () => void;
/**
 * @ignore
 */
export declare const getDomain: (domainUrl: string) => string;
/**
 * @ignore
 */
export declare const getTokenIssuer: (issuer: string | undefined, domainUrl: string) => string;
export declare const parseNumber: (value: any) => number | undefined;
