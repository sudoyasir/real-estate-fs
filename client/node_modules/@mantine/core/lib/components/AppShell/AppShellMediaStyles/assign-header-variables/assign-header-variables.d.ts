import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import type { AppShellProps } from '../../AppShell';
interface AssignHeaderVariablesInput {
    baseStyles: CSSVariables;
    minMediaStyles: MediaQueryVariables;
    header: AppShellProps['header'] | undefined;
}
export declare function assignHeaderVariables({ baseStyles, minMediaStyles, header, }: AssignHeaderVariablesInput): void;
export {};
