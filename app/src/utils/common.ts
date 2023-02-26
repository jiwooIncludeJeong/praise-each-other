export const withConstants = <
  O,
  R extends Record<string, number | Record<string, number>>,
>(
  component: O,
  constants: R,
) => {
  const properties = Object.entries(constants).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: { value, writable: false, enumerable: false, configurable: false },
    };
  }, {});

  return Object.defineProperties(component, properties) as O & R;
};
