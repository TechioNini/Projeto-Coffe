const Sequelize = require("sequelize");
const sequelize =new Sequelize("sistemadecadastro","root","Di@blo13",{
    host:"localhost",
    dialect:"mysql"
})


const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja Bem vindo ao meu app");
});

app.get("/Home", function(req, res){
    res.send("bem vindo ao Home");
});

app.get("/About", function(req, res){
    res.send("Pagina About");
});

app.get("/Coffee", function(req, res){
    res.send("Pagina Coffee");
});


app.get("/Menu", function(req, res){
    res.send("Pagina Menu");
});

app.get("/Login", function(req, res){
    res.send("Pagina Login");
});



// todos os cod acima desta linha Localhost:8080
app.listen(8080);
