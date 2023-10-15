import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, InputVariant, __BaseInputProps, __InputStylesNames, PopoverProps } from '@mantine/core';
import { CalendarBaseProps, CalendarStylesNames } from '../Calendar';
import { DecadeLevelSettings } from '../DecadeLevel';
import { YearLevelSettings } from '../YearLevel';
import { MonthLevelSettings } from '../MonthLevel';
import { DateValue, CalendarLevel } from '../../types';
export type DateInputStylesNames = __InputStylesNames | CalendarStylesNames;
export interface DateInputProps extends BoxProps, Omit<__BaseInputProps, 'size'>, CalendarBaseProps, DecadeLevelSettings, YearLevelSettings, MonthLevelSettings, StylesApiProps<DateInputFactory>, ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
    /** Parses user input to convert it to Date object */
    dateParser?: (value: string) => Date | null;
    /** Value for controlled component */
    value?: DateValue;
    /** Default value for uncontrolled component */
    defaultValue?: DateValue;
    /** Called when value changes */
    onChange?(value: DateValue): void;
    /** Props added to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, 'children'>>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props added to clear button */
    clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
    /** Determines whether input value should be reverted to last known valid value on blur, true by default */
    fixOnBlur?: boolean;
    /** Determines whether value can be deselected when the user clicks on the selected date in the calendar (only when clearable prop is set), defaults to true if clearable prop is set, false otherwise */
    allowDeselect?: boolean;
    /** Determines whether time (hours, minutes, seconds and milliseconds) should be preserved when new date is picked, true by default */
    preserveTime?: boolean;
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Called when level changes */
    onLevelChange?(level: CalendarLevel): void;
}
export type DateInputFactory = Factory<{
    props: DateInputProps;
    ref: HTMLInputElement;
    stylesNames: DateInputStylesNames;
    variant: InputVariant;
}>;
export declare const DateInput: import("@mantine/core").MantineComponent<{
    props: DateInputProps;
    ref: HTMLInputElement;
    stylesNames: DateInputStylesNames;
    variant: InputVariant;
}>;
//# sourceMappingURL=DateInput.d.ts.map