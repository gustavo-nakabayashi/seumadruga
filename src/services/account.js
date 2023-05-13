module.exports = (app) => {
  const findAll = (filter = {}) => app.db('accounts').where(filter).select('*');

  const create = async account => app.db('accounts').insert(account, '*');

  return { findAll, create };
};
