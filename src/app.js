const express = require('express');

const app = express();
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile');

app.db = knex(knexfile.test);

consign({ cwd: 'src' })
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

app.use((err, req, res, next) => {
  const { message, status } = err;
  res.status(status || 500).json({ error: message });
  next(err);
});

module.exports = app;
