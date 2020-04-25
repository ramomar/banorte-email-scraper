const cheerio = require('cheerio');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');

function scrapeSpeiIncomeEmail(fields) {
  const sanitizedNote = fields[6]
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ');

  const operationData = sanitizedNote.split(' ');

  return {
    movementType: movementTypes.INCOME,
    emailType: emailTypes.SPEI_INCOME,
    note: sanitizedNote,
    operationDate: `${operationData[10]} ${operationData[13]}`,
    amount: parseFloat(operationData[7].replace(',', '')).toFixed(2)
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

module.exports = makeBanorteSpeiEmailScraper(scrapeSpeiIncomeEmail);
