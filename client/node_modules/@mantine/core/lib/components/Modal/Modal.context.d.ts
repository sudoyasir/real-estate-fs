/// <reference types="react" />
import { GetStylesApi } from '../../core';
import type { ModalRootFactory } from './ModalRoot';
export type ScrollAreaComponent = React.FC<any>;
interface ModalContext {
    yOffset: string | number | undefined;
    scrollAreaComponent: ScrollAreaComponent | undefined;
    getStyles: GetStylesApi<ModalRootFactory>;
}
export declare const ModalProvider: ({ children, value }: {
    value: ModalContext;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useModalContext: () => ModalContext;
export {};
