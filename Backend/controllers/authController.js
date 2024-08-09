const authService = require('../models/services/authService');

const authController = {
    checkDetail: (req, res) => {
        authService.checkData(req, res);
        
    },
    postDetail: (req, res) => {
        authService.postData(req, res);
    }
};

module.exports = authController;