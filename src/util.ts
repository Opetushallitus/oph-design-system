export const isNonNil = <TValue>(
  value: TValue | null | undefined,
): value is TValue => value != null;

export const isString = (value: unknown): value is string =>
  typeof value === 'string';
