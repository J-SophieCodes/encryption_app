const { pipeline } = require('stream');
const fs = require('fs');
const es = require('event-stream');
const encryptLine = require('./src/encryptLine');
const errorHandler = require('./src/errorHandler');
const File = require('./src/fileClass');

const file = new File();

pipeline(
  fs.createReadStream(file.path),           // read from file
  es.split(),                               // split stream to break on newlines
  es.mapSync(encryptLine),                  // encrypt keywords in each line
  es.join("\n"),                            // join lines with newline separator
  fs.createWriteStream(file.saveToPath),    // write into new file
  errorHandler
);