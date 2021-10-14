require('dotenv').config();
const parseKeys = require('../src/parseKeys');
const encryptLine = require('../src/encryptLine');

describe('The parseKey function', () => {
  test('returns key words and phrases', () => {
    let keywords = "hello Sophie 'happy day'"
    expect(parseKeys(keywords)).toEqual(["hello", "Sophie", "happy day"]);
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
