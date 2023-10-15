/// <reference types="react" />
interface AccordionItemContext {
    value: string;
}
export declare const AccordionItemProvider: ({ children, value }: {
    value: AccordionItemContext;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useAccordionItemContext: () => AccordionItemContext;
export {};
