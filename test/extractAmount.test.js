const extractAmount = require('../src/extractAmount.js');

describe('extractAmount', () => {
  it('should be able to extract amounts like: $792.00 MN', () => {
    const actual = extractAmount('$792.00 MN');

    expect(actual).toEqual('792.00');
  });

  it('should be able to extract amounts like: $ 63.37 MN', () => {
    const actual = extractAmount('$ 63.37 MN');

    expect(actual).toEqual('63.37');
  });
});
