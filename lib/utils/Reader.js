class Reader {
  static readJsonFile(path) {
    const fs = require("fs");
    const rawdata = fs.readFileSync("explorers.json");
    const explorers = JSON.parse(rawdata);
    return explorers;
  }
}

module.exports = Reader;
