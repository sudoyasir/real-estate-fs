import React from 'react';
import { UseFormReturnType, UseForm, _TransformValues } from '../types';
export interface FormProviderProps<Form> {
    form: Form;
    children: React.ReactNode;
}
export declare function createFormContext<Values, TransformValues extends _TransformValues<Values> = (values: Values) => Values>(): [React.FC<FormProviderProps<UseFormReturnType<Values, TransformValues>>>, () => UseFormReturnType<Values, TransformValues>, UseForm<Values, TransformValues>];
//# sourceMappingURL=FormProvider.d.ts.map