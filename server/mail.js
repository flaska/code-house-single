const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'jacob.code.house@gmail.com',
        pass: 'Green18!'
    }
});


exports.forwardMessage = function(message, cb){
    const mailOptions = {
        from: '"Code House Website" <jacob.code.house@gmail.com>', // sender address
        to: 'jakub.flaska@gmail.com', // list of receivers
        subject: 'Code House | Client Request', // Subject line
        text: 'Hello world', // plain text body
        html: "<b>Name</b> " + message.name + "<br><b>Email</b> " + message.email + "<br><b>Phone</b> " + message.phone + "<br><b>Message</b>" + message.message
    };
    transporter.sendMail(mailOptions, cb);
};
