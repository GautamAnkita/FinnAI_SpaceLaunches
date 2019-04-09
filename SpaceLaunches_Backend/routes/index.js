'use strict';

import express from 'express';
const router = express.Router();

router.use('/', require('../controllers/spacelaunches-controller'));

module.exports = router;
