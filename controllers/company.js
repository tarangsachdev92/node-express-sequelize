const Company = require('../server/models').Company;

module.exports = {
  create(req, res, next) {
    // console.log(req.body)
    return Company.create({
      name: req.body.name
    })
      .then(company => res.status(201).send(company))
      .catch(error => res.status(400).send(error));
  },

  getCompanies(req, res, next) {
    return Company.findAll()
      .then(company => res.status(201).send(company))
      .catch(error => res.status(400).send(error));
  },
};
