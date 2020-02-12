/* eslint-disable no-undef */
'use strict';

var router = express.Router();
const schoolController = require('../controllers/school');
// const booksValidator = require('./booksValidator'); // validator
// const jwtMiddleware = require('../../../middleware/jwtMiddleware');

// add new book
router.post(
  '/', [],
  (req, res, next) => {
    schoolController.create(req, res);
  }
);

router.get(
  '/',
  [
  ],
  (req, res, next) => {
    schoolController.getSchools(req, res);
  }
);

module.exports = router;
