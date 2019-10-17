//Configurações para o nosso banco

module.exports = {
    dialect:'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'stay-clear',
    define:{
        timestamps:true, //Ele cria created_at e update_at
        underscored:true,   //Ele altera o padrão de nome das tabelas para underscored
        underscoredAll:true //Ele altera o padrao de nome das colunas para underscored
    }


}