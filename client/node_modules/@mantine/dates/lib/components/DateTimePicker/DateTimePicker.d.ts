import React from 'react';
import { BoxProps, StylesApiProps, Factory, InputVariant, ActionIconProps } from '@mantine/core';
import { TimeInputProps } from '../TimeInput';
import { CalendarBaseProps, CalendarSettings, CalendarStylesNames } from '../Calendar';
import { DateInputSharedProps, PickerInputBaseStylesNames } from '../PickerInputBase';
import { DateValue } from '../../types';
export type DateTimePickerStylesNames = 'timeWrapper' | 'timeInput' | 'submitButton' | PickerInputBaseStylesNames | CalendarStylesNames;
export interface DateTimePickerProps extends BoxProps, Omit<DateInputSharedProps, 'classNames' | 'styles' | 'closeOnChange' | 'size'>, Omit<CalendarBaseProps, 'defaultDate'>, Omit<CalendarSettings, 'onYearMouseEnter' | 'onMonthMouseEnter'>, StylesApiProps<DateTimePickerFactory> {
    /** Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default  */
    valueFormat?: string;
    /** Controlled component value */
    value?: DateValue;
    /** Default value for uncontrolled component */
    defaultValue?: DateValue;
    /** Called when value changes */
    onChange?(value: DateValue): void;
    /** TimeInput component props */
    timeInputProps?: TimeInputProps & {
        ref?: React.ComponentPropsWithRef<'input'>['ref'];
    };
    /** Props passed down to the submit button */
    submitButtonProps?: ActionIconProps & React.ComponentPropsWithoutRef<'button'>;
    /** Determines whether seconds input should be rendered */
    withSeconds?: boolean;
}
export type DateTimePickerFactory = Factory<{
    props: DateTimePickerProps;
    ref: HTMLButtonElement;
    stylesNames: DateTimePickerStylesNames;
    variant: InputVariant;
}>;
export declare const DateTimePicker: import("@mantine/core").MantineComponent<{
    props: DateTimePickerProps;
    ref: HTMLButtonElement;
    stylesNames: DateTimePickerStylesNames;
    variant: InputVariant;
}>;
//# sourceMappingURL=DateTimePicker.d.ts.map