const express = require('express');
const router = express.Router();
// const tController = require('../Controller/reviewController');
const testController = require('../Controller/testController');


router.get('/get',testController.get )
router.post('/add', testController.add )



module.exports = router;
