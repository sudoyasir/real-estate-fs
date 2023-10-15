/// <reference types="react" />
import type { MantineTheme, MantineColorScheme } from './theme.types';
import type { MantineColorSchemeManager } from './color-scheme-managers';
import { ConvertCSSVariablesInput } from './convert-css-variables';
interface MantineContextValue {
    colorScheme: MantineColorScheme;
    setColorScheme(colorScheme: MantineColorScheme): void;
    clearColorScheme(): void;
    colorSchemeManager: MantineColorSchemeManager;
    getRootElement(): HTMLElement | undefined;
    classNamesPrefix: string;
    getStyleNonce?(): string | undefined;
    cssVariablesResolver?(theme: MantineTheme): ConvertCSSVariablesInput;
    cssVariablesSelector: string;
}
export declare const MantineContext: import("react").Context<MantineContextValue | null>;
export declare function useMantineContext(): MantineContextValue;
export declare function useMantineCssVariablesResolver(): ((theme: MantineTheme) => ConvertCSSVariablesInput) | undefined;
export declare function useMantineClassNamesPrefix(): string;
export declare function useMantineStyleNonce(): (() => string | undefined) | undefined;
export {};
