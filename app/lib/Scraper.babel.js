import request from 'request';
import cheerio from 'cheerio';
import mongodb from 'mongodb';
import bunyan from 'bunyan';

const client = mongodb.MongoClient;
const log = bunyan.createLogger({name: "gophrazy"});

const connection = 'mongodb://localhost:27017/webgames';
const db = client.connect(connection, (err, db) {
  if (err !== null) {
    log.fatal("Failed to connect to database.");
  }
});
const collection = db.collection('phrases')
// TODO: $('table:nth-of-type(4) > tbody > tr > td > font').text()

const Scraper = {
  isPhrase: (value) => {
    return value.length > 1;
  },
  elScrape: (url, tag) => {
    request(url, (error, response, html) {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let phraseArray = [];
        $('table:nth-of-type(4) > tbody > tr > td').each(() => {
          $(this).find('font').each(() => {
            phraseArray = $(this).text().split(' ');
            const phrases = phraseArray.filter(Scraper.isPhrase);
            phrases.each(() => {
              collection.insert($(this), 'sports');
            })
          })
        });
      }
    })
  },
};
fd
