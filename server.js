const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `);
});

app.post('/',(req,res) => {
    res.send('Recebi o formulário')
})

app.get('/contact',(req,res) => {
    res.send('Thank you for contact')
});

app.listen(3000,()=>{
    console.log('Acess http://localhost:3000')
    console.log('Server online on port 3000...')
})