import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import type { AppShellProps } from '../../AppShell';
interface AssignFooterVariablesInput {
    baseStyles: CSSVariables;
    minMediaStyles: MediaQueryVariables;
    footer: AppShellProps['footer'] | undefined;
}
export declare function assignFooterVariables({ baseStyles, minMediaStyles, footer, }: AssignFooterVariablesInput): void;
export {};
