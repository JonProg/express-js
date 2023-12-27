/*

Maneira de criar um objeto

const HomeModel = require('../models/HomeModel');

HomeModel.create({
    title:'The war lord',
    description:'The best movie'
})
    .then(data => console.log(data))
    .catch(e => console.log(e))

Procurar um objeto

HomeModel.find()
    .then(data => console.log(data));
    
*/

exports.homePage = (req,res) => {
    res.render('index');//Fazendo a redenrização do index.ejs
    return;
};

exports.displayValue = (req,res) => {
    let value = req.body.nome; //Deve ser o mesmo nome que está no 'name' do input
    res.send(`Valor escrito -> ${value}`);
    return;
}