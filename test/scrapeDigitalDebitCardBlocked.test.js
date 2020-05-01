const fs = require('fs');
const scrapeDigitalDebitCardBlockedEmail = require('../src/scrapeDigitalDebitCardBlockedEmail');

test('scrapeDigitalDebitCardBlockedEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/digital-debit-card-blocked-email.html');

  const actual = scrapeDigitalDebitCardBlockedEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'ACCOUNT_OPERATION',
    emailType: 'DIGITAL_DEBIT_CARD_BLOCKED',
    note: 'Bloqueo de Tarjeta Digital de Débito | CUENTA ENLACE PERSONAL ****0000',
    operationDate: '22/Ago/2019 20:28:59 horas'
  });
});
