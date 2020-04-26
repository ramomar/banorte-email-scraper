const fs = require('fs');
const emailTypes = require('../src/emailTypes');
const { scrapeBanorteEmail } = require('../src');

describe('scrapeBanorteEmail', () => {
  it(`should be able to identify and scrape data from a ${emailTypes.ACCOUNT_INFO} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/account-info-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.ACCOUNT_INFO
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.CASH_WITHDRAWAL} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/cash-withdrawal-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.CASH_WITHDRAWAL
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.CHARGE} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/charge-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.CHARGE
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.DEPOSIT} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/deposit-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.DEPOSIT
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.FAST_TRANSFER} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/fast-transfer-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.FAST_TRANSFER
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.IDENTIFICATION} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/identification-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.IDENTIFICATION
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.LIMIT_MODIFICATION} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/limit-modification-email.html');

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.LIMIT_MODIFICATION
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.NIP_CHANGE} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/nip-change-email.html');

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.NIP_CHANGE
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.PHONE_RECHARGE} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/phone-recharge-email.html');

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.PHONE_RECHARGE
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.SPEI_INCOME} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/spei-income-email.html');

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.SPEI_INCOME
    });
  });

  it('should throw if there are multiple matches', () => {
    const makeActual = () => scrapeBanorteEmail('Multiple matches: CASH_WITHDRAWAL, CHARGE, SPEI_INCOME.');

    expect(makeActual).toThrow('Scraper not implemented.');
  });

  it('should throw when a scraper has not been implemented', () => {
    const makeActual = () => scrapeBanorteEmail('<a></a>');

    expect(makeActual).toThrow('Scraper not implemented.');
  });
});
