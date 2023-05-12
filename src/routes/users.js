module.exports = (app) => {
  const findAll = (req, res) => {
    const users = [{ name: 'Gustavo Barros', email: 'gustavo@email.com' }];
    res.status(200).json(users);
  };

  const create = async (req, res) => {
    const response = await app.db('users').insert(req.body, '*');
    res.status(201).json(response[0]);
  };

  return { findAll, create };
};
