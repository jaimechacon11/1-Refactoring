class Reader {
    static readJsonFile(path) {
        const fs = require("fs");
        const rawdata = fs.readFileSync(path);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}

module.exports = Reader;
