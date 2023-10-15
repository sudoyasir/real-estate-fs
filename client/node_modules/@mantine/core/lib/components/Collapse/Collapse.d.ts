import React from 'react';
import { BoxProps } from '../../core';
export interface CollapseProps extends BoxProps, Omit<React.ComponentPropsWithoutRef<'div'>, keyof BoxProps> {
    /** Opened state */
    in: boolean;
    /** Called each time transition ends */
    onTransitionEnd?(): void;
    /** Transition duration in ms, `200` by default */
    transitionDuration?: number;
    /** Transition timing function, default value is `ease` */
    transitionTimingFunction?: string;
    /** Determines whether opacity should be animated, `true` by default */
    animateOpacity?: boolean;
}
export declare const Collapse: React.ForwardRefExoticComponent<CollapseProps & React.RefAttributes<HTMLDivElement>>;
