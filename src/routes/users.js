module.exports = (app) => {
  const findAll = async (req, res) => {
    const users = await app.services.user.findAll();
    res.status(200).json(users);
  };

  const create = async (req, res) => {
    const response = await app.services.user.create(req.body);
    if (response.error) res.status(400).json(response);
    res.status(201).json(response[0]);
  };

  return { findAll, create };
};
