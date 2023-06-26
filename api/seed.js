const express = require('express')
const connectDB = require('./config/db.js')
require('dotenv').config()
const Client = require('./models/Client.js')
const clients = require('./data/clients.js')
const colors = require('colors')

connectDB()

const importData = async () => {
    try {

        await Client.deleteMany()
        await Client.insertMany(clients)
        console.log("Data Imported!".green.inverse)
        process.exit()

    } catch (error) {

        console.log(`${error}`.red.inverse)
        process.exit(1)

    }
}

const destroyData = async () => {
    try {
        await Client.deleteMany()
        console.log(`Data Deleted!`.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}