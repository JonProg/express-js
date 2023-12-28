require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
//mongoose.set('strictQuery', true);

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {
        app.emit('connected');
    })
    .catch(e => console.log(e)); 

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const {middlewareGlobal} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,'public')));

/*
A pasta public é automaticamente colocada no diretorio de pastas do servidor
fazendo com que pareça que as views estão dentro da pasta public facilitando
na hora de colocar os caminhos dos aquivos estáticos
*/

const sessionOptions = session({
    secret:'SHA256SeY2p60TZxzbjCi+pP2hCqYlg1d3CPMdtQEuOnKV8Pg',
    store:new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60*24*7,
        httpOnly:true
    }
});

app.use(sessionOptions)
app.use(flash());

app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine','ejs'); //Serve para adicinar a logica do js no html

app.use(middlewareGlobal);
//Utilizando um middleware global que é ativado toda vez que uma requisão é feita

app.use(routes);
 
app.on('connected',() => {
    app.listen(3000,()=>{
        console.log('Acess http://localhost:3000');
        console.log('Server online on port 3000...');
    });
    }
);
