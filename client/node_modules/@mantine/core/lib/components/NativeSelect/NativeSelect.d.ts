import { ElementProps, Factory } from '../../core';
import { InputBaseProps } from '../InputBase';
import { __InputStylesNames } from '../Input';
import { ComboboxData } from '../Combobox';
export interface NativeSelectProps extends InputBaseProps, ElementProps<'select', 'size'> {
    /** Data used to render options, can be replaced with `children` */
    data?: ComboboxData;
}
export type NativeSelectFactory = Factory<{
    props: NativeSelectProps;
    ref: HTMLSelectElement;
    stylesNames: __InputStylesNames;
}>;
export declare const NativeSelect: import("../../core").MantineComponent<{
    props: NativeSelectProps;
    ref: HTMLSelectElement;
    stylesNames: __InputStylesNames;
}>;
