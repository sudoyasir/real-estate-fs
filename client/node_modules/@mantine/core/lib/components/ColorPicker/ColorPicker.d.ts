import { BoxProps, StylesApiProps, ElementProps, MantineSize, Factory } from '../../core';
import { ColorFormat } from './ColorPicker.types';
export type ColorPickerStylesNames = 'wrapper' | 'preview' | 'body' | 'sliders' | 'slider' | 'sliderOverlay' | 'thumb' | 'saturation' | 'thumb' | 'saturationOverlay' | 'thumb' | 'swatches' | 'swatch';
export type ColorPickerCssVariables = {
    wrapper: '--cp-preview-size' | '--cp-width' | '--cp-body-spacing' | '--cp-swatch-size' | '--cp-thumb-size' | '--cp-saturation-height';
};
export interface __ColorPickerProps {
    /** Controlled component value */
    value?: string;
    /** Uncontrolled component default value */
    defaultValue?: string;
    /** Called when color changes */
    onChange?(value: string): void;
    /** Called when user stops dragging or changes value with arrow keys */
    onChangeEnd?(value: string): void;
    /** Color format, `'hex'` by default */
    format?: ColorFormat;
    /** Determines whether color picker should be displayed, `true` by default */
    withPicker?: boolean;
    /** Color swatches */
    swatches?: string[];
    /** Number of swatches displayed in one row, `7` by default */
    swatchesPerRow?: number;
    /** Controls size of hue, alpha and saturation sliders, `'md'` by default */
    size?: MantineSize | (string & {});
}
export interface ColorPickerProps extends BoxProps, __ColorPickerProps, StylesApiProps<ColorPickerFactory>, ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
    __staticSelector?: string;
    /** Determines whether component should take 100% width of its container, `false` by default */
    fullWidth?: boolean;
    /** Determines whether interactive elements should be focusable, `true` by default */
    focusable?: boolean;
    /** Saturation slider `aria-label` */
    saturationLabel?: string;
    /** Hue slider `aria-label` */
    hueLabel?: string;
    /** Alpha slider `aria-label` */
    alphaLabel?: string;
    /** Called when one of the color swatches is clicked */
    onColorSwatchClick?(color: string): void;
}
export type ColorPickerFactory = Factory<{
    props: ColorPickerProps;
    ref: HTMLDivElement;
    stylesNames: ColorPickerStylesNames;
    vars: ColorPickerCssVariables;
}>;
export declare const ColorPicker: import("../../core").MantineComponent<{
    props: ColorPickerProps;
    ref: HTMLDivElement;
    stylesNames: ColorPickerStylesNames;
    vars: ColorPickerCssVariables;
}>;
