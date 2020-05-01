const fs = require('fs');
const scrapeDigitalDebitCardCancelledEmail = require('../src/scrapeDigitalDebitCardCancelledEmail');

test('scrapeDigitalDebitCardCancelledEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/digital-debit-card-cancelled-email.html');

  const actual = scrapeDigitalDebitCardCancelledEmail(htmlEmail);

  expect(actual).toStrictEqual({
    recordType: 'ACCOUNT_OPERATION',
    emailType: 'DIGITAL_DEBIT_CARD_CANCELLED',
    note: 'Cancelación de Tarjeta Digital de Débito | CUENTA ENLACE PERSONAL ****0000',
    operationDate: '25/Ago/2019 13:07:36 horas'
  });
});
