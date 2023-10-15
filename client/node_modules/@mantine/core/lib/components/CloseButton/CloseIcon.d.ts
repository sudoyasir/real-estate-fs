import React from 'react';
export interface CloseIconProps extends React.ComponentPropsWithoutRef<'svg'> {
    /** Icon width and height, `var(--icon-size)` by default */
    size?: string;
}
export declare const CloseIcon: React.ForwardRefExoticComponent<CloseIconProps & React.RefAttributes<SVGSVGElement>>;
