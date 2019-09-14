const express = require ('express'); 
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');  //permitir acesso externo.
//Inicializando o App.
const app = express();
app.use(express.json()); //permitir que envie dados no formato json pra app.
app.use(cors());

//iniciando o data base.
//se tiver user@password
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);

//registra o models -> Usando o requireDir ele faz isso automaticamente
requireDir('./src/models/');


// Res, resposta do backend.
//Req, requisição.


//Rotas
app.use('/api',require('./src/routes'));


app.listen('3001'); // Ouvir a porta 3001.