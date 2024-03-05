require('dotenv').config();
const express = require("express")
const databaseConnect = require('./config/dbconfig');
const app = express()
const PORT = 5001
const cors = require('cors')
const userRoute = require('./routes/userRoute');
app.use(cors())
app.use(express.json())
app.use('/users', userRoute)
app.get('/', (req, res) => {
    res.send('Api SuccessFull created!');
});
databaseConnect()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{

app.listen(PORT,()=>{
    console.log('Server Started on the port'+ PORT);
});
})
.catch((err)=>{
    console.log(err);
})