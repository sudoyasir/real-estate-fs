/// <reference types="react" />
import { GetStylesApi } from '../../core';
import type { DrawerRootFactory } from './DrawerRoot';
export type ScrollAreaComponent = React.FC<any>;
interface DrawerContext {
    scrollAreaComponent: ScrollAreaComponent | undefined;
    getStyles: GetStylesApi<DrawerRootFactory>;
}
export declare const DrawerProvider: ({ children, value }: {
    value: DrawerContext;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useDrawerContext: () => DrawerContext;
export {};
