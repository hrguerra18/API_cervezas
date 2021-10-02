var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
res.json({mensaje: 'Hola mundo'})
})

app.get('/cervezas', (req,res)=>{
    res.json({mensaje: 'A beber cerveza'})
})

app.post('/',(req,res)=>{
    res.json({mensaje: 'Metodo post'})
})

app.del('/',(req,res)=>{
    res.del({mensaje: 'Metodo delete'})
})

app.listen(port,()=>{
    console.log('API escuchando en el puerto: ' + port)
})