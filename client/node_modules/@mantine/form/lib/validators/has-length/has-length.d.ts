import React from 'react';
interface HasLengthOptions {
    max?: number;
    min?: number;
}
type HasLengthPayload = HasLengthOptions | number;
export declare function hasLength(payload: HasLengthPayload, error?: React.ReactNode): (value: unknown) => string | number | true | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null;
export {};
//# sourceMappingURL=has-length.d.ts.map