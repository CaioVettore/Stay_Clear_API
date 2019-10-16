//Configurações para o nosso banco

module.exports = {
    dialect:'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'stay-clear',
    define:{
        timestamps:true,
        underscored:true,
        underscoredAll:true
    }


}