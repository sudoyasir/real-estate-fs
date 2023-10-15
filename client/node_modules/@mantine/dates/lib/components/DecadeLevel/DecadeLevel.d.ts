import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
import { YearsListSettings, YearsListStylesNames } from '../YearsList';
import { CalendarHeaderSettings, CalendarHeaderStylesNames } from '../CalendarHeader';
export type DecadeLevelStylesNames = YearsListStylesNames | CalendarHeaderStylesNames;
export interface DecadeLevelBaseSettings extends YearsListSettings {
    /** dayjs label format to display decade label or a function that returns decade label based on date value, defaults to "YYYY" */
    decadeLabelFormat?: string | ((startOfDecade: Date, endOfDecade: Date) => React.ReactNode);
}
export interface DecadeLevelSettings extends DecadeLevelBaseSettings, Omit<CalendarHeaderSettings, 'onLevelClick' | 'hasNextLevel'> {
}
export interface DecadeLevelProps extends BoxProps, DecadeLevelSettings, Omit<StylesApiProps<DecadeLevelFactory>, 'classNames' | 'styles'>, ElementProps<'div'> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, React.CSSProperties>>;
    __staticSelector?: string;
    /** Decade that is currently displayed */
    decade: Date;
    /** aria-label for change level control */
    levelControlAriaLabel?: string;
}
export type DecadeLevelFactory = Factory<{
    props: DecadeLevelProps;
    ref: HTMLDivElement;
    stylesNames: DecadeLevelStylesNames;
}>;
export declare const DecadeLevel: import("@mantine/core").MantineComponent<{
    props: DecadeLevelProps;
    ref: HTMLDivElement;
    stylesNames: DecadeLevelStylesNames;
}>;
//# sourceMappingURL=DecadeLevel.d.ts.map