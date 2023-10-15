import React from 'react';
import { BoxProps, ElementProps } from '../../../core';
export interface ScrollAreaViewportProps extends BoxProps, ElementProps<'div'> {
}
export declare const ScrollAreaViewport: React.ForwardRefExoticComponent<ScrollAreaViewportProps & React.RefAttributes<HTMLDivElement>>;
