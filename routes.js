const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const carController = require('./controllers/carController')

route.get('/',homeController.homePage);
route.post('/',homeController.displayValue);

route.get('/cars/:idCar?',carController.homePage)


module.exports = route;