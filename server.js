
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();


const port = 3000;

app.use(express.json()); //tells express when req come with json data, parse data and put in req.body

app.use(cors({
    origin: ['http://localhost:5500' ]
}))

// Define a route for GET requests to the root URL
app.get('/', (req,res) => {

    res.json({message: 'Hello from backend'})

})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'radhika.nalegave.2007@gmail.com',
        clientId: process.env.oauth_client_id,
        clientSecret: process.env.oauth_client_secret,
        refreshToken: process.env.refresh_token,
        
    }
});

app.post('/', async (req,res) => {

    const usermail = req.body

    console.log('new msg', usermail)
    res.json({message: 'Thank you for message'})

    if(!usermail){
        return res.status(400).json({error: 'Entering email is required'});
    }

    const mailContent = {
        from: 'radhika.nalegave.2007@gmail.com',
        to: usermail.email,
        subject: 'Course details',
        text: 'This is all'
    };

    transporter.sendMail(mailContent, function(error, info){

        if(error){
            console.log(error);
        }else{
            console.log('Email sent: ' +info.response);
    
        }

    });

})


app.listen(port, () => {

    console.log('Server is started');

});
