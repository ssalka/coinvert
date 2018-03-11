import { execSync } from 'child_process';

describe('coinvert cli', () => {
  it('converts USD to Tether', () => {
    spyOn(console, 'log');

    const buffer = execSync('coinvert 1 USD to USDT');

    const expectedConversion = '1 USD = 1 USDT';

    expect(buffer.toString('utf8').trim()).toBe(expectedConversion);
  });
});
