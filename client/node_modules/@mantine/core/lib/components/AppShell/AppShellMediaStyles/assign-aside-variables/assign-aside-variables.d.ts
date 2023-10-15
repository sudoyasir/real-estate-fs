import { MantineTheme } from '../../../../core';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import type { AppShellProps } from '../../AppShell';
interface AssignAsideVariablesInput {
    baseStyles: CSSVariables;
    minMediaStyles: MediaQueryVariables;
    maxMediaStyles: MediaQueryVariables;
    aside: AppShellProps['aside'] | undefined;
    theme: MantineTheme;
}
export declare function assignAsideVariables({ baseStyles, minMediaStyles, maxMediaStyles, aside, theme, }: AssignAsideVariablesInput): void;
export {};
