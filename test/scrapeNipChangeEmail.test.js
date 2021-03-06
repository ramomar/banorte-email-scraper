const fs = require('fs');
const scrapeNipChangeEmail = require('../src/scrapeNipChangeEmail');

test('scrapeNipChangeEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/nip-change-email.html');

  const actual = scrapeNipChangeEmail(htmlEmail);

  expect(actual).toStrictEqual({
    recordType: 'ACCOUNT_OPERATION',
    emailType: 'NIP_CHANGE',
    note: 'CAMBIO DE NIP',
    operationDate: '14/Nov 20:41:13 hrs.',
    channel: {
      type: 'CAJERO AUTOMATICO'
    }
  });
});
