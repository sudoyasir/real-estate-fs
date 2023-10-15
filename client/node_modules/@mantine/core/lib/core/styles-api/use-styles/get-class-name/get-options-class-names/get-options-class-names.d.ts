import { ResolveClassNamesInput } from '../resolve-class-names/resolve-class-names';
import { GetStylesApiOptions } from '../../../styles-api.types';
interface GetOptionsClassNamesInput extends Omit<ResolveClassNamesInput, 'classNames'> {
    selector: string;
    options: GetStylesApiOptions | undefined;
}
export declare function getOptionsClassNames({ selector, stylesCtx, options, props, theme, }: GetOptionsClassNamesInput): string | undefined;
export {};
