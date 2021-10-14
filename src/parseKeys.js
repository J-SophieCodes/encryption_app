const parseKeys = (keywords) => {
  return keywords
    .match(/"([^"]+)"|'([^']+)'|[^,\s]+/g)  // will work with "Sophie's choice" => ["Sophie's", "choice"]
    .map(key => key.replace(/^["']|["']$/g, ""));  // removing beginning and end quotes
}

module.exports = parseKeys;
