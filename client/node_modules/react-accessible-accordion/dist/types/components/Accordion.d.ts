/// <reference types="react" />
import { DivAttributes } from '../helpers/types';
import { ID } from './ItemContext';
declare type AccordionProps = Pick<DivAttributes, Exclude<keyof DivAttributes, 'onChange'>> & {
    className?: string;
    preExpanded?: ID[];
    allowMultipleExpanded?: boolean;
    allowZeroExpanded?: boolean;
    onChange?(args: ID[]): void;
};
declare const Accordion: ({ className, allowMultipleExpanded, allowZeroExpanded, onChange, preExpanded, ...rest }: AccordionProps) => JSX.Element;
export default Accordion;
