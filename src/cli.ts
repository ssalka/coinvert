import program from 'commander';
import coinvert from './coinvert';

export default program
  .arguments('<amount> <base> <to> <target>')
  .action((amount, base, to, target) => {
    coinvert(amount, base, target).then(value => {
      console.log(`${amount} ${base} = ${value} ${target}`);
    });
  })
  .parse(process.argv);
