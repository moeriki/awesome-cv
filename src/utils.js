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

export const newToOld = ({ dateFrom: date1 }, { dateFrom: date2 }) => {
  const [year1, month1] = date1.split('/');
  const [year2, month2] = date2.split('/');
  return year2 - year1 === 0 ? month2 - month1 : year2 - year1;
};

export const transformEntries = (func) => (source) =>
  fromEntries(func(Object.entries(source)));
