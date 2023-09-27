const express = require('express');
const branchController = require('../Controller/branchController');

const router = express.Router();

router.route('/').get(branchController.getAllBranches);
module.exports = router;
