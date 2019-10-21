const { Op } = require('sequelize')
const User = require('../models/User')

class UserController {
    async index(req, res) {
        const users = await User.findAll({
            where: {
                email: {
                    [Op.ne]: 'caiozinhogameplay@gmail.com'
                }
            }
        })
        return res.json(users)
    }     // GET => Me retorna todos usuarios
    // show() { }      // GET => Me retorna somente um usuario

    // POST => Criamos usuários
    async store(req, res) {

        //Verificando se existe uma conta com esse email
        const userExists = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        // se usuario existe 
        if (userExists) {
            return res.json({
                erro: "Usuário já existe"
            })
        }

        //Verifica se o usuario digitou uma senha de 6 caracteres
        if (req.body.password.length < 5) {

            return res.json({ error: "Senha deve ter no minimo 6 caracteres!" })
        }


        //return res.json(userExists)

        const user = await User.create(req.body)

        return res.json(user)
    }
    update() { }    // PUT => Alteramos alguma informação do usuario
    delete() { }    //DELETE => Deletar um usuario
}
module.exports = new UserController