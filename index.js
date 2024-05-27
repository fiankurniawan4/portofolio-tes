const express = require('express')
const path = require('path')
const nodemailer = require("nodemailer");


const port = 3000
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
        user: 'yankurniawan60@gmail.com',
        pass: 'syuf ypld xqpk kfmh',
    },
    secure: true,
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

app.post('/test', (req, res) => {
    const {from, subject, text} = req.body;
    const mailData = {
        from: from,
        to: "yankurniawan60@gmail.com",
        subject: `${subject} dari ${from}`,
        text: text,
    };

    transporter.sendMail(mailData, (error, info) => {
        if(error) {
            return console.log(error);
        }
        res.redirect('/');
    });
})

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})