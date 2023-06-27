const Client = require('../models/Client.js')
const jwt = require('jsonwebtoken')

// Function get all clients
// Route    GET /clients
// Access   Public
const getClients = async (req, res) => {
    const users = await Client.find()
    res.status(200).json(users)
}

module.exports = {
    getClients
}