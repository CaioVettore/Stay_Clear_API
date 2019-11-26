const Sequelize = require('sequelize')

const databaseConfig = require('../config/database')

//models
const User = require('../app/models/User')
const Friend = require('../app/models/Friend')

//Carregar nossos models
class Database {
    constructor() {

        this.init()
    }

    init() {
        this.connections = new Sequelize(databaseConfig)

        User.init(this.connections)
        Friend.init(this.connections)

    }
}

module.exports = new Database()
