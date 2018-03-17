import { exec } from 'child_process';
import path from 'path';

const coinvert = path.resolve('./dist/coinvert');

describe('coinvert cli', () => {
  it('converts USD to Tether', done => {
    const from = {
      currency: 'USD',
      amount: 1
    };

    const to = {
      currency: 'USDT',
      amount: 1
    };

    const expectedConversion = `${from.amount} ${from.currency} = ${to.amount} ${to.currency}`;

    exec(`${coinvert} ${from.amount} ${from.currency} to ${to.currency}`, (error, stdout, stderr) => {
      if (error || stderr) return done.fail();

      expect(stdout.trim()).toBe(expectedConversion);
      done();
    });
  });
});
