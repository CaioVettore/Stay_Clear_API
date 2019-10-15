//importação do express
const express = require('express')

//chamamos a função do express e definimos em uma constante
const app = express()

//criamos uma rota para retornar JSON 
app.get('/users', (req, res) => {

    return res.json({
        usuario: 'Juju',
        idade: 21,
        profiss: 'developer',
        amigos: ['Anderson', 'Japa', 'Riquinho', 'Vettore', 'Ana', 'Eva', 'JenniferPJL'],
        ativo: false,
    }
    )

})
//Iniciando a aplicação
app.listen(3334)