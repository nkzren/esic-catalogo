const urlRepository = require('../repository/url_repository');

const getByDomain = async function (domain) {
  return await urlRepository.getByDomain(domain);
}

const addCatalogEntry = async function (entry) {
  
  const validationMsg = await validateInsert(entry);

  if (!validationMsg) {
    await urlRepository.addCatalogEntry(entry);
    return null;
  }

  return { error_msg: validationMsg };
}

const updateCatalogEntry = async function (entry) {
  const { domain, url } = entry;
  
  if (validateUpdate(entry)) {
    await urlRepository.updateEsicUrl(domain, url);
  }
}

const validateInsert = async function (entry) {
  const { city, url, domain } = entry;
  if (!(city && url && domain)) {
    return 'missing_input';
  }
  
  const result = await urlRepository.getByDomain(domain)
  if (result) {
    return 'domain_already_exists';
  }
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
