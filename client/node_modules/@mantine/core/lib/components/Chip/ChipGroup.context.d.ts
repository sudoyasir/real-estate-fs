/// <reference types="react" />
interface ChipGroupContextValue {
    isChipSelected(value: string): boolean;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    multiple: boolean;
}
export declare const ChipGroupProvider: ({ children, value }: {
    value: ChipGroupContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useChipGroupContext: () => ChipGroupContextValue | null;
export {};
