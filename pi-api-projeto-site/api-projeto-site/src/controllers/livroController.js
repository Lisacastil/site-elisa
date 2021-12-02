var livroModel = require("../models/livroModel");

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.listar(idUsuario)
    .then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log(
                "Houve um erro ao buscar os livros: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var titulo = req.body.titulo;
    var autor = req.body.autor;
    var genero = req.body.genero;
    var comentario = req.body.comentario;
    var avaliacao = req.body.avaliacao;

    if (idUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else if (titulo == undefined) {
        res.status(400).send("O título do livro está undefined!");
    } else if (autor == undefined) {
        res.status(400).send("O autor está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("O genero está undefined!");
    } else if (avaliacao == undefined) {
        res.status(400).send("A avaliacao está undefined!");
    } else {
        livroModel.cadastrar(idUsuario, titulo, autor, genero, comentario, avaliacao)
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
    cadastrar,
    listar
}