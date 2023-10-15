import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize, MantineColor } from '../../core';
export type RatingStylesNames = 'root' | 'starSymbol' | 'input' | 'label' | 'symbolBody' | 'symbolGroup';
export type RatingCssVariables = {
    root: '--rating-size' | '--rating-color';
};
export interface RatingProps extends BoxProps, StylesApiProps<RatingFactory>, ElementProps<'div', 'onChange'> {
    /** Default value for uncontrolled component */
    defaultValue?: number;
    /** Value for controlled component */
    value?: number;
    /** Called when value changes */
    onChange?(value: number): void;
    /** The icon that is displayed when symbol is empty */
    emptySymbol?: React.ReactNode | ((value: number) => React.ReactNode);
    /** This icon that is displayed when symbol is full */
    fullSymbol?: React.ReactNode | ((value: number) => React.ReactNode);
    /** Number of fractions each item can be divided into, 1 by default */
    fractions?: number;
    /** Controls component size */
    size?: MantineSize;
    /** Number of controls that should be rendered */
    count?: number;
    /** Called when item is hovered */
    onHover?(value: number): void;
    /** Function should return labelText for the symbols */
    getSymbolLabel?: (value: number) => string;
    /** Name of rating, should be unique within the page */
    name?: string;
    /** If true, you won't be able to interact */
    readOnly?: boolean;
    /** If true, only the selected symbol will change to full symbol */
    highlightSelectedOnly?: boolean;
    /** Key of theme.colors or any CSS color value, yellow by default */
    color?: MantineColor;
}
export type RatingFactory = Factory<{
    props: RatingProps;
    ref: HTMLDivElement;
    stylesNames: RatingStylesNames;
    vars: RatingCssVariables;
}>;
export declare const Rating: import("../../core").MantineComponent<{
    props: RatingProps;
    ref: HTMLDivElement;
    stylesNames: RatingStylesNames;
    vars: RatingCssVariables;
}>;
