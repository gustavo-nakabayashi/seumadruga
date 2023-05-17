module.exports = (app) => {
  const findAll = async (req, res, next) => {
    try {
      const accounts = await app.services.account.findAll();
      res.status(200).json(accounts);
    } catch (err) {
      next(err);
    }
  };

  const findById = async (req, res, next) => {
    try {
      const accounts = await app.services.account.findAll({ id: req.params.id });
      res.status(200).json(accounts[0]);
    } catch (err) {
      next(err);
    }
  };

  const updateById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedAccount = await app.services.account.update(id, req.body);
      res.status(200).json(updatedAccount);
    } catch (err) {
      next(err);
    }
  };

  const deleteById = async (req, res, next) => {
    try {
      const { id } = req.params;
      await app.services.account.destroy(id);
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  };

  const create = async (req, res, next) => {
    try {
      const response = await app.services.account.create(req.body);
      res.status(201).json(response[0]);
    } catch (err) {
      next(err);
    }
  };

  return {
    findAll, findById, create, updateById, deleteById,
  };
};
