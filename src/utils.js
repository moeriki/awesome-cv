/* eslint import/prefer-default-export:off */

export function asArray(object) {
  return Object.keys(object).reduce((acc, propertyName) => {
    acc.push(Object.assign({ _id: propertyName }, object[propertyName]));
    return acc;
  }, []);
}
