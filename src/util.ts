export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const isNonNil = <TValue>(
  value: TValue | null | undefined,
): value is TValue => value != null;

export const isString = (value: unknown): value is string =>
  typeof value === 'string';

export function toCompactArray<T>(value: T) {
  if (isNonNil(value)) {
    return Array.isArray(value) ? value : [value];
  } else {
    return [];
  }
}
