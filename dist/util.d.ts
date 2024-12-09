declare const isNonNil: <TValue>(value: TValue | null | undefined) => value is TValue;
declare const isString: (value: unknown) => value is string;

export { isNonNil, isString };
