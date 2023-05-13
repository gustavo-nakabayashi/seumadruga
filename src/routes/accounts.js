module.exports = (app) => {
  const findAll = async (req, res) => {
    const accounts = await app.services.account.findAll();
    res.status(200).json(accounts);
  };

  const create = async (req, res) => {
    const response = await app.services.account.create(req.body);
    if (response.error) res.status(400).json(response);
    res.status(201).json(response[0]);
  };

  return { findAll, create };
};
