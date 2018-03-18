import coinvert from 'coinvert';
import { ICurrencyAmount } from 'interfaces';

describe('coinvert api', () => {
  it('converts USD to Tether', async () => {
    const from: ICurrencyAmount = {
      code: 'USD',
      value: 1
    };

    const to: ICurrencyAmount = {
      code: 'USDT',
      value: 1
    };

    const result = await coinvert(from.value, from.code, to.code);

    expect(result).toBeCloseTo(to.value, 1);
  });

  it('throws an error when given an unrecognized symbol', () => {
    const fakeCurrencyCode = 'NOTACOIN';

    coinvert(1, 'BTC', fakeCurrencyCode).catch(err => {
      expect(err).toBe(`Unable to convert to target currency ${fakeCurrencyCode}`);
    });
  });
});
