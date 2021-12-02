var database = require("../database/config")

function totalLivrosUnicos() {
    console.log("ACESSEI O METRICAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function totalLivrosUnicos()");
    var instrucao = `
        SELECT count(distinct titulo) as total from livro;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function mediaAvaliacao() {
    console.log("ACESSEI O METRICAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mediaLivrosPorUsuario()");
    var instrucao = `
        SELECT avg(avaliacao) as media from livro;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function generoMaisLido() {
    console.log("ACESSEI O METRICAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function generoMaisLido()");
    var instrucao = `
        SELECT genero, count(titulo) from livro group by genero order by count(titulo) desc;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    totalLivrosUnicos,
    mediaAvaliacao,
    generoMaisLido
};