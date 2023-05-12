const express = require('express');

// const knexlogger = require('knex-logger');

module.exports = (app) => {
  app.use(express.json());
  // app.use(knexlogger(app.db));
};
