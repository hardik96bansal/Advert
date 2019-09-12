const Driver = require('../models/drivers.model')

exports.createDriver = (driver) => {
    const newDriver = new Driver(driver)
    return newDriver.save()
}