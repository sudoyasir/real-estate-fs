import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type AppShellHeaderStylesNames = 'header';
export type AppShellHeaderVariant = string;
export type AppShellHeaderCssVariables = {
    root: '--test';
};
export interface AppShellHeaderProps extends BoxProps, StylesApiProps<AppShellHeaderFactory>, ElementProps<'header'> {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: string | number;
}
export type AppShellHeaderFactory = Factory<{
    props: AppShellHeaderProps;
    ref: HTMLElement;
    stylesNames: AppShellHeaderStylesNames;
    vars: AppShellHeaderCssVariables;
    variant: AppShellHeaderVariant;
}>;
export declare const AppShellHeader: import("../../../core").MantineComponent<{
    props: AppShellHeaderProps;
    ref: HTMLElement;
    stylesNames: AppShellHeaderStylesNames;
    vars: AppShellHeaderCssVariables;
    variant: AppShellHeaderVariant;
}>;
