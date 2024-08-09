const userService = require('../models/services/userService');

const userController ={
    getDetail : (req,res)=>{
        userService.getData(req,res);
    }
};

module.exports = userController;