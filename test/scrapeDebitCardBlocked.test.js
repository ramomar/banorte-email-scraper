const fs = require('fs');
const scrapeDebitCardBlockedEmail = require('../src/scrapeDebitCardBlockedEmail');

test('scrapeDebitCardBlockedEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/debit-card-blocked-email.html');

  const actual = scrapeDebitCardBlockedEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'ACCOUNT_OPERATION',
    emailType: 'DEBIT_CARD_BLOCKED',
    note: 'Bloqueo de Tarjeta de Débito | Cuenta Enlace Personal - ************0000',
    operationDate: '12/Nov/2019 08:56:50 horas'
  });
});
