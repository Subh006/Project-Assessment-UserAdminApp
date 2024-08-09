const authDb = require('../database/authQueries');

const authService = {

    checkData: (req, res) => {
        authDb.checkUser(req, res);
        
    },
    postData: (req, res) => {
        authDb.emailExist(req, res);
    }

};

module.exports = authService;