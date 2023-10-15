/// <reference types="react" />
import { MantineSize } from '../../core';
export interface PillGroupContextValue {
    size: MantineSize | (string & {}) | undefined;
    disabled: boolean | undefined;
}
export declare const PillGroupProvider: ({ children, value }: {
    value: PillGroupContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, usePillGroupContext: () => PillGroupContextValue | null;
