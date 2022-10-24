const faker = require('faker');

class Company {
    constructor() {
        this._id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

module.exports = Company