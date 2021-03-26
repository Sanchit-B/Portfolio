const mongoose = require('mongoose');

const EnquiryForm = mongoose.Schema({
    firstName: String,
    message: String,
    emailId: String,
    mobileNo: String
});

module.exports = mongoose.model('EnquiryForm', EnquiryForm);