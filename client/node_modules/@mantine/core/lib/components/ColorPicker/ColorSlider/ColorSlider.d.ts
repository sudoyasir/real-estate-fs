import React from 'react';
import { ElementProps, MantineSize } from '../../../core';
export interface __ColorSliderProps extends ElementProps<'div', 'onChange'> {
    value: number;
    onChange?(value: number): void;
    onChangeEnd?(value: number): void;
    onScrubStart?(): void;
    onScrubEnd?(): void;
    size?: MantineSize | (string & {});
    focusable?: boolean;
}
export interface ColorSliderProps extends __ColorSliderProps {
    maxValue: number;
    overlays: React.CSSProperties[];
    round: boolean;
    thumbColor?: string;
}
export declare const ColorSlider: React.ForwardRefExoticComponent<ColorSliderProps & React.RefAttributes<HTMLDivElement>>;
