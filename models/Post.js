const DB = require("./DB")

const Post = DB.sequelize.define("usuario",{
    Nome:{
        type:DB.Sequelize.STRING
    },
    Idade:{
        type: DB.Sequelize.STRING
    },
    CPF:{
        type: DB.Sequelize.STRING
    },
    Cep:{
        type: DB.Sequelize.INTEGER
    },
    Endereço:{
        type: DB.Sequelize.STRING
    },
    Numero:{
        type: DB.Sequelize.INTEGER
    },
    Complemento:{
        type: DB.Sequelize.STRING
    },
    Bairro:{
        type: DB.Sequelize.STRING
    },
    Cidade:{
        type: DB.Sequelize.STRING
    },
    Estado:{
        type: DB.Sequelize.STRING
    },
    Telefone:{
        type: DB.Sequelize.STRING
    },
    Email:{
        type: DB.Sequelize.STRING
    }
 })

//Post.sync({force: true})

module.exports = Post