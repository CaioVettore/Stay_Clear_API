const express = require('express')
const routes = express.Router()

//Nossos controllers
const UserController = require('./app/controllers/UserController')


/**
 * Metodos http
 * GET = trazer algo
 * POST = Cadastrar algo
 * PUT = Atualizar algo
 * DELETE = Deletar algo 
 */

 /**
  * Nossas rotas
  */
    routes.post('/user',UserController.store)


  //rotas pra cadastro de novos usuarios


// routes.post('/users',async (req, res) => {

//     const user = await User.create(req.body)

//     return res.json(user)
// })

// //criamos uma rota para retornar JSON 
// routes.get('/users', (req, res) => {

//     return res.json({
//         usuario: 'Juju',
//         idade: 25,
//         profiss: 'developer',
//         amigos: ['Anderson', 'Japa', 'Riquinho', 'Vettore', 'Ana', 'Eva', 'JenniferPJL'],
//         ativo: false,
//     }
//     )

// })
// //rota inicials
// routes.get('/',(req, res) => {



//     return res.json(user)
// })

// //Parametros
// routes.get('/users/:name', (req, res) => {
//     const name = req.params.name

//     return res.send(name)
// })

// routes.post('/categories', async (req, res) => {

//     const categories = await Categories.create(req.body)

//     return res.json(categories)
// })



module.exports = routes



