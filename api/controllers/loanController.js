const Loan = require('../models/Loan.js')

// Function get all loans
// Route    GET /loans
// Access   Public
const getLoans = async (req, res) => {
    const loans = await Loan.find()
    res.status(200).json(loans)
}

module.exports = {
    getLoans
}