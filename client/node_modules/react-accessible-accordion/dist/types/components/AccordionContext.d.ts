import * as React from 'react';
import AccordionStore, { InjectedButtonAttributes, InjectedHeadingAttributes, InjectedPanelAttributes } from '../helpers/AccordionStore';
import { ID } from './ItemContext';
export interface ProviderProps {
    preExpanded?: ID[];
    allowMultipleExpanded?: boolean;
    allowZeroExpanded?: boolean;
    children?: React.ReactNode;
    onChange?(args: ID[]): void;
}
declare type ProviderState = AccordionStore;
export interface AccordionContext {
    allowMultipleExpanded: boolean;
    allowZeroExpanded: boolean;
    toggleExpanded(uuid: ID): void;
    isItemDisabled(uuid: ID): boolean;
    isItemExpanded(uuid: ID): boolean;
    getPanelAttributes(uuid: ID, dangerouslySetExpanded?: boolean): InjectedPanelAttributes;
    getHeadingAttributes(uuid: ID): InjectedHeadingAttributes;
    getButtonAttributes(uuid: ID, dangerouslySetExpanded?: boolean): InjectedButtonAttributes;
}
export declare class Provider extends React.PureComponent<ProviderProps, ProviderState> {
    static defaultProps: ProviderProps;
    state: ProviderState;
    toggleExpanded: (key: ID) => void;
    isItemDisabled: (key: ID) => boolean;
    isItemExpanded: (key: ID) => boolean;
    getPanelAttributes: (key: ID, dangerouslySetExpanded?: boolean | undefined) => InjectedPanelAttributes;
    getHeadingAttributes: () => InjectedHeadingAttributes;
    getButtonAttributes: (key: ID, dangerouslySetExpanded?: boolean | undefined) => InjectedButtonAttributes;
    render(): JSX.Element;
}
export declare class Consumer extends React.PureComponent<{
    children(container: AccordionContext): React.ReactNode;
}> {
    renderChildren: (container: AccordionContext | null) => React.ReactNode;
    render(): JSX.Element;
}
export {};
