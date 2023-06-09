const express = require('express')
const router = require('./routes/routes.js')
const cors = require('cors')
const DBConnection = require('./databse/db.js')
const dotenv = require('dotenv')
dotenv.config();

const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8000



DBConnection();
app.listen(PORT, ()=> {
    console.log(`Listening at port ${PORT}`)
})