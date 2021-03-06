const fs = require('fs');
const scrapeLimitModificationEmail = require('../src/scrapeLimitModificationEmail');

test('scrapeLimitModificationEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/limit-modification-email.html');

  const actual = scrapeLimitModificationEmail(htmlEmail);

  expect(actual).toStrictEqual({
    recordType: 'ACCOUNT_OPERATION',
    emailType: 'LIMIT_MODIFICATION',
    note: 'Modificación de monto máximo acumulado por día. | Monto máximo acumulado por día: $1,000.00 MN',
    operationDate: '20/May/2019 18:42:40 horas'
  });
});
