import React from 'react';
import { StylesApiProps, ElementProps, Factory, BoxProps } from '../../core';
export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleSize = `h${TitleOrder}` | React.CSSProperties['fontSize'];
export type TitleStylesNames = 'root';
export type TitleCssVariables = {
    root: '--title-fw' | '--title-lh' | '--title-fz';
};
export interface TitleProps extends BoxProps, StylesApiProps<TitleFactory>, ElementProps<'h1', 'color'> {
    /** Determines which tag will be used (h1-h6), controls `font-size` style if `size` prop is not set, `1` by default */
    order?: TitleOrder;
    /** Changes title size, if not set, then size is controlled by `order` prop */
    size?: TitleSize;
}
export type TitleFactory = Factory<{
    props: TitleProps;
    ref: HTMLHeadingElement;
    stylesNames: TitleStylesNames;
    vars: TitleCssVariables;
}>;
export declare const Title: import("../../core").MantineComponent<{
    props: TitleProps;
    ref: HTMLHeadingElement;
    stylesNames: TitleStylesNames;
    vars: TitleCssVariables;
}>;
