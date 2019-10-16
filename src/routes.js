const express = require('express')
const User = require('./app/models/User')
const routes = express.Router()
/**
 * GET = trazer algo
 * POST = Cadastrar algo
 * PUT = Atualizar algo
 * DELETE = Deletar algo 
 */


//rotas pra cadastro de novos usuarios
routes.post('/users',async (req, res) => {

    const user = await User.create(req.body)

    return res.json(req.body)
})

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
routes.get('/',(req, res) => {



    return res.json(user)
})

//Parametros
routes.get('/users/:name', (req, res) => {
    const name = req.params.name

    return res.send(name)
})

module.exports = routes