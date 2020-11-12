const express = require('express');
const user = require('./api/user')
const auoth = require('./api/auoth')


const router = express.Router();

router.use('/user', user)
router.use('/auoth', auoth)


module.exports = router