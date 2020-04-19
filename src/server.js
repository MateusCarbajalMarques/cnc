const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://teste:mcm123456@cluster0-lxuz5.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

// req.query = Acessar query params(para filtro)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessor corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);


app.listen(process.env.PORT || 3333);