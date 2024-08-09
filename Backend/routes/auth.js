const express = require('express');
const middleware = require('../middlewares/joi');
const authController = require('../controllers/authController');
const router = express.Router();


router.post('/login', middleware.loginWare, authController.checkDetail);
router.post('/registration', middleware.registerWare, authController.postDetail);


module.exports = router;