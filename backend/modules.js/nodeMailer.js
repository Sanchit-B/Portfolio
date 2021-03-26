var nodemailer = require('nodemailer');

const sendEmail = async (mailOptions) => {

    let resp = '';

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
      }
    });
    
    await transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
          resp = 'Email sent: ' + info.response;
          console.log('Email sent: ' + info.response);
      }
    });

    return resp;
}

module.exports = sendEmail;