/// <reference types="react" />
import { DivAttributes } from '../helpers/types';
declare type Props = DivAttributes & {
    region?: boolean;
    className?: string;
};
declare const AccordionItemPanel: ({ className, region, id, ...rest }: Props) => JSX.Element;
export default AccordionItemPanel;
