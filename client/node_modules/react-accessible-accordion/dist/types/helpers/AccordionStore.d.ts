import { ID } from '../components/ItemContext';
export interface InjectedPanelAttributes {
    role: string | undefined;
    'aria-hidden': boolean | undefined;
    'aria-labelledby': string;
    id: string;
    hidden: boolean | undefined;
}
export interface InjectedHeadingAttributes {
    role: string;
}
export interface InjectedButtonAttributes {
    id: string;
    'aria-controls': string;
    'aria-expanded': boolean;
    'aria-disabled': boolean;
    role: string;
    tabIndex: number;
}
export default class AccordionStore {
    readonly expanded: ID[];
    readonly allowMultipleExpanded: boolean;
    readonly allowZeroExpanded: boolean;
    constructor({ expanded, allowMultipleExpanded, allowZeroExpanded, }: {
        expanded?: ID[];
        allowMultipleExpanded?: boolean;
        allowZeroExpanded?: boolean;
    });
    readonly toggleExpanded: (uuid: ID) => AccordionStore;
    readonly isItemDisabled: (uuid: ID) => boolean;
    readonly isItemExpanded: (uuid: ID) => boolean;
    readonly getPanelAttributes: (uuid: ID, dangerouslySetExpanded?: boolean | undefined) => InjectedPanelAttributes;
    readonly getHeadingAttributes: () => InjectedHeadingAttributes;
    readonly getButtonAttributes: (uuid: ID, dangerouslySetExpanded?: boolean | undefined) => InjectedButtonAttributes;
    private readonly getPanelId;
    private readonly getButtonId;
    private readonly augment;
}
