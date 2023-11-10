#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import { getPackageInfo } from './utils';

const [name, version, description] = getPackageInfo([
  'name',
  'version',
  'description',
]);

const program = new Command();

console.log(figlet.textSync(name));

program
  .version(version, '-v, --version')
  .description(description)
  .option('-o, --option [value]', 'an option.')
  .parse(process.argv);

const options = program.opts();

console.log(options);
