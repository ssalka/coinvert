import program from 'commander';
import coinvert from './coinvert';
import { readFileSync } from 'fs';

const { version } = JSON.parse(readFileSync('package.json', 'utf8'));

const examples = `
  Examples:

    coinvert 1 ETH to BTC
    coinvert 1 BTC to USD
`;

export default program
  .version(version)
  .arguments('<amount> <base> <to> <target>')
  .usage('<amount> <base> <to> <target>')
  .on('--help', () => console.log(examples))
  .action((amount, base, to, target) => {
    coinvert(amount, base, target).then(value => {
      console.log(`${amount} ${base} = ${value} ${target}`);
    });
  })
  .parse(process.argv);
