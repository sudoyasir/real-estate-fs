import { StorageProperties } from './create-storage';
export declare function useLocalStorage<T = string>(props: StorageProperties<T>): readonly [T | undefined, (val: T | ((prevState: T) => T)) => void, () => void];
