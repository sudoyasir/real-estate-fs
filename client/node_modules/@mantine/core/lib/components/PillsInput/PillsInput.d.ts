import { ElementProps, Factory } from '../../core';
import { __InputStylesNames } from '../Input';
import { InputBaseProps } from '../InputBase';
import { PillsInputField } from './PillsInputField/PillsInputField';
export interface PillsInputProps extends InputBaseProps, ElementProps<'div', 'size'> {
}
export type PillsInputFactory = Factory<{
    props: PillsInputProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
    staticComponents: {
        Field: typeof PillsInputField;
    };
}>;
export declare const PillsInput: import("../../core").MantineComponent<{
    props: PillsInputProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
    staticComponents: {
        Field: typeof PillsInputField;
    };
}>;
