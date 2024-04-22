 const nodemailer = require("nodemailer");
 
 const { EMAIL_ID, EMAIL_PASS }= require("./serverconfig");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth:{
        user: EMAIL_ID,
        pass: EMAIL_PASS
    }
});

module.exports = {
    transporter
}