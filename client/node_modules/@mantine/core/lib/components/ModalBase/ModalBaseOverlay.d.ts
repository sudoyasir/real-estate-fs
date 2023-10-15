import React from 'react';
import { ElementProps } from '../../core';
import { OverlayProps } from '../Overlay';
import { TransitionOverride } from '../Transition';
export interface ModalBaseOverlayProps extends Omit<OverlayProps, 'styles' | 'classNames' | 'variant' | 'vars'>, ElementProps<'div', 'color'> {
    /** Props passed down to the `Transition` component */
    transitionProps?: TransitionOverride;
}
export declare const ModalBaseOverlay: React.ForwardRefExoticComponent<ModalBaseOverlayProps & React.RefAttributes<HTMLDivElement>>;
