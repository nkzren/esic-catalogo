const urlRepository = require('../repository/url_repository');

const getByDomain = async function (domain) {
  return await urlRepository.getByDomain(domain);
}

const addCatalogEntry = async function (entry) {
  
  const validationMsg = await validateInsert(entry);

  if (!validationMsg) {
    await urlRepository.addCatalogEntry(entry);
    return { success: true, msg: 'URL inserted successfully' };
  }

  return { success: false, msg: validationMsg };
}

const updateCatalogEntry = async function (entry) {
  const { domain, url } = entry;
  
  const validationMsg = await validateUpdate(entry);

  if (!validationMsg) {
    await urlRepository.updateEsicUrl(domain, url);
    return { success: true, msg: 'URL updated successfully' };
  }

  return { success: false, msg: validationMsg };
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

const validateUpdate = async function (entry) {
  const { url, domain } = entry;
  if(!(url && domain)) {
    return 'missing_input';
  }

  const result = await urlRepository.getByDomain(domain);
  if (!result) {
    return 'domain_not_registered';
  }
}

module.exports = {
  getByDomain,
  addCatalogEntry,
  updateCatalogEntry
}
