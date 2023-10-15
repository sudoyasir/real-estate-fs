import React from 'react';
export interface PortalProps extends React.ComponentPropsWithoutRef<'div'> {
    /** Portal children, for example, custom modal or popover */
    children: React.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}
export declare const Portal: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<HTMLDivElement>>;
