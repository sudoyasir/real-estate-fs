/// <reference types="react" />
import { GetStylesApi } from '../../core';
import type { ProgressRootFactory } from './ProgressRoot/ProgressRoot';
interface ProgressContextValue {
    getStyles: GetStylesApi<ProgressRootFactory>;
}
export declare const ProgressProvider: ({ children, value }: {
    value: ProgressContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useProgressContext: () => ProgressContextValue;
export {};
