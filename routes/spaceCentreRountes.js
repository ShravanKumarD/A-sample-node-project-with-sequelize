const express= require('express');
const { round } = require('lodash');
const spaceCentreNameController = require('../controllers/spaceCentres');
const router= express.Router();

router.post('/nodesql/api/v1/spacecs',spaceCentreNameController.spaceCentrenames);

module.exports = router;