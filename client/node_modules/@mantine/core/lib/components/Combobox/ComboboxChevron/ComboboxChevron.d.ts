import React from 'react';
import { MantineSize, BoxProps, ElementProps, Factory, StylesApiProps } from '../../../core';
export type ComboboxChevronStylesNames = 'chevron';
export type ComboboxChevronCSSVariables = {
    chevron: '--combobox-chevron-size';
};
export interface ComboboxChevronProps extends BoxProps, StylesApiProps<ComboboxChevronFactory>, ElementProps<'svg', 'opacity' | 'display'> {
    size?: MantineSize | (string & {});
    error?: React.ReactNode;
}
export type ComboboxChevronFactory = Factory<{
    props: ComboboxChevronProps;
    ref: SVGSVGElement;
    stylesNames: ComboboxChevronStylesNames;
    vars: ComboboxChevronCSSVariables;
}>;
export declare const ComboboxChevron: import("../../../core").MantineComponent<{
    props: ComboboxChevronProps;
    ref: SVGSVGElement;
    stylesNames: ComboboxChevronStylesNames;
    vars: ComboboxChevronCSSVariables;
}>;
