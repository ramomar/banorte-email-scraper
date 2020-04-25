const fs = require('fs');
const { scrapeIdentificationEmail } = require('../src');

test('scrapeIdentificationEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/identification-email.html');

  const actual = scrapeIdentificationEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'account_operation',
    kind: 'identification',
    note: 'Identificacion',
    operationDate: '17/12/2019 13:58',
  });
});
