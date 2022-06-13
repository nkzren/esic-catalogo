const fs = require('fs');
const { parse } = require('csv');
const { stringify } = require('csv-stringify/sync');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const csvColumns = ['id', 'city', 'domain', 'url', 'hasEsic'];

const data = [];

const init = function() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(`${appDir}/../data/data.csv`)
      .pipe(parse({ delimiter: ';', columns: true }))
      .on('data', (row) => {
        data.push({
          ...row,
        }) 
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
  const { city, domain, url, hasEsic } = entry;
  const dataToWrite = {
    city,
    domain,
    url,
    hasEsic
  }
  const csvString = stringify([
    dataToWrite
  ], {
    columns: csvColumns.map(mapToColumnKeys),
    delimiter: ';',
  });
  fs.appendFileSync(`${appDir}/../data/data.csv`, csvString + '\n');
}

const updateCatalogEntry = function (entry) {
  
  // deletar e adicionar? 
}


const mapToColumnKeys = (columnName) => {
  return {
    key: columnName,
  }
}

module.exports = {
  getByDomain,
  addCatalogEntry,
  updateCatalogEntry,
  init
}