// Imports
const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()
// const clientRoutes =require('./routes/clientRoutes.js')

// Configurations
// const PORT = process.env.PORT || 8000 
connectDB()
const app = express()

// Middleware
// app.use('/api/clients', clientRoutes)
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json("API is working!")
})

app.listen(8000, () => {
    console.log(`Server running`)
})