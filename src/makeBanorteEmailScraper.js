const cheerio = require('cheerio');

function makeBanorteEmailScraper(scraper) {
  return rawHtml => {
    const $ = cheerio.load(rawHtml);

    const fields = $('td')
      .map((_, elem) => $(elem).text().trim())
      .get();

    return scraper(fields);
  };
}

module.exports = makeBanorteEmailScraper;
