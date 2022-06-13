const { urlencoded } = require('body-parser');
const { helloWorld } = require('./controller/home');
const routeUrl = require('./controller/url_controller');

module.exports = (app) => {
  app.use(urlencoded({ extended: true }));

  app.get('/', helloWorld);

  app.get('/url', routeUrl.getUrl);
  app.post('/url', routeUrl.addUrl);
  app.put('/url', routeUrl.editUrl);

  app.use(async (err, req, res, next) => {
    console.error('Uncaught error', err);
  })
}