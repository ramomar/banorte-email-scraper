const cheerio = require('cheerio');

function makeBanorteSpeiEmailScraper(scraper) {
  return rawHtml => {
    const $ = cheerio.load(rawHtml);

    const fields = $('p')
      .map((_, elem) => $(elem).text().trim())
      .get();

    return scraper(fields);
  };
}

module.exports = makeBanorteSpeiEmailScraper;
