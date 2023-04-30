var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arthurcardososjs@gmail.com',
    pass: 'jtxkyzhvqamvzcey'
  }
});

var mailOptions = {
  from: 'arthurcardososjs@gmail.com',
  to: 'arthurcardososjs@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'que pika!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});