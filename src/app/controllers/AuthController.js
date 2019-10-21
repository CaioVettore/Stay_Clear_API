const jwt = require('jsonwebtoken')
const User = require('../models/User')
class AuthCrontroller {

    async store(req, res) {


        //Verificando se existe uma conta com esse email
        const userExists = await User.findOne({ where: { email: req.body.email } })

        // Operador NOT(!), se o resultado for verdadeiro ele retorna falso
        if (!userExists) { return res.json({ error: "Usuário não possui cadastro na aplicação!" }) }

        //verificando a senha do usuario
        if (req.body.password !== userExists.password) {
            return res.json({ error: "senha incorreta" })
        }


        return res.json({
            userExists,
            token: jwt.sign({ id: userExists.id }, '94a08da1fecbb6e8b46990538c7b50b2', {
                expiresIn: '7d'
            })
        })


    }
}

module.exports = new AuthCrontroller()