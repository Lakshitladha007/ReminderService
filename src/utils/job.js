const cron= require('node-cron');
const emailService = require("../services/email-service");
const { transporter } = require("../config/emailConfig");

/**
 * let's say there was a notification that was expected to be sent as 10:00 a.m.
 * We want to send Email after every 5 minutes
 * We will check are their any pending emails which was expected to be sent by now and is pending
 */

const setUpJobs = () => {
    cron.schedule('*/2 * * * *', async() => {
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            transporter.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            }, async (err, data) =>{
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    await emailService.updateTicket(email.id, { status: "SUCCESS"});
                }
            })
        })
        console.log(response);
    });
}

module.exports = setUpJobs;