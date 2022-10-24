const Company = require('../models/company')

const newCompany = (req, res) => {
    const company = new Company()
    res.status(201).json({ newComany: company })
}

module.exports = {
    newCompany
}