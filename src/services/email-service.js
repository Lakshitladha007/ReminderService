const { transporter } = require("../config/emailConfig")

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await transporter.sendMail({
            fron: mailFrom,
            to: mailTo, 
            subject: mailSubject,
            text: mailBody
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports= {
    sendBasicEmail
}