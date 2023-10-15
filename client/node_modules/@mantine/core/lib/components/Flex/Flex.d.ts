import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, StyleProp, MantineSize } from '../../core';
export type FlexStylesNames = 'root';
export interface FlexProps extends BoxProps, StylesApiProps<FlexFactory>, ElementProps<'div'> {
    /** `gap` CSS property */
    gap?: StyleProp<MantineSize | (string & {}) | number>;
    /** `row-gap` CSS property */
    rowGap?: StyleProp<MantineSize | (string & {}) | number>;
    /** `column-gap` CSS property */
    columnGap?: StyleProp<MantineSize | (string & {}) | number>;
    /** `align-items` CSS property */
    align?: StyleProp<React.CSSProperties['alignItems']>;
    /** justify-content CSS property */
    justify?: StyleProp<React.CSSProperties['justifyContent']>;
    /** flex-wrap CSS property */
    wrap?: StyleProp<React.CSSProperties['flexWrap']>;
    /** flex-direction CSS property */
    direction?: StyleProp<React.CSSProperties['flexDirection']>;
}
export type FlexFactory = Factory<{
    props: FlexProps;
    ref: HTMLDivElement;
    stylesNames: FlexStylesNames;
}>;
export declare const Flex: import("../../core").MantineComponent<{
    props: FlexProps;
    ref: HTMLDivElement;
    stylesNames: FlexStylesNames;
}>;
