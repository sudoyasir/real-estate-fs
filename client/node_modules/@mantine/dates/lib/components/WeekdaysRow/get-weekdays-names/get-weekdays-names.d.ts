import React from 'react';
import type { DayOfWeek } from '../../../types';
interface GetWeekdaysNamesInput {
    locale: string;
    format?: string | ((date: Date) => React.ReactNode);
    firstDayOfWeek?: DayOfWeek;
}
export declare function getWeekdayNames({ locale, format, firstDayOfWeek, }: GetWeekdaysNamesInput): React.ReactNode[];
export {};
//# sourceMappingURL=get-weekdays-names.d.ts.map