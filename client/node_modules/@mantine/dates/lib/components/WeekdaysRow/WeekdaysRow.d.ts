import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize } from '@mantine/core';
import type { DayOfWeek } from '../../types';
export type WeekdaysRowStylesNames = 'weekday' | 'weekdaysRow';
export type WeekdaysRowCssVariables = {
    weekdaysRow: '--wr-fz' | '--wr-spacing';
};
export interface WeekdaysRowProps extends BoxProps, StylesApiProps<WeekdaysRowFactory>, ElementProps<'tr'> {
    __staticSelector?: string;
    /** Controls size */
    size?: MantineSize;
    /** dayjs locale, defaults to value defined in DatesProvider */
    locale?: string;
    /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
    firstDayOfWeek?: DayOfWeek;
    /** dayjs format to get weekday name, defaults to "dd" */
    weekdayFormat?: string | ((date: Date) => React.ReactNode);
    /** Choose cell type that will be used to render weekdays, defaults to th */
    cellComponent?: 'td' | 'th';
}
export type WeekdaysRowFactory = Factory<{
    props: WeekdaysRowProps;
    ref: HTMLTableRowElement;
    stylesNames: WeekdaysRowStylesNames;
    vars: WeekdaysRowCssVariables;
}>;
export declare const WeekdaysRow: import("@mantine/core").MantineComponent<{
    props: WeekdaysRowProps;
    ref: HTMLTableRowElement;
    stylesNames: WeekdaysRowStylesNames;
    vars: WeekdaysRowCssVariables;
}>;
//# sourceMappingURL=WeekdaysRow.d.ts.map