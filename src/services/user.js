module.exports = (app) => {
  const findAll = (filter = {}) => app.db('users').where(filter).select('*');

  const create = async (user) => {
    if (!user.name) return { error: 'Name is a required attribute' };
    if (!user.email) return { error: 'Email is a required attribute' };
    if (!user.password) return { error: 'Password is a required attribute' };

    const userDb = await findAll({ email: user.email });
    if (userDb.length > 0) return { error: 'User with this email already exists' };

    return app.db('users').insert(user, '*');
  };

  return { findAll, create };
};
