import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
import { DecadeLevelSettings, DecadeLevelStylesNames } from '../DecadeLevel';
import { LevelsGroupStylesNames } from '../LevelsGroup';
export type DecadeLevelGroupStylesNames = LevelsGroupStylesNames | DecadeLevelStylesNames;
export interface DecadeLevelGroupProps extends BoxProps, Omit<StylesApiProps<DecadeLevelGroupFactory>, 'classNames' | 'styles'>, Omit<DecadeLevelSettings, 'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'>, ElementProps<'div'> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, React.CSSProperties>>;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Decade that is currently displayed */
    decade: Date;
    /** Function that returns level control aria-label based on year date */
    levelControlAriaLabel?: ((decade: Date) => string) | string;
}
export type DecadeLevelGroupFactory = Factory<{
    props: DecadeLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: DecadeLevelGroupStylesNames;
}>;
export declare const DecadeLevelGroup: import("@mantine/core").MantineComponent<{
    props: DecadeLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: DecadeLevelGroupStylesNames;
}>;
//# sourceMappingURL=DecadeLevelGroup.d.ts.map