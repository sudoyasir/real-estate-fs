import { RefObject } from 'react';
type ControlsRef = RefObject<HTMLButtonElement[][][]>;
interface HandleControlKeyDownInput {
    controlsRef: ControlsRef;
    levelIndex: number;
    rowIndex: number;
    cellIndex: number;
    event: React.KeyboardEvent<HTMLButtonElement>;
}
export declare function handleControlKeyDown({ controlsRef, levelIndex, rowIndex, cellIndex, event, }: HandleControlKeyDownInput): void;
export {};
//# sourceMappingURL=handle-control-key-down.d.ts.map