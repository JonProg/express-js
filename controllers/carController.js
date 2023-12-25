exports.homePage = (req,res) => {
    // /cars/1
    // /cars/?chave=valor&chave=valor
    console.log(req.params)
    //console.log(req.query)
    if(req.params.idCar){
        res.send(`Carro escolhido = ${req.params.idCar}`)
    }else{
        res.send('|--Bem vindo a sua lista de carros--|')
    }
};