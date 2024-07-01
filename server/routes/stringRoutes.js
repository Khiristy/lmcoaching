const express = require('express');
const router = express.Router();
const { storeDynamicString, getDynamicString } = require('../controllers/dynamicStringController');

router.post('/store', storeDynamicString);
router.get('/get/:key', getDynamicString);

module.exports = router;
