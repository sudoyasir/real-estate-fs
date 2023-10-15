import React from 'react';
export interface ChipGroupProps<T extends boolean = false> {
    /** Allow multiple values to be selected at a time */
    multiple?: T;
    /** Controlled component value */
    value?: T extends true ? string[] : string | null;
    /** Uncontrolled component initial value */
    defaultValue?: T extends true ? string[] : string | null;
    /** Called when value changes */
    onChange?(value: T extends true ? string[] : string): void;
    /** <Chip /> components */
    children?: React.ReactNode;
}
export declare function ChipGroup<T extends boolean>(props: ChipGroupProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace ChipGroup {
    var displayName: string;
}
