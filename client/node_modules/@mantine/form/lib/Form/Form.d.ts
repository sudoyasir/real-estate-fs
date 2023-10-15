import React from 'react';
import { UseFormReturnType, TransformedValues } from '../types';
export interface FormProps<Form extends UseFormReturnType<any>> extends React.ComponentPropsWithRef<'form'> {
    form: Form;
    onSubmit?(values: TransformedValues<Form>): void;
}
export type FormComponent = <Form extends UseFormReturnType<any>>(props: FormProps<Form>) => JSX.Element | React.ReactNode;
export declare const Form: FormComponent;
//# sourceMappingURL=Form.d.ts.map