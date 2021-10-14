const parseKeys = require('./parseKeys');

const KEYS = parseKeys();
const REGEXP = new RegExp(KEYS.join("|"), "g");

const encryptLine = line => line.replace(REGEXP, "XXXX");

module.exports = encryptLine;