module.exports = (app) => {
  const findAll = (filter = {}) => app.db('accounts').where(filter).select('*');

  const update = (id, account) => app.db('accounts').where({ id }).update(account, '*');
  const create = async account => app.db('accounts').insert(account, '*');

  return { findAll, create, update };
};
