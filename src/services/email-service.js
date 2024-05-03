const { transporter } = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");


const repo= new TicketRepository(); 

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

const fetchPendingEmails = async(timestamp) => {  // this fxn is going to fecth all the emails that are pending before this timestamp
     try {
        const response= await repo.get({status: "PENDING"});  // this fxn gives all thr
        return response;
     }catch (error) {
        console.log(error);
     }
}

const createNotification = async (data)=>{ // this is fxn for creating a ticket
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
} 

const updateTicket = async (ticketId, data)=> {
    try {
       const response = await repo.update(ticketId, data);
       return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports= {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}