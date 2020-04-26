const fs = require('fs');
const { scrapeCancelDigitalDebitCardEmail } = require('../src');

test('scrapeCancelDigitalDebitCardEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/cancel-digital-debit-card-email.html');

  const actual = scrapeCancelDigitalDebitCardEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'ACCOUNT_OPERATION',
    emailType: 'CANCEL_DIGITAL_DEBIT_CARD',
    note: 'Cancelación de Tarjeta Digital de Débito | CUENTA ENLACE PERSONAL ****0000',
    operationDate: '25/Ago/2019 13:07:36 horas'
  });
});
