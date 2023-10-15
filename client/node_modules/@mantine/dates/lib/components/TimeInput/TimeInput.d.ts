import { Factory, InputBaseProps, __InputStylesNames, ElementProps } from '@mantine/core';
export interface TimeInputProps extends InputBaseProps, ElementProps<'input', 'size'> {
    /** Determines whether seconds input should be rendered */
    withSeconds?: boolean;
}
export type TimeInputFactory = Factory<{
    props: TimeInputProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
}>;
export declare const TimeInput: import("@mantine/core").MantineComponent<{
    props: TimeInputProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
}>;
//# sourceMappingURL=TimeInput.d.ts.map