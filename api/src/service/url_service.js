const urlRepository = require('../repository/url_repository');

const getByDomain = async function (domain) {
  return await urlRepository.getByDomain(domain)
}

module.exports = {
  getByDomain
}