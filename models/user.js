const faker = require('faker')

class User {
    constructor() {
        this._id = faker.datatype.uuid()
        this.first_name = faker.name.firstName()
        this.last_name = faker.name.lastName()
        this.phone = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.datatype.uuid()
    }
}

module.exports = User