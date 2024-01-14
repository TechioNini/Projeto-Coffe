const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post")


//config
  // Template Engine
  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
  app.set("view engine", "handlebars")
// Body parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())


//Rotas
app.get("/cad", function(req, res){
    res.render('formulario')
})

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

app.get("/Cadastro", function(req, res){
    res.send("Pagina Cadastro");
});

app.get("/CardRegistration", function(req, res){
    res.send("Pagina checout");
});
// todos os cod acima desta linha Localhost:8080
app.listen(8080);
