import { MantineColor, MantineTheme, MantineGradient } from '../../theme.types';
export interface VariantColorsResolverInput {
    color: MantineColor | undefined;
    theme: MantineTheme;
    variant: string;
    gradient?: MantineGradient;
}
export interface VariantColorResolverResult {
    background: string;
    hover: string;
    color: string;
    border: string;
}
export type VariantColorsResolver = (input: VariantColorsResolverInput) => VariantColorResolverResult;
export declare const defaultVariantColorsResolver: VariantColorsResolver;
