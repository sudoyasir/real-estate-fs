import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize } from '@mantine/core';
import { ControlsGroupSettings } from '../../types';
import { PickerControlProps } from '../PickerControl';
export type MonthsListStylesNames = 'monthsList' | 'monthsListCell' | 'monthsListRow' | 'monthsListControl';
export interface MonthsListSettings extends ControlsGroupSettings {
    /** dayjs format for months list  */
    monthsListFormat?: string;
    /** Adds props to month picker control based on date */
    getMonthControlProps?(date: Date): Partial<PickerControlProps>;
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}
export interface MonthsListProps extends BoxProps, MonthsListSettings, StylesApiProps<MonthsListFactory>, ElementProps<'table'> {
    __staticSelector?: string;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Year for which months list should be displayed */
    year: Date;
    /** Component size */
    size?: MantineSize;
}
export type MonthsListFactory = Factory<{
    props: MonthsListProps;
    ref: HTMLTableElement;
    stylesNames: MonthsListStylesNames;
}>;
export declare const MonthsList: import("@mantine/core").MantineComponent<{
    props: MonthsListProps;
    ref: HTMLTableElement;
    stylesNames: MonthsListStylesNames;
}>;
//# sourceMappingURL=MonthsList.d.ts.map