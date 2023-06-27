// Imports
const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()
const clientRoutes =require('./routes/clientRoutes.js')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')

// Configurations
const PORT = process.env.PORT || 8000 
connectDB()
const app = express()
const salt = bcrypt.genSaltSync(10)

// Middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser)

// Routes
app.use('/clients', clientRoutes)

app.get('/', (req, res) => {
    res.json("API is working!")
})

app.listen(8000, () => {
    console.log(`Server running`)
})