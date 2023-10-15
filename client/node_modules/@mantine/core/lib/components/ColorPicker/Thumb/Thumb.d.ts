import React from 'react';
import { MantineSize } from '../../../core';
export interface ThumbProps extends React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    position: {
        x: number;
        y: number;
    };
    size: MantineSize | (string & {});
}
export declare const Thumb: React.ForwardRefExoticComponent<ThumbProps & React.RefAttributes<HTMLDivElement>>;
