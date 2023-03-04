export type AnyVoidFn = (...args: any) => void;
export type AsyncAbleVoidFn<T extends AnyVoidFn = AnyVoidFn> =
  | T
  | ((...p: Parameters<T>) => Promise<void>);
