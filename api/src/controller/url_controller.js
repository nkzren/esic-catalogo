const urlService = require('../service/url_service');

const getUrl = async function(req, res, next) {
  const domain = req.query.domain;
  try {
    const data = await urlService.getByDomain(domain);
    res.send(data);
  } catch (error) {
    console.error(error)
    next(error);
  }
}

const addUrl = function(req, res, next) {
  const { city, domain, url, hasEsic } = req.body;
  const entry = { city, domain, url, hasEsic };
  try {
    urlService.addCatalogEntry(entry);
    res.end();
  } catch (error) {
    console.error(error)
    next(error);
  }
}

const editUrl = function(req, res, next) {
  const entry = req.query.entry;
  try {
    const data = urlService.updateCatalogEntry(entry);
    res.send(data);
  } catch (error) {
    console.error(error)
    next(error);
  }
}

module.exports = {
  getUrl,
  addUrl,
  editUrl,
}
