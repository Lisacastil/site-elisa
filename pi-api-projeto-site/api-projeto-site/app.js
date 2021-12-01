process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3333;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var livrosRouter = require("./src/routes/livro");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/livros", livrosRouter);
// 2) No arquivo de Rotas de livros, criar as rotas: cadastrar, excluir, listar. Pode copiar outro arquivo de rotas para usar como exemplo
// 3) Criar o Controller de livros, onde estaram as funções de cadastrar, excluir e listar. Validar campos, e se estiverem OK, chamar o 
//    Model para gravar/ler/excluir no banco de dados.

app.listen(PORTA, function() {                                      // Aqui tinha um erro. A porta no console.log estava diferente 
                                                                    // da porta que estava sendo usada
                                                                    // estava http://localhost:${3000}
    console.log(`Servidor do site está rodando rodando: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});