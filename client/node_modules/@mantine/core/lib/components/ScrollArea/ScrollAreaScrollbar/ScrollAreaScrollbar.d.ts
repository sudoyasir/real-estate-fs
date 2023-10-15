import React from 'react';
import { ScrollAreaScrollbarVisibleProps } from './ScrollAreaScrollbarVisible';
interface ScrollAreaScrollbarProps extends ScrollAreaScrollbarVisibleProps {
    forceMount?: true;
}
export declare const ScrollAreaScrollbar: React.ForwardRefExoticComponent<ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>>;
export {};
