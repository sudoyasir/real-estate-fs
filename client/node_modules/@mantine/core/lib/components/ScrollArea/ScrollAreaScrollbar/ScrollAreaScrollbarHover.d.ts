import React from 'react';
import { ScrollAreaScrollbarAutoProps } from './ScrollAreaScrollbarAuto';
interface ScrollAreaScrollbarHoverProps extends ScrollAreaScrollbarAutoProps {
    forceMount?: true;
}
export declare const ScrollAreaScrollbarHover: React.ForwardRefExoticComponent<ScrollAreaScrollbarHoverProps & React.RefAttributes<HTMLDivElement>>;
export {};
