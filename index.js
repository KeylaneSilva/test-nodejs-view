const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//CONFIG
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

app.get('/', function(req, res){
    res.render('inicio');
})

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
})