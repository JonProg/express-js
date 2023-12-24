const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `);
});

app.post('/',(req,res) => {
    let value = req.body.nome; //Deve ser o mesmo nome que está no 'name' do input
    res.send(`Valor escrito -> ${value}`);
})

app.get('/cars/:idCar?',(req,res) => {
    // /cars/1
    // /cars/?chave=valor&chave=valor
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.idCar)
});

app.listen(3000,()=>{
    console.log('Acess http://localhost:3000')
    console.log('Server online on port 3000...')
})