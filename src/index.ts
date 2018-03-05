import fetch from 'isomorphic-fetch';

const round = (val, precision = 4) => Math.round(10 ** precision * val) / (10 ** precision);

const coinvert = (amount, base, target) => fetch(`https://min-api.cryptocompare.com/data/price?fsym=${base}&tsyms=${target}`)
  .then(res => res.json())
  .then(res => {
    if (!(target in res)) {
      throw new Error(`Unable to convert to target currency ${target}`);
    }

    const conversionRate = parseFloat(res[target]);
    const value = round(conversionRate * amount);

    return (
      console.log(`${amount} ${base} = ${value} ${target}`),
      value
    );
  })
  .catch(console.error);


coinvert(1, 'BTC', 'USD');
