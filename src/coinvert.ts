import fetch from 'isomorphic-fetch';
import { round } from 'lodash';

export default (amount, base, target) => fetch(`https://min-api.cryptocompare.com/data/price?fsym=${base}&tsyms=${target}`)
  .then(res => res.json())
  .then(res => {
    if (!(target in res)) {
      throw new Error(`Unable to convert to target currency ${target}`);
    }

    const conversionRate = parseFloat(res[target]);

    return round(conversionRate * amount, 4);
  })
  .catch(console.error);
