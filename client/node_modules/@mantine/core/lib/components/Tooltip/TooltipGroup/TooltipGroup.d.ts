import React from 'react';
export interface TooltipGroupProps {
    /** <Tooltip /> components */
    children: React.ReactNode;
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
}
export declare function TooltipGroup(props: TooltipGroupProps): import("react/jsx-runtime").JSX.Element;
export declare namespace TooltipGroup {
    var displayName: string;
}
