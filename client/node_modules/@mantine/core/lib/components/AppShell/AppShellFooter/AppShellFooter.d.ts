import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type AppShellFooterStylesNames = 'footer';
export type AppShellFooterVariant = string;
export type AppShellFooterCssVariables = {
    root: '--test';
};
export interface AppShellFooterProps extends BoxProps, StylesApiProps<AppShellFooterFactory>, ElementProps<'footer'> {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: string | number;
}
export type AppShellFooterFactory = Factory<{
    props: AppShellFooterProps;
    ref: HTMLElement;
    stylesNames: AppShellFooterStylesNames;
    vars: AppShellFooterCssVariables;
    variant: AppShellFooterVariant;
}>;
export declare const AppShellFooter: import("../../../core").MantineComponent<{
    props: AppShellFooterProps;
    ref: HTMLElement;
    stylesNames: AppShellFooterStylesNames;
    vars: AppShellFooterCssVariables;
    variant: AppShellFooterVariant;
}>;
