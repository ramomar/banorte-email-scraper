const fs = require('fs');
const scrapeIdentificationByPhoneEmail = require('../src/scrapeIdentificationByPhoneEmail');

test('scrapeIdentificationByPhoneEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/identification-by-phone-email.html');

  const actual = scrapeIdentificationByPhoneEmail(htmlEmail);

  expect(actual).toStrictEqual({
    recordType: 'ACCOUNT_OPERATION',
    emailType: 'IDENTIFICATION_BY_PHONE',
    note: 'Identificacion',
    operationDate: '17/12/2019 13:58'
  });
});
