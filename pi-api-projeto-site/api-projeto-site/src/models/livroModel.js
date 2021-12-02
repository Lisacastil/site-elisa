var database = require("../database/config")

function listar(id_usuario) {
    console.log("ACESSEI O LIVRO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM livro where fk_usuario = '${id_usuario}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUsuario, titulo, autor, genero, comentario, avaliacao) {
    console.log("ACESSEI O LIVRO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, titulo, autor, genero, comentario, avaliacao);
    var instrucao = `
        INSERT INTO livro (fk_usuario, titulo, autor, genero, comentario, avaliacao, data_registro) 
        VALUES ('${idUsuario}', '${titulo}', '${autor}', '${genero}', '${comentario}', '${avaliacao}', now());
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
};