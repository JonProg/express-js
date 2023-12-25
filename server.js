const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');


app.use(express.urlencoded({extended:true}));
app.set(express.static(path.resolve(__dirname,'public')))

app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine','ejs'); //Serve para adicinar a logica do js no html

app.use(routes);


app.listen(3000,()=>{
    console.log('Acess http://localhost:3000');
    console.log('Server online on port 3000...');
});