import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize } from '@mantine/core';
import { ControlsGroupSettings } from '../../types';
import { PickerControlProps } from '../PickerControl';
export type YearsListStylesNames = 'yearsListControl' | 'yearsList' | 'yearsListCell' | 'yearsListRow';
export interface YearsListSettings extends ControlsGroupSettings {
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** dayjs format for years list, `'YYYY'` by default  */
    yearsListFormat?: string;
    /** Adds props to year picker control based on date */
    getYearControlProps?(date: Date): Partial<PickerControlProps>;
    /** Component size */
    size?: MantineSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}
export interface YearsListProps extends BoxProps, YearsListSettings, StylesApiProps<YearsListFactory>, ElementProps<'table'> {
    __staticSelector?: string;
    /** Decade for which years list should be displayed */
    decade: Date;
}
export type YearsListFactory = Factory<{
    props: YearsListProps;
    ref: HTMLTableElement;
    stylesNames: YearsListStylesNames;
}>;
export declare const YearsList: import("@mantine/core").MantineComponent<{
    props: YearsListProps;
    ref: HTMLTableElement;
    stylesNames: YearsListStylesNames;
}>;
//# sourceMappingURL=YearsList.d.ts.map