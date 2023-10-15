import { StylesApiProps, Factory, MantineColor } from '../../core';
import { ProgressRoot, ProgressRootStylesNames, ProgressRootCssVariables, __ProgressRootProps } from './ProgressRoot/ProgressRoot';
import { ProgressSection } from './ProgressSection/ProgressSection';
import { ProgressLabel } from './ProgressLabel/ProgressLabel';
export type ProgressStylesNames = ProgressRootStylesNames;
export interface ProgressProps extends __ProgressRootProps, StylesApiProps<ProgressFactory> {
    /** Value of the progress */
    value: number;
    /** Key of `theme.colors` or any valid CSS value, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Determines whether the section should have stipes, `false` by default */
    striped?: boolean;
    /** Determines whether the sections stripes should be animated, if set, `striped` prop is ignored, `false` by default */
    animated?: boolean;
}
export type ProgressFactory = Factory<{
    props: ProgressProps;
    ref: HTMLDivElement;
    stylesNames: ProgressStylesNames;
    vars: ProgressRootCssVariables;
    staticComponents: {
        Section: typeof ProgressSection;
        Root: typeof ProgressRoot;
        Label: typeof ProgressLabel;
    };
}>;
export declare const Progress: import("../../core").MantineComponent<{
    props: ProgressProps;
    ref: HTMLDivElement;
    stylesNames: ProgressStylesNames;
    vars: ProgressRootCssVariables;
    staticComponents: {
        Section: typeof ProgressSection;
        Root: typeof ProgressRoot;
        Label: typeof ProgressLabel;
    };
}>;
