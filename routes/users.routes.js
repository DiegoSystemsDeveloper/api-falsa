const app = require('express')
const { newUser } = require('../controllers/users.controller')
const route = app.Router()

// user path
route.get('/new', newUser)

module.exports = route