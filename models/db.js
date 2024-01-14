const Sequelize = require("sequelize")

// conexão com o bd Mysql
const sequelize = new Sequelize("sistemadecadastro","root","Di@blo13",{
    host:"localhost",
    dialect:"mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
