import React from 'react';
import { InlineStylesInput } from './styles-to-string/styles-to-string';
export interface InlineStylesProps extends InlineStylesInput, Omit<React.ComponentPropsWithoutRef<'style'>, keyof InlineStylesInput> {
}
export declare function InlineStyles({ selector, styles, media }: InlineStylesInput): import("react/jsx-runtime").JSX.Element;
