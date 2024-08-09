const userDb = require('../database/userQueries');

const userService = {

    getData: (req, res) => {
        userDb.getUsers(req, res);
    }
    
};

module.exports = userService;

