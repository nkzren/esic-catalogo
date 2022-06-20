const urlRepository = require('../repository/url_repository');

const getByDomain = async function (domain) {
  return await urlRepository.getByDomain(domain);
}

const addCatalogEntry = async function (entry) {
  
  if (validateInsert(entry)) {
    await urlRepository.addCatalogEntry(entry);
  }
}

const updateCatalogEntry = await function (entry) {
  
  if (validateUpdate(entry)) {
    await urlRepository.updateCatalogEntry(entry);
  }
}

// TODO better validation?
const validateInsert = function (entry) {
  const { city, url, domain } = entry;
  return city && url && domain;
}

const validateUpdate = function (entry) {
  const { url, domain } = entry;
  return url && domain;
}

module.exports = {
  getByDomain,
  addCatalogEntry,
  updateCatalogEntry
}
