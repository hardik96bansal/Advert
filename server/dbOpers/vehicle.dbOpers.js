const Vehicle = require('../models/vehicle.model')

exports.createVehicle = (carData) => {
    const newCar = new Car(carData)
    return newCar.save()
}