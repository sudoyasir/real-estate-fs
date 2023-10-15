import { FormValidateInput, FormErrors } from '../types';
export declare function validateValues<T>(validate: FormValidateInput<T> | undefined, values: T): {
    hasErrors: boolean;
    errors: FormErrors;
};
//# sourceMappingURL=validate-values.d.ts.map