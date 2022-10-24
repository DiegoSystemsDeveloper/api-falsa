const User = require('../models/user')

const newUser = (req, res) => {
    const user = new User()
    res.status(201).json({ newUser: user })
}

module.exports = {
    newUser
}