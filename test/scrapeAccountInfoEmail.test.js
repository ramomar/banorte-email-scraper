const fs = require('fs');
const { scrapeAccountInfoEmail } = require('../src');

test('scrapeAccountInfoEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/account-info-email.html');

  const actual = scrapeAccountInfoEmail(htmlEmail);

  expect(actual).toStrictEqual({
    type: 'account_operation',
    kind: 'account_info',
    note: 'Informacion de tu Cuenta',
    operationDate: '17/12/2019 13:58'
  });
});
