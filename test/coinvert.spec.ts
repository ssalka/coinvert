import coinvert from 'coinvert';

describe('coinvert api', () => {
  it('converts USD to Tether', async () => {
    const from = {
      currency: 'USD',
      amount: 1
    };

    const to = {
      currency: 'USDT',
      amount: 1
    };

    const result = await coinvert(from.amount, from.currency, to.currency);

    expect(result).toBeCloseTo(to.amount, 1);
  });

  it('throws an error when given an unrecognized symbol', () => {
    const fakeSymbol = 'NOTACOIN';

    coinvert(1, 'BTC', fakeSymbol).catch(err => {
      expect(err).toBe(`Unable to convert to target currency ${fakeSymbol}`);
    });
  });
});
