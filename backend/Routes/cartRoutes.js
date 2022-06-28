const express = require('express');
const router = express.Router();
const cartController = require('../Controller/cartController');

router.get('/get',cartController.get )
router.post('/add', cartController.add )
router.delete('/delete/:id', cartController.delete )
router.put('/update/:id', cartController.update )



module.exports = router;
