/* eslint-disable no-undef */
'use strict';

var router = express.Router();
const branchController = require('../controllers/branch');

router.get('/', branchController.list);
router.get('/:id', branchController.getById);
router.post('/', branchController.add);
router.put('/:id', branchController.update);
router.delete('/:id', branchController.delete);


module.exports = router;
