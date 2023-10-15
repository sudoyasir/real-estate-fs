import React from 'react';
import { TransitionOverride } from '../../Transition';
export interface ThumbProps {
    max: number;
    min: number;
    value: number;
    position: number;
    dragging: boolean;
    label: React.ReactNode;
    onKeyDownCapture?(event: React.KeyboardEvent<HTMLDivElement>): void;
    onMouseDown?(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void;
    labelTransitionProps: TransitionOverride | undefined;
    labelAlwaysOn: boolean | undefined;
    thumbLabel: string | undefined;
    onFocus?(): void;
    onBlur?(): void;
    showLabelOnHover: boolean | undefined;
    isHovered?: boolean;
    children?: React.ReactNode;
    disabled: boolean | undefined;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Thumb: React.ForwardRefExoticComponent<ThumbProps & React.RefAttributes<HTMLDivElement>>;
