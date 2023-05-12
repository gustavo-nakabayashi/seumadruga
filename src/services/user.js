module.exports = (app) => {
  const findAll = () => app.db('users').select('*');

  const create = body => app.db('users').insert(body, '*');

  return { findAll, create };
};
