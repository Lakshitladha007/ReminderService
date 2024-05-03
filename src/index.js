const express = require("express");
const bodyParser= require("body-parser");
const cron= require("node-cron");
const  TicketController = require("./controller/ticket-controller");

const { PORT } = require("./config/serverconfig");

// const { sendBasicEmail }= require("./services/email-service");
const jobs= require("./utils/job");

const setUpAndStartServer=()=>{
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, ()=>{
        console.log(`Server started at PORT: ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     "lakshitladha05@gmail.com",
        //     "lakshitladha05@gmail.com",
        //     "This is a testing email",
        //     "hey, how are you, I hope you like this support"
        // );
    
    });
}

setUpAndStartServer();

