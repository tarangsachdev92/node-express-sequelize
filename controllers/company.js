const Company = require('../server/models').Company;
const Employee = require('../server/models').Employee;

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
    return Company.findAll({
      include: [{
        model: Employee,
        as: 'employees'
      }],
    })
      .then(company => res.status(201).send(company))
      .catch(error => res.status(400).send(error));
  },

  getCompanyById(req, res, next) {
    return Company.findByPk(req.params.companyId, {
      include: [{
        model: Employee,
        as: 'employees'
      }]
    })
      .then(company => res.status(201).send(company))
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    return Company
      .findByPk(req.params.companyId)
      .then(company => {
        if (!company) {
          return res.status(404).send({
            message: 'Company Not Found',
          });
        }
        return company
          .update({
            name: req.body.name
          })
          .then(() => res.status(200).send(company))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  remove(req, res, next) {
    return Company
      .findByPk(req.params.companyId)
      .then(company => {
        if (!company) {
          return res.status(404).send({
            message: 'Company Not Found',
          });
        }
        return company
          .destroy()
          .then(() => res.status(200).send(company))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
