const joi = require('joi');


const loginSchema = joi.object({
    email: joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

    password: joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$')).required()
});

const registerSchema = joi.object({
    name: joi.string().required(),

    email: joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required (),

    password: joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$')).required(),

    contact: joi.number().required(),

    address: joi.string().required(),
    
    role: joi.string().required().valid('user')
});

const addSchema = joi.object({
    name: joi.string().required(),

    email: joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required (),

    password: joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$')).required(),

    contact: joi.number().required(),

    address: joi.string().required(),
    
    role: joi.string().required()
});



module.exports = {
    loginSchema,
    registerSchema,
    addSchema
}