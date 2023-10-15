import React from 'react';
import { BoxProps, ElementProps, Factory } from '../../../core';
export type ScrollAreaRootStylesNames = 'root' | 'viewport' | 'viewportInner' | 'scrollbar' | 'thumb' | 'corner';
export type ScrollAreaRootCssVariables = {
    root: '--sa-corner-width' | '--sa-corner-height';
};
export interface ScrollAreaRootStylesCtx {
    cornerWidth: number;
    cornerHeight: number;
}
export interface ScrollAreaRootProps extends BoxProps, ElementProps<'div'> {
    /**
     * Defines scrollbars behavior, `hover` by default
     * - `hover` – scrollbars are visible when mouse is over the scroll area
     * - `scroll` – scrollbars are visible when the scroll area is scrolled
     * - `always` – scrollbars are always visible
     * - `never` – scrollbars are always hidden
     * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
     * */
    type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';
    /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
    scrollHideDelay?: number;
}
export type ScrollAreaRootFactory = Factory<{
    props: ScrollAreaRootProps;
    ref: HTMLDivElement;
    stylesNames: ScrollAreaRootStylesNames;
}>;
export declare const ScrollAreaRoot: React.ForwardRefExoticComponent<ScrollAreaRootProps & React.RefAttributes<HTMLDivElement>>;
