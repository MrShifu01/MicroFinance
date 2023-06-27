const express = require('express') 
const router = express.Router()
const {getClients, editClient} = require('../controllers/clientController.js')

router.get('/', getClients)
router.put('/', (req, res) => {
    const { 
        id, 
        name, 
        idNumber, 
        address, 
        notes, 
        settled, 
        bank, 
        accNumber, 
        salaryDate, 
        phone, 
        badLender, 
        office,
        industry
    } = req.body

    const userInfo = {
        id, 
        name, 
        idNumber, 
        address, 
        notes, 
        settled, 
        bank, 
        accNumber, 
        salaryDate, 
        phone, 
        badLender, 
        office,
        industry
    }

    editClient(userInfo, req, res)
})

module.exports = router