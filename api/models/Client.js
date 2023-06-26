const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    name: {
        type: String, 
        req: true
    },
    idNumber: {
        type: String, 
        req: true
    },
    bank: {
        type: String, 
        req: true
    },
    accNumber: {
        type: String, 
        req: true
    },
    salaryDate: {
        type: Date, 
        req: true
    },
    phone: {
        type: String, 
        req: true
    },
    badLender: Boolean,
    Office: {
        type: String, 
        req: true
    },
    Address: {
        type: String, 
        req: true
    },
    Industry: String,
    notes: [String],
})

const ClientModel = mongoose.model("Client", ClientSchema)

module.exports = ClientModel