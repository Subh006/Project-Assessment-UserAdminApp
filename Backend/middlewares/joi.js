const schemas = require('../helpers/joi')
const joiMiddleware = {
    loginWare: (req, res, next) => {
        let data = req.body;
        const result = schemas.loginSchema.validate(data)

        if (result.error) {
            console.log(result.error);
            res.status(402).send(result.error);
        }
        else {
            next();
        }
    },
    registerWare: (req, res, next) => {
        let data = req.body;
        const result = schemas.registerSchema.validate(data)

        if (result.error) {
            console.log(result.error);
            res.status(402).send(result.error);
        }
        else {
            next();
        }
    },
    addWare: (req, res, next) => {
        let data = req.body;
        const result = schemas.addSchema.validate(data)

        if (result.error) {
            console.log(result.error);
            res.status(402).send(result.error);
        }
        else {
            next();
        }
    }
}

module.exports = joiMiddleware;