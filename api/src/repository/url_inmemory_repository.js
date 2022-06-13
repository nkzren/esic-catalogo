const fs = require('fs');
const csv = require('csv-parser');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const data = [];

const init = function() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(`${appDir}/../data/data.csv`)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        data.push(row) 
      })
      .on('end', () => {
        resolve();
      })
      .on('error', reject)
  });
}

const getByDomain = function(domain) {
  return data.filter(item => {
    return item && item.domain === domain
  })[0];
}

const addCatalogEntry = function(entry) {

}

module.exports = {
  getByDomain,
  addCatalogEntry,
  init
}