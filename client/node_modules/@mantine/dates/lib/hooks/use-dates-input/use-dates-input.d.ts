import { DatePickerType, DatePickerValue } from '../../types';
interface UseDatesInput<Type extends DatePickerType = 'default'> {
    type: Type;
    value: DatePickerValue<Type> | undefined;
    defaultValue: DatePickerValue<Type> | undefined;
    onChange: ((value: DatePickerValue<Type>) => void) | undefined;
    locale: string | undefined;
    format: string | undefined;
    closeOnChange: boolean | undefined;
    sortDates: boolean | undefined;
    labelSeparator: string | undefined;
}
export declare function useDatesInput<Type extends DatePickerType = 'default'>({ type, value, defaultValue, onChange, locale, format, closeOnChange, sortDates, labelSeparator, }: UseDatesInput<Type>): {
    _value: any;
    setValue: (val: any) => void;
    onClear: () => void;
    shouldClear: boolean;
    formattedValue: string;
    dropdownOpened: boolean;
    dropdownHandlers: {
        readonly open: () => void;
        readonly close: () => void;
        readonly toggle: () => void;
    };
};
export {};
//# sourceMappingURL=use-dates-input.d.ts.map