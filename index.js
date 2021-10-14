require('dotenv').config();
const parseKeys = require('./src/parseKeys');

const DOC = {
  folder: process.env.FILE_LOCATION,
  name: process.env.FILE_NAME,
  save_as: process.env.SAVE_LOCATION
}

const KEYS = parseKeys();
const regexp = new RegExp(KEYS.join("|"), "g");

const { pipeline } = require('stream');
const fs = require('fs');
const es = require('event-stream');

pipeline(
  fs.createReadStream(DOC.folder + DOC.name + ".txt"),
  es.split(),
  es.mapSync(line => line.replace(regexp, "XXXX")),
  es.join("\n"),
  fs.createWriteStream(DOC.save_as + DOC.name + "_censored.txt"),
  (err) => {
    if (err) {
      console.error('Pipeline failed', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
);