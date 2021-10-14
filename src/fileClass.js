require('dotenv').config();

class File {
  constructor() {
    this.name = process.env.FILE_NAME;
    this.path = this.setCurrentPath();
    this.saveToPath = this.setSaveToPath();
  }

  setCurrentPath() {
    return process.env.FILE_LOCATION + this.name + ".txt";
  }

  setSaveToPath() {
    return process.env.SAVE_LOCATION + this.name + "_censored.txt";
  }
}

module.exports = File;