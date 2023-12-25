const express = require('express');
const routes = require('./routes')
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(routes)

app.listen(3000,()=>{
    console.log('Acess http://localhost:3000')
    console.log('Server online on port 3000...')
})