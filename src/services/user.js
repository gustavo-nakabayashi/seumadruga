const { AppError } = require('../error-handling');

module.exports = (app) => {
  const findAll = (filter = {}) => app.db('users').where(filter).select('*');

  const create = async (user) => {
    if (!user.name) throw new AppError('Name is a required attribute', 400);
    if (!user.email) throw new AppError('Email is a required attribute', 400);
    if (!user.password) throw new AppError('Password is a required attribute', 400);

    const userDb = await findAll({ email: user.email });
    if (userDb.length > 0) throw new AppError('User with this email already exists', 400);

    return app.db('users').insert(user, '*');
  };

  return { findAll, create };
};
