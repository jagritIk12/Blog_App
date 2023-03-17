const userSchema = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//const mail = require("../service/emailService")
const mail = require("../service/emailService")

//user signup Api
const signUp = async (req, resp) => {
    const userData = new userSchema(req.body);
    const isEmailExists = await userSchema.findOne({ userEmail: req.body.userEmail })
    if (isEmailExists) {
        return resp.status(409).json({
            success: "conflict",
            message: "user has already exist",
        })
    }
    else {
        try {
            const salt = await bcrypt.genSalt(10);
            userData.password = await bcrypt.hash(req.body.password, salt);
            const filepath = `/uploads/${req.file.filename}`;
            userData.profilepic = filepath;
            let data = await userData.save()
            resp.status(201).json({
                success: "success",
                message: "user  has created successfully",
                 //data: data

            })
        }
        catch (err) {
            resp.status(401).json({
                success: "failure",
                message: "Error occur " + err.message
            });
        }
    }

};

//user login API

const userLogin = async (req, res) => {
    try {
        const { userEmail, password } = req.body
        if (userEmail && password) {
            const user = await userSchema.findOne({ userEmail: userEmail })
            if (user != null) {
                const isMatch = await bcrypt.compare(password, user.password)
                if (user.userEmail == userEmail && isMatch) {
                    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "5d" })
                    res.status(200).json({
                        success: "success",
                        message: "user has Logined Successfully",
                        token: token
                    })
                    console.log(12)
                }
                else {
                    res.status(400).send({
                        success: "Failed",
                        message: "Email or password is not valid"
                    })
                }
            }
            else {
                res.status(400).send({
                    success: "Failed",
                    message: "you are not a valid registered user"
                })
            }
        }
        else {
            res.status(401).send({
                success: "Failed",
                message: "not a registered user"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            success: "failure",
            message: "error occured" + error.message
        })
    }
};

//user email send API

const passwordResetemail = async (req, res) => {
    const userEmail = req.body.userEmail
    const isEmailExists = await userSchema.findOne({ userEmail: userEmail })
    if (isEmailExists) {
        const secret = isEmailExists._id + process.env.JWT_SECRET_KEY
        const token = await jwt.sign({ userID: isEmailExists._id }, secret, { expiresIn: "20m" })
        mail.sendEmail(userEmail, token, isEmailExists._id)
        res.status(200).json({
            success: "success",
            message: "email has sent successfuly to the user",
            token: token,
            userid: isEmailExists._id
        })
    }
    else {
        res.json({
            success: "failure",
            message: "email does not exist"
        })
    }
}

//forgate password API

const forgatePassword = async (req, res) => {
    const { newpassword, confirmpassword } = req.body
    const { id, token } = req.params
    try {
        const checkuser = await userSchema.findById(id)
        if (checkuser != null) {
            const secretkey = checkuser._id + process.env.JWT_SECRET_KEY
            jwt.verify(token, secretkey)

            if (newpassword == confirmpassword) {
                const salt = await bcrypt.genSalt(10);
                const password = await bcrypt.hash(confirmpassword, salt);
                await userSchema.findByIdAndUpdate(checkuser._id, {
                    $set: { password: password },
                })
                res.status(200).json({
                    success: "success",
                    message: "password  has sucessfully updated"
                })
            }
            else {

                res.status(403).json({
                    success: "failure",
                    message: "passwords does not  match"
                })
            }
        }
        else {
            res.status(403).json({
                success: "failure",
                message: "user does not exist"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: "failure",
            message: err.message
        })

    }
}

module.exports = {
    signUp,
    userLogin,
    passwordResetemail,
    forgatePassword
}
