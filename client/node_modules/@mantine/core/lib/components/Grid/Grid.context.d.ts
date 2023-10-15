/// <reference types="react" />
import { GetStylesApi } from '../../core';
import type { GridFactory } from './Grid';
interface GridContextValue {
    getStyles: GetStylesApi<GridFactory>;
    grow: boolean | undefined;
    columns: number;
}
export declare const GridProvider: ({ children, value }: {
    value: GridContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useGridContext: () => GridContextValue;
export {};
