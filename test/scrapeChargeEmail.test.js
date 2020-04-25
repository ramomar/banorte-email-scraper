const fs = require('fs');
const { scrapeChargeEmail } = require('../src');

test('scrapeChargeEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/charge-email.html');

  const actual = scrapeChargeEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'EXPENSE',
    emailType: 'CHARGE',
    note: 'COMPRA EN UBER TRIP HELP.UBER.CO',
    amount: '63.37',
    operationDate: '10/Feb 08:14:03 hrs.',
    applicationDate: '10/Feb/2020',
    channel: {
      emailType: 'TPV(COMPRA COMERCIO)'
    }
  });
});
