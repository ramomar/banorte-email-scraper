const fs = require('fs');
const { scrapeLimitModificationEmail } = require('../src');

test('scrapeLimitModificationEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/limit-modification-email.html');

  const actual = scrapeLimitModificationEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'account_operation',
    emailType: 'limit_modification',
    note: 'Modificación de monto máximo acumulado por día. | Monto máximo acumulado por día: $1,000.00 MN',
    operationDate: '20/May/2019 18:42:40 horas'
  });
});
