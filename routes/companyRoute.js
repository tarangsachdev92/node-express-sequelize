/* eslint-disable no-undef */
'use strict';

var router = express.Router();
const companyController = require('../controllers/company');
// const booksValidator = require('./booksValidator'); // validator
// const jwtMiddleware = require('../../../middleware/jwtMiddleware');

// add new book
router.post(
  '/', [],
  companyController.create
);

// add new book
router.put(
  '/:companyId', [],
  companyController.update
);

router.get(
  '/', [],
  companyController.getCompanies
);

router.get(
  '/:companyId', [],
  companyController.getCompanyById
);

router.delete(
  '/:companyId', [],
  companyController.remove
);

// // add new book
// router.post(
//   '/add_with_branches', [],
//   companyController.addWithBranches
// );


module.exports = router;
