const fs = require('fs');
 
const createDotenv = () => {
  fs.writeFileSync('.env', fs.readFileSync('src/sample_dotenv.txt'));
};

module.exports = createDotenv;