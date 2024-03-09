const express = require('express');
const bodyParser = require('body-parser');
const { cronRouter } = require('./app/routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', cronRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
