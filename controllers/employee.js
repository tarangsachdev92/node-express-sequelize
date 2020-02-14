const Employee = require('../server/models').Employee;
const Company = require('../server/models').Company;

module.exports = {
  create(req, res, next) {
    return Employee.create({ ...req.body })
      .then(employee => res.status(201).send(employee))
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    return Employee
      .findByPk(req.params.employeeId)
      .then(employee => {
        if (!employee) {
          return res.status(404).send({
            message: 'Employee Not Found',
          });
        }
        return employee
          .update({
            ...req.body
          })
          .then(() => res.status(200).send(employee))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  getEmployees(req, res, next) {
    return Employee.findAll({
      include: [{
        model: Company,
        as: 'company'
      }],
    })
      .then(employee => res.status(201).send(employee))
      .catch(error => res.status(400).send(error));
  },

  getEmployeeById(req, res, next) {
    return Employee.findByPk(req.params.employeeId, {
      include: [{
        model: Company,
        as: 'company'
      }]
    })
      .then(employee => res.status(201).send(employee))
      .catch(error => res.status(400).send(error));
  },

  getEmployeeByCompanyId(req, res, next) {
    return Employee.findAll({
      where: { companyId: req.params.companyId }, include: [{
        model: Company,
        as: 'company'
      }]
    })
      .then(employee => res.status(201).send(employee))
      .catch(error => res.status(400).send(error));
  },
};
