import { exec } from 'child_process';
import { round } from 'lodash';
import path from 'path';

const coinvert = path.resolve('./dist/coinvert');

interface ICurrencyAmount {
  code: string;
  value: number;
}

function verifyConversion(from: ICurrencyAmount, to: ICurrencyAmount, conversion: string): boolean {
  return new RegExp(`${from.value} ${from.code} = ${round(to.value)}\d{0,2} ${to.code}`).test(conversion);
}

describe('coinvert cli', () => {
  it('converts USD to Tether', done => {
    const from = {
      code: 'USD',
      value: 1
    };

    const to = {
      code: 'USDT',
      value: 1
    };

    exec(`${coinvert} ${from.value} ${from.code} to ${to.code}`, (error, stdout, stderr) => {
      if (error || stderr) return done.fail();

      expect(verifyConversion(from, to, stdout.trim())).toBe(true);
      done();
    });
  });
});
