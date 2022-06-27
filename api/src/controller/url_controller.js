const urlService = require('../service/url_service');

const getUrl = async function(req, res, next) {
  const domain = req.query.domain;
  try {
    const data = await urlService.getByDomain(domain);
    if (!data) {
      res.status(404);
    }
    res.send(data);
  } catch (error) {
    console.error(error)
    res.status(500);
    next(error);
  }
}

const addUrl = async function(req, res, next) {
  const { city, domain, url } = req.body;
  console.log({body: req.body})
  const entry = { city, domain, url };
  console.log({entry})
  try {
    const result = await urlService.addCatalogEntry(entry);
    if (!result.success) {
      res.status(400);
    }
    res.send(result); 
  } catch (error) {
    console.error(error)
    next(error);
  }
}

const editUrl = async function(req, res, next) {
  const { domain, url } = req.body;
  const entry = { domain, url };
  try {
    const result = await urlService.updateCatalogEntry(entry);
    if (!result.success) {
      res.status(400);
    }
    res.send(result)
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
