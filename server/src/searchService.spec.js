const { searchForCollection } = require("./searchService");
const bikiniData = require('../data/bikini.json');

test('Requesting bikinis returns bikini data', () => {
    expect(searchForCollection('bikini')).toBe(bikiniData);
});

// TODO: Add a test for your new functionality
