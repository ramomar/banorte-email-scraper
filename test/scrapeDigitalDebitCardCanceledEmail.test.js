const fs = require('fs');
const scrapeDigitalDebitCardCanceledEmail = require('../src/scrapeDigitalDebitCardCanceledEmail');

test('scrapeDigitalDebitCardCanceledEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/digital-debit-card-canceled-email.html');

  const actual = scrapeDigitalDebitCardCanceledEmail(htmlEmail);

  expect(actual).toStrictEqual({
    recordType: 'ACCOUNT_OPERATION',
    emailType: 'DIGITAL_DEBIT_CARD_CANCELED',
    note: 'Cancelación de Tarjeta Digital de Débito | CUENTA ENLACE PERSONAL ****0000',
    operationDate: '25/Ago/2019 13:07:36 horas'
  });
});
