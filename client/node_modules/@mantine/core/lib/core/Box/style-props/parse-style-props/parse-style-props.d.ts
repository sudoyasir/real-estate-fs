/// <reference types="react" />
import type { StyleProp } from '../style-props.types';
import type { SystemPropData } from '../style-props-data';
import { MantineTheme } from '../../../MantineProvider';
import type { SortMediaQueriesResult } from './sort-media-queries';
interface ParseStylePropsOptions {
    styleProps: Record<string, StyleProp<any>>;
    theme: MantineTheme;
    data: Record<string, SystemPropData>;
}
export interface ParseStylePropsResult {
    hasResponsiveStyles: boolean;
    inlineStyles: React.CSSProperties;
    styles: React.CSSProperties;
    media: Record<string, React.CSSProperties>;
}
export declare function parseStyleProps({ styleProps, data, theme, }: ParseStylePropsOptions): SortMediaQueriesResult;
export {};
