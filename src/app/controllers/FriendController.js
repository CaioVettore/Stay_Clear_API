const Friend = require('../models/Friend')
const User = require('../models/User')

class FriendController {

    async index(req, res) {
        const friends = await Friend.findAll({
            where: {
                id_usuario: req.userId

            }
        })
        return res.json(friends)

    }

    async store(req, res) {

        const { id_friend } = req.body

        const friendExists = await User.findByPk(id_friend)

        if (!friendExists) {
            return res.json({ erro: "Usuario não existe!" })
        }

        //validação para não adicionar o usuario logado
        if (req.userId === id_friend) {
            return res.json({ error: "Você não pode se adicionar!" })
        }

        const addFriend = await Friend.create({
            id_usuario: req.userId,
            id_friend: id_friend
        })

        return res.json(addFriend)
    }
}
module.exports = new FriendController()