import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(
  readFileSync(join(__dirname, '../../package.json'), 'utf-8'),
);

const getPackageInfo = (key?: string | string[]) => {
  if (!key) return packageJson;
  if (typeof key === 'string') return packageJson[key];
  return key.map((k) => packageJson[k]);
};

export { getPackageInfo };
