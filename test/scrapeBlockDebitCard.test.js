const fs = require('fs');
const { scrapeBlockDebitCardEmail } = require('../src');

test('scrapeBlockDebitCardEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/block-debit-card-email.html');

  const actual = scrapeBlockDebitCardEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'ACCOUNT_OPERATION',
    emailType: 'BLOCK_DEBIT_CARD',
    note: 'Bloqueo de Tarjeta de Débito | Cuenta Enlace Personal - ************0000',
    operationDate: '12/Nov/2019 08:56:50 horas'
  });
});
