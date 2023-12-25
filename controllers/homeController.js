exports.homePage = (req,res) => {
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `);
};

exports.displayValue = (req,res) => {
    let value = req.body.nome; //Deve ser o mesmo nome que está no 'name' do input
    res.send(`Valor escrito -> ${value}`);
}