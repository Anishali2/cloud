const express = require('express');
const router = express.Router();
const cartController = require('../Controller/cartController');

router.get('/get',cartController.get )
router.post('/add', cartController.add )



module.exports = router;
