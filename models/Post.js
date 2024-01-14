const DB = require("./DB")

const Post = DB.sequelize.define("Login",{
    titulo:{
        type:DB.Sequelize.STRING
    },
    conteudo:{
        type: DB.Sequelize.STRING
    }
})

//Post.sync({force: true})

module.exports = Post