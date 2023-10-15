import React from 'react';
import { StylesApiProps, ElementProps, Factory } from '../../core';
import { InputBaseProps } from '../InputBase';
import { InputVariant, __InputStylesNames } from '../Input';
export type PasswordInputStylesNames = 'root' | 'visibilityToggle' | 'innerInput' | __InputStylesNames;
export type PasswordInputCssVariables = {
    root: '--psi-icon-size' | '--psi-button-size';
};
export interface PasswordInputProps extends Omit<InputBaseProps, 'classNames' | 'styles' | 'vars'>, StylesApiProps<PasswordInputFactory>, ElementProps<'input', 'size'> {
    /** Custom visibility toggle icon */
    visibilityToggleIcon?: React.FC<{
        reveal: boolean;
    }>;
    /** Props passed down to the visibility toggle button */
    visibilityToggleButtonProps?: Record<string, any>;
    /** Determines whether input content should be visible (controlled) */
    visible?: boolean;
    /** Determines whether input content should be visible (uncontrolled) */
    defaultVisible?: boolean;
    /** Called when visibility changes */
    onVisibilityChange?(visible: boolean): void;
}
export type PasswordInputFactory = Factory<{
    props: PasswordInputProps;
    ref: HTMLInputElement;
    stylesNames: PasswordInputStylesNames;
    vars: PasswordInputCssVariables;
    variant: InputVariant;
}>;
export declare const PasswordInput: import("../../core").MantineComponent<{
    props: PasswordInputProps;
    ref: HTMLInputElement;
    stylesNames: PasswordInputStylesNames;
    vars: PasswordInputCssVariables;
    variant: InputVariant;
}>;
