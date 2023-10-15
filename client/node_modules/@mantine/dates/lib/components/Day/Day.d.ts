import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize } from '@mantine/core';
export type DayStylesNames = 'day';
export type DayCssVariables = {
    day: '--day-size';
};
export interface DayProps extends BoxProps, StylesApiProps<DayFactory>, ElementProps<'button'> {
    __staticSelector?: string;
    /** Determines which element should be used as root, `'button'` by default, `'div'` if static prop is set */
    static?: boolean;
    /** Date that should be displayed */
    date: Date;
    /** Control width and height of the day, `'sm'` by default */
    size?: MantineSize;
    /** Determines whether the day should be considered to be a weekend, `false` by default */
    weekend?: boolean;
    /** Determines whether the day is outside of the current month, `false` by default */
    outside?: boolean;
    /** Determines whether the day is selected, `false` by default */
    selected?: boolean;
    /** Determines whether the day should not de displayed, `false` by default */
    hidden?: boolean;
    /** Determines whether the day is selected in range, `false` by default */
    inRange?: boolean;
    /** Determines whether the day is first in range selection, `false` by default */
    firstInRange?: boolean;
    /** Determines whether the day is last in range selection, `false` by default */
    lastInRange?: boolean;
    /** Controls day value rendering */
    renderDay?(date: Date): React.ReactNode;
}
export type DayFactory = Factory<{
    props: DayProps;
    ref: HTMLButtonElement;
    stylesNames: DayStylesNames;
    vars: DayCssVariables;
}>;
export declare const Day: import("@mantine/core").MantineComponent<{
    props: DayProps;
    ref: HTMLButtonElement;
    stylesNames: DayStylesNames;
    vars: DayCssVariables;
}>;
//# sourceMappingURL=Day.d.ts.map