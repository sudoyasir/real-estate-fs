import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineColor } from '../../core';
interface RingProgressSection extends React.ComponentPropsWithRef<'circle'> {
    value: number;
    color: MantineColor;
    tooltip?: React.ReactNode;
}
export type RingProgressStylesNames = 'root' | 'svg' | 'label' | 'curve';
export type RingProgressCssVariables = {
    root: '--rp-size' | '--rp-label-offset';
};
export interface RingProgressProps extends BoxProps, StylesApiProps<RingProgressFactory>, ElementProps<'div'> {
    /** Label displayed in the center of the ring */
    label?: React.ReactNode;
    /** Ring thickness */
    thickness?: number;
    /** Width and height of the progress ring */
    size?: number;
    /** Sets whether the edges of the progress circle are rounded */
    roundCaps?: boolean;
    /** Ring sections */
    sections: RingProgressSection[];
    /** Color of the root section, key of theme.colors or CSS color value */
    rootColor?: MantineColor;
}
export type RingProgressFactory = Factory<{
    props: RingProgressProps;
    ref: HTMLDivElement;
    stylesNames: RingProgressStylesNames;
    vars: RingProgressCssVariables;
}>;
export declare const RingProgress: import("../../core").MantineComponent<{
    props: RingProgressProps;
    ref: HTMLDivElement;
    stylesNames: RingProgressStylesNames;
    vars: RingProgressCssVariables;
}>;
export {};
