import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize } from '@mantine/core';
export type LevelsGroupStylesNames = 'levelsGroup';
export interface LevelsGroupProps extends BoxProps, StylesApiProps<LevelsGroupFactory>, ElementProps<'div'> {
    __staticSelector?: string;
    size?: MantineSize;
}
export type LevelsGroupFactory = Factory<{
    props: LevelsGroupProps;
    ref: HTMLDivElement;
    stylesNames: LevelsGroupStylesNames;
}>;
export declare const LevelsGroup: import("@mantine/core").MantineComponent<{
    props: LevelsGroupProps;
    ref: HTMLDivElement;
    stylesNames: LevelsGroupStylesNames;
}>;
//# sourceMappingURL=LevelsGroup.d.ts.map