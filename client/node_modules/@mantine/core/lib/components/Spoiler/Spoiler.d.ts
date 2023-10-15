import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../core';
export type SpoilerStylesNames = 'root' | 'control' | 'content';
export type SpoilerCssVariables = {
    root: '--spoiler-transition-duration';
};
export interface SpoilerProps extends BoxProps, StylesApiProps<SpoilerFactory>, ElementProps<'div'> {
    /** Maximum height of the visible content, when this point is reached spoiler appears, `100` by default */
    maxHeight?: number;
    /** Label for close spoiler action */
    hideLabel: React.ReactNode;
    /** Label for open spoiler action */
    showLabel: React.ReactNode;
    /** Get ref of spoiler toggle button */
    controlRef?: React.ForwardedRef<HTMLButtonElement>;
    /** Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state is updated on mount */
    initialState?: boolean;
    /** Spoiler reveal transition duration in ms, set 0 or null to turn off animation, `200` by default */
    transitionDuration?: number;
}
export type SpoilerFactory = Factory<{
    props: SpoilerProps;
    ref: HTMLDivElement;
    stylesNames: SpoilerStylesNames;
    vars: SpoilerCssVariables;
}>;
export declare const Spoiler: import("../../core").MantineComponent<{
    props: SpoilerProps;
    ref: HTMLDivElement;
    stylesNames: SpoilerStylesNames;
    vars: SpoilerCssVariables;
}>;
