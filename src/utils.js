export const asArray = (source) =>
  Object.entries(source).reduce((acc, [_id, value]) => {
    acc.push(Object.assign({ _id }, value));
    return acc;
  }, []);

export const fromEntries = (entries) =>
  entries.reduce(
    (acc, [key, value]) => Object.assign(acc, { [key]: value }),
    {},
  );

export const mapValues = (mapper) => (source) =>
  fromEntries(
    Object.entries(source).map(([key, value]) => [key, mapper(value, key)], {}),
  );

export const matchesProperty = (name, value) => (obj) => obj[name] === value;

export const orderBy = (propertyName) => (obj1, obj2) =>
  obj1[propertyName] - obj2[propertyName];

export const transformEntries = (func) => (source) =>
  fromEntries(func(Object.entries(source)));
