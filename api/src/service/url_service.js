const csvReader = require('../repository/csv_reader');

const getByDomain = function (domain) {
  return csvReader.getByDomain(domain)
}

module.exports = {
  getByDomain
}