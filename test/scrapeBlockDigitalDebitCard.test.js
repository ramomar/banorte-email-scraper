const fs = require('fs');
const { scrapeBlockDigitalDebitCardEmail } = require('../src');

test('scrapeBlockDigitalDebitCardEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/block-digital-debit-card-email.html');

  const actual = scrapeBlockDigitalDebitCardEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'ACCOUNT_OPERATION',
    emailType: 'BLOCK_DIGITAL_DEBIT_CARD',
    note: 'Bloqueo de Tarjeta Digital de Débito | CUENTA ENLACE PERSONAL ****0000',
    operationDate: '22/Ago/2019 20:28:59 horas'
  });
});
