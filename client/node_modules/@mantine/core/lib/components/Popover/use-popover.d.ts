/// <reference types="react" />
import { FloatingAxesOffsets, FloatingPosition } from '../Floating';
import { PopoverWidth, PopoverMiddlewares } from './Popover.types';
interface UsePopoverOptions {
    offset: number | FloatingAxesOffsets;
    position: FloatingPosition;
    positionDependencies: any[] | undefined;
    onPositionChange?(position: FloatingPosition): void;
    opened: boolean | undefined;
    defaultOpened: boolean | undefined;
    onChange?(opened: boolean): void;
    onClose?(): void;
    onOpen?(): void;
    width: PopoverWidth;
    middlewares: PopoverMiddlewares | undefined;
    arrowRef: React.RefObject<HTMLDivElement>;
    arrowOffset: number;
}
export declare function usePopover(options: UsePopoverOptions): {
    floating: {
        placement: import("@floating-ui/react").Placement;
        strategy: import("@floating-ui/react").Strategy;
        middlewareData: import("@floating-ui/react").MiddlewareData;
        x: number;
        y: number;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: import("react").CSSProperties;
        refs: {
            reference: import("react").MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
            floating: import("react").MutableRefObject<HTMLElement | null>;
            setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
            setFloating: (node: HTMLElement | null) => void;
        } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: {
            reference: import("@floating-ui/react-dom").ReferenceType | null;
            floating: HTMLElement | null;
        } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
        context: {
            x: number;
            y: number;
            placement: import("@floating-ui/react").Placement;
            strategy: import("@floating-ui/react").Strategy;
            middlewareData: import("@floating-ui/react").MiddlewareData;
            isPositioned: boolean;
            update: () => void;
            floatingStyles: import("react").CSSProperties;
            open: boolean;
            onOpenChange: (open: boolean, event?: Event | undefined) => void;
            events: import("@floating-ui/react").FloatingEvents;
            dataRef: import("react").MutableRefObject<import("@floating-ui/react").ContextData>;
            nodeId: string | undefined;
            floatingId: string;
            refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
            elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
        };
    };
    controlled: boolean;
    opened: boolean;
    onClose: () => void;
    onToggle: () => void;
};
export {};
