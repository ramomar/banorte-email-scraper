const fs = require('fs');
const scrapeDigitalDebitCardActivatedEmail = require('../src/scrapeDigitalDebitCardActivatedEmail');

test('scrapeDigitalDebitCardActivatedEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/digital-debit-card-activated-email.html');

  const actual = scrapeDigitalDebitCardActivatedEmail(htmlEmail);

  expect(actual).toStrictEqual({
    recordType: 'ACCOUNT_OPERATION',
    emailType: 'DIGITAL_DEBIT_CARD_ACTIVATED',
    note: 'Activación de Tarjeta Digital asociada a tu Cuenta de Débito | CUENTA ENLACE PERSONAL ****0000',
    operationDate: '25/Ago/2019 13:07:48 horas'
  });
});
