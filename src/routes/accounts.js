module.exports = (app) => {
  const findAll = async (req, res) => {
    const accounts = await app.services.account.findAll();
    res.status(200).json(accounts);
  };

  const findById = async (req, res) => {
    const accounts = await app.services.account.findAll({ id: req.params.id });
    res.status(200).json(accounts[0]);
  };

  const updateById = async (req, res) => {
    const { id } = req.params;
    const updatedAccount = await app.services.account.update(id, req.body);
    res.status(200).json(updatedAccount);
  };


  const create = async (req, res) => {
    const response = await app.services.account.create(req.body);
    if (response.error) res.status(400).json(response);
    res.status(201).json(response[0]);
  };


  return {
    findAll, findById, create, updateById,
  };
};
