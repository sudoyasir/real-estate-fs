import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
import { YearLevelSettings, YearLevelStylesNames } from '../YearLevel';
import { LevelsGroupStylesNames } from '../LevelsGroup';
export type YearLevelGroupStylesNames = YearLevelStylesNames | LevelsGroupStylesNames;
export interface YearLevelGroupProps extends BoxProps, Omit<YearLevelSettings, 'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'>, Omit<StylesApiProps<YearLevelGroupFactory>, 'classNames' | 'styles'>, ElementProps<'div'> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, React.CSSProperties>>;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Year that is currently displayed */
    year: Date;
    /** Function that returns level control aria-label based on year date */
    levelControlAriaLabel?: ((year: Date) => string) | string;
}
export type YearLevelGroupFactory = Factory<{
    props: YearLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: YearLevelGroupStylesNames;
}>;
export declare const YearLevelGroup: import("@mantine/core").MantineComponent<{
    props: YearLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: YearLevelGroupStylesNames;
}>;
//# sourceMappingURL=YearLevelGroup.d.ts.map