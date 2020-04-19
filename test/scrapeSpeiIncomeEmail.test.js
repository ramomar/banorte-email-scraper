const fs = require('fs');
const { scrapeSpeiIncomeEmail } = require('../src');

test('scrapeSpeiIncomeEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/spei-income-email.html');

  const actual = scrapeSpeiIncomeEmail(htmlEmail);

  expect(actual).toStrictEqual({
    type: 'income',
    kind: 'spei',
    note: 'Se realizo un ABONO SPEI de $ 1,000.00 MN el 28/MAY/2019 a las 13:41:34',
    operationDate: '28/MAY/2019 13:41:34',
    amount: '1000.00'
  });
});
