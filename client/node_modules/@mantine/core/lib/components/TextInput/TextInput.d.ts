import { ElementProps, Factory } from '../../core';
import { InputBaseProps } from '../InputBase';
import { __InputStylesNames } from '../Input';
export interface TextInputProps extends InputBaseProps, ElementProps<'input', 'size'> {
}
export type TextInputFactory = Factory<{
    props: TextInputProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
}>;
export declare const TextInput: import("../../core").MantineComponent<{
    props: TextInputProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
}>;
