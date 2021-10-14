require('dotenv').config();
const parseKeys = require('./parseKeys');

const KEYS = parseKeys();
const CASE = process.env.CASE_SENSITIVE === 'true' ?  "" : "i";
const REGEXP = new RegExp(KEYS.join("|"), `g${CASE}`);

const encryptLine = line => line.replace(REGEXP, "XXXX");

module.exports = encryptLine;