const School = require('../server/models').School;

module.exports = {
  create(req, res, next) {
    return School.create({
      ...req.body
    })
      .then(school => res.status(201).send(school))
      .catch(error => res.status(400).send(error));
  },

  getSchools(req, res, next) {
    return School.findAll()
      .then(school => res.status(201).send(school))
      .catch(error => res.status(400).send(error));
  },
};
