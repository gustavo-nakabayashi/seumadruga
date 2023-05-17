module.exports = (app) => {
  const findAll = async (req, res, next) => {
    try {
      const users = await app.services.user.findAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };

  const create = async (req, res, next) => {
    try {
      const response = await app.services.user.create(req.body);
      res.status(201).json(response[0]);
    } catch (err) {
      next(err);
    }
  };

  return { findAll, create };
};
