const { urlencoded } = require('body-parser');
const cors = require('cors');
const { helloWorld } = require('./controller/home');
const routeUrl = require('./controller/url_controller');

module.exports = (app) => {
  app.use(cors())
  app.use(urlencoded({ extended: true }));

  app.get('/', helloWorld);

  app.get('/url', routeUrl.getUrl);
  app.post('/url', routeUrl.addUrl);
  app.put('/url', routeUrl.editUrl);

  app.use(async (err, req, res, next) => {
    console.error('Uncaught error', err);
  })
}