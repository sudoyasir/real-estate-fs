import React from 'react';
interface IsInRangePayload {
    min?: number;
    max?: number;
}
export declare function isInRange({ min, max }: IsInRangePayload, error?: React.ReactNode): (value: unknown) => string | number | true | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null;
export {};
//# sourceMappingURL=is-in-range.d.ts.map