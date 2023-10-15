import React from 'react';
import { ScrollAreaScrollbarVisibleProps } from './ScrollAreaScrollbarVisible';
export interface ScrollAreaScrollbarAutoProps extends ScrollAreaScrollbarVisibleProps {
    forceMount?: true;
}
export declare const ScrollAreaScrollbarAuto: React.ForwardRefExoticComponent<ScrollAreaScrollbarAutoProps & React.RefAttributes<HTMLDivElement>>;
