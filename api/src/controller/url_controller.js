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

const addUrl = async function(req, res, next) {
  const { city, domain, url } = req.body;
  const entry = { city, domain, url };
  try {
    const result = await urlService.addCatalogEntry(entry);
    if (!result) {
      console.log('URL inserted successfully');
      res.end(); 
    } else {
      res.status(400).send(result);
    }
  } catch (error) {
    console.error(error)
    next(error);
  }
}

const editUrl = async function(req, res, next) {
  const { domain, url } = req.body;
  const entry = { domain, url };
  try {
    await urlService.updateCatalogEntry(entry);
    console.log('URL updated successfully');
    res.end();
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
