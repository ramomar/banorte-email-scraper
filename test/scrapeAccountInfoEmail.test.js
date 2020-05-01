const fs = require('fs');
const scrapeAccountInfoEmail = require('../src/scrapeAccountInfoEmail');

test('scrapeAccountInfoEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/account-info-email.html');

  const actual = scrapeAccountInfoEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'ACCOUNT_OPERATION',
    emailType: 'ACCOUNT_INFO',
    note: 'Informacion de tu Cuenta',
    operationDate: '17/12/2019 13:58'
  });
});
