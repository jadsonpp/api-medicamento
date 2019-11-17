const express = require ('express'); 
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');  //permitir acesso externo.
const bodyParser = require('body-parser');
//Inicializando o App.

const app = express();
app.use(express.json()); //permitir que envie dados no formato json pra app.
app.use(cors());
app.use(bodyParser.json())
//iniciando o data base.
//se tiver user@password
mongoose.connect(
    'mongodb+srv://user:user123@cluster0-sks0r.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true}
);

//registra o models -> Usando o requireDir ele faz isso automaticamente
requireDir('./src/models/');



//Rotas
app.use('/api',require('./src/routes'));


app.listen(process.env.PORT || 9001); // Ouvir a porta 3000.