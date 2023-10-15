import React from 'react';
interface ThumbProps extends React.ComponentPropsWithoutRef<'div'> {
}
export declare const Thumb: React.ForwardRefExoticComponent<ThumbProps & React.RefAttributes<HTMLDivElement>>;
interface ScrollAreaThumbProps extends ThumbProps {
    forceMount?: true;
}
export declare const ScrollAreaThumb: React.ForwardRefExoticComponent<ScrollAreaThumbProps & React.RefAttributes<HTMLDivElement>>;
export {};
