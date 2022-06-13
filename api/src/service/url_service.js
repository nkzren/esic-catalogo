const urlRepository = require('../repository/url_repository');

const getByDomain = async function (domain) {
  return await urlRepository.getByDomain(domain)
}

const addCatalogEntry = function (entry) {
  
  if (isEntryValid(entry, true)) 
    return urlRepository.addCatalogEntry(entry)
  
  return;
}

const updateCatalogEntry = function (entry) {
  
  if (isEntryValid(entry, false)) 
    return urlRepository.addCatalogEntry(entry)
  
  return;
}

const isEntryValid = function (entry, isAdd) {
  
  if (entry.city == null ||
    entry.domain == null ||
    entry.url == null ||
    entry.hasEsic == null) 
    return false;

  if (isAdd) {
    if (getByDomain(entry.domain) != null)
      return false;

  } else { // isUpdate

    if (getByDomain(entry.domain) == null)
      return false; 
  }
    
  return true;
}

module.exports = {
  getByDomain,
  addCatalogEntry,
  updateCatalogEntry
}