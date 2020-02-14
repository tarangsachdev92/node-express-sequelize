/* eslint-disable no-undef */
'use strict';

var router = express.Router();
const organisationController = require('../controllers/organisation');
// add new book
router.post(
  '/', [],
  organisationController.add
);
router.get('/', organisationController.list);
router.get('/:id', organisationController.getById);
router.put('/:id', organisationController.update);
router.delete('/:id', organisationController.delete);

module.exports = router;
