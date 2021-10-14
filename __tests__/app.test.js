require('dotenv').config();
require('../src/createDotenv')();
const parseKeys = require('../src/parseKeys');
const encryptLine = require('../src/encryptLine');

describe('The parseKey function', () => {
  test('returns key words and phrases', () => {
    const keywords = process.env.KEYWORDS;
    expect(parseKeys(keywords)).toEqual(["typesetting", "Lorem Ipsum", "of the", "from"]);
  });
});

describe('The encryptLine function', () => {
  test('returns line with keywords encrypted', () => {
    const KEYS = parseKeys(process.env.KEYWORDS);
    const sentence = `Hello, there. There is a ${KEYS[0]} in the ${KEYS[1]}`;
    const result = "Hello, there. There is a XXXX in the XXXX";
    expect(encryptLine(sentence)).toEqual(result);
  });
});
