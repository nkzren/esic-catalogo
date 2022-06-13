const urlRepository = require('../repository/url_inmemory_repository');

const getByDomain = function (domain) {
  return urlRepository.getByDomain(domain)
}

module.exports = {
  getByDomain
}