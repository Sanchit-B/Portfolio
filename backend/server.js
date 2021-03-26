const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyParser = require('body-parser');

const formRoutes = require('./routes/formRoutes.js');

const app = express();


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://sanchit_bansal_007:SanchitB007@nodeapi.khp6t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Connected!!');
}).catch((err) => {
    console.log('Error occured while trying to connect to DB!!');
    console.log(err);
});

app.use('/api/enquiryform', formRoutes);

app.listen(3000, () => {
    console.log('server is running');
});

