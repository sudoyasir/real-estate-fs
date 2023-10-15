import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
import { MonthLevelSettings, MonthLevelStylesNames } from '../MonthLevel';
import { LevelsGroupStylesNames } from '../LevelsGroup';
export type MonthLevelGroupStylesNames = MonthLevelStylesNames | LevelsGroupStylesNames;
export interface MonthLevelGroupProps extends BoxProps, Omit<MonthLevelSettings, 'withPrevious' | 'withNext' | '__onDayKeyDown' | '__getDayRef'>, Omit<StylesApiProps<MonthLevelGroupFactory>, 'classNames' | 'styles'>, ElementProps<'div'> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, React.CSSProperties>>;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Month that is currently displayed */
    month: Date;
    /** Function that returns level control aria-label based on month date */
    levelControlAriaLabel?: ((month: Date) => string) | string;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
export type MonthLevelGroupFactory = Factory<{
    props: MonthLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: MonthLevelGroupStylesNames;
}>;
export declare const MonthLevelGroup: import("@mantine/core").MantineComponent<{
    props: MonthLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: MonthLevelGroupStylesNames;
}>;
//# sourceMappingURL=MonthLevelGroup.d.ts.map