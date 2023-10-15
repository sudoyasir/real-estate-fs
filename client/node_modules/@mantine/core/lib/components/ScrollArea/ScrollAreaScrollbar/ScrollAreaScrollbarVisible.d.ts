import React from 'react';
import { ScrollAreaScrollbarAxisPrivateProps, ScrollAreaScrollbarAxisProps } from '../ScrollArea.types';
export interface ScrollAreaScrollbarVisibleProps extends Omit<ScrollAreaScrollbarAxisProps, keyof ScrollAreaScrollbarAxisPrivateProps> {
    orientation?: 'horizontal' | 'vertical';
}
export declare const ScrollAreaScrollbarVisible: React.ForwardRefExoticComponent<ScrollAreaScrollbarVisibleProps & React.RefAttributes<HTMLDivElement>>;
