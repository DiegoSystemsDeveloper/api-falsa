const express = require('express')

class Server {
    constructor() {
        this.app = express()
        this.port = 3000
        this.usersPath = '/api/users'
        this.companiesPath = '/api/companies'
        this.userCompanyPath = '/api/user/company'

        this.middlewares()
        this.routes()
    }

    //middlewares
    middlewares() {
        this.app.use(express.json())
    }

    //routes
    routes() {
        this.app.use(this.userCompanyPath, require('../routes/user.company.routes'))
        this.app.use(this.usersPath, require('../routes/users.routes'))
        this.app.use(this.companiesPath, require('../routes/companies.routes'))
    }

    //listen
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`)
        })
    }
}

module.exports = Server