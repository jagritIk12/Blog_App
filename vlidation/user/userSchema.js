const joi = require("joi")
const { joiPasswordExtendCore } = require("joi-password")
const joiPassword = joi.extend(joiPasswordExtendCore)

const schema = {
    registerUser: joi.object({
        userName: joi.string().max(20).messages({
            "string.min": "Username should min {#limit} characters",
            "string.min": "Username should min {#limit} characters"
        }).required(),
        userEmail: joi.string().email().message("innvalid email address").required(),
        password: joiPassword.string().minOfSpecialCharacters(1).minOfLowercase(1).minOfUppercase(1).minOfNumeric(2).noWhiteSpaces().messages({
            'password.minOfUppercase': '{#label} should contain at least {#main} uppercase character',
            'password.minOfSpecialCharacters': '{#label} should contain at least {#main} special character',
            'password.minOfLowercase': '{#label} should contain at least {#main} lowercase character',
            'password.minOfNumeric': '{#label} should contain at least {#main} numeric character',
            'password.noWhiteSpaces': '{#label} should not contain white spaces',
        }).required(),
        city: joi.string().required().messages({
            "string.empty": "you must provide your city name, {userName}"
        }),
        mobileNo: joi.number().integer().min(1000000000).max(9999999999).message("invalid mobile number").required(),
        state: joi.string().required().messages({
            "string.empty": "you must provide your city name, {userName}"
        }),
        userAddress: joi.string().required(),
    }).unknown(true),
    
    loginUser: joi.object({
        userEmail: joi.string().email().required(),
        password: joi.string().required(),
    }).unknown(true),
}
module.exports = schema;
