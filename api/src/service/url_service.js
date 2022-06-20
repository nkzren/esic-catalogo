const urlRepository = require('../repository/url_repository');

const getByDomain = async function (domain) {
  return await urlRepository.getByDomain(domain)
}

const addCatalogEntry = function (entry) {
  
  if (isEntryValid(entry, true)) {
    urlRepository.addCatalogEntry(entry)
  }
}

const updateCatalogEntry = function (entry) {
  
  if (isEntryValid(entry, false)) {
    urlRepository.updateCatalogEntry(entry)
  }
}

// TODO: rever função, deu erro quando testei
const isEntryValid = function (entry, isAdd) {
  
  if (!(entry.city || entry.domain || entry.url || entry.hasEsic)) {
    return false;
  }
  
  if (isAdd && getByDomain(entry.domain) || getByDomain(entry.domain)) {
    return false;
  }
  
  return true;
}

module.exports = {
  getByDomain,
  addCatalogEntry,
  updateCatalogEntry
}