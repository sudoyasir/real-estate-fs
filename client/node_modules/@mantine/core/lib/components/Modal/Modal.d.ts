import React from 'react';
import { Factory } from '../../core';
import { ModalBaseOverlayProps, ModalBaseCloseButtonProps } from '../ModalBase';
import { ModalRoot, ModalRootProps, ModalRootCssVariables, ModalRootStylesNames } from './ModalRoot';
import { ModalBody } from './ModalBody';
import { ModalCloseButton } from './ModalCloseButton';
import { ModalOverlay } from './ModalOverlay';
import { ModalContent } from './ModalContent';
import { ModalTitle } from './ModalTitle';
import { ModalHeader } from './ModalHeader';
export type ModalStylesNames = ModalRootStylesNames;
export type ModalCssVariables = ModalRootCssVariables;
export interface ModalProps extends ModalRootProps {
    __staticSelector?: string;
    /** Modal title */
    title?: React.ReactNode;
    /** Determines whether the overlay should be rendered, `true` by default */
    withOverlay?: boolean;
    /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
    overlayProps?: ModalBaseOverlayProps;
    /** Modal content */
    children?: React.ReactNode;
    /** Determines whether the close button should be rendered, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: ModalBaseCloseButtonProps;
}
export type ModalFactory = Factory<{
    props: ModalProps;
    ref: HTMLDivElement;
    stylesNames: ModalStylesNames;
    vars: ModalCssVariables;
    staticComponents: {
        Root: typeof ModalRoot;
        Overlay: typeof ModalOverlay;
        Content: typeof ModalContent;
        Body: typeof ModalBody;
        Header: typeof ModalHeader;
        Title: typeof ModalTitle;
        CloseButton: typeof ModalCloseButton;
    };
}>;
export declare const Modal: import("../../core").MantineComponent<{
    props: ModalProps;
    ref: HTMLDivElement;
    stylesNames: ModalStylesNames;
    vars: ModalCssVariables;
    staticComponents: {
        Root: typeof ModalRoot;
        Overlay: typeof ModalOverlay;
        Content: typeof ModalContent;
        Body: typeof ModalBody;
        Header: typeof ModalHeader;
        Title: typeof ModalTitle;
        CloseButton: typeof ModalCloseButton;
    };
}>;
