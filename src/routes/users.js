module.exports = (app) => {
  const findAll = async (req, res) => {
    const users = await app.db('users').select('*');
    res.status(200).json(users);
  };

  const create = async (req, res) => {
    const response = await app.db('users').insert(req.body, '*');
    res.status(201).json(response[0]);
  };

  return { findAll, create };
};
