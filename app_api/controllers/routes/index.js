const express = require('express');
const router = express.Router();

const tripsController = require('../trips');


router 
    .route('/trips')
    .get(tripsController.tripsList)

    module.exports = router;