const mongoose = require('mongoose')

const LoanSchema = new mongoose.Schema ({
    client: {type:mongoose.Schema.Types.ObjectId, ref: "Client"},
    loanDate: Date,
    repaymentDate: Date, // Auto fill on form for salary date
    loanAmount: Number,
    repaymentAmount: Number,
    settled: Boolean,
    notes: [String],

}, {timestamps:true})

const LoanModel = mongoose.model("Loan", LoanSchema)

module.exports = LoanModel