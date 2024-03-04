require('dotenv').config();
const express = require("express")
const databaseConnect = require('./config/dbconfig');
const app = express()
const PORT = 5001
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))
databaseConnect();