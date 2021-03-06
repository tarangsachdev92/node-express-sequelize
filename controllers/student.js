const Company = require('../server/models').Company;

module.exports = {
  create(req, res, next) {
    return Company.create({
      name: req.body.name
    })
      .then(company => res.status(201).send(company))
      .catch(error => res.status(400).send(error));
  }
};
