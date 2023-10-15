/// <reference types="react" />
import type { MantineTheme } from '../../MantineProvider';
import type { MantineStyleProp, CssVarsProp } from '../Box.types';
interface GetBoxStyleOptions {
    theme: MantineTheme;
    styleProps: React.CSSProperties;
    style?: MantineStyleProp;
    vars?: CssVarsProp;
}
export declare function getBoxStyle({ theme, style, vars, styleProps, }: GetBoxStyleOptions): React.CSSProperties;
export {};
