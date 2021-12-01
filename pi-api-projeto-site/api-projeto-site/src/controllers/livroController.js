var livroModel = require("../models/livroModel");

var sessoes = [];

function testar (req, res) {
    console.log("ENTRAMOS NA livroController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    livroModel.listar()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function cadastrar(req, res) {
    var titulo = req.body.titulo;
    var autor = req.body.autor;
    var genero = req.body.genero;
    var comentario = req.body.comentario;
    var avaliacao = req.body.avaliacao;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        livroModel.cadastrar(titulo, autor, genero, comentario, avaliacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,   
    testar
}