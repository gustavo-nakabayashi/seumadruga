module.exports = (app) => {
  const findAll = () => app.db('users').select('*');

  const create = (body) => {
    if (!body.name) return { error: 'Name is a required attribute' };
    return app.db('users').insert(body, '*');
  };

  return { findAll, create };
};
