import { MantineTheme } from '../theme.types';
import { ConvertCSSVariablesInput } from '../convert-css-variables';
interface GetMergedVariablesInput {
    theme: MantineTheme;
    generator?(theme: MantineTheme): ConvertCSSVariablesInput;
}
export declare function getMergedVariables({ theme, generator }: GetMergedVariablesInput): ConvertCSSVariablesInput;
export {};
