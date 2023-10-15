/// <reference types="react" />
interface HoverCardContext {
    openDropdown(): void;
    closeDropdown(): void;
}
export declare const HoverCardContextProvider: ({ children, value }: {
    value: HoverCardContext;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useHoverCardContext: () => HoverCardContext;
export {};
