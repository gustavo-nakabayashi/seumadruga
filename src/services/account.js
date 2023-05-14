module.exports = (app) => {
  const findAll = async (filter = {}) => {
    const accounts = await app.db('accounts').where(filter).select('*');
    if (accounts.length === 0) return { error: 'Account not found' };
    return accounts;
  };

  const update = (id, account) => app.db('accounts').where({ id }).update(account, '*');
  const destroy = id => app.db('accounts').where({ id }).delete();
  const create = async account => app.db('accounts').insert(account, '*');

  return {
    findAll, create, update, destroy,
  };
};
