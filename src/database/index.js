const Sequelize = require('sequelize')

const databaseConfig = require('../config/database')

//models
const User = require('../app/models/User')
const Categories = require('../app/models/category')

//Carregar nossos models
class Database {
    constructor() {

        this.init()
    }

    init() {
        this.connections = new Sequelize(databaseConfig)

        User.init(this.connections)
        Categories.init(this.connections)


    }
}

module.exports = new Database()
