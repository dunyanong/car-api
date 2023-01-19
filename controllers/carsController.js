// controllers/carsController.js
const Car = require('../models/car');

exports.getCars = (req, res) => {
  Car.find({}, (err, cars) => {
    if (err) {
      res.send(err);
    }
    res.json(cars);
  });
};

exports.createCar = (req, res) => {
  const newCar = new Car(req.body);
  newCar.save((err, car) => {
    if (err) {
      res.send(err);
    }
    res.json(car);
  });
};

exports.getCar = (req, res) => {
  Car.findById(req.params.carId, (err, car) => {
    if (err) {
      res.send(err);
    }
    res.json(car);
  });
};

exports.updateCar = (req, res) => {
  Car.findOneAndUpdate({ _id: req.params.carId }, req.body, { new: true }, (err, car) => {
    if (err) {
      res.send(err);
    }
    res.json(car);
  });
};

exports.deleteCar = (req, res) => {
  Car.remove({ _id: req.params.carId }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Car successfully deleted' });
  });
};
