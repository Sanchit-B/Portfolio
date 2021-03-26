const express = require('express');
const router = express.Router();
const EnquiryForm = require('../models/enquiryForm.js');
const sendEmail = require('../modules.js/nodeMailer.js');

debugger;
router.post('', async (req, res) => {
    console.log(req.body);
    if (req.body) {
        const form = new EnquiryForm(req.body);
        
        const response = await form.save();
    
        if (response) {

            let bodyHtml;
            
            bodyHtml = `Hello Dear, Someone is trying to contact you. kindly find the details of the email sender below.`;
            bodyHtml += `<br/><br/> 
                <!DOCTYPE html>
                <html>
                <head>
                <style>
                table {
                width: 500px;
                font-family: arial;
                }
                th {
                background-color: #EAEAD9;
                border: 1px solid black;
                }
                td {
                padding: 5px;
                border: 1px solid black;
                }
                </style>
                </head>
                <body>
                <table>
                <tr>
                    <th colspan="2">Sender Details</th>
                </tr>
                <tr>
                    <td>Name </td>
                    <td>${form.firstName}</td>
                </tr>
                <tr>
                    <td>Email ID</td>
                    <td>${form.emailId}</td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td>${form.mobileNo}</td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td>${form.message}</td>
                </tr>
                </table>
                    <br/><br/><br/>Thanks
                </body>
                </html>`;

            const mailOptions = {
                from: 'sanchitb007@gmail.com',
                to: 'sanchitb007@gmail.com',
                subject: 'Sending Email using Node.js',
                html: bodyHtml
            };

            // let mailStatus = await sendEmail(mailOptions);

            // if (mailStatus) {
            //     res.status(200).json({
            //         message: 'Form Saved Successfully && Mail is sent to the user!'
            //     })    
            // }

            res.status(200).json({
                message: 'Form Saved Successfully But mail could not be sent to user!'
            })
        } else {
            res.status(500).json({
                message: 'Form could not be saved!'
            })
        }
    }
});

router.get('', async (req, res) => {
    const response = await EnquiryForm.find();
    if (response) {
        res.status(200).json({
            enquiries: response
        })
    } else {
        res.status(500).json({
            message: 'No data found'
        })
    }
})

module.exports = router;