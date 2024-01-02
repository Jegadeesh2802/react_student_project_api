const express = require('express');
const bodyParser = require('body-parser');
require('./config/config');
const cors = require('cors');
const path = require("path");
require('dotenv').config();
const crypto = require('crypto');


const app = express();
app.use(cors());
const authRoute = require('./routes/authRoute');
const studentRoute = require('./routes/studentRoute');
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(
  morgan("combined", {
    skip: function (req, res) {
      return req.get("User-Agent") === "ELB-HealthChecker/2.0";
    },
  })
);


// const secretKey = crypto.randomBytes(64).toString('hex');





app.use('/auth', authRoute);
app.use('/student', studentRoute);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
