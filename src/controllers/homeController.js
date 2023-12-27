exports.homePage = (req,res) => {
    res.render('index');//Fazendo a redenrização do index.ejs
    return;
};

exports.displayValue = (req,res) => {
    let value = req.body.nome; //Deve ser o mesmo nome que está no 'name' do input
    res.send(`Valor escrito -> ${value}`);
    return;
}