const User = require('../models/user')
const Company = require('../models/company')

const newUserCompany = (req, res) => {
    const user = new User()
    const company = new Company()
    res.status(201).json({
        newUser: user,
        newComany: company
    })
}

module.exports = {
    newUserCompany
}