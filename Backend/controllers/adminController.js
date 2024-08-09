const adminService = require('../models/services/adminService');

const adminController ={
    getDetail : (req,res)=>{
        adminService.getData(req,res);
    },
    postDetail : (req,res)=>{
        adminService.postData(req,res);
    },
    putDetail : (req,res)=>{
        adminService.putData(req,res);
    },
    deleteDetail : (req,res)=>{
        adminService.deleteData(req,res);
    },
};

module.exports = adminController;