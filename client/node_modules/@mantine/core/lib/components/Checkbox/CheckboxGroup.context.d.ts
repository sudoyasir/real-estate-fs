/// <reference types="react" />
import { MantineSize } from '../../core';
interface CheckboxGroupContextValue {
    value: string[];
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    size: MantineSize | (string & {}) | undefined;
}
export declare const CheckboxGroupProvider: import("react").Provider<CheckboxGroupContextValue | null>;
export declare const useCheckboxGroupContext: () => CheckboxGroupContextValue | null;
export {};
