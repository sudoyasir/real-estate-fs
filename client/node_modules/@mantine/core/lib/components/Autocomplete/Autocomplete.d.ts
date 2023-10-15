import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../core';
import { __InputStylesNames, __BaseInputProps, InputVariant } from '../Input';
import { ComboboxLikeProps, ComboboxLikeStylesNames } from '../Combobox';
export type AutocompleteStylesNames = __InputStylesNames | ComboboxLikeStylesNames;
export interface AutocompleteProps extends BoxProps, __BaseInputProps, ComboboxLikeProps, StylesApiProps<AutocompleteFactory>, ElementProps<'input', 'onChange' | 'size'> {
    /** Controlled component value */
    value?: string;
    /** Uncontrolled component default value */
    defaultValue?: string;
    /** Called when value changes */
    onChange?(value: string): void;
}
export type AutocompleteFactory = Factory<{
    props: AutocompleteProps;
    ref: HTMLInputElement;
    stylesNames: AutocompleteStylesNames;
    variant: InputVariant;
}>;
export declare const Autocomplete: import("../../core").MantineComponent<{
    props: AutocompleteProps;
    ref: HTMLInputElement;
    stylesNames: AutocompleteStylesNames;
    variant: InputVariant;
}>;
