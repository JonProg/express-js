const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');


app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,'public')));

/*
A pasta public é automaticamente colocada no diretorio de pastas do servidor
fazendo com que pareça que as views estão dentro da pasta public facilitando
na hora de colocar os caminhos dos aquivos estáticos
*/

app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine','ejs'); //Serve para adicinar a logica do js no html

app.use(routes);

app.listen(3000,()=>{
    console.log('Acess http://localhost:3000');
    console.log('Server online on port 3000...');
});