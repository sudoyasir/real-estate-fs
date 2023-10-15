/// <reference types="react" />
type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;
export declare function useResizeObserver<T extends HTMLElement = any>(): readonly [import("react").RefObject<T>, ObserverRect];
export declare function useElementSize<T extends HTMLElement = any>(): {
    ref: import("react").RefObject<T>;
    width: number;
    height: number;
};
export {};
