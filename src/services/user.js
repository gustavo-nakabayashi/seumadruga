module.exports = (app) => {
  const findAll = () => app.db('users').select('*');

  const create = (body) => {
    if (!body.name) return { error: 'Name is a required attribute' };
    if (!body.email) return { error: 'Email is a required attribute' };
    if (!body.password) return { error: 'Password is a required attribute' };
    return app.db('users').insert(body, '*');
  };

  return { findAll, create };
};
