/* eslint import/prefer-default-export:off */

export const asArray = (object) =>
  Object.keys(object).reduce((acc, propertyName) => {
    acc.push(Object.assign({ _id: propertyName }, object[propertyName]));
    return acc;
  }, []);

export const matchesProperty = (name, value) => (obj) => obj[name] === value;

export const orderBy = (propertyName) => (obj1, obj2) =>
  obj1[propertyName] - obj2[propertyName];
