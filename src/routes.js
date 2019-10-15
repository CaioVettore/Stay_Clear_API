const express = require('express')
const routes = express.Router()

//criamos uma rota para retornar JSON 
routes.get('/users', (req, res) => {

    return res.json({
        usuario: 'Juju',
        idade: 25,
        profiss: 'developer',
        amigos: ['Anderson', 'Japa', 'Riquinho', 'Vettore', 'Ana', 'Eva', 'JenniferPJL'],
        ativo: false,
    }
    )

})
//rota inicials
routes.get('/', (req, res) => {
    return res.send('OLÁ JUJULIANO!!')
})

//Parametros
routes.get('/users/:name', (req, res) => {
    const name = req.params.name
    
    return res.send(name)
})

module.exports = routes