const nodemailer = require('nodemailer')
require("dotenv").config()
const sender = process.env.EMAIL
const password = process.env.PASS

const sendEmail = async (token,userId,email) =>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: sender,
            pass: password
        }
   
    })

    var mailOptions = {
        from: sender,
        to: email,
        subject: "its personal email",
        Text: "hiii i am nodejs devloper",
        html: `<p>you requested for password reset</p>
    <h5>click on this <a href="http://localhost:3000/reset/${userId}/${token}">link</a> to reset password</h5>`
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error");
        }
        else {
            console.log("email sent successfully" + info.response);
        }
    })

}

module.exports = {
    sendEmail
}