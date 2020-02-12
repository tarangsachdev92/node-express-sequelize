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

// // delete book
// router.delete(
//   '/',
//   [
//     booksValidator.booksRouteValidate('delete'),
//     booksValidator.checkValidationResult,
//     jwtMiddleware.validateJWT
//   ],
//   (req, res, next) => {
//     booksController.deleteBook(req, res);
//   }
// );

// // book lists
// router.post(
//   '/list',
//   [
//     booksValidator.booksRouteValidate('bookList'),
//     booksValidator.checkValidationResult,
//     jwtMiddleware.validateJWT
//   ],
//   (req, res, next) => {
//     booksController.bookList(req, res);
//   }
// );

// // book details
// router.get(
//   '/:book_id',
//   [
//     booksValidator.booksRouteValidate('bookDetail'),
//     booksValidator.checkValidationResult,
//     jwtMiddleware.validateJWT
//   ],
//   (req, res, next) => {
//     booksController.bookDetail(req, res);
//   }
// );

router.get(
  '/',
  [
  ],
  companyController.getCompanies
);

module.exports = router;
