const passport = require('passport');
require( "../helpers/passport.js");
const express= require('express');
const middleware = require('../middlewares/joi');
const router=express.Router();
const adminController = require('../controllers/adminController');

router.get('/', passport.authenticate("jwt", { session: false }), adminController.getDetail);
router.put('/:id', passport.authenticate("jwt", { session: false }), adminController.putDetail);
router.delete('/:id',passport.authenticate("jwt", { session: false }), adminController.deleteDetail)
router.post('/', passport.authenticate("jwt", { session: false }), middleware.addWare,adminController.postDetail);

module.exports = router;