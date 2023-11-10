const packageJson = require('../../package.json');

const getPackageInfo = (key?: string | string[]) => {
  if (!key) return packageJson;
  if (typeof key === 'string') return packageJson[key];
  return key.map((k) => packageJson[k]);
};

export { getPackageInfo };
