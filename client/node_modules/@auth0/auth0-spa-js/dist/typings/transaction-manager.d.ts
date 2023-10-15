import { ClientStorage } from './storage';
interface Transaction {
    nonce: string;
    scope: string;
    audience: string;
    appState?: any;
    code_verifier: string;
    redirect_uri?: string;
    organization?: string;
    state?: string;
}
export declare class TransactionManager {
    private storage;
    private clientId;
    private cookieDomain?;
    private storageKey;
    constructor(storage: ClientStorage, clientId: string, cookieDomain?: string | undefined);
    create(transaction: Transaction): void;
    get(): Transaction | undefined;
    remove(): void;
}
export {};
