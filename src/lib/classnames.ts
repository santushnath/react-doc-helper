export const classNames = (
  ...args: (string | undefined | null | false | number)[]
): string => {
  return args.filter((arg) => typeof arg === 'string').join(' ');
};