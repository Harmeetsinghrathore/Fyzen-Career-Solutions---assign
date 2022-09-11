const dotenv = require('dotenv');
dotenv.config('./backend/.env');

const express = require('express');
const app = express();

const CORS = require('cors');
app.use(CORS({origin : "*"}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

// ---------- Database configuration --------

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {useNewUrlParser : true});


const employeeRoute = require('./Routes/EmployeeRoute');



app.use('/', employeeRoute);




app.listen(process.env.PORT, function(){
    console.log("Server listening on port 8000");
})