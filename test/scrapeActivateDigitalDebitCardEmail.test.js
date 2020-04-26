const fs = require('fs');
const { scrapeActivateDigitalDebitCardEmail } = require('../src');

test('scrapeActivateDigitalDebitCardEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/activate-digital-debit-card-email.html');

  const actual = scrapeActivateDigitalDebitCardEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'ACCOUNT_OPERATION',
    emailType: 'ACTIVATE_DIGITAL_DEBIT_CARD',
    note: 'Activación de Tarjeta Digital asociada a tu Cuenta de Débito | CUENTA ENLACE PERSONAL ****0000',
    operationDate: '25/Ago/2019 13:07:48 horas'
  });
});
