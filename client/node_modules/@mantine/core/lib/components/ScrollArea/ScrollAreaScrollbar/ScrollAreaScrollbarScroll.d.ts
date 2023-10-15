import React from 'react';
import { ScrollAreaScrollbarVisibleProps } from './ScrollAreaScrollbarVisible';
interface ScrollAreaScrollbarScrollProps extends ScrollAreaScrollbarVisibleProps {
    forceMount?: true;
}
export declare const ScrollAreaScrollbarScroll: React.ForwardRefExoticComponent<ScrollAreaScrollbarScrollProps & React.RefAttributes<HTMLDivElement>>;
export {};
