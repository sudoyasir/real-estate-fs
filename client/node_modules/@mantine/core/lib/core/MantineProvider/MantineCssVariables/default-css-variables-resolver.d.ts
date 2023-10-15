import { MantineTheme } from '../theme.types';
import { ConvertCSSVariablesInput } from '../convert-css-variables';
export type CSSVariablesResolver = (theme: MantineTheme) => ConvertCSSVariablesInput;
export declare const defaultCssVariablesResolver: CSSVariablesResolver;
