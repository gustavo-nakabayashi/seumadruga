const { AppError } = require('../error-handling');

module.exports = (app) => {
  const findAll = async (filter = {}) => {
    const accounts = await app.db('accounts').where(filter).select('*');
    if (accounts.length === 0) throw new AppError('Account not found', 404);
    return accounts;
  };

  const update = (id, account) => app.db('accounts').where({ id }).update(account, '*');
  const destroy = (id) => app.db('accounts').where({ id }).delete();
  const create = (account) => {
    if (!account.name) throw new AppError('Name is a required attribute', 400);
    return app.db('accounts').insert(account, '*');
  };

  return {
    findAll, create, update, destroy,
  };
};
