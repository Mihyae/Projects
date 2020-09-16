//Servidor
const express = require("express");
//Utilizar a pasta public como raiz
const server = express();
const {
    pageLanding,
    pageStudy,
    pageGiveClasses, 
    saveClasses
  } = require('./pages')

//configurar nunjucks (tenplate engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//Inicio e configuração do servidor
server
  //receber os dados do req.body
  .use(express.urlencoded({extended: true}))

  //configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))

  //rotas de aplicação
  //Função arraw: uma função curta ()=> {}
  //(req, res) faz requisição e envia respostas. ex: formulario
  .get("/", pageLanding)
  //Mostra o conteudo de /study
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)

  //start do servidor
  .listen(5500);

// require('express')()
// .get("/", function(){

// })
// .listen(5500)

//console.log(__dirname) : retorna o diretorio C:\Users\Milena\Desktop\Study\Programação\Rocketseat\NLW2\discovery\src
//console.log(__dirname)

// Alternativa para:
// .get("/study", (req, res) => {
//     //return res.send("Study")
//     return res.sendFile(__dirname + "/views/Study.html")
// })

// //Criar uma função e chamá-la no get dps
// function pageStudy(req, res){
//     return res.sendFile(__dirname + "/views/study.html")
// }
// .get("/", pageStudy())
