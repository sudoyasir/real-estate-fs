import { DatePickerType, DatePickerValue } from '../types';
interface GetFormattedDate<Type extends DatePickerType = 'default'> {
    type: Type;
    date: DatePickerValue<Type>;
    locale: string;
    format: string;
    labelSeparator: string;
}
export declare function getFormattedDate<Type extends DatePickerType>({ type, date, locale, format, labelSeparator, }: GetFormattedDate<Type>): string;
export {};
//# sourceMappingURL=get-formatted-date.d.ts.map