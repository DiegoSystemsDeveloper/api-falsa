const app = require('express')
const { newCompany } = require('../controllers/companies.controller')
const route = app.Router()

route.get('/', newCompany)

module.exports = route