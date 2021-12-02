var metricasModel = require("../models/metricasModel");

function totalLivrosUnicos(req, res) {
    metricasModel.totalLivrosUnicos()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
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

function mediaAvaliacao(req, res) {
    metricasModel.mediaAvaliacao()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
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

function generoMaisLido(req, res) {
    metricasModel.generoMaisLido()
    .then(function (resultado) {
        console.log(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado[0].genero);
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

module.exports = {
    totalLivrosUnicos,
    mediaAvaliacao,
    generoMaisLido
}