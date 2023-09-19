/// <reference types="react" />
import DisplayName from '../helpers/DisplayName';
import { DivAttributes } from '../helpers/types';
import { ID } from './ItemContext';
declare type Props = DivAttributes & {
    uuid?: ID;
    activeClassName?: string;
    dangerouslySetExpanded?: boolean;
};
declare const AccordionItem: {
    ({ uuid: customUuid, dangerouslySetExpanded, className, activeClassName, ...rest }: Props): JSX.Element;
    displayName: DisplayName;
};
export default AccordionItem;
