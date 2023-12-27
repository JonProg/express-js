const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const carController = require('./src/controllers/carController')

/*
Um middleware para uma rota especifica posso coloca-lo no inicio meio ou fim 

function myMiddleware(req,res,next){ 
    req.session = {theme:"Dark",textColor:"Purple"} Criando sessions
    console.log()
    console.log('Estou na frente')
    console.log()
    next();
}*/
// console.log(`Tema:${req.session.theme} | CorTexto:${req.session.textColor}`)

route.get('/',homeController.homePage);
route.post('/',homeController.displayValue);

route.get('/cars/:idCar?',carController.homePage)


module.exports = route;