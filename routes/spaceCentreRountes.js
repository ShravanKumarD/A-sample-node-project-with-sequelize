const express= require('express');
const { round } = require('lodash');
const spaceCentreNameController = require('../controllers/spaceCentres');
const lvcModel = require('../controllers/launchVehicleCount');


const router= express.Router();

router.post('/nodesql/api/v1/spacecs',spaceCentreNameController.spaceCentrenames);
router.post('/nodesql/api/v1/lvcount',lvcModel.LVCount);

module.exports = router;