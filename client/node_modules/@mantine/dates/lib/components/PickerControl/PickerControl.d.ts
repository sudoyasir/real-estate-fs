import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize } from '@mantine/core';
export type PickerControlStylesNames = 'pickerControl';
export type PickerControlCssVariables = {
    pickerControl: '--dpc-size' | '--dpc-fz';
};
export interface PickerControlProps extends BoxProps, StylesApiProps<PickerControlFactory>, ElementProps<'button'> {
    __staticSelector?: string;
    /** Control children */
    children?: React.ReactNode;
    /** Determines whether control should be disabled */
    disabled?: boolean;
    /** Determines whether control should have selected styles */
    selected?: boolean;
    /** Determines whether control is selected in range */
    inRange?: boolean;
    /** Determines whether control is first in range selection */
    firstInRange?: boolean;
    /** Determines whether control is last in range selection */
    lastInRange?: boolean;
    /** Component size */
    size?: MantineSize;
}
export type PickerControlFactory = Factory<{
    props: PickerControlProps;
    ref: HTMLButtonElement;
    stylesNames: PickerControlStylesNames;
    vars: PickerControlCssVariables;
}>;
export declare const PickerControl: import("@mantine/core").MantineComponent<{
    props: PickerControlProps;
    ref: HTMLButtonElement;
    stylesNames: PickerControlStylesNames;
    vars: PickerControlCssVariables;
}>;
//# sourceMappingURL=PickerControl.d.ts.map