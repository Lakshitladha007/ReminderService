const express = require("express");
const bodyParser= require("body-parser");

const { PORT } = require("./config/serverconfig");

const { sendBasicEmail }= require("./services/email-service");

const setUpAndStartServer=()=>{
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, ()=>{
        console.log(`Server started at PORT: ${PORT}`);

        sendBasicEmail(
            "lakshitladha05@gmail.com",
            "lakshitladha05@gmail.com",
            "This is a testing email",
            "hey, how are you, I hope you like this support"
        );
    });
}

setUpAndStartServer();

