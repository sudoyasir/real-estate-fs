/// <reference types="react" />
import { FloatingAxesOffsets, FloatingPosition } from '../Floating';
interface UseTooltip {
    position: FloatingPosition;
    closeDelay?: number;
    openDelay?: number;
    onPositionChange?(position: FloatingPosition): void;
    opened?: boolean;
    offset: number | FloatingAxesOffsets;
    arrowRef?: React.RefObject<HTMLDivElement>;
    arrowOffset?: number;
    events?: {
        hover: boolean;
        focus: boolean;
        touch: boolean;
    };
    positionDependencies: any[];
    inline?: boolean;
}
export declare function useTooltip(settings: UseTooltip): {
    x: number;
    y: number;
    arrowX: number | undefined;
    arrowY: number | undefined;
    reference: ((node: import("@floating-ui/react-dom").ReferenceType | null) => void) & ((node: import("@floating-ui/react").ReferenceType | null) => void);
    floating: ((node: HTMLElement | null) => void) & ((node: HTMLElement | null) => void);
    getFloatingProps: (userProps?: import("react").HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getReferenceProps: (userProps?: import("react").HTMLProps<Element> | undefined) => Record<string, unknown>;
    isGroupPhase: any;
    opened: boolean | undefined;
    placement: import("@floating-ui/react").Placement;
};
export {};
