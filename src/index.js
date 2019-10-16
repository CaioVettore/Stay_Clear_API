//importação do express
const express = require('express')
const routes = require('./routes')
require('./database')

//chamamos a função do express e definimos em uma constante
const app = express()

app.use(express.json()) // Usando JSON 
app.use(routes)

//Iniciando a aplicação
app.listen(3334)