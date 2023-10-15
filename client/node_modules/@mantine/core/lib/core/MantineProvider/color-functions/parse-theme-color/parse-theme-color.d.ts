import type { MantineTheme, MantineColorShade, MantineColorScheme } from '../../theme.types';
import type { CssVariable } from '../../../Box';
interface ParseThemeColorOptions {
    color: unknown;
    theme: MantineTheme;
    colorScheme?: MantineColorScheme;
}
interface ParseThemeColorResult {
    color: string;
    value: string;
    shade: MantineColorShade | undefined;
    variable: CssVariable | undefined;
    isThemeColor: boolean;
}
export declare function parseThemeColor({ color, theme, colorScheme, }: ParseThemeColorOptions): ParseThemeColorResult;
export {};
