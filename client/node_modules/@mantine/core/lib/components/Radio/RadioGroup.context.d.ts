/// <reference types="react" />
import { MantineSize } from '../../core';
interface RadioGroupContextValue {
    size: MantineSize | undefined;
    value: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    name: string;
}
export declare const RadioGroupProvider: ({ children, value }: {
    value: RadioGroupContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useRadioGroupContext: () => RadioGroupContextValue | null;
export {};
