export declare function useDebouncedState<T = any>(defaultValue: T, wait: number, options?: {
    leading: boolean;
}): readonly [T, (newValue: T) => void];
