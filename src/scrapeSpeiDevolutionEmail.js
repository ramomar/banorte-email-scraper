const cheerio = require('cheerio');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');

function scrapeSpeiDevolutionEmail(fields) {
  const sanitizedNote = fields.slice(7, 10)
    .join(' ')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ');

  const operationData = sanitizedNote.split(' ');

  return {
    recordType: recordTypes.INCOME,
    emailType: emailTypes.SPEI_DEVOLUTION,
    note: sanitizedNote,
    operationDate: `${operationData[12]} ${operationData[15]}`,
    amount: parseFloat(operationData[9].replace(',', '')).toFixed(2)
  };
}

function makeBanorteSpeiEmailScraper(scraper) {
  return rawHtml => {
    const $ = cheerio.load(rawHtml);

    const fields = $('p')
      .map((_, elem) => $(elem).text().trim())
      .get();

    return scraper(fields);
  };
}

module.exports = makeBanorteSpeiEmailScraper(scrapeSpeiDevolutionEmail);
