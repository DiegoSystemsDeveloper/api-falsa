const app = require('express')
const { newUserCompany } = require('../controllers/user.company.controller')

const route = app.Router()

route.get('/', newUserCompany)

module.exports = route