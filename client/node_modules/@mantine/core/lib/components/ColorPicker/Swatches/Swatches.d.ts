import React from 'react';
import { ElementProps } from '../../../core';
export interface SwatchesProps extends ElementProps<'div'> {
    size?: string | number;
    data: string[];
    swatchesPerRow?: number;
    focusable?: boolean;
    onChangeEnd?: (color: string) => void;
    setValue(value: string): void;
}
export declare const Swatches: React.ForwardRefExoticComponent<SwatchesProps & React.RefAttributes<HTMLDivElement>>;
