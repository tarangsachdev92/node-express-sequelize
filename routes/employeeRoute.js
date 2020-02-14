/* eslint-disable no-undef */
'use strict';

var router = express.Router();
const employeeController = require('../controllers/employee');
// const booksValidator = require('./booksValidator'); // validator
// const jwtMiddleware = require('../../../middleware/jwtMiddleware');

// add new book
router.post(
  '/', [],
  (req, res, next) => {
    employeeController.create(req, res);
  }
);

// add new book
router.put(
  '/:employeeId', [],
  (req, res, next) => {
    employeeController.update(req, res)
  }
);

// add new book
router.get(
  '/:employeeId', [],
  (req, res, next) => {
    employeeController.getEmployeeById(req, res)
  }
);

// add new book
router.get(
  '/company/:companyId', [],
  (req, res, next) => {
    employeeController.getEmployeeByCompanyId(req, res)
  }
);

router.get(
  '/', [],
  (req, res, next) => {
    employeeController.getEmployees(req, res);
  }
);

module.exports = router;
