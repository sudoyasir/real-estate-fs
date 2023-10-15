import React from 'react';
import { ElementProps, Factory } from '../../core';
import { __InputStylesNames, InputVariant } from '../Input';
import { InputBaseProps } from '../InputBase/InputBase';
export interface FileInputProps<Multiple = false> extends InputBaseProps, ElementProps<'button', 'value' | 'defaultValue' | 'onChange'> {
    /** Called when value changes */
    onChange?(payload: Multiple extends true ? File[] : File | null): void;
    /** Controlled component value */
    value?: Multiple extends true ? File[] : File | null;
    /** Uncontrolled component default value */
    defaultValue?: Multiple extends true ? File[] : File | null;
    /** Determines whether user can pick more than one file, `false` by default */
    multiple?: Multiple;
    /** File input accept attribute, for example, "image/png,image/jpeg" */
    accept?: string;
    /** Input name attribute */
    name?: string;
    /** Input form attribute */
    form?: string;
    /** Value renderer, by default file name is rendered */
    valueComponent?: React.FC<{
        value: null | File | File[];
    }>;
    /** Determines whether clear button should be displayed in the right section, `false` by default */
    clearable?: boolean;
    /** Props passed down to the clear button */
    clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
    /** Read only inputs value cannot be changed */
    readOnly?: boolean;
    /** Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. */
    capture?: boolean | 'user' | 'environment';
    /** Props passed down to the hidden input element which is used to capture files */
    fileInputProps?: React.ComponentPropsWithoutRef<'input'>;
}
export type FileInputFactory = Factory<{
    props: FileInputProps;
    ref: HTMLButtonElement;
    stylesNames: __InputStylesNames;
    variant: InputVariant;
}>;
type FileInputComponent = <Multiple extends boolean = false>(props: FileInputProps<Multiple> & {
    ref?: React.ForwardedRef<HTMLButtonElement>;
}) => JSX.Element;
export declare const FileInput: FileInputComponent;
export {};
