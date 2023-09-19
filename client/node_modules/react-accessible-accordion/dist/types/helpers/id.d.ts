import { ID } from '../components/ItemContext';
export declare function useGlobalCounterId(): ID;
export declare function resetGlobalCounterId(): void;
declare type IDGenerator = () => ID;
export declare const useNextId: IDGenerator;
export declare function assertValidHtmlId(htmlId: string): boolean;
export {};
