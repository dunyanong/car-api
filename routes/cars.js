// routes/cars.js
const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');

router.route('/')
  .get(carsController.getCars);

router.route('/')
  .post(carsController.createCar);

router.route('/:carId')
  .get(carsController.getCar);
 
router.route('/:carId')
    .get(carsController.getCar);

router.route('/:carId')    
    .put(carsController.updateCar);

router.route('/:carId')
    .delete(carsController.deleteCar);

module.exports = router;
