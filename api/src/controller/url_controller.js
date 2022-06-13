const urlService = require('../service/url_service');

const getUrl = function(req, res, next) {
  const domain = req.query.domain;
  try {
    const data = urlService.getByDomain(domain);
    res.send(data);
  } catch (error) {
    console.error(error)
    next(error);
  }
}

const addUrl = function(req, res, next) {

}

const editUrl = function(req, res, next) {

}

module.exports = {
  getUrl,
  addUrl,
  editUrl,
}
