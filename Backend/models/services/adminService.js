const adminDb = require('../database/adminQueries');

const adminService = {

    getData: (req,res) => {
        adminDb.getUsers(req,res);
    },
    postData: (req, res) => {
        adminDb.emailExist(req, res);
    },
    putData: (req, res) => {
        adminDb.updateUser(req, res);
    },
    deleteData: (req, res) => {
        adminDb.deleteUser(req, res);
    }

};

module.exports = adminService;