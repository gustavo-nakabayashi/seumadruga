module.exports = (app) => {
  app
    .route('/users')
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);

  app
    .route('/accounts')
    .get(app.routes.accounts.findAll)
    .post(app.routes.accounts.create);

  app
    .route('/accounts/:id')
    .get(app.routes.accounts.findById)
    .put(app.routes.accounts.updateById)
    .delete(app.routes.accounts.deleteById);
};
