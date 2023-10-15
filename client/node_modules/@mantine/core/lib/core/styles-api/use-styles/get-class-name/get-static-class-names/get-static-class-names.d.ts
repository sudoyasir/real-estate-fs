interface GetStaticClassNamesInput {
    themeName: string[];
    selector: string;
    classNamesPrefix: string;
}
/** Returns static component classes, for example, `.mantine-Input-wrapper` */
export declare function getStaticClassNames({ themeName, classNamesPrefix, selector, }: GetStaticClassNamesInput): string[];
export {};
