const express = require('express');
const app = express();
const database = require('./repository/url_inmemory_repository');
const port = 3000;

require('./routes')(app);

app.listen(port, async () => {

  // Remover isso aqui se quiser usar um banco de dados real
  await database.init();

  console.log(`Example app listening on port ${port}`)
})
