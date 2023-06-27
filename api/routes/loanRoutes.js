const express = require('express') 
const router = express.Router()
const { getLoans } = require('../controllers/loanController.js')
const Loan = require('../models/Loan.js')

router.get('/', getLoans)

module.exports = router