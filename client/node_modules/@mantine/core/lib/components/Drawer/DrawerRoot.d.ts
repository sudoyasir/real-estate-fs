import { StylesApiProps, Factory } from '../../core';
import { ModalBaseProps, ModalBaseStylesNames } from '../ModalBase';
import { ScrollAreaComponent } from './Drawer.context';
type DrawerPosition = 'bottom' | 'left' | 'right' | 'top';
export type DrawerRootStylesNames = ModalBaseStylesNames;
export type DrawerRootCssVariables = {
    root: '--drawer-size' | '--drawer-flex' | '--drawer-height' | '--drawer-align' | '--drawer-justify';
};
export interface DrawerRootProps extends StylesApiProps<DrawerRootFactory>, ModalBaseProps {
    /** Scroll area component, native `div` element by default */
    scrollAreaComponent?: ScrollAreaComponent;
    /** Side of the screen on which drawer will be opened, `'left'` by default */
    position?: DrawerPosition;
}
export type DrawerRootFactory = Factory<{
    props: DrawerRootProps;
    ref: HTMLDivElement;
    stylesNames: DrawerRootStylesNames;
    vars: DrawerRootCssVariables;
    compound: true;
}>;
export declare const DrawerRoot: import("../../core").MantineComponent<{
    props: DrawerRootProps;
    ref: HTMLDivElement;
    stylesNames: DrawerRootStylesNames;
    vars: DrawerRootCssVariables;
    compound: true;
}>;
export {};
