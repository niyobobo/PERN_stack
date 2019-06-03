const express = require('express');
const controller = require('../../controller/item');

const router = express.Router();

router.get('/', controller.getAllItems);
router.post('/', controller.createItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;