const express = require('express');
const app = express();
const port = 3000;

require('./routes')(app);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
})
