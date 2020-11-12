const express = require('express');
const user = require('./api/user')
const auth = require('./api/auth')


const router = express.Router();

router.use('/user', user)
router.use('/auth', auth)


module.exports = router