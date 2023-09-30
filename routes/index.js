const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const mssvController = require('../controllers/mssvController');
const messageController = require('../controllers/messageController');

router.get('/', indexController.index);
router.route('/MSSV/:id')
      .get(mssvController.mssv)
      .post(mssvController.mssv);
router.get('/message/:id', messageController.message);

module.exports = router;
