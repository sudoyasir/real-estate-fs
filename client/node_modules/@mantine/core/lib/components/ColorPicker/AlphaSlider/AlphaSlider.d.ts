import React from 'react';
import { __ColorSliderProps } from '../ColorSlider/ColorSlider';
export interface AlphaSliderProps extends __ColorSliderProps {
    color: string;
}
export declare const AlphaSlider: React.ForwardRefExoticComponent<AlphaSliderProps & React.RefAttributes<HTMLDivElement>>;
