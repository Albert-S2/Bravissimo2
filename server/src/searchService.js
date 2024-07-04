const bikiniData = require("../data/bikini.json");
const lingerieData = require("../data/lingerie.json");
const sportData = require("../data/sport.json");

function searchForCollection(collectionName) {
  switch (collectionName) {
    case "bikini":
      return bikiniData;
    case "lingerie":
      return lingerieData;
    case "sport":
      return sportData;
  }
}

module.exports = { searchForCollection };
