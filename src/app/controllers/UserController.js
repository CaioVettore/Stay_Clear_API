const User = require('../models/User')

class UserController {
    index() { }     // GET => Me retorna todos usuarios
    show() { }      // GET => Me retorna somente um usuario

    // POST => Criamos usuários
    async store(req, res) {
        const user = await User.create(req.body)

        return res.json(user)
    }
    update() { }    // PUT => Alteramos alguma informação do usuario
    delete() { }    //DELETE => Deletar um usuario
}
module.exports = new UserController